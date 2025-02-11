"use client";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import MessagesButton from "../MessagesButton";
import { useState } from "react";
import Image from "next/image";
const DesktopNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((shop: any) => shop.app.user);

  return (
    <div className="py-7 text-white hidden lg:flex justify-around items-center bg-slate-800">
      <Link href="/" className="flex h-10 items-center gap-1.5">
        <Image width={40} height={40} src={"/svg/logo.svg"} alt="" />
        <div className="text-xl font-bold">New Chore</div>
      </Link>
      <div className="flex h-6 justify-center items-center gap-5">
        <Link href="/posts">Jobs</Link>
        <MessagesButton />
        <Link href="/freelancers">Freelancers</Link>
        {!user.isLoggedIn && (
          <Link href="/auth/signupfreelancer">Signup As Freelancer</Link>
        )}
        {user.isLoggedIn && (
          <div
            className="flex flex-col items-center text-white relative"
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button onMouseEnter={() => setShowDropdown(true)}>
              Dashboard
            </button>
            {showDropdown && (
              <div className="absolute z-50 mt-5 rounded-xl secondary p-3">
                {user.accountType.hirer && (
                  <div className="flex flex-col items-center text-white w-32">
                    <Link className="mt-2" href="/dashboard/hirer/posts">
                      Posts Shared
                    </Link>{" "}
                  </div>
                )}
                {user.accountType.freelancer && (
                  <div className="flex flex-col items-center text-white w-32">
                    <Link className="mt-2" href={`/user?id=${user.userId}`}>
                      Profile
                    </Link>{" "}
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/appliedposts"
                    >
                      Applied Posts
                    </Link>{" "}
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/completedjobs"
                    >
                      Completed Jobs
                    </Link>{" "}
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/ongoingjobs"
                    >
                      Ongoing Jobs
                    </Link>
                    <Link
                      className="mt-2"
                      href="/dashboard/freelancer/savedposts"
                    >
                      Saved Posts
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex text-sm gap-2 justify-between">
        {!user.isLoggedIn && (
          <Link
            href="/auth"
            className="px-10 py-3 text-white rounded-xl shadow border border-white justify-center items-center"
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
            className="px-10 py-3 text-white rounded-xl shadow border border-white justify-center items-center"
          >
            Logout
          </button>
        )}
        <Link
          href="/post/create"
          className="px-10 py-3 text-white gap-2 bg-green-600 flex rounded-xl"
        >
          Create a Listing
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
