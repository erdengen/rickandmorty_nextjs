"use client";
import Link from "next/link";
import React, { useState } from "react";

import { Bars3BottomLeftIcon, Bars3Icon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
        <div>
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <h1 className="text-5xl font-signature ml-2">
            <a className="text-white" href="" target="_blank" rel="noreferrer">
              Logo
            </a>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? (
            <Bars3Icon className="h-12 w-12 text-rose-500" />
          ) : (
            <Bars3Icon className="h-12 w-12 text-green-500" />
          )}
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center flex-1  w-full  bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
