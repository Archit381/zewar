'use client'

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Video from "@/components/video";
import Featured from "@/components/featured";
import { useRouter } from "next/navigation";

export default function Home() {
  const router =useRouter();

  const handleButtonClick = () => {
    router.push('https://virtual-try-on-brown.vercel.app/');
  };

  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    // </section>
    <>
      <Video />
      <div className="bg-[#f0eee4] flex justify-center items-center flex-col">
        <div
          style={{
            paddingTop: 50,
            fontSize: 50,
            fontFamily: "initial",
            fontWeight: "normal",
          }}
        >
          Try it on, fall in love.
        </div>
        <div className="flex justify-center items-center text-center mt-3 text-slate-600">
          With our innovative technology, you can visualize the pieces as if
          they were already yours, making your shopping journey truly unique and
          exciting.
        </div>
        <Link href="/tryOnDemo" className="text-inherit mt-5">
          <Button onClick={()=>handleButtonClick()} variant="solid" color="default" style={{marginBottom: 50}}>Proceed to Try-on Demo</Button>
        </Link>
      </div>

      <Featured/>

	  
    </>
  );
}
