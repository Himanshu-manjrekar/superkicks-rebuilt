import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Sort from '../Container/Sort'
import Product from './Product';
import FilterIcon from '../Filter/FilterIcon';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setProducts } from '../../redux/actions/productActions';


const ProductListing = () => {
	const arrivals = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	const fetchArrivals = async() => {
		const response = await axios.get('http://localhost:8080/Products')
		.catch((err) =>{console.log('Err', err)});
		dispatch(setProducts(response.data));
	}
	useEffect(() => {
		fetchArrivals();
	})
	return (
		<ListingWrapper>
			<HeaderWrapper>
				<Header>New Arrivals</Header>
				<FilterIcon></FilterIcon>
			</HeaderWrapper>
			
			<Sort />
			<Container>
				<Row>
					{
						arrivals.map((val)=> {
							const Image = val.Images[0].img;
							const { id, brand, title, price } = val;
							return (
								<div className="col-md-4 col-sm-6 col-xs-6 col-lg-4" key={id}>
									<Link style={{textDecoration:"none",color:"black"}} to={`/products/${id}`}>
									<Product 
									src={Image}
									brand={brand}
									title={title}
									price={price}/>
									</Link>
									
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
	@media(max-width: 575px) {
		align-items: center;
		justify-content: center;
	}
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

	

	@media(max-width: 768px) {
		font-size: 30px;
    	font-weight: 400;
	}
	@media(max-width: 540px) {
		font-size: 25px;
    	font-weight: 400;
	}
	@media(max-width: 320px) {
		font-size: 18px;
    	font-weight: 400;
	}
`

const HeaderWrapper= styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.5rem;

`


export default ProductListing
