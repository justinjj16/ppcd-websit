"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SocialMediaFeed from "@/components/SocialMediaFeed";

const HistoryPage = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => [...prev, index]);
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
      <section className="hero-section relative min-h-[70vh] overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Animated Background */}
        <div className="hero-bg"></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-4 text-center text-white">
          <div
            ref={el => { sectionRefs.current[0] = el; }}
            className={`transition-all duration-1000 delay-100 ${visibleSections.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="mx-auto mb-6 max-w-2xl">
              <div className="relative mx-auto h-32 w-32 md:h-40 md:w-40"></div>
            </div>
          </div>

          <div
            ref={el => { sectionRefs.current[1] = el; }}
            className={`transition-all duration-1000 delay-300 ${visibleSections.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="mb-4 text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl">
              30 Years of <span className="text-primary">God&lsquo;s Faithfulness</span>
            </h1>
          </div>

          <div
            ref={el => { sectionRefs.current[2] = el; }}
            className={`transition-all duration-1000 delay-500 ${visibleSections.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <p className="mx-auto max-w-2xl text-lg text-white/90 drop-shadow md:text-xl">
              1996 — 2026 • Celebrating Three Decades of Grace, Growth, and Glory
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-white">
            <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </section>

      {/* History Content */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div
              ref={el => { sectionRefs.current[3] = el; }}
              className={`transition-all duration-1000 delay-100 ${visibleSections.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
                Our Journey of <span className="text-primary">Faith</span>
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto space-y-6 text-gray-600 dark:text-gray-400">
              <div
                ref={el => { sectionRefs.current[4] = el; }}
                className={`transition-all duration-1000 delay-200 ${visibleSections.includes(4) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
              >
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Philadelphia Pentecostal Church of Dallas (PPCD)</strong> was founded in
                  1996 with a small group of believers who had a vision to create a place of worship that would
                  serve the Malayalam-speaking Christian community in the Dallas-Fort Worth metroplex.
                </p>
              </div>

              <div
                ref={el => { sectionRefs.current[5] = el; }}
                className={`transition-all duration-1000 delay-300 ${visibleSections.includes(5) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
              >
                <p>
                  What began as humble gatherings in a small storefront has grown into a vibrant, multi-ethnic
                  congregation that now meets at <strong>2915 Broadway Blvd, Garland, TX</strong>. From those early days
                  of just a handful of families, God has multiplied our numbers and expanded our influence throughout
                  the community.
                </p>
              </div>

              <div
                ref={el => { sectionRefs.current[6] = el; }}
                className={`transition-all duration-1000 delay-400 ${visibleSections.includes(6) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <div className="relative">
                  <div className="absolute -left-4 top-0 text-6xl font-serif text-primary/20">&lsquo;</div>
                  <p className="pl-8 italic">
                    Over the past three decades, PPCD has been a beacon of hope, a center for authentic worship,
                    and a family where people from all backgrounds have found belonging, healing, and purpose.
                    We&lsquo;ve witnessed countless testimonies of lives transformed, marriages restored, families united,
                    and souls saved through the powerful message of the Gospel.
                  </p>
                </div>
              </div>

              <div
                ref={el => { sectionRefs.current[7] = el; }}
                className={`transition-all duration-1000 delay-500 ${visibleSections.includes(7) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <p>
                  Our church has been blessed with dedicated pastors, faithful leaders, and committed members who
                  have labored tirelessly to build God&lsquo;s kingdom. Through every season—times of growth and times
                  of challenge—God has remained faithful, guiding our steps and blessing our efforts.
                </p>
              </div>

              <div
                ref={el => { sectionRefs.current[8] = el; }}
                className={`transition-all duration-1000 delay-600 ${visibleSections.includes(8) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <div className="my-8 rounded-2xl bg-primary/5 p-6 transition-all duration-500 hover:shadow-xl md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-primary">Our Mission Then and Now</h3>
                  <p className="italic">
                    &lsquo;To bring individuals to a personal relationship with Jesus Christ, to help them learn to
                    follow Christ, and to lead them into the fullness of the Spirit-filled life through Commitment,
                    Discipleship, Service, Unity, and Worship.&lsquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-500">— Ephesians 4:12-13</p>
                </div>
              </div>

              <div
                ref={el => { sectionRefs.current[9] = el; }}
                className={`transition-all duration-1000 delay-700 ${visibleSections.includes(9) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <p>
                  As we celebrate our <strong className="text-primary">30th Anniversary</strong>, we look back with
                  gratitude for God&lsquo;s provision and forward with anticipation for what He has in store. The best
                  days of PPCD are still ahead, and we invite you to be part of this next chapter of our story.
                </p>
              </div>

              <div
                ref={el => { sectionRefs.current[10] = el; }}
                className={`transition-all duration-1000 delay-800 ${visibleSections.includes(10) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <div className="text-center">
                  <p className="animate-wave-color text-lg font-semibold text-primary">
                    To God be the glory—great things He has done, and greater things are yet to come!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Celebration Events */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gold-50 to-primary/5 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div
            ref={el => { sectionRefs.current[11] = el; }}
            className={`text-center mb-12 transition-all duration-1000 delay-100 ${visibleSections.includes(11) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Anniversary Celebration <span className="text-primary">Events</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Join us for these special services and celebrations marking our 30th year
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {anniversaryEvents.map((event, index) => (
              <div
                key={index}
                ref={el => { sectionRefs.current[12 + index] = el; }}
                className={`group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800 ${visibleSections.includes(12 + index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 transition-all duration-300 group-hover:scale-110">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white">
                    {event.title}
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-primary">{event.time}</p>
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMediaFeed />

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
          background-position: 50% 0;
          background-repeat: no-repeat;
          animation: kenBurnsZoom 30s ease-in-out infinite;
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
        
        /* Scroll Reveal Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes waveColor {
          0%, 100% { color: #4A6CF7; }
          25% { color: #8b5cf6; }
          50% { color: #ec4899; }
          75% { color: #f59e0b; }
        }
        
        .animate-wave-color {
          animation: waveColor 3s ease-in-out infinite;
        }
        
        /* Bounce Animation for Scroll Indicator */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        /* Pulse Animation */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

const anniversaryEvents = [
  {
    title: "30th Anniversary Kickoff Service",
    date: "January 1, 2026",
    time: "10:00 AM",
    description: "Join us as we begin our month-long celebration with a special worship service and unveiling of our commemorative materials.",
    image: "/images/anniversary/one.jpg",
  },
  {
    title: "Founders' Day Celebration",
    date: "September 8, 2026",
    time: "11:00 AM",
    description: "Honoring the founding members and families who established PPCD with a special tribute and testimony service.",
    image: "/images/anniversary/two.jpg",
  },
  {
    title: "30th Anniversary Gala",
    date: "September 14, 2026",
    time: "6:00 PM",
    description: "An elegant evening of celebration, dinner, music, and dancing as we commemorate three decades of God's faithfulness.",
    image: "/images/anniversary/three.jpg",
  },
  {
    title: "Community Thanksgiving Service",
    date: "September 20, 2026",
    time: "10:00 AM",
    description: "A special service open to the entire community with guest speakers, choir presentations, and a community lunch.",
    image: "/images/anniversary/four.jpg",
  },
  {
    title: "Youth & Young Adults Night",
    date: "September 25, 2026",
    time: "7:00 PM",
    description: "Celebrating the next generation with worship, games, and a special message for our youth and young adults.",
    image: "/images/anniversary/five.jpg",
  },
  {
    title: "Grand Finale Worship Service",
    date: "September 27, 2026",
    time: "10:00 AM",
    description: "Closing our anniversary month with a powerful worship service, baptism celebration, and prophetic declarations for the next 30 years.",
    image: "/images/anniversary/six.jpg",
  },
];

export default HistoryPage;