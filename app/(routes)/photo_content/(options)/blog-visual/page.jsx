import { Footer } from "@/components/ui/shared/Footer";
import ProcessList from "@/components/photoContent/ProcessList";
import { Header } from "@/components/photoContent/blogVisual/Header";
import { BlogTarifsList } from "@/components/photoContent/blogVisual/BlogTarifsList";

export default function BlogVisualPage() {
  return (
    <>
      <Header />

      <main>
        <BlogTarifsList />
        <ProcessList />
      </main>

      <Footer />
    </>
  );
}
