import React from 'react';
import { Todo } from '../../models/Todo';
import { TodoComponent } from "../Todos/Todo";

interface Props {
    todos: Todo[],
    toggleComplete: any
}

export const TodoListComponent: React.FC<Props> = ({ todos, toggleComplete }) => {
    return (
        <div>
            {todos.map((todo, id) => (
                <TodoComponent todo={todo} key={id} toggleComplete={toggleComplete} />
            ))}
        </div>
    )
};