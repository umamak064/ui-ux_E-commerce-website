import { AccordionDemo } from "@/components/accordion";
import { SliderDemo } from "@/components/slider";
import { CheckboxDemo } from "@/components/checkbox";
import Size from "@/components/size";
import { Dressstyle } from "@/components/dressstyle";
import CasualShirts from "@/components/shirts";
export default function casual(){
  return(
    <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
      {/*left*/}
      <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px]">
        <AccordionDemo />
        <SliderDemo />
        <CheckboxDemo />
        <Size />
        <Dressstyle />
      </div>
      {/*right*/}
      <div className="w-ful md:w-[900px] h-full sm:h-[1200px]">
        <CasualShirts />
      </div>
    </main>
  )
}