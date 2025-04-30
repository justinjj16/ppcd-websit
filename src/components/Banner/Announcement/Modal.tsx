"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const AnnouncementModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="relative z-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <div
              ref={wrapperRef}
              className="w-full rounded-2xl bg-white dark:bg-gray-dark sm:w-1/3"
            >
              <div className="relative">
                <button
                  onClick={onClose}
                  type="button"
                  className="absolute right-0 -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg border-2 border-red-700 bg-white p-1.5 text-red-600 hover:bg-gray-100 hover:text-red-600 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-600"
                  data-dismiss-target="#toast-warning"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              <Image
                src="/images/announcement/announcement.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-2xl"
                style={{ width: "100%", height: "auto" }}
                alt="building"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementModal;
