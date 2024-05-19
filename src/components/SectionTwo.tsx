import comp from '../assets/comp.png';
const SectionTwo = () => {
  return (
    <section className=" rounded-2xl border border-[#332c42]  bg-gradient-to-b from-[#0f0821] to-[#241d34] w-[90%] mx-auto mt-32 mb-24 flex justify-center items-center flex-col py-10">
      <h1 className="text-3xl text-white font-semibold">
        Supported by All Popular Browsers
      </h1>
      <p className="text-[#b4aec4] font-medium my-8 text-center">
        Rest assured, Motion Art is designed to be compatible <br /> with all
        major web browsers.
      </p>
      <img src={comp} alt="comp-img" />
    </section>
  );
};

export default SectionTwo;
