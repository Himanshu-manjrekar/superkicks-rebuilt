import React from 'react';
import styled from 'styled-components';

const CheckBox = ({sizes}) => {
	return (
		<>
			<Controls className="form-check">
  						<Input className="form-check-input" type="checkbox" value="checkbox" id="defaultCheck1"/>
  						<Label className="form-check-label" htmlfor="defaultCheck1">
							{sizes}
  						</Label>
					</Controls>
		</>
	)
}
const Controls = styled.div`
	margin-bottom: .8rem;
	
`
const Input = styled.input`
	height: 0.8rem;
	width: 0.8rem;
	margin-top: 0.3rem;
`

const Label = styled.label`
	color: #777;
	font-size: 13px;
	margin-left: 0.8rem;

`
export default CheckBox
