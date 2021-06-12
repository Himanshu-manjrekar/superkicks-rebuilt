import React, {useState} from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson, BsBag } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';

const NavRightMenu = () => {
	const [cartStatus, setCartStatus] = useState(false)
	return (
		<>
			<RightMenu>
				<a href=""><BsPerson/></a>
				<a href=""><BiSearchAlt2/></a>
				<Bag onClick={() => setCartStatus(true) }><BsBag/><Badge>3</Badge></Bag>		
		</RightMenu>
		<CustomBag onClick={() => setCartStatus(true) }><BsBag/><CustomBadge>3</CustomBadge></CustomBag>
		<ViewCart view={cartStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setCartStatus(false) }/>
				</CloseWrapper>

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
	width: 300px;
	z-index: 100;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform : ${props => props.view ? 'translateX(0)' : 'translateX(100%)' };
	transition: transform 0.4s ease-in-out;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		text-transform: uppercase;

		a {
			font-weight: 600;
			
		}
	}

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
	justify-content: flex-end;
`
export default NavRightMenu
