"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface INavbarProps {}
let isActive = {
  color: "blue",
  fontWeight: "bold",
};
export default function Navbar(props: INavbarProps) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="shadow-md border-green-600 border-2 w-screen">
      <ul className="flex flex-row no-underline list-none justify-center items-center py-6 border-b-2 border-black bg-gray-200">
        <li className="mx-5">
          <Link href="/">
            <span
              className={
                pathName === "/"
                  ? "text-black font-bold text-xl"
                  : "text-gray-500"
              }
            >
              Home
            </span>
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/projects">
            <span
              className={
                pathName === "/projects"
                  ? "text-black font-bold text-xl"
                  : "text-gray-500"
              }
            >
              Projects
            </span>
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/jobs">
            <span
              className={
                pathName === "/jobs"
                  ? "text-black font-bold text-xl"
                  : "text-gray-500"
              }
            >
              Jobs
            </span>
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/about">
            <span
              className={
                pathName === "/about"
                  ? "text-black font-bold text-xl"
                  : "text-gray-500"
              }
            >
              About
            </span>
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/contact">
            <span
              className={
                pathName === "/contact"
                  ? "text-black font-bold text-xl"
                  : "text-gray-500"
              }
            >
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
