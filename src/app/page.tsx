import { useEffect, useState } from "react";
import Hero from "./components/home/Hero";
import { BACKEND_SERVER_IP } from "./layout";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { user } from "./types";
import Link from "next/link";
import emilyturner from "./images/emilyturner.jpg";
import DefaultProfilePicture from "./images/default.jpeg";
import Features from "./components/home/Features";
import ForClientsAndFreelancers from "./components/home/ForClientsAndFreelancers";
import HireTheseFreelancers from "./components/home/HireTheseFreelancers";
import TopFreelancersInYourCity from "./components/home/TopFreelancersInYourCity";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "New Chore",
  description: "by yilmazer.dev",
};
export default function Home() {
  return (
    <main>
      <div className="bg-slate-800">
        <Hero className="lg:pt-16 w-10/12 2xl:w-2/3 mx-auto" />
        <Features className="mt-20 mb-10" />
        <ForClientsAndFreelancers />
      </div>
      <HireTheseFreelancers className="mx-auto w-11/12 mb-20 max-w-[88rem]" />

      <div className="w-full bg-black flex justify-center items-center relative h-[300px] md:h-[600px] bg-opacity-20">
        <div className="w-11/12">
          {" "}
          <div className="text-white 0 md:ml-[100px] py-[30px] md:py-[70px] font-bold">
            WHAT USERS ARE SAYING
          </div>
          <div className="md:w-[587px] md:ml-[100px] text-white text-lg md:text-[32px] font-bold md:leading-[44px]">
            {" "}
            “Orea was a game-changer to manage my busy schedule. I hired an
            amazing lawn technician who efficiently takes care of my lawn.”
          </div>
          <div className="text-white md:ml-[100px] my-[30px] font-bold">
            Emily Turner
          </div>
          <div className="w-full h-full left-0 top-0 absolute z-[-1]">
            <img
              src={emilyturner.src}
              className="md:w-full object-cover h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:w-12 h-12 bg-white bg-opacity-5 rounded-full border-2 border-white border-opacity-5" />
    </main>
  );
}
