import { CorousalImageSlide } from "./CorousalImageSlide";

export const PortofolioSection = () => {
  return (
    <div className="flex pt-11 pb-16 pr-28 pl-48">
      <div className="py-20 pr-12 pl-1">
        <h1 className="font-bold text-3xl flex gap-1">
          <span className="text-primary-70">Dicky’s</span>
          <span className="text-black">Portfolios</span>
        </h1>
        <p className="mt-6 mb-8">
          Whether you're looking to lose weight, build muscle, improve your
          athletic performance, or simply lead a healthier lifestyle, I am here
          to support you every step of the way.
        </p>
        <button className="py-3 px-4 flex gap-2 text-white bg-secondary-50 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_601_2056)">
              <path
                d="M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 6.66699L13.3334 10.0003L8.33337 13.3337V6.66699Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_601_2056">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Watch Portfolio</span>
        </button>
      </div>
      <div className="w-3/4">
        <CorousalImageSlide></CorousalImageSlide>
      </div>
    </div>
  );
};
