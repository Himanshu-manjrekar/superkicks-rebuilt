import React, {useState} from 'react';
import styled from 'styled-components';
import ProductSlider from '../Products/ProductSlider';
import StoreInfo from './StoreInfo';
import Category from './Category';
import Store from './Store';

           

const Container = ({header, display}) => {
	const [data] = useState(display)
	// console.log(data);
	return (
		<>
		<Container1 >
			<SectionHeader >{header}</SectionHeader>
			{
				 (data === "NewArrivals") ? <ProductSlider/>: 
				 (data === "Categories") ? <Category />  : 
				 (data === "Store") ? <Store />: 
				 (data === "Storeinfo") ? <StoreInfo />: ''
			}
		</Container1>
			
		</>
	)
}
const Container1 = styled.div`
	width: 100%;
`

const SectionHeader = styled.h1`
	font-size: 22px;
	color: #3e3e3e;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 5px;
	margin:1.5rem;
	padding: 1rem;
`


export default Container
