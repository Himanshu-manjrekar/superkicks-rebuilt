import React from 'react';
import styled from 'styled-components';


const FilterGender = () => {

	return (
		<>
			<Header>Filter by Gender</Header>
			<Wrapper>
			<Controls className="form-check">
  				<Input className="form-check-input" type="radio" id="flexRadioDefault1" defaultChecked/>
  				<Label className="form-check-label" htmlFor="flexRadioDefault1">
    				All Genders
  				</Label>
			</Controls>
			<Controls className="form-check">
  				<Input className="form-check-input" type="radio"  id="flexRadioDefault2" />
  				<Label className="form-check-label" htmlFor="flexRadioDefault2">
    				Men
  				</Label>
			</Controls>
			<Controls className="form-check">
  				<Input className="form-check-input" type="radio" id="flexRadioDefault3" />
  				<Label className="form-check-label" htmlFor="flexRadioDefault3">
    				Women
  				</Label>
			</Controls>
			</Wrapper>
		</>
	)
}
const Header = styled.h1`
	color: black;
	font-size: 15px;
	line-height: 25.5px;
	font-weight: 500;
	padding-bottom: .125rem;
`
const Wrapper = styled.div`
	/* background-color: whitesmoke; */
	height: 150px;
	/* overflow-y: scroll; */
	margin-bottom: 0.5rem;
`
const Controls = styled.div`
	margin-bottom: .8rem;
	
`
const Input = styled.input`
	height: 0.8rem;
	width: 0.8rem;
	margin-top: 0.3em;
`

const Label = styled.label`
	color: #777;
	font-size: 13px;

`
export default FilterGender
