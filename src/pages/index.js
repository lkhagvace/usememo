import Image from "next/image";
import { Inter } from "next/font/google";
import { Product } from "@/components/Product";
import { Shoppingcard } from "@/components/Shoppingcard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex m-auto justify-center flex-wrap gap-16">
        <Product />
        <div>
          Total: <Shoppingcard />
        </div>
      </main>
    </>
  );
}
