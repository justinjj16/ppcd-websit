import { Article } from "@/types/article";
import Image from "next/image";

const articleData: Article[] = [
  {
    id: "daivathinay-nala-phalam",
    title: "ദൈവത്തിനായി നല്ല ഫലങ്ങൾ പുറപ്പെടുവിക്കാം",
    paragraph:
      "യോഹന്നാൻ 15:16 ൽ ഇപ്രകാരം പറയുന്നു. `നിങ്ങൾ എന്നെ തിരഞ്ഞെടുത്തു എന്നല്ല, ഞാൻ നിങ്ങളെ തിരഞ്ഞെടുത്തു, നിങ്ങൾ പോയി ഫലം കായ്ക്കേണ്ടതിനും നിങ്ങളുടെ ഫലം നിലനില്ക്കേണ്ടതിനും നിങ്ങളെ ആക്കിവച്ചുമിരിക്കുന്നു.` ഈ ലോക ബന്ധനങ്ങളിൽ നിന്ന് ദൈവം നമ്മ തിരഞ്ഞെടുത്തു തന്റെ മക്കളാക്കി തീർത്തിരിക്കുന്നത് ദൈവത്തിനുവേണ്ടി നല്ല ഫലങ്ങളെ നൽകേണ്ടതിനാണ്.",
    image: "/images/article/artical-bible.jpg",
    author: {
      name: "Raju M John",
      image: "/images/article/raju-john.png",
    },
    tags: ["malayalam"],
    publishDate: "July 27, 2024",
    content: (
      <div>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src="/images/article/artical-bible.jpg"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          യോഹന്നാൻ 15:16 ൽ ഇപ്രകാരം പറയുന്നു. `നിങ്ങൾ എന്നെ തിരഞ്ഞെടുത്തു
          എന്നല്ല, ഞാൻ നിങ്ങളെ തിരഞ്ഞെടുത്തു, നിങ്ങൾ പോയി ഫലം കായ്ക്കേണ്ടതിനും
          നിങ്ങളുടെ ഫലം നിലനില്ക്കേണ്ടതിനും നിങ്ങളെ ആക്കിവച്ചുമിരിക്കുന്നു.` ഈ
          ലോക ബന്ധനങ്ങളിൽ നിന്ന് ദൈവം നമ്മ തിരഞ്ഞെടുത്തു തന്റെ മക്കളാക്കി
          തീർത്തിരിക്കുന്നത് ദൈവത്തിനുവേണ്ടി നല്ല ഫലങ്ങളെ നൽകേണ്ടതിനാണ്.
        </p>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          യെശയ്യാ പ്രവചനം അഞ്ചാം അധ്യായത്തിൽ ഒരു മുന്തിരി തോട്ടക്കാരൻ തൻറെ
          മുന്തിരിത്തോട്ടത്തിന് വേലികെട്ടി, കല്ലുകൾ പെറുക്കി കളഞ്ഞു അതിൽ നല്ല വക
          മുന്തിരി നട്ടു, നടുവിൽ ഒരു ഗോപുരം പണിതു ചക്കും ഇട്ടു, മുന്തിരിങ്ങ
          കായ്ക്കുവാൻ നോക്കിയിരുന്നു. പക്ഷേ കായ്ച്ചതോ കാട്ടുമുന്തിരിങ്ങ്.
          നമ്മുടെ ജീവിതത്തിൽ വേണ്ടുന്ന എല്ലാ പരിചരണവും നൽകി ദൈവമക്കളായി നമ്മെ
          നിർത്തിയിരിക്കുമ്പോൾ നല്ല തോട്ടക്കാരൻ നമ്മിൽ നിന്ന് ആഗ്രഹിക്കുന്നത്
          കാട്ടു മുന്തിരിങ്ങയുടെ അനുഭവമല്ല പിന്നെയോ നല്ല മുന്തിരിങ്ങയുടെ
          അനുഭവമത്രേ.
        </p>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          മത്തായിയുടെ സുവിശേഷം 21:18-19 വാക്യങ്ങൾ വായിക്കുമ്പോൾ യേശു ദൂരെ നിന്ന്
          ഇലകൾ ഉള്ള ഒരു അത്തിവൃക്ഷത്തെ കണ്ടു അതിൽ നിന്ന് എന്തെങ്കിലും
          ലഭിക്കുമെന്ന് ആശയോടെ അതിനടുത്ത് എത്തി. അപ്പോഴാണ് അതിൽ
          <strong className="text-primary dark:text-white"> ഇലയല്ലാതെ </strong>
          ഫലം ഒന്നും കാണാഞ്ഞതിനാൽ അതിനെ ശപിച്ചത്. അത് ഉണങ്ങിപ്പോയി. ആ വൃക്ഷത്തിൽ
          ഇലകൾ ഉള്ളപ്പോൾ ഫലവും കാണേണ്ടതായിരുന്നു. ആത്മീയത്തിലും ഇതുപോലെ ദൂരെ
          നിന്ന് കാണുമ്പോൾ പുറമേക്ക് എന്തൊക്കെയോ ഫലങ്ങൾ ഉണ്ടെന്ന് കരുതി
          അതിനടുത്ത് വരുമ്പോൾ ആണ് ഒന്നുമില്ല എന്ന് മനസ്സിലാകുന്നത്. കപട
          ഭക്തിക്കാരുടെ ഒരു അവസ്ഥയാണ് നമുക്കിവിടെ കാണാനാവുന്നത്.
        </p>

        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          ലൂക്കോസ് 13:6-9 വരെയുള്ള വാക്യങ്ങളിൽ മൂന്നു സംവത്സരമായി തൻറെ അത്തി
          വൃക്ഷത്തിൽ നിന്ന് ഫലം തിരഞ്ഞുകൊണ്ടിരുന്ന തോട്ടത്തിന്റെ ഉടമസ്ഥൻ ഫലം
          നൽകാത്ത ആ അത്തിവൃക്ഷത്തെ വെട്ടി കളയുവാൻ തോട്ടം സൂക്ഷിപ്പുകാരനോട്
          പറഞ്ഞു. അപ്പോൾ അവൻ, &lsquo;കർത്താവേ, ഞാൻ അതിനുചുറ്റും കിളച്ച്
          വളമിടുവോളം ഒരാണ്ടു കൂടി നിൽക്കട്ടെ. എന്നിട്ടും കായ്ച്ചില്ലെങ്കിൽ
          നമുക്ക് വെട്ടിക്കളയാം എന്ന് പറഞ്ഞു.
        </p>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          മേൽ പ്രസ്താവിച്ച ഭാഗങ്ങളിൽ നിന്ന് മൂന്ന് അവസ്ഥകൾ നമുക്ക് കാണാം.
        </p>

        <ul className="mb-10 list-inside list-disc text-body-color">
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            എല്ലാ പരിചരണവും ലഭിച്ചിട്ടും നല്ല മുന്തിരി ലഭിക്കേണ്ട സമയത്ത് കാട്ടു
            മുന്തിരി കായ്ക്കുന്ന അവസ്ഥ.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            ഇലകൾ മാത്രം കാണിച്ചുകൊണ്ട് യാതൊരു ഫലവും നൽകാത്ത അവസ്ഥ. ആ
            അത്തിവൃക്ഷത്തെ യേശു ശപിക്കുകയുണ്ടായി.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            എല്ലാ പരിചരണങ്ങളും ലഭിച്ചിട്ടും ഒരു ഫലവും പുറപ്പെടുവിക്കാത്ത അവസ്ഥ.
            അതിനെ വെട്ടിക്കളയുവാൻ ആവശ്യപ്പെട്ടിട്ടും അതിന് മനസ്സ് വരാതെ ഒരു വർഷം
            കൂടെ നിൽക്കട്ടെ എന്ന് യാചിക്കുന്ന തോട്ടം സൂക്ഷിപ്പുകാരൻ അഥവാ
            ദൈവപുത്രനായ നമ്മുടെ യേശുക്രിസ്തു.
          </li>
        </ul>

        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          നാം ഇതിൽ ഏതെങ്കിലും അവസ്ഥയിൽ ആയിരിക്കുന്നുവോ എന്ന് നമുക്ക് ശോധന
          ചെയ്യാം. ദൈവത്തിനു പ്രയോജനമുള്ളവരാകേണ്ടതിന് നമ്മുടെ ജീവിതത്തെ
          ക്രമീകരിക്കാം.
        </p>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          നല്ല ഫലം എങ്ങനെ നൽകാം? യോഹന്നാന്റെ സുവിശേഷം 15:4 ൽ യേശു പറയുന്നു,
          &lsquo;എന്നിൽ വസിപ്പിൻ ഞാൻ നിങ്ങളിലും വസിക്കും. കൊമ്പിന്
          മുന്തിരിവള്ളിയിൽ വസിച്ചിട്ട് അല്ലാതെ സ്വയമായി കായ്ക്കാൻ കഴിയാത്തതു
          പോലെ എന്നിൽ വസിച്ചിട്ടല്ലാതെ നിങ്ങൾക്കു കഴിയുകയില്ല.&lsquo;
        </p>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          ആകയാൽ നമുക്ക് യേശുവിനോട് ചേർന്നു വസിക്കാം. നല്ല ഫലങ്ങളെ നൽകിക്കൊണ്ട്
          നല്ല സാക്ഷ്യം ഉള്ളവരായി നമ്മുടെ ക്രിസ്തീയ ജീവിതം മുന്നോട്ട് നയിക്കാം.
          ദൈവം നമ്മെ അനുഗ്രഹിക്കട്ടെ .
        </p>
      </div>
    ),
  },
  {
    id: "2",
    title: "A paradigm shift for the church   ",
    paragraph:
      "To compete for a championship, during a game a great team must make some adjustments. The second half is the crucial period for any successful team and at",
    image: "/images/article/artical-worship.jpg",
    author: {
      name: "P C JACOB",
      image: "/images/article/pc-jacob.png",
    },
    tags: ["English"],
    publishDate: "August 24, 2024",
    content: (
      <div>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src="/images/article/artical-worship.jpg"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <p className="mb-4 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          To compete for a championship, during a game a great team must make
          some adjustments. The second half is the crucial period for any
          successful team and at this second half time, great teams must make
          some adjustments if they want to win the game. Our church has come to
          the half of the course of our race. We are in the second half of the
          game.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          We need to make some drastic changes in the way we think about the
          important things if we need to be successful in the years to come.
        </p>
        <p className="mb-4  text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Some people call these changes a “paradigm shift.”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Paradigm shift is defined as `a time when the usual and accepted way
          of doing or thinking about something changes completely`.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          What I’m asking for is for us to begin to think differently as a
          church family. How can our church change for the better? How can we
          move from maintenance mode to a growth mode?
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Let us prayerfully think about some adjustments we need to make to be
          more effective for Christ in the months ahead.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          In our Christian Walk, there are some negotiable and non-negotiable.
          Our commitment to Jesus will stay the same. Our commitment to the
          Bible as God’s word and the source of truth will stay the same. Our
          mission and vision will stay the same. Our core values will stay the
          same. The message will remain the same, but the methods can be
          changed, modified or corrected as needed.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          We cannot continue to look at things the way we always have. Here are
          five commitments I hope we can seriously consider and commitied to:
        </p>
        <div className="mx-auto my-8 flex flex-col justify-center rounded-2xl bg-cream p-4 text-center dark:bg-yellow sm:w-1/2">
          <h3 className="text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
            1
          </h3>
          <p className="text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            I will help my church shift from “serve us” toservice.
          </p>
        </div>
        <p className="mb-4 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Analyzing the problem in his own church, onepastor quoted from one of
          his staff reports. This staff member was trying to share a word
          pictureto describe a problem they faced in their church.We were facing
          a volunteer shortage. She said,“The problem with some of our people is
          that they have this attitude: ‘Here, tie my shoe!’”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Too many of us have a “serve us” attitude. There’s no question that a
          church ought to meet your needs.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          But I have found that when I am focused on having my needs met, then I
          most likely to gripe and grumble. That’s when I am most likely to be
          miserable and not grow. But when I shift from serve us to service, I
          find my needs miraculously being met. I grow!
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Ephesians 4:11-12 “And He gave some asapostles, and some as prophets,
          and some as evangelists, and some as pastors and teachers, for the
          equipping of the saints for the work of service, to the building up of
          the body of Christ”
        </p>

        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          As the pastor of the church, my task is to equip you and to mobilize
          you to be obedient to God’s call on your life to serve. Most of us
          have been conditioned to think of “ministry” as something that pastors
          do. But here’s a definition of “ministry” that might surprise you.
          Ministry is meeting others needs with the resources God gives to you.
          Serving others ought to be a normal part of life for every
          Christ-follower. You may not be a Bible scholar or a Billy Graham, but
          no matter what your present level of spiritual maturity, you can meet
          someone else’s need with the resources God has given you
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Our goal this year and beyond, is to see an increasing percentage of
          people serving in some ministry. We’re going to have to figure out a
          way to measure our effectiveness in mobilizing people.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Listen, there are lots of needy people in this world. They wonder,
          “Does anyone care?” Lots of broken people who wonder, “Who will cry
          for me?” by volunteering to serve in ministry inside the church and
          outside the church can make a huge difference in the lives of many.
        </p>
        <p className="mb-4 text-base font-medium italic leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Key question: What will I do to be mobilized to serve in some area of
          brokenness in 2024 and beyond?
        </p>

        <div className="mx-auto my-8 flex flex-col justify-center rounded-2xl bg-cream p-4 text-center dark:bg-yellow sm:w-1/2">
          <h3 className="text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
            2
          </h3>
          <p className="text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            I will help our church shift from impressing from a distance to
            impacting up close.
          </p>
        </div>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          The great preachers can impress us, but I am deeply impacted by the
          fellowship, prayer and love of my church. Many of us may not be
          famous, but you have impacted my life. The great anointed preachers
          impressed me but the fellowship, the small prayer meetings, the bible
          studies, impacted me.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Small group impact has a significant impact in the life of a church.
          We grow best and we grow most in a small group environment. We can
          impress people from a distance, but we can impact them up close. The
          reason some of us here aren’t gaining victory in key areas of our
          lives is because we won’t make a commitment to get into a small group.
          That makes us very unlike the followers of Christ in the early church.
          Look at their commitment to small groups.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Acts 2:42-47: They were continually devoting themselves to the
          apostles’ teaching and to fellowship, to the breaking of bread and to
          prayer. Everyone kept feeling a sense of awe… And all those who had
          believed were together and had all things in common… Day by day…
          breaking bread from house to house, they were taking their meals
          together with gladness and sincerity of heart, praising God and having
          favor with all the people. And the Lord was adding to their number day
          by day those who were being saved. We want to see an increasing
          percentage of people here involved in the fellowship and small groups.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          We need to seriously consider the following questions:
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          What is my assignment in this church?
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          What role do I need to play to strengthen and edify my fellow
          believers.
        </p>
        <p className="mb-4 text-base font-medium italic leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Key question: What will I do to strengthen my involvement and
          commitment to the church in 2024 and beyond?
        </p>
        <div className="mx-auto my-8 flex flex-col justify-center rounded-2xl bg-cream p-4 text-center dark:bg-yellow sm:w-1/2">
          <h3 className="text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
            3
          </h3>
          <p className="text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            I will help our church from watching the service to worshiping the
            Savior.
          </p>
        </div>
        <p className="mb-8 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Way too many of us are spectators during Sunday services. Because of
          our relationship with Jesus, we’ve been given the greatest gift of all
          – forgiveness of sin, freedom from guilt, purpose for living, power to
          live abundantly, and a home in heaven when we die. Yet, for some
          reason, some of us are held back from offering the praise and thanks
          to God that He deserves.
        </p>

        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Look at the scriptures:
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Psalms 13:6 I will sing to the LORD, Because He has dealt bountifully
          with me.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Psalms 33:1 Sing for joy in the LORD, O you righteous ones; Praise is
          becoming to the upright.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Psalms 34:1 I’ll bless the Lord at all times, his praise shall
          continually be in my mouth. Verse 3 Oh, magnify the Lord with me and
          let us exalt his name together. Verse 8 Oh taste and see that the Lord
          is good.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Psalms 104:33 I will sing to the LORD as long as I live; I will sing
          praise to my God while I have my being.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Never forget. You aren’t the audience. God is. You’re not here to
          watch. You’re here to worship! God is the audience. And believe it or
          not, you are in the choir. Worship is all about him and not on us
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          We have to make a conscious decision to get close to God week after
          week. We need to be intentional in the worship. Let’s forget about
          ourselves and concentrate on him and worship him.
        </p>
        <p className="mb-4 text-base font-medium italic leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Key question: How will I engage in worship more passionately since I
          now know that God Himself is the audience? Decide not to be spectator
          anymore and get involved in the worship.
        </p>
        <div className="mx-auto my-8 flex flex-col justify-center rounded-2xl bg-cream p-4 text-center dark:bg-yellow sm:w-1/2">
          <h3 className="text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
            4
          </h3>
          <p className="text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            I will help our church shift from a comfortmindset to a combat
            mindset.
          </p>
        </div>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          I’m not talking about conflict with other followers of Christ. I’m not
          talking about conflict within you or family or circle of friends. What
          I am talking about is conflict in a spiritual sense.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Ephesians 6:12 Our struggle is not against flesh and blood, but
          against the rulers, against the powers, against the world forces of
          this darkness, against the spiritual forces of wickedness in the
          heavenly places.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          John Piper, in “Let the Nations Be Glad,” writes, “Very few people
          think that we are in a war that is greater than WWII, or any
          imaginable nuclear war. Few reckon that Satan is a much worse enemy
          than any earthly foe or realize that the conflict is not restricted to
          one global theatre but is in every town and city in the world. Who
          considers that the casualties of this war do not merely lose an arm or
          an eye or an earthly life, but lose everything, even their own soul
          and enter a hell of everlasting torment?”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          When we get to heaven God is going to ask us 2 questions.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          “Why should you enter here?”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          And “Who did you bring with you?”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          The answer to the first question is because of the shed blood of Jesus
          Christ who is my Lord and Savior. It’s the second question that always
          gnawed at me over the past several years. “Who did you bring with
          you?”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Are you a casual follower of Christ or a committed follower of Christ?
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          The heartbeat of God is soul winning. God has only one son and he send
          his only one son as a missionary to this world.
        </p>
        <p className="mb-4 text-base font-medium italic leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Key question: How will I live differently as a warrior for Jesus in
          2024 and beyond?
        </p>
        <div className="mx-auto my-8 flex flex-col justify-center rounded-2xl bg-cream p-4 text-center dark:bg-yellow sm:w-1/2">
          <h3 className="text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
            5
          </h3>
          <p className="text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            I will help our church shift from a selfish mindset to the mind of
            Christ.
          </p>
        </div>
        <p className="mb-4 indent-14 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Mind of Christ – Philippians 2:5-8 In your relationships with one
          another, have the same mind set as Christ Jesus. (NIV)
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          1 Corinthians 2:16 says, “‘For who has known the mind of the Lord that
          he may instruct him?’ But we have the mind of Christ.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Having the mind of Christ means we “look at life from our Savior’s
          point of view, having His values and desires in mind. It means to
          think God’s thoughts and not to think as the world thinks.” It is a
          shared perspective of humility, compassion, and dependence on God.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          True revival is when God transforms our lives. Transforming from our
          desires to His, from our selfish motives to His selfless plans.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          The root cause of all problem is our selfish ambitions.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          We are created as inter dependent, not intended to be in isolation. We
          become self-dependent and moved away from the plan of God.
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          This is “the mind of Christ,” an attitude that says, “I cannot keep my
          privileges for myself, I must use them for others; and to do this, I
          will gladly lay them aside and pay whatever price is necessary.”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          More than twenty times in the New Testament, God instructs us how to
          live with “one another.”
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          We are to prefer one another (Rom. 12:10), edify one another (1 Thess.
          5:11), and bear each other’s burdens (Gal. 6:2). We should not judge
          one another (Rom. 14:13) but rather admonish one another (Rom. 15:14).
        </p>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Others is the key word in the vocabulary of the Christian who
          exercises the mind of Christ
        </p>
        <p className="mb-4 text-base font-medium italic leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Key Question: How will I live differently, moving from selfish mindset
          to the mind of Christ, transforming my desires to the plan and purpose
          of my Master in 2024 and beyond.
        </p>
        <div className="">
          <p className="mb-4 mt-16 text-center text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            As we move forward, committed to make some paradigm shift in our
            personal lives and in the corporate life of the church, let us
            intentionally affirm these commitments:
          </p>
          <ul className="list-disc">
            <li className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed ">
              {" "}
              To better love the broken, I must shift from “serve us” to
              service.
            </li>
            <li className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              To better love fellow believers, I must shift from impressing to
              impacting.
            </li>
            <li className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              {" "}
              To better love the Lord, I must shift from watching to worshiping.
            </li>
            <li className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              To better love the lost, I must shift from comfort to combat.
            </li>
            <li className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              {" "}
              To better serve the Master, I must shift from selfish mindset toe
              the mind of Christ.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  // {
  //   id: "3",
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/article/article-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/article/author-03.png",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  //   content: "",
  // },
];
export default articleData;
