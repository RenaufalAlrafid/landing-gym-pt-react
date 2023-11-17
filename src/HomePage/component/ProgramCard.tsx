import { Link } from "react-router-dom";

interface propsProgramCard {
  image: string;
  title: string;
  description: string;
}

export default function ProgramCard(props: propsProgramCard) {
  return (
    <div className="flex flex-col gap-3">
      <div className="drop-shadow-xl shadow-black rounded-lg bg-cover bg-center">
        <img
          src={"/Image/" + props.image}
          alt="ProgramCardImage"
          className="object-fill"
        />
      </div>
      <Link to={"/"}>
        <div className="flex justify-start">
          <div className="text-white">
            <h1 className="font-bold font-white mb-2">{props.title}</h1>
            <p className="text-xs">{props.description}</p>
          </div>
          <div className="text-secondary-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
