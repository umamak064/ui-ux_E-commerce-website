"use client"

import { Button } from "@/components/ui/button"
import { HiOutlineMenu } from "react-icons/hi";
import {NavigationMenuDemo} from "./NavigationMenu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button><HiOutlineMenu /></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
             {/*navbar*/}
            <ul className=" ">
               <li className="grid grid-cols-1 gap-y-5">
               <Link href={ " "}><NavigationMenuDemo /></Link>
               <Link className="ml-3"  href={ " /"}>On Sale</Link>
               <Link className="ml-3" href={ " /products"}>New Arrivals</Link>
               <Link className="ml-3" href={ " /"}>Brands</Link>

               </li>
            </ul>
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
