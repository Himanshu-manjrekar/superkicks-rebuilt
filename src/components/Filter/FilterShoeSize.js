import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const FilterShoeSize = () => {

	const Size = [
		{
			size:'13.5',
		}, 
		{
			size:'13'
		},
		{
			size:'12.5'
		},
		{
			size:'12'
		},
		{
			size:'11.5'
		},
		{
			size:'11'
		},
		{
			size:'10.5'
		},
		{
			size:'10'
		},
		{size:'9.5'},{size:'9'},{size:'8.5'},{size:'8'},{size:'7.5'},{size:'7'},
		{size:'6.5'},{size:'6'},{size:'5.5'},{size:'5'},{size:'4.5'},{size:'4'},{size:'3.5'},{size:'3'},
	]

	return (
		<div>
			<Header>
				Filter by Shoe Size
			</Header>
			<Wrapper>
			{
			Size.map((sze=>{
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

export default FilterShoeSize
