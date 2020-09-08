import { combineReducers } from 'redux';
// import counter from './counter';
import counter, { counterSaga } from './counterSaga';
// import posts from './posts';
import posts, { postsSaga } from './postsSaga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter, posts });
export function* rootSaga() {
    yield all([counterSaga(), postsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;