import { useState } from "react";

export const CorousalImageSlide = () => {
  const [Image, setImage] = useState(0);
  //   const [Image1, setImage1] = useState(0);
  //   const [Image2, setImage2] = useState(1);

  const images = [
    "/Image/porto1.jpg",
    "/Image/porto2.jpg",
    "/Image/porto3.jpg",
    "/Image/porto1.jpg",
    "/Image/porto2.jpg",
    "/Image/porto3.jpg",
    "/Image/porto1.jpg",
    "/Image/porto2.jpg",
    "/Image/porto3.jpg",
  ];

  const set = images.length - 1;

  const clickNext = () => {
    if (Image !== set) {
      setImage(Image + 1);
      //   setImage1(Image - 1);
      //   setImage2(Image + 1);
    }
    console.log(Image);
    // console.log(images[Image2]);
  };

  const clickBack = () => {
    if (Image !== 0) {
      setImage(Image - 1);
      //   setImage1(Image - 1);
      //   setImage2(Image + 1);
      //   console.log(Image1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full text-end text-black">
        <button onClick={clickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="22"
            viewBox="0 0 63 22"
            fill="none"
          >
            <path
              d="M61.7166 15.3177C62.4444 14.922 62.7135 14.0111 62.3177 13.2834L55.868 1.42373C55.4722 0.695959 54.5614 0.426837 53.8336 0.822624C53.1059 1.21841 52.8367 2.12923 53.2325 2.857L58.9656 13.3989L48.4237 19.132C47.696 19.5278 47.4268 20.4386 47.8226 21.1664C48.2184 21.8941 49.1292 22.1633 49.857 21.7675L61.7166 15.3177ZM1.4422 15.4333C11.0367 12.4734 36.4208 8.30162 60.575 15.4385L61.425 12.5615C36.5433 5.2096 10.5316 9.48966 0.557803 12.5667L1.4422 15.4333Z"
              fill="#451A1A"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/2 mx-auto mt-16 relative">
        <div className="w-[414px] h-[313px] rounded-xl shadow absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <img
            className="w-full h-full rounded-xl"
            src={images[Image]}
            alt="Puzzle Piece 3"
          />
        </div>
        <div className="w-96 h-[223px] absolute top-10 left-[10%] transform -translate-x-1/2">
          <img
            className={`w-full h-full rounded-xl ${
              Image == 0 ? "opacity-0" : "opacity-50"
            }  z-0 `}
            src={images[Image - 1]}
            alt="Puzzle Piece 1"
          />
        </div>
        <div className="w-96 h-56 absolute top-10 left-[90%] transform -translate-x-1/2">
          <img
            className={`w-full h-full rounded-xl ${
              Image == set ? "opacity-0" : "opacity-50"
            }  z-0 `}
            src={images[Image + 1]}
            alt="Puzzle Piece 2"
          />
        </div>
      </div>
      <div className="mt-96">
        <button onClick={clickBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="22"
            viewBox="0 0 63 22"
            fill="none"
          >
            <path
              d="M1.28337 6.68226C0.555599 7.07805 0.286476 7.98887 0.682266 8.71664L7.13199 20.5763C7.52778 21.304 8.4386 21.5732 9.16637 21.1774C9.89413 20.7816 10.1633 19.8708 9.76747 19.143L4.03437 8.6011L14.5763 2.86801C15.304 2.47222 15.5732 1.5614 15.1774 0.833636C14.7816 0.10587 13.8708 -0.163252 13.143 0.232535L1.28337 6.68226ZM61.5578 6.56666C51.9633 9.52664 26.5792 13.6984 2.42505 6.56148L1.57496 9.43852C26.4567 16.7904 52.4684 12.5103 62.4422 9.43334L61.5578 6.56666Z"
              fill="#451A1A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
