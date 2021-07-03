import React from 'react'
import styled from 'styled-components';
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import { useState } from 'react';

const Operations = ({size}) => {

	const [qty, setQty] = useState(1);

	const Increment = () => {
		setQty(qty + 1);
		if (qty === 3)
		{
			setQty(qty);
		}
		else {}
	}
	
	const Decrement = () => {
		setQty(qty - 1);
		if (qty === 1)
		{
			setQty(qty);
		}
		else {}
	}
	
	const handleclick = () => {
		alert("Hello")
	}
	
	return (
		<>
			<Buttons>
				<QtyCntr>
					<Span>{qty}</Span>
					<ArrowWrapper>
						<UpArrow onClick={() => Increment()}/>
						<DownArrow onClick={() => Decrement()}/>
					</ArrowWrapper>
				</QtyCntr>	
				<ButtonWarpper>
					{
						size === -1 ? <Disable onClick={() => alert("Please select Size first")}>Add To Cart</Disable>: 
						<AddCart onClick={() => handleclick()}>Add To Cart</AddCart> 	
					}
				</ButtonWarpper>
			</Buttons>
		</>
	)
}
const Buttons = styled.div`
	display: flex;
	margin-top: 0.5rem;
`
const QtyCntr = styled.div`
	display: flex;
	height: 58px;
	width: 50px;
	margin: 0.8rem 1.5rem 0.8rem 0;
`
const Span = styled.span`
	width: 100%;
	display: flex;
	align-items:center;
	justify-content: center;
	border: 1px solid #e2e2e2;
	padding: 1rem;
`
const ArrowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #e2e2e2;
	border-left: none;
	padding:0 0.5rem 0 0.5rem;
`

const UpArrow = styled(VscChevronUp)`
	font-size: 1.3rem;
	color: #ccc;
	margin-top: 4px;
	cursor: pointer;
`

const DownArrow = styled(VscChevronDown)`
	font-size: 1.3rem;
	color: #ccc;
	margin-bottom: 4px;
	cursor: pointer;
`
const ButtonWarpper = styled.div`
	margin: 0.8rem;	
	width: 390px;
`
const AddCart = styled.button`
	width: 100%;
	height :100%;
	border: none;
	background: #353535;
	color: #fff;
	cursor: pointer !important;
	&::selection{
		background: none;
	}
`
const Disable = styled(AddCart)`
	cursor: not-allowed !important;
	opacity: 0.5;
	&::selection{
		background: none;
	}
`

export default Operations
