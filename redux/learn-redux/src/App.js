import React from 'react';
// import CounterContainer from './containers/CounterContainer';
import CounterContainer from './containers/CounterContainerConnect';
// import TodosContainer from './containers/TodosContainer';
import TodosContainer from './containers/TodosContainerConnect';


function App() {
    return (
        <div className="App">
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    );
}

export default App;
