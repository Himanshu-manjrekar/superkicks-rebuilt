import React from 'react'
import styled from 'styled-components'
import Sort from '../Container/Sort'
import Product from './Product'

const ProductListing = () => {
	const Arrival = [
		{
			id:1,
			brand:"Asics",
			title:"VIVIENNE WESTWOOD GEL-KAYANO 27 LTX",
			img:"https://superkicks.in/wp-content/uploads/2021/06/1201A115.001-1.jpg?x77133",
			price: "19,999",	
			gender:"Men",
		},
		{
			id:2,
			brand:"Nike",
			title:"AIR FORCE 1 SHADOW W MAGIC EMBER	",
			img:"https://superkicks.in/wp-content/uploads/2021/06/CI0919-110-1.jpg?x77133",
			price: "8,995",	
			gender:"Men",
		},
		{
			id:3,
			brand:"adidas originals",
			title:"PHARRELL WILLIAMS CHANCLETAS HU SLIDES SEMI SOLAR PINK",
			img:"https://superkicks.in/wp-content/uploads/2021/06/FV7289-1.jpg?x77133",
			price: "7,999",	
			gender:"Men",
		},
		{
			id:4,
			brand:"adidas originals",
			title:"PHARRELL WILLIAMS CHANCLETAS HU SLIDES bright orange",
			img:"https://superkicks.in/wp-content/uploads/2021/06/FV7261-1.jpg?x77133",
			price: "7,999",	
			gender:"Men",
		},
		{
			id:5,
			brand:"adidas originals",
			title:"PHARRELL WILLIAMS CHANCLETAS HU SLIDES core black",
			img:"https://superkicks.in/wp-content/uploads/2020/09/GX2483-1.jpg.webp",
			price: "7,999",	
			gender:"Men",
		},
		{
			id:6,
			brand:"adidas originals",
			title:"PHARRELL WILLIAMS CHANCLETAS HU SLIDES bold gold",
			img:"https://superkicks.in/wp-content/uploads/2020/09/yellowslides-1.jpg.webp",
			price: "7,999",	
			gender:"Men",
		},
		{
			id:7,
			brand:"Adidas",
			title:"HU NMD ORANGE",
			img:"https://superkicks.in/wp-content/uploads/2021/06/01-2.jpg?x77133",
			price: "21,999",	
			gender:"Men",
		},
		{
			id:8,
			brand:"Reebok",
			title:"DANIELLE GUIZIO CLUB C 85",
			img: "https://superkicks.in/wp-content/uploads/2021/06/GZ3035-1.jpg?x77133",
			price: "9,999",	
			gender:"Men",
		},
		

	]
	return (
		<ListingWrapper>
			<Header>New Arrivals</Header>
			<Sort />
			<Container>
				<Row>
					{
						Arrival.map((val)=> {
							return (
								<div className=" " key={val.id}>
									
									<Product 
									src={val.img}
									id={val.id}
									brand={val.brand}
									title={val.title}
									price={val.price}/>
								</div>
							)
						})
					}
				</Row>
			</Container>
		</ListingWrapper>
	)
}

const Container = styled.div`
	width: 100%;
`
const Row = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`
const ListingWrapper =styled.div`
	width: 80%;
	@media(max-width:768px) {
		width: 100%;
	}
	@media(max-width: 575px) {
		width: 100%
	}
`
const Header = styled.h2`
	font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.5px;
    color: #222;
	margin-left: 1rem;
`


export default ProductListing
