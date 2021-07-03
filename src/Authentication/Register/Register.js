import React, {useState} from 'react';
import styled from 'styled-components';
import CheckBox from '../../components/Filter/CheckBox';

const Register = () => {
	const [email, setEmail] = useState("");
	const [allEntry, setAllEntry] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (email) {
			const newEntry = {id: new Date().getTime().toString(), email: email};

		setAllEntry([...allEntry,newEntry]);

		console.log(newEntry);

		setEmail("");
		}
		else {
			alert("plz Fill the Data")
		}
	}
	return (
		<Wrapper>
			<Header>Register</Header>
			<Form actiom="" onSubmit={handleSubmit}>
				<Email>
				<label htmlFor="Email" className="form-label">Email address <Span>*</Span></label>
 				<input type="email" id="Email" 
				 className="form-control" 
				 placeholder="" 
				 value={email}
				 onChange={(e)=>setEmail(e.target.value)}
				 autoComplete="off"/>
				</Email>
				<P>A password will be sent to your email address.</P>
				<CheckBox sizes="Subscribe to our newsletter"/>
				<P>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</P>
				<Button type="submit">Register</Button>
				
			</Form>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	width: 50%;
`
const Header = styled.h1`
	color: #131315;
	font-size: 28px;
	margin-bottom: 1rem;
`
const Form = styled.form`
	padding-top: 1rem;
`
const Email = styled.div`
	margin-bottom: 1rem;
`
const Span = styled.span`
	color: #ff0000;
	font-size: 15px;
`
const P = styled.p`

`

const Button = styled.button`
	padding: 0.5rem 0.7rem 0.5rem 0.7rem;
	color: #fff;
	background: #353535;
	border: none;
	&:hover {
		background: #0A0A0A;
	}
`
export default Register
