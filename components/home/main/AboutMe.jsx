import { Container } from "@/components/ui/Container";

import Image from "next/image";
import mainImg from "@/public/images/main/about_me1.jpg";
import mainImg2 from "@/public/images/main/about_me2.jpg";

export function AboutMe() {
  return (
    <section className="container flex items-center min-h-[100vh] pb-4">
      <Container>
        <div className="flex gap-3 items-center mb-8">
          <Image src={mainImg} alt="Sonya_img1" className=" max-h-[13rem]" />
          <div>
            <Image src={mainImg2} alt="Sonya_img2" className="max-h-[7rem] " />
            <h2 className="text-sm mt-2">/ Обо мне</h2>
          </div>
        </div>
        <div className="max-w-[720px] border-red-600">
          <p className="text-lg mb-4 ">
            Приветствую, я Соня. <br /> Content creator & photographer / Сoach.
            Based in Spain.
          </p>
          <p className="text-sm text-justify">
            Я фотографирую с 2017 года. Специализируюсь на стилях сьемки таких
            как lifestyle и предметная: фотографирую людей и создаю контент для
            их личных блогов и брендов.
            <br />
            Также являюсь коучем в области съемки, здорового образа жизни и
            растительного питания.
            <br />
            <br />
            Моя цель не только делиться моими умениями и знаниями, но и помочь
            вам раскрыть свой потенциал и развить навыки, необходимые для
            личного роста.
            <br />
            <br />
            Мои последователи в ходе моего руководства замечают положительные
            изменения в тех сферах, за которыми ко мне обращаются: улучшения
            навыков фотографирования и ведения блога, улучшения питания,
            внешнего вида, физического и ментального состояния. Благодаря моим
            знаниям и опыту, которые раскрываю на консультациях, вы познаете
            что-то новое, получите в чем-то поддержку, мотивацию и взгляд на ту
            или иную вещь с совершенно другой стороны.
            <br />
            <br />
            Здесь вы можете ознакомиться с моими услугами и предложить идеи для
            совместного сотрудничества.
          </p>
        </div>
      </Container>
    </section>
  );
}
