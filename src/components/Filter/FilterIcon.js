import React from 'react'
import styled from 'styled-components';
import { FiFilter } from "react-icons/fi";
import { RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import FilterGender from '../Filter/FilterGender';
import FilterShoeSize from '../Filter/FilterShoeSize';
import FilterApparelSize from '../Filter/FilterApparelSize';
import FilterBrands from '../Filter/FilterBrands';
import FilterColor from '../Filter/FilterColor';


const FilterIcon = () => {
	const [Filterstatus, setfilterstatus] = useState(false)
	return (
		<>
			<CustomMenu>
				<FilterSD onClick={()=> setfilterstatus(true) }><Filter/> Filters</FilterSD>
			</CustomMenu>
			

			<SideFilter show={Filterstatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setfilterstatus(false) }/>
				</CloseWrapper>
				<Header >search & filter</Header>
				<FilterMenu>
					<FilterGender/>
					<FilterShoeSize/>
					<FilterApparelSize />
					<FilterBrands />
					<FilterColor />
					<Reset>Reset Filters</Reset>
				</FilterMenu>
			</SideFilter>
		</>
	)
}
const CustomMenu =styled.div`
	font-size: 2rem;
	display: none;

	@media(max-width: 1024px) {
		display:flex;
		align-items:center;
		justify-content:center;
		padding: 1rem;
		margin-right: 1rem;
		order: 1;
		font-size: 1.563rem;
		color: white;
	}
	@media(max-width: 768px) {
		font-size: 1.3rem;
	}
`

const FilterSD = styled.div`
	display:none;
	color: #333;
	
	@media(max-width: 768px) {
	display: flex;
	justify-content: space-evenly;
	width: 100px;
	padding:0.5rem;
	border: 1px solid #000;
	border-radius: 50px;
	font-size: 1rem;
	}
	
	@media(max-width: 540px) {
	display: flex;
	width: 80px;
	padding:0.2rem;
	border: 1px solid #000;
	border-radius: 50px;
	font-size: 0.8rem;
	}
`

const Filter = styled(FiFilter)`
	display: none;
	margin-right:1rem; 
	color: #333;

	@media(max-width: 768px) {
		display: block;
		font-size: 1.5rem;
	}
	@media(max-width: 540px) {
		display: block;
		font-size: 1rem;
		margin-right:0.5rem;
	}
`
const SideFilter = styled.div`
	display: none;
@media(max-width: 768px){
	position: fixed;
	top: 8%;
	left: 0;
	bottom: 0;
	background-color: white;
	width: 250px;
	height: 100%;
	overflow-y: scroll;
	z-index: 0;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform : ${props => props.show ? 'translateY(0)' : 'translateX(-100%)' };
	transition: transform 0.4s ease-in-out;
	}
	

`
const CustomClose = styled(RiCloseLine) `
	cursor: pointer;
	
`
const CloseWrapper = styled.div `
	display: flex;
	justify-content: flex-end;
	
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
	@media(max-width: 768px) {
		margin-bottom: 2rem;
	}
`
const Reset = styled.h5`
	font-size: 12px;
	color: #444;
	@media(max-width: 768px) {
		margin-bottom: 1.5rem;
	}
` 
export default FilterIcon
