import React from 'react';
// import Users from './Users';
// import Users from './UsersReducer';
// import Users from './UsersCustomHook';
// import Users from './UsersUseAsync';

import Users from './UsersContext';
import { UsersProvider } from './ContextUsers';

function App() {
    return (
        <div className="App">
            <UsersProvider>
                <Users/>
            </UsersProvider>
        </div>
    );
}

export default App;
