import Image from "next/image";
import logo from "@/public/images/logo2.svg";

export function Header() {
  return (
    <header className="h-screen bg-visual-hero-bg bg-cover bg-center bg-no-repeat ">
      <div className="flex h-full items-center flex-col justify-center">
        <Image src={logo} alt="logo" className="-mb-[3.7rem] w-[12rem]" />
        <h1 className="text-[2.5rem] leading-10 text-center uppercase text-cBeige1  opacity-50 ">
          Photographer <br /> & Content Creation
        </h1>
      </div>
    </header>
  );
}
