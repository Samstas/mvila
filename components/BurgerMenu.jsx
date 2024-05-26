"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV_LINKS } from "@/constants/global";
import { useBurgerMenu } from "@/hooks/useBurgerMenu";

import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

function handleBodyOverflow(isNavOpen) {
  document.body.style.overflow = isNavOpen ? "hidden" : "";
}

export function BurgerMenu() {
  const { isNavOpen, closeBurgerMenu, openBurgerMenu } = useBurgerMenu();

  useEffect(() => {
    handleBodyOverflow(isNavOpen);

    return () => {
      handleBodyOverflow(false);
    };
  }, [isNavOpen]);

  return (
    <>
      <div className="absolute right-2 top-2  ">
        <BiMenu className="text-cBeige1 size-10" onClick={openBurgerMenu} />
      </div>

      {isNavOpen && (
        <nav className="fixed bg-cBlack inset-0 flex items-center justify-center">
          <ul className=" text-cBeige2 text-xl flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link className="uppercase" href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="absolute  top-2 right-2">
            <CgClose
              className="size-10 text-cBeige2"
              onClick={closeBurgerMenu}
            />
          </div>
        </nav>
      )}
    </>
  );
}
