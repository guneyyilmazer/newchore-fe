"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const mobileFilterMenu = useSelector(
    (shop: any) => shop.app.mobileFilterMenu
  );
  return (
    <div>
      {!mobileFilterMenu && (
        <div className="p-6 bg-white flex flex-col xl:flex-row justify-center gap-6">
          <div className="p-8 w-full xl:w-auto 2xl:w-1/3 flex flex-col justify-center bg-slate-800 rounded-[1.25rem]">
            <div className="w-10/12">
              <div className="flex flex-col gap-5">
                <div className="text-white text-2xl lg:text-4xl font-bold lg:leading-[3rem]">
                  Built for you to hire the right person, for the right job.
                </div>
                <div className="lg:w-8/12 text-gray-100 font-light">
                  Hire from over 1000 people for variety of tasks. Find the
                  right fit for your job using New Chore.
                </div>
              </div>
              <div className="mt-12 md:mt-8">
                <Link
                  href="/auth"
                  className="px-10 py-3.5 bg-green-600 rounded-lg shadow text-white text-sm text-center gap-1"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-11/12 h-full flex items-center flex-col bg-emerald-100 bg-opacity-70 rounded-[20px]">
            <div className="w-11/12">
              <div className="grid grid-cols-2 gap-20 lg:gap-0 lg:grid-cols-5 mt-12 justify-between">
                <div className="flex flex-col">
                  <div className="text-slate-800 text-sm font-bold mb-4">
                    Product
                  </div>
                  <div className="flex flex-col text-gray-600 text-sm gap-4">
                    <div>About</div>
                    <div>Changelog</div>
                    <div>Documentation</div>
                    <div>Why New Chore</div>
                    <div>Careers</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-slate-800 text-sm font-bold mb-4">
                    Community
                  </div>
                  <div className="flex flex-col text-gray-600 text-sm gap-4">
                    <div>New Chore Community</div>
                    <div>Discord</div>
                    <div>Help Center</div>
                    <div>Get Support</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-slate-800 text-sm font-bold mb-4">
                    Resources
                  </div>
                  <div className="flex flex-col text-gray-600 text-sm gap-4">
                    <div>New Chore Blog</div>
                    <div>Webinars</div>
                    <div>Podcasts</div>
                    <div>Podcasts</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-slate-800 text-sm font-bold mb-4">
                    Legal
                  </div>
                  <div className="flex flex-col text-gray-600 text-sm gap-4">
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                  </div>
                </div>
                <div className="hidden lg:flex">
                  <div className="w-6 h-6 lg:w-10 lg:h-10">
                    <Image
                      width={50}
                      height={50}
                      src={"/svg/logo.svg"}
                      alt=""
                    />
                  </div>
                  <div className="text-green-950 lg:text-xl font-bold">
                    New Chore
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-10 gap-5 justify-center items-center">
                <div className="flex justify-center items-center gap-2">
                  <div className="text-slate-800 text-sm font-medium">
                    Contact us
                  </div>
                  <span className="text-green-600 text-sm font-medium underline">
                    support@newchore.com
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-slate-800 text-sm font-bold">
                    Follow Us
                  </div>
                  <div className="flex text-lg gap-2">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
                <div className="flex items-center gap-1 lg:mt-7 lg:mb-20 lg:hidden">
                  <div className="w-6 h-6 lg:w-10 lg:h-10">
                    {" "}
                    <Image
                      width={50}
                      height={50}
                      src={"/svg/logo.svg"}
                      alt=""
                    />
                  </div>
                  <div className="text-green-950 lg:text-xl font-bold">
                    New Chore
                  </div>
                </div>
              </div>
              <div className="text-center mt-4 mb-2 text-slate-800 text-sm">
                © {date.getFullYear()} with New Chore
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
