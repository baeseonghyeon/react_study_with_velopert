import React, { useState, useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

function Counter() {
	// const [num, setNum] = useState(0);

// state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, dispatch 는 액션을 발생시키는 함수라고 이해하시면 됩니다. 이 함수는 다음과 같이 사용합니다: dispatch({ type: 'INCREMENT' }).
	const [num, dispatch] = useReducer(reducer, 0);


	const upNum = () => {
		// setNum(num + 1);
		dispatch({ type: 'INCREMENT'})
	}

	const downNum = () => {
		// setNum(num - 1);
		dispatch({ type: 'DECREMENT'})
	}
	
	return (
		<div>
			<h1>{num}</h1>
			<button onClick={ upNum }>+1</button>
			<button onClick= { downNum }>-1</button>
		</div>
	);
}

export default Counter;