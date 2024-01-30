import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../Api';

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValues) => {
    return fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValues}`,
        geoApiOptions
    )
        .then((response) => response.json())
        .then((response) => {
          // Slice the array to only include the first 3 items
          const limitedResults = response.data.slice(0, 3);

          return {
            options: limitedResults.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            })
          };
        });
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
      <div className="flex justify-center py-10 rounded-3xl mb-12">
        <div className="w-1/2">
          <AsyncPaginate
              placeholder="Search..."
              debounceTimeout={600}
              value={search}
              onChange={handleChange}
              loadOptions={loadOptions}
          />
        </div>
      </div>
  );
};

export default Search;
