import { Article } from "@/types/article";
import Image from "next/image";

const articleData: Article[] = [
  {
    id: "daivathinay-nala-phalam",
    title: "ദൈവത്തിനായി നല്ല ഫലങ്ങൾ പുറപ്പെടുവിക്കാം",
    paragraph:
      "യോഹന്നാൻ 15:16 ൽ ഇപ്രകാരം പറയുന്നു. &lsquo;നിങ്ങൾ എന്നെ തിരഞ്ഞെടുത്തു എന്നല്ല, ഞാൻ നിങ്ങളെ തിരഞ്ഞെടുത്തു, നിങ്ങൾ പോയി ഫലം കായ്ക്കേണ്ടതിനും നിങ്ങളുടെ ഫലം നിലനില്ക്കേണ്ടതിനും നിങ്ങളെ ആക്കിവച്ചുമിരിക്കുന്നു.&lsquo; ഈ ലോക ബന്ധനങ്ങളിൽ നിന്ന് ദൈവം നമ്മ തിരഞ്ഞെടുത്തു തന്റെ മക്കളാക്കി തീർത്തിരിക്കുന്നത് ദൈവത്തിനുവേണ്ടി നല്ല ഫലങ്ങളെ നൽകേണ്ടതിനാണ്.",
    image: "/images/article/article-01.jpg",
    author: {
      name: "Raju M John",
      image: "/images/article/raju-john.png"
    },
    tags: ["malayalam"],
    publishDate: "July 27 2024",
    content: (
      <div>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src="/images/article/article-details-02.jpg"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          യോഹന്നാൻ 15:16 ൽ ഇപ്രകാരം പറയുന്നു. `നിങ്ങൾ എന്നെ തിരഞ്ഞെടുത്തു എന്നല്ല, ഞാൻ നിങ്ങളെ തിരഞ്ഞെടുത്തു, നിങ്ങൾ പോയി ഫലം കായ്ക്കേണ്ടതിനും നിങ്ങളുടെ ഫലം നിലനില്ക്കേണ്ടതിനും നിങ്ങളെ ആക്കിവച്ചുമിരിക്കുന്നു.` ഈ ലോക ബന്ധനങ്ങളിൽ നിന്ന് ദൈവം നമ്മ തിരഞ്ഞെടുത്തു തന്റെ മക്കളാക്കി തീർത്തിരിക്കുന്നത് ദൈവത്തിനുവേണ്ടി നല്ല ഫലങ്ങളെ നൽകേണ്ടതിനാണ്.
        </p>
        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          യെശയ്യാ പ്രവചനം അഞ്ചാം അധ്യായത്തിൽ ഒരു മുന്തിരി തോട്ടക്കാരൻ തൻറെ മുന്തിരിത്തോട്ടത്തിന് വേലികെട്ടി, കല്ലുകൾ പെറുക്കി കളഞ്ഞു അതിൽ നല്ല വക മുന്തിരി നട്ടു, നടുവിൽ ഒരു ഗോപുരം പണിതു ചക്കും ഇട്ടു, മുന്തിരിങ്ങ കായ്ക്കുവാൻ നോക്കിയിരുന്നു. പക്ഷേ കായ്ച്ചതോ കാട്ടുമുന്തിരിങ്ങ്. നമ്മുടെ ജീവിതത്തിൽ വേണ്ടുന്ന എല്ലാ പരിചരണവും നൽകി ദൈവമക്കളായി നമ്മെ
          നിർത്തിയിരിക്കുമ്പോൾ നല്ല തോട്ടക്കാരൻ നമ്മിൽ നിന്ന് ആഗ്രഹിക്കുന്നത് കാട്ടു മുന്തിരിങ്ങയുടെ അനുഭവമല്ല പിന്നെയോ നല്ല മുന്തിരിങ്ങയുടെ അനുഭവമത്രേ.
        </p>
        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          മത്തായിയുടെ സുവിശേഷം 21:18-19 വാക്യങ്ങൾ വായിക്കുമ്പോൾ യേശു ദൂരെ നിന്ന് ഇലകൾ ഉള്ള ഒരു അത്തിവൃക്ഷത്തെ കണ്ടു അതിൽ നിന്ന് എന്തെങ്കിലും ലഭിക്കുമെന്ന് ആശയോടെ അതിനടുത്ത് എത്തി. അപ്പോഴാണ് അതിൽ
          <strong className="text-primary dark:text-white"> {" "} ഇലയല്ലാതെ {" "}</strong>
                    ഫലം ഒന്നും കാണാഞ്ഞതിനാൽ അതിനെ ശപിച്ചത്. അത് ഉണങ്ങിപ്പോയി. ആ വൃക്ഷത്തിൽ ഇലകൾ ഉള്ളപ്പോൾ ഫലവും കാണേണ്ടതായിരുന്നു. ആത്മീയത്തിലും ഇതുപോലെ ദൂരെ നിന്ന് കാണുമ്പോൾ പുറമേക്ക് എന്തൊക്കെയോ ഫലങ്ങൾ ഉണ്ടെന്ന് കരുതി അതിനടുത്ത് വരുമ്പോൾ ആണ് ഒന്നുമില്ല എന്ന് മനസ്സിലാകുന്നത്. കപട ഭക്തിക്കാരുടെ ഒരു അവസ്ഥയാണ് നമുക്കിവിടെ കാണാനാവുന്നത്.
        </p>

        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          ലൂക്കോസ് 13:6-9 വരെയുള്ള വാക്യങ്ങളിൽ മൂന്നു സംവത്സരമായി തൻറെ അത്തി വൃക്ഷത്തിൽ നിന്ന് ഫലം തിരഞ്ഞുകൊണ്ടിരുന്ന തോട്ടത്തിന്റെ ഉടമസ്ഥൻ ഫലം നൽകാത്ത ആ അത്തിവൃക്ഷത്തെ വെട്ടി കളയുവാൻ തോട്ടം
          സൂക്ഷിപ്പുകാരനോട് പറഞ്ഞു. അപ്പോൾ അവൻ, &lsquo;കർത്താവേ, ഞാൻ അതിനുചുറ്റും കിളച്ച് വളമിടുവോളം ഒരാണ്ടു കൂടി നിൽക്കട്ടെ. എന്നിട്ടും കായ്ച്ചില്ലെങ്കിൽ നമുക്ക് വെട്ടിക്കളയാം എന്ന് പറഞ്ഞു.
        </p>
        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          മേൽ പ്രസ്താവിച്ച ഭാഗങ്ങളിൽ നിന്ന് മൂന്ന് അവസ്ഥകൾ നമുക്ക് കാണാം.
        </p>

        <ul className="mb-10 list-inside list-disc text-body-color">
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            എല്ലാ പരിചരണവും ലഭിച്ചിട്ടും നല്ല മുന്തിരി ലഭിക്കേണ്ട സമയത്ത് കാട്ടു മുന്തിരി കായ്ക്കുന്ന അവസ്ഥ.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            ഇലകൾ മാത്രം കാണിച്ചുകൊണ്ട് യാതൊരു ഫലവും നൽകാത്ത അവസ്ഥ. ആ അത്തിവൃക്ഷത്തെ യേശു ശപിക്കുകയുണ്ടായി.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            എല്ലാ പരിചരണങ്ങളും ലഭിച്ചിട്ടും ഒരു ഫലവും പുറപ്പെടുവിക്കാത്ത അവസ്ഥ. അതിനെ വെട്ടിക്കളയുവാൻ ആവശ്യപ്പെട്ടിട്ടും അതിന് മനസ്സ് വരാതെ ഒരു വർഷം കൂടെ നിൽക്കട്ടെ എന്ന് യാചിക്കുന്ന തോട്ടം സൂക്ഷിപ്പുകാരൻ അഥവാ ദൈവപുത്രനായ നമ്മുടെ യേശുക്രിസ്തു.
          </li>
        </ul>

        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          നാം ഇതിൽ ഏതെങ്കിലും അവസ്ഥയിൽ ആയിരിക്കുന്നുവോ എന്ന് നമുക്ക് ശോധന ചെയ്യാം. ദൈവത്തിനു
          പ്രയോജനമുള്ളവരാകേണ്ടതിന് നമ്മുടെ ജീവിതത്തെ ക്രമീകരിക്കാം.
        </p>
        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          നല്ല ഫലം എങ്ങനെ നൽകാം? യോഹന്നാന്റെ സുവിശേഷം 15:4 ൽ യേശു പറയുന്നു, &lsquo;എന്നിൽ വസിപ്പിൻ ഞാൻ നിങ്ങളിലും വസിക്കും. കൊമ്പിന് മുന്തിരിവള്ളിയിൽ വസിച്ചിട്ട് അല്ലാതെ സ്വയമായി കായ്ക്കാൻ കഴിയാത്തതു പോലെ എന്നിൽ വസിച്ചിട്ടല്ലാതെ നിങ്ങൾക്കു കഴിയുകയില്ല.&lsquo;
        </p>
        <p className="indent-14 mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          ആകയാൽ നമുക്ക് യേശുവിനോട് ചേർന്നു വസിക്കാം. നല്ല ഫലങ്ങളെ നൽകിക്കൊണ്ട് നല്ല സാക്ഷ്യം ഉള്ളവരായി നമ്മുടെ ക്രിസ്തീയ ജീവിതം മുന്നോട്ട് നയിക്കാം. ദൈവം നമ്മെ അനുഗ്രഹിക്കട്ടെ .
        </p>
      </div>
    )
  },
  {
    id: "2",
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/article/article-02.jpg",
    author: {
      name: "Justin",
      image: "/images/article/author-02.png"
    },
    tags: ["computer"],
    publishDate: "2025",
    content: ""
  },
  {
    id: "3",
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/article/article-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/article/author-03.png",
    },
    tags: ["design"],
    publishDate: "2025",
    content: ""
  },
];
export default articleData;
