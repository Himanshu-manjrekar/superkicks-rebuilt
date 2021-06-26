import React, {useState} from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson, BsBag } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CartDetails from '../cart/CartDetails';
import IsEmpty from '../cart/IsEmpty';
const NavRightMenu = () => {
	const [cartStatus, setCartStatus] = useState(false)

	const Cart = [
		// {
		// 	id:1,
		// 	brand:"Asics",
		// 	title:"VIVIENNE WESTWOOD GEL-KAYANO 27 LTX",
		// 	img:"https://superkicks.in/wp-content/uploads/2021/06/1201A115.001-1.jpg?x77133",
		// 	price: "19,999",	
		// 	gender:"Men",
				
			
		// },
		// {
		// 	id:2,
		// 	brand:"Nike",
		// 	title:"AIR FORCE 1 SHADOW W MAGIC EMBER	",
		// 	img:"https://superkicks.in/wp-content/uploads/2021/06/CI0919-110-1.jpg?x77133",
		// 	price: "8,995",	
		// 	gender:"Men",
		// },
		
	];

	// console.log(Cart.length);

	const Clength = Cart.length; 
	return (
		<>
			<RightMenu>
				<Link to="#"><BsPerson/></Link>
				<Link to="#"><BiSearchAlt2/></Link>
				<Bag onClick={() => setCartStatus(true) }><BsBag/><Badge>3</Badge></Bag>		
		</RightMenu>
		<CustomBag onClick={() => setCartStatus(true) }><BsBag/><CustomBadge>3</CustomBadge></CustomBag>
		<ViewCart view={cartStatus}>
				<CloseWrapper>
					<ShoppingHeader>Shopping Cart</ShoppingHeader>
					<CustomClose onClick={() => setCartStatus(false) }/>
				</CloseWrapper>
			{
				Clength>= 1 ? <CartDetails cart={Cart}/> :
				<IsEmpty />
			}
		</ViewCart>	
		</>
	)
}

const RightMenu = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color: black;
	a {
		color: white;
		text-decoration:none;
		display:flex;
		border-right: 0.063rem solid #585454;
		padding: 0.5rem 0.625rem 0.5rem 0;
		margin-right: 0.625rem;
		line-height: inherit;
		font-size: 1.125rem;
	}
	& a:last-child{
		border-right: none;
		
	}
	@media(max-width:1024px) {
		display: none;
	}	

	@media(max-width:1024px) {
		a {
			font-size: 0.7rem !important;
		}
		font-size: 0.7rem !important;
	}
`

const Bag = styled.a `
	position: relative;	
	text-decoration:none;
	cursor: pointer;	
`

const Badge = styled.span `
	position: absolute;
    top: 0rem;
	left:0.75rem;
    /* right: 3.5rem; */
    height: 1.438rem;
    width: 1.2rem;
	border: 0.063rem solid white;
	background:white;
    border-radius: 50%;
    color: black;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size: 0.75rem;
	transition:0.2s;

	@media(max-width: 1024px) {
		position: absolute;
		top: 0rem;
		left:0.75rem;
	}
	&:hover {
		border: 0.113rem solid white;
		background: black;
		color: white;
	}
`
const ViewCart= styled.div `
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: white;
	width: 370px;
	z-index: 100;
	/* padding: 20px; */
	display: flex;
	flex-direction: column;
	text-align: start;
	transform : ${props => props.view ? 'translateX(0)' : 'translateX(100%)' };
	transition: transform 0.4s ease-in-out;

`
const CustomBag = styled.a`
	position: relative;
	color: white;
	font-size: 2rem;
	display: none;
	@media(max-width: 1024px) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		order:3;
		font-size: 1.563rem;
	}
	@media(max-width: 768px) {
		font-size: 1.3rem;
	}
	&:hover {
		color:white;
	}
`
const CustomBadge = styled.span`
	 @media(max-width: 1024px) {
	position: absolute;
	top: 1rem;
	left:2rem;
    /* right: 3.5rem; */
    height: 1.438rem;
    width: 1.25rem;
	border: 0.063rem solid white;
	background:white;
    border-radius: 50%;
    color: black;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size: 0.75rem;
	transition:0.2s;
	 }
	 &:hover {
		border: 0.113rem solid white;
		background: black;
		color: white;
	}
	
`
const CustomClose = styled(RiCloseLine) `
	cursor: pointer;
`

const CloseWrapper = styled.div `
	display: flex;
	justify-content: space-between;
	padding-bottom: 0.8rem;
	border-bottom: 1px solid #eeeeee;
	padding: 20px;
`

const ShoppingHeader = styled.h6`
	color: #000;
	font-weight: 600;
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

const Checkout = styled.div`
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

const ViewCartbtn = styled(Checkout)`
	background: #fff;
	color: #353535;
	&:hover {
		background: #fff;
		color: #353535;
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
export default NavRightMenu
