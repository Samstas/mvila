import Image from "next/image";
import testPhoto from "@/public/images/main/services_img/photographer.jpg";
import Link from "next/link";

const testList = [
  {
    id: 1,
    name: "/ Индивидуальная",
    img: testPhoto,
    link: "/photo_individual",
  },
  {
    id: 2,
    name: "Love / Family / Friends: S T O R Y",
    img: testPhoto,
    link: "/photo_story",
  },
  { id: 3, name: "Content for brands ", img: testPhoto, link: "/photo_brands" },
  {
    id: 4,
    name: "Контент  /  Визуал для личных блогов ",
    img: testPhoto,
    link: "/photo_blog",
  },
];

export default function Options() {
  return (
    <section className="mb-16">
      <h1 className="uppercase text-3xl border-b-2 ml-12 my-4 tracking-widest">
        Опции
      </h1>
      <ul className="grid grid-cols-2 broder border-blue-600">
        {testList.map(({ id, name, img, link }) => (
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
