"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const DedicationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSections, setAnimatedSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Trigger initial animations
    setIsVisible(true);

    // Setup scroll animations
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setAnimatedSections(prev => [...prev, index]);
              observer.unobserve(ref);
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <>
      {/* Hero Section with Ken Burns Zoom Effect */}
      <section className="hero-section relative min-h-[70vh] overflow-hidden">
        {/* Animated Background */}
        <div className="hero-bg"></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex min-h-[70vh] items-center justify-center px-4">
          <div className="container mx-auto text-center text-white">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="mb-4 inline-block rounded-full bg-primary/90 px-4 py-1 text-sm font-semibold backdrop-blur-sm animate-pulse-slow">
                A Historic Milestone
              </div>
            </div>

            <h1
              className={`mb-4 text-4xl font-bold drop-shadow-lg transition-all duration-1000 delay-400 md:text-5xl lg:text-6xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              New Church <span className="text-primary">Dedication</span>
            </h1>

            <p
              className={`mx-auto max-w-2xl text-lg text-white/90 drop-shadow transition-all duration-1000 delay-600 md:text-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              Philadelphia Church • 7200 Rowlett Rd, Rowlett, TX
            </p>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="h-10 w-6 rounded-full border-2 border-white">
                <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Featured Image */}


            {/* Message */}
            <div className="prose prose-lg dark:prose-invert mx-auto space-y-6 text-gray-600 dark:text-gray-400">
              {/* First Paragraph */}
              <div
                ref={el => { sectionRefs.current[1] = el; }}
                className={`transition-all duration-1000 delay-200 ${animatedSections.includes(1) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
              >
                <p className="text-lg leading-relaxed">
                  With hearts full of gratitude to our faithful God, we joyfully invite you to a sacred and historic milestone in the life of Philadelphia Church — the <strong className="text-primary">Dedication Service of our new church building.</strong>
                </p>
              </div>

              {/* Second Paragraph */}
              <div
                ref={el => { sectionRefs.current[2] = el; }}
                className={`transition-all duration-1000 delay-300 ${animatedSections.includes(2) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
              >
                <p>
                  This is more than the opening of a structure; it is the consecration of a place where God&lsquo;s presence will dwell, lives will be transformed, and the Gospel of Jesus Christ will shine in our community.
                </p>
              </div>

              {/* Scripture Verse */}
              <div
                ref={el => { sectionRefs.current[3] = el; }}
                className={`my-8 rounded-2xl bg-primary/5 p-6 text-center transition-all duration-1000 delay-400 md:p-8 ${animatedSections.includes(3) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <svg className="mx-auto mb-4 h-10 w-10 text-primary/50 animate-float" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4V6zm2-4h12v2H6V2zm16 8H2v12h20V10zm-2 10H4v-8h16v8z" />
                </svg>
                <p className="text-xl font-semibold italic text-primary md:text-2xl">
                  &lsquo;The glory of this latter house shall be greater than the former, says the Lord&lsquo;
                </p>
                <p className="mt-2 text-sm text-gray-500">— Haggai 2:9</p>
              </div>

              {/* Address */}
              <div
                ref={el => { sectionRefs.current[4] = el; }}
                className={`my-8 rounded-2xl bg-gray-50 p-6 transition-all duration-1000 delay-500 hover:shadow-xl dark:bg-gray-800 ${animatedSections.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse-slow">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">Our New Address</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Philadelphia Church<br />
                      7200 Rowlett Rd, Rowlett, TX 75089
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="my-8 grid gap-6 md:grid-cols-2">
                {/* Dedication Service Card */}
                <div
                  ref={el => { sectionRefs.current[5] = el; }}
                  className={`group rounded-2xl border-2 border-primary/20 bg-white p-6 transition-all duration-1000 delay-600 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800 ${animatedSections.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Dedication Service</h3>
                  <p className="mt-2 text-2xl font-bold text-black dark:text-white">Saturday, April 25th</p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">@ 10:00 AM</p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    We warmly invite you to join us and be part of what God is doing in our Church and City.
                  </p>
                </div>

                {/* First Worship Service Card */}
                <div
                  ref={el => { sectionRefs.current[6] = el; }}
                  className={`group rounded-2xl border-2 border-primary/20 bg-white p-6 transition-all duration-1000 delay-700 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800 ${animatedSections.includes(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">First Worship Service</h3>
                  <p className="mt-2 text-2xl font-bold text-black dark:text-white">Sunday, April 26th</p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">@ 9:30 AM</p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Come, be part of this new season and fresh move of God.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div
                ref={el => { sectionRefs.current[7] = el; }}
                className={`my-8 rounded-2xl bg-primary/5 p-6 text-center transition-all duration-1000 delay-800 ${animatedSections.includes(7) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <p className="mb-4 text-xl font-semibold text-primary animate-wave-color">To God be all the glory!</p>
                <div className="flex flex-col justify-center gap-4 text-sm sm:flex-row sm:gap-8">
                  <div className="flex items-center justify-center gap-2 group">
                    <svg className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Pastor P. C. Jacob <span className="font-medium">(405) 921-3822</span></span>
                  </div>
                  <div className="flex items-center justify-center gap-2 group">
                    <svg className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Bro. George (Raju) Ariyappallil <span className="font-medium">(972) 365-6676</span></span>
                  </div>
                </div>
              </div>

              {/* Back to Home Button */}
              <div
                ref={el => { sectionRefs.current[8] = el; }}
                className={`mt-8 text-center transition-all duration-1000 delay-900 ${animatedSections.includes(8) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/80 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Ken Burns Zoom Effect for Hero Background */
        .hero-section {
          position: relative;
          overflow: hidden;
          border-radius: 0 0 20px 20px;
        }
        
        .hero-bg {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          background-image: url('/images/about/artical-worship-min.jpg');
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          animation: kenBurnsZoom 25s ease-in-out infinite;
          z-index: 0;
        }
        
        @keyframes kenBurnsZoom {
          0% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-5%);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes waveColor {
          0%, 100% { color: #4A6CF7; }
          25% { color: #8b5cf6; }
          50% { color: #ec4899; }
          75% { color: #f59e0b; }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .animate-wave-color {
          animation: waveColor 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default DedicationPage;