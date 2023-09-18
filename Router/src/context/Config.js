import { useContext, useEffect } from "react";
import { ContextData } from "./Context";
import axios from "axios";

export default function Config() {
  let { setLoad, setApiData } = useContext(ContextData);
  let getApi1 = async () => {
    setLoad(true);
    try {
      let o = await axios("https://dummyjson.com/products");
      setApiData(o?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setApiData(json))
    //   .finally(() => {setLoad(false);});


    // axios("https://dummyjson.com/products")
    //   .then((json) => {
    //     setApiData(json.data);
    //     console.log(json);
    //   })
    //   .finally(() => {
    //     setLoad(false);
    //   });
  };
  useEffect(() => {
    getApi1();
  }, []);
}
