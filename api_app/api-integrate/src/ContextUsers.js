import React, { createContext, useReducer, useContext } from 'react';
// import axios from 'axios';

import { createAsyncDispatcher, createAsyncHandler, initialAsyncState } from './asyncActionUtils';
import * as api from './api';



// 기본 상태
const initialState = {
    users: initialAsyncState,
    user: initialAsyncState
};

// // 기본 상태
// const initialState = {
//     users: {
//         loading: false,
//         data: null,
//         error: null
//     },
//     user: {
//         loading: false,
//         data: null,
//         error: null
//     }
// };

// // 로딩중일 때 상태
// const loadingState = {
//     loading: true,
//     data: null,
//     error: null
// }

// // 성공했을 때 상태
// const success = data => ({
//     loading: false,
//     data,
//     error: null
// });

// // 실패했을 때
// const error = error => ({
//     loading: false,
//     data: null,
//     error: error
// });

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// 위에서 만든 객체와 유틸 함수들을 사용한 리듀서
function usersReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

// // 위에서 만든 객체와 유틸 함수들을 사용한 리듀서
// function usersReducer(state, action) {
//     switch (action.type) {
//         case 'GET_USERS':
//             return {
//                 ...state,
//                 users: loadingState
//             };
//         case 'GET_USERS_SUCCESS':
//             return {
//                 ...state,
//                 users: success(action.data)
//             };
//         case 'GET_USERS_ERROR':
//             return {
//                 ...state,
//                 users: error(action.error)
//             };
//         case 'GET_USER':
//             return {
//                 ...state,
//                 user: loadingState
//             };
//         case 'GET_USER_SUCCESS':
//             return {
//                 ...state,
//                 user: success(action.data)
//             };
//         case 'GET_USER_ERROR':
//             return {
//                 ...state,
//                 user: error(action.error)
//             };    
//         default:
//             throw new Error(`Unhanded action type: ${action.type}`);
//     }
// }

// State Context
const UsersStateContext = createContext(null);
// Dispatch Context
const UsersDispatchContext = createContext(null);

// Context를 Provider로 감싸주는 컴포넌트
export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

// State Custom Hook
export function useUsersState() {
    const state = useContext(UsersStateContext);
    if (!state) {
        throw new Error('Cannot find UsersProvider');
    }
    return state;
}

// Dispatch Custom Hook
export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
      throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
}

// API

// // Users API
// export async function getUsers(dispatch) {
//     dispatch({ type: 'GET_USERS'});
//     try {
//         const res = await axios.get(
//             'https://jsonplaceholder.typicode.com/users'
//         );
//         dispatch({ type: 'GET_USERS_SUCCESS', data: res.data})
//     } catch (e) {
//         dispatch({ type: 'GET_USERS_ERROR', error: e });
//     }
// }

// // User API
// export async function getUser(dispatch, id) {
//     dispatch({ type: 'GET_USER'});
//     try {
//         const res = await axios.get(
//             `https://jsonplaceholder.typicode.com/users/${id}`
//         );
//         dispatch({ type: 'GET_USER_SUCCESS', data: res.data})
//     } catch (e) {
//         dispatch({ type: 'GET_USER_ERROR', error: e });   
//     }
// }

// Users API
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
// User API
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);