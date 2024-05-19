const Header = () => {
  return (
    <header className="bg-[#262626] py-3 px-4 flex justify-between">
      <div className="flex items-center">
        <a href="/" className="bg-logo w-[150px] h-[18px] "></a>
      </div>
      <button className="bg-[#82b440] px-4 py-1 text-white shadow-sm shadow-[#6f9a37] rounded-[5px]">
        Buy now
      </button>
    </header>
  );
};

export default Header;
