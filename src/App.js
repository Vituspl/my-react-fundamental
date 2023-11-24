import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

// Корневой компонент App импортирует компонент Counter,
// и передает его в дом дерево ReactDOM
function App() {

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript - язык программирования
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default App;
