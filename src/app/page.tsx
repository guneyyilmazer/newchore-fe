import { useEffect, useState } from "react";
import Hero from "./components/home/Hero";
import { BACKEND_SERVER_IP } from "./layout";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { user } from "./types";
import Link from "next/link";
import DefaultProfilePicture from "./images/default.jpeg";
import Features from "./components/home/Features";
import ForClientsAndFreelancers from "./components/home/ForClientsAndFreelancers";
import HireTheseFreelancers from "./components/home/HireTheseFreelancers";
import TopFreelancersInYourCity from "./components/home/TopFreelancersInYourCity";
import { Metadata } from "next";
import WhatUsersAreSaying from "./components/home/WhatUsersAreSaying";
export const metadata: Metadata = {
  title: "New Chore",
  description: "by yilmazer.dev",
};
export default function Home() {
  return (
    <main>
      <div className="bg-slate-800">
        <div
          className="bg-[url(/png/doodles.png)]"
          style={{
            backgroundSize: "5%",
          }}
        >
          <Hero className="pt-10 lg:pt-8 lg:pb-5 w-10/12 2xl:w-2/3 mx-auto" />
        </div>
        <Features className="mt-20 mx-auto max-w-[100rem] mb-10" />
        <ForClientsAndFreelancers />
      </div>
      <HireTheseFreelancers className="mx-auto w-11/12 mb-20 max-w-[88rem]" />
      <WhatUsersAreSaying />
    </main>
  );
}
