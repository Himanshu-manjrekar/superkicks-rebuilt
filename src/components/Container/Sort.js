import React from 'react'
import styled from 'styled-components'


const Sort = () => {
	return (
		<div>
			<Select className="form-select">
  				<option defaultValue>Sort by latest</option> 
  				<option value="1">Sort by Popularity</option>
  				<option value="2">Sort by price: low to high</option>
  				<option value="3">Sort by price: high to low</option>
				
			</Select>
		</div>
	)
}
const Select = styled.select`
	border: none;
	text-align: center;

	&.form-select {
		width: 20% !important;
		padding: .375rem 2.25rem .375rem 0rem;
		font-size: 12px;
		margin-left: 1rem;
		@media(max-width: 575px) {
			width: 100% !important;
		}
	}
	&:focus {
		outline: none !important;
	}
	option {
		font-size: 12px;
		
	}
`


export default Sort
