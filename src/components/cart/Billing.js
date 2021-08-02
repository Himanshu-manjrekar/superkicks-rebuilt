import React from 'react';
import styled from 'styled-components';

const Billing = () => {
	return (
		<>
			<Wrapper>
				<Subtotal>Subtotal <Price>₹19,999</Price></Subtotal>
				<Shipping>
					Shipping
					<Controls className="form-check">
  						<Input className="form-check-input" type="radio" id="flexRadioDefault1" defaultChecked/>
  						<Label className="form-check-label" htmlFor="flexRadioDefault1">
    						Free Shipping
  						</Label>
					</Controls>	
				</Shipping>
				<Total>
					Total
					<AmntWrapper>
					<TtlPrice>₹19,999</TtlPrice>
					<Gst>(includes GST)</Gst>
					</AmntWrapper>
				</Total>
				<Checkout>
				Place Order
			</Checkout> 
			</Wrapper>
			
		</>
	)
}

const Wrapper = styled.div`
	background: #f9f9f9;
	border: 1px solid #e2e2e2;
	width: 30%;
	height: 100%;
	@media(max-width: 600px){ 
		width: 100%;
	}
`
const Subtotal = styled.div`
	padding: 1rem 1.5rem 1rem 1.5rem;	
	border-bottom: 1px solid #e2e2e2;
	display: flex;
	justify-content: space-between;
`

const Shipping = styled.div`
	padding: 1rem 1.5rem 1rem 1.5rem;	
	border-bottom: 1px solid #e2e2e2;
`
const Total = styled.div`
	padding: 1rem 1.5rem 1rem 1.5rem;	
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	font-weight: 600;
`
const Price = styled.p`
	margin: 0;
`

const Controls = styled.div`
	margin:.8rem 0rem .8rem 0rem;
	
`
const Input = styled.input`
	height: 0.8rem;
	width: 0.8rem;
	margin-top: 0.3em;
`

const Label = styled.label`
	color: #111;
	font-size: 14px;
	font-weight: 600;

`
const TtlPrice = styled.div`

`

const AmntWrapper = styled.div`

`
const Gst = styled.div`
	font-size: 12px;
`

const Checkout = styled.button`
	text-decoration:none !important;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	background: #353535;
	color: White;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	border: 1px solid #353535;
	cursor: pointer;
	&:hover{
		background: black;
		transition: all 0.2s ease-in-out;
	}
`
export default Billing
