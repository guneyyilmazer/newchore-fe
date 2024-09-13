import React from "react";
import forclient from "../images/forclient.png";
import forClientMobile from "../images/forClientMobile.png";
import ticksquare from "../images/tick-square.svg";
import arrowright from "../images/arrow-right.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import forClientsBg from "../images/forclientsbg.png";
import Image from "next/image";
const ForClientsList = ({ text }: { text: string }) => (
  <div className="flex gap-2 my-2 text-gray-300 text-sm">
    <Image
      width={50}
      alt="Tick Square"
      height={50}
      src={"/svgs/tick-square.svg"}
    />

    {text}
  </div>
);

const ArrowIcon = () => (
  <div className="bg-opacity-10 text-white border-white border border-opacity-10 w-14 h-14 flex justify-center items-center rounded-full bg-white">
    <FontAwesomeIcon className="w-5 h-5" icon={faArrowRight} />
  </div>
);

const Title = ({ title }: { title: string }) => (
  <h3 className="mt-6 text-4xl font-semibold">{title}</h3>
);

const ForClientsCard = () => (
  <div className="max-w-4xl py-12 bg-slate-800 flex flex-col xl:flex-row justify-between rounded-3xl">
    <div className="px-10 xl:p-0 xl:pl-10 flex flex-col justify-between">
      <div>
        <ArrowIcon />
        <Title title="For Clients" />
        <p className="mt-3 xl:w-2/3">
          New Chore lets you find and hire skilled professionals for any task at
          hand. Explore a world where your needs are met with precision.
        </p>
        <div className="xl:w-2/3 flex flex-col mt-10">
          <ForClientsList text="Gain insights before you hire. Explore detailed profiles of skilled freelancers, including reviews." />
          <ForClientsList text="Gain insights before you hire. Explore detailed profiles of skilled freelancers, including reviews." />
          <ForClientsList text="Gain insights before you hire. Explore detailed profiles of skilled freelancers, including reviews." />
        </div>
        <div></div>
      </div>
      <div>
        <button className="bg-green-600 mt-5 p-5 py-3 rounded-md text-sm">
          Discord New Chore for Clients
        </button>
      </div>
    </div>

    <div
      className="pr-5 mt-10 xl:m-0"
      style={{ background: "url(/png/forclientsbg.png)" }}
    >
      <div className="mx-auto max-w-xs xl:max-w-2xl xl:w-96">
        <Image width={500} height={500} src={"/png/forclient.png"} alt="" />
      </div>
    </div>
  </div>
);

const ForFreelancersCard = () => (
  <div className="lg:max-w-sm h-[30rem] lg:h-auto flex flex-col justify-between p-12 rounded-3xl bg-green-950">
    <div>
      <ArrowIcon />
      <Title title="For Freelancers" />
    </div>

    <div className="">
      <p className="mb-16">
        As a service provider, Orea lets you showcase your skills and connect
        with clients seeking your expertise.
      </p>
      <button className="bg-green-600 p-5 py-3 rounded-md text-sm">
        Discord New Chore for Clients
      </button>
    </div>
  </div>
);

const ForClientsAndFreelancers = () => (
  <div className="bg-white text-white flex flex-col justify-center items-center py-16">
    <div className="mb-12 flex justify-center flex-col items-center">
      <div className="text-center">THE FUTURE OF WORK</div>
      <div className="text-center text-2xl font-bold">
        Skillful Solutions, Delivered by Experts
      </div>

      <div className="px-5 2xl:p-0 flex flex-col lg:flex-row gap-5">
        <ForClientsCard />
        <ForFreelancersCard />
      </div>
    </div>
  </div>
);

export default ForClientsAndFreelancers;
