'use client'
import { useState, useRef, useEffect } from 'react'
import Image from "next/image";
import { UpCommingEvent } from '@/types/upCommingEvent';
// Modal.setAppElement('#home');
const ChurchModal = ({ event, onClose }: { event: UpCommingEvent, onClose: () => void }) => {

  const [isMoredetails, setIsMoreDetails] = useState(false)

  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto w-screen">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
            {/* <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
    </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
    </p>
                </div>
                <div className="p-6 pt-0">
                  <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
    </button>
                </div>
              </div>
            </div> */}
            <div ref={wrapperRef} className="bg-white dark:bg-gray-dark p-2 rounded-2xl sm:w-1/3 w-full">
              <div className=''>
                <Image
                  src={event.icon}
                  alt="author"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto sm:h-80 rounded-3xl comming-event-image transition ease-in-out delay-300 duration-300 "
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex flex-col">
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl py-4">{event.title}</h3>
                  <span className="pr-[10px] text-base font-medium leading-relaxed text-body-color py-1">{event.paragraph}</span>
                  <span className="pr-[10px] text-base font-medium leading-relaxed text-body-color">{event.nextDate.toDateString()}</span>
                </div>
                { }

              </div>
              {event.details && (
                <>
                  <div className="py-4" onClick={() => setIsMoreDetails(!isMoredetails)}>
                    <button className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5">{!isMoredetails ? "More" : "Less"} details</button>
                  </div>
                  <>
                    {isMoredetails && (
                      <div className=" transition-all ease-in-out delay-700 duration-700">{event.details}</div>
                    )}
                  </>
                </>
              )}

              <div>
                <button onClick={onClose} className="p-2 rounded-sm font-medium hover:border-b-2 hover:border-b-body-color border-b-transparent border-b-2">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChurchModal;