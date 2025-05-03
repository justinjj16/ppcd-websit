'use client';

import { useRef, useState, useEffect } from 'react';

export default function CustomVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Track video progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const current = video.currentTime;
      const total = video.duration;
      if (total > 0) setProgress((current / total) * 100);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  // Auto-hide overlay
  useEffect(() => {
    if (!isPlaying) {
      setShowOverlay(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPlaying]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    video.currentTime = percentage * video.duration;
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <video
        ref={videoRef}
        className="w-full rounded"
        src="/videos/mcb.mp4"
        preload="metadata"
        onClick={togglePlay}
        playsInline
        poster="/images/videoThump.png"
      />
      {showOverlay && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-xl font-semibold focus:outline-none"
        >
          {isPlaying ? '❚❚ Pause' : '▶ Play'}
        </button>
      )}

      {/* Gradient progress bar */}
      <div
        className="w-full h-2 bg-gray-300 cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(to right, #ef4444, #f97316, #facc15)', // red -> orange -> yellow
            borderRadius: '0.25rem',
          }}
        />
      </div>
    </div>
  );
}
