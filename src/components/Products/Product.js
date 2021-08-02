import React from 'react';
import styled from 'styled-components';
import { BiRupee } from "react-icons/bi"

const Product = ({src, brand,  title, price}) => {
	return (
		<>
			<CardWrapper>
				<Card>
					<ProductImage src={src}/>
					<ProductDetails>
						<ProductBrand>{brand}</ProductBrand>
						<ProductTitle>{title}</ProductTitle>
						<ProductCost>
							<RupeeSign/>
							<ProductPrice>{price}</ProductPrice>
						</ProductCost>
					</ProductDetails>	
				</Card>
			</CardWrapper>
		</>
	)
}

const CardWrapper =styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	
`
const Card = styled.div`
	width: 18.75rem;
	margin: 1rem ;
	background-color: #fff;
	cursor: pointer;
	@media(min-width: 1024px) {
		margin: 1rem;	
	}
	
`
const ProductImage = styled.img`
	width: 100%;
  	height: 18.75rem;
  	object-fit: cover;
	@media(max-width: 1024px){
		height: 17rem;
	}
	@media(min-width:768px) {
		height: 13rem;
	}
	@media(max-width:575px) {
		height: 15rem;

	}
`
const ProductDetails = styled.div`
	margin-top: 1rem;
	margin-left: 0.5rem;
`

const ProductBrand = styled.h5`
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 2px;
	
`
const ProductTitle = styled.p`
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.5rem;
	text-transform: uppercase;	
`
const ProductCost = styled.div`
	display: flex;
	align-items: center;
`

const RupeeSign = styled(BiRupee)`
	font-weight: 600;
	font-size: 1.2rem;
	color: #575757;
`
const ProductPrice = styled.div`
	font-weight: 600;
	font-size: 1rem;
	color: #575757;
`
export default Product


// https://superkicks.in/wp-content/uploads/2021/06/01-2.jpg?x58189

// https://superkicks.in/wp-content/uploads/2021/06/DB6514-410-1.jpg?x58189
// https://superkicks.in/wp-content/uploads/2021/06/GZ3035-1.jpg?x58189