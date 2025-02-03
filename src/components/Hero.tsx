import Image from "next/image";

export default function Hero() {
  return (
    <main className="w-full h-full md:h-[500] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1] max-w-screen-2xl mx-auto">
      {/*left*/}
      <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
        <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="text-sm md:mt-3">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="text-sm bg-black py-2 px-8 text-white rounded-[16px] mt-4">Shop Now</button>
      </div>
      {/*right*/}
      <div className="relative">
        <Image src={"/profile.png"} className=" w-[500px] mr-5"width={200} height={200} alt="profile"></Image>
       {/*star*/}  
        <Image src={"/star.png"} className=" w-[50px] md:w-[56px] absolute top-[110px] md:top-[300px] left-[30px] md:left-[-100px]"width={200} height={200} alt="profile"></Image>
        <Image src={"/star.png"} className=" w-[90px] md:w-[104px] absolute top-[3px] right-[20px] md:top-[50px] md:right-[30px]"width={200} height={200} alt="profile"></Image>
      </div>
    </main>
  );
}
