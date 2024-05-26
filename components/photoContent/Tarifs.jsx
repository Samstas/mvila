import Link from "next/link";

function Tarifs({ tarifs_option }) {
  return (
    <section className="mt-8">
      <ul className="grid grid-cols-2 text-center">
        {tarifs_option.map(({ id, price, description, tarifNumber }, index) => (
          <li
            key={id}
            className={`text-white bg-cBlack2 ${
              index === 1 ? "" : "border-r-2"
            } flex flex-col justify-between`}
          >
            <h2 className="text-2xl uppercase border-b-[3px] py-2">
              {index === 1 ? "" : "Тариф"} / {tarifNumber}
            </h2>

            <ul className="text-xs text-start px-4 py-4 ">
              {description.map((itemDescription) => (
                <li key={itemDescription}>{itemDescription}</li>
              ))}
            </ul>

            <Link
              href="/"
              className="uppercase py-4 block bg-black/85 text-sm "
            >
              Выбрать тариф
              <p className="leading-[8px]">{price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tarifs;
