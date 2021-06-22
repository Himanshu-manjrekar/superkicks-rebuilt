import React from 'react'
import styled from 'styled-components';
import BreadCrumb from '../Navbar/BreadCrumb';
import ProductFilter from './ProductFilter';
import ProductListing from './ProductListing';
const ProductCategory = () => {
	return (
		<>
		<PageWrapper>
			<ContainerFluid>
				<BreadCrumb/>
			</ContainerFluid>
			<Container>
				<ProductFilter />
				<ProductListing />	
			</Container>
		</PageWrapper>	
		</>
	)
}

const PageWrapper = styled.div`
	margin-top: 6rem;
	@media(max-width:1024px){
		margin-top:4rem;
	} 
`
const ContainerFluid = styled.div`
	padding: 0 2.5rem 0 2.5rem;

`
const Container = styled(ContainerFluid)`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export default ProductCategory
