import React from 'react';
import styled from 'styled-components';
import BreadCrumb from '../components/Navbar/BreadCrumb';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';

const MyAccount = () => {
	return (
		<>
		<PageWrapper>
			<ContainerFluid>
				<BreadCrumb item="My account"/>
			</ContainerFluid>
			<Container>
				<Header>My account</Header>
				<Notice>If you placed an order on the old website, you can access your order history <NoticeSpan>here</NoticeSpan>.</Notice>
				<AuthWrapper>
					<Login />
					<Register />
				</AuthWrapper>
			</Container>
		</PageWrapper>
			
		</>
	)
}


const PageWrapper = styled.div`
	margin-top: 6rem;
	@media(max-width:1024px){
		margin-top:4rem;
	} 
`
const ContainerFluid = styled.div`
	padding: 0 2.5rem 0 2.5rem;

`
const Container = styled.div`
	padding: 0 2.5rem 0 2.5rem;
`

const Header = styled.p`
	font-size: 2.5rem;
	color: #222;
	margin-bottom: 2rem;
`
const Notice = styled.p`
	color: #222;
	margin-bottom: 1.8rem;
`
const NoticeSpan = styled.a`
	color: #222;
`
const AuthWrapper = styled.div`
	width: 100%;
	display: flex;
`
export default MyAccount
