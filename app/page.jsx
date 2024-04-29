import { Footer } from "@/components/home/footer/Footer";
import { Header } from "@/components/home/header/Header";
import { AboutMe } from "@/components/home/main/Greeting";
import { ServicesList } from "@/components/home/main/ServicesList";

export default function Main() {
  return (
    <>
      <Header />

      <main className=" flex-col ">
        <AboutMe />
        {/* <ServicesList /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
