import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }))
                };
            })
            .catch(err => console.error(err));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "25px",
                    padding: "5px 10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        borderColor: "rgba(255, 255, 255, 0.7)",
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                    }
                }),
                placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "16px",
                    fontWeight: "500",
                }),
                menu: (baseStyles) => ({
                    ...baseStyles,
                    background: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "10px",
                    padding: "10px",
                }),
                option: (baseStyles, { isFocused }) => ({
                    ...baseStyles,
                    background: isFocused ? "rgba(255, 255, 255, 0.2)" : "transparent",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                }),
            }}
        />
    );
};

export default Search;
