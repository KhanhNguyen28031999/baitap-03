import TodoFooter from "../../components/TodoFooter"
import TodoHeader from "../../components/TodoHeader"
import TodoList from "../../components/TodoHeader/TodoList"

function TodoPages() {
    return (
        <div className ="todo-pages">
            <TodoHeader />
            <TodoList />
            <TodoFooter />
        </div>
    )
}

export default TodoPages