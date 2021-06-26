import React from 'react'
import styled from 'styled-components'

const Store = () => {

	const ImagesStore = [
		{
			id: 1,
			src: "https://superkicks.in/wp-content/uploads/2021/06/MUMBAI-2.jpg",
			title: "Mumbai"
		},
		{
			id: 2,
			src: "https://superkicks.in/wp-content/uploads/2021/06/BENGALURU-1-1.jpg",
			title: "Bangaluru"
		},
		{
			id: 3,
			src: "https://superkicks.in/wp-content/uploads/2021/06/DELHI-2.jpg",
			title: "New Delhi"
		},
	]


	return (
		<>
		<CategoryWrapper >
			<div className="row">
				{
					ImagesStore.map((val)=> {
						return (
							<div className="col-lg-4 col-md-4" key={val.id}>
								<Header >
									<StoreImages
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
const StoreImages = styled.img`
	 height: 25rem;
	 margin-bottom: 2rem;
	 @media(max-width: 1024px) {
		 height: 19rem;
	 }
	 
`
export default Store
