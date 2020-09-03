import React from 'react';

function User({ user, users, onToggle }) {
	// if (!user) {
	// 	return null
	// }

	// if (!user) return null;

	return (
		// <div>
		// 	<div>
		// 		<b>ID</b>: {user.id}
		// 	</div>
		// 	<div>
		// 		<b>Username</b>: {user.username}
		// 	</div>
		// </div>
		<ul>
			{users.map(item => (
				<li key={item.id} onClick={() => onToggle(item.id)}>
					{item.username}
				</li>
			))}
		</ul>
	);
}

User.defaultProps = {
	onToggle: () => {
		console.warn('onToggle is missing!');
	}
};

export default User;