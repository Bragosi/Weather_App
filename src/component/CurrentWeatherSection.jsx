const CurrentWeatherSection = ({ data }) => {
  return (
    <section className="relative justify-center items-center flex">
      <div className="p-3 w-full max-w-[400px] shadow-xl bg-purple-bgBlack text-white">
        <div className="relative flex flex-row items-center justify-between px-[20px]">
          <div className="relative flex flex-col">
            <p className="font-bold leading-3 text-[18px] w-full m-0">{data.city}</p>
            <p className="font-light text-[14px] mt-auto">{data.weather[0].description}</p>
          </div>
        <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon || '01d'}@2x.png`}
            alt="weather icon"
            width={80}
            height={80}
          />
        </div>

        <div className="bottom relative flex flex-row gap-10">
          <div className="font-sans relative justify-center items-center mt-7">
            <p className="text-[2.5rem] font-bold">{Math.round(data.main.temp)}°C</p>
          </div>

          <div className="w-full">
            <h1 className="font-semibold border-b border-yellow-600 w-[4.2rem] text-lg">
              Details
            </h1>
            <div className="flex flex-row justify-between relative">
              <h1 className="parameter-label">Feels like</h1>
              <h1 className="parameter-value">{Math.round(data.main.feels_like)}°C</h1>
            </div>
            <div className="flex flex-row justify-between relative">
              <h1 className="parameter-label">Wind</h1>
              <h1 className="parameter-value">{Math.round(data.wind.speed)} m/s</h1>
            </div>
            <div className="flex flex-row justify-between relative">
              <h1 className="parameter-label">Humidity</h1>
              <h1 className="parameter-value">{Math.round(data.main.humidity)}%</h1>
            </div>
            <div className="flex flex-row justify-between relative">
              <h1 className="parameter-label">Pressure</h1>
              <h1 className="parameter-value">{Math.round(data.main.pressure)} hPa</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeatherSection;