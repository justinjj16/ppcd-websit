"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface BiographyModalProps {
  member: {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl z-20 bg-white/80 dark:bg-gray-800/80 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                {member.name}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                {member.position}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-primary dark:bg-primary-light rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Philadelphia Church
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
              <span className="text-primary dark:text-primary-light">📖</span>
              Biography
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {member.bio.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-8 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
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