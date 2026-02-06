"use client"

import { Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Floating hearts background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 fill-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${16 + Math.random() * 32}px`,
              height: `${16 + Math.random() * 32}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <Heart
          className="h-16 w-16 fill-primary text-primary animate-heart-beat"
          aria-hidden="true"
        />
        <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          Happy Valentine{"'"}s Day
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
          Every moment with you is a treasure. Here{"'"}s to us and all the beautiful memories we{"'"}ve made together.
        </p>
      </div>
    </section>
  )
}
