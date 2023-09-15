import React from "react";
import "./style/style.css";
// import Navbar from "./components/navbar/Navbar";
import PageIndex from "./page/PageIndex";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Config from "./context/Config";
function App() {
  return (
    <div className="container">
      <Config /> 
      <ToastContainer autoClose="1500" />
      <PageIndex />
    </div>
  );
}
export default App;
