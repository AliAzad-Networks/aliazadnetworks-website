"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";

const StarRating = ({ rating = 5, fillColor = "#ff8904" }: { rating?: number; fillColor?: string }) => (
  <div className="flex gap-1.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.435.693c.299-.922 1.602-.922 1.902 0l1.294 3.982a1 1 0 0 0 .95.691h4.189c.968 0 1.371 1.24.588 1.81l-3.389 2.461a1 1 0 0 0-.363 1.118l1.294 3.983c.3.921-.755 1.687-1.539 1.118l-3.387-2.462a1 1 0 0 0-1.176 0L4.41 15.856c-.784.57-1.838-.197-1.539-1.118l1.294-3.983a1 1 0 0 0-.363-1.118L.414 7.175c-.784-.569-.38-1.809.588-1.809H5.19a1 1 0 0 0 .95-.69z"
          fill={i < rating ? fillColor : "#e5e7eb"}
        />
      </svg>
    ))}
  </div>
);

export default function TestimonialsGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Video testimonial (Hamdan Ahmad)
  const videoTestimonial = {
    id: "hamdan",
    name: "Hamdan Ahmad",
    role: "MS in Information Assurance & Security (KFUPM, Saudi Arabia)",
    company: "QS Ranked 67th",
    videoThumbnail: "/assets/images/client/hamdan-ahmed.jpg",
    videoUrl: "https://www.youtube.com/embed/OqwKugM-n_0",
    rating: 5,
  };

  // Four text testimonials
  const textTestimonials = [
    {
      text: "AliAzad Networks made building our startup MVP an absolute breeze. Delivered on time and exceeded expectations.",
      name: "Venkata Ramana",
      role: "ThinkCA • Founder",
      image: "/assets/images/client/venkata.png",
    },
    {
      text: "Excellent experience. The team quickly fixed backend issues, improved performance, and boosted customer satisfaction.",
      name: "Syed Imam Ali",
      role: "Software Engineer • Samsung",
      image: "/assets/images/client/imam-ali.png",
    },
    {
      text: "AliAzad Networks created custom tools for my YouTube channel that automated analytics and content scheduling. Highly recommended!",
      name: "Faizan Khan",
      role: "Mission Market • Youtuber",
      image: "/assets/images/client/faizan.png",
    },
    {
      text: "AliAzad Networks transformed our vision into a reality. Their expertise in AI and web development helped us launch our platform in record time. Highly recommended!",
      name: "Pankaj Kumar",
      role: "Software Engineer - Capgemini",
      image: "/assets/images/client/Pankaj.png",
    },
  ];

  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl font-medium text-neutral-800 dark:text-neutral-100">
            Our Testimonials
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-6xl mt-2 mx-auto md:mx-0">
            See what our customers are saying as they build and launch projects at lightning speed.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-5">
          {/* Left: Video testimonial card (spans 2 rows) */}
          <div className="md:row-span-2 relative rounded-lg overflow-hidden mx-auto md:mx-0 w-80 md:w-full">
            <img
              src={videoTestimonial.videoThumbnail}
              alt={videoTestimonial.name}
              className="w-full h-100 object-cover object-top"
              loading="lazy"
            />
            {/* Play button */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-white/40 flex items-center justify-center cursor-pointer backdrop-blur-sm hover:scale-110 transition"
              onClick={() => setActiveVideo(videoTestimonial.id)}
            >
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/10 rounded-b-lg backdrop-blur-sm p-5">
              <StarRating rating={videoTestimonial.rating} fillColor="#fff7ed" />
              <p className="text-sm text-neutral-50 mt-2">
                AliAzad Networks helped me achieve my business goals – highly recommended.
              </p>
            </div>
          </div>

          {/* Right: 4 text testimonial cards */}
          {textTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-card rounded-lg hover:shadow-sm transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div>
                <StarRating rating={5} fillColor="#ff8904" />
                <p className="text-sm text-neutral-600 dark:text-muted-foreground mt-3">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-foreground">
                    {item.name}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional "See all" link – adjust href as needed */}
        <div className="flex justify-center md:justify-end mt-8">
          <a
            href="/testimonials"
            className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            See all testimonials
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  src={videoTestimonial.videoUrl}
                  title="Testimonial Video"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}