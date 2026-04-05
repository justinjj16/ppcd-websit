"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AnnouncementModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden="true"
        ></div>

        {/* Modal Container */}
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-6">
          <div
            ref={wrapperRef}
            className={`relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 dark:bg-gray-900 ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              type="button"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-red-500 hover:scale-110 focus:outline-none"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-full w-full overflow-auto">
                <Image
                  src="/images/announcement/flier.jpeg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-2xl"
                  style={{ width: "100%", height: "auto" }}
                  alt="building"
                />

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-3xl m-0"></div>
              </div>


            </div>

            {/* Details Button Section */}
            <div className="p-6 text-center md:p-8">


              {/* View Details Button */}
              <Link
                href="/dedication"
                onClick={handleClose}
                className="text-sm group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-2 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 md:w-auto md:px-10"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Full Details
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                {/* Button Hover Effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-0"></span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementModal;