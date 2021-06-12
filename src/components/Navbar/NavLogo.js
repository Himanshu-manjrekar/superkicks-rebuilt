import React from 'react'
import styled from "styled-components"

const NavLogo = () => {
	return (
		<>
		<Navbarlogo 
			src="https://superkicks.in/wp-content/uploads/2021/01/cropped-superkicks-logo-updated.jpg.webp" 
			alt="BrandLogo" >
		</Navbarlogo>
		</>
	)
}

const Navbarlogo = styled.img`
	height:4rem;
	margin: 0.63rem;
	padding:0.53rem;
	background-color: black;

	@media(max-width: 1024px) {
		display: flex;
		order: 2;
		height: 3rem;
	}
`
export default NavLogo
