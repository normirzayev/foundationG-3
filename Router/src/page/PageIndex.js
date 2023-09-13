import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import ContactUS from "./ContactUS";
import Setting from "./Setting";
import { Route, Routes, useNavigate } from "react-router-dom";
import Service from "./Service";
import Blog from "./Blog";
import NotFoun from "./NotFoun";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Navbar from "../components/navbar/Navbar";
import Show from "../components/show/Show";
export default function PageIndex() {
  const [product, setProduct] = useState([]);
  let link = useNavigate();
  const [inputValue, setInputValue] = useState({
    nomi: "",
    rangi: "",
    narxi: "",
    rasm: "",
    soni: 0,
    chegirma: "",
    ombor_Son: "",
  });
  const clearInputValue = () => {
    setInputValue({
      nomi: "",
      rangi: "",
      narxi: "",
      rasm: "",
      soni: 0,
      chegirma: "",
      ombor_Son: "",
    });
  };
  const getInputValue = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "file") {
      setInputValue({
        ...inputValue,
        rasm: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    }
  };
  // const getRasm = (e) => {
  //   setInputValue({
  //     ...inputValue,
  //     rasm: URL.createObjectURL(e.target.files[0]),
  //   });
  // };
  const sendFunc = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    if (!inputValue?.id) {
      setProduct([
        {
          ...inputValue,
          id: Date.now(),
          chegirmaNarx:
            inputValue.narxi - (inputValue.narxi / 100) * inputValue.chegirma,
        },
        ...product,
      ]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Malumot qo'shildi",
        showConfirmButton: false,
        timer: 1500,
      });
      link("/table");
      clearInputValue();
    } else {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          setProduct(
            product.map((c) => (c?.id === inputValue?.id ? inputValue : c))
          );
          link("/table");
          clearInputValue();
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          link("/table");
          clearInputValue();
        }
      });
    }
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "yo'q, ortga",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setProduct(product.filter((c) => c.id !== id));
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  const handleEdit = (elem) => {
    link("/");
    setInputValue(elem);
  };

  // productni sonini o'zgartish
  const changeCount = (e, item) => {
    // console.log(e.target.name, ID);

    switch (e.target.name) {
      case "plus":
        if (item?.ombor_Son > item?.soni) {
          setProduct(
            product.map((o) =>
              o.id === item?.id ? { ...o, soni: o.soni + 1 } : o
            )
          );
        } else {
          toast.warn("omborda mahsulot qolmadi");
        }
        break;
      case "minus":
        if (item.soni > 0) {
          setProduct(
            product.map((o) =>
              o.id === item?.id ? { ...o, soni: o.soni - 1 } : o
            )
          );
        } else {
          toast.error("noldan kam bo'lmaydi");
        }
        break;
      default:
        break;
    }
  };
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route
          path="/"
          element={
            <Form
              inputValue={inputValue}
              getInputValue={getInputValue}
              // getRasm={getRasm}
              sendFunc={sendFunc}
            />
          }
        />
        <Route
          path="/table"
          element={
            <Table
              product={product}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              changeCount={changeCount}
            />
          }
        />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/show/:id" element={<Show />} />
      </Route>
      <Route path="*" element={<NotFoun />} />
    </Routes>
  );
}
