import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { App } from './App.js';
import userListReducer from './features/userList.js';
import './styles/styles.scss';

const store = configureStore({
    reducer: {
        userList: userListReducer
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));