"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    audio.currentTime = percentage * audio.duration
  }

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-md">
        <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6">
          <Music className="h-8 w-8 text-primary" aria-hidden="true" />
          <p className="text-sm font-medium text-muted-foreground">Our Song</p>

          <audio ref={audioRef} src="/romantic-song.mp3" preload="metadata" />

          {/* Progress bar */}
          <div
            className="h-1.5 w-full cursor-pointer rounded-full bg-muted"
            onClick={handleProgressClick}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Song progress"
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
