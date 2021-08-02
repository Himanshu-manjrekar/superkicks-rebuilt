import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setImage } from '../../redux/actions/productActions';

const MainImage = () => {
	const [defimg] = useState();
	const products = useSelector((state) => state.setImage.img);
	// console.log(products)
	const displayimage = useSelector((state) => state.selectedProduct);
	const Load = (displayimage.Images);
	
	const dispatch = useDispatch(() => nullImage());

	const nullImage = () => {
		dispatch(setImage);
	}
	
	
	

	return (
		<Wrapper>
			{
				products === defimg ? 
				Load && <Image src={Load[0].img}/>
				:
				products && <Image src={products.img}/> 	
			}
			
				
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

// const LeftArrow = styled(AiOutlineLeft)`
// 	position: absolute;
// 	font-size: 1.8rem;
// 	top: 50%;
// 	left: 0;
// 	color: #7e7e7e;
// `	
// const RightArrow = styled(AiOutlineRight)`
// 	position: absolute;
// 	font-size: 1.8rem;
// 	top:50%;
// 	right: 0;
// 	color: #7e7e7e;
	
// `
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


