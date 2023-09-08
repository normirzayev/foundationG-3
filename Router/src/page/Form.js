export default function Form({ inputValue, getInputValue, sendFunc, getRasm }) {
  return (
    <form className="form-control w-50 m-auto mt-3" onSubmit={sendFunc}>
      <div className="mb-3">
        <label htmlFor="nomi" className="form-label">
          nomi
        </label>
        <input
          type="text"
          className="form-control"
          name="nomi"
          id="nomi"
          value={inputValue?.nomi}
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
          value={inputValue?.rangi}
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
          value={inputValue?.narxi}
          onChange={getInputValue}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="chegirma" className="form-label">
          chegirma
        </label>
        <input
          type="number"
          className="form-control"
          name="chegirma"
          id="chegirma"
          placeholder="chegirmani kirit"
          value={inputValue?.chegirma}
          onChange={getInputValue}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ombor_Son" className="form-label">
          ombor_Son
        </label>
        <input
          type="number"
          className="form-control"
          name="ombor_Son"
          id="ombor_Son"
          placeholder="ombordagi sonni kirit"
          value={inputValue?.ombor_Son}
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
          {inputValue?.id ? "edit" : "send"}
        </button>
      </div>
    </form>
  );
}
