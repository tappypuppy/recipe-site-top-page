import MainText from "@/components/MainText/MainText";
import Mainvisual from "@/components/Mainvisual/Mainvisual";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Mainvisual />
        <MainText />
      </main>
    </div>
  );
}
