import { TemporaryNavLinks } from "@/components/TemporaryNavLinks";
import logo from "@/public/images/logo2.svg";

import Image from "next/image";

export function Header() {
  return (
    <header className="h-screen bg-main-hero-bg bg-cover bg-center bg-no-repeat ">
      {/* <TemporaryNavLinks /> */}
      <div className="flex h-full items-center flex-col justify-center">
        <Image src={logo} alt="logo" className="-mb-[6rem] w-[12rem]" />
        <h1 className="text-[5.2rem] uppercase text-cBeige1  opacity-40 ">
          projects
        </h1>
      </div>
    </header>
  );
}
