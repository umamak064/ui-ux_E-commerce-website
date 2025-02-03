import { Playfair_Display, Cinzel, Merriweather, Prata, Montserrat } from "next/font/google";

const Playfair = Playfair_Display({ subsets: ["latin"] });
const Cinze = Cinzel({ subsets: ["latin"] });
const Merri = Merriweather({ subsets: ["latin"],  weight: "400" }); // Updated font import
const Prat = Prata({ subsets: ["latin"], weight: '400' });
const Montserra = Montserrat({ subsets: ["latin"] });

export default function Fonts() {
  return (
    <div className="bg-black w-full h-[122px] text-white flex justify-center space-x-4 md:justify-between items-center px-6 flex-wrap max-w-screen-2xl mx-auto">
      <h1 className={`${Playfair.className} text-2xl md:text-4xl`}>VERSACE</h1>
      <h1 className={`${Cinze.className} text-2xl md:text-4xl`}>ZARA</h1>
      <h1 className={`${Merri.className} text-2xl md:text-4xl`}>GUCCI</h1> {/* Updated with Merriweather */}
      <h1 className={`${Prat.className} text-2xl md:text-4xl`}>PARADA</h1>
      <h1 className={`${Montserra.className} text-2xl md:text-4xl`}>Calvin Klein</h1>
    </div>
  );
}
