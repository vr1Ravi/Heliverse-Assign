import Brand from './Brand';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import star from '../assets/star.png';
import stick from '../assets/stick.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
const Brands = () => {
  return (
    <section className="px-4 md:px-16 py-10">
      <p className="text-center text-white text-2xl  mb-10">
        Trusted by thousands of users around the world
      </p>
      <div className="flex justify-between gap-8 flex-wrap">
        <Brand logo={b1} text={'4.5 Score, 9 Reviews'} star={star} />
        <Brand logo={b2} text={'4.5 Score, 9 Reviews'} star={star} />
        <Brand logo={b3} text={'4.5 Score, 9 Reviews'} star={star} />
      </div>
      <main className="flex pt-32 justify-between items-center flex-col md:flex-row">
        <div className="flex-[0.7] ">
          <div className="mb-7">
            <h1 className="text-4xl font-semibold text-white mb-2">
              Turn Your Cursor Into A Colorful Magic
            </h1>
            <h1 className="text-4xl font-semibold text-white">
              Wand & Charm Your Visitors
            </h1>
          </div>

          <div className="mb-7">
            <p className="text-[#b4aec4] leading-4 mb-2 font-medium text-[17px]">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse
            </p>
            <p className="text-[#b4aec4] leading-4 font-medium text-[17px]">
              your website with visually stunning motion art elements.
            </p>
          </div>
          <button className="px-8 text-white bg-gradient-to-r mt-8 mx-auto md:mx-0  from-[#5e11ff]  via-[#b5497c]   to-[#ee6e26]  flex justify-center items-center gap-3 py-4 rounded-3xl">
            Purchase From Envato{' '}
            <IoIosArrowRoundForward
              style={{ fontSize: '30px' }}
              className="text-xl"
            />
          </button>
        </div>
        <div className="flex-0.3 mt-8 md:mt-0">
          <img src={stick} alt="stick-img" />
        </div>
      </main>
    </section>
  );
};

export default Brands;
