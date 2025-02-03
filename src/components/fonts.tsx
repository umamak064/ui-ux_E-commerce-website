// Import fonts
import { Playfair_Display, Cinzel, Bodoni_Moda, Prata, Montserrat } from "next/font/google";

const Playfair = Playfair_Display({ subsets: ["latin"] });
const Cinze = Cinzel({ subsets: ["latin"] });
const Bodoni = Bodoni_Moda({ subsets: ["latin"], weight: '400' });  // Added weight like Prata
const Prat = Prata({ subsets: ["latin"], weight: '400' });
const Montserra = Montserrat({ subsets: ["latin"] });

export default function Fonts() {
  return (
    <div className="bg-black w-full h-[122px] text-white flex justify-center space-x-4 md:justify-between items-center px-6 flex-wrap max-w-screen-2xl mx-auto">
      <h1 className={`${Playfair.className} text-2xl md:text-4xl`}>VERSACE</h1>
      <h1 className={`${Cinze.className} text-2xl md:text-4xl`}>ZARA</h1>
      <h1 className={`${Bodoni.className} text-2xl md:text-4xl`}>GUCCI</h1>
      <h1 className={`${Prat.className} text-2xl md:text-4xl`}>PARADA</h1>
      <h1 className={`${Montserra.className} text-2xl md:text-4xl`}>Calvin Klein</h1>
    </div>
  );
}
