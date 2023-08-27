function Todo(props) {
    return (
        <div className ="todo">    
            <input type ="checkbox"></input>
            <label>
                {props.content}
            </label>
            
        </div>
    )
    
}
export default Todo