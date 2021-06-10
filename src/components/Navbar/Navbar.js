import React from 'react'
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPerson, BsBag } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri"
import { useState } from 'react';
import "../Navbar/Navbar.css"



const Navbar = () => {

	return (
		<>
		<NavBar>
			
			<Navbarlogo 
				src="https://superkicks.in/wp-content/uploads/2021/01/cropped-superkicks-logo-updated.jpg.webp" 
				alt="BrandLogo" >
			</Navbarlogo>
			<Menu>
			<li><a href="#">new arrivals</a></li>
			<DropDownMain>
				<a href="#">Footwear</a>
				<DropDownMenu>
					<DropDownMenuLink>
						<a href="#">Men</a>
						<Arrowwrap><RiArrowDropRightLine/></Arrowwrap>
						<DropDownSubMenu>
							<DropDownMenuLink><a href="#">Sliders</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">Sneakers</a></DropDownMenuLink>
							<DropDownMenuLink><a href="#">appareal</a></DropDownMenuLink>
						</DropDownSubMenu>	
					</DropDownMenuLink>
					
					<DropDownMenuLink>
						<a href="#">Women</a>
						<Arrowwrap><RiArrowDropRightLine/></Arrowwrap>
					</DropDownMenuLink>
				</DropDownMenu>
			</DropDownMain>
				
				<li><a href="#">accessoire</a></li>
				<li><a href="#">appareal</a></li>
				<li><a href="#">heat</a></li>
				<li><a href="#">blog</a></li>
				<li><a href="#">sale</a></li>
				<li><a href="#">brands</a></li>

			</Menu>
			<RightMenu>
				<a href=""><BsPerson/></a>
				<a href=""><BiSearchAlt2/></a>
				<Bag href=""><BsBag/><Badge>3</Badge></Bag>
			</RightMenu>
			
			
		</NavBar>	
		</>
	)
}




const NavBar = styled.div`
	background-color: black;
	display: flex;

`
const Navbarlogo = styled.img`
	height:4rem;
	width:auto;
	margin: 0.63rem;
	padding:0.53rem;
`
const Menu = styled.ul`
	display:flex;
	align-items:center;
	justify-content:center;
	li {
		position: relative;
		
	}
	li a {
		color: white;
		text-decoration:none;
		padding: 0 40px 0 0;
		
	}
`
const DropDownSubMenu = styled.ul`
	position: absolute;
	visibility: hidden;
	left:-100;
`
const DropDownMenuLink = styled.li`
	display: flex;
	justify-content: space-between;
	position: relative;
	a {
		color: black !important;
		font-size: 14px;
	}
	&:hover ${DropDownSubMenu} {
		visibility: visible;
	}
`

const DropDownMenu =styled.ul`
	/* margin-top:1rem !important; */
	/* bottom:0; */
	padding:1rem !important;
	position: absolute;	
	visibility: hidden; 
	display:block;
	width: 15rem;
	background-color: white !important;
	box-shadow: 0 1px 15px rgb(0 0 0 / 8%);
	
	/* transition: 0.5s ease-in; */
	& ${DropDownMenuLink} {
		color: black !important;
	}

`

const Arrowwrap = styled(RiArrowDropRightLine)`
	font-size:25px;
	color: #9e9e9e;
	
`


const DropDownMain = styled.li`
	position: relative;
	&:hover ${DropDownMenu} {
		visibility:visible;	
	}
`


const RightMenu = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-left:50px;
	a {
		color: white;
		text-decoration:none;
		display:flex;
		border-right: 1px solid #585454;
		padding: 8px 10px 8px 0;
		margin-right: 10px;
		line-height: inherit;
		font-size: 18px;
	}
	& a:last-child{
		border-right: none;
		
	}
	
`

const Bag = styled.a `
	text-decoration:none;
`

const Badge = styled.span `
	position: absolute;
    top: 20px;
    right: 56px;
    height: 23px;
    width: 20px;
	border: 1px solid white;
	background:white;
    border-radius: 50%;
    color: black;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size:12px;
	transition:0.2s;

	&:hover {
		border: 1.8spx solid white;
		background: black;
		color: white;
	}
`


export default Navbar





