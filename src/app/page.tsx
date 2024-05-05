import MainText from "@/components/MainText/MainText";
import Mainvisual from "@/components/Mainvisual/Mainvisual";
import Recipe from "@/components/Recipe/Recipe";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Mainvisual />
        <MainText />
        <Recipe />
      </main>
    </div>
  );
}
