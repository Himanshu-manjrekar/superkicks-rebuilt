import React from 'react'
import Images from "./Images"
import styled from 'styled-components'

const Category = () => {


	const ImagesCat = [
		{
			id: 1,
			src: "https://superkicks.in/wp-content/uploads/2021/06/tile-4-850x1164.jpg",
			title: "Men"
		},
		{
			id: 2,
			src: "https://superkicks.in/wp-content/uploads/2021/06/tile-2-850x1164.jpg",
			title: "Women"
		},
		{
			id: 3,
			src: "https://superkicks.in/wp-content/uploads/2021/06/tile-1-850x1164.jpg",
			title: "Apparel"
		},
	]

	return (
		<>
		<CategoryWrapper >
			<div className="row">
				{
					ImagesCat.map((val)=> {
						return (
							<div className="col-md-4" key={val.id} >
								<Header >
									<Images
										key={val.id}
										src={val.src}
										title={val.title}
									/>
								</Header>
							</div>
						)
					})
				}
			</div>
		</CategoryWrapper>

		</>
	)
}
const CategoryWrapper = styled.div`
	margin: 1.5rem;
	/* background-color: red; */
`
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
export default Category


// {ImagesCat.map((val)=>{
// 	return (
// 		<div className="col-md-4" key={val.id}>
// 		<Images 
// 			src={val.src}
// 			title={val.title}
// 		/>
// 		</div>
		
// 	)
// })}