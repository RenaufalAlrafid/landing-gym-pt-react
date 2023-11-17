import ProgramCard from "./ProgramCard";

export default function ProgramSection() {
  let propsProgramCard = [
    {
      id: 0,
      image: "gym1.png",
      title: "Program A",
      description:
        "Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program",
    },
    {
      id: 1,
      image: "gym1.png",
      title: "Program B",
      description:
        "Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program",
    },
    {
      id: 2,
      image: "gym1.png",
      title: "Program C",
      description:
        "Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program",
    },
    {
      id: 3,
      image: "gym1.png",
      title: "Program D",
      description:
        "Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program",
    },
  ];

  return (
    <div className="bg-primary-70 pt-12 pb-20">
      <h1 className="text-white text-3xl font-bold text-center">
        Unlock Your Potential!
      </h1>
      <div className="flex gap-5 mt-9 px-20">
        {propsProgramCard.map((props) => {
          return (
            <ProgramCard
              image={props.image}
              title={props.title}
              description={props.description}
              key={props.id}
            ></ProgramCard>
          );
        })}
      </div>
    </div>
  );
}
