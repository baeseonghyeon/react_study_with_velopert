import React, { useState, useReducer } from 'react'
import axios from 'axios'

function reducer(state, action) {
	switch (action.type) {
		case 'LOADING':
			return {
				loading: true,
				data: null,
				error: null
			};
		case 'SUCESS':
			return {
				loading: false,
				data: action.data,
				error: null
			};
		case 'ERRPR':
			return {
				loading: false,
				data: null,
				error: action.error
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`)
	}
}

function User() {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);


	const fetchUsers = async () => {
		try {
			// 요청이 시작 할 때는 error 와 users 를 초기화
			setError(null);
			setUsers(null);
			// loading 상태를 true 로 변경
			setLoading(true);
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data) // 데이터는 response.data 안에 들어있음
		} catch (e) {
			setError(e);
		}
		setLoading(false);
	};

	useState(() => {
		fetchUsers();
	}, []);

	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!users) return null;
	return (
		<>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						{user.username} ({user.name}) 
					</li>
				))}
			</ul>
			<button onClick={fetchUsers}>다시 불러오기</button>
		</>
	);
}

export default User;