import React from 'react'
import styled from 'styled-components'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Operations from '../Products/Operations';
import ProductInfo from './ProductInfo';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Details = () => {
	
	const products = useSelector((state) => state.selectedProduct);
	const Sizes = (products.Sizes);
	

	const [size, setSize] = useState(-1);
	const handleclick = (shoesize) => {
		setSize(() => shoesize);
	}
	

	
	return (
		<Detail>
			<ProductInfo/>
			<ShoeSize>Shoe Size (UK)</ShoeSize>
			<AvailableSizes>
				{
					Sizes && Sizes.map((subval) => {
						const shoesize = subval.size; 
						return (
							<div key={subval.id}>
								<Tippy content={<ColoredToolTip>{shoesize}</ColoredToolTip>} key={subval.id} >
									<Box onClick={() => handleclick(shoesize)} key={subval.id}>{shoesize}</Box>
								</Tippy>
							</div>
							
						)	
					})	
				}
				
			</AvailableSizes>
			<Offer>
				Or 3 interest free payments of <Span1>₹1,999.68</Span1>with 
				<BrandLogo src="https://superkicks.in/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg?x37840"></BrandLogo>
				<Info/>
			</Offer>
			<Operations size={size}/>	
		</Detail>
		
	)
}
const Detail = styled.div`
	margin-left: 3rem;
	padding-left: 1.7rem;
	flex: 50%;
	@media(max-width: 768px) {
		margin-top: 0.8rem;
		flex: 100%;
		order: 3;
		margin:1;
		padding: 0;	
	}
	@media(max-width: 490px) {
		margin-left:0;
		padding: 0;	
	}
`
const ShoeSize = styled.div`
	font-size: 15px;
	font-weight: 600;
	color: #222;
`
const AvailableSizes = styled.div`
	margin-top: 0.8rem;
	margin-bottom: 1rem;
	display: flex;
	cursor: pointer;
`	
const Box = styled.button`
	margin-right: 0.3rem;
	display: flex; 
	height: 2rem;
	width: 2rem;
	color: black;
	border: 1px solid #9f9f9f;
	border-radius: 5px;	
	justify-content: center;
	align-items: center;
	&:hover {
		border: 2px solid black;
	}
	&:focus { 
		border: 2px solid red;
	}
	
`
const Offer = styled.div`
	padding-top: 0.8rem;
	color: #555;
	font-size: 14px;


`

const Span1 = styled.span`
	margin-right: 5px;
	color: #000;
	font-weight: 700;
`
const BrandLogo = styled.img`
	width: 60px;
	height: 18px;
	margin: 0rem 0.125rem 0rem 0.3rem;
`
const Info = styled(HiOutlineInformationCircle)`
	font-size: 1rem;
`
const ColoredToolTip = styled.span`
	
`
export default Details
