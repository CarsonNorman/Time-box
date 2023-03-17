function TaskForm(props) {
    return ( 
        <form id='taskForm' >
            <label htmlFor="label">Task</label>
            <input type="text" name="label" id="label" value={props.task.label} onChange={props.handleChange}/>
            <input type="submit" value="add" onClick={props.handleAdd} />
        </form>
     );
}

export default TaskForm;