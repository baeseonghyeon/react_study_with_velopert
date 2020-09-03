import React, { useEffect, useContext } from 'react';
import { UserDispatch } from '../../App_reducer';

function ListItems(props){

	useEffect(() => {
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

	const dispatch = useContext(UserDispatch);

	return(
		<li style={style}>
			<input type="checkbox" 
				// onClick={() => props.onToggle(props.id)}
				onClick={() => {
					dispatch({ type: 'TOGGLE_USER', id: props.id });
				}}
			/> 
			<b>{props.name}</b><span>({props.email})</span>
			<button
				// onClick={() => props.onRemove(props.id)} 
				onClick={() => {
					dispatch({ type: 'REMOVE_USER', id: props.id });
				}}
			>삭제</button>
		</li>
	);
	
}

export default React.memo(ListItems);



