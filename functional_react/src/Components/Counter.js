import React, { useState } from 'react';

function Counter() {
	const [num, setNum] = useState(0);

	const upNum = () => {
		setNum(num + 1);
	}

	const downNum = () => {
		setNum(num - 1);
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