import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IoFilter } from "react-icons/io5";

export function AccordionDemo() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold">Filter</h1>
        <IoFilter />
      </div>
      <Accordion type="single" collapsible className="w-full text-gray-400">
        <AccordionItem value="item-1">
          <AccordionTrigger>T-shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shorts</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Hoodie</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Jeans</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
