'use client'
import CountUp from 'react-countup'
const stats = [
  {
    num: 2,
    text: 'Years of experience',
  },
  {
    num: 5,
    text: 'Projects completed',
  },
  {
    num: 4,
    text: 'Technologies mastered',
  },
  {
    num: 76,
    text: 'Code commits',
  },
]
const CounterComponent = () => {
  return (
    <section>
      <div className="container mx-auto items-center text-center">
        <div className="flex  flex-wrap gap-6 max-w-[90vw] xl:mx-w-none   ">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex  gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  className="text-4xl xl:text-6xl font-extrabold"
                  start={0}
                  end={stat.num}
                  duration={3}
                />

                <p
                  className={`${
                    stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  }`}
                >
                  {stat.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CounterComponent
