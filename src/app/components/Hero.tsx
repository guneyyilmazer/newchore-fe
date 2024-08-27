"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoriesArray } from "../layout";

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
        src={"/svgs/risingarrow.svg"}
        width={50}
        height={50}
        alt={`${title} icon`}
      />
    </div>
  </Link>
);

const SearchBar = ({ searchInput, setSearchInput, result }) => (
  <div className="w-full md:w-2/3 lg:w-2/5 relative mt-8">
    <div className="flex items-center h-14 px-4 text-slate-500 text-sm bg-white rounded-full">
      <div className="flex items-center gap-3 w-6 h-6">
        <Image
          src={"/svgs/search-normal.svg"}
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
        <div className="w-10 h-10 rounded-full border-2 border-white">
          <Image
            key={index}
            src={user.src}
            width={50}
            height={50}
            alt={`User ${index + 1}`}
          />
        </div>
      ))}
    </div>
    <div className="ml-4 text-white">
      Join the <span className="font-bold">800+ people</span> who are using New
      Chore to hire.
    </div>
  </div>
);

const Hero = () => {
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
    { src: "/pngs/user1.png", alt: "User 1" },
    { src: "/pngs/user2.png", alt: "User 2" },
    { src: "/pngs/user3.png", alt: "User 3" },
    { src: "/pngs/user4.png", alt: "User 4" },
  ];

  return (
    <div className="secondary py-16">
      <div className="flex flex-col items-center xl:flex-row justify-between">
        <div className="container flex flex-col items-center md:items-start">
          <div className="text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Find The{" "}
                <span
                  className="px-2"
                  style={{
                    backgroundImage: `url(/pngs/titlebg.png)`,
                    backgroundSize: "cover",
                  }}
                >
                  Ideal Experts
                </span>{" "}
              </h1>
              <h1 className="text-4xl mt-4 md:text-5xl font-bold leading-tight text-white">
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
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
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

        <div className="mt-12 flex flex-col w-11/12 md:w-1/2">
          <div className="md:w-[480px] h-[245px] relative">
            <div className="left-8 lg:left-[6px] top-0 absolute rounded-2xl shadow border border-white flex flex-col justify-end items-center ">
              <img
                className="w-48 lg:w-[252px] lg:h-64 rounded-2xl "
                src={"/pngs/michaelscott.png"}
              />
            </div>
            <div className="pl-3 pr-8 py-3 w-[195px] left-36 lg:left-[200px] top-[12px] absolute bg-white rounded-2xl shadow flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={"/pngs/michaelscott.png"}
              />
              <div className="flex flex-col">
                <div className="text-black text-sm font-bold">
                  Michael Scott
                </div>
                <div className="text-gray-400 text-sm font-light">
                  Auto Mechanic
                </div>
              </div>
            </div>
            <div className="px-4 py-3 lg:left-[-90px] top-[165px] absolute bg-white rounded-2xl shadow flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <div className="text-black text-sm font-bold">Open to Work</div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <img src={"/svgs/wallet.svg"} alt="" />
                    <div className="text-green-500 text-sm">$75/hr</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={"/svgs/briefcase.svg"} alt="" />
                    <div className="text-red-600 text-sm">Part-Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[485px] h-[245px] relative">
            <div className="right-12 lg:left-[200px] bottom-1 absolute rounded-2xl shadow border border-white flex flex-col justify-end items-center">
              <img
                className="w-48 lg:w-[252px] lg:h-64 rounded-2xl"
                src={"/pngs/jennifersmith.png"}
              />
            </div>
            <div className="pl-3 pr-8 py-3 lg:left-[70px] top-[163px] absolute bg-white rounded-2xl shadow flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={"/pngs/jennifersmith.png"}
              />
              <div className="flex flex-col text-xs lg:text-sm">
                <div className="text-black font-bold">
                  Jennifer Smith{" "}
                </div>
                <div className="text-gray-400 font-light">Plumber</div>
              </div>
            </div>
            <div className="px-4 py-3 lg:w-[190px] -right-5 lg:left-[392px] top-[29px] absolute bg-white rounded-2xl shadow flex flex-col gap-1">
              <div className="flex flex-col gap-1 text-xs lg:text-sm">
                <div className="text-black font-bold">Open to Work</div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex justify-center items-center">
                      <img src={"/svgs/wallet.svg"} alt="" />
                    </div>
                    <div className="text-green-500">$90hr</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex justify-center items-center">
                      <img src={"/svgs/briefcase.svg"} alt="" />
                    </div>
                    <div className="text-red-600">Full-Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
