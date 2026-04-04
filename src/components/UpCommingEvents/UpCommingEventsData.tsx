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
      <div className="flex flex-col space-y-3 py-2">
        <div className="flex items-start gap-3">
          <span className="font-semibold text-primary min-w-[100px]">Malayalam Worship:</span>
          <span>9:30 AM - 10:45 AM</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-semibold text-primary min-w-[100px]">Sunday School:</span>
          <span>10:00 AM - 10:45 AM</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-semibold text-primary min-w-[100px]">English Worship:</span>
          <span>10:45 AM - 12:00 PM</span>
        </div>
        <div className="mt-4 rounded-lg bg-primary/10 p-4">
          <p className="text-sm italic">&lsquo;Come, let us worship and bow down, let us kneel before the Lord our Maker.&lsquo; — Psalm 95:6</p>
        </div>
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
      <div className="flex flex-col space-y-3 py-2">
        <p className="text-gray-700 dark:text-gray-300">
          Join us for Bible study, held via Zoom meeting!
        </p>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="font-semibold text-primary">How to Join:</p>
          <p className="mt-1 text-sm">
            To participate, please visit our contact page and send an email to request the Zoom ID and Password.
          </p>
        </div>
        <p className="text-sm italic text-gray-600 dark:text-gray-400">
          We look forward to connecting with you!
        </p>
      </div>
    ),
  },
  {
    id: 3,
    icon: "/images/upcomingEvents/intercessory.jpg",
    title: "Intercessory Prayer",
    paragraph: "Every Friday at 08:00pm",
    nextDate: NextDay(5),
    details: (
      <div className="flex flex-col space-y-3 py-2">
        <p className="text-gray-700 dark:text-gray-300">
          Join us for a powerful time of intercessory prayer as we lift up our church, community, and nation before the Lord.
        </p>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="font-semibold text-primary">Scripture Focus:</p>
          <p className="mt-1 text-sm italic">&lsquo;Pray without ceasing.&lsquo; — 1 Thessalonians 5:17</p>
        </div>
      </div>
    ),
    redirectNextPageURL: null,
  },
  {
    id: 4,
    icon: "/images/upcomingEvents/sisters.jpg",
    title: "Sisters Meeting",
    paragraph: "First Friday of Every Month at 08:00pm",
    nextDate: GetFirstNextFirstDay(5),
    details: (
      <div className="flex flex-col space-y-3 py-2">
        <p className="text-gray-700 dark:text-gray-300">
          A special time for the women of our church to come together for fellowship, encouragement, and spiritual growth.
        </p>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="font-semibold text-primary">What to Expect:</p>
          <ul className="mt-1 list-inside list-disc text-sm space-y-1">
            <li>Personal testimonies</li>
            <li>Bible study and teaching</li>
            <li>Prayer and fellowship</li>
            <li>Refreshments</li>
          </ul>
        </div>
      </div>
    ),
    redirectNextPageURL: null,
  },
  {
    id: 5,
    icon: "/images/upcomingEvents/cottage.jpg",
    title: "Cottage Meeting",
    paragraph: "Every Saturday at 07:30pm",
    nextDate: NextDay(6),
    details: (
      <div className="flex flex-col space-y-3 py-2">
        <p className="text-gray-700 dark:text-gray-300">
          Intimate home gatherings where we share God&lsquo;s Word, pray together, and build deeper relationships within our church family.
        </p>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="font-semibold text-primary">Format:</p>
          <ul className="mt-1 list-inside list-disc text-sm space-y-1">
            <li>Worship and praise</li>
            <li>Bible discussion</li>
            <li>Prayer time</li>
            <li>Fellowship and refreshments</li>
          </ul>
        </div>
      </div>
    ),
    redirectNextPageURL: null,
  },
  {
    id: 6,
    icon: "/images/upcomingEvents/outreach.jpg",
    title: "Community Outreach",
    paragraph: "First Saturday of Every Month at 10:30am",
    nextDate: GetFirstNextFirstDay(6),
    details: (
      <div className="flex flex-col space-y-3 py-2">
        <p className="text-gray-700 dark:text-gray-300">
          Serving our local community with the love of Christ through practical acts of service and sharing the Gospel.
        </p>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="font-semibold text-primary">Activities Include:</p>
          <ul className="mt-1 list-inside list-disc text-sm space-y-1">
            <li>Food distribution</li>
            <li>Community cleaning</li>
            <li>Prayer walks</li>
            <li>Evangelism</li>
          </ul>
        </div>
        <p className="text-sm italic text-gray-600 dark:text-gray-400">
          &lsquo;Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&lsquo; — Matthew 5:16
        </p>
      </div>
    ),
    redirectNextPageURL: null,
  },
];

export default upCommingEventsData;