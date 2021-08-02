import React from 'react';
import styled from 'styled-components';
import { CgTrashEmpty } from 'react-icons/cg'
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import { useSelector } from 'react-redux';

const CheckoutDetails = () => {
	const [qty, setQty] = React.useState(1);
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

	const products = useSelector((state) => state.addToCart.products);
	
	return (
		<>
		
			{products && products.map((val)=>{
				const {id,title,price,Images} = val;
				return (
				<Wrapper key={id}>
					<DustBin/>
						<Img src={Images[0].img}></Img>
					<Title>{title}</Title>
					<QtyCntr>
						<Span>{qty}</Span>
						<ArrowWrapper>
							<UpArrow onClick={() => Increment()}/>
							<DownArrow onClick={() => Decrement()}/>
						</ArrowWrapper>
					</QtyCntr>	
					<Price>₹ {price}</Price>
				</Wrapper>
				)
			})}
			
		
		</>
	)
}
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 0.2rem 1.3rem 0.2rem;
	border-bottom: 1px solid #e3e9ef;
	@media(max-width: 700px){
		flex-direction: column;
		align-items: flex-start;
	}
	
`
const DustBin = styled(CgTrashEmpty)`
	font-size: 1rem;
	color: #777;
	cursor: pointer;
	margin: .5rem;
	@media(max-width: 700px) {
		font-size: 1rem;
	}

`
const Img = styled.img`
	height: 80px;
	width: 80px; 
	margin: .9rem;
	@media(max-width: 700px) {
		margin: 0.9rem 0rem 0.9rem 0rem;
	}
` 
const Title = styled.h5`
	font-size: 15px;
	color: #111;
	margin-right: 3rem;
`
const QtyCntr = styled.div`
	display: flex;
	height: 38px;
	width: 20px;
	margin: 0.8rem 1.5rem 0.8rem 0;
	margin-right: 12rem;
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
const Price = styled.p`

`
export default CheckoutDetails
