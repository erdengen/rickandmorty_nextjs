"use client";
import Link from "next/link";
import React, { useState } from "react";

import { Bars3BottomLeftIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      link: "home",
      droppable: false,
    },
    {
      id: 2,
      name: "About",
      link: "about",
      droppable: true,
      droppable_type: 1,
    },
    {
      id: 3,
      name: "Portfolio",
      link: "portfolio",
      droppable: true,
      droppable_type: 2,
    },
    {
      id: 4,
      name: "Experience",
      link: "experience",
      droppable: false,
    },
    {
      id: 5,
      name: "Product",
      link: "Product",
      droppable: false,
    },
    {
      id: 6,
      name: "Contact",
      link: "contact",
      droppable: false,
    },
  ];
  return (
    <>
      <nav className="w-full bg-black text-white">
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-start gap-5 relative ">
          <Link href="/" className="flex items-center">
            <Image
              src={"https://www.svgrepo.com/show/499962/music.svg"}
              alt="logo"
              width={35}
              height={35}
              className="mr-3"
            />

            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Landwind
            </span>
          </Link>

          <ul className="flex flex-row ul-reset  justify-start items-center gap-3 ">
            {links.map((link: any, i) => {
              return (
                <li
                  className={`${link.droppable ? "droppable" : "no-droppable"}`}
                  key={i}
                >
                  <Link href="/pages">{link.name}</Link>
                  <div className="mega-menu">
                    <div className="container cf">
                      <ul className="ul-reset">
                        <h3>Heading 1</h3>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                      </ul>
                      <ul className="ul-reset">
                        <h3>Heading 2</h3>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                      </ul>
                      <ul className="ul-reset">
                        <h3>Heading 3</h3>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                        <li>
                          <a href="#">Category One Sublink</a>
                        </li>
                      </ul>
                      <ul className="ul-reset">
                        <h3>Heading 4</h3>
                        <li>
                          <Image
                            src={"http://placehold.it/205x172"}
                            width={275}
                            height={150}
                            alt=""
                            className="flex w-full h-auto"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
