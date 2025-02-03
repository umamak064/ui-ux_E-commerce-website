import Image from "next/image";
export default function Dress() {
    return (
      <div className="w-full h-[880] sm:h-[600px] bg-[#F0F0F0] flex flex-col justify-start items-center py-8 rounded-[40px] max-w-screen-2xl mx-auto">
        {/* Top Section */}
        <div className="mb-6">
          <h1 className="text-3xl mt-2 font-bold text-center">BROWSE BY DRESS STYLE</h1>
        </div>
        {/* Bottom Section */}
        <div className=" w-[90%] h-full sm:h-[600px]  mt-5 flex flex-wrap justify-center items-center pt-3">
          <div className="w-[400px] h-[200px] m-1 relative ">  
            <Image src={"/dress1.png"} alt="dress style" width={100} height={100} className="w-full h-full mb-2 rounded-[20px]"></Image>
            <span className="absolute top-10 left-5 font-bold  text-xl">Casual</span>
          </div>
          <div className="w-[600px] h-[200px] m-1 relative">  
            <Image src={"/dress2.png"} alt="dress style" width={100} height={100} className="w-full h-full mb-2  rounded-[20px]"></Image>
            <span className="absolute top-10 left-5 font-bold  text-xl">Formal</span>
          </div>
          <div className="w-[600px] h-[200px] m-1 relative">  
            <Image src={"/dress3.png"} alt="dress style" width={100} height={100} className="w-full h-full mb-2 rounded-[20px]"></Image>
            <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
          </div>
          <div className="w-[400px] h-[200px] m-1 relative">
            <Image src={"/dress4.png"} alt="dress style" width={100} height={100} className="w-full h-full mb-2 rounded-[20px]"></Image>
            <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
          </div>
        </div>
      </div>
    );
  }
  