import { Button } from '@/components/ui/button'
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
const labels = [
  {
    num: '01',
    href: '/',
    title: 'Web Development',
    desc: 'I am a skilled front-end web developer with proficiency in React, Tailwind CSS, TypeScript, and Next.js. My proficiency level can be described as medium.',
  },
  {
    num: '02',
    href: '/',
    title: 'Mob Development',
    desc: 'I am a mobile developer specializing in Flutter, with a solid understanding of building user-friendly applications that deliver good performance.',
  },
  {
    num: '03',
    href: '/',
    title: 'Cryptography CTF',
    desc: 'I have experience solving cryptography challenges on Cryptohack, covering multiple fields, including symmetric and asymmetric key cryptography , misc , general',
  },
  {
    num: '04',
    href: '/',
    title: 'Problem solving',
    desc: 'I possess strong problem-solving skills, backed by extensive experience across various fields. I approach challenges analytically, leveraging critical thinking and creativity to devise effective solutions.',
  },

  {
    num: '06',
    href: '/',
    title: 'Ai and ML',
    desc: 'I have a foundational understanding of the basics of artificial intelligence (AI) and machine learning (ML), which equips me to explore further applications and developments in these fields.',
  },
]
const Services = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-2   ">
        {labels.map((item, index) => {
          return (
            <div
              className=" border-b p-4 text-center py-12 my-8 group"
              key={index}
            >
              <div className="flex justify-between  flex-row group">
                <div className="font-extrabold text-4xl text-left   text-outline text-transparent  transition-all duration-500  group-hover:text-outline-hover pb-8">
                  {item.num}
                </div>
                <div className="text-right  h-14 w-14 rounded-full">
                  <Link
                    className="w-16 h-16 rounded-full  bg-white group-hover:bg-accent  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={item.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
              </div>
              <h2 className="font-bold text-[42px] text-left pb-8 group-hover:text-accent transition-all duration-500">
                {item.title}
              </h2>
              <p className="text-left  "> {item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
