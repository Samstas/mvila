import Link from "next/link";
import { PROCESS_LIST } from "@/constants/global";

function ProcessList() {
  return (
    <section className="pb-16 pt-6 px-6">
      <h2 className="text-2xl uppercase tracking-widest mb-4">Процесс</h2>

      <ul className="flex flex-col gap-4">
        {PROCESS_LIST.map(({ id, label, description }) => (
          <li key={id}>
            <p className="mb-2">{label}</p>

            <div className="text-xs text-justify">
              {description?.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 uppercase text-cRed ">
        <Link href="/" className="border-r-2 border-cRed pr-4">
          / Важно
        </Link>
        <Link href="/" className="pl-4">
          Часто задаваемые вопросы
        </Link>
      </div>
    </section>
  );
}

export default ProcessList;
