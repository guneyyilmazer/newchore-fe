"use client";
import { faAnglesRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_SERVER_IP } from "../../layout";
import { setIsLoggedIn, setUser } from "../../features/appSlice";
import Cookies from "js-cookie";
import Auth from "../Auth";
import MessagesButton from "../MessagesButton";
import Image from "next/image";
const MobileNavbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const user = useSelector((shop: any) => shop.app.user);
  return (
    <div className="secondary">
      {!hamburgerMenu && (
        <div className="flex justify-center items-center ">
          <div className="w-10/12 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 flex justify-center items-center">
                <Image width={50} height={50} src={"/svg/logo.svg"} alt="" />
              </div>
              <div className="text-white text-xl font-bold leading-[30px]">
                New Chore
              </div>
            </Link>
            <button
              onClick={() => {
                setHamburgerMenu(true);
              }}
            >
              <img src={"/svg/hamburger-menu.svg"} alt="" />
            </button>
          </div>
        </div>
      )}
      {hamburgerMenu && (
        <div className="absolute flex flex-col items-center top-0 left-0 secondary z-[100] w-screen h-screen text-white">
          <div className="w-10/12">
            <div className="py-6 flex justify-between items-center">
              <Link
                onClick={() => setHamburgerMenu(false)}
                href="/"
                className="flex items-center"
              >
                <div className="w-10 h-10 flex justify-center items-center">
                  <Image width={50} height={50} src={"/svg/logo.svg"} alt="" />
                </div>
                <div className="text-white text-xl font-bold leading-[30px]">
                  New Chore
                </div>
              </Link>
              <button
                onClick={() => {
                  setHamburgerMenu(false);
                }}
              >
                <img src={"/svg/close-circle.svg"} alt="" />
              </button>
            </div>
            <ul className="gap-5 my-8 flex flex-col">
              <li>
                {" "}
                <Link
                  href="/posts"
                  onClick={() => setHamburgerMenu(false)}
                  className="text-center text-white"
                >
                  Jobs
                </Link>
              </li>
              {user.isLoggedIn && (
                <li onClick={() => setHamburgerMenu(false)}>
                  {" "}
                  <MessagesButton />
                </li>
              )}
              <li>
                {" "}
                <Link
                  href="/freelancers"
                  onClick={() => setHamburgerMenu(false)}
                  className="text-center text-white"
                >
                  Freelancers
                </Link>
              </li>
              {!user.isLoggedIn && (
                <li>
                  <Link
                    href="/auth/signupfreelancer"
                    className="text-white gap-1"
                  >
                    Signup As A Freelancer
                  </Link>
                </li>
              )}
              {user.accountType.hirer && (
                <li>
                  <Link className="mt-2" href="/dashboard/hirer/posts">
                    Posts Shared
                  </Link>{" "}
                </li>
              )}
              {user.accountType.freelancer && (
                <>
                  <li>
                    <Link className="mt-2" href={`/user?id=${user.userId}`}>
                      Profile
                    </Link>{" "}
                  </li>

                  <li>
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/appliedposts"
                    >
                      Applied Posts
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/completedjobs"
                    >
                      Completed Jobs
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/ongoingjobs"
                    >
                      Ongoing Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/savedposts"
                    >
                      Saved Posts
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="flex flex-col text-center gap-5">
              <Link
                href="/post/create"
                onClick={() => setHamburgerMenu(false)}
                className="px-10 py-3 gap-2 text-white bg-green-600 rounded-xl"
              >
                <div className="flex justify-center items-center gap-2">
                  Create a Listing
                  <div className="text-xs ">
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </div>
                </div>
              </Link>
              {!user.isLoggedIn && (
                <Link
                  href="/auth"
                  onClick={() => setHamburgerMenu(false)}
                  className="px-10 py-3 text-white rounded-xl shadow border border-white"
                >
                  Sign In
                </Link>
              )}
              {user.isLoggedIn && (
                <button
                  onClick={() => {
                    Cookies.remove("Auth_Token");
                    window.location.reload();
                  }}
                  className="px-10 py-3 text-white rounded-xl shadow border border-white"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
