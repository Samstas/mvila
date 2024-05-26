import Link from "next/link";
import Image from "next/image";
import testPhoto from "@/public/images/main/services_img/photographer.jpg";

function Header() {
  return (
    <header className="flex flex-col items-center">
      <h1 className="uppercase tracking-widest py-4 text-2xl text-center">
        Индивидуальная
      </h1>
      <div className="flex w-[90%] pb-6 gap-4 items-center border-b border-black">
        <Image src={testPhoto} alt="fsdgsd" className="h-[11rem] w-[10rem]" />
        <div>
          <p className="text-xs text-justify">
            Эта съемка которая раскроет вашу уникальность и личность.
            <br />
            <br />
            Я люблю ловить живые моменты, которые делают каждый снимок -
            особенным. Фиксирую моменты, эмоции и чувства которые в моменте
            проявляются естественно и искренне.
            <br />
            <br />В таких кадрах каждая деталь отражает настоящую неповторимость
            человека.
          </p>
          <Link href="/" className="underline">
            Мои работы
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
