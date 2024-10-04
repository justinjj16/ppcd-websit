import { useState } from "react";
import "./index.scss";

export default function SocialMedia() {
  const [isVisible, setIsVisible] = useState(false);

  const socialMediaHandler = (key) => {
    let link;
    if (key === "facebook") {
      link = "https://www.facebook.com/profile.php?id=61565121380657";
    } else if (key === "instagram") {
    } else if (key === "youTube") {
      link = "https://www.youtube.com/@PPCDChurch";
    }
    link && window.open(link, "_blank");
  };

  return (
    <div id="social-share" className="sm:hidden">
      <ul className={`social-itens ${isVisible ? "open" : "hidden"}`}>
        <li>
          <button
            onClick={() => socialMediaHandler("facebook")}
            className="btn-share social-item-4"
          >
            <svg
              viewBox="126.445 2.281 589 589"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
              <path
                d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            onClick={() => socialMediaHandler("instagram")}
            className="btn-share social-item-3"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="url(#paint0_radial_87_7153)"
              />
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="url(#paint1_radial_87_7153)"
              />
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="url(#paint2_radial_87_7153)"
              />
              <path
                d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                fill="white"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_87_7153"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                >
                  <stop stopColor="#B13589" />
                  <stop offset="0.79309" stopColor="#C62F94" />
                  <stop offset="1" stopColor="#8A3AC8" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_87_7153"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                >
                  <stop stopColor="#E0E8B7" />
                  <stop offset="0.444662" stopColor="#FB8A2E" />
                  <stop offset="0.71474" stopColor="#E2425C" />
                  <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_87_7153"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                >
                  <stop offset="0.156701" stopColor="#406ADC" />
                  <stop offset="0.467799" stopColor="#6A45BE" />
                  <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </button>
        </li>
        <li>
          <button
            onClick={() => socialMediaHandler("youTube")}
            className="btn-share social-item-2"
          >
            <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
                  fill="#FF0002"
                />

                <path
                  d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z"
                  fill="#FFF"
                />
              </g>
            </svg>
          </button>
        </li>
        {/* <li>
          <button className="btn-share social-item-1">
            <i className="material-icons">thumb_up</i>
            <span className="btn-share-text">Facebook</span>
          </button>
        </li> */}
      </ul>
      <div
        className={`social-open-menu ${isVisible ? "rotate-45 transform transition duration-300" : "rotate-0 transform transition duration-300"}`}
      >
        <button onClick={() => setIsVisible(!isVisible)} className="btn-share">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <circle fill="#4A6CF7" cx="25" cy="25" r="25" />
            <line
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="25"
              y1="13"
              x2="25"
              y2="38"
            />
            <line
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="37.5"
              y1="25"
              x2="12.5"
              y2="25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
