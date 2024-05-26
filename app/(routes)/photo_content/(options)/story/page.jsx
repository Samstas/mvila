import ProcessList from "@/components/photoContent/ProcessList";
import Header from "@/components/photoContent/story/Header";
import Tarifs from "@/components/photoContent/Tarifs";
import { Footer } from "@/components/ui/shared/Footer";
import { TARIFS_INDIVIDUAL } from "@/constants/tarif";

function StoryPage() {
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

export default StoryPage;
