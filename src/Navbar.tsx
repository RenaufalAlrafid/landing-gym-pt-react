import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary-base shadow-xl flex justify-around fixed z-50 w-full">
      <div className="py-5">
        <h1 className="font-josefin font text-primary-70 font-bold text-4xl ">
          DICKYPUTRA
        </h1>
      </div>
      <div id="Link" className="flex gap-16 py-6">
        <Link
          to={"/"}
          className="text-black  hover:underline hover:underline-offset-4 "
        >
          Home
        </Link>
        <Link
          to={"/"}
          className="text-black hover:underline hover:underline-offset-4"
        >
          Program
        </Link>
        <Link
          to={"/"}
          className="text-black hover:underline hover:underline-offset-4"
        >
          Portofolio
        </Link>
        <Link
          to={"/"}
          className="text-black hover:underline hover:underline-offset-4"
        >
          BMI Calculator
        </Link>
      </div>
      <div id="buttonJoin" className="py-5">
        <Link
          to={"/"}
          className="bg-secondary-50 py-2 px-3 flex gap-2 text-neutral-0 rounded-lg hover:bg-secondary-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5m9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14Z"
            />
          </svg>
          <span className="font-bold">Join Now</span>
        </Link>
      </div>
    </nav>
  );
}
