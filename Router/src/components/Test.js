import React, { memo } from "react";
import Test2 from "./Test2";

function Test({ m1 }) {
  console.log(m1('function'));
  return (
    <div>
      setting prop files
      <Test2 />
    </div>
  );
}
export default memo(Test);
