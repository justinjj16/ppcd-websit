"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import SectionTitle from "../Common/SectionTitle";
import SingleUpCommingEvent from "./SingleUpCommingEvent";
import upCommingEventsData from "./UpCommingEventsData";
import ChurchModal from "@/components/UpCommingEvents/Modal";
import { UpCommingEvent } from "@/types/upCommingEvent";

const UpCommingEvents = () => {
  const router = useRouter();

  const [currentEventSelected, setCurrentEventSelected] =
    useState<UpCommingEvent>(null);

  useEffect(() => {
    if (currentEventSelected && currentEventSelected.redirectNextPageURL) {
      router.push(currentEventSelected.redirectNextPageURL);
    }
  }, [currentEventSelected]);

  return (
    <>
      <section id="upCommingEvents" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Upcoming Events"
            paragraph="O come, let us worship and bow down: let us kneel before the Lord our maker"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {upCommingEventsData.map((events) => (
              <SingleUpCommingEvent
                key={events.id}
                upCommingEvent={events}
                eventShowHandler={(event: UpCommingEvent) =>
                  setCurrentEventSelected(event)
                }
              />
            ))}
          </div>
        </div>
        {/* upcomming event details popup */}
        {currentEventSelected &&
          currentEventSelected.redirectNextPageURL === null && (
            <ChurchModal
              event={currentEventSelected}
              onClose={() => setCurrentEventSelected(null)}
            />
          )}
      </section>
    </>
  );
};

export default UpCommingEvents;
