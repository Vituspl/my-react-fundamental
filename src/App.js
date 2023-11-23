import React, {useState} from 'react';

function App() {
    // Создаем состояние счетчика с помощью ф-ии setState(0) c начальным 0
    const [likes, setLikes] = useState(0);
    // Сделаем еще одно состояние для инпута
    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');

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
        // Добавим шаблон для инпута передадим переменную value
        // Создадим инпут со слушателем события onChange()
        <div className="App">
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
// Теперь когда пишем в инпут, это сразу отображается в заголовке.
// Т.е. меняем значение компонента value, изменяя его состояния через setValue.
// Это называется управляемый компонент.
export default App;
