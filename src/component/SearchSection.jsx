import logo from "../images/bragosiLogo2 (2).png";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, GeoUrl } from "../constants/API";

const SearchSection = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    // If nothing is typed, return an empty list
    if (!inputValue) {
      return { options: [] };
    }

    try {
      // Add the search term to the URL
      const response = await fetch(
        `${GeoUrl}?namePrefix=${inputValue}&limit=10`,
        GeoApiOptions
      );
      const result = await response.json(); // Use .json() for GeoDB Cities
      const cities = result.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`, // Show city and country
      }));
      return { options: cities };
    } catch (error) {
      console.error("Oops, couldn't find cities!", error);
      return { options: [] };
    }
  };

  const handleOnChange = (searchData) => {
    setSearchValue(searchData);
    onSearchChange(searchData);
  };

  return (
    <section className="flex flex-row w-full justify-center items-center gap-3 pt-4">
      <div>
        <img src={logo} alt="logo" width={50} height={30} />
      </div>
      <div className="w-4/5 flex flex-row gap-4">
        <AsyncPaginate
          debounceTimeout={600}
          value={searchValue}
          placeholder="Search for a city"
          className="w-full font-sans"
          classNamePrefix="react-select"
          onChange={handleOnChange}
          loadOptions={loadOptions}
          loadingMessage={() => "Finding cities..."}
          styles={{
            control: (provided, state) => ({
              ...provided,
              borderRadius: "0.5rem",
              border: "1px solid #7C3AED",
              boxShadow: state.isFocused
                ? "0 0 0 3px rgba(59, 130, 246, 0.3)"
                : "0 2px 4px rgba(0,0,0,0.1)",
              padding: "2px",
              backgroundColor: "#ffffff",
              transition: "all 0.2s ease",
            }),
            menu: (provided) => ({
              ...provided,
              borderRadius: "0.5rem",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? "#7C3AED" : "#ffffff",
              color: "#1f2937",
              padding: "0.75rem",
              cursor: "pointer",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#D8B4FE",
              fontStyle: "italic",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#1f2937",
              fontWeight: "500",
            }),
            loadingMessage: (provided) => ({
              ...provided,
              color: "#7C3AED",
              fontWeight: "500",
            }),
          }}
        />
      </div>
    </section>
  );
};

export default SearchSection;
