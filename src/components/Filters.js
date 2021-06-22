import React from 'react';
import SortingSection from './SortingSection';
import FilteringSection from './FilteringSection';
import PriceSection from './PriceSection';
import styled from 'styled-components';;

const FiltersWrapper = styled.aside`
	padding: 10px 20px;
`;

export default function FiltersSection({ setSortingValue, handleFilters }) {
  return (
    <FiltersWrapper>
      <SortingSection
        setSortingValue={setSortingValue}
      />
      <FilteringSection
        handleFilters={filters => handleFilters(filters, 'filterByTransfer')}
      />
      <PriceSection
        handleFilters={filters => handleFilters(filters, 'filterByPrice')}
      />
      {/* <Companies /> */}
    </FiltersWrapper>
  );
}