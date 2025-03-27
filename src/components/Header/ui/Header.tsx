'use client'

import { useState } from 'react'
import Image from 'next/image'

const languages = [
  { code: 'ru', name: 'Russian', flag: '/images/langs/ru.svg' },
  { code: 'en', name: 'English', flag: '/images/langs/en.png' },
]

const Header = () => {
  const [language, setLanguage] = useState('en')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // const changeLanguage = (locale: string) => {
  //   setLanguage(locale)
  //   setIsDropdownOpen(false)
  // }

  return (
    <header className="flex justify-between items-center bg-mainbg py-4 px-6">
      <div className="flex items-center gap-5">
        <Image src="/images/logos/logo.svg" width={24} height={44} alt="logo" />
        <h3>eSim Unlimited</h3>
      </div>
      
      <div className="relative">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 p-2 rounded-lg border border-blue-400">
          <Image src={languages.find(lang => lang.code === language)?.flag || ''} width={24} height={24} alt={language} />
        </button>

        {/* {isDropdownOpen && (
          <div className="absolute right-0 top-12 bg-[#0A0F24] shadow-lg rounded-xl p-2 border border-blue-400">
            {languages.map(({ code, name, flag }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className="flex items-center gap-3 w-full px-4 py-2 rounded-xl border border-blue-400 hover:bg-[#10172A] transition-all"
              >
                <Image src={flag} width={24} height={24} alt={name} />
                <span className="text-white">{name}</span>
              </button>
            ))}
          </div>
        )} */}
      </div>
    </header>
  )
}

export default Header
