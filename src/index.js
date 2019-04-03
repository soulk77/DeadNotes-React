import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const userData = { 
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
}

ReactDOM.render(<App userData = {userData} />, document.getElementById('root'));

