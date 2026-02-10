"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface BiographyModalProps {
  member: {
    id: number;
    name: string;
    position: string;
    image: string;
    bio: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const BiographyModal = ({ member, isOpen, onClose }: BiographyModalProps) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Check if this is the pastor (ID 1)
  const isPastor = member.id === 1;
  const familyImage = "/images/leadership/pastor_aunty.jpg";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-dark rounded-sm shadow-three max-w-5xl w-full max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl z-20 bg-white/80 dark:bg-gray-800/80 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-gray-200 dark:border-white/[.15]">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                {member.name}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-primary dark:text-primary-light mb-3 md:mb-4">
                {member.position}
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-1 bg-primary dark:bg-primary-light rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Philadelphia Church
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Biography Section */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
                <span className="text-primary dark:text-primary-light">📖</span>
                Biography
              </h3>
              <div className="space-y-4 text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                {member.bio.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            </div>

            {isPastor && familyImage && (
              <div className="mb-8">
                <div className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-square mb-6 m-auto">
                  <Image
                    src={familyImage}
                    alt={`${member.name} Family`}
                    fill
                    className="rounded-lg object-cover border-2 border-gray-200 dark:border-gray-700"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  />
                </div>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm italic">
                  Pastor P. C. Jacob with his wife Renny Jacob
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 md:p-8 border-t border-gray-200 dark:border-white/[.15] bg-gray-50 dark:bg-gray-900/50 rounded-b-sm">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 md:px-8 py-3 bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors duration-300 font-medium shadow-submit dark:shadow-submit-dark"
            >
              Close Biography
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographyModal;