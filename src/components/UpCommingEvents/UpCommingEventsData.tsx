import { UpCommingEvent } from "@/types/upCommingEvent";
import { NextDay, GetFirstNextFirstDay } from "@/utility/date";

const upCommingEventsData: UpCommingEvent[] = [
  {
    id: 1,
    icon: "/images/upcomingEvents/worship.jpg",
    title: "Sunday Service",
    paragraph: "Every Sunday at 9:30am",
    nextDate: NextDay(0),
    redirectNextPageURL: null,
    details: (
      <div className="flex flex-col py-1 pr-[10px] text-base font-medium leading-relaxed text-body-color">
        <span className="py-1">9:30am - 10:45am malayalam worship</span>
        <span className="py-1">10:00am - 10:45 Sunday school</span>
        <span className="py-1">10:45am - 12:00pm English worship</span>
      </div>
    ),
  },
  {
    id: 2,
    icon: "/images/upcomingEvents/bible.jpg",
    title: "Bible Study",
    paragraph: "Every Wednesday at 8:00pm",
    nextDate: NextDay(3),
    redirectNextPageURL: null,
    details: (
      <div className="flex flex-col py-1 pr-[10px] text-base font-medium leading-relaxed text-body-color">
        <span className="py-1">
          Join us for Bibile study, held via Zoom meeting!
        </span>
        <span className="py-1">
          To participate, please visit our contact page and send an email to
          request the Zoom ID and Password.
        </span>
        <span className="py-1">We look forward to connecting with you!</span>
      </div>
    ),
  },
  {
    id: 3,
    icon: "/images/upcomingEvents/intercessory.jpg",
    title: "Intercessory Prayer",
    paragraph: "Every Friday at 08:00pm",
    nextDate: NextDay(5),
    details: "",
    redirectNextPageURL: null,
  },
  {
    id: 4,
    icon: "/images/upcomingEvents/sisters.jpg",
    title: "Sisters Meeting",
    paragraph: "First Friday of Every Month at 08:00pm",
    nextDate: GetFirstNextFirstDay(5),
    details: "",
    redirectNextPageURL: null,
  },
  {
    id: 5,
    icon: "/images/upcomingEvents/cottage.jpg",
    title: "Cottage Meeting",
    paragraph: "Every Saturday at 07:30pm",
    nextDate: NextDay(6),
    details: "",
    redirectNextPageURL: null,
  },
  {
    id: 6,
    icon: "/images/upcomingEvents/outreach.jpg",
    title: "Community Outreach",
    paragraph: "First Saturday of Every Month at 10:30am",
    nextDate: GetFirstNextFirstDay(6),
    details: "",
    redirectNextPageURL: null,
  },
];
export default upCommingEventsData;
