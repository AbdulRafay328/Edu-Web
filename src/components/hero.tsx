import Image from "next/image"

function Hero(){
    return(
        <>
        <div>
          {" "}
          <div className="des mt-24">
            <h1 className="text-7xl text-[#044E83] font-bold">
              Governor Sindh
            </h1>
            <div className="text-4xl text-[#044E83] font-normal">
              Kamran Khan Tessori
            </div>
            <div className="text-5xl mt-5 text-[#2EB6E8] font-bold">
              Certified Cloud
              <br />
              Appleid Generative Ai
              <br />
              Engineer(GenEng)
            </div>
            <div className="text-3xl text-[#044E83] mt-4 font-bold">
              Earn upto $5000 / month
            </div>
            <div className="text-3xl text-[#044E83] mt-4 font-bold">
              Now admissions are open in
            </div>
            <div className="text-3xl text-[#044E83] font-bold">Hyderabad</div>

            <div className="flex gap-20 items-center mt-7 pb-10 ">
              <button className="bg-[#044E83] text-white w-40 h-12 font-bold text-xl rounded-lg">
                Apply now{" "}
              </button>
              <div className="text-center text-[#044E83]">
                <h1 className="font-bold text-3xl">562,143</h1>
                <p>Accepted applications</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="logo absolute left-[700px] top-0  "
              src="/images/kamran.png"
              width={910}
              height={300}
              alt="human"
            />
          </div>
        </div>
        </>
    )
};

export default Hero