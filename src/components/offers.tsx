
import { PiEnvelope } from "react-icons/pi";

export default function Offers(){
    return(
        <main className=" w-full flex justify-center items-center">
            <div className="w-[80%] h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px]">
                <h1 className="text-2xl sm:text-4xl font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className="space-y-3">
                             <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                             <PiEnvelope className="text-2xl ml-2 mt-1 text-black "  />
                               <input type="text" placeholder="Enter your email address" className=" ml-2 w-full h-full outline-none rounded-[62px] bg-[#F0F0F0]"></input>       
                             </div>  
                            
                               <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                               <p className="text-black">Subscribe to Newsletter</p>
                               </div>   
                </div>

            </div>
        </main>
    )
}