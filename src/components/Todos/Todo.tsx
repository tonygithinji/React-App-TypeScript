import React from "react";
import { Todo } from "../../models/Todo";

interface Props {
    todo: Todo,
    toggleComplete: any
}

// export class TodoComponent extends React.Component<Props, {}> {
//     render(){
//         return(
//             <div>
//                 <p>{{  }}</p>
//             </div>
//         )
//     }
// }

export const TodoComponent: React.FC<Props> = ({ todo, toggleComplete }) => {
    let style = {};
    let completed = "";
    if (todo.completed) {
        style = { color: "#aaaaaa" };
        completed = "(Completed)"
    }
    return (
        <div>
            <p style={style}>{todo.name} {completed}<button onClick={event => { toggleComplete(todo.id) }}>Toggle Status</button></p>
        </div>
    )
};