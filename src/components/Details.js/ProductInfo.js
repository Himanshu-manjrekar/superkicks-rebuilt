import React from 'react'
import styled from 'styled-components';
const ProductInfo = () => {
	return (
		<>
			<Brand>Converse</Brand>
			<Title>RUN  STAR  HIKE  WHITE</Title>
			<Cost><Span>₹ </Span> 5,999</Cost>
			<ItemDetails>A chunky platform and jagged rubber sole 
			put an unexpected twist on your everyday Chucks. Details like a canvas build,
			rubber toe cap and Chuck Taylor ankle patch stay true to the original, 
			while a molded platform, two-tone outsole and rounded heel give off futuristic vibes.
			</ItemDetails>
		</>
	)
}
const Brand = styled.div`
	color: #000;
	font-size: 18px;
`
const Title = styled.h1`
	color: #000;
	font-size: 2rem;
	letter-spacing: -1px;
	word-spacing: 5px;
	@media(max-width: 500px) {
		font-size: 1.5rem;
	}
`
const Cost = styled.div`
	display: flex;
	color: #111;
	font-size: 18px;
`
const Span = styled.span`
	margin-right: 5px;
	color: #000;
`
const ItemDetails = styled.div`
	padding-top: 1rem;
	color: #444;
	font-size: 16px;
	margin-bottom: 1.3rem;
	@media(max-width: 500px) {
		font-size: 14px;
	}
`
export default ProductInfo
