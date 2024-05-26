import { Footer } from "@/components/ui/shared/Footer";
import { Header } from "@/components/home/header/Header";
import { AboutMe } from "@/components/home/main/AboutMe";
import { ServicesList } from "@/components/home/main/ServicesList";

export default function MainPage() {
  return (
    <>
      <Header />

      <main>
        <AboutMe />
        <ServicesList />
      </main>

      <Footer />
    </>
  );
}
