import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

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
    id: 1,
    price: "$240",
    img_url: "/product2.png",
    old_price:"$260"
  },
  {
    title: "CHECKERED SHIRT",
    id: 1,
    price: "$180",
    img_url: "/product3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 1,
    price: "$130",
    img_url: "/product4.png",
    old_price:"$160"
  },
];

let star = [
  <IoMdStar key={1} />,
  <IoMdStar key={2} />,
  <IoMdStar key={3} />,
  <IoMdStar key={4} />,
  <IoMdStar key={5} />,
];
export default function Products() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
   
    <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
      {
       product.map((data) => {
        return(
          <div>
           <Link href={`/products/${data.id}`}>
            <div className="w-[190px] h-[190px] md:w-[260px] md:h-[298px] bg-[#F0EEED] rounded-[20px];">
            <Image src={data.img_url} alt={data.title} className="w-full h-full rounded-[40px]" width={100} height={100}></Image>
            </div>
           </Link>
            <div>
                        <p className="text-sm mt-2 font-bold">{data.title}</p>
                        <p className="flex text-yellow-400">{star}</p>
                        <p className="font-bold mt-1">{data.price} <span className="font-bold text-gray-400 line-through ml-2">{data.old_price}</span></p>
            </div>
          </div>
        )
      })
    }
   
  </div>
  </div>
  );
}
