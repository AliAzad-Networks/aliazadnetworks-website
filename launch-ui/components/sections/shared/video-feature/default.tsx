"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface VideoFeatureProps {
  /** Small eyebrow label above the title */
  eyebrow?: string;
  /** Main heading (left column) */
  title?: string;
  /** Body copy (left column) */
  description?: string;
  /** Poster image shown before play */
  poster?: string;
  /** MP4 file path or URL */
  videoSrc?: string;
  /** Primary CTA text */
  primaryCta?: { label: string; href: string };
  /** Secondary CTA text (optional) */
  secondaryCta?: { label: string; href: string };
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VideoFeature({
  title = "Why Choose AliAzad Networks?",
  description = "A new AI world is here. Platformization empowers you to harness AI-ready infrastructure. And leverage services powered by AI to keep everything secure",
  poster = "/assets/images/video/ai-overview-poster.jpg",
  videoSrc = "/assets/videos/ai-overview.mp4",
  className,
}: VideoFeatureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  /* ---------- Controls ---------- */

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        // Autoplay might be blocked; user can retry
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const enterFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
  };

  return (
    <Section className={cn("bg-white", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ---------- Left column: title + text + CTAs ---------- */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl md:text-2xl lg:text-4xl mb-5 text-foreground">
              {title}
            </h2>
            <p className="text-sm md:text-base mb-6 text-foreground max-w-xl">
              {description}
            </p>
          </div>

          {/* ---------- Right column: video ---------- */}
          <div className="relative">
            <div
              className="group relative aspect-video w-full overflow-hidden border border-border bg-black shadow-2xl"
              onClick={!isPlaying ? togglePlay : undefined}
              role={!isPlaying ? "button" : undefined}
              tabIndex={!isPlaying ? 0 : -1}
              onKeyDown={(e) => {
                if (!isPlaying && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  togglePlay();
                }
              }}
              aria-label={!isPlaying ? "Play video" : undefined}
            >
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster={poster}
                preload="none"
                playsInline
                muted={isMuted}
                controls={isPlaying}
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play overlay (only before playing) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    aria-label="Play video"
                    className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/40"
                  >
                    <Play className="ml-0.5 h-7 w-7 fill-primary text-primary md:h-8 md:w-8" />
                  </button>
                </div>
              )}

              {/* Custom controls bar (only while playing) */}
              {isPlaying && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      enterFullscreen();
                    }}
                    aria-label="Fullscreen"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}