import React from 'react'
import styled from 'styled-components';
import BreadCrumb from '../Navbar/BreadCrumb';
import ProductImages from './ProductImages'; 
import MainImage from './MainImage';
import Details from '../Details.js/Details';


const ProductDetails = () => {

	const Images = [
		{
			id: 1,
			// sideimg: "https://superkicks.in/wp-content/uploads/2021/06/01-10-150x150.jpg",
			mainimg: "https://superkicks.in/wp-content/uploads/2021/06/01-10-850x850.jpg"
		},
		{
			id: 2,
			// sideimg: "https://superkicks.in/wp-content/uploads/2021/06/02-10-150x150.jpg",
			mainimg: "https://superkicks.in/wp-content/uploads/2021/06/02-10.jpg?x88072",
		},
		{
			id: 3,
			// sideimg: "https://superkicks.in/wp-content/uploads/2021/06/03-10-150x150.jpg",
			mainimg: "https://superkicks.in/wp-content/uploads/2021/06/03-10-850x850.jpg",
		},
		{
			id: 4,
			// sideimg: "https://superkicks.in/wp-content/uploads/2021/06/04-9-150x150.jpg",
			mainimg: "https://superkicks.in/wp-content/uploads/2021/06/04-10-850x850.jpg"
		}
	]

	return (
		<>
			<ProductWrapper>
				<ContainerFluid>
					<BreadCrumb item="Sneakers"/>
				</ContainerFluid>
				<Container>
					{/* Order: laptop:- 1, tablet:- 2, rest order will be 2 */}
					<ProductImages images={Images}/> 
					{/* Order: laptop:- 2, tablet:- 1, rest order will be 1 */}
					<MainImage/>
					{/* Order: laptop:- 3, tablet:- 3, rest order will be 3 */}
					<Details/>
				</Container>
			</ProductWrapper>
		</>
	)
}

const ProductWrapper = styled.div`
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
	width: 100%;
	@media(max-width: 768px) {
		flex-direction: column;
	}
`
export default ProductDetails
