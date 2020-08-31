import React, { useRef, useState, useMemo, useCallback } from 'react';

import Hello from './Components/Hello';
import Wrapper from './Components/Wrapper';
import Counter from './Components/Counter';
import InputSample from './Components/InputSample';
import UserList from './Components/User/UserList'
import CreateUser from './Components/User/CreateUser'
import './App.scss'

function countActiveUsers(users) {
	console.log('활성 사용자 수를 세는 중...');
	return users.filter(user => user.active).length;
}

function App() {

	// const name = '배성현';

	const [inputs, setInputs] = useState({ 
		username: '',
		email: '' 
	});

	const { username, email } = inputs;

	// Input 내용변경
	const onChange = useCallback(e => {
		const { name, value } = e.target;
		// setInputs({
		// 	...inputs,[name]: value
		// });
		setInputs(inputs => ({
			...inputs,
			[name]: value
		}));
	}, []);

	const [users, setUsers] = useState([
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
			active: false
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
			active: false
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
			active: false
		}
	]);

	const nextId = useRef(4);

	// 새로운 User 배열 생성
	const onCreate = useCallback(() => {
		const user = {
			id: nextId.current,
			username: inputs.username,
			email: inputs.email,
			active: false
		}
		// setUsers([...users, user]);
		setUsers(users => users.concat(user));

		setInputs({
			username: '',
			email: ''
		});
		nextId.current += 1;
	}, [username, email]);

	// User 배열 삭제
	const onRemove = useCallback(id => {
		// id와 user.id 가 일치 하지 않는 것들만 users로 set (즉 클릭된 것만 빼고 표출)
		setUsers(users => users.filter(user => user.id !== id))
	}, []);
		// 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함
		// 바로 deps 에서 users 를 지우고, 함수들에서 현재 useState 로 관리하는 users 를 참조하지 않게 하여 최적화


	// User 배열 상태 업데이트
	const onToggle = useCallback(id => {
		setUsers(users =>
			users.map(user => 
				user.id === id ? { ...user, active: !user.active } : user
			)
		);
	}, []);
	
	const count = useMemo(() => countActiveUsers(users), [users]);
	
	return (
		<div className="App">

		{/* component, props, 조건부 렌더 */}
			{/* 
			<Wrapper>
				<Hello name="배성현" color="blue"  isSpecial={true}/>
				<Hello color="red"/>
			</Wrapper><hr></hr> 
			*/}

		{/* useState 컴포넌트 값 관리, useReducer */}
			{/* <Counter/><hr></hr> */}

		{/* input 상태 관리 */}
			{/* <InputSample/><hr></hr> */}

		{/* useRef, 배열 렌더, 배열 항목 추가-제거-수정, useEffect, useMemo, useCallback, React.memo */}
			<CreateUser
				username={inputs.username}
				email={inputs.email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
			<div>활성사용자 수 : {count}</div>
		</div>
	);
}

export default App;
