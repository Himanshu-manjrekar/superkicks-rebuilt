import React from 'react'
import Product from '../Products/Product';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ProductSlider = () => {
	const setting = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,
		className: "slides",
		responsive: [
			{
			  breakpoint: 1030,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				
			  }
			},
			{
			  breakpoint: 790,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			  }
			}
		  ]
		
	}
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
			id:5,
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
		<>
		<StyledSlider {...setting}>
			{
				Arrival.map((arr)=>{
					return (
						<div key={arr.id}>
							<Product
								src={arr.img}
								id={arr.id}
								brand={arr.brand}
								title={arr.title}
								price={arr.price}
							/>
						</div>
					)
				})

			}
			
			
		</StyledSlider>
		</>
	)
}

const StyledSlider = styled(Slider)`
	cursor: grab;
	.slides {
		position: relative;
		
	}
	.slick-prev {
		position: absolute;
  		top: 35%;
  		z-index: 1;
		left: 5%;
		&::before {
			color:#7e7e7e;
		}
		@media(max-width:768px) {
			left: 1%;
		}
	}

	.slick-next {
		position: absolute;
  		top: 35%;
  		z-index: 1;
		right: 5%;
		&::before {
			color:#7e7e7e;
		}
		@media(max-width:768px) {
			right: 1%;
		}
	}
	.slick-slide  .slick-current {
		width: 0 !important;
	}
	
	
	
`
export default ProductSlider
