import { HeroSection } from "@/components/hero-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { MusicPlayer } from "@/components/music-player"
import { LoveLetter } from "@/components/love-letter"
import { Heart } from "lucide-react"

export default function ValentinePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <div className="flex items-center justify-center py-4" aria-hidden="true">
        <div className="h-px flex-1 max-w-32 bg-border" />
        <Heart className="mx-4 h-4 w-4 fill-primary/30 text-primary/30" />
        <div className="h-px flex-1 max-w-32 bg-border" />
      </div>

      <PhotoGallery />

      <div className="flex items-center justify-center py-4" aria-hidden="true">
        <div className="h-px flex-1 max-w-32 bg-border" />
        <Heart className="mx-4 h-4 w-4 fill-primary/30 text-primary/30" />
        <div className="h-px flex-1 max-w-32 bg-border" />
      </div>

      <MusicPlayer />
      <LoveLetter />

      <footer className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground">
        <span>Made with</span>
        <Heart className="h-4 w-4 fill-primary text-primary animate-heart-beat" aria-label="love" />
      </footer>
    </main>
  )
}
