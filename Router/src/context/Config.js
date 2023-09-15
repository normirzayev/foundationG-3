import { useContext, useEffect } from "react";
import { ContextData } from "./Context";

export default function Config() {
  let { setLoad, setApiData } = useContext(ContextData);
  let getApi1 = () => {
    setLoad(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json))
      .finally(() => {
        setLoad(false);
      });
  };
  useEffect(() => {
    getApi1();
  }, []);
}
