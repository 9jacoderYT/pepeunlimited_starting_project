import React, { useState } from "react";
import PageOne from "../pages/page-1";
import PageTwo from "../pages/page-2";
import PageThree from "../pages/page-3";

// 9jacoder: We add the pages to the page array, u can adjust it here
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
            {/* Pages */}
            Page
          </div>
        </div>
      </div>

      {/* Camera element, positioned at the top left */}

      {/* Controls */}

      {/* Previous Control */}

      {/* Next Control */}
    </div>
  );
};

export default CustomPageSlider;
