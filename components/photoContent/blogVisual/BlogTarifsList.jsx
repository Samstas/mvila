import { TarifItem } from "./TarifItem";
import { TARIFS_BLOG_VISUAL } from "@/constants/tarif";

export function BlogTarifsList() {
  return (
    <section className="text-white">
      {TARIFS_BLOG_VISUAL.map((tarif) => (
        <TarifItem tarif={tarif} key={tarif.id} />
      ))}
    </section>
  );
}
