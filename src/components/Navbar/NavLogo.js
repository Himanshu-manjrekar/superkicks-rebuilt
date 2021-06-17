import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const NavLogo = () => {
	return (
		<>
		
			<Logo to="/">
				<Navbarlogo 
				src="https://superkicks.in/wp-content/uploads/2021/01/cropped-superkicks-logo-updated.jpg.webp" 
				alt="BrandLogo"  >
				</Navbarlogo>
			</Logo>		
		
		</>
	)
}
const Logo = styled(Link)`

@media(max-width: 1024px) {
		display: flex;
		order: 2;
		height: 3rem;
	}
`
const Navbarlogo = styled.img`
	height:4rem;
	margin: 0.63rem;
	padding:0.53rem;
	background-color: black;

	@media(max-width: 1024px) {
		margin: 0.2rem;
		padding:0.5rem;
		display: flex;
		order: 2;
		height: 3rem;
	}
`
export default NavLogo
