import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
      <>
          <h2 className='text-amber-50 text-2xl font-semibold text-center'>Weather Forecast</h2>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                      <div className="flex justify-center items-center rounded-3xl mt-3">
                    <div className="bg-blue-400 bg-opacity-40 h-12 rounded-3xl my-4 align-middle cursor-pointer flex text-sm  p-2 pb-5 w-1/2">
                      <img src={`icons/${item.weather[0].icon}.png`} className="w-7" alt="weather" />
                      <label className="flex-1 ml-4 font-semibold text-gray-200">{forecastDays[idx]}</label>
                      <label className="flex-1 mr-4 text-right text-gray-200">{item.weather[0].description}</label>
                      <label className="text-gray-300">{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
                    </div>
                          </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="grid grid-cols-1 gap-3 p-2 bg-indigo-500 bg-opacity-75 rounded-2xl">
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <label className="text-blue-200">Pressure:</label>
                                    <label className="text-white font-semibold"> {item.main.pressure}</label>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <label className="text-blue-200">Humidity:</label>
                                    <label className="text-white font-semibold"> {item.main.humidity}</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <label className="text-blue-200">Clouds:</label>
                                    <label className="text-white font-semibold"> {item.clouds.all}%</label>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <label className="text-blue-200">Wind speed:</label>
                                    <label className="text-white font-semibold"> {item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <label className="text-blue-200">Sea level:</label>
                                    <label className="text-white font-semibold"> {item.main.sea_level}m</label>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <label className="text-blue-200">Feels like:</label>
                                    <label className="text-white font-semibold"> {item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </div>
                    </div>



                </AccordionItemPanel>
              </AccordionItem>
          ))}
        </Accordion>
      </>
  );
};

export default Forecast;
