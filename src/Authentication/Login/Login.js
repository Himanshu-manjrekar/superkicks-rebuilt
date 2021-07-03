import React,{useState} from 'react';
import styled from 'styled-components';

const IndexLogin = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [allEntry, setAllEntry] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (email && password) {
			const newEntry = {id: new Date().getTime().toString(), email: email, password: password};

		setAllEntry([...allEntry,newEntry]);

		console.log(newEntry);

		setEmail("");
		setPassword("");
		}
		else {
			alert("plz Fill the Data")
		}
	}
	


	return (
		<Wrapper>
			<Header>Login</Header>
			<Form actiom="" onSubmit={handleSubmit}>
				<Email>
				<label htmlFor="Email" className="form-label">Username or email address <Span>*</Span></label>
 				<input type="email" id="Email" 
				 className="form-control" 
				 placeholder="" 
				 value={email}
				 onChange={(e)=>setEmail(e.target.value)}
				 autoComplete="off"/>
				</Email>
				<Password>
					<label htmlFor="Password" className="form-label">Password <Span>*</Span></label>
 					<input type="password" id="Password" 
					 className="form-control" 
					 placeholder="" 
					 value={password} 
					 onChange={(e)=>setPassword(e.target.value)}/>
				</Password>
				<Button type="submit">Log in</Button>
			</Form>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	width: 50%;
	padding-right: 5rem;
`
const Header = styled.h1`
	color: #131315;
	font-size: 28px;
	margin-bottom: 1rem;
	/* background-color: green; */
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
const Password = styled(Email)``

const Button = styled.button`
	padding: 0.5rem 0.7rem 0.5rem 0.7rem;
	color: #fff;
	background: #353535;
	border: none;
	&:hover {
		background: #0A0A0A;
	}
`
export default IndexLogin
