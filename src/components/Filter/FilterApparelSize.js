import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const FilterShoeSize = () => {

	const AppSize= [
		{
			id:1,
            size:'34'
		},
		{
			id:2,
            size:'38'
		},
		{
			id:3,
            size:'L'
		},
		{
			id:4,
            size:'M'
		},
		{
			id:5,
            size:'One Size'
		},
		{
			id:6,
            size:'S'
		},
		{
			id:7,
            size:'XL'
		},
		{
			id:8,
            size:'XS'
		},
	]
	return (
		<div>
			<Header>
				Filter by Apparel Size
			</Header>
			<Wrapper>
			{
			AppSize.map((sze=>{
				return (
					<CheckBox 
						sizes={sze.size}
						key={sze.size}
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
	
	margin-bottom: 1rem;
`

export default FilterShoeSize
