import Todo from "../../Todo"

function TodoList() {
    return (
        <div classname ="todo-list">
            <Todo content='Clean up bedroom'/>
            <Todo content='Buy some milk'/>
            <Todo content='Jogging'/>
            <Todo content='Learn React'/>
            <Todo content='Doing Excercises'/>
        </div>
    )
}

export default TodoList