import Image from "next/image";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Delete } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbCollapsed } from "@/components/breadcrump";
interface Icart{
    image_url:string;
    title:string;
    id:number;
    size:string;
    color:string;
    price:string;
}
const cartItem:Icart[]=[
    {
    image_url:"/might2.png",
    title:"Gradient Graphic T-shirt",
    id:1,
    size:"Large",
    color:"white",
    price:"$145"
    },
    {
    image_url:"/might3.png",
    title:"Gradient Graphic T-shirt",
    id:2,
    size:"Large",
    color:"white",
    price:"$145"
    },
    {
    image_url:"/product3.png",
    title:"Gradient Graphic T-shirt",
    id:3,
    size:"Large",
    color:"white",
    price:"$145"
    },
]
export default function Cart(){
    return(
        <>
        <div className="pl-2">
        <BreadcrumbCollapsed />
        <h1 className="font-bold text-3xl mt-4 pl-8">YOUR CART</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-9">
            
            {/*left*/}
            <div className="w-full h-full md:w-[700px] md:h-[500px] border rounded-[20px] ">
            {
                cartItem.map((item)=>{
                    return(
                        <div className="flex justify-between mt-4 p-4 border-b">
                           <div className="flex gap-3">
                           <Image src={item.image_url} alt={item.title} className=" rounded-[16px]"width={100} height={100}></Image>
                            <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm">Size:{item.size}</p>
                            <p className="text-sm">Color:{item.color}</p>
                            <p className="font-bold">{item.price}</p>
                            </div>
                           </div>
                            {/*right*/}
                            <div className="flex flex-col justify-between items-center space-y-6">
                            <Delete />
                            <div className="w-[100px] h-[40px] p-3 flex justify-between items-center rounded-[40px] bg-[#F0F0F0] text-gray-400">
                              <Minus />
                              1
                              <Plus />
                            </div>
                            </div>

                        </div>
                    )
                })
            }
            </div>
            {/*right*/}
            <div className="w-full md:w-[500px] h-full md:h-[450px] border rounded-[20px] flex flex-col justify-start items-center p-4">
             <div className="w-[90%] space-y-3 ">
             <h1 className="text-xl font-bold">Order Summary</h1>
             <p className="flex justify-between text-gray-400">Subtotal<span className="font-bold text-black">$565</span></p>
             <p className="flex justify-between text-gray-400">Discount (-20%)<span className="font-bold text-black">-$113</span></p>
             <p className="flex justify-between text-gray-400 mb-4 border-b">Delivery Fee<span className="font-bold text-black">$15</span></p>
             <p className="flex justify-between">TOTAL<span className="font-bold text-black">$467</span></p>
             <div className="flex justify-between ">
             <input type="text" placeholder="Add Promo code" className="bg-[#F0F0F0] w-[250px] md:w-full text-gray-400 rounded-[62px] py-1 px-5 outline-none "/>
             <Button className=" rounded-[65px]">Apply</Button>
             </div>
             <Button className="w-full rounded-[65px]">Go To Checkout</Button>
             </div>
            </div>
        </div>
        </>
    )
}