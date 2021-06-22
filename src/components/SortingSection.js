import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SortingForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	
	& h1 {
		font-size: 14px;
		margin-bottom: 10px;
	}
`;

export default function SortingSection({ setSortingValue }) {
  const [sortValue, setSortValue] = useState('priceUpToDown');

  useEffect(() => {
    setSortingValue(sortValue);
  }, [sortValue])

  function onInputChange(e) {
    setSortValue(e.target.value);
  }

  return (
    <SortingForm>
      <h1>Сортировать</h1>
      <label>
        <input
          onChange={onInputChange}
          checked={sortValue === 'priceUpToDown'}
          type="radio"
          name="price-sort"
          value="priceUpToDown" />
        <span> - по возрастанию цены</span>
      </label>
      <label>
        <input
          onChange={onInputChange}
          checked={sortValue === 'priceDownToUp'}
          type="radio"
          name="price-sort"
          value="priceDownToUp" />
        <span> - по убыванию цены</span>
      </label>
      <label>
        <input
          onChange={onInputChange}
          checked={sortValue === 'priceTravelTime'}
          type="radio"
          name="price-sort"
          value="priceTravelTime" />
        <span> - по времени в пути</span>
      </label>
    </SortingForm>
  );
}