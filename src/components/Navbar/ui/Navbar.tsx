'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='fixed bottom-0 bg-mainbg py-[8px] px-[16px] w-full flex justify-center gap-[8px] z-20'>

            {[
                { href: "/", icon: "/images/navbar/Home.svg", label: "Home" },
                { href: "/buyEsim", icon: "/images/navbar/buyeSim.svg", label: "Buy eSim" },
                { href: "/myEsim", icon: "/images/navbar/mySim.svg", label: "my eSim" }
            ].map(({ href, icon, label }) => (
                <motion.div
                    key={href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ borderColor: pathname === href ? "#3B82F6" : "#0C1132" }}
                    transition={{ duration: 0.2 }}
                    className={`bg-bglight rounded-[16px] text-center max-w-[104px] w-full h-[54px] flex flex-col justify-center border border-bglight`}
                >
                    <Link href={href}>
                        <div className='flex flex-col text-center items-center'>
                            <Image src={icon} width={24} height={24} alt={`${label} Icon`} />
                            <p className='font-roboto'>{label}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}

        </div>
    )
}

export default Navbar;
