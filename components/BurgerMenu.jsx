"use client";

import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export function BurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="absolute right-2 top-2  ">
        <BiMenu
          className="text-cBeige1 size-10"
          onClick={() => setIsNavOpen(true)}
        />
      </div>

      {isNavOpen && (
        <nav className="fixed bg-cBlack inset-0 flex items-center justify-center">
          <ul className="text-center text-cBeige2 text-xl flex flex-col gap-6">
            <li>главная</li>
            <li>фотография</li>
            <li>консультация</li>
            <li>визуал</li>
            <li>питание</li>
          </ul>

          <div className="absolute  top-2 right-2">
            <CgClose
              className="size-10 text-cBeige2"
              onClick={() => setIsNavOpen(false)}
            />
          </div>
        </nav>
      )}
    </>
  );
}
