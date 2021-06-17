import React from 'react'
import styled from 'styled-components'

const Images = ({src, id, title}) => {
	return (
		<>
			<ImageWrapper
				 src={src} alt={title} key={id} 
			/>
		</>
	)	
}
const ImageWrapper = styled.img`
	height: 28rem;
	width: 25rem;
	margin-bottom: 1.9rem;
`
export default Images

// <img src={src} alt={title} id={id} />