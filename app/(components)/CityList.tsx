import React from "react";
interface CityListProps {
  cities: string[];
  onCitySelect: (selectedCity: string) => void;
}

const CityList: React.FC<CityListProps> = ({ cities, onCitySelect }) => {
  return (
    <div>
      <h4 className="">Favorites</h4>
      <ul className="pt-3 flex flex-row  lg:flex-col overflow-x-auto text-white">
        {cities.length ? (
          cities.map((city, index) => (
            <li key={index}>
              <button
                className="p-3 me-3 lg:mb-3 text-start backdrop-blur-xl bg-white/10 w-60 rounded-xl"
                onClick={() => onCitySelect(city)}
              >
                {city}
              </button>
            </li>
          ))
        ) : (
          <label className="p-3 me-3 lg:mb-3 text-start backdrop-blur-xl bg-white/10 w-60 rounded-xl">
            0 Favorites
          </label>
        )}
      </ul>
    </div>
  );
};

export default CityList;
