import newsdata from "../data/news-data.json";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  return (
    <div className="bg-[#bad3c1]">
      {/* Navbar Section */}
      <div className="max-w-[1500px] mx-auto flex flex-row py-2">
        <span>
          <img src="/assets/logo.png" className="h-14" alt="HomePage Logo" />
        </span>

        <span className="flex-1 my-auto">
          <ul className="navbar_ul mx-auto max-w-4xl flex flex-row px-10 justify-between">
            {/* li styling is taken from the index.css file */}
            <li>Staking</li>
            <li>About</li>
            <li>How to buy</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
            <li>FAQs</li>
            <li>White Paper</li>
          </ul>
        </span>

        <span className="flex flex-row gap-2 my-auto">
          <a href="/">
            <img
              src="https://pepeunchained.com/assets/images/svg-icons/social-icons/twitter.svg"
              alt="Twitter"
              className="h-9"
            />
          </a>

          <a href="/">
            <img
              src="https://pepeunchained.com/assets/images/svg-icons/social-icons/telegram.svg"
              alt="Telegram"
              className="h-9"
            />
          </a>

          <button className="bg-[#215bb8] rounded-full py-2 px-6 font-medium text-white border hover:border-black hover:opacity-90 leading-5">
            BUY $PEPE
          </button>
        </span>
      </div>

      {/* Marquee Section */}
      <div className="bg-[#ed323d] border-y-4 border-black flex flex-row">
        <span className="p-1 mx-5 font-bold text-white text-2xl">
          BREAKING:
        </span>
        {/* Simple Marquee that maps the newsdata json file */}
        <Marquee pauseOnHover delay={3}>
          {newsdata.map((newsItem, index) => (
            <span key={index} className="text-white text-lg">
              {newsItem}
              <span className="mx-2">|</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Navbar;
