const Footer = () => {
  return (
    <footer className="flex flex-col-reverse  justify-center items-center gap-4 lg:flex-row lg:justify-between lg:gap-0  bg-gradient-to-r from-[#f87516] from-1% to-80% to-[#5e11ff] px-8 text-[#d4b1e9] text-[14px] pt-5 pb-3 mt-4 lg:mt-28 font-semibold ">
      <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      <div>
        <button className="mr-8">Documentaion</button>
        <button>Support</button>
      </div>
    </footer>
  );
};

export default Footer;
