/** Выделим отдельно счетчик лайков в отдельный компонент
 * Функциональный компонент Counter.
 * Возвращает JSX сразу, без промежуточных ф-ий типа render() */
// сниппет для создания компонента rsc
import React, {useState} from 'react';

// Функциональный компонент Counter - это ф-ия Counter,
// которая меняет состояние компонента через ф-ию setCount().
const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
// Счетчик лайков меняем не на прямую, а через ф-ию setCount,
// которая меняет состояние компонента.
        setCount(count + 1);
        console.log(count);
    }

    function decrement() {
        setCount(count - 1);
        console.log(count);
    }

    // Возвращает JSX сразу, без промежуточных ф-ий типа render()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;