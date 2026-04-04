"use client";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/upcomingEvents/bible.jpg"
        >
          {/* <source src="/videos/hero-bg.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-start px-4 py-32">
        <div className="container mx-auto max-w-4xl text-start">
          <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Philadelphia
            <span className="block text-primary">Church.</span>
          </h1>

          <p className="mr-auto mb-8 max-w-4xl text-lg text-gray-200 md:text-xl">
            By faith we are moved to serve,
            by love we are called to give,
            and by grace we bring hope to the world.
            For the church is not a place of stone,
            but a people united,
            where hearts are healed and God’s love is made known.
          </p>

          <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
            <Link
              href="/watch"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-primary/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3" />
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z" clipRule="evenodd" />
              </svg>
              Watch Live
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;