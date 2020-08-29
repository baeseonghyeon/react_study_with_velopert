import React, { useState, useRef } from 'react';

function InputSample() {
	const [text, setText] = useState({
		name: '',
		nickname: ''
	});
	const nameInput = useRef();

	const { name, nickname } = text;

	const onChange = (e) => {
		// setText(e.target.value);
		const { value, name } = e.target;
		setText({
			...text,
			[name]: value
		});
	};

	const onReset = () => {
		// setText('');
		setText({
			name: '',
			nickname: ''
		});
		nameInput.current.focus();
	};

	return (
		<div>
			<input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
			<input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>

			{/* <input
				onChange={onChange}
			/> */}

			<button onClick={onReset}>초기화</button>
			<div>
				<b>값:</b>
				{name} {nickname}
			</div>
		</div>
	);
}

export default InputSample;