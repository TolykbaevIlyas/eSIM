'use client'

import Image from "next/image";

const advantages = [
  {
    id: 1,
    image: {
      path: "/images/mainpage/1.svg",
      width: 43,
      height: 43,
      alt: "Two way call"
    },
    text: "Two-way Calls and Messages",
    description: "Stay connected: make calls and send messages on any device, anytime, anywhere."
  },
  {
    id: 2,
    image: {
      path: "/images/mainpage/5.svg",
      width: 48,
      height: 48,
      alt: "Convenient Payment Options"
    },
    text: "Convenient Payment Options",
    description: "Securely complete transactions with our advanced payment system, supporting both credit cards and cryptocurrency"
  },
  {
    id: 3,
    image: {
      path: "/images/mainpage/3.svg",
      width: 48,
      height: 48,
      alt: "24/7 Customer Support"
    },
    text: "24/7 Customer Support",
    description: "If you have any queries, simply contact us and we'll get back to you right away."
  },
  {
    id: 4,
    image: {
      path: "/images/mainpage/4.svg",
      width: 48,
      height: 48,
      alt: "Transparent Conditions"
    },
    text: "Transparent Conditions",
    description: "No extra charges, no roaming costs—only clear, straightforward pricing"
  },
  {
    id: 5,
    image: {
      path: "/images/mainpage/6.svg",
      width: 48,
      height: 48,
      alt: "User-friendly Interface"
    },
    text: "User-friendly Interface",
    description: "Thanks to our user-friendly design and extensive multilingual support, convenience is just one tap away"
  },
  {
    id: 6,
    image: {
      path: "/images/mainpage/7.svg",
      width: 48,
      height: 48,
      alt: "Quick and Seamless Setup"
    },
    text: "Quick and Seamless Setup",
    description: "Set up your eSIM in no time—just choose your perfect plan from our diverse selection and activate it right away"
  },
]

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-bglight flex flex-col items-center rounded-[16px]">
        <Image className="absolute" src="/images/mainpage/WorldMap.svg" width={332} height={332} alt="World map"/>
        <p className="z-30 mt-[53px] text-[32px] text-center">Stay Connected Anywhere</p>
        <p className="text-[16px] text-center mt-[16px]">with</p>
        <h1 className="mt-[48px] text-[48px] bg-gradient-to-b from-[#27A6E1] to-[#4381EB] bg-clip-text text-transparent font-bold">eSim Unlimited</h1>
        <p className="text-[16px] text-center mt-[16px] px-[40px]">High-speed internet in 150+ countries. No roaming fees, no hidden charges, and no physical SIM required</p>
        <button className="mt-[48px] w-full bg-gradient-to-r from-[#27A6E1] to-[#4381EB] max-w-[328px] rounded-[16px] py-[10px] mb-[54px] text-[24px] font-bold">Buy eSim</button>
      </div>
      <div className="mt-[50px]">
        <h3 className="text-[32px] text-center">Our Advantages</h3>
        <div className="mt-[24px] flex flex-col items-center gap-[16px]">
          {advantages.map(advantage=> 
              <div key={advantage.id} className="max-w-[328px] w-full bg-gradient-to-r from-[#1D2240] to-[#000625] rounded-[16px] flex flex-col items-center text-center py-[18px] gap-[16px] px-[18px]">
                <Image src={advantage.image.path} width={advantage.image.width} height={advantage.image.height} alt={advantage.image.alt} className=""/>
                <p className="text-[16px] font-[600] font-roboto">{advantage.text}</p>
                <p className="text-[16px] font-[300]">{advantage.description}</p>
              </div>
          )}
           <button className="w-full bg-gradient-to-r from-[#27A6E1] to-[#4381EB] max-w-[328px] rounded-[16px] py-[10px] text-[24px] font-bold">Try now </button>

        </div>
      </div>
      <div className="flex flex-col mt-[50px] items-center mb-[120px]">
        <h3 className="text-[32px] font-[400]">eSIM Setup Guide</h3>
        <p className="mt-[24px] text-[16px] font-[300] px-[16px] text-center">Take these 3 easy steps to get eSIM on your phone!</p>
        <div className="mt-[16px] max-w-[328px] w-full bg-gradient-to-r from-[#1D2240] to-[#000625] rounded-[16px] flex justify-between h-[293px] items-center text-center py-[18px] gap-[16px] px-[18px]">
          <Image src="/images/mainpage/arrowL.svg" alt="buy Now" width={44} height={44}/>
          <Image src="/images/mainpage/buyNow.svg" alt="buy Now" width={115} height={149}/>
          <Image src="/images/mainpage/arrowR.svg" alt="buy Now" width={44} height={44}/>
        </div>
        <div className="flex flex-col gap-[16px] items-center text-center mt-[16px]">
          <p className="font-[500]">Choose eSIM Data Plan</p>
          <p className=" font-[300] max-w-[328px] w-full">Pick an eSIM data plan that suits your needs. Stay connected with the entire world, anytime, anywhere.</p>
          <div className="flex items-center gap-[8px]">
              <div className="py-[10px] px-[16px] flex items-center text-center bg-white rounded-full text-black font-[500] text-[16px]">1</div>
              <div className="py-[10px] px-[16px] flex items-center text-center bg-gradient-to-r from-[#1D2240] to-[#000625] rounded-full text-white font-[500] text-[16px]">2</div>
              <div className="py-[10px] px-[16px] flex items-center text-center bg-gradient-to-r from-[#1D2240] to-[#000625] rounded-full text-white font-[500] text-[16px]">3</div>
              <div className="py-[10px] px-[16px] flex items-center text-center bg-gradient-to-r from-[#1D2240] to-[#000625] rounded-full text-white font-[500] text-[16px]">4</div>
          </div>
          <button className="mt-[10px] w-full bg-gradient-to-r from-[#27A6E1] to-[#4381EB] max-w-[328px] rounded-[16px] py-[10px] text-[24px] font-bold">Get mobile data</button>

        </div>
      </div >

    </main>
  );
}
