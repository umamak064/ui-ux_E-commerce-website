import { IoMdStar } from "react-icons/io";
import Image from "next/image";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/product1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2, // Changed id to ensure unique values
    price: "$240",
    img_url: "/product2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3, // Changed id to ensure unique values
    price: "$180",
    img_url: "/product3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4, // Changed id to ensure unique values
    price: "$130",
    img_url: "/product4.png",
    old_price: "$160",
  },
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 5, // Changed id to ensure unique values
    price: "$120",
    img_url: "/images/might1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 6, // Changed id to ensure unique values
    price: "$240",
    img_url: "/product2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 7, // Changed id to ensure unique values
    price: "$120",
    img_url: "/images/might3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 8, // Changed id to ensure unique values
    price: "$120",
    img_url: "/images/might4.png",
    old_price: "$200",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 9, // Changed id to ensure unique values
    price: "$120",
    img_url: "/images/might2.png",
    old_price: "$200",
  },
];

let star = [
  <IoMdStar key={1} />,
  <IoMdStar key={2} />,
  <IoMdStar key={3} />,
  <IoMdStar key={4} />,
  <IoMdStar key={5} />,
];

export default function CasualShirts() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-start ml-3">Casual</h1>
      <h4 className="text-end text-gray-400">
        Showing 1-10 of 100 Products Sort by:{" "}
        <span className="font-bold text-black">
          <select className="font-bold text-black" defaultValue="most-popular">
            <option value="most-popular">Most Popular</option>
            <option value="low-price">Low Price</option>
            <option value="high-price">High Price</option>
          </select>
        </span>
      </h4>
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {product.map((data) => {
          return (
            <div key={data.id}> {/* Added key prop */}
              <div className="w-[230px] h-[250px] bg-[#F0EEED] rounded-[20px];">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className="w-full h-full rounded-[40px]"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div>
                <p className="text-sm mt-2 font-bold">{data.title}</p>
                <p className="flex text-yellow-400">{star}</p>
                <p className="font-bold mt-1">
                  {data.price}{" "}
                  <span className="font-bold text-gray-400 line-through ml-2">
                    {data.old_price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
