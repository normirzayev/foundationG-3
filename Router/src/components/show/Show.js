import React, { useContext } from "react";
import { ContextData } from "../../context/Context";
import { useParams } from "react-router-dom";

export default function Show() {
  let { data } = useContext(ContextData);
  let param = useParams();
  let p = data.filter((i) => +i.id === +param.id)[0];
  return (
    <>
      {p ? (
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{p?.name}</h5>
            <p className="card-text">{p?.username}</p>
            <p className="card-text">{p?.email}</p>
            <p className="card-text">{p?.address?.street}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-danger"> bunday malumot mavjud emas </h1>
        </div>
      )}
    </>
  );
}
