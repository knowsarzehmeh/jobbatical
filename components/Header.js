import Link from "next/link";
import React from "react";
import Container from "./Container";
import Icon from "./Icon";
import Search from "./Search";

function Nav() {
  return (
    <div className="flex items-center justify-between py-8">
      <p className="font-semibold">GraphQl.Jobs</p>
      <Link href="#">
        <p className="font-semibold cursor-pointer">Post your job</p>
      </Link>
    </div>
  );
}

function Header() {
  return (
    <div className="relative">
      <div className="w-[80px] h-[80px] rounded-full flex  z-[5] absolute  right-[10%] -bottom-12 rotate-[45deg] overflow-hidden">
        <div className="w-[50%] h-full  bg-[#E23D82]" />
        <div className="w-[50%] h-full bg-[#44A87F]" />
      </div>
      <div className="relative min-h-[420px] md:min-h-[450px] overflow-hidden w-full bg-gradient-to-r from-[#e78ef3] to-[#edd95e] clippy">
        <div className="absolute top-0 left-0 max-w-[150px] lg:max-w-[262px] -z-[1] w-full h-[60px] bg-white custom-border" />
        <div className="w-[80px] h-[80px] rounded-full bg-[#A9A3C5] -z-[1] absolute left-[8%] -bottom-3 -rotate-30 overflow-hidden">
          <div className="w-[60px] h-[60px] rounded-full bg-black absolute -right-[30%]" />
        </div>

        <div className="w-[80px] h-[80px] rounded-full -z-[1] bg-gradient-to-r from-[#EB9F84] to-[#E9AAB3] absolute left-[30%] top-[8%]" />
        <div className=" w-[500px] h-[500px]  rounded-full -z-[1] bg-gradient-to-t from-[#3531F6] to-[#7491EE] absolute -top-[30px] -bottom-[10px]  -right-[90%] sm:-right-[22%]" />
        <div className="w-[50px] md:w-[60px] h-[150px] md:h-[200px] -z-[1] bg-gradient-to-r from-[#EB9F84] to-[#E9AAB3] absolute right-[15%] lg:right-[10%] top-[12%] rotate-[-45deg]" />
        <Container>
          <Nav />
          <Search />
        </Container>
      </div>
    </div>
  );
}

export default Header;
