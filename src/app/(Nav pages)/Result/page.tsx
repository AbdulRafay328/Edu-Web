function Apply() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl mt-10 text-[#044E83] font-bold text-center">
            Grand Entrance Exam Result
          </div>
          <div className=" my-10 text-2xl text-slate-700 font-normal shadow-xl shadow-black h-96 w-[700px] flex flex-col">
            <div className=" px-5 flex mt-5 justify-center items-start flex-col">
              <div>Registration Number*</div>
              <input
                className="border-[1px] bg-slate-200 rounded-lg w-[660px] mt-2 font-medium text-xl p-3 border-gray-700"
                type="text"
                placeholder="Registration number"
              ></input>
            </div>
            <div className=" px-5 flex mt-5 justify-center items-start flex-col">
              <div>CNIC-Number*</div>
              <input
                className="border-[1px] bg-slate-200 rounded-lg w-[660px] mt-2 font-medium text-xl p-3 border-gray-700"
                type="text"
                placeholder="CNIC-number"
              ></input>
            </div>
            <button className="bg-[#044E83] mt-10 m-auto text-white w-48 p-2 text-lg font-semibold rounded-lg">
              Get Result
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Apply;
