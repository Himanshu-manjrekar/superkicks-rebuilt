import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ProductInfo = () => {
	const products = useSelector((state)=> state.selectedProduct);
	const {brand, price, title, details} = products;
	return (
		<>
			<Brand>{brand}</Brand>
			<Title>{title}</Title>
			<Cost><Span>₹ </Span> {price}</Cost>
			<ItemDetails>
				{details}
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
