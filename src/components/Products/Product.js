import React from 'react';
import styled from 'styled-components';
import { BiRupee } from "react-icons/bi"

const Product = ({src, title, brand, price}) => {
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
	margin: 1.875rem;
	background-color: #fff;
`
const ProductImage = styled.img`
	width: 100%;
  	height: 18.75rem;
  	object-fit: cover;
	
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
	font-weight: 800;
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