import React from 'react'
import styled from 'styled-components';
import { RiArrowDropRightLine } from 'react-icons/ri';

const NavMenu = () => {
	return (
		<>
			<Menu>
			<li><a href="#">new arrivals</a></li>
				<DropDownMain>
				<a href="#">Footwear</a>
				<DropDownMenu>
					<DropDownMenuLink>
						<a href="#">Men</a>
						<Arrowwrap><RiArrowDropRightLine/></Arrowwrap>
						<DropDownSubMenu>
							<DropDownMenuLink><a href="#">Sneakers</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Slides & Sandals</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Classics</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Basketball</a></DropDownMenuLink>
						</DropDownSubMenu>	
					</DropDownMenuLink>
					
					<DropDownMenuLink>
						<a href="#">Women</a>
						<Arrowwrap><RiArrowDropRightLine/></Arrowwrap>
						<DropDownSubMenu>
							<DropDownMenuLink><a href="#">Sneakers</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Slides & Sandals</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Classics</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Basketball</a></DropDownMenuLink>
						</DropDownSubMenu>	
					</DropDownMenuLink>
				</DropDownMenu>
				</DropDownMain>
				
			<li><a>apparel</a></li>
			<li><a>accessories</a></li>
			<li><a>heat</a></li>
			<li><a>blog</a></li>
			<li><a>sale</a></li>
			<li><a>brands</a></li>
		</Menu>
		</>
	)
}

const Menu = styled.ul`
	display: flex;
	background-color: black;
	
	li {
		position: relative;
		display: flex;
    	align-items: center;
		
	}
	a {
		color: white !important;
		text-decoration:none;
		padding: 0 2.5rem 0 0;
		text-transform: uppercase;	
		
	}

	@media (max-width:1024px) {
		display:none;
	}

	@media(max-width:1024px) {
		font-size: 0.7rem;
	}
`

const DropDownSubMenu = styled.ul`
	z-index:100;
	position: absolute;
	visibility: hidden;
	top:0;
	left:13rem;
	padding:1rem !important;
	width: 15rem;
	background-color: white !important;
	box-shadow: 0 0.063rem 0.938rem rgb(0 0 0 / 8%);
	
`
const DropDownMenuLink = styled.li`
display:flex;
justify-content:space-between;
	position: relative;
	margin-bottom: 1rem;

	&:last-child {
		margin-bottom:0 !important;
	}

	a {
		color: #757575 !important;
		font-size: 0.875rem;
		display:flex;
		align-items:center;
		justify-content: center;
		margin:0 !important;
		
	}
	a:hover {
		color: #000 !important;
	}


	&:hover ${DropDownSubMenu} {
		visibility: visible;
	}
`

const DropDownMenu =styled.ul`
	top:4.375rem;
	left:0;
	padding:1rem !important;
	position: absolute;	
	visibility: hidden; 
	display:block;
	width: 15rem;
	background-color: white !important;
	box-shadow: 0 0.063rem 0.938rem rgb(0 0 0 / 8%);
	
	a {
		text-transform:capitalize;
		margin-bottom: 0.9rem;
	}

	 

	 
	
	
	& ${DropDownMenuLink} {
		color: black !important;
	}

`

const Arrowwrap = styled(RiArrowDropRightLine)`
	display:flex;
	align-items: center;
	justify-content: center;
	font-size: 1.563rem;
	color: #9e9e9e;
	
`


const DropDownMain = styled.li`
	position: relative;
	&:hover ${DropDownMenu} {
		visibility:visible;	
	}
`

export default NavMenu

