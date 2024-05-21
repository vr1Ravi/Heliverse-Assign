import { Ibrand } from '../types';

const Brand = ({ logo, star, text }: Ibrand) => {
  return (
    <div className="flex items-center gap-3 mx-auto">
      <img src={logo} alt="brand-logo" />
      <div>
        <img src={star} alt="start" />
        <p className="text-[#b4aec4] font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Brand;
