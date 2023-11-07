import React from "react";

export default function AboutSection() {
  return (
    <div className="flex pt-16 pb-14 pl-36 pr-72 gap-7">
      <div>
        <img src="/Image/hero2.png" alt="Hero About" />
      </div>
      <div className="pt-10">
        <div className="relative z-0">
          <div className="w-[206px] h-[71px] rotate-3 flex-shrink-0 z-0 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="207"
              height="73"
              viewBox="0 0 207 73"
              fill="none"
            >
              <ellipse
                cx="103.427"
                cy="36.6142"
                rx="103"
                ry="35.5"
                transform="rotate(-3.43889 103.427 36.6142)"
                fill="#F5DBDB"
              />
            </svg>
          </div>
          <div className="w-[212px] h-[76px] flex-shrink-0 z-10 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="216"
              height="81"
              viewBox="0 0 216 81"
              fill="none"
              className="stroke-2 stroke-black"
            >
              <path
                d="M163.125 10.6722C143.782 5.76844 121.938 4.88352 101.975 4.88352C88.3429 4.88352 75.1626 6.4126 61.5923 7.73194C49.6577 8.89224 38.735 12.0749 27.1816 15.1746C20.8859 16.8637 14.0639 20.1819 9.72353 25.19C4.3817 31.3536 -0.641505 40.6287 3.56728 48.3448C8.07181 56.6032 21.1723 60.5195 29.2949 63.6436C37.996 66.9902 47.0582 68.4849 56.263 69.7999C67.1783 71.3592 78.1293 73.3574 89.0657 74.6697C107.105 76.8344 125.107 78.4829 143.278 78.4829C156.211 78.4829 170.121 78.9394 182.788 76.1858C191.182 74.361 200.283 72.1463 207.137 66.538C212.547 62.1115 213.679 51.018 213.569 44.3938C213.217 23.2395 185.601 14.1285 173.048 1.57568"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="absolute z-20  w-[212px] h-[76px] flex  justify-center items-center">
            <h1 className="font-bold text-3xl ">
              <span className="text-black">About</span>{" "}
              <span className="text-primary-70">Dicky</span>
            </h1>
          </div>
        </div>
        <div className="pt-28">
          <p>
            I am a Gym Personal Trainer located in xxx. I have the experience of
            being a Personal Trainer at xxx gym for at least 3 years and during
            that time I have coached more than 1000 people. I ensure everyone
            can achieve their dream!
          </p>
        </div>
        <div className="pt-5">
          <span className="font-bold text-lg">
            {" "}
            So, let's get started on your fitness journey today!
          </span>
        </div>
        <button className="flex gap-2 px-4 py-3 bg-secondary-50 rounded-lg mt-7 text-white font-bold">
          <span>Get Fit Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33325 14.1663L12.4999 9.99967L8.33325 5.83301"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 10H2.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
