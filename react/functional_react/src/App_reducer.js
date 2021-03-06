import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import './App.scss'

import UserList from './Components/User/UserList'
import CreateUser from './Components/User/CreateUser'
import useInputs from './Hooks/useInputs';

import produce from 'immer';

function countActiveUsers(users) {
	console.log('활성 사용자 수를 세는 중...');
	return users.filter(user => user.active).length;
}

const initialState = {
	inputs: {
		username: '',
		email: ''
	},
	users: [
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
	]
};

function reducer(state, action) {
	switch (action.type) {
// Custom Hooks로 대체
		// case 'CHANGE_INPUT':
		// 	return {
		// 		...state,
		// 		inputs: {
		// 			...state.inputs,
		// 			[action.name]: action.value
		// 		}
		// 	};

		// case 'CREATE_USER':
		// 	return {
		// 		inputs: initialState.inputs,
		// 		users: state.users.concat(action.user)
		// 	};
		// case 'TOGGLE_USER':
		// 	return {
		// 		...state,
		// 		users: state.users.map(user =>
		// 		user.id === action.id ? { ...user, active: !user.active } : user
		// 		)
		// 	};
		// case 'REMOVE_USER':
		// 	return {
		// 		...state,
		// 		users: state.users.filter(user => user.id !== action.id)
		// 	};
// Immer 라이브러리
	// 오히려 코드가 복잡해질 수 있거나, 속도가 저하될 수 있음, 상황에 따라 사용하기
		case 'CREATE_USER':
			return produce(state, draft => {
				draft.users.push(action.user);
			});
		case 'TOGGLE_USER':
			return produce(state, draft => {
				const user = draft.users.find(user => user.id === action.id);
				user.active = !user.active;
			});
		case 'REMOVE_USER':
			return produce(state, draft => {
				const index = draft.users.findIndex(user => user.id === action.id);
				draft.users.splice(index, 1);
			});	
		default:
			return state;
	}
}

// Context API
	// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {

	const [state, dispatch] = useReducer(reducer, initialState)
	// const nextId = useRef(4);

	const { users } = state;

// // Custom Hooks
// 	const [{ username, email }, onChange, onReset ] = useInputs({
// 		username: '',
// 		email: ''
// 	});

	// const { username, email } = state.inputs;

	// // Input Change
	// const onChange = useCallback(e => {
	// 	const { name, value } = e.target;
	// 	dispatch({
	// 		type: 'CHANGE_INPUT',
	// 		name,
	// 		value
	// 	});
	// }, []);

	// // List Create
	// const onCreate = useCallback(() => {
	// 	dispatch({
	// 	  type: 'CREATE_USER',
	// 	  user: {
	// 		id: nextId.current,
	// 		username,
	// 		email
	// 	  }
	// 	});
	// 	onReset();
	// 	nextId.current += 1;
	//   }, [username, email]);

	// // List Update 
	// const onToggle = useCallback(id => {
	// dispatch({
	// 	type: 'TOGGLE_USER',
	// 	id
	// });
	// }, []);

	// // List Remove
	// const onRemove = useCallback(id => {
	// dispatch({
	// 	type: 'REMOVE_USER',
	// 	id
	// });
	// }, []);

	// Count Active
	const count = useMemo(() => countActiveUsers(users), [users]);

	return (
		<div className="App">
		<UserDispatch.Provider value={dispatch}>
			<CreateUser
				// username={username}
				// email = {email}
				// onChange={onChange}
				// onCreate={onCreate}
			/>
			{/* <UserList users={users} onToggle={onToggle} onRemove={onRemove}/> */}
			<UserList users={users}/>
			<div>활성사용자 수 : {count}</div>
		</UserDispatch.Provider>	
		</div>
	);
}

export default App;
