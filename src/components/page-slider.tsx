import React, { useState } from "react";
import PageOne from "../pages/page-1";
import PageTwo from "../pages/page-2";
import PageThree from "../pages/page-3";

// 9jacoder We add the pages to the page array, u can adjust it here
const pages = [<PageOne />, <PageTwo />, <PageThree />];

const CustomPageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextPage = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPage = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto relative">
     
     {/* Slider to display pages */}
      <div className="relative w-full max-w-[1350px] mx-auto my-20">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pages.map((page, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                {page}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Camera element, positioned at the top left */}
      <img
        src="https://pepeunchained.com/assets/images/svg-icons/cctv.svg"
        className="absolute top-4 left-[-4%] z-1"
        alt="Camera"
      />

      {/* Controls */}

      {/* Previous Control */}
      <img
        src="https://pepeunchained.com/assets/images/svg-icons/chevron-left.svg"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
        onClick={prevPage}
        alt="Right icon"
      />

      {/* Next Control */}
      <img
        src="https://pepeunchained.com/assets/images/svg-icons/chevron-right.svg"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
        onClick={nextPage}
        alt="left icon"
      />
    </div>
  );
};

export default CustomPageSlider;
