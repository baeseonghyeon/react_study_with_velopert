import React, { useEffect } from 'react';
import ListItems from './ListItems'

function UserList(props) {

	useEffect(() => {
		console.log('컴포넌트가 화면에 나타남');
		return () => {
		  console.log('컴포넌트가 화면에서 사라짐');
		};
	  }, []);
	
	// const users = [
	// 	{
	// 	id: 1,
	// 	username: 'velopert',
	// 	email: 'public.velopert@gmail.com'
	// 	},
	// 	{
	// 	id: 2,
	// 	username: 'tester',
	// 	email: 'tester@example.com'
	// 	},
	// 	{
	// 	id: 3,
	// 	username: 'liz',
	// 	email: 'liz@example.com'
	// 	}
	// ];

	return (
		<div>
			<ul>
			{
				props.users.map((user, idx)=>{
					return (
						<ListItems
							key={idx}
							id={user.id}
							name={user.username}
							email={user.email}
							active={user.active}
							onRemove={props.onRemove}
							onToggle={props.onToggle}
						/>
					)
				})
			}
			</ul>
		</div>
	);
}

export default UserList;