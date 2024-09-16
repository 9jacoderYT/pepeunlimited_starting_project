const SectionTwo = () => {
  return (
    <div className="flex-1">
      <h1 className="text-center justify-center text-green-500 stroke-text text-3xl my-5">
        About $PEPE unchained
      </h1>

      <div className="page_2_section_2 mb-5 text-black">
        <p>
          <b className="text-lg text-green-500 stroke-text m-2">
            Pepe unchained
          </b>{" "}
          The future of meme coins. A Layer 2 blockchain built for Speed,
          Security, Low Fees–and of course–Memes.
        </p>

        <p>
          <b className="text-lg text-green-500 stroke-text m-2">$PEPU</b> token
          powers the entire ecosystem. You’re early enough to witness a new
          golden age of Meme Coins. With Pepe in his rightful place as King, and
          the Pepe Unchained Layer 2 – his Kingdom.
        </p>
      </div>

      <div className="page_2_section_2 text-black mb-10">
        <p className="text-black underline leading-9 font-bold text-2xl">
          Earn Insane Rewards
        </p>

        <p className="text-sm">
          Staking your $PEPU tokens lets you fill your bag with
        </p>
        <b className="text-sm">passive, massive rewards!</b>
      </div>

      {/* Featured Partners */}

      <div className="text-black font-bold">FEATURED IN</div>

      <div className=" grid grid-cols-3 gap-2">
        <img
          src="https://pepeunchained.com/assets/images/featured/bitcoin.svg"
          alt="pepe meme"
        />
        <img
          src="https://pepeunchained.com/assets/images/featured/coinmarketcap.svg"
          alt="pepe meme"
        />
        <img
          src="https://pepeunchained.com/assets/images/featured/techopedia.svg"
          alt="pepe meme"
        />
        <img
          src="https://pepeunchained.com/assets/images/featured/binance.svg"
          alt="pepe meme"
        />
        <img
          src="https://pepeunchained.com/assets/images/featured/readwrite.svg"
          alt="pepe meme"
        />
        <img
          src="https://pepeunchained.com/assets/images/featured/cryptopotato.svg"
          alt="pepe meme"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
