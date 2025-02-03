"use client"
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Check } from "lucide-react";
import CustomerTestimonials from "@/components/allreview";
import T_shirts from "@/components/products";
import { BreadcrumbCollapsed } from "@/components/breadcrump";
let star=[<IoMdStar />,<IoMdStar />,<IoMdStar />,<IoMdStar />,<IoMdStar />]

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  img1:string;
  img2:string;
  img3:string;
  img4:string;
}
let product: Iproducts[] = [
  {
    title: "VERTICAL STRIPED SHIRT",
    id: 1,
    price: "$212",
    img_url: "/product5.png",
     old_price:"$232",
     img1:"/det_img1.png",
      img2:"/det_img2.png",
       img3:"/det_img3.png",
        img4:"/det_img4.png"
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 2,
    price: "$145",
    img_url: "/product6.png",
    img1:"/det_img1.png",
      img2:"/det_img2.png",
       img3:"/det_img3.png",
        img4:"/det_img4.png"
  
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 3,
    price: "$80",
    img_url: "/product7.png",
    img1:"/det_img1.png",
      img2:"/det_img2.png",
       img3:"/det_img3.png",
        img4:"/det_img4.png"
  },
  {
    title: "FADED SKINNY JEANS",
    id: 4,
    price: "$210",
    img_url: "/product8.png",
    img1:"/det_img1.png",
      img2:"/det_img2.png",
       img3:"/det_img3.png",
        img4:"/det_img4.png"
    
  },
];
export default function Pro_Detail(){
  const params=useParams();
  const id=params.id
  const item=product.find((item)=>item.id === Number(id))
  if(!item){
   return<h1>Product not found</h1>
  }
 
 return(
  <>
  <BreadcrumbCollapsed />
<div className="flex flex-col md:flex-row justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
  {/* Left */}
  <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
    {/* Images */}
    <Image
      src={item.img1}
      className="w-[30%] sm:w-full sm:h-[150px] md:w-full md:h-auto my-2 sm:my-0"
      alt="product detail"
      width={100}
      height={100}
    />
    <Image
      src={item.img2}
      className="w-[30%] sm:w-full sm:h-[150px] md:w-full md:h-auto my-2 sm:my-0 sm:mt-3"
      alt="product detail"
      width={100}
      height={100}
    />
    <Image
      src={item.img4}
      className="w-[30%] sm:w-full sm:h-[150px] md:w-full md:h-auto my-2 sm:my-0 sm:mt-3"
      alt="product detail"
      width={100}
      height={100}
    />
  </div>

  {/* Middle */}
  <div className="w-[90%] sm:w-[444px] md:w-[600px] h-[260px] sm:h-[500px] md:h-auto mt-5 sm:mt-0 order-1 sm:order-2">
    <Image
      src={item.img1}
      className="w-full h-[93%] object-contain"
      alt="product detail"
      width={100}
      height={100}
    />
  </div>

  {/* Right */}
  <div className="w-full sm:w-[600px] md:w-[600px] h-auto sm:h-[500px] order-3">
    <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
    <div className="flex text-yellow-400">{star}</div>
    <p className="font-bold mt-1">
      {item.price}{" "}
      <span className="font-bold text-gray-400 line-through ml-2">
        {item.old_price}
      </span>
    </p>
    <p className="text-gray-400">
      This graphic t-shirt which is perfect for any occasion. Crafted from a
      soft and breathable fabric, it offers superior comfort and style.
    </p>

    {/* Select Color */}
    <div className="mt-5">
      <p className="text-gray-500">SELECT COLOR</p>
      <div className="flex space-x-1 mt-2">
        <div className="w-[30px] h-[30px] bg-[#665C50] rounded-full flex justify-center items-center">
          <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
        </div>
        <div className="w-[30px] h-[30px] bg-[#314F4A] rounded-full flex justify-center items-center">
          <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
        </div>
        <div className="w-[30px] h-[30px] bg-[#31344F] rounded-full flex justify-center items-center">
          <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
    </div>

    {/* Choose Size */}
    <div>
      <p className="text-gray-500 mt-4">CHOOSE SIZE</p>
      <div className="flex space-x-3 mt-2">
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[40px] bg-[#F0F0F0] text-gray-400">
          small
        </div>
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[40px] bg-[#F0F0F0] text-gray-400">
          medium
        </div>
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[40px] bg-[#F0F0F0] text-gray-400">
          large
        </div>
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[40px] bg-[#F0F0F0] text-gray-400">
          x-large
        </div>
      </div>
    </div>

    {/* Button */}
    <div className="flex justify-start items-center mt-5 space-x-4">
      <div className="w-[100px] h-[40px] p-3 flex justify-between items-center rounded-[40px] bg-[#F0F0F0] text-gray-400">
        <Minus />
        1
        <Plus />
      </div>

      <Button className="text-white w-[300px] bg-black">Add To Cart</Button>
    </div>
  </div>
  
</div>
<CustomerTestimonials />
<T_shirts />
</>


 )
}