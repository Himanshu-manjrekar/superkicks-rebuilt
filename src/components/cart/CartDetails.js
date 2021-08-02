import React from 'react'
import styled from 'styled-components'
import { CgTrashEmpty } from 'react-icons/cg'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const CartDetails = () => {
	const products = useSelector((state) => state.addToCart.products);
	const totalPrice = useSelector((state) => state.addToCart.totalPrice);
	// const totalQuantities = useSelector((state) => state.addToCart.totalQuantities);

	// const { price } = products;
	// console.log(products.price);
	// const cartPrice = (products.price);
	// console.log(totalPrice);
	

	return (
		<>
		<Wrapper>
		{
			products && products.map((val) => {
				const {id,title,price,Images} = val;
				return (
					<DetailsWrapper key={id}>
						<Img src={Images[0].img} alt="" />
						<Name>
							<Title>{title}</Title>
						<Price>₹ {price}  <DustBin/></Price>	
						</Name>
					</DetailsWrapper>
				)
			})
		}
		
		</Wrapper>
		<CheckoutWrapper>
				<Subtotal>Subtotal : 
					<Total><Rupee>₹</Rupee> {totalPrice}</Total>
				</Subtotal>
					<ViewCartbtn >
						<Link to="/cart">
							View cart 
						</Link>	
					</ViewCartbtn>
					<Checkout>
						<Link to="/checkout">Checkout</Link>
					</Checkout> 
		</CheckoutWrapper>
		</>
		
	)
}
const Wrapper = styled.div`
	overflow-y: auto;
	padding: 20px;
	&::-webkit-scrollbar {
  		width: 5px;               /* width of the entire scrollbar */
	}
	&::-webkit-scrollbar-track {
		background: black;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #eee;    /* color of the scroll thumb */
 
	}
`
const DetailsWrapper = styled.div`
	display: flex;
	padding: 1rem 0.2rem 1.3rem 0.2rem;
	border-bottom: 1px solid #e3e9ef;

	
`
const Name = styled.div`
	margin: 0.8rem;
	
`

const DustBin = styled(CgTrashEmpty)`
	font-size: 1.2rem;
	color: #777;
	cursor: pointer;
	&:hover {
		color: #000;
		font-size:1rem;
		transition:all 0.5s ease-in-out;
	} 

`
const Title = styled.div`
	font-size: 14px;
	color: #02010A;
	font-weight: 600;
	margin-bottom : 0.5rem;
`
const Price = styled.div`
	font-size: 13px;
	font-weight:600;
	color: #424242;
	display: flex;
	justify-content: space-between;
`

const Img = styled.img`
	height: 118px;
	width: 106px;
	
` 
const CheckoutWrapper = styled.div`
	padding: 20px;
	position: fixed;
	bottom: 0;
	width: 100%;
	


`
const Subtotal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: black;
	font-size: 15px;
	font-weight: 500;
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
	& a {
		color: white;
		text-decoration: none;
	}
	&:hover{
		background: black;
		transition: all 0.2s ease-in-out;
	}
`


const ViewCartbtn = styled(Checkout)`
	background: white;
	color: #353535;
 	& a {
		color: black;
 		text-decoration: none !important;
	}
	&:hover a{
		color: white;
		transition: all 0.2s ease-in-out;
	}
`

const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`
const Rupee = styled.span`
	color: black;
	margin-right: 0.2rem;
	font-weight: bold;
`
export default CartDetails
