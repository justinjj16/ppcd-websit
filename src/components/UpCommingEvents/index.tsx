"use client";
import { useState } from "react";
import Image from "next/image";
import ChurchModal from "@/components/UpCommingEvents/Modal";
import upCommingEventsData from "@/components/UpCommingEvents/UpCommingEventsData";
import { UpCommingEvent } from "@/types/upCommingEvent";

const ServiceTimes = () => {
  const [selectedEvent, setSelectedEvent] = useState<UpCommingEvent | null>(null);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const getNextOccurrence = (event: UpCommingEvent) => {
    const today = new Date();
    const eventDate = event.nextDate;

    if (eventDate < today) {
      const nextWeek = new Date(eventDate);
      nextWeek.setDate(nextWeek.getDate() + 7);
      return formatDate(nextWeek);
    }
    return formatDate(eventDate);
  };

  return (
    <>
      <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              Upcoming Events
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              O come, let us worship and bow down: let us kneel before the Lord our maker
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {upCommingEventsData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedEvent(service)}
                className="group w-full cursor-pointer text-left"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        {getNextOccurrence(service)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-primary">
                      {service.paragraph}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {typeof service.details === 'string'
                        ? service.details
                        : service.title === "Sunday Service"
                          ? "Join us for worship in English and Malayalam, Sunday School for all ages"
                          : service.title === "Bible Study"
                            ? "Join us via Zoom for Bible study and fellowship"
                            : service.title === "Intercessory Prayer"
                              ? "Come together for powerful intercessory prayer"
                              : service.title === "Sisters Meeting"
                                ? "Monthly gathering for fellowship and encouragement"
                                : service.title === "Cottage Meeting"
                                  ? "Intimate home gatherings for prayer and sharing"
                                  : "Monthly community outreach serving our local neighborhood"
                      }
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:gap-2">
                      Learn More
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for event details */}
      {selectedEvent && selectedEvent.redirectNextPageURL === null && (
        <ChurchModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
};

export default ServiceTimes;