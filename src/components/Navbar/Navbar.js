import React from 'react'
import styled from "styled-components";




// Imports
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavRightMenu from './NavRightMenu';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {

	return (
	<>
		<NavBar>
			<NavLogo/>	
			<NavMenu />
			<NavRightMenu />
			<HamburgerMenu />		
		</NavBar>	
	</>
)
}

const NavBar = styled.nav`
	position: fixed;
	top:0;
	width: 100%;
	background-color: black;
	display: flex;
	justify-content:space-between;
	z-index:1000000;

`

export default Navbar





