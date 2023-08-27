import TaskData from "../../data"

function TodoFooter() {
    const count = TaskData.length;

    return (
        <div className="todo-footer">
            <span>{count} task left !</span>
            <span id = "mindx-todolist">MindX todoList</span>        
        </div>
    );
}

export default TodoFooter