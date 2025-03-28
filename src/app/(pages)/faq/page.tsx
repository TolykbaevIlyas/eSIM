'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Which devices and software versions support eSIM?",
    answer:
      "- **iOS:** You must have iOS 12.1 or later and an unlocked iPhone. iPhones older than XR or XS support eSIM.\n  (Note: If you purchased your phone under a contract, check with your carrier to unlock eSIM compatibility.)\n- **Android:** Samsung, Pixel, and many Android devices support eSIM.",
  },
  {
    question: "In what scenarios can eSIM service be used?",
    answer:
      "- Add a local data plan when traveling internationally.\n- Use eSIM for data while keeping your primary SIM for voice and SMS.",
  },
  {
    question: "How to set up eSIM for iOS/Android?",
    answer:
      "- Purchase an eSIM data plan on our website.\n- Receive the eSIM QR code by email.\n- Follow instructions in our Help Center->Guides",
  },
  {
    question: "How fast is the network speed?",
    answer:
      "4G/LTE service is available in most countries, in some countries 5G is also available.",
  },
  {
    question: "Are voice calls and SMS included?",
    answer: "Only data service is available.",
  },
  {
    question: "Can I use more than one eSIM provider when traveling abroad?",
    answer:
      "Yes, iPhones can store 10 eSIMs, and Androids can store 5-7 eSIMs. Only one eSIM can be active at a time. Label eSIMs to avoid confusion.",
  },
];

const FAQItem = ({ question, answer,index}: { question: string; answer: string ; index:number}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-bglight rounded-[16px] w-full mx-[16px] " 
    >
      <button
        className="w-full text-left p-4 bg-bglight text-white flex justify-between items-center rounded-[16px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-[19px] items-center">
            <span className="bg-gradient-to-b from-[#27A6E1] to-[#4381EB] bg-clip-text text-transparent font-bold text-[16px]">0{index + 1}</span>
            <span className="text-lg font-semibold ">{question}</span>
        </div>
        <motion.span className="bg-gradient-to-r from-[#27A6E1] to-[#4381EB] py-[8px] px-[5px] rounded-full" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <Image src="/images/faq/arrow.svg" alt="Arrow" width={14} height={28} className="object-cover"/>
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-bglight text-gray-300">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

const FAQPage = () => {
  return (
    <div className="mx-[16px]">        
        <h1 className="text-left text-[32px] ">FAQ</h1>
        <div className="flex flex-col gap-[16px] max-w-lg mx-auto mt-10 text-white rounded-lg shadow-lg overflow-hidden items-center">
            {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index}/>
            ))}
        </div>
    </div>
  );
};

export default FAQPage;
