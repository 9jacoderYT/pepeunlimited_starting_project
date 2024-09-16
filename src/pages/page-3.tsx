import SectionOne from "./page-1/section-1";
import SectionTwo from "./page-3/section-2";

const PageThree = () => {
  return (
    <div className="relative">
      <div className="flex flex-row gap-10">
        {/* Section 1 */}
        <SectionOne />

        {/* Section 2 */}
        <SectionTwo />

        {/* Section 3 */}
        <div className="flex-1 my-auto">
          <img
            src="https://pepeunchained.com/assets/images/animation/fork.gif"
            className="mx-auto w-[500px]"
            alt="Page three Gif"
          />

          <span className="absolute top-12 right-1 rotate-45 text-center">
            <b className="text-white font-bolder text-3xl stroke-text">
              REWARDS P/A{" "}
            </b>
            <br />
            <b className="text-[#2eb335] font-bolder text-3xl stroke-text">
              156%
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
