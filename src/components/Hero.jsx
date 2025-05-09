import React from 'react'

const Hero = () => {
  return (
    <section className="h-svh relative">
      <h1 className="absolute right-[5%] top-[14%] lg:text-9xl font-bold [writing-mode:vertical-rl]">
        HERO
      </h1>

      <h1 className="absolute left-[5%] bottom-[14%] lg:text-9xl font-bold [writing-mode:vertical-rl] rotate-180">
        HERO
      </h1>

      <h1 className="absolute top-1/2 left-1/2 -translate-1/2 lg:text-[14rem] font-bold leading-[.1]">HERO</h1>
    </section>
  )
}

export default Hero