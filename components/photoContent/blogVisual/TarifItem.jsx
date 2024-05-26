import Link from "next/link";

export function TarifItem({ tarif }) {
  return (
    <>
      <div className="bg-cBlack2 px-6 mx-4 py-4">
        <h2 className="text-xl">{tarif.tarifLabel}</h2>

        <p className="uppercase text-xs my-4">Что входит в услугу?</p>

        <ul className="text-xs">
          {tarif?.description.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>

      <ul className="grid grid-cols-2 gap-1 border-t-4 mb-4 mx-4 uppercase">
        <li className="bg-cBlack2 text-cRed flex items-center justify-center">
          <Link href="/">/Важно</Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center py-4 bg-cBlack2 text-sm "
          >
            Выбрать тариф
            <p className="leading-[8px]">{tarif.price}</p>
          </Link>
        </li>
      </ul>
    </>
  );
}
