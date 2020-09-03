import React from 'react';
import User from './Components/User';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {

	const user = {
		id: 0,
		username: 'baesh'
	}

	const users = (
		[
			{
				id: 0,
				username: 'baesh'
			},
			{
				id: 1,
				username: 'bsh0062'
			}
		]
	)

  return (
    <div className="App">
		<ErrorBoundary>
			{/* <User/> */}
    		<User user={user} users={users}/>
		</ErrorBoundary>
    </div>
  );
}

export default App;
