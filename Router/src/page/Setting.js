import React, { useState } from "react";
import Test from "../components/Test";
export default function Setting() {
  const [state, setState] = useState(1);
  const funClikc = () => {
    setState((prev) => prev + 1);
  };
  // let yangi = useMemo(() => {
  //   return { title: "lorem" };
  // }, []);
  // let yangi2 = useCallback((matn) => {
  //   return { title: matn };
  // }, []);

  let m1 = (k) => {
    return { title: k };
  };

  return (
    <div>
      <h1>son:{state}</h1>
      <button onClick={funClikc}> click </button>
      <hr />
      {/* <Test m1={m1} /> */}
    </div>
  );
}
