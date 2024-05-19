import page from '../assets/page.png';
import section from '../assets/section.png';
const SectionOne = () => {
  return (
    <section className="py-16 mb-8 ">
      <h1 className="text-4xl font-semibold text-white text-center mb-24 ">
        Apply On Any Section Or Enable For <br /> Whole Page
      </h1>

      <div className=" flex gap-3 px-16">
        <div className="bg-gradient-to-b from-[#0f0821] to-[#241d34] px-8 rounded-2xl border border-[#332c42] py-8">
          <h1 className="text-white text-2xl font-semibold ">
            Apply On Section
          </h1>
          <p className="text-[#b4aec4] font-medium text-[17px] my-6">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img src={page} alt="page" />
        </div>
        <div className="bg-gradient-to-b from-[#0f0821] to-[#241d34] px-8 rounded-2xl border border-[#332c42] py-8 translate-y-16">
          <h1 className="text-white text-2xl font-semibold ">Apply On Page</h1>
          <p className="text-[#b4aec4] font-medium text-[17px] my-6">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={section} alt="section" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
