import { TARIFS_INDIVIDUAL } from "@/constants/tarif";
import Tarifs from "@/components/photoContent/Tarifs";
import { Footer } from "@/components/ui/shared/Footer";
import Header from "@/components/photoContent/individual/Header";
import ProcessList from "@/components/photoContent/ProcessList";

function IndividualPage() {
  return (
    <>
      <Header />

      <main>
        <Tarifs tarifs_option={TARIFS_INDIVIDUAL} />
        <ProcessList />
      </main>

      <Footer />
    </>
  );
}

export default IndividualPage;
