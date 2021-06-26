import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const FilterColor = () => {

	const Color = [
		{
			id:1,
			color:"Black"
		},
		{
			id:2,
			color:"Blue"
		},
		{
			id:3,
			color:"Brown"
		},
		{
			id:4,
			color:"Cream"
		},
		{
			id:5,
			color:"Gold"
		},
		{
			id:6,
			color:"Green"
		},
		{
			id:7,
			color:"Grey"
		},
		{
			id:8,
			color:"Maroon"
		},
		{
			id:9,
			color:"Multi"
		},
		{
			id:10,
			color:"Orange"
		},

	]
	return (
		<div>
			<Header>
				Filter by Colour
			</Header>
			<Wrapper>
			{
			Color.map((sze=>{
				return (
					<CheckBox 
						sizes={sze.color}
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

export default FilterColor
