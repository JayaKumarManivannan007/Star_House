// src/components/Brands.jsx
import React from "react";
import TwitchLogo from "../assets/twitch-logo-png-1868.png";
import ApertureLogo from "../assets/aperture-1142967_1280.png";
import VectorsLogo from "../assets/vectors.png";
import IstoneLogo from "../assets/istone.png";
import HoneyBeeLogo from "../assets/honey bee.png";
import EcoLifeLogo from "../assets/eco life.png";

export default function Brands() {
  const brands = [
    { name: "Twitch", img: TwitchLogo },
    { name: "APERTURE", img: ApertureLogo },
    { name: "VECTORS", img: VectorsLogo },
    { name: "ISTONE", img: IstoneLogo },
    { name: "HONEY BEE", img: HoneyBeeLogo },
    { name: "ECO LIFE", img: EcoLifeLogo },
  ];

  return (
    <section className="px-4 py-6">
      <h1 className="font-bold text-3xl mb-6 text-center">Brands</h1>
      <div className="flex flex-wrap justify-center gap-16">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center w-24 sm:w-28 md:w-32">
            <img src={brand.img} alt={brand.name} className="w-10 h-10 mb-2 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-center">{brand.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
