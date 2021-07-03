import React from 'react'
import styled from 'styled-components'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Operations from '../Products/Operations';
import ProductInfo from './ProductInfo';
import { useState } from 'react';


const Details = () => {
	
	const data = [
		
			{
				id:1,
				brand:"Asics",
				title:"VIVIENNE WESTWOOD GEL-KAYANO 27 LTX",
				img:"https://superkicks.in/wp-content/uploads/2021/06/1201A115.001-1.jpg?x77133",
				price: "19,999",	
				gender:"Men",
				Sizes: [
					{
						id: 1,
						size: 8,
					},
					{
						id: 2,
						size: 9,
					},
					{
						id: 3,
						size: 11,
					},
				]
			},
		
	]

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
					data.map((val)=> {
						return (
							val.Sizes.map((subval) => {
								const shoesize = subval.size; 
								return(
									<Tippy content={<ColoredToolTip>{shoesize}</ColoredToolTip>} key={subval.id} >
										<Box onClick={() => handleclick(shoesize)}>{shoesize}</Box>
									</Tippy>
								)
								
							})
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
