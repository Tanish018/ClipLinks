import Image from "next/image";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={notoSans.className}>
      <section className="grid grid-cols-2 gap-50">
        <div className="flex flex-col gap-4 w-[60vw] items-center justify-center">
          <p className="text-5xl font-bold">ClipLinks</p>
          <p className="text-[20px] font-semibold w-[650px] text-center -mt-2 mb-2">Most Accurate URL Shortener.</p>
          <p className="text-[18px] font-medium w-[650px] text-center leading-5">We are the best easy-to-use application in the entire world of URL Shorteners. We don't even ask you to Login so that all your information remains with you.</p>
        </div>
        <div className="h-[60vh] w-[30vw] flex items-center justify-start relative">
          <Image alt="Image" src={"/vector.png"} height={600} width={600}/>
        </div>
      </section>
      <section className="flex items-center justify-center mt-20">
        <Link href="/shorten"><button className="cursor-pointer px-10 text-[25px] py-4 rounded-2xl bg-black text-white hover:ring-2 hover:ring-black hover:bg-transparent hover:text-black transition-all duration-300 font-bold">Get Started</button></Link>
      </section>
    </main>
  );
}