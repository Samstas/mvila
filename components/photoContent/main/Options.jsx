import Link from "next/link";
import Image from "next/image";
import { PHOTO_OPTIONS_LIST } from "@/constants/global";

export default function Options() {
  return (
    <section className="mb-16">
      <h1 className="uppercase text-3xl border-b-2 ml-12 my-4 tracking-widest">
        Опции
      </h1>
      <ul className="grid grid-cols-2 broder border-blue-600">
        {PHOTO_OPTIONS_LIST.map(({ id, name, img, link }) => (
          <li key={id} className="border border-black">
            <Link href={link}>
              <h2 className="text-xs text-center border-b py-3 border-black">
                {name}
              </h2>
              <Image src={img} alt="testPhoto" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
