import React, { useEffect, useRef, useState } from "react";
import { BACKEND_SERVER_IP } from "../layout";
import Cookies from "js-cookie";

const EditDesc = ({ show, setShow, text, id }: any) => {
  const [value, setValue] = useState(text);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const handleUserKeyPress = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      setShow(!show);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  const onClickOutside = () => {
    show && setShow(false);
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  const handleClick = async () => {
    const res = await fetch(`${BACKEND_SERVER_IP}/post/changeDescription`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("Auth_Token")}`,
      },

      method: "PATCH",
      body: JSON.stringify({
        id,
        newDescription: descRef.current!.value,
      }),
    });
    const response = await res.json();
    if (!response.error) {
      alert("Description changed successfully!");
      window.location.reload();
    }
    setShow(!show);
  };
  return (
    <div className="w-[100vw] h-[100vh] absolute bg-white bg-opacity-80 left-0 top-0 flex justify-center items-center">
      <div ref={ref} className="break-words flex flex-col">
        <h3 className="text-2xl">New Description</h3>
        <textarea
          ref={descRef}
          value={value}
          className="shadow appearance-none border w-[30vw] h-72"
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button
            className="bg-green-600 mt-2 p-2 px-4 rounded-md text-white"
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDesc;
