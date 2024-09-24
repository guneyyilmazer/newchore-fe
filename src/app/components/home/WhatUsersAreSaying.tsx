import Image from "next/image";
import React from "react";

export default function WhatUsersAreSaying() {
  return (
    <div className="w-full bg-black relative h-96 lg:h-[37.5rem] bg-opacity-25">
      <div className="w-11/12 mx-auto">
        {" "}
        <div className="text-white lg:ml-24 py-16 font-bold">
          WHAT USERS ARE SAYING
        </div>
        <div className="lg:ml-24 lg:w-1/2 2xl:w-1/3 text-white text-lg md:text-2xl lg:text-3xl font-bold lg:leading-[2.75rem]">
          {" "}
          “Orea was a game-changer to manage my busy schedule. I hired an
          amazing lawn technician who efficiently takes care of my lawn.”
        </div>
        <div className="text-white lg:ml-24 my-7 font-bold">Emily Turner</div>
        <div className="w-full h-full left-0 top-0 absolute overflow-hidden z-[-1]">
          <Image
            src={"/jpeg/emilyturner.jpg"}
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
