import { Heart } from "lucide-react"

const HEARTS = [
  { left: "5%", top: "10%", size: 20, delay: "0s", duration: "5s" },
  { left: "15%", top: "65%", size: 28, delay: "1.2s", duration: "4.5s" },
  { left: "25%", top: "30%", size: 36, delay: "0.5s", duration: "6s" },
  { left: "38%", top: "80%", size: 18, delay: "2.1s", duration: "3.8s" },
  { left: "50%", top: "15%", size: 24, delay: "1.8s", duration: "5.2s" },
  { left: "60%", top: "55%", size: 40, delay: "0.3s", duration: "4s" },
  { left: "72%", top: "25%", size: 22, delay: "2.5s", duration: "6.5s" },
  { left: "80%", top: "70%", size: 32, delay: "0.8s", duration: "3.5s" },
  { left: "90%", top: "40%", size: 26, delay: "1.5s", duration: "5.8s" },
  { left: "35%", top: "50%", size: 16, delay: "2.8s", duration: "4.2s" },
  { left: "68%", top: "90%", size: 30, delay: "0.6s", duration: "5.5s" },
  { left: "10%", top: "85%", size: 34, delay: "1.9s", duration: "3.2s" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Floating hearts background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {HEARTS.map((heart, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 fill-primary/10"
            style={{
              left: heart.left,
              top: heart.top,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
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
