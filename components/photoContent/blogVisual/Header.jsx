import Image from "next/image";
import Link from "next/link";
import testCollage from "@/public/images/visual/visual_collage.jpg";

export function Header() {
  return (
    <header className="flex flex-col items-center">
      <h1 className="uppercase tracking-widest py-4 text-2xl text-center flex flex-col">
        CONTENT & VISUAL
        <span className="text-sm normal-case tracking-normal leading-3">
          для личного блога
        </span>
      </h1>
      <div className="flex flex-col pb-6 gap-4 items-center ">
        <Image src={testCollage} alt="fsdgsd" />
        <div className="w-[90%] border-b mb-4 pb-4 border-black">
          <p className="text-xs text-justify ">
            Моя услуга сейчас важна и востребована, потому что рынок переполнен
            одинаковыми блогами и экспертами. Все твердят про уникальность, но
            сами понять её - не могут.
            <br />
            <br />
            Исходя количества пользователей и похожему контенту, создать
            действительно уникальный визуал практически нереально, так или иначе
            все у кого-то что-то взаимствуют и создают контент по шаблонам.
            <br />
            <br />
            Моя цель не заключается в разработке «уникального» визуала. Данный
            формат съемки направлен на то, чтобы за 1 сеанс сделать ваш блог не
            только эстетичным и привлекающим, но и отражающий вашу личность,
            сферу деятельности, увлечения, ценности и образ жизни.
            <br />
            <br />
            Индивидуальный подход в создании визуала, съемочный процесс,
            количество исходного материала и финальный результат - делает эту
            опцию съемки интенсивным и выгодным, если ваша цель заключается в
            том, чтобы визуально упаковать блог.
            <br />
            <br />
            Помимо фулл боди и портретных фотографий, я дополнительно создаю
            фоновые снимки которые разбавят визуальное впечатление и
            разнообразят ваш контент.
          </p>
          <Link href="/" className="underline mt-4 block">
            Мои работы
          </Link>
        </div>
      </div>
    </header>
  );
}
