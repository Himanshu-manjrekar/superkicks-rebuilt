import React from 'react'
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useState } from 'react';

const MainImage = () => {


	// console.log(images[0]);
	return (
		<Wrapper>
			<Image src="https://superkicks.in/wp-content/uploads/2021/06/01-10-850x850.jpg"/>
			<ArrowWrap><LeftArrow/></ArrowWrap>
			<ArrowWrap><RightArrow/></ArrowWrap>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex: 40%;
	@media(max-width: 768px) {
		flex: 100%;
		order: 1;
	}
`

const LeftArrow = styled(AiOutlineLeft)`
	position: absolute;
	font-size: 1.8rem;
	top: 50%;
	left: 0;
	color: #7e7e7e;
`	
const RightArrow = styled(AiOutlineRight)`
	position: absolute;
	font-size: 1.8rem;
	top:50%;
	right: 0;
	color: #7e7e7e;
	
`
const ArrowWrap = styled.div`
	
	cursor: pointer;
	visibility: hidden;
	opacity: 0;
	&:hover {
		visibility: visible;
		opacity: 1;
	}
	
`

const Image = styled.img`
	
	height: 35rem;
	width: 35rem;
	cursor: pointer;
	@media(max-width: 580px) {
		height: 30rem;
		width: 30rem;
	}
	@media(max-width: 490px) {
		height: 20rem;
		width: 20rem;
	}
	@media(max-width: 350px) {
		height: 16rem;
		width: 16rem;
	}

	&:hover ~${ArrowWrap} {
		visibility: visible;
		transition: visibility  ease-in;
		opacity: 1;
	}
` 


export default MainImage


