'use client'

import Image from "next/image";
import { useState } from "react";

const Local = [
  {
    id: 1,
    name: "Aland Islands",
    image: {
      path: "/images/buyEsimPage/1.svg",
      alt: "Aland Islands"
    }
  },
  {
    id: 2,
    name: "Albania",
    image: {
      path: "/images/buyEsimPage/2.svg",
      alt: "Albania"
    }
  },
  {
    id: 3,
    name: "Algeria",
    image: {
      path: "/images/buyEsimPage/3.svg",
      alt: "Algeria"
    }
  },
  {
    id: 4,
    name: "Argentina",
    image: {
      path: "/images/buyEsimPage/4.svg",
      alt: "Argentina"
    }
  },
  {
    id: 5,
    name: "Armenia",
    image: {
      path: "/images/buyEsimPage/5.svg",
      alt: "Armenia"
    }
  },
  {
    id: 6,
    name: "Australia",
    image: {
      path: "/images/buyEsimPage/6.svg",
      alt: "Australia"
    }
  },
  {
    id: 7,
    name: "Austria",
    image: {
      path: "/images/buyEsimPage/7.svg",
      alt: "Austria"
    }
  },
  {
    id: 8,
    name: "Azerbaijan",
    image: {
      path: "/images/buyEsimPage/8.svg",
      alt: "Azerbaijan"
    }
  },
  {
    id: 9,
    name: "Bahrain",
    image: {
      path: "/images/buyEsimPage/9.svg",
      alt: "Bahrain"
    }
  },
  {
    id: 10,
    name: "Bangladesh",
    image: {
      path: "/images/buyEsimPage/10.svg",
      alt: "Bangladesh"
    }
  },
  {
    id: 11,
    name: "Belarus",
    image: {
      path: "/images/buyEsimPage/11.svg",
      alt: "Belarus"
    }
  },
  {
    id: 12,
    name: "Belgium",
    image: {
      path: "/images/buyEsimPage/12.svg",
      alt: "Belgium"
    }
  },
  {
    id: 13,
    name: "Bolivia",
    image: {
      path: "/images/buyEsimPage/13.svg",
      alt: "Bolivia"
    }
  },
  {
    id: 14,
    name: "Bosnia and Herzegovina",
    image: {
      path: "/images/buyEsimPage/14.svg",
      alt: "Bosnia and Herzegovina"
    }
  },
  {
    id: 15,
    name: "Botswana",
    image: {
      path: "/images/buyEsimPage/15.svg",
      alt: "Botswana"
    }
  }
];

const Regional =[
  {
    id: 1,
    name: "Europe",
    image: {
      path: "/images/buyEsimPage/region/1.svg",
      alt: "Europe"
    }
  },
  {
    id: 2,
    name: "South america",
    image: {
      path: "/images/buyEsimPage/region/2.svg",
      alt: "South america"
    }
  },
  {
    id: 3,
    name: "North america",
    image: {
      path: "/images/buyEsimPage/region/3.svg",
      alt: "North america"
    }
  },
  {
    id: 4,
    name: "Africa",
    image: {
      path: "/images/buyEsimPage/region/4.svg",
      alt: "Africa"
    }
  },
  {
    id: 5,
    name: "Asia",
    image: {
      path: "/images/buyEsimPage/region/5.svg",
      alt: "Asia"
    }
  },
  {
    id: 6,
    name: "Carribean",
    image: {
      path: "/images/buyEsimPage/region/6.svg",
      alt: "Carribean"
    }
  },
]

const Global =[
  {
    id: 1,
    name: "Global 1GB",
    image: {
      path: "/images/buyEsimPage/global/1.svg",
      alt: "Global 1GB"
    }
  },
  {
    id: 2,
    name: "Global 3 GB",
    image: {
      path: "/images/buyEsimPage/global/2.svg",
      alt: "Global 3 GB"
    }
  },
  {
    id: 3,
    name: "Global 5 GB",
    image: {
      path: "/images/buyEsimPage/global/3.svg",
      alt: "Global 5 GB"
    }
  },
  {
    id: 4,
    name: "Global 10 GB",
    image: {
      path: "/images/buyEsimPage/global/4.svg",
      alt: "Global 10 GB"
    }
  },
  {
    id: 5,
    name: "Global 20 GB",
    image: {
      path: "/images/buyEsimPage/global/5.svg",
      alt: "Global 20 GB"
    }
  }
]

const BuyESIM = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState("Local")
  return (
    <div className="mt-[24px] flex flex-col items-center mb-[70px]">
      <div className="max-w-[328px] w-full">
        <h2 className="text-[32px]">Buy eSim</h2>
        <div className="bg-bglight w-full h-[60px] rounded-[12px] flex items-center justify-center mt-[8px]">
          <div className={`max-w-[101px] w-full h-[39px] ${type === "Local" ? "bg-gradient-to-r from-[#27A6E1] to-[#4381EB]" : ""} flex flex-col justify-center items-center text-[16px] rounded-[4px]`} onClick={()=> setType("Local")}>Local</div>
          <div className={`max-w-[101px] w-full h-[39px] ${type === "Regional" ? "bg-gradient-to-r from-[#27A6E1] to-[#4381EB]" : ""} flex flex-col justify-center items-center text-[16px] rounded-[4px]`} onClick={()=> setType("Regional")}>Regional</div>
          <div className={`max-w-[101px] w-full h-[39px] ${type === "Global" ? "bg-gradient-to-r from-[#27A6E1] to-[#4381EB]" : ""} flex flex-col justify-center items-center text-[16px] rounded-[4px]`} onClick={()=> setType("Global")}>Global</div>
        </div>
        {type === "Local" ? 
        <>
          <div className="mt-[24px]">
            <h3 className="text-center">Select a Country</h3>
            <div className="relative w-full max-w-md mt-[16px]">
              <input
                type="text"
                placeholder="search country"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className=" w-full rounded-[16px] bg-bglight  text-white placeholder-gray-400 px-4 py-2 pr-10 outline-none border border-[#2d2d44] focus:border-blue-500"
              />
              <button className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white">
                <Image src="/images/buyEsimPage/search.svg" width={24} height={25} alt="esim"/>
              </button>
            </div>
          </div>
          <div className="mt-[24px] flex flex-col gap-[10px]">
            {
            Local.map(loc => 
              <div key={loc.id} className="w-full bg-bglight px-[15px] h-[80px] rounded-[20px] flex gap-[16px] items-center">
                <Image src={loc.image.path} width={33} height={32} alt={loc.image.alt}/>
                <h4>{loc.name}</h4>
              </div>
            )}
          </div>
        </> :
        type === "Regional" ? 
        <>
          <div className="mt-[24px]">
              <h3 className="text-center">Select a Region</h3>
            </div>
            <div className="mt-[24px] flex flex-col gap-[10px]">
              {
              Regional.map(loc => 
                <div key={loc.id} className="w-full bg-bglight px-[15px] h-[80px] rounded-[20px] flex gap-[16px] items-center">
                  <Image src={loc.image.path} width={33} height={32} alt={loc.image.alt}/>
                  <h4>{loc.name}</h4>
                </div>
              )}
            </div>
        </>: 
        type === "Global" ?
         <>
          <div className="mt-[24px]">
                <h3 className="text-center">Select a Global eSim Package</h3>
              </div>
              <div className="mt-[24px] flex flex-col gap-[10px]">
                {
                Global.map(loc => 
                  <div key={loc.id} className="w-full bg-bglight px-[15px] h-[80px] rounded-[20px] flex gap-[16px] items-center">
                    <Image src={loc.image.path} width={33} height={32} alt={loc.image.alt}/>
                    <h4>{loc.name}</h4>
                  </div>
                )}
              </div>
         </>
          : null
      }

      </div>
    </div>
  );
};

export default BuyESIM;
