import React, { useContext } from "react";
import { ContextData } from "../context/Context";
export default function Blog() {
  let { data, handleShow } = useContext(ContextData);
  return (
    <div className="box">
      {data.map((m, i) => {
        return (
          <div className="card" key={m.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{m?.name}</h5>
              <p className="card-text">{m?.username}</p>
              <p className="card-text">email: {m?.email}</p>
              <ul>
                <li>street: {m?.address.street}</li>
              </ul>
              <button
                href="#"
                className="btn btn-primary"
                onClick={() => handleShow(m)}
              >
                show
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
