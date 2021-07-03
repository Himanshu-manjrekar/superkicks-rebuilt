import React from 'react'
import { useState } from 'react';
import styled from'styled-components';

const ProductImages = ({images}) => {

const [thumbnails, setThumbnails] = useState(-1);

	const cliclhandler = (mainimg) => {
		setThumbnails(() => mainimg);
	} 

	console.log(thumbnails);
	
	return (
		<Wrapper>
			<ImagesWrapper>
				{
					images.map((data) => {
						const { id, mainimg} = data;
						return (
							<ProductImage src={mainimg} key={id} onClick={() => cliclhandler(mainimg)}></ProductImage>
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

