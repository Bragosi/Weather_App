import sunny from "../images/01d.png";
const CurrentWeatherSection = () => {
  return (
    <section className="relative justify-center items-center flex">
      <div className="p-3 w-[300px] shadow-xl bg-purple-bgBlack text-white">
        <div className="relative flex flex-row items-center justify-between px-[20px]">
          <div className="relative flex flex-col">
            <p className=" font-bold leading-3 text-[18px] m-0">Lagos</p>
            <p className="font-light text-[14px]">Sunny</p>
          </div>
          <img src={sunny} alt="weather icons" width={80} />
        </div>

        <div>
            
        </div>
      </div>
    </section>
  );
};

export default CurrentWeatherSection;
