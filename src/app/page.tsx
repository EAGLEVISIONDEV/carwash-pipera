import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { Visit } from "@/components/Visit";
import { InstagramCta } from "@/components/InstagramCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Trust />
        <Visit />
        <InstagramCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
