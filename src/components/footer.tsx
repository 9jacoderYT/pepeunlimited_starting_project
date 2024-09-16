import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <span className="text-white border-black border-[5px] bg-blue-600 mx-auto rounded-xl p-3 flex justify-center space-y-2 flex-col">
        <img
          src="data:image/jpeg;base64,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"
          alt="9jacoder"
          className="rounded-full mx-auto w-12"
        />
        Designed and created by 9jacoder
        <a
          href="https://www.youtube.com/@9jaCoder"
          className="rounded-lg bg-red-500 p-3 px-5 text-center"
        >
          Subscribe
        </a>
      </span>
    </div>
  );
};

export default Footer;