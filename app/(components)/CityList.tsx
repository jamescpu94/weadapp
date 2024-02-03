import React from "react";
interface CityListProps {
  cities: string[];
  onCitySelect: (selectedCity: string) => void;
}

const CityList: React.FC<CityListProps> = ({ cities, onCitySelect }) => {
  return (
    <div>
      {cities.map((city) => (
        <button key={city} onClick={() => onCitySelect(city)}>
          <h4 className="p-3 text-start backdrop-blur-sm bg-white/20 text-white m-1 w-60 rounded-xl">
            {city}
          </h4>
        </button>
      ))}
    </div>
  );
};

export default CityList;
