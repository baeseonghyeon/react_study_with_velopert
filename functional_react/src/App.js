import React, { useRef, useState } from 'react';
// import Hello from './Components/Hello';
// import Wrapper from './Components/Wrapper';
// import Counter from './Components/Counter';
// import InputSample from './Components/InputSample';
import UserList from './Components/User/UserList'
import CreateUser from './Components/User/CreateUser'
import './App.scss'

function countActiveUsers(users) {
	console.log('활성 사용자 수를 세는 중...');
	return users.filter(user => user.active).lenght;
}

function App() {
	const [inputs, setInputs] = useState({ 
		username: '',
		email: '' 
	});

	// Input 내용변경
	const onChange = e => {
		const { name, value } = e.target;
		setInputs({
			...inputs,[name]: value
		});
	}

	// const name = '배성현';
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
	const onCreate = () => {
		const user = {
			id: nextId.current,
			username: inputs.username,
			email: inputs.email,
			active: false
		}
		setUsers([...users, user]);

		setInputs({
			username: '',
			email: ''
		});
		nextId.current += 1;
	};

	// User 배열 삭제
	const onRemove = id => {
		// id와 user.id 가 일치 하지 않는 것들만 users로 set (즉 클릭된 것만 빼고 표출)
		setUsers(users.filter(user => user.id !== id))
	}

	// User 배열 상태 업데이트
	const onToggle = id => {
		setUsers(
			users.map(user => 
				user.id === id ? { ...user, active: !user.active } : user
			)
		);
	};
	
	const count = countActiveUsers(users);
	
	return (
		<div className="App">

			{/* <Wrapper>
				<Hello name="배성현" color="blue"  isSpecial={true}/>
				<Hello color="red"/>
			</Wrapper> */}

			{/* <Counter/> */}

			{/* <InputSample/> */}
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
