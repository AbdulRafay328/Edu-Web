import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="flex flex-col md:pb-20 md:flex-row">
        <div className="des flex flex-col justify-center items-center md:items-start md:pl-5 md:text-start sm:text-[33px] text-2xl text-center mt-24">
          <div className=" text-[#044E83] font-bold">
            Governor Sindh
            <br />
            Kamran Khan Tessori
          </div>
          <div className=" mt-5 text-[#2EB6E8] font-bold">
            Certified Cloud
            <br />
            Appleid Generative Ai
            <br />
            Engineer(GenEng)
          </div>
          <div className=" text-[#044E83] mt-4 font-bold">
            Earn upto $5000 / month
          </div>
          <div className=" text-[#044E83] mt-4 font-bold">
            Now admissions are open in
          </div>
          <div className=" text-[#044E83] font-bold">Hyderabad</div>

          <div className="flex xs:flex-col md:flex-row md:gap-20 xs:gap-10 items-center mt-7 pb-10 ">
            <button className="bg-[#044E83] text-white w-40 h-12 font-bold text-xl rounded-lg">
              Apply now
            </button>
            <div className="text-center md:text-2xl text-[#044E83]">
              <div className="font-bold ">562,143</div>
              <p>Accepted applications</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="logo absolute xs:static md:absolute left-[805px] top-0  "
            src="/images/kamran.png"
            width={920}
            height={300}
            alt="human"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
