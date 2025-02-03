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
    title: "VERTICAL STRIPED SHIRT",
    id: 1,
    price: "$212",
    img_url: "/product5.png",
     old_price:"$232"
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 2,
    price: "$145",
    img_url: "/product6.png",
  
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 3,
    price: "$80",
    img_url: "/product7.png",
  },
  {
    title: "FADED SKINNY JEANS",
    id: 4,
    price: "$210",
    img_url: "/product8.png",
    
  },
];

let star=[<IoMdStar />,<IoMdStar />,<IoMdStar />,<IoMdStar />,<IoMdStar />]
export default function Top_sell() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
      {product.map((data) => {
        return( 
        <div key={data.id}>
          <Link href={`/products/${data.id}`}>
          <div className="w-[190px] h-[190px] md:w-[260px] md:h-[298px]  bg-[#F0EEED] rounded-[20px];">
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
