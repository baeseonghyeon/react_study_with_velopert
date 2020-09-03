import React from "react";
import { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreat from "./components/TodoCreate";

// Global Style
const GlobalStyle = createGlobalStyle`
	body {
		background: #e9ecef;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

function App() {
  return (
    <>
      	<GlobalStyle />
      	<TodoTemplate>
    		<TodoHead />
			<TodoList />
			<TodoCreat />
      	</TodoTemplate>
    </>
  );
}

export default App;
