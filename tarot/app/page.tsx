import Image from "next/image";
import Button from "./components/button";
import LuckyGenerator from "./components/luckyGenerator";
import CardFetchButton from "./components/cardFetchButton";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-start p-24 min-h-screen">
      <LuckyGenerator />
      {/* <CardFetchButton value={4} /> */}
    </main>
  );
}
