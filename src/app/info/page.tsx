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


  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };


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
        {showIndicator && (
          <div
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce transition-opacity duration-500"
          >
            <div className="h-10 w-6 rounded-full border-2 border-white flex items-start justify-center">
              <div className="mt-2 h-2 w-2 rounded-full bg-white animate-pulse"></div>
            </div>
            <p className="mt-2 text-xs text-white/80 tracking-wide">Scroll</p>
          </div>
        )}
      </section>

      <section id="next-section">
        <SocialMediaFeed />
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
                  {event.time && (<p className="mb-3 text-sm font-semibold text-primary">{event.time}</p>)}
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}

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
    title: "Youth Revival Meeting",
    date: "February 27, 2026",
    time: "10:00 AM",
    description: "A dynamic youth gathering focused on revival, worship, and spiritual renewal.",
    image: "/images/anniversary/one.jpg",
  },
  {
    title: "Thanksgiving Celebration",
    date: "March 15, 2026",
    time: "11:00 AM",
    description: "A joyful service celebrating 30 years of God’s faithfulness and blessings.",
    image: "/images/anniversary/two.jpg",
  },
  {
    title: "Public Inauguration: New Church Building",
    date: "April 25, 2026",
    time: "10:00 AM",
    description: "Official dedication of our new church building to God’s glory.",
    image: "/images/anniversary/three.jpg",
  },
  {
    title: "First Sunday Service: New Church Building",
    date: "April 26, 2026",
    time: "09:30 AM",
    description: "Our first Sunday worship service in the newly inaugurated sanctuary.",
    image: "/images/anniversary/four.jpg",
  },
  {
    title: "Medical Camp",
    date: "May",
    // time: "7:00 PM",
    description: "Community outreach providing basic healthcare and support services.",
    image: "/images/anniversary/medicalCamp.jpg",
  },
  {
    title: "Youth Revival Meeting",
    date: "June",
    // time: "10:00 AM",
    description: "A refreshing time of worship and revival for the youth community.",
    image: "/images/anniversary/six.jpg",
  },
  {
    title: "Church VBS",
    date: "July",
    // time: "",
    description: "Fun-filled Vacation Bible School for children with learning and activities.",
    image: "/images/anniversary/vbs.jpg",
  },
  {
    title: "Gents, Ladies and Youth Meeting & Lunch",
    date: "August",
    // time: "",
    description: "Fellowship gathering for all groups followed by a shared meal.",
    image: "/images/anniversary/two.jpg",
  },
  {
    title: "Anish Kollam Bible Study",
    date: "September 10 - 11 2026",
    // time: "",
    description: "Special Bible study sessions with guest speaker Anish Kollam.",
    image: "/images/anniversary/five.jpg",
  },
  {
    title: "Musical Night",
    date: "October",
    // time: "",
    description: "An evening of worship and music celebrating God’s goodness.",
    image: "/images/anniversary/musicalNight.jpg",
  },
  {
    title: "Pearl Jubilee Convention",
    date: "November 5 - 8 2026",
    // time: "",
    description: "Main anniversary convention with powerful messages and worship.",
    image: "/images/anniversary/three.jpg",
  },
  {
    title: "House Visit",
    date: "Throughout Month",
    // time: "",
    description: "Pastoral visits to homes for prayer, fellowship, and encouragement.",
    image: "/images/anniversary/six.jpg",
  },
];

export default HistoryPage;