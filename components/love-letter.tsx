import { Heart } from "lucide-react"

export function LoveLetter() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="relative rounded-lg border border-border bg-card p-8 md:p-12">
          <Heart
            className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 fill-primary text-primary"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              To My Valentine
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                From the first moment I saw you, I knew something extraordinary was about to unfold. Every day since has been a beautiful adventure, and I wouldn{"'"}t trade a single second of it.
              </p>
              <p>
                You make the ordinary feel magical, and the difficult feel possible. Your smile is my favorite sight, your laugh is my favorite sound, and being with you is my favorite place to be.
              </p>
              <p>
                Thank you for being my partner, my best friend, and the love of my life. Here{"'"}s to every yesterday, today, and all the tomorrows we{"'"}ll share together.
              </p>
            </div>
            <p className="font-serif text-lg font-semibold text-primary">
              Forever & Always Yours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
