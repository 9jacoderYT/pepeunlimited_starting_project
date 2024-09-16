const SectionTwo = () => {
  return (
    <div className="flex-1 max-w-[420px]">
      <p className="text-black capitalize font-extrabold text-4xl">
        PEPE NOW HAS HIS
      </p>
      {/* stroke-text is created in the index.css file and used here */}
      <p className="text-[#2eb335] text-5xl font-extrabold stroke-text">
        OWN BLOCKCHAIN!
      </p>
      <p className="text-black leading-5 my-4">
        Congrats! You're early to the party! Buy and Stake now during Presale to
        max out your rewards before the price skyrockets!
      </p>
      <p className="text-[#2eb335] text-2xl font-extrabold stroke-text">
        Pepe Unchained
      </p>

      <p className="font-bold text-black text-sm">
        Better speed. Better gains. Same delicious Pepe flavor.
      </p>

      <ul className="ul_listing space-y-3 my-5">
        <li>Instant bridging between ETH and Pepe Chain</li>
        <li>Lowest transaction fees</li>
        <li>Higher Volume Capacity — 100x faster than ETH</li>
        <li>Dedicated Block Explorer</li>
      </ul>

      <div className="learn_more">
        <img
          src="/assets/learn_more.png"
          className="w-72 hover:cursor-pointer"
          alt="learn more"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
