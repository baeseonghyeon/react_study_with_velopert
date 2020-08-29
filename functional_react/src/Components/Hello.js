import React from 'react';

function Hello(props) {
	return (
		<div style={{ color: props.color}}>
			{/* { props.isSpecial ? <b>*</b> : null } */}
			{ props.isSpecial && <b>*</b> }
			{props.name}님 안녕하세요
		</div>
	);
}

Hello.defaultProps = {
	name : 'unknown'
}

export default Hello;