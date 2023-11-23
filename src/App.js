import React, {useState} from 'react';

function App() {
    // Создаем состояние счетчика с помощью ф-ии setState(0) c начальным 0
    const [likes, setLikes] = useState(0);

    function increment() {
// Счетчик лайков меняем не на прямую, а через ф-ию setLikes, которая меняет состояние.
        setLikes(likes + 1);
        console.log(likes);
    }

    function decrement() {
        setLikes(likes - 1);
        console.log(likes);
    }

    return (
        // Добавим две кнопки и повесим на них слушатели события
        // Создадим над кнопками шаблон куда передадим переменную likes
        <div className="App">
            <h1>{likes}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
