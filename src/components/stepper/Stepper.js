import React from 'react';
import styled from 'styled-components';

const Stepper = () => {
	const steps = [
		{
			id:1,
			step:"Shopping Cart"
		},
		{
			id:2,
			step:"Shipping & Checkout"
		},
		{
			id:3,
			step:"Confirmation"
		}
	]
	return (
		<Container>
				<Progressbar>
					{
						steps.map((val)=> {
							const {id, step} = val
							return (
								<div key={id}>
									<Steps >
										<Bullet ><Span>{id}</Span></Bullet>
										<P>{step}</P>
									</Steps>
								</div>
						)
						})
					}
					
					
				</Progressbar>
		</Container>
	)
}

const Container = styled.div`
	padding-top: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	
	
`
const Progressbar = styled.div`
	display: flex;
	margin: 20px 0;
`
const Bullet = styled.div`
	height: 25px;
	width: 25px;
	background-color: #444;
	color: white;
	border-radius: 50%;
	margin-bottom: .5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	
	&::before{
		position:absolute;
		content: "";
		height: 4px;
		width: 130px;
		background-color:#ccc;
		bottom: 11px;
		right: 41px;
		
	}
	&::after{
		position:absolute;
		content: "";
		height: 4px;
		width: 130px;
		background-color:#ccc;
		bottom: 11px;
		left: 41px;
	}
	@media(max-width: 600px) {
		&::before{
		position:absolute;
		content: "";
		height: 2px;
		width: 65px;
		background-color:#ccc;
		bottom: 11px;
		right: 31px;
		
	}
	&::after{
		position:absolute;
		content: "";
		height: 2px;
		width: 65px;
		background-color:#ccc;
		bottom: 11px;
		left: 31px;
	}
	}
`

const Steps =styled.div`
	display: flex;
	justify-content:center;
	align-items:center;
	flex-direction: column; 
	margin: 0 40px;
	@media(max-width:600px){
		margin: 0 20px;
	}
	/* background-color: red; */
`


const P = styled.p`
	color: #111;
	font-size: 14px;
	font-weight: 600;
	margin:0;
	@media(max-width:600px){
		font-size: 12px;
	}
	
` 
const Span = styled.span`
	font-size:12px;
	font-weight: 500;
	line-height: 25px;
	
`


export default Stepper
