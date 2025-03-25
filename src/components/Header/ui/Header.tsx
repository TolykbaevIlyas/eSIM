import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-mainbg py-[15px] px-[30px]'>
      <div className='flex items-center gap-5'>
        <Image src={"/images/logos/logo.svg"} width={24} height={44} alt='logo'/>
        <h3>eSim unlimited</h3>
      </div>
      <div className='flex items-center gap-5'>
        <Image src="/images/langs/ru.svg" width={24} height={24} alt='lang'/>
        <Image src="/images/header/burgerMenu.svg" width={20} height={16} alt='burger'/>
      </div>
    </header>
  )
}

export default Header