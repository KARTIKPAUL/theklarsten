import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="container py-16">
      <div className="flex items-center justify-between pb-4">
        <a
          className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl"
          href=""
        >
          An aesthetic room is <br />
          given harmony
        </a>
        <p className="tracking-wider text-gray-400">WORLD AWARD</p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center ">
        <div>
          <Image
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt=""
            className="max-md:hidden"
          />
        </div>

        <div className="items-center">
          <p className="px-12 pb-4 ">
            Every window and doorwe manufactureis the resultof a meticulous
            process that combines cutting-edge technology with expert
            craftsmanship. Ourproducts are engineered for strength, energy
            efficiency, andlow maintenance, ensuring long-term value andsecurity
            for our clients. Whether you're upgrading yourhome, outfitting a
            commercial space, or embarking on a large-scale development project,
            our custom-made solutions are tailored to meet your needs andexceed
            your expectations.
          </p>
          <div className="flex px-12 pt-4 gap-x-4 ">
            <Image
              src="/image/awards.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
            <Image
              src="/image/awards1.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
