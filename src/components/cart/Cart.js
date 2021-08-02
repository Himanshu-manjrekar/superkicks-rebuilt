import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Stepper from '../stepper/Stepper';
import CheckoutDetails from '../Checkout/CheckoutDetails';
import Billing from './Billing';

const Cart = () => {
	const changetitle = () => {
		document.title='Cart . Superkicks'
	}
	
	useEffect(() => {
		changetitle();
	}, [])
	return (
		<Container>
			<Stepper />
			<Wrapper>
				<RightSide>
					<CheckoutDetails/>
					<Offer>
				<InputWrapper>
					<Input type="email" id="Email" 
				 	className="form-control" 
				 	placeholder="Coupon Code" 
				 	autoComplete="off"/>
				 	<Couponbtn>Apply Coupon</Couponbtn>
				</InputWrapper>
				<InputWrapper>
				<Input type="email" id="Email" 
				 className="form-control" 
				 placeholder="Gift Card number" 
				 autoComplete="off"/>
				 <Couponbtn>Apply gift card</Couponbtn>
				</InputWrapper>
				 
			</Offer>
				</RightSide>
				
				<Billing/>
			</Wrapper>
			
		</Container>
	)
}

const Container = styled.div`
	margin-top: 4.5rem;
	@media(max-width:1024px){
		margin-top:3rem;
	} 
`
const Wrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	@media(max-width: 700px) {
		flex-direction: column;
	}
`
const RightSide = styled.div`
	

`

const Offer = styled.div`
	margin: 1rem;
	padding: 1rem;
	@media(max-width: 700px) {
		padding: 0rem;
		margin: .5rem;
	}
`
const Input = styled.input`
	height: 40px;
	width: 200px;
	margin-bottom: 1rem; 
	margin-right: 1rem;
	

`
const InputWrapper = styled.div`
	display: flex;
`

const Couponbtn = styled.button`
	height: 40px;
	padding: 0 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f8f8f8;
	color: #111;
	border:none;
	font-size: 13px;
	&:hover {
		background: #111;
		color: white;
		transition: 0.4s ease-in-out;
	}
	@media(max-width: 700px) {
		font-size: 10px;
	}
`
export default Cart
