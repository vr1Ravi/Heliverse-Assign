import I1 from '../assets/I1.png';
import I2 from '../assets/I2.png';
import I3 from '../assets/I3.png';

const SectionThree = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl text-white font-semibold text-center  leading-relaxed  sm:w-full lg:w-1/2">
        An All-Round Plugin With Powerful Features
      </h1>
      <p className="text-[#b4aec4] font-medium my-8 text-center sm:w-full  lg:w-1/2">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </p>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-4 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-[#0f0821] to-[#241d34] border-[#332c42] rounded-3xl w-[100%] border-2 py-7 px-4">
          <img src={I1} alt="i-1" />
          <h1 className="text-3xl font-medium text-white">Light Weight</h1>
          <p className="text-[#b4aec4] font-medium my-8">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#0f0821] to-[#241d34] border-[#332c42] rounded-3xl w-[100%] border-2 py-7 px-4">
          <img src={I2} alt="i-2" />
          <h1 className="text-3xl font-medium text-white">100% Responsive</h1>
          <p className="text-[#b4aec4] font-medium my-8">
            Create a consistent visual experience across all devices.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#0f0821]  sm:col-span-2 lg:col-span-1 to-[#241d34] border-[#332c42] rounded-3xl w-[100%] border-2 py-7 px-4">
          <img src={I3} alt="i-3" />
          <h1 className="text-3xl font-medium text-white">
            User Friendly Interface
          </h1>
          <p className="text-[#b4aec4] font-medium my-8">
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </main>
    </section>
  );
};

export default SectionThree;
