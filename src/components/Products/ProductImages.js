import React from 'react'
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from'styled-components';


const ProductImages = () => {
 
	const product = useSelector((state) => state.selectedProduct);
	const thumbnails = (product.Images);


	const dispatch = useDispatch();
	const handleClick = (img) => {
		dispatch({type: 'SET_IMAGE', payload: {product, img}})	
	}
	
	dispatch({type: 'SET_IMAGE'});
	
	return (
		<Wrapper>
			<ImagesWrapper>
				{
					thumbnails && thumbnails.map((val)=>{
						const { img, id } = val
						return (
							<ProductImage src={img} key={id} onClick={() => handleClick(img)}></ProductImage>
						)
					})
				}
			</ImagesWrapper>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	@media(max-width: 768px) {
		flex: 100%;
		order: 2;
		margin-top: 0.5rem;
	}
`
const ImagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media(max-width: 768px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`
const ProductImage = styled.img`
	height: 5rem;
	width: 5rem;
	margin: 0 0.5rem 0.5rem;
	cursor : pointer;
	@media(max-width: 500px) {
		height: 4rem;
		width: 4rem;
	}
	@media(max-width: 350px) {
		height: 3rem;
		width: 3rem;
	}
	
`
export default ProductImages

