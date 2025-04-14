import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  console.log("test");

  // container mx-auto px-4

  return (
    <>
      <Header />

      <Hero />
      <div className="h-600 bg-black"></div>
    </>
  );
}
