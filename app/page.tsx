import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Cta from "./components/cta";
import Aboutus from "./components/aboutus";
import Services from "./components/services";
import WhyChooseUs from "./components/whychooseus";
import OurTeam from "./components/ourteam";
import GetQuoteAndContact from "./components/getquoteandcontact";
import Footer from "./components/footer";

export const metadata = {
  title:
    "TRI-J SECURITY AGENCY | Professional Security Solutions You Can Rely On",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Aboutus />
      <Services />
      <WhyChooseUs />
      <OurTeam />
      <GetQuoteAndContact />
    </>
  );
}
