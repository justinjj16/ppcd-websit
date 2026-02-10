"use client";

import { useState } from 'react';
import Image from 'next/image';
import SectionTitle from "../../components/Common/SectionTitle";
import BiographyModal from './BiographyModal';

// Types
interface LeadershipMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  category: 'pastor' | 'administrative' | 'board' | 'ministry';
}

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Leadership data - update with real names and photos
  const leadershipData: LeadershipMember[] = [
    // Senior Pastor
    {
      id: 1,
      name: "P. C. Jacob",
      position: "Senior Pastor",
      image: "/images/leadership/pastor.jpg",
      bio: `Pastor P. C. Jacob was born and raised in a devoted Pentecostal family in Kottayam, Kerala, India where he was raised under the spiritual influence of his parents who faithfully served the Lord. While pursuing his Master's degree in English Literature, he sensed God's clear calling upon his life and fully committed himself to Christian ministry.

He received formal theological training at United Theological College in Bangalore, India. His passion for the local church and desire to see people live a life of purpose and influence, fuels everything that he does.

As a third-generation pastor and preacher, it is the desire of Pastor P. C. Jacob and his wife Renny to continue to serve the Lord and His people in whatever capacity and call God has placed upon them.

Following their marriage, Pastor Jacob and Renny moved to Udaipur, Rajasthan, where he served as a faculty member at Filadelfia Bible College from 1991 to 1994. They later migrated to the United States, settling in Oklahoma where he earned a Master's degree in Business Administration from Oklahoma City University.

From 2016 to 2022, Pastor Jacob served as the Senior Pastor of First IPC Church in Oklahoma where he played a key role in uniting two congregations to form what is now known as The Crosspoint Church.

Pastor Jacob has also provided significant leadership within the IPC fellowship. He served as the Chairman of the 18th IPC Family Conference held in Oklahoma in 2022 and previously served as the IPC Midwest Region Secretary (2015–2018). In addition, he has held positions as the General Secretary and Vice Chairman of ICPF USA and currently serves as the Chairman of ICPF USA.

Since March 2024, Pr. PC Jacob serves as the Senior Pastor of Philadelphia Church. He and his wife, Renny Jacob, are blessed with three wonderful children: Jennifer & Jeshuran Paul, Jessica & Zachary (their son Silas), and Joshua & Shayna Jacob.`,
      category: 'pastor'
    },

    // Administrative Leaders
    {
      id: 2,
      name: "Ariyappallil George",
      position: "Secretary",
      image: "/images/leadership/raju.jpg",
      bio: "Full biography details for Secretary...",
      category: 'administrative'
    },
    {
      id: 3,
      name: "Ferguson John",
      position: "Treasurer",
      image: "/images/leadership/ferguson.jpg",
      bio: "Full biography details for Treasurer...",
      category: 'administrative'
    },

    // Board Members (4 members)
    {
      id: 4,
      name: "Cleetus Koshy",
      position: "Board Member",
      image: "/images/leadership/cleetus.jpg",
      bio: "Full biography details for Board Member...",
      category: 'board'
    },
    {
      id: 5,
      name: "Abraham Philip",
      position: "Board Member",
      image: "/images/leadership/gigi.jpg",
      bio: "Full biography details for Board Member...",
      category: 'board'
    },
    {
      id: 6,
      name: "Sujan Tharakan",
      position: "Board Member",
      image: "/images/leadership/sujan.jpg",
      bio: "Full biography details for Board Member...",
      category: 'board'
    },
    {
      id: 7,
      name: "Steven Jacob",
      position: "Board Member",
      image: "/images/leadership/steven.jpg",
      bio: "Full biography details for Board Member...",
      category: 'board'
    },

    // Ministry Leaders
    {
      id: 8,
      name: "James Varghese",
      position: "Sunday School Director",
      image: "/images/leadership/james.jpg",
      bio: "Full biography details for Sunday School Director...",
      category: 'ministry'
    },
    {
      id: 9,
      name: "Leon Tharakan",
      position: "Youth Director",
      image: "/images/leadership/leon.jpg",
      bio: "Full biography details for Youth Director...",
      category: 'ministry'
    },
    {
      id: 10,
      name: "Jeremiah Mathew",
      position: "Youth Secretary",
      image: "/images/leadership/jermy.jpg",
      bio: "Full biography details for Youth Secretary...",
      category: 'ministry'
    },
    {
      id: 11,
      name: "Bejoy Mathew",
      position: "Missions & Charity Director",
      image: "/images/leadership/bejoy.jpg",
      bio: "Full biography details for Missions & Charity Director...",
      category: 'ministry'
    },
    {
      id: 12,
      name: "Mathew Koshy",
      position: "Malayalam Choir Director",
      image: "/images/leadership/binukoshy.jpg",
      bio: "Full biography details for Malayalam Choir Director...",
      category: 'ministry'
    },
    {
      id: 13,
      name: "Rebecca Shaji",
      position: "English Choir Director",
      image: "/images/leadership/rebecca.jpg",
      bio: "Full biography details for English Choir Director...",
      category: 'ministry'
    },
    {
      id: 14,
      name: "Ansel John",
      position: "VBS Coordinator",
      image: "/images/leadership/ansel.jpg",
      bio: "Full biography details for VBS Coordinator...",
      category: 'ministry'
    },
    {
      id: 15,
      name: "Jaiden Mathew",
      position: "VBS Coordinator",
      image: "/images/leadership/jaidan.jpg",
      bio: "Full biography details for VBS Coordinator...",
      category: 'ministry'
    },
    {
      id: 16,
      name: "Sheeba Thomas",
      position: "Sisters Meeting Coordinator",
      image: "/images/leadership/sheeba.jpg",
      bio: "Full biography details for Sisters Meeting Coordinator...",
      category: 'ministry'
    },
    {
      id: 17,
      name: "Binu Joseph",
      position: "Media",
      image: "/images/leadership/binujoseph.jpg",
      bio: "Full biography details for Media Coordinator...",
      category: 'ministry'
    },
    {
      id: 18,
      name: "Pr. Thomas Mathew",
      position: "Church Prayer Coordinator",
      image: "/images/leadership/pastormathew.jpg",
      bio: "Full biography details for Church Prayer Coordinator...",
      category: 'ministry'
    },
    {
      id: 19,
      name: "Joji George",
      position: "Picnic Coordinator",
      image: "/images/leadership/joji.jpg",
      bio: "Full biography details for Church Picnic Coordinator...",
      category: 'ministry'
    }
  ];

  const openModal = (member: LeadershipMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  // Filter data by category
  const pastor = leadershipData.filter(member => member.category === 'pastor');
  const administrative = leadershipData.filter(member => member.category === 'administrative');
  const boardMembers = leadershipData.filter(member => member.category === 'board');
  const ministryLeaders = leadershipData.filter(member => member.category === 'ministry');

  return (
    <section id="leadership" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Page Title */}
          <div className="w-full px-4">
            <SectionTitle
              title="Leadership"
              paragraph="Meet our dedicated leaders who serve our church community"
              mb="44px"
              width="100%"
              center={true}
            />
          </div>

          {/* Senior Pastor Section - Prominent Display */}
          <div className="w-full px-4 mb-16">
            <div className="rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark lg:px-8 xl:p-[55px]">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
                {/* Image Section */}
                <div className="lg:w-2/5 w-full flex flex-col items-center">
                  <div className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-square mb-6">
                    <Image
                      src={pastor[0].image}
                      alt={pastor[0].name}
                      fill
                      className="rounded-lg object-cover border-2 border-gray-200 dark:border-gray-700"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                      {pastor[0].name}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-primary dark:text-primary-light">
                      {pastor[0].position}
                    </p>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="lg:w-3/5 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-6">
                    About Our Pastor
                  </h3>
                  <div className="space-y-4">
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                      <strong>Pastor P. C. Jacob</strong> was born and raised in a devoted Pentecostal family in Kottayam, Kerala, India where he was raised under the spiritual influence of his parents who faithfully served the Lord. While pursuing his Master&lsquo;s degree in English Literature, he sensed God&lsquo;s clear calling upon his life and fully committed himself to Christian ministry.
                    </p>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                      He received formal theological training at United Theological College in Bangalore, India. His passion for the local church and desire to see people live a life of purpose and influence, fuels everything that he does.
                    </p>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                      As a third-generation pastor and preacher, it is the desire of Pastor P. C. Jacob and his wife Renny to continue to serve the Lord and His people in whatever capacity and call God has placed upon them.
                    </p>
                  </div>
                  <button
                    onClick={() => openModal(pastor[0])}
                    className="mt-8 px-8 py-3 bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors duration-300 font-medium shadow-submit dark:shadow-submit-dark"
                  >
                    Read Full Biography →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Administrative Leaders Section */}
          <div className="w-full px-4 mb-16">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl text-center">
                ADMINISTRATIVE LEADERS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {administrative.map((member) => (
                <div key={member.id} className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark">
                  <div className="relative w-56 h-56 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-lg object-cover"
                      sizes="14rem"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-lg font-medium text-body-color dark:text-body-color-dark mb-4 text-center">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Board Members Section */}
          <div className="w-full px-4 mb-16">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl text-center">
                BOARD MEMBERS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {boardMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center">
                  <div className="relative w-full aspect-square max-w-[220px] mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 22vw, 18vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark text-center">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ministry Leaders Section */}
          <div className="w-full px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl text-center">
                MINISTRY LEADERS
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {ministryLeaders.map((member) => (
                <div key={member.id} className="flex flex-col items-center bg-white dark:bg-gray-dark rounded-sm p-4 shadow-three">
                  <div className="relative w-full aspect-square mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 40vw, (max-width: 768px) 28vw, (max-width: 1024px) 18vw, 15vw"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-black dark:text-white mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-xs text-body-color dark:text-body-color-dark text-center line-clamp-2">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Biography Modal */}
      {isModalOpen && selectedMember && (
        <BiographyModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Leadership;