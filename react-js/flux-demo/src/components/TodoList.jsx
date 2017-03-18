import Todo from '../components/Todo';
import React, {Component} from 'react';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            {...todo}
                        />
                    )
                }
            </ul>
        )
    }
}
