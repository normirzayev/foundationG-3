import React, { useContext } from "react";
import { ContextData } from "../context/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaOpencart } from "react-icons/fa";
export default function Blog() {
  let { text } = useContext(ContextData);
  return (
    <div>
      <FaOpencart />
      {text}
    </div>
  );
}
