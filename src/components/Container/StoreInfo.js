import React from 'react';
import styled from 'styled-components';
import { BiMapAlt } from 'react-icons/bi';
import { VscLock } from "react-icons/vsc"

const StoreInfo = () => {
	return (
		<>
		<StoreInfoWrap>
		<div className="container" >
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<Wrapper>
						<Map/>
						<Shipping>
							<Header>India-wide Shipping</Header>
							<SubHeader>Average time: 4-6 days</SubHeader>
						</Shipping>
					</Wrapper>
				</div>
				<div className="col-lg-6 col-md-6">
				<Wrapper>
						<Lock/>
						<Shipping>
							<Header>100% Secure Checkout</Header>
							<SubHeader>UPI / Debit Card / Credit Card/ Net Banking</SubHeader>
						</Shipping>
					</Wrapper>
				</div>
			</div>
		</div>	
		</StoreInfoWrap>
		</>
	)
}
const StoreInfoWrap = styled.div`
	border-top: 0.5px solid #eee;
	margin-top: 1rem;
	padding-top: 2.5rem;
`

const Wrapper = styled.div`
	display: flex;
	align-items:center;
	margin-bottom: 2rem;
`

const Map = styled(BiMapAlt)`
	font-size: 1.5rem;
	margin-right: 1rem;
	color:#999;
`
const Shipping = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
		
`
const Header = styled.h5`
	font-weight: 600;
	color: black;
	font-size: 1rem;
	margin:0;
	padding: 0;
`
const SubHeader = styled.p`
	color: #777;
	font-size: 0.8rem;
	margin:0;
	padding: 0;
`
const Lock = styled(VscLock)`
	font-size: 1.5rem;
	margin-right: 1rem;
	color:#999;
`
export default StoreInfo
