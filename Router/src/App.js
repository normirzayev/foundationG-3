import React from "react";
import "./style/style.css";
import Navbar from "./components/navbar/Navbar";
import PageIndex from "./page/PageIndex";
import Footer from "./components/footer/Footer";
import NotFoun from "./page/NotFoun";
function App() {
  return (
    <div className="container">
      <Navbar />
      <PageIndex />
      <h1>Footer</h1>
      <Footer />
    </div>
  );
}
export default App;
