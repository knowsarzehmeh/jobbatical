import Link from "next/link";
import React from "react";
import Container from "./Container";
import Icon from "./Icon";

function Nav() {
  return (
    <div className="flex items-center justify-between py-8">
      <p className="font-semibold">GraphQl.Jobs</p>
      <Link href="#">
        <p className="font-semibold">Post your job</p>
      </Link>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[450px] w-full bg-gradient-to-r from-[#e78ef3] to-[#edd95e] clippy">
      <Container>
        <Nav />
      </Container>
    </div>
  );
}

export default Header;
