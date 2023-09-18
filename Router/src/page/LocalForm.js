import React, { useContext, useEffect } from 'react'
import { ContextData } from '../context/Context'
import { useParams } from 'react-router-dom';
export default function LocalForm() {
  let { getInputValue, inputV, sendF, localData, setInputV } = useContext(ContextData)
  let ID_son = useParams()?.id
  console.log(localData.filter(p => p.id === +ID_son)[0]);
  useEffect(() => {
    setInputV(localData.filter(p => p.id === +ID_son)[0])
  }, [])
  return (
    <div>
      <form className="form-control w-50 m-auto mt-3"
        onSubmit={sendF}
      >
        <div className="mb-3">
          <label htmlFor="nomi" className="form-label">
            nomi
          </label>
          <input
            type="text"
            className="form-control"
            name="nomi"
            id="nomi"
            value={inputV?.nomi}
            placeholder="nomini kirit"
            onChange={getInputValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rangi" className="form-label">
            rangi
          </label>
          <input
            type="text"
            name="rangi"
            className="form-control"
            id="rangi"
            value={inputV?.rangi}
            placeholder="rangni kirit"
            onChange={getInputValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="narxi" className="form-label">
            narxi
          </label>
          <input
            type="number"
            className="form-control"
            name="narxi"
            id="narxi"
            placeholder="narxni kirit"
            value={inputV?.narxi}
            onChange={getInputValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rasm" className="form-label">
            rasm
          </label>
          <input
            className="form-control"
            type="file"
            name="rasm"
            id="rasm"
            onChange={getInputValue}
          />
        </div>
        <div className="btnSend">
          <button type="submit" className="btn btn-primary ps-3 pe-3">
            {inputV?.id ? "edit" : "send"}
          </button>
        </div>
      </form>
    </div>
  )
}
