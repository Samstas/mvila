import Image from "next/image";
import myPhoto from "@/public/images/main/services_img/photographer.jpg";

export default function MyPhotoExperience() {
  return (
    <section className="bg-cBlack2 flex gap-4 px-4 py-10 items-center">
      <Image src={myPhoto} alt="Sofia's photo" className="h-[10rem] w-[10rem]" />
      <p className="text-white text-xs text-justify ">
        Mvila Sofia 
        <br />
        Content creation и фотограф с 7-ми летним опытом работы. Я
        нахожусь в городе Cullera, который расположен на побережье средиземного
        моря в регионе Valencia.
        <br />
        <br />
        Интерес к фотографии у меня перерос в что-то более значимое для меня,
        так как без преувеличения я фотографию - каждый день.
        <br />
        <br />
        По мимо своей обыденности и рутины, мне нравится запечетлять красоту
        нашей планеты, уникальность каждого человека и через объектив камеры
        передатвать товар брендов так, чтобы отражать их ценность
        сосредотачиваясь на простых моментах - нахожу красоту мелких деталях.
        <br />
        <br />Я тесно работаю с каждым клиентом, чтобы понять их потребности и
        предпочтения, для создания персонализированных и запоминающихся снимков.
      </p>
    </section>
  );
}
