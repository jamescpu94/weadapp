import React from "react";
interface CityListProps {
  cities: string[];
  onCitySelect: (selectedCity: string) => void;
}

const CityList: React.FC<CityListProps> = ({ cities, onCitySelect }) => {
  return (
    <div className="p-2">
      <h4 className="">Favorites</h4>
      <ul className="pt-3 flex flex-row  lg:flex-col overflow-x-auto text-white">
        {cities.map((city) => (
          <li>
            <button
              className="p-3 me-3 lg:mb-3 text-start p-backdrop-blur-sm bg-white/20 w-60 rounded-xl"
              key={city}
              onClick={() => onCitySelect(city)}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
