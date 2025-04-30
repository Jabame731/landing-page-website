import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Services from "./components/services";
import WhyChooseUs from "./components/whychooseus";
import OurTeam from "./components/ourteam";
import GetQuoteAndContact from "./components/getquoteandcontact";

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
