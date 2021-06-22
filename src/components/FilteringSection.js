import React, { useState } from 'react';
import styled from 'styled-components';

const FilteringForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	
	& h1 {
		font-size: 14px;
		margin-bottom: 10px;
	}
`;

export default function FilteringSection({ handleFilters }) {
  const [filter, setFilter] = useState([]);

  function handleToggle(e) {
    const value = e.target.value;
    const currentIndex = filter.indexOf(value);
    const filterClone = [...filter];

    currentIndex === -1
      ? filterClone.push(value)
      : filterClone.splice(currentIndex, 1);

    setFilter(filterClone);
    handleFilters(filterClone);
  }

  return (
    <FilteringForm>
      <h1>Фильтровать</h1>
      <label>
        <input
          onChange={handleToggle}
          checked={filter['oneTransfer']}
          type="checkbox"
          name="filtering"
          value="oneTransfer"
        />
        <span> - 1 пересадка</span>
      </label>
      <label>
        <input
          onChange={handleToggle}
          checked={filter['noTransfer']}
          type="checkbox"
          name="filtering"
          value="noTransfer"
        />
        <span> - без пересадок</span>
      </label>
    </FilteringForm>
  );
}