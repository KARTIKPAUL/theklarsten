"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "NOISE INSULATION",
            title: "Cossy Noise Insulation",
            image: "/image/badroom.jpg",
            description: "Our uPVC windows provide excellent sound insulation, reducing the noise from the outside. Whether you live ina busy urban area or near a noisy street.",
        },
        {
            id: "02",
            catagory: "ENERGY EFFiCIENCY",
            title: "Neat & Energy Efficiency",
            image: "/image/kitchen1.jpg",
            description: "Our uPVC windows provide superior insulation compared to traditional materials, helping to keep your homecooler in the summer and warmer in the winter.",
        },
        {
            id: "03",
            catagory: "ENHANCED SECURITY",
            title: "Enhanced Security",
            image: "/image/drowing.jpg",
            description: "uPVC windows are equipped with robust locking mechanisms and are far less prone to breakage compared to traditional wooden or aluminum windows.",
        },
        {
            id: "04",
            catagory: "AESTHETIC FLEXIBILIY",
            title: "Aesthetic Flexibility",
            image: "/image/living.jpg",
            description: "Our uPVC windows are available in a wide range of styles, colours, and finishes, offering versatility to suit any architectural design. Unlike traditional wooden",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}