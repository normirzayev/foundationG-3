import React from "react";
import "./style/style.css";
// import Navbar from "./components/navbar/Navbar";
import PageIndex from "./page/PageIndex";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="container">
      <ToastContainer autoClose="1500" />
      {/* <Navbar /> */}
      <PageIndex />
    </div>
  );
}
export default App;
