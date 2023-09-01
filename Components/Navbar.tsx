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
    <div className="shadow-md w-screen">
      <ul className="flex flex-row no-underline list-none justify-center items-center py-3 border-b-2 border-gray-500 bg-pal-darkblue">
        <li className="mx-5">
          <Link href="/">
            <span
              className={
                pathName === "/"
                ? "text-pal-lightaccent font-bold text-lg border-l-2 border-b-2 border-pal-darkaccent px-3 py-1"
                : "text-pal-darkaccent"
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
                ? "text-pal-lightaccent font-bold text-lg border-l-2 border-b-2 border-pal-darkaccent px-3 py-1"
                : "text-pal-darkaccent"
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
                ? "text-pal-lightaccent font-bold text-lg border-l-2 border-b-2 border-pal-darkaccent px-3 py-1"
                : "text-pal-darkaccent"
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
                ? "text-pal-lightaccent font-bold text-lg border-l-2 border-b-2 border-pal-darkaccent px-3 py-1"
                : "text-pal-darkaccent"
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
                ? "text-pal-lightaccent font-bold text-lg border-l-2 border-b-2 border-pal-darkaccent px-3 py-1"
                : "text-pal-darkaccent"
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
