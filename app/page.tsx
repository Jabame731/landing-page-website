import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  console.log("test");

  return (
    <h1 className="text-3xl">
      <Header />
      test website
    </h1>
  );
}
