'use client'
import { PricingCard } from "@/components/PricingCard";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface PageProps {
  params: {
    type: string; // например "local", "regional", "global"
    slug: string; // например "brazil"
  };
}

const pricingPlans = [
  {
    title: 'Global 1GB',
    price: '33.00',
    data: '5GB',
    duration: '30 days',
    topUp: 'Yes',
    packageName:'Package name ',
    // coverage: '120 countries',
    // locations: ['Japan', 'South Korea', 'China'],
  },
  {
    title: 'Global 5GB',
    price: '33.00',
    data: '5GB',
    duration: '30 days',
    topUp: 'Yes',
    packageName:'Package name ',
    // coverage: '120 countries',
    // locations: ['PR', 'HK', 'PT', 'HN', 'P'],
  },
];

const RegionalPlans = [
  {
    packageName: 'Caribbean (20+ areas) 5GB/Day',
    title: 'Regional 5GB',
    price: '33.00',
    data: '5GB',
    duration: '30 days',
    topUp: 'Yes',
    coverage: '120 countries',
    locations: ['Japan', 'South Korea', 'China'],
  },
  {
    packageName: 'Caribbean (20+ areas) 5GB/Day',
    title: 'Regional 5GB',
    price: '33.00',
    data: '5GB',
    duration: '30 days',
    topUp: 'Yes',
    coverage: '120 countries',
    locations: ['PR', 'HK', 'PT', 'HN', 'P'],
  },
];

const GlobalPlans = [
  {
    packageName: 'Package name',
    title: 'Global 5GB',
    price: '33.00',
    data: '5GB',
    duration: '30 days',
    topUp: 'Yes',
    coverage: '120 countries',
    locations: ['Japan', 'South Korea', 'China'],
  },
  {
    packageName: 'Package name',
    title: 'Global 5GB',
    price: '33.00',
    data: '5GB',
    duration: '30 days',
    topUp: 'Yes',
    coverage: '120 countries',
    locations: ['PR', 'HK', 'PT', 'HN', 'P'],
  },
];



export default function CountryPage({ params }: PageProps) {
  const { type, slug } = params;
  const displayType = type.charAt(0).toUpperCase() + type.slice(1);
  
  return (
    <div className="container mx-auto p-4 bg-mainbg">
      <div className="flex items-center  text-center gap-1">
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
        </h1>}
      
      </div>
      <div className="mt-6">
        {type === "local" && (
          <div className="flex flex-col items-center space-y-6 bg-mainbg min-h-screen p-6">
          <PricingCard {...pricingPlans[0]} />
          <h2 className="text-lg text-white font-semibold">All tariffs</h2>
          <div className="w-full max-w-5xl">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              // breakpoints={{
              //   768: { slidesPerView: 3 },
              // }}
              // className="gap-[20px] flex flex-col"
            >
              {pricingPlans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <PricingCard {...plan} />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
        )}
        {type === "regional" && (
          <div className="flex flex-col items-center space-y-6 bg-mainbg min-h-screen p-6">
          <PricingCard {...RegionalPlans[0]} />
          <h2 className="text-lg text-white font-semibold">All tariffs</h2>
          <div className="w-full max-w-5xl">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              // breakpoints={{
              //   768: { slidesPerView: 3 },
              // }}
              // className="gap-[20px] flex flex-col"
            >
              {RegionalPlans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <PricingCard {...plan} />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
        )}
        {type === "global" && (
          <div className="flex flex-col items-center space-y-6 bg-mainbg min-h-screen p-6">
          <PricingCard {...GlobalPlans[0]} />
          <h2 className="text-lg text-white font-semibold">All tariffs</h2>
          <div className="w-full max-w-5xl">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              // breakpoints={{
              //   768: { slidesPerView: 3 },
              // }}
              // className="gap-[20px] flex flex-col"
            >
              {GlobalPlans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <PricingCard {...plan} />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
        )}
      </div>
    </div>
  );
}
