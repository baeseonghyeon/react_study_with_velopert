import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import './exercise';

/* 리덕스 스토어 */
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성
// console.log(store.getState()); // 스토어 상태 확인

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
