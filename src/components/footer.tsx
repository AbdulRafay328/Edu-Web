import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className=" flex justify-start xs:flex-col md:flex-row md:gap-48 xs:gap-12 w-full overflow-hidden gap-48 py-16 px-10 bg-[#F4F4F5]">
        <div>
          <h1 className="text-[#27272A] text-xl font-bold">Core Courses</h1>

          <ul className="mt-7 space-y-3">
            <li>Programming Fundamentals</li>
            <li>Web2 Using Nextjs</li>
            <li>Earn as you learn</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#27272A] text-xl font-bold">Advanced Courses</h1>

          <ul className="mt-7 space-y-3">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence and Deep Learning</li>
            <li>Ambient Computing IoT</li>
            <li>Genomics Bioinformatics</li>
            <li>Network programmability and automation</li>
          </ul>
        </div>

        <div>
          <h1 className="text-[#27272A] text-xl font-bold">Social Links</h1>
          <div className="flex items-center justify-start mt-5 gap-5">
            <Image src="/images/fb.png" alt="fb" width={30} height={30} />
            <Image src="/images/yt.png" alt="yt" width={30} height={30} />
            <Image src="/images/tw.png" alt="tw" width={30} height={30} />
            <Image src="/images/ig.png" alt="ig" width={30} height={30} />
            <Image src="/images/tt.png" alt="tt" width={30} height={30} />
          </div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <Image
              className="text-[#044E83]"
              src="/images/ev.png"
              alt="ev"
              width={20}
              height={20}
            />

            <div className="text-[#044E83]">education@governorsindh.com</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
