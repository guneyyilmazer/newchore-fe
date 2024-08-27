import React from "react";
import Posts from "./posts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Posts You Have Applied To",
  description: "by yilmazer.dev",
};
const page = () => {
  return <Posts />;
};

export default page;