const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row  items-center md:items-start py-28 px-4 md:px-16 ">
      <div className="flex-[0.2]  flex-col">
        <div className="flex  w-[100%] md:w-[60%] mb-4">
          <span className="text-xl font-semibold break-words  inline-block  bg-clip-text text-transparent bg-gradient-to-r from-[#f87516] from-1% to-80% to-[#5e11ff] ">
            Transform Your Website
          </span>
        </div>
        <div>
          <p className="text-xl text-white">With Motion </p>
          <p className="text-xl text-white">Art Effect</p>
        </div>
      </div>
      <div className="flex-[0.8]  md:pl-24  pt-4 text-[35px] lg:text-6xl">
        <h1 className=" text-white mb-4 font-semibold text-start w-[90%] leading-[1.3]">
          Attract Your Visitors Attention With Colorfull
          <span className=" mb-4 inline-block  text-start font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#f87516] to-[#5e11ff] via-[#9736aa] ">
            Motion Art Effect
          </span>
        </h1>

        <p className="text-[#888497] text-[18px] font-semibold">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution <br /> for seamlessly integrating captivating
          animations into your website.
        </p>
      </div>
    </section>
  );
};

export default Hero;
