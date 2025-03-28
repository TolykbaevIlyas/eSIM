'use client'
import { useState, useEffect } from 'react';
import { PricingCard } from "@/components/PricingCard";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Package {
  packageCode: string;
  slug: string;
  name: string;
  price: number;
  currencyCode: string;
  volume: number;
  smsStatus: number;
  dataType: number;
  unusedValidTime: number;
  duration: number;
  durationUnit: string;
  location: string;
  description: string;
  activeType: number;
  favorite: boolean;
  retailPrice: number;
  speed: string;
  ipExport: string;
  supportTopUpType: number;
  fupPolicy: string;
  locationNetworkList: any[];
}

interface PageProps {
  params: {
    type: string; // "local", "regional", "global"
    slug: string; // для local — код страны (например, "es"); для regional/global — slug региона или пакета
  };
}

export default function CountryPage({ params }: PageProps) {
  const { type, slug } = params;
  const displayType = type.charAt(0).toUpperCase() + type.slice(1);
  const [packagesData, setPackagesData] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  // Функция для фильтрации, если значение location является строкой с кодами через запятую
  const filterByLocationString = (pkgLocation: string, slug: string) => {
    return pkgLocation.split(',')
      .map(item => item.trim().toLowerCase())
      .includes(slug.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: Package[] = [];
        if (type === 'local') {
          const res = await fetch('/countryPackages.json');
          data = await res.json();
          data = data.filter(pkg => pkg.location.toLowerCase() === slug.toLowerCase());
        } else if (type === 'regional') {
          const res = await fetch('/regionalPackages.json');
          data = await res.json();
          // Если выбран регион "eu" – фильтруем пакеты, где slug начинается с "eu" (или, если удобнее, где name содержит "Europe")
          data = data.filter(pkg => pkg.slug.toLowerCase().startsWith(slug));
        } else if (type === 'global') {
          const res = await fetch('/globalPackages.json');
          data = await res.json();
          // Для глобальных, если в UI slug, например, "3gb" – фильтруем по вхождению "3gb" в name (или slug)
          data = data.filter(pkg => pkg.name.toLowerCase().includes(slug));
        }
        setPackagesData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching package data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
    const interval = setInterval(() => fetchData(), 7200000);
    return () => clearInterval(interval);
  }, [type, slug]);
  

  return (
    <div className="container mx-auto p-4 bg-mainbg">
      <div className="flex items-center text-center gap-1">
        <Link href="/buyEsim" className="text-blue-500 underline object-contain">
          <Image
            src="/images/buyEsimPage/arrowL.svg"
            width={14}
            height={24}
            alt="arrow left"
            className="object-contain"
          />
        </Link>
        {displayType === 'Global' ? 
          <h1 className="text-[16px] font-bold">
            {slug.replace(/-/g, " ")}
          </h1>
        : 
          <h1 className="text-[16px] font-bold">
            Available Packages for {slug.replace(/-/g, " ")}
          </h1>
        }
      </div>
      <div className="mt-6">
        {loading ? (
          <p className="text-white">Loading packages...</p>
        ) : (
          <div className="flex flex-col items-center space-y-6 bg-mainbg min-h-screen p-6">
            {packagesData.length > 0 ? (
              <>
                <PricingCard {...packagesData[0]} />
                <h2 className="text-lg text-white font-semibold">All tariffs</h2>
                <div className="w-full max-w-5xl">
                  <Swiper spaceBetween={20} slidesPerView={1}>
                    {packagesData.map((pkg, index) => (
                      <SwiperSlide key={index}>
                        <PricingCard {...pkg} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            ) : (
              <p className="text-white">No packages available for {slug}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
