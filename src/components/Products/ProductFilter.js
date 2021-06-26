import React from 'react'
import styled from 'styled-components';
import FilterGender from '../Filter/FilterGender';
import FilterShoeSize from '../Filter/FilterShoeSize';
import FilterApparelSize from '../Filter/FilterApparelSize';
import FilterBrands from '../Filter/FilterBrands';
import FilterColor from '../Filter/FilterColor';

const ProductFilter = () => {

	return (
		<FilterWrapper>
			<Header >search & filter</Header>
			<FilterMenu>
				<FilterGender/>
				<FilterShoeSize/>
				<FilterApparelSize />
				<FilterBrands />
				<FilterColor />
				<Reset>Reset Filters</Reset>
			</FilterMenu>
		</FilterWrapper>
	)
}
const FilterWrapper = styled.div`
	width: 20%;
	@media(max-width:768px){
		display: none;
	}
`
const Header = styled.div`
	font-size: 13px;
	text-transform: uppercase;
	color: #777;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`
const FilterMenu = styled.div`
	padding-top: 1rem;
`
const Reset = styled.h5`
	font-size: 12px;
	color: #444;
` 
export default ProductFilter
