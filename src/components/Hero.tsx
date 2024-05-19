const Hero = () => {
  return (
    <section className="flex py-28 px-16 ">
      <div className="flex-[0.2]  flex-col">
        <div className="flex w-[60%] mb-4">
          <span className="text-xl font-semibold break-words  inline-block text-white bg-clip-text text-transparent bg-gradient-to-r from-[#f87516] from-1% to-80% to-[#5e11ff] ">
            Transform Your Website
          </span>
        </div>
        <div>
          <p className="text-xl text-white">With Motion </p>
          <p className="text-xl text-white">Art Effect</p>
        </div>
      </div>
      <div className="flex-[0.8] pl-24  pt-4">
        <h1 className="text-6xl text-white mb-4 font-semibold">
          Attract Your Visitors{' '}
        </h1>
        <h1 className="text-6xl text-white mb-4 font-semibold">
          Attention With Colorfull
        </h1>
        <h1 className="text-6xl mb-4 inline-block text-white font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#f87516] to-[#5e11ff] via-[#9736aa] ">
          Motion Art Effect
        </h1>
        <p className="text-[#888497]">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution <br /> for seamlessly integrating captivating
          animations into your website.
        </p>
      </div>
    </section>
  );
};

export default Hero;
