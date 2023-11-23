import React from 'react';

function App() {
    // Создадим счетчик лайков
    let likes = 0;

    // Ф-ия для добавления лайков и вывода их в консоль и эту ф-ию
    // передадим в слушатель события.
    // В консоли лайки добавляются, но не на странице браузера,
    // т.к. реакт не понимает что в какой то компоненте произошли изменения
    // и не перерисовывает ничего. Для этого надо ЯВНО сообщить что произошли изменения.
    // Для этого нужны состояния.
    function increment() {
        likes += 1;
        console.log(likes);
    }

    return (
        // Добавим две кнопки и повесим на них слушатели события
        // Создадим над кнопками шаблон куда передадим переменную likes
        <div className="App">
            <h1>{likes}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => likes -= 1}>Decrement</button>
        </div>
    );
}

export default App;
