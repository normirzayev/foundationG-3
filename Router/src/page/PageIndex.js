import React from "react";
import Home from "./Home";
import About from "./About";
import ContactUS from "./ContactUS";
import Setting from "./Setting";
import { Route, Routes } from "react-router-dom";
import Service from "./Service";
import Blog from "./Blog";
import NotFoun from "./NotFoun";

export default function PageIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUS />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFoun />} />
    </Routes>
  );
}
