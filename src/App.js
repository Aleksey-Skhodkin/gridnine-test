import React, { useEffect, useState } from 'react';
import flightsData from './flights-source/flights.json';
import FiltersSection from './components/Filters';
import Content from './components/Content';
import styled from 'styled-components';
import { filterByTransfer, filterByPriceRange, sortFlights } from './utils/utils';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  const [flights, setFlights] = useState();
  const [filteredFlights, setFilteredFlights] = useState();
  const [sortValue, setSortValue] = useState();
  const [filtersState, setFiltersState] = useState({
    filterByTransfer: null,
    filterByPrice: null
  });

  useEffect(() => {
    const data = flightsData.result.flights.map(i => i.flight);
    setFlights(data);
  }, [])

  useEffect(() => {
    const filteredByTransfer = filterByTransfer(flights, filtersState.filterByTransfer);
    const filteredByPrice = filterByPriceRange(filteredByTransfer, filtersState.filterByPrice);
    const sortedData = sortFlights(filteredByPrice, sortValue);
    setFilteredFlights(sortedData);
  }, [sortValue, filtersState])

  function handleFilters(filters, category) {
    const newFilters = { ...filtersState };
    newFilters[category] = filters;

    setFiltersState(newFilters);
  }

  return (
    <AppWrapper>
      <FiltersSection
        setSortingValue={setSortValue}
        handleFilters={handleFilters}
      />
      <Content flights={filteredFlights} />
    </AppWrapper>
  );
}

