"use client";
import { useEffect, useRef, useState } from "react";

const SocialMediaFeed = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61565121380657",
    instagram: "https://www.instagram.com/philadelphiachurchdallas",
    youtube: "https://www.youtube.com/@PPCDChurch",
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => [...prev, index]);
              observer.unobserve(ref);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className="social-feed-section py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header with fade-in animation */}
        <div className="fade-in-up mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Connect With <span className="text-primary">Us</span>
          </h2>
          <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Follow our journey and share in the celebration on social media
          </p>
        </div>

        {/* Social Media Cards with staggered animation */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {/* Facebook Card */}
          <a
            ref={el => { cardRefs.current[0] = el; }}
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card facebook-card group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1877F2] to-[#0C63D4] p-6 text-white transition-all duration-500 ${visibleCards.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-pulse">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </div>
              <span className="arrow-slide text-sm font-semibold">Follow →</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold group-hover:scale-105 transition-transform duration-300">Facebook</h3>
            <p className="text-white/90">Join our community and stay updated with daily posts and live updates</p>
            <div className="shine-effect"></div>
          </a>

          {/* Instagram Card */}
          <a
            ref={el => { cardRefs.current[1] = el; }}
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card instagram-card group overflow-hidden rounded-2xl bg-gradient-to-br from-[#E4405F] via-[#F58529] to-[#F56040] p-6 text-white transition-all duration-500 ${visibleCards.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-spin">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="arrow-slide text-sm font-semibold">Follow →</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold group-hover:scale-105 transition-transform duration-300">Instagram</h3>
            <p className="text-white/90">See photos, stories, and behind-the-scenes moments from our church family</p>
            <div className="shine-effect"></div>
          </a>

          {/* YouTube Card */}
          <a
            ref={el => { cardRefs.current[2] = el; }}
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card youtube-card group overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#CC0000] p-6 text-white transition-all duration-500 ${visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-bounce">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="arrow-slide text-sm font-semibold">Subscribe →</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold group-hover:scale-105 transition-transform duration-300">YouTube</h3>
            <p className="text-white/90">Watch sermons, worship services, and special anniversary content</p>
            <div className="shine-effect"></div>
          </a>
        </div>

        {/* Share Section with fade-in */}
        <div className="fade-in-up text-center" style={{ animationDelay: "500ms" }}>
          <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
            Share Your <span className="text-primary">Celebration</span>
          </h3>
          <div className="hashtag-pulse mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Use the hashtag <span className="font-semibold text-primary">#PPCD30Years</span> to share your memories and join the celebration
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn facebook-share inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
              Share on Facebook
            </a>
            <a
              href={`https://www.instagram.com/create/story/`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn instagram-share inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] to-[#E4405F] px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Share on Instagram
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn youtube-share inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Fade In Up Animation */
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
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        /* Social Card Hover Effects */
        .social-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        /* Shine Effect on Cards */
        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        
        .social-card:hover .shine-effect {
          left: 100%;
        }
        
        /* Icon Animations */
        .icon-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .icon-spin {
          animation: spin 8s linear infinite;
        }
        
        .icon-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        /* Arrow Slide Animation */
        .arrow-slide {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        
        .social-card:hover .arrow-slide {
          transform: translateX(5px);
        }
        
        /* Hashtag Pulse Animation */
        .hashtag-pulse {
          animation: hashtagGlow 2s ease-in-out infinite;
        }
        
        @keyframes hashtagGlow {
          0%, 100% {
            text-shadow: 0 0 0px rgba(74, 108, 247, 0);
          }
          50% {
            text-shadow: 0 0 10px rgba(74, 108, 247, 0.5);
          }
        }
        
        /* Share Buttons Animation */
        .share-btn {
          position: relative;
          overflow: hidden;
        }
        
        .share-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .share-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        /* Facebook Card Gradient Animation */
        .facebook-card {
          background: linear-gradient(135deg, #1877F2, #0C63D4);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        
        /* Instagram Card Gradient Animation */
        .instagram-card {
          background: linear-gradient(135deg, #F58529, #E4405F, #833AB4);
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
        
        /* YouTube Card Gradient Animation */
        .youtube-card {
          background: linear-gradient(135deg, #FF0000, #CC0000);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Staggered Card Entrance */
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Hover Glow Effect */
        .social-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .social-card {
            transform: none;
          }
          
          .social-card:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default SocialMediaFeed;