import React, { useContext } from 'react'
import { ContextData } from '../context/Context';

export default function LocalTable() {

  let { localData, handleDelete, handleEdit, countChangeLocal } = useContext(ContextData)

  return (
    <div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>nomi</th>
            <th>rangi</th>
            <th>narxi</th>
            <th>rasm</th>
            <th colSpan={3}>soni</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {localData.length > 0 ? (
            localData.map((elem, i) => {
              return (
                <tr key={elem.id}>
                  <th> {i + 1}</th>
                  <td> {elem?.nomi} </td>
                  <td> {elem?.rangi} </td>
                  <td>
                    <del>{parseFloat(elem?.narxi).toFixed(2)}$</del>
                  </td>
                  <td>
                    <figure>
                      <img src={elem?.rasm} alt={elem?.nomi} />
                    </figure>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={(e) => countChangeLocal(e, elem.id)}
                      name="minus"
                    >
                      minus
                    </button>
                  </td>
                  <td>{elem?.soni}</td>
                  <td>
                    <button
                      className="btn btn-outline-info"
                      onClick={(e) => countChangeLocal(e, elem.id)}
                      name="plus"
                    >
                      plus
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleEdit(elem)}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(elem.id)}
                    >
                      del
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th colSpan={100}>no date...</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
