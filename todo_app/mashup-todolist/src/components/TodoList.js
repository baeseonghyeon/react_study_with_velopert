import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";

import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 48px;
	overflow-y: auto;

`;

// const TodoLists = [
// 	{
// 		text: '프로젝트 생성하기',
// 		done: true
// 	},
// 	{
// 		text:'컴포넌트 스타일링 하기',
// 		done: true
// 	},
// 	{
// 		text:'Context 만들기',
// 		done: false
// 	},
// 	{
// 		text:'기능 구현하기',
// 		done: false
// 	}		
// ];


function TodoList() {
	const todos = useTodoState();

	return (
		<TodoListBlock>
			{todos.map(todo => (
				<TodoItem 
					key={todo.id}
					id={todo.id}	
					text={todo.text} 
					done={todo.done} 
				/>
			))}
		</TodoListBlock>
	);
}

export default TodoList;