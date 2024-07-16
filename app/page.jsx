import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left">
            <span className="capitalize  font-semibold text-[22px]">
              Software Developer
            </span>
            <br />
            <span className="text-[64px] font-bold block">Hello I'm</span>
            <span className="text-accent text-[64px] font-bold letter-spacing block  ">
              Aymen Drid
            </span>

            <p className="w-1/2">
              I have skills in cryptography, problem-solving, and front-end
              development. I excel at implementing secure datSa practices,
              devising innovative solutions to complex challenges, and creating
              visually engaging and functional web interfaces.
            </p>
            <div className=" my-8 flex flex-row justify-between xl:text-left w-1/2">
              <Button className="bg-primary text-accent border border-accent">
                DOWNLOAD CV <span>.</span>
              </Button>
              <Button className="bg-primary text-accent border border-accent">
                G
              </Button>
              <Button className="bg-primary text-accent border border-accent">
                L
              </Button>
              <Button className="bg-primary text-accent border border-accent">
                Y
              </Button>
              <Button className="bg-primary text-accent border border-accent">
                T
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
