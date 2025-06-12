import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastSection = ({ data }) => {
  const daysINaWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(daysINaWeek, weekDays.length)
    .concat(weekDays.slice(0, daysINaWeek));
  return (
    <section className="w-full bg-white mt-10">
      <div className="lg:w-1/2 relative mr-auto ml-auto">
        <label className="text-[23px] font-bold text-purple-midnight ml-2">
          Daily Forecast
        </label>
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item, i) => (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="bg-gray-400 border m-5 h-[40px] flex items-center cursor-pointer font-normal rounded-md ">
                    <img
                      src={`http://openweathermap.org/img/wn/${
                        item.weather[0].icon || "01d"
                      }@2x.png`}
                      alt="weather icon"
                      width={40}
                    />
                    <div className="relative w-full flex items-center justify-between">
                      <div className="w-1/3">
                        <label className="text-gray-900 font-semibold">
                          {forecastDays[i]}
                        </label>
                      </div>
                      <div className="relative flex w-2/3 justify-between ">
                        <label className="font-bold first-letter:capitalize text-gray-800 ">
                          {item.weather[0].description}
                        </label>
                        <label className="pr-4">
                          {Math.round(item.main.temp_min)}°C /{" "}
                          {Math.round(item.main.temp_max)}°C
                        </label>
                      </div>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="p-5 bg-purple-orchid w-[450px] flex flex-col relative mr-auto ml-auto">
                  <div className="relative flex w-full items-center justify-between border-b border-yellow-500">
                    <label className="label">Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="relative flex w-full items-center justify-between border-b border-yellow-500">
                    <label className="label">Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="relative flex w-full items-center justify-between border-b border-yellow-500">
                    <label className="label">Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="relative flex w-full items-center justify-between border-b border-yellow-500">
                    <label className="label">Wind</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>
                  <div className="relative flex w-full items-center justify-between border-b border-yellow-500">
                    <label className="label">Sea Level</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="relative flex w-full items-center justify-between border-b border-yellow-500">
                    <label className="label">Feels Like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ForecastSection;
