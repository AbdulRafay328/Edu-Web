"use client";

import Card from "@/components/Cards";
import Main from "@/components/main";
import ImageSwiper from "@/components/Imageslider";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <section className=" hero bg-Logo flex relative items-center pl-5 xs:pl-0 md:justify-between xs:justify-center overflow-hidden -z-10 bg-cover bg-opacity-90 w-full">
        <Hero />
      </section>

      <section className="hero2">
        <Main />
        <div className="flex items-center">
          <ImageSwiper />
        </div>
      </section>

      <section className="hero3">
        <div className="mt-16 text-4xl xs:text-3xl px-5 text-[#044E83] font-bold">
          Core Courses Sequence
        </div>
        <div className="flex justify-start xs:flex-col sm:flex-row xs:items-center gap-10 px-5 mt-10">
          <Card
            img="/images/prog fund.jpg"
            heading="Programming Fundamentals"
          />
          <Card img="/images/web3.jpg" heading="Web2 Using NextJS" />
          <Card img="/images/Earn.jpg" heading="Earn as You Learn" />
        </div>
      </section>

      <section className="hero4 mb-20">
        <div className="mt-16 text-4xl xs:text-3xl px-5 text-[#044E83] font-bold">
          Advanced Courses
        </div>

        <div className="grid md:grid-cols-4 w-full xs:flex xs:flex-col xs:items-center xs:pb-12 sm:grid sm:grid-cols-2 justify-items-center md:justify-items-start overflow-hidden md:col-span-2 gap-5 px-5 mt-10">
          <Card img="/images/Ai.jpg" heading="Artificial Intelligence" />
          <Card img="/images/world.jpg" heading="Web3 and Metaverse" />
          <Card img="/images/cloud.jpg" heading="Cloud-Native Computing" />
          <Card img="/images/iot.jpg" heading="Ambient Computing and IoT" />
          <Card
            img="/images/genomics.jpg"
            heading="Genomics and Bioinformatics"
          />
          <Card
            img="/images/network.jpg"
            heading="Network Programmability and Automation"
          />
        </div>
      </section>
    </>
  );
}
