import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import {NavigationMenuDemo} from "./NavigationMenu";
import { SheetSide } from "./sheet";
export default function Header() {
  return (
  <header className="w-full h-[60px] flex justify-between items-center max-w-screen-2xl mx-auto">
    {/*left*/}
    <div className=" flex justify-center items-center">
      <SheetSide/>
    <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
    {/*navbar*/}
    <ul className="hidden md:block ">
        <li className="space-x-5 flex items-center">
            <Link  href={ " "}><NavigationMenuDemo /></Link>
            <Link  href={ "/ "}>On Sale</Link>
            <Link  href={ "/products "}>New Arrivals</Link>
            <Link  href={ " /"}>Brands</Link>

        </li>
    </ul>
     {/*search bar*/}
     <div className="hidden md:block ">
         <div className="flex justify-start w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
           <IoSearch className="text-xl ml-2 mt-2" />
           <input type="text" placeholder="search item......" className=" ml-2 w-full h-full outline-none rounded-[62px] bg-[#F0F0F0]"></input>       
         </div>
     </div>   
     

      {/*cart*/}
      <div className="flex justify-center mr-7 space-x-5">
      <IoSearch className="text-xl ml-2 mt-1 md:hidden text-2xl" />
      <Link href={"/cart"}>
      <IoCartOutline  className="text-2xl"/>
      </Link>
      <RiAccountPinCircleFill className="text-2xl"/>
      </div>
  </header>
  );
}
