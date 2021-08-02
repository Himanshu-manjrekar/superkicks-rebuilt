import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components';
import BreadCrumb from '../Navbar/BreadCrumb';
import ProductImages from './ProductImages'; 
import MainImage from './MainImage';
import Details from '../Details.js/Details';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/productActions';



const ProductDetails = () => {

	const { id } = useParams();
	const dispatch = useDispatch();
	// const product = useSelector((state) => state.selectedProduct);
	const fetchDetails = async () => {
		const response = await axios.get(`http://localhost:8080/products/${id}`)
		.catch((err) => {console.log('Err', err)})
		dispatch(selectedProduct(response.data));
		// console.log(response.data);
	}

	useEffect(() => {
		if(id && id !== "")fetchDetails();
		return ()=>{
			dispatch(removeSelectedProduct());
		}
	})


	return (
		<>
			<ProductWrapper>
				<ContainerFluid>
					<BreadCrumb item="Sneakers"/>
				</ContainerFluid>
				<Container>
					{/* Order: laptop:- 1, tablet:- 2, rest order will be 2 */}
					<ProductImages/> 
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
