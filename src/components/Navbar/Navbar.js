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

const NavBar = styled.div`
	background-color: black;
	display: flex;
	width: 100%;
	justify-content:space-between;

`

export default Navbar





