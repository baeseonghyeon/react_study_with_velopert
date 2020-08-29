import React, { useEffect } from 'react'

function ListItems(props){

	useEffect(() => {
	// 	console.log(props.name);
	// });	
		console.log('props.name 값이 설정됨');
		console.log(props.name);
		return () => {
			console.log('props.name이 바뀌기 전..');
			console.log(props.name);	
		}
	}, [props]);

	const style = {
		textDecoration: props.active && 'line-through'
	}

	return(
		<li style={style}><input type="checkbox" onClick={() => props.onToggle(props.id)}/> <b>{props.name}</b> <span>({props.email})</span><button onClick={() => props.onRemove(props.id)}>삭제</button></li>
	);
	
}

export default ListItems;



