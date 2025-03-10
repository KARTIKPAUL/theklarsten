import Image from "next/image";
import logo from "../public/theklastenLogo.png";
import Navigation from "./Navigation";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
      <Topbar />
      <div className="container flex items-center justify-between py-8">
        {/* <Image src={logo} alt="logo" className="w-40 " /> */}
        <p className="text-[#e2581b] text-4xl font-bold tracking-wide">
          The<span className="text-[#0084c2]">klarsten</span>
        </p>

        <Navigation />
      </div>
    </div>
  );
}
