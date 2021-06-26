import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const FilterBrands = () => {

	const Brands = [
		{
			id:1,
			brand:'Adidas'
		},
		{
			id:2,
			brand:'adidas originals'
		},
		{
			id:3,
			brand:'Asics'
		},
		{
			id:4,
			brand:'Birkenstock'
		},
		{
			id:5,
			brand:'Converse'
		},
		{
			id:6,
			brand:'Fila'
		},
		{
			id:7,
			brand:'New Balance'
		},
		{
			id:8,
			brand:'Nike'
		},
		{
			id:9,
			brand:'Puma'
		},
		{
			id:10,
			brand:'Reebok'
		},
		{
			id:11,
			brand:' Vans'
		},

	]
	return (
		<div>
			<Header>
				Filter by Brands
			</Header>
			<Wrapper>
			{
			Brands.map((sze=>{
				return (
					<CheckBox 
						sizes={sze.brand}
						key={sze.id}
					/>
				)
			}))
			}
			</Wrapper>
		</div>
	)
}

const Header = styled.h1`
	color: black;
	font-size: 1rem;
	line-height: 25.5px;
	font-weight: 500;
`
const Wrapper = styled.div`
	height: 150px;
	overflow-y: scroll;
	margin-bottom: 1rem;
	&::-webkit-scrollbar {
  		width: 5px;               /* width of the entire scrollbar */
	}
	&::-webkit-scrollbar-track {
		background: #eee;
	}
	&::-webkit-scrollbar-thumb {
		background-color: black;    /* color of the scroll thumb */
 
	}
`

export default FilterBrands
