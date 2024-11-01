import Image from "next/image"

interface type{
  img: string
  heading:string
}

function Card({img, heading}:type) {
  return (
    <>
     <div className=" overflow-hidden rounded-lg w-72 text-center shadow-2xl shadow-black">
            <div>
              <Image
              src={img}
              alt="progfund"
              width={350}
              height={100}
              />
            </div>
            
            <div className=" inline-block mt-3 mb-3 text-xl font-medium text-gray-700">{heading}</div>
          </div>
    </>
  );
}

export default Card