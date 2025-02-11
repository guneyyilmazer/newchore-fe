"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoriesArray } from "../../layout";

const TrendingServicesLink = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => (
  <Link
    href={href}
    className="flex justify-around items-center h-12 px-4 hover:opacity-50 bg-white bg-opacity-5 rounded-full border border-white border-opacity-5 backdrop-blur-md opacity-80 text-white text-sm"
  >
    <span>{title}</span>
    <div className="ml-2 w-7 h-7">
      <Image
        src={"/svg/risingarrow.svg"}
        width={50}
        height={50}
        alt={`${title} icon`}
      />
    </div>
  </Link>
);

const SearchBar = ({ searchInput, setSearchInput, result }) => (
  <div className="w-full lg:w-3/4 xl:w-2/3 relative mt-8">
    <div className="flex items-center h-14 px-4 text-slate-500 text-sm bg-white rounded-full">
      <div className="flex items-center gap-3 w-6 h-6">
        <Image
          src={"/svg/search-normal.svg"}
          width={50}
          height={50}
          alt="Search icon"
        />
      </div>
      <input
        className="ml-2 flex-grow outline-none"
        placeholder="What do you need help with?"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
      />
      <button
        onClick={() =>
          window.location.replace(`/freelancers?type=${result.name}`)
        }
        className="px-6 py-2 text-white bg-green-600 rounded-full"
      >
        Search
      </button>
    </div>
    {result.displayName && (
      <div className="absolute bg-white w-full flex items-center h-12 top-14 rounded-full">
        <Link href={`/freelancers?type=${result.name}`} className="p-2 text-sm">
          {result.displayName.toUpperCase()}
        </Link>
      </div>
    )}
  </div>
);

const UserStats = ({ users }) => (
  <div className="mt-8 flex items-center">
    <div className="flex -space-x-3">
      {users.map((user, index) => (
        <div
          key={index}
          className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-2 border-white"
        >
          <Image
            src={user.src}
            width={50}
            height={50}
            alt={`User ${index + 1}`}
          />
        </div>
      ))}
    </div>
    <div className="ml-4 text-sm lg:text-base text-white">
      Join the <span className="font-bold">800+ people</span> who are using New
      Chore to hire.
    </div>
  </div>
);
const MichaelScottCard = () => (
  <div className="relative">
    <div className="">
      <img className="rounded-2xl" src="/png/michaelscott.png" alt="" />
    </div>

    <div className="absolute top-4 -right-16 p-1.5 lg:p-3.5 py-2.5 bg-white rounded-xl flex items-center gap-3">
      <img
        className="w-7 h-7 lg:w-10 lg:h-10 rounded-full"
        src="/png/michaelscott.png"
        alt=""
      />
      <div className="">
        <h3 className="font-bold">Michael Scott</h3>
        <span className="mt-0.5 text-gray-300">Auto Mechanic</span>
      </div>
    </div>

    <div className="absolute -left-16 bottom-2 p-1.5 lg:p-3.5 bg-white flex flex-col gap-1.5 rounded-xl">
      <h3 className="font-bold">Open To Work</h3>
      <div className="flex gap-4 items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={"/svg/wallet.svg"} alt="" />
          <span className="text-green-600">$75/hr</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={"/svg/briefcase.svg"} alt="" />
          <span className="text-red-600">Part-Time</span>
        </div>
      </div>
    </div>
  </div>
);

const JenniferSmithCard = () => (
  <div className="relative">
    <div className="">
      <img className=" rounded-2xl" src="/png/jennifersmith.png" alt="" />
    </div>
    <div className="absolute -left-16 bottom-2 p-1.5 lg:p-3.5 py-2.5 bg-white rounded-xl flex items-center gap-3">
      <img
        className="w-7 h-7 lg:w-10 lg:h-10 rounded-full"
        src="/png/jennifersmith.png"
        alt=""
      />
      <div className="">
        <h3 className="font-bold">Jennifer Smith</h3>
        <span className="mt-0.5 text-gray-300">Auto Mechanic</span>
      </div>
    </div>

    <div className="absolute top-4 -right-16 p-1.5 lg:p-3.5 bg-white flex flex-col gap-1.5 rounded-xl">
      <h3 className="font-bold">Open To Work</h3>
      <div className="flex gap-4 items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={"/svg/wallet.svg"} alt="" />
          <span className="text-green-600">$75/hr</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={"/svg/briefcase.svg"} alt="" />
          <span className="text-red-600">Part-Time</span>
        </div>
      </div>
    </div>
  </div>
);

const Hero = ({ className }: { className: string }) => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState({ name: "", displayName: "" });

  useEffect(() => {
    if (searchInput) {
      const res = categoriesArray.filter((item) =>
        item.name.startsWith(searchInput.charAt(0))
      );
      setResult(res.length ? res[0] : { name: "", displayName: "" });
    } else {
      setResult({ name: "", displayName: "" });
    }
  }, [searchInput]);

  const users = [
    { src: "/png/user1.png", alt: "User 1" },
    { src: "/png/user2.png", alt: "User 2" },
    { src: "/png/user3.png", alt: "User 3" },
    { src: "/png/user4.png", alt: "User 4" },
  ];

  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="">
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                Find The{" "}
                <span
                  className="px-2"
                  style={{
                    backgroundImage: `url(/png/titlebg.png)`,
                    backgroundSize: "cover",
                  }}
                >
                  Ideal Experts
                </span>{" "}
              </h1>
              <h1 className="text-3xl mt-4 lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                For Your Next Task
              </h1>
            </div>
            <p className="mt-4 max-w-xl text-white">
              From lawn care to heavy lifting, our professionals are here to
              make your tasks hassle-free. Experience the freedom to focus on
              what matters most while dedicated hands handle the rest. Your
              to-dos, their expertise.
            </p>
          </div>

          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            result={result}
          />

          <div className="mt-10 text-white text-sm font-bold">
            TRENDING SERVICES
          </div>
          <div className="flex flex-wrap md:justify-start gap-4 mt-5">
            <TrendingServicesLink
              title="CLEANING"
              href="/posts?type=cleaning"
            />
            <TrendingServicesLink
              title="PLUMBING"
              href="/posts?type=plumbing"
            />
            <TrendingServicesLink
              title="DOG WALKING"
              href="/posts?type=dogWalking"
            />
          </div>

          <UserStats users={users} />
        </div>
        <div className="w-[100vw] lg:w-1/2 overflow-hidden lg:overflow-visible">
          {" "}
          {/* 100vw is necessary cause of overflow-hidden cutting until the width*/}
          <div className="flex flex-col items-center -translate-x-12 md:-translate-x-10 xl:translate-x-0 text-[10px] md:text-xs lg:text-sm">
            <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72">
              <MichaelScottCard />
            </div>
            <div className="-translate-y-10 translate-x-24 md:translate-x-32 lg:translate-x-40 2xl:translate-x-56 w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72">
              <JenniferSmithCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
