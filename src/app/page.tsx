'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-bglight flex flex-col items-center">
        <Image className="absolute" src="/images/mainpage/WorldMap.svg" width={332} height={332} alt="World map"/>
        <p className="z-30 mt-[53px] text-[32px] text-center">Stay Connected Anywhere</p>
        <p className="text-[16px] text-center mt-[16px]">with</p>
        <h1 className="mt-[48px] text-[48px] bg-gradient-to-b from-[#27A6E1] to-[#4381EB] bg-clip-text text-transparent font-bold">eSim Unlimited</h1>
        <p className="text-[16px] text-center mt-[16px] px-[40px]">High-speed internet in 150+ countries. No roaming fees, no hidden charges, and no physical SIM required</p>
        <button className="mt-[48px] w-full bg-gradient-to-r from-[#27A6E1] to-[#4381EB] max-w-[328px] rounded-[16px] py-[10px] mb-[54px]">Buy eSim</button>
      </div>


    </main>
  );
}
