import Countdown from "../elements/countdown";

const SectionOne = () => {
  return (
    <div className="box">
      <div className="blinking_green"></div>

      <div className="text-center text-xl text-white mb-10">
        Buy $PEPU Presale
      </div>

      <Countdown />
      <div className="my-5 text-white text-center">
        <p>Your purchased $PEPU = 0</p>
        <p>Your stakeable $PEPU = 0</p>
      </div>

      <div className="w-full flex flex-row justify-between my-5">
        <button className="flex flex-row gap-2 px-3 py-1 border-2 border-black rounded-full bg-white">
          <img
            src="https://pepeunchained.com/assets/images/svg-icons/ETH.svg"
            className="w-8"
            alt="eth"
          />
          <span className="my-auto text-2xl">ETH</span>
        </button>
        <button className="flex flex-row gap-2 px-3 py-1 border-2 border-black rounded-full bg-white opacity-65 hover:opacity-100">
          <img
            src="https://pepeunchained.com/assets/images/svg-icons/usdt.svg"
            className="w-8"
            alt="usdt"
          />
          <span className="my-auto text-2xl">USDT</span>
        </button>
        <button className="flex flex-row gap-2 px-3 py-1 border-2 border-black rounded-full bg-white opacity-65 hover:opacity-100">
          <img
            src="https://pepeunchained.com/assets/images/svg-icons/card.svg"
            className="w-8"
            alt="card"
          />
          <span className="my-auto text-2xl">CARD</span>
        </button>
      </div>

      <div className="flex flex-row gap-3">
        <div className="flex-1 space-y-3">
          <div className="page_one_input_div">
            <input
              type="text"
              className="bg-transparent w-[70%] outline-none placeholder:text-white"
              placeholder="0"
            />
            <img
              src="https://pepeunchained.com/assets/images/svg-icons/ETH.svg"
              className="w-6"
              alt="eth"
            />
          </div>

          <button className="page_one_button">Connect Wallet</button>
        </div>
        <div className="flex-1  space-y-3">
          <div className="page_one_input_div">
            <input
              type="text"
              className="bg-transparent w-[70%] outline-none placeholder:text-white"
              placeholder="0"
            />
            <img
              src="https://pepeunchained.com/assets/images/svg-icons/token.svg"
              className="w-6"
              alt="eth"
            />
          </div>
          <button className="page_one_button">
            <img
              src="https://pepeunchained.com/assets/images/svg-icons/BNB.svg"
              alt="bnb"
              className="w-6"
            />
            <span className="my-auto">Buy with BnB</span>
          </button>
        </div>
      </div>

      <div className="text-center p-4">
        <p className="underline text-white ">Don't have A Wallet</p>

        <p className="text-white">
          Powered by <b>Web3Payments</b>
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
