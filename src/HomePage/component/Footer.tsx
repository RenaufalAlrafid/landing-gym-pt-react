import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex bg-primary-70 pl-20 pt-20 pb-20">
      <div>
        <div className=" flex gap-36">
          <div className="flex flex-col gap-4">
            <Link to={"/"} className="text-neutral-0 text-2xl">
              About
            </Link>
            <Link to={"/"} className="text-neutral-0 text-2xl">
              Portofolio
            </Link>
            <Link to={"/"} className="text-neutral-0 text-2xl">
              Program
            </Link>
            <Link to={"/"} className="text-neutral-0 text-2xl">
              BMI Calculator
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to={"/"} className="text-neutral-0 text-2xl">
              Suport
            </Link>
            <Link to={"/"} className="text-neutral-0 text-2xl">
              FAQ
            </Link>
            <Link to={"/"} className="text-neutral-0 text-2xl">
              Privacy Policy
            </Link>
            <Link to={"/"} className="text-neutral-0 text-2xl">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to={"/"} className="text-neutral-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>
            </Link>
            <Link to={"/"} className="text-neutral-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  d="M23.9394 2.30223C23.2595 3.29169 22.4455 4.12917 21.511 4.81306L21.4819 4.83327C21.4916 4.97447 21.4964 5.18653 21.4964 5.46947C21.4932 6.87282 21.283 8.22604 20.8942 9.50086L20.9201 9.40224C20.4884 10.8355 19.8918 12.0861 19.1368 13.221L19.1691 13.1685C18.3696 14.3883 17.4457 15.4384 16.3923 16.343L16.3729 16.3592C15.2638 17.2912 13.9656 18.043 12.5493 18.545L12.462 18.5717C11.0352 19.0955 9.38772 19.3979 7.66991 19.3979C7.63353 19.3979 7.59716 19.3979 7.56159 19.3979H7.56725C7.53653 19.3979 7.50096 19.3979 7.46458 19.3979C4.70801 19.3979 2.14221 18.5774 0 17.1667L0.050928 17.1983C0.389639 17.2371 0.781704 17.2589 1.17943 17.2589H1.23601H1.23278C1.26269 17.2589 1.29907 17.2597 1.33464 17.2597C3.60376 17.2597 5.68857 16.4715 7.33039 15.1531L7.3118 15.1676C5.17848 15.1272 3.38226 13.7311 2.74445 11.8072L2.73475 11.7724C3.01122 11.8185 3.33134 11.846 3.65711 11.8484H3.65954C4.11789 11.8484 4.56169 11.7878 4.98286 11.6738L4.94729 11.6819C3.80585 11.4523 2.83337 10.846 2.14221 10.0004L2.13574 9.99155C1.44215 9.17427 1.02098 8.10721 1.02098 6.94153C1.02098 6.91889 1.02098 6.89626 1.02179 6.87362V6.87686V6.81623C1.6588 7.18162 2.41706 7.40796 3.22625 7.43706H3.23514C2.57065 6.99003 2.03308 6.40315 1.65637 5.71602L1.64344 5.69096C1.27158 5.01597 1.05251 4.21163 1.05251 3.35555C1.05251 2.44532 1.29988 1.59328 1.73155 0.862509L1.71942 0.885144C2.932 2.37175 4.41699 3.58594 6.10489 4.46384L6.18168 4.50022C7.81623 5.36276 9.74017 5.90923 11.7813 6.00704L11.8121 6.00785C11.7369 5.67237 11.6932 5.28677 11.6916 4.89067C11.6948 2.18664 13.888 -0.00488281 16.592 -0.00488281C17.9986 -0.00488281 19.2669 0.58766 20.161 1.53751L20.1634 1.53993C21.334 1.31035 22.3743 0.899695 23.3105 0.333828L23.2676 0.35808C22.8998 1.51487 22.1359 2.45663 21.1375 3.04433L21.1149 3.05645C22.1609 2.93681 23.1156 2.66924 24 2.27475L23.9378 2.29981L23.9394 2.30223Z"
                  fill="#F0E8D6"
                />
              </svg>
            </Link>
            <Link to={"/"} className="text-neutral-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.4286 0.397461H2.57143C1.88944 0.397461 1.23539 0.668379 0.753154 1.15062C0.270918 1.63285 0 2.2869 0 2.96889L0 21.826C0 22.508 0.270918 23.1621 0.753154 23.6443C1.23539 24.1265 1.88944 24.3975 2.57143 24.3975H9.92411V16.238H6.54911V12.3975H9.92411V9.47032C9.92411 6.14085 11.9063 4.30175 14.9421 4.30175C16.3961 4.30175 17.9164 4.56103 17.9164 4.56103V7.82889H16.2413C14.5907 7.82889 14.0759 8.85318 14.0759 9.90371V12.3975H17.7605L17.1712 16.238H14.0759V24.3975H21.4286C22.1106 24.3975 22.7646 24.1265 23.2468 23.6443C23.7291 23.1621 24 22.508 24 21.826V2.96889C24 2.2869 23.7291 1.63285 23.2468 1.15062C22.7646 0.668379 22.1106 0.397461 21.4286 0.397461Z"
                  fill="#F0E8D6"
                />
              </svg>
            </Link>
          </div>
        </div>
        <p className="text-neutral-0 pt-20">Copyright 2023</p>
      </div>
      <div className="flex w-full h-full pt-12 justify-center items-center">
        <h1 className="text-4xl font-bold text-neutral-0 font-josefin">
          DICKYPUTRA
        </h1>
      </div>
    </div>
  );
}
