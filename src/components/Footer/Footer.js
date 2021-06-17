import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SiMinutemailer } from "react-icons/si"

const Footer = () => {
	return (
		<>
			<FooterWrapper> 
				<FooterContainer className="container-fluid">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<Header>Important Links</Header>
								<UlLinks>
								<li><Link to="/">Refunds/Cancellation</Link></li>
								<li><Link to="/">Terms and Conditions</Link></li>
								<li><Link to="/">FAQ</Link></li>
								<li><Link to="/">Privacy Policy</Link></li>
								<li><Link to="/">Shipping</Link></li>
								</UlLinks>
						</div>
						<div className="col-lg-3 col-md-3">
							<Header>NEED HELP?</Header>
							<UlLinks>
							<li><Link to="/">My Account</Link></li>
							<li><Link to="/">Track Your Order</Link></li>
							<li><Link to="/">Size Chart</Link></li>
							<li><Link to="/">Contact Us</Link></li>
							</UlLinks>	
						</div>
						<div className="col-lg-3 col-md-3">
							<Header>FOLLOW</Header>
								<UlLinks>
									<li><Link to="/">Instagram</Link></li>
									<li><Link to="/">Facebook</Link></li>
								</UlLinks>
						</div>
						<div className="col-lg-3 col-md-3">
							<Header>Sign up</Header>
								<UlLinks>
									<p>Sign up to our newsletter for new product launches!</p>
								</UlLinks>
							<form action="">
								<div className="d-flex">
								<input type="email" className="form-control" id="newsletter" placeholder="Your email address"/>
								<Label htmlFor=""><SiMinutemailer/></Label>
								</div>
							</form>
						</div>
					</div>
					
				</FooterContainer>
				<Copyright>
					© Super Kicks India Pvt. Ltd. 2021
				</Copyright>
			</FooterWrapper>
		</>
	)
}
const FooterWrapper = styled.div`
	background: #111;
	padding-top: 4rem;
	padding-left: 2rem;
	padding-right: 2rem;
	margin-bottom: 0;
	bottom: 0;
`
const FooterContainer = styled.div`
	margin-bottom:1rem;
`

const Header = styled.h2`
	text-transform: uppercase;
	color: white;
	font-weight: 500;
	font-size: 15px;
	margin-bottom: 1.5rem;
`
const UlLinks = styled.ul`
	li{
		margin-bottom: 0.8rem;
		a {
			color: #777;
			text-decoration: none;
			font-size: 0.85rem;
			transition: 0.3s ease-in;
			
				
			&:hover {
			color: white;
			border-bottom: 2px solid white;
			
			}
		
		
		}
		
	}
	p {
		color: #ccc;
		font-size: 14px;
	}
`

const Label = styled.label`
display: flex;
align-items: center;
justify-content: center;
margin-left: 2rem;
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
`

const Copyright = styled.div`
	background: #111;
	color: #777;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 1rem;
`
export default Footer
