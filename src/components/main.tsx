import Image from "next/image";

function Main() {
  return (
    <>
      <div className=" mt-16 text-4xl xs:text-3xl text-center px-5 sm:text-[33px] text-[#044E83] font-bold">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </div>

      <p className="px-5 text-justify text-xl xs:text-[20px]  sm:text-[22px]  text-gray-600 font-medium mt-10">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>

      <div className="flex overflow-hidden xs:flex-col md:flex-row xs:gap-8 w-full items-center px-5 mt-9 justify-between">
        <Image
          className="rounded-lg object-cover shadow-2xl shadow-black"
          src="/images/work man.jpg"
          alt="workman"
          width={400}
          height={100}
        />

        <Image
          className="rounded-lg object-cover shadow-2xl shadow-black"
          src="/images/mind.jpg"
          alt="mind"
          width={435}
          height={100}
        />

        <Image
          className="rounded-lg object-cover shadow-2xl shadow-black"
          src="/images/comp.jpg"
          alt="comp"
          width={400}
          height={100}
        />
      </div>
    </>
  );
}

export default Main;
