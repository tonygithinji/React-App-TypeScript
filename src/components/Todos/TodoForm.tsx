import React from "react";
import { Todo } from "../../models/Todo";

interface Props {
    todo: Todo,
    onInputChange: any,
    addNewTodo: any,
    removeCompleted: any
}

export const TodoFormComponent: React.FC<Props> = ({ todo, onInputChange, addNewTodo, removeCompleted }) => (
    <form action="">
        <input type="text" name="todo" placeholder="Enter a todo" onChange={onInputChange} value={todo.name} />
        <button onClick={addNewTodo}>Add a Task</button>
        <button onClick={removeCompleted}>Remove Completed</button>
    </form>
);