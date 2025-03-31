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
              className="w-full rounded-2xl bg-white p-2 dark:bg-gray-dark sm:w-1/3"
            >
              <Image
                src="/images/announcement/announcement.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-2xl"
                style={{ width: "100%", height: "auto" }}
                alt="building"
              />

              {/* <div>
                <button
                  onClick={onClose}
                  className="rounded-sm border-b-2 border-b-transparent p-2 font-medium hover:border-b-2 hover:border-b-body-color"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementModal;
