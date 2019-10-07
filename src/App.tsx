import React from 'react';
import { Todo } from './models/Todo';
import { TodoListComponent } from "./components/Todos/TodoList";
import { TodoFormComponent } from './components/Todos/TodoForm';

interface State {
  newTodo: Todo;
  todos: Todo[]
}

class App extends React.Component<{}, State> {
  state = {
    todos: [
      // {
      //   id: 1,
      //   name: "Task One",
      //   description: "One",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   name: "Task Two",
      //   description: "Two",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   name: "Task Three",
      //   description: "Three",
      //   completed: false
      // }
    ],
    newTodo: {
      id: 1,
      name: "",
      description: "",
      completed: false
    }
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <TodoFormComponent todo={this.state.newTodo} onInputChange={this.handleInputChange} addNewTodo={this.addNewTodo} removeCompleted={this.removeCompleted} />
        <TodoListComponent todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }

  private handleInputChange = (event: any) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        name: event.target.value
      }
    });
  };

  private addNewTodo = (event: any) => {
    event.preventDefault();

    this.setState(prevState => (
      {
        newTodo: {
          id: prevState.newTodo.id + 1,
          name: "",
          description: "",
          completed: false
        },
        todos: [...prevState.todos, prevState.newTodo]
      }
    ));
  };

  private toggleComplete = (id: number) => {
    this.setState(prevState => {
      prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return { todos: prevState.todos, newTodo: prevState.newTodo }
    });
  };

  private removeCompleted = (event: any) => {
    event.preventDefault();

    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.completed !== true),
        newTodo: prevState.newTodo
      }
    });
  }
}

export default App;
