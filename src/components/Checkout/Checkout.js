import React from 'react';
import styled from 'styled-components';
import Stepper from '../stepper/Stepper'

const Checkout = () => {
	return (
		<Container>
			<Stepper checkval={1}/>
		</Container>
	)
}
const Container = styled.div`
	margin-top: 4.5rem;
	@media(max-width:1024px){
		margin-top:3rem;
	} 
`

export default Checkout
