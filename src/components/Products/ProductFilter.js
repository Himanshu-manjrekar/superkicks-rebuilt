import React from 'react'
import styled from 'styled-components';

const ProductFilter = () => {
	return (
		<Filter>
			<h2 >filter</h2>
		</Filter>
	)
}
const Filter = styled.div`
	width: 20%;
	@media(max-width:768px){
		display: none;
	}
`

export default ProductFilter
