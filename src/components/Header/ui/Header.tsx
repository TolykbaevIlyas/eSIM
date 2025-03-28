'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const languages = [
  { code: 'ru', name: 'Russian', flag: '/images/langs/ru.svg' },
  { code: 'en', name: 'English', flag: '/images/langs/en.png' },
]

const Header = () => {
  const [language, setLanguage] = useState('en')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center bg-mainbg py-4 px-6 relative">
      <div className="flex items-center gap-5">
        <Image src="/images/logos/logo.svg" width={24} height={44} alt="logo" />
        <h3>eSim Unlimited</h3>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 p-2 rounded-lg border border-blue-400">
            <Image src={languages.find(lang => lang.code === language)?.flag || ''} width={24} height={24} alt={language} />
          </button>

          {isDropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-12 bg-[#0A0F24] shadow-lg rounded-xl p-2 border border-blue-400"
            >
              {languages.map(({ code, name, flag }) => (
                <button
                  key={code}
                  onClick={() => { setLanguage(code); setIsDropdownOpen(false); }}
                  className="flex items-center gap-3 w-full px-4 py-2 rounded-xl border border-blue-400 hover:bg-[#10172A] transition-all"
                >
                  <Image src={flag} width={24} height={24} alt={name} />
                  <span className="text-white">{name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="p-2">
          <Image src="/images/header/burgerMenu.svg" width={32} height={32} alt="Menu" />
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50" 
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="absolute right-0 top-0 h-full w-[320px] bg-bglight shadow-lg p-6 flex flex-col items-start gap-4"
          >
            <div className='flex justify-between w-full'>
              <div className='flex items-center px-[8px] py-[6px] gap-[4px] rounded-[20px] border-1 border-[#27A6E1]'>
                <Image src="/images/header/profilePhoto.svg" width={24} height={24} alt="user profile photo"/>
                <p>Testuser</p>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="self-end text-white text-lg">
                <Image src="/images/header/burgerMenu.svg" width={32} height={32} alt="Menu" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-white">
              <a href="/guides" className="hover:text-blue-400">Guides</a>
              <a href="/faq" className="hover:text-blue-400">FAQ</a>
              <a href="/support-device" className="hover:text-blue-400">Supported Devices</a>
              <a href="#" className="hover:text-blue-400">Log out</a>
            </nav>
            <div className='flex gap-[4px] mt-[24px]'>
              <div className='p-[16px] flex rounded-[20px] gap-[10px] items-center bg-mainbg border-1 border-[#27A6E1]'>
                <Image src="/images/header/tg.svg" width={16} height={16} alt='telegramm icon'/>
                <p className='text-[14px]'>Communuty</p>
              </div>
              <div className='p-[16px] flex rounded-[20px] gap-[10px] items-center bg-mainbg border-1 border-[#27A6E1]'>
                <Image src="/images/header/tg.svg" width={16} height={16} alt='telegramm icon'/>
                <p className='text-[14px]'>Support</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
