import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Container from '../components/Container/Container';

const Home = () => {
	return (
		<div>
			<Carousel/>
			<Container 
				header="New Arrivals"
				display="NewArrivals"
			/>
			<Container 
				header="categories"
				display="Categories"
			/>
			<Container 
				header="Store"
				display="Store"
			/>
			
		</div>
	)
}

export default Home
