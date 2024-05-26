import Link from "next/link";
import Image from "next/image";
import testPhoto from "@/public/images/main/services_img/photographer.jpg";

function Header() {
  return (
    <header className="flex flex-col items-center">
      <div className="flex w-[90%] pb-6 gap-4 items-center border-b border-black">
        <Image src={testPhoto} alt="fsdgsd" className="h-[11rem] w-[10rem]" />
        <div>
          <h1 className="uppercase text-start tracking-widest flex flex-col py-4 text-2xl ">
            <span>love</span>
            <span>family</span>
            <span>
              friends
              <sub className="text-xs normal-case tracking-normal">/ story</sub>
            </span>
          </h1>

          <p className="text-xs text-justify">
            Опция съемки для тех, кто хочет разделить и запечатлеть моменты с
            кем-то. Подходит для пар, друзей и семьям в компании до 4-х человек
          </p>

          <Link href="/" className="underline text-sm">
            Мои работы
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
