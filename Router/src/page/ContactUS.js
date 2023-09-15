import React, { useRef } from "react";

export default function ContactUS() {
  let text = useRef();
  // useEffect(() => {
  // }, []);

  let handleSend = () => {
    text.current.style.cssText = `
      color:${text.current.value}
    `;
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="useRef"
          ref={text}
          // onInput={(e) => console.log(e.target.value)}
        />
        <button className="btn btn-success" type="button" onClick={handleSend}>
          send
        </button>
      </div>
    </>
  );
}
