import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Файл index.js с помощью ReactDOM отрисовывает компоненты из
// корневого компонента App в документе браузера с id => root
ReactDOM.render(
    <App />,
    document.getElementById('root')
);


