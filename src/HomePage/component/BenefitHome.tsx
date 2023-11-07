interface BenefitProps {
  title: string;
  description: string;
}
export default function BenefitHome(props: BenefitProps) {
  return (
    <div className="flex gap-5 items-center">
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#ce4d4d"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{props.title}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
