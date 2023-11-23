/** Выделим отдельно счетчик лайков в отдельный компонент */
// сниппет для создания компонента rsc
import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
// Счетчик лайков меняем не на прямую, а через ф-ию setLikes, которая меняет состояние.
        setCount(count + 1);
        console.log(count);
    }

    function decrement() {
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;