import React from 'react'
// Slick carousel Import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const Carousel = () => {
	
		const settings = {
		  dots: false,
		  infinite: true,
		  speed: 800,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  arrows: true,
		  className: "slides",
		};
	
		return (
			<>
			<Container>
				<StyledSlider {...settings}>
					<div>
						<Link to="/Heat">
							<Image src= "https://superkicks.in/wp-content/uploads/2021/06/Super-Sale-web-banner.jpg"/>
						</Link>
					</div>
					<div>
						<Link to="/Heat">
							<Image src= "https://superkicks.in/wp-content/uploads/2021/05/SK-Web-Banner3.jpg"/>
						</Link>
					</div>
					<div>
						<Link to="/Heat">
							<Image src= "https://superkicks.in/wp-content/uploads/2021/05/PUMA-SK-Web-Banner.jpg"/>
						</Link>
					</div>
					<div>
						<Link to="/Heat">
							<Image src= "https://superkicks.in/wp-content/uploads/2021/05/Adidas-Love-unites-web.jpg"/>
						</Link>
					</div>
				</StyledSlider>
			</Container>
			
			
			</>
		)
	
}


const Container = styled.div`
	margin-top: 4.5rem;
	@media(max-width:1024px){
		margin-top:3rem;
	} 
`
const Image =styled.img`
	height: 100%;
	width: 100%;
`
const StyledSlider = styled(Slider)`
	.slides {
		position: relative;
	}
	.slick-prev {
		position: absolute;
  		top: 50%;
  		z-index: 1;
		left: 5%;
	}

	.slick-next {
		position: absolute;
  		top: 50%;
  		z-index: 1;
		right: 5%;
	}
`
export default Carousel
