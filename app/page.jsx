import Image from 'next/image'
import { Input } from '@/components/ui/input'
import Social from '@/components/social'
import { Button } from '@/components/ui/button'
import { FaDownload } from 'react-icons/fa'
import CounterComponent from '@/components/Stats'
import Photo from '@/components/photo'
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12 ">
          {/*  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="capitalize  font-semibold text-[22px]">
              Software Developer
            </span>
            <br />
            <span className="text-[64px] font-bold block">Hello I&apos;m</span>
            <span className="text-accent text-[64px] font-bold letter-spacing block  ">
              Aymen Drid
            </span>

            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos; am a versatile front-end developer in both
              <span className="text-accent"> mobile</span> and{' '}
              <span className="text-accent">web development</span>, leveraging
              technologies like React, Next.js, TypeScript, and Flutter. In
              addition to my development skills, I have a solid understanding of
              AI and machine learning principles, which I integrate into my
              problem-solving approach. I also possess a strong foundation in
              cybersecurity, with a focus on{' '}
              <span className="text-accent">cryptography</span>, ensuring that
              the solutions I create are both innovative and secure.
            </p>
            {/* social and buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8 my-8">
              <Button
                variant="outline"
                size="lg"
                className=" flex items-center gap-2 uppercase "
              >
                <span> DOWNLOAD CV</span> <FaDownload className="text-xl" />
              </Button>
              <div className="my-8">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <CounterComponent />
      </div>
    </section>
  )
}
