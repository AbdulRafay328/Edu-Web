"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex px-10 h-[89px] w-full sticky top-0 bg-[#044E83] z-10 justify-between items-center">
      <div className="logo">
        <Image
          className="mt-24"
          src="/images/logo.png"
          width={100}
          height={50}
          alt="Logo"
        />
      </div>
      <div className="hidden md:block text-[#B9D8F3] font-bold text-[24px]">
        Tuition-Free Education Program on Latest Technologies
      </div>

      <ul className="hidden md:flex text-base font-medium justify-center items-center gap-10 text-white">
        <Link href="./">Home</Link>
        <Link href="./Apply">Apply</Link>
        <Link href="./Jobs">Jobs</Link>
        <Link href="./Result">Result</Link>
        <li>Courses</li>
      </ul>

      <button onClick={toggleMenu} className="md:hidden text-white">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {isOpen && (
        <ul className="flex flex-col items-center absolute top-[89px] left-0 w-full bg-[#044E83] text-white text-base font-medium space-y-4 py-4 md:hidden">
          <Link href="./" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="./Apply" onClick={toggleMenu}>
            Apply
          </Link>
          <Link href="./Jobs" onClick={toggleMenu}>
            Jobs
          </Link>
          <Link href="./Result" onClick={toggleMenu}>
            Result
          </Link>
          <li onClick={toggleMenu}>Courses</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
