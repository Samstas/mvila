import { Footer } from "@/components/ui/shared/Footer";
import Options from "@/components/photoContent/main/Options";
import { Header } from "@/components/photoContent/header/Header";
import MyPhotoExperience from "@/components/photoContent/main/MyPhotoExperience";

export default function PhotoContentPage() {
  return (
    <>
      <Header />

      <main>
        <MyPhotoExperience />
        <Options />
      </main>

      <Footer />
    </>
  );
}
