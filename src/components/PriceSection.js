import React, { useState } from 'react';
import styled from 'styled-components';
import { debounce } from '../utils/utils';

const PriceForm = styled.form`
	display: flex;
	flex-direction: column;
	
	& h1 {
		font-size: 14px;
		margin-bottom: 10px;
	}

  & .form-label {
    margin: 5px 0;
  }
    
  & .form-input {
    padding: 4px;
  }
`;

export default function PriceSection({ handleFilters }) {
  const [state, setState] = useState({ min: '', max: '' });

  function handleChange(e) {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: +value });
    handleFilters({ ...state, [e.target.name]: +value });
  }

  handleChange = debounce(handleChange, 500);

  return (
    <PriceForm>
      <h1>Цена</h1>
      <label className='form-label'>
        <span>От </span>
        <input
          className='form-input'
          type="number"
          name="min"
          onChange={handleChange}
        />
      </label>
      <label className='form-label'>
        <span>До </span>
        <input
          className='form-input'
          type="number"
          name="max"
          onChange={handleChange}
        />
      </label>
    </PriceForm>
  );
}