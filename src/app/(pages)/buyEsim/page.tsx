'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const categories = {
  Local: [
    {
      id: 1,
      name: "Aland Islands",
      image: {
        path: "/images/buyEsimPage/local/1.svg",
        alt: "Aland Islands"
      }
    },
    {
      id: 2,
      name: "Albania",
      image: {
        path: "/images/buyEsimPage/local/2.svg",
        alt: "Albania"
      }
    },
    {
      id: 3,
      name: "Algeria",
      image: {
        path: "/images/buyEsimPage/local/3.svg",
        alt: "Algeria"
      }
    },
    {
      id: 4,
      name: "Argentina",
      image: {
        path: "/images/buyEsimPage/local/4.svg",
        alt: "Argentina"
      }
    },
    {
      id: 5,
      name: "Armenia",
      image: {
        path: "/images/buyEsimPage/local/5.svg",
        alt: "Armenia"
      }
    },
    {
      id: 6,
      name: "Australia",
      image: {
        path: "/images/buyEsimPage/local/6.svg",
        alt: "Australia"
      }
    },
    {
      id: 7,
      name: "Austria",
      image: {
        path: "/images/buyEsimPage/local/7.svg",
        alt: "Austria"
      }
    },
    {
      id: 8,
      name: "Azerbaijan",
      image: {
        path: "/images/buyEsimPage/local/8.svg",
        alt: "Azerbaijan"
      }
    },
    {
      id: 9,
      name: "Bahrain",
      image: {
        path: "/images/buyEsimPage/local/9.svg",
        alt: "Bahrain"
      }
    },
    {
      id: 10,
      name: "Bangladesh",
      image: {
        path: "/images/buyEsimPage/local/10.svg",
        alt: "Bangladesh"
      }
    },
    {
      id: 11,
      name: "Belarus",
      image: {
        path: "/images/buyEsimPage/local/11.svg",
        alt: "Belarus"
      }
    },
    {
      id: 12,
      name: "Belgium",
      image: {
        path: "/images/buyEsimPage/local/12.svg",
        alt: "Belgium"
      }
    },
    {
      id: 13,
      name: "Bolivia",
      image: {
        path: "/images/buyEsimPage/local/13.svg",
        alt: "Bolivia"
      }
    },
    {
      id: 14,
      name: "Bosnia and Herzegovina",
      image: {
        path: "/images/buyEsimPage/local/14.svg",
        alt: "Bosnia and Herzegovina"
      }
    },
    {
      id: 15,
      name: "Botswana",
      image: {
        path: "/images/buyEsimPage/local/15.svg",
        alt: "Botswana"
      }
    },
    {
      id: 16,
      name: "Brazil",
      image:{
        path: "/images/buyEsimPage/local/16.svg",
        alt: "Botswana",
      }
    },
    {
      "id": 17,
      "name": "Brunei Darussalam",
      "image": {
        "path": "/images/buyEsimPage/local/17.svg",
        "alt": "Brunei Darussalam"
      }
    },
    {
      "id": 18,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/18.svg",
        "alt": ""
      }
    },
    {
      "id": 19,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/19.svg",
        "alt": ""
      }
    },
    {
      "id": 20,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/20.svg",
        "alt": "Cambodia"
      }
    },
    {
      "id": 21,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/21.svg",
        "alt": ""
      }
    },
    {
      "id": 22,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/22.svg",
        "alt": ""
      }
    },
    {
      "id": 23,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/23.svg",
        "alt": ""
      }
    },
    {
      "id": 24,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/24.svg",
        "alt": ""
      }
    },
    {
      "id": 25,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/25.svg",
        "alt": ""
      }
    },
    {
      "id": 26,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/26.svg",
        "alt": ""
      }
    },
    {
      "id": 27,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/27.svg",
        "alt": ""
      }
    },
    {
      "id": 28,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/28.svg",
        "alt": ""
      }
    },
    {
      "id": 29,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/29.svg",
        "alt": ""
      }
    },
    {
      "id": 30,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/30.svg",
        "alt": ""
      }
    },
    {
      "id": 31,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/31.svg",
        "alt": ""
      }
    },
    {
      "id": 32,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/32.svg",
        "alt": ""
      }
    },
    {
      "id": 33,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/33.svg",
        "alt": ""
      }
    },
    {
      "id": 34,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/34.svg",
        "alt": ""
      }
    },
    {
      "id": 35,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/35.svg",
        "alt": ""
      }
    },
    {
      "id": 36,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/36.svg",
        "alt": ""
      }
    },
    {
      "id": 37,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/37.svg",
        "alt": ""
      }
    },
    {
      "id": 38,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/38.svg",
        "alt": ""
      }
    },
    {
      "id": 39,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/39.svg",
        "alt": ""
      }
    },
    {
      "id": 40,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/40.svg",
        "alt": ""
      }
    },
    {
      "id": 41,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/41.svg",
        "alt": ""
      }
    },
    {
      "id": 42,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/42.svg",
        "alt": ""
      }
    },
    {
      "id": 43,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/43.svg",
        "alt": ""
      }
    },
    {
      "id": 44,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/44.svg",
        "alt": ""
      }
    },
    {
      "id": 45,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/45.svg",
        "alt": ""
      }
    },
    {
      "id": 46,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/46.svg",
        "alt": ""
      }
    },
    {
      "id": 47,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/47.svg",
        "alt": ""
      }
    },
    {
      "id": 48,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/48.svg",
        "alt": ""
      }
    },
    {
      "id": 49,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/49.svg",
        "alt": ""
      }
    },
    {
      "id": 50,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/50.svg",
        "alt": ""
      }
    },
    {
      "id": 51,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/51.svg",
        "alt": ""
      }
    },
    {
      "id": 52,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/52.svg",
        "alt": ""
      }
    },
    {
      "id": 53,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/53.svg",
        "alt": ""
      }
    },
    {
      "id": 54,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/54.svg",
        "alt": ""
      }
    },
    {
      "id": 55,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/55.svg",
        "alt": ""
      }
    },
    {
      "id": 56,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/56.svg",
        "alt": ""
      }
    },
    {
      "id": 57,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/57.svg",
        "alt": ""
      }
    },
    {
      "id": 58,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/58.svg",
        "alt": ""
      }
    },
    {
      "id": 59,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/59.svg",
        "alt": ""
      }
    },
    {
      "id": 60,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/60.svg",
        "alt": ""
      }
    },
    {
      "id": 61,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/61.svg",
        "alt": ""
      }
    },
    {
      "id": 62,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/62.svg",
        "alt": ""
      }
    },
    {
      "id": 63,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/63.svg",
        "alt": ""
      }
    },
    {
      "id": 64,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/64.svg",
        "alt": ""
      }
    },
    {
      "id": 65,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/65.svg",
        "alt": ""
      }
    },
    {
      "id": 66,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/66.svg",
        "alt": ""
      }
    },
    {
      "id": 67,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/67.svg",
        "alt": ""
      }
    },
    {
      "id": 68,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/68.svg",
        "alt": ""
      }
    },
    {
      "id": 69,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/69.svg",
        "alt": ""
      }
    },
    {
      "id": 70,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/70.svg",
        "alt": ""
      }
    },
    {
      "id": 71,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/71.svg",
        "alt": ""
      }
    },
    {
      "id": 72,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/72.svg",
        "alt": ""
      }
    },
    {
      "id": 73,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/73.svg",
        "alt": ""
      }
    },
    {
      "id": 74,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/74.svg",
        "alt": ""
      }
    },
    {
      "id": 75,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/75.svg",
        "alt": ""
      }
    },
    {
      "id": 76,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/76.svg",
        "alt": ""
      }
    },
    {
      "id": 77,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/77.svg",
        "alt": ""
      }
    },
    {
      "id": 78,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/78.svg",
        "alt": ""
      }
    },
    {
      "id": 79,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/79.svg",
        "alt": ""
      }
    },
    {
      "id": 80,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/80.svg",
        "alt": ""
      }
    },
    {
      "id": 81,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/81.svg",
        "alt": ""
      }
    },
    {
      "id": 82,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/82.svg",
        "alt": ""
      }
    },
    {
      "id": 83,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/83.svg",
        "alt": ""
      }
    },
    {
      "id": 84,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/84.svg",
        "alt": ""
      }
    },
    {
      "id": 85,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/85.svg",
        "alt": ""
      }
    },
    {
      "id": 86,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/86.svg",
        "alt": ""
      }
    },
    {
      "id": 87,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/87.svg",
        "alt": ""
      }
    },
    {
      "id": 88,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/88.svg",
        "alt": ""
      }
    },
    {
      "id": 89,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/89.svg",
        "alt": ""
      }
    },
    {
      "id": 90,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/90.svg",
        "alt": ""
      }
    },
    {
      "id": 91,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/91.svg",
        "alt": ""
      }
    },
    {
      "id": 92,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/92.svg",
        "alt": ""
      }
    },
    {
      "id": 93,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/93.svg",
        "alt": ""
      }
    },
    {
      "id": 94,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/94.svg",
        "alt": ""
      }
    },
    {
      "id": 95,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/95.svg",
        "alt": ""
      }
    },
    {
      "id": 96,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/96.svg",
        "alt": ""
      }
    },
    {
      "id": 97,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/97.svg",
        "alt": ""
      }
    },
    {
      "id": 98,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/98.svg",
        "alt": ""
      }
    },
    {
      "id": 99,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/99.svg",
        "alt": ""
      }
    },
    {
      "id": 100,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/100.svg",
        "alt": ""
      }
    },
    {
      "id": 101,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/101.svg",
        "alt": ""
      }
    },
    {
      "id": 102,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/102.svg",
        "alt": ""
      }
    },
    {
      "id": 103,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/103.svg",
        "alt": ""
      }
    },
    {
      "id": 104,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/104.svg",
        "alt": ""
      }
    },
    {
      "id": 105,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/105.svg",
        "alt": ""
      }
    },
    {
      "id": 106,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/106.svg",
        "alt": ""
      }
    },
    {
      "id": 107,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/107.svg",
        "alt": ""
      }
    },
    {
      "id": 108,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/108.svg",
        "alt": ""
      }
    },
    {
      "id": 109,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/109.svg",
        "alt": ""
      }
    },
    {
      "id": 110,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/110.svg",
        "alt": ""
      }
    },
    {
      "id": 111,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/111.svg",
        "alt": ""
      }
    },
    {
      "id": 112,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/112.svg",
        "alt": ""
      }
    },
    {
      "id": 113,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/113.svg",
        "alt": ""
      }
    },
    {
      "id": 114,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/114.svg",
        "alt": ""
      }
    },
    {
      "id": 115,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/115.svg",
        "alt": ""
      }
    },
    {
      "id": 116,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/116.svg",
        "alt": ""
      }
    },
    {
      "id": 117,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/117.svg",
        "alt": ""
      }
    },
    {
      "id": 118,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/118.svg",
        "alt": ""
      }
    },
    {
      "id": 119,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/119.svg",
        "alt": ""
      }
    },
    {
      "id": 120,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/120.svg",
        "alt": ""
      }
    },
    {
      "id": 121,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/121.svg",
        "alt": ""
      }
    },
    {
      "id": 122,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/122.svg",
        "alt": ""
      }
    },
    {
      "id": 123,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/123.svg",
        "alt": ""
      }
    },
    {
      "id": 124,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/124.svg",
        "alt": ""
      }
    },
    {
      "id": 125,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/125.svg",
        "alt": ""
      }
    },
    {
      "id": 126,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/126.svg",
        "alt": ""
      }
    },
    {
      "id": 127,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/127.svg",
        "alt": ""
      }
    },
    {
      "id": 128,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/128.svg",
        "alt": ""
      }
    },
    {
      "id": 129,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/129.svg",
        "alt": ""
      }
    },
    {
      "id": 130,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/130.svg",
        "alt": ""
      }
    },
    {
      "id": 131,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/131.svg",
        "alt": ""
      }
    },
    {
      "id": 132,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/132.svg",
        "alt": ""
      }
    },
    {
      "id": 133,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/133.svg",
        "alt": ""
      }
    },
    {
      "id": 134,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/134.svg",
        "alt": ""
      }
    },
    {
      "id": 135,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/135.svg",
        "alt": ""
      }
    },
    {
      "id": 136,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/136.svg",
        "alt": ""
      }
    },
    {
      "id": 137,
      "name": "",
      "image": {
        "path": "/images/buyEsimPage/local/137.svg",
        "alt": ""
      }
    }
  ],
  Regional: [
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
  ],
  Global: [
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
  ],
};

export default function BuyESIM() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"Local" | "Regional" | "Global">("Local");

  const filteredItems = categories[type].filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-6 flex flex-col items-center mb-16">
      <h2 className="text-2xl font-bold">Buy eSim</h2>

      {/* Переключатель категорий */}
      <div className="bg-bglight w-full max-w-md h-14 rounded-lg flex items-center justify-center mt-2">
        {(["Local", "Regional", "Global"] as const).map((item) => (
          <motion.div
            key={item}
            className={`cursor-pointer w-1/3 h-10 flex justify-center items-center rounded-md text-lg font-semibold transition-colors ${
              type === item
                ? "bg-gradient-to-r from-[#27A6E1] to-[#4381EB] text-white"
                : "text-gray-400"
            }`}
            onClick={() => setType(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
        <p className="mt-[24px]">{type === 'Local' ? 'Select a Country' : type === 'Regional' ? 'Select a Region' : type === 'Global' ? 'Select a Global eSim Package' : ''}</p>

      {/* Поисковое поле */}
      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg bg-bglight text-white px-4 py-2 border border-gray-700 focus:border-blue-500 outline-none"
        />
      </div>

      {/* Список элементов */}
      <AnimatePresence mode="wait">
        <motion.div
          key={type}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex flex-col gap-4 w-full max-w-md"
        >
          {filteredItems.map((item) => {
            // Преобразуем название в slug (например, "Brazil" -> "brazil")
            const slug = item.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link key={item.id} href={`/buyEsim/${type.toLowerCase()}/${slug}`}>
                <motion.div
                  className="bg-bglight px-4 py-3 rounded-xl flex items-center gap-4 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={item.image.path}
                    width={32}
                    height={32}
                    alt={item.image.alt}
                  />
                  <h4 className="text-white text-lg">{item.name}</h4>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}