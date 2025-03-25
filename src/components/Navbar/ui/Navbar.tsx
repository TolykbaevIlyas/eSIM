import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed bottom-0 bg-mainbg py-[8px] px-[16px] w-full flex justify-center gap-[8px]'>
        <div className='bg-bglight rounded-[16px] text-center items-center max-w-[104px] w-full h-[54px] flex flex-col justify-center'>
            <div className='flex flex-col text-center items-center'>
                <Image src="/images/navbar/Home.svg" width={24} height={24} alt='HomeIcon'/>
                <p className='font-roboto'>Home</p>
            </div>
        </div>
        <div className='bg-bglight rounded-[16px] text-center items-center max-w-[104px] w-full h-[54px] flex flex-col justify-center'>
            <div className='flex flex-col text-center items-center'>
                <Image src="/images/navbar/buyeSim.svg" width={24} height={24} alt='BuyIcon'/>
                <p className='font-roboto text-[14px]'>Buy eSim</p>
            </div>
        </div>
        <div className='bg-bglight rounded-[16px] text-center items-center max-w-[104px] w-full h-[54px] flex flex-col justify-center'>
            <div className='flex flex-col text-center items-center'>
                <Image src="/images/navbar/mySim.svg" width={24} height={24} alt='mySimIcon'/>
                <p className='font-roboto'>Home</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar