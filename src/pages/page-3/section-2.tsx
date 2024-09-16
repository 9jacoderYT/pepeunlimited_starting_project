const SectionTwo = () => {
  return (
    <div className="flex-1">
      <h1 className="justify-center stroke-text text-3xl my-5 text-white">
        Pepe Unchained FAQs
      </h1>

      <div className="bg-[#215bb8b3] p-5 border-[4px] border-black rounded-xl h-[300px] overflow-y-scroll">
        <h1 className="text-2xl text-black font-bold">
          What is Pepe Unlimited ?
        </h1>
        <p className="text-lg text-white leading-6 py-5">
          Pepe Unchained or $PEPU is a better version of the Original Pepe. It
          is not only a token, but a Meme Coin ecosystem built for:
        </p>

        <ul className="list-disc list-inside text-white text-lg space-y-4">
          <li>Instant and low fee bridging between ETH and Pepe Chain</li>
          <li>Lowest transaction fees Instant transactions</li>
          <li>Higher Volume Capacity — 100x faster than ETH</li>
          <li>
            Dedicated Block explorer to see all transactions on Pepe Unchained
            Layer 2
          </li>
        </ul>
      </div>

      {/* Boxes */}
      <div className="bg-[#215bb8b3] p-2 px-5 border-[4px] border-black rounded-xl my-3 text-black text-xl font-bold">
        When Can I Claim My Tokens?
      </div>
      <div className="bg-[#215bb8b3] p-2 px-5 border-[4px] border-black rounded-xl my-3 text-black text-xl font-bold">
        What is layer 2? Why is it better?
      </div>
      <div className="bg-[#215bb8b3] p-2 px-5 border-[4px] border-black rounded-xl my-3 text-black text-xl font-bold">
        When will Pepe Unchained L2 Be Released?
      </div>
    </div>
  );
};

export default SectionTwo;
