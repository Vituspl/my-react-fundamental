import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

// Корневой компонент App импортирует компонент Counter,
// и передает его в дом дерево ReactDOM
function App() {

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
        </div>
    );
}

export default App;
