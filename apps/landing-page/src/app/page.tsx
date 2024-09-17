import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
// import Image from 'next/image'
import { Fragment } from 'react'

import ShimmerButton from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Mozaic | AI-Driven HR for Teams Ready to Evolve',
}

export default function Home() {
  return (
    <Fragment>
      <section id="hero">
        <div className="relative flex w-full flex-col items-center justify-start overflow-hidden px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:min-h-screen lg:px-8">
          <div className="flex w-full max-w-6xl flex-col space-y-4 overflow-hidden pt-8">
            <h1 className="text-center bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem]">
              AI-Driven HR for
              <br className="hidden md:block" /> Teams Ready to Evolve
            </h1>
            <p className="mb-12 text-center text-lg tracking-tight text-gray-500 md:text-xl text-balance translate-y-[-1rem]">
              Automate tasks, boost productivity, and empower decision-making
              with real-time, AI-generated insights—designed for
              forward-thinking teams ready to evolve.
            </p>
          </div>

          <div className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:mt-10 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="flex items-start gap-3">
              <input
                className="bg-background h-12 rounded-full pl-6 pr-12 border border-input"
                placeholder="johndoe@example.com"
              />
              <ShimmerButton className="h-12">
                Join waitlist{' '}
                <ChevronRight className="text-white size-4 ml-4" />
              </ShimmerButton>
            </div>
          </div>

          <div className="relative mx-auto mt-16 flex w-full flex-col items-center justify-center sm:mt-16">
            {/* <Image
              src="https://www.aomni.com/landing/_next/image?url=%2Flanding%2Fassets%2Fscreenshots%2Faccount.png&w=1920&q=85"
              alt=""
              className="z-10 mx-auto box-content rounded-md border shadow-lg shadow-indigo-300/40"
              priority
              width={1208}
              height={914}
              decoding="async"
            /> */}
            <div className="w-[1208px] h-[914px] bg-gray-500 border rounded-md mx-auto z-10" />
          </div>

          <div className="to-[hsla(202, 36%, 96%, 1)] absolute inset-0 -z-10 h-[700px] w-full bg-gradient-to-b from-[hsla(40,20%,90%,1)] lg:h-[850px]" />
        </div>
      </section>
    </Fragment>
  )
}
