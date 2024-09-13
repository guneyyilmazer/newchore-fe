import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
const HireTheseFreelancers = ({ className }: { className?: string }) => {
  const list = [
    {
      slogan: "Leaky faucet? They`ll fix it!",
      title: "Plumbers",
      href: "plumbing",
      src: "/jpeg/plumber.jpeg",
    },
    {
      slogan: "Relocate stress free with pros.",
      title: "Movers",
      href: "moving",
      src: "/jpeg/mover.jpeg",
    },
    {
      slogan: "Sparkling spaces everytime.",
      title: "Cleaners",
      href: "cleaning",
      src: "/jpeg/cleaner.jpeg",
    },
    {
      slogan: "Don't have time to walk your dogs?",
      title: "Dog Walkers",
      href: "dogWalking",
      src: "/jpeg/dog-walker.jpg",
    },
  ];
  const Card = ({
    slogan,
    title,
    href,
    src,
  }: {
    slogan: string;
    title: string;
    href: string;
    src: string;
  }) => (
    <Link href={`/freelancers?type=${href}`} className="relative mr-2 md:m-0">
      <div className="text-white z-20 absolute m-7 text-sm">{slogan}</div>
      <div className="text-white z-20 absolute mt-14 m-7 text-2xl font-bold leading-9">
        {title}
      </div>
      <div className="w-12 flex z-20 justify-center items-center m-4 absolute bottom-0 text-white right-0 h-12 bg-white bg-opacity-5 rounded-full border border-white border-opacity-5 backdrop-blur-[9px]">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="w-[18.75rem] h-[25rem] bg-black z-10 bg-opacity-20 rounded-lg">
        <Image
          fill
          className="object-cover rounded-xl w-full h-full"
          src={src}
          alt=""
        />
      </div>
    </Link>
  );
  return (
    <div className={className}>
      <div className="mb-10 text-center text-black text-3xl font-bold leading-10">
        Hire These Freelancers and Even More
      </div>
      <div className="text-green-600 w-full flex lg:justify-end items-center font-medium">
        See All Categories
        <div className="ml-2">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="w-6 h-6 justify-center flex items-center"></div>
      <div className="flex gap-10 justify-between overflow-x-auto relative">
        {list.map((item, index) => (
          <Card
            key={index}
            src={item.src}
            title={item.title}
            slogan={item.slogan}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default HireTheseFreelancers;
