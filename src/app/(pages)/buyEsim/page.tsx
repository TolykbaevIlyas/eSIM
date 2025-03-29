'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CountryItem = {
  id: number;
  code: string;
  name: string;
  image: {
    path: string;
    alt: string;
  }
};

type PackageItem = {
  packageCode: string;
  slug: string;
  name: string;
  location: string;
};

export default function BuyESIM() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"Local" | "Regional" | "Global">("Local");
  const [localCountries, setLocalCountries] = useState<CountryItem[]>([]);
  const [countryPackages, setCountryPackages] = useState<PackageItem[]>([]);
  const [regionalPackages, setRegionalPackages] = useState<PackageItem[]>([]);
  const [globalPackages, setGlobalPackages] = useState<PackageItem[]>([]);
  const [availableLocal, setAvailableLocal] = useState<CountryItem[]>([]);
  const [availableRegional, setAvailableRegional] = useState<any[]>([]);
  const [availableGlobal, setAvailableGlobal] = useState<any[]>([]);


  const regionalItems = [
    { id: 1, name: "Europe", filter: "eu", image: { path: "/images/buyEsimPage/region/1.svg", alt: "Europe" } },
    { id: 2, name: "South america", filter: "sa", image: { path: "/images/buyEsimPage/region/2.svg", alt: "South america" } },
    { id: 3, name: "North america", filter: "na", image: { path: "/images/buyEsimPage/region/3.svg", alt: "North america" } },
    { id: 4, name: "Africa", filter: "af", image: { path: "/images/buyEsimPage/region/4.svg", alt: "Africa" } },
    { id: 5, name: "Asia", filter: "as", image: { path: "/images/buyEsimPage/region/5.svg", alt: "Asia" } },
    { id: 6, name: "Carribean", filter: "ca", image: { path: "/images/buyEsimPage/region/6.svg", alt: "Carribean" } },
  ];

  const globalItems = [
    { id: 1, name: "Global 1GB", filter: "1gb", image: { path: "/images/buyEsimPage/global/1.svg", alt: "Global 1GB" } },
    { id: 2, name: "Global 3 GB", filter: "3gb", image: { path: "/images/buyEsimPage/global/2.svg", alt: "Global 3 GB" } },
    { id: 3, name: "Global 5 GB", filter: "5gb", image: { path: "/images/buyEsimPage/global/3.svg", alt: "Global 5 GB" } },
    { id: 4, name: "Global 10 GB", filter: "10gb", image: { path: "/images/buyEsimPage/global/4.svg", alt: "Global 10 GB" } },
    { id: 5, name: "Global 20 GB", filter: "20gb", image: { path: "/images/buyEsimPage/global/5.svg", alt: "Global 20 GB" } },
  ];

  useEffect(() => {
    fetch("/countries.json")
      .then((res) => res.json())
      .then((data) => {
        const countries = Object.entries(data).map(([code, name], index) => ({
          id: index + 1,
          code,
          name,
          image: {
            path: `/images/flags/${code}.png`,
            alt: name,
          },
        }));
        setLocalCountries(countries);
      })
      .catch((error) => console.error("Ошибка загрузки стран:", error));

    fetch("/countryPackages.json")
      .then((res) => res.json())
      .then((data: PackageItem[]) => {
        setCountryPackages(data);
      })
      .catch((error) => console.error("Ошибка загрузки countryPackages:", error));

    fetch("/regionalPackages.json")
      .then((res) => res.json())
      .then((data: PackageItem[]) => {
        setRegionalPackages(data);
      })
      .catch((error) => console.error("Ошибка загрузки regionalPackages:", error));

    fetch("/globalPackages.json")
      .then((res) => res.json())
      .then((data: PackageItem[]) => {
        setGlobalPackages(data);
      })
      .catch((error) => console.error("Ошибка загрузки globalPackages:", error));
  }, []);

  useEffect(() => {
    if (localCountries.length && countryPackages.length) {
      const availableCodes = new Set(
        countryPackages.map(pkg => pkg.location.toLowerCase())
      );
      const filteredLocal = localCountries.filter(country =>
        availableCodes.has(country.code.toLowerCase())
      );
      setAvailableLocal(filteredLocal);
    }
  }, [localCountries, countryPackages]);

  useEffect(() => {
    if (regionalPackages.length) {
      const filteredRegional = regionalItems.filter(region =>
        regionalPackages.some(pkg => pkg.slug.toLowerCase().startsWith(region.filter))
      );
      setAvailableRegional(filteredRegional);
    }
  }, [regionalPackages]);

  useEffect(() => {
    if (globalPackages.length) {
      const filteredGlobal = globalItems.filter(globalItem =>
        globalPackages.some(pkg => pkg.name.toLowerCase().includes(globalItem.filter))
      );
      setAvailableGlobal(filteredGlobal);
    }
  }, [globalPackages]);

  const categories: { [key in "Local" | "Regional" | "Global"]: any[] } = {
    Local: availableLocal,
    Regional: availableRegional,
    Global: availableGlobal,
  };

  const filteredItems = categories[type].filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-6 flex flex-col items-center mb-18">
      <h2 className="text-2xl font-bold">Buy eSim</h2>

      <div className="bg-bglight w-full max-w-md h-14 rounded-lg flex items-center justify-center mt-2">
        {(["Local", "Regional", "Global"] as const).map((item) => (
          <motion.div
            key={item}
            className={`cursor-pointer w-1/3 h-10 flex justify-center items-center rounded-md text-lg font-semibold transition-colors ${
              type === item
                ? "bg-gradient-to-r from-[#27A6E1] to-[#4381EB] text-white"
                : "text-gray-400"
            }`}
            onClick={() => setType(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <p className="mt-[24px]">
        {type === 'Local'
          ? 'Select a Country'
          : type === 'Regional'
          ? 'Select a Region'
          : 'Select a Global eSim Package'}
      </p>

      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg bg-bglight text-white px-4 py-2 border border-gray-700 focus:border-blue-500 outline-none"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={type}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex flex-col gap-4 w-full max-w-md"
        >
          {filteredItems.map((item) => {
            const slug =
              type === "Local"
                ? item.code.toLowerCase()
                : item.filter; 
            return (
              <Link key={item.id} href={`/buyEsim/${type.toLowerCase()}/${slug}`}>
                <motion.div
                  className="bg-bglight px-4 py-3 rounded-xl flex items-center gap-4 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src={item.image.path} width={32} height={32} alt={item.image.alt} />
                  <h4 className="text-white text-lg">{item.name}</h4>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
