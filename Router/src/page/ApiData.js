import React, { useContext } from "react";
import { ContextData } from "../context/Context";
import Loading from "../components/loading/Loading";

export default function ApiData() {
  let { apiData, load } = useContext(ContextData);
  return (
    <div className="gridBox">
      <Loading load={load} />
      {apiData?.products?.map((elem, index) => (
        <div className="card" key={elem.id}>
          <img
            src={elem?.thumbnail}
            className="card-img-top"
            alt={elem?.title}
            title={elem.title}
          />
          <div className="card-body">
            <h2 className="card-title">{elem?.title}</h2>
            <h5 className="card-title">{elem?.brand}</h5>
            <p className="card-text">{elem?.category}</p>
            <p className="card-text">{elem?.price}</p>

            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <div style={{ textAlign: "right" }}>{index + 1}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
