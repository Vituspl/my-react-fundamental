/** Классовый компонент ClassCounter */
import React from 'react';

// Создаем класс с названием компонента ClassCounter и
// наследуемся от React.Component
class ClassCounter extends React.Component {
    // Состояние в классовом компоненте делается иначе чем у
    // Функциональных компонентов, здесь хуки использовать нельзя,
    // через конструктор и пропсы.
    constructor(props) {
        super(props);
        // Инициализируем состояние начальное - state
        this.state = {
            count: 0
        };
        // Надо забиндить this для ф-ий increment и decrement
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
// Поскольку ф-ии increment() и decrement() существуют вне контекста конструктора
// в котором находится объект state со счетчиком, нам надо забандить
// для них этот контекст this в конструкторе.
    increment() {
        // Вызываем ф-ию setState, которой передаем
        // измененное состояние счетчика (увеличиваем на 1)
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    // Классовые компоненты работают через ф-ию render(),
    // которая возвращает JSX
    render() {
        return (
            // Т.к. мы внутри класса, то что бы обратиться к свойствам
            // нам надо использовать this. И к счетчику надо обращаться
            // через его состояние
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassCounter;
