import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
	const [burgerStatus, setBurgerStatus] = useState(false)
	const [accordian, setAccordian] = useState(false)
	const [dropAccord1, setDropAccord1] = useState(false)
	const [dropAccord2, setDropAccord2] = useState(false)
	return (
		<>
			<CustomMenu><GiHamburgerMenu onClick={() => setBurgerStatus(true) }/></CustomMenu>
			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false) }/>
				</CloseWrapper>
				<li><Link to="/">New Arrivals</Link></li>
				<li><Link to="#" onClick={() => setAccordian(!accordian)}>FootWear
					{accordian ? <UpArrow/>: <DownArrow/>}</Link>
				{ accordian && 
					<DropDown>
						<li><Link to="#" onClick={() => setDropAccord1(!dropAccord1)}>Men
						{dropAccord1 ? <UpArrow/> : <DownArrow/>}
						 </Link>
						 {
							 dropAccord1 &&
							 <ul>
							 	<li><Link to="/">Sneakers</Link></li>
								<li><Link to="/">Slides & Sandals</Link></li>
								<li><Link to="/">Classics</Link></li>
								<li><Link to="/">Basketball</Link></li>
						 	</ul>
						 }
						 	
						 </li>
						<li><Link  to="#" onClick={() => setDropAccord2(!dropAccord2)}>Women 
						{dropAccord2 ? <UpArrow/> : <DownArrow/>}
						</Link>
						{
							dropAccord2 &&
							<ul>
								<li><Link to="/">Sneakers</Link></li>
								<li><Link to="/">Slides & Sandals</Link></li>
								<li><Link to="/">Classics</Link></li>
								<li><Link to="/">Basketball</Link></li>
							</ul>
						}
						</li>
					</DropDown>	
				}
				</li>
				<li><Link to="/">apparel</Link></li>
				<li><Link to="/">accessories</Link></li>
				<li><Link to="/">brands</Link></li>
				<li><Link to="/">heat</Link></li>
				<li><Link to="/">Blog</Link></li>
				<li><Link to="/">sale</Link></li>
				<Importantlinks>
					<h1>Important Links</h1>
					<li><Link to="/">My account</Link></li>
					<li><Link to="/">Track Your Order</Link></li>
					<li><Link to="/">refunds/cancellation</Link></li>
					<li><Link to="/">terms and conditions</Link></li>
					<li><Link to="/">faq</Link></li>
					<li><Link to="/">privacy policy</Link></li>
					<h1>Social</h1>
					<li><Link to="/">facebook</Link></li>
					<li><Link to="/">Instagram</Link></li>	
				</Importantlinks>
			</BurgerNav>
		</>
	)
}

const DropDown = styled.ul`
	li {
		margin-left:10px;
		text-transform: none !important;
	}
`

const UpArrow = styled(RiArrowDropUpLine)`
	color: #757575;
	 font-size: 25px;
`
// ---------------------------------------
const CustomMenu =styled.div`
	color: white;
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
const CustomClose = styled(RiCloseLine) `
	cursor: pointer;
`

const CloseWrapper = styled.div `
	display: flex;
	justify-content: flex-end;
`

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	background-color: white;
	width: 300px;
	height: 100%;
	overflow-y: scroll;
	z-index: 100;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform : ${props => props.show ? 'translateY(0)' : 'translateX(-100%)' };
	transition: transform 0.4s ease-in-out;

	li {
		padding: 7px 0;
		text-transform: uppercase;
		
		a {
			font-weight: 400;
			font-size: 1rem;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			text-decoration: none;
			color: #222;	
		}
	}
`

const Importantlinks = styled.div`
	h1 {
		margin-top:1.563rem;
		margin-bottom: 5px;
		font-size: 12px;
		color: #7A7A7A;
		opacity:0.6;
		letter-spacing: 1px;
		text-transform:uppercase;
	}
	li a {
		font-size: 0.75rem;
		margin-bottom:0.188rem;
		color: #757575;
		cursor: pointer;
	}
	li a:hover {
		color: #000;
	}
`
const DownArrow = styled(RiArrowDropDownLine)`
	 color: #757575;
	 font-size: 25px;
`
export default HamburgerMenu
