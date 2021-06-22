import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadCrumb = () => {
	return (
		<>
		{/* <nav aria-label="breadcrumb">
 				<ol className="breadcrumb">
    				<li className="breadcrumb-item"><Link to="/">Home</Link></li>
    				<li className="breadcrumb-item active" aria-current="page">Library</li>
  				</ol>
		</nav> */}
		<Breadcrumb>
			<BreadcrumbOl>
				<Breadcrumbitem><Link to="/">Home</Link></Breadcrumbitem>
				<BreadcrumbitemActive>New Arrivals</BreadcrumbitemActive>
			</BreadcrumbOl>
		</Breadcrumb>
		</>
	)
}

const Breadcrumb = styled.nav`

`
const BreadcrumbOl = styled.ol`
	padding: 0;
	display: flex;
	align-items: center;
	
	@media(max-width: 1024px){
		align-items: center;
	}

`
const Breadcrumbitem = styled.li`
	
	
	a {
		text-decoration: none;
		color: #000;
		font-size: 0.725rem;
		@media(max-width: 1024px){
			font-size: 0.7rem;
		}
	}
	&::after {
		content: "/";
		margin: 0 6px 0 6px;
		color: #999;
		font-size: 0.725rem;
		@media(max-width: 1024px){
			font-size: 0.7rem;
		}
	}
`
const BreadcrumbitemActive = styled.li`
	color: #999;
	font-size: 0.725rem;
	margin-top: 2px;
	@media(max-width: 1024px){
			font-size: 0.7rem;
	}
`
export default BreadCrumb
