import { useState } from "react";
import TaskForm from "./task-form";
import TaskList from "./task-list";

function Tasks() {
  const 
  today = new Date(),
    [tasks, setTasks] = useState([]),
    [task, setTask] = useState({label: ''}),
    [startTime, setStartTime] = useState('00:00'),
    [flag, setFlag] = useState(false),
    handleAdd = (e) => {
      e.preventDefault();
      setTasks([
        ...tasks,
        task,
      ]);
      setTask({label: ''});
    },
    handleStartTime = (e) =>{
      setStartTime(e.target.value)
    },
    handleChange = (e) => {
      setTask({...task, [e.target.name]: e.target.value});
    },
    handleDelete = (idx) => {
      let copy = tasks;
      copy.splice(idx, 1);
      console.log(copy);
      setTasks(copy);
      setFlag(!flag);
    };
  return (
    <>
      <TaskForm
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleStartTime={handleStartTime}
        task={task}
      />
      <TaskList tasks={tasks} handleDelete={handleDelete} startTime={startTime} />
    </>
  );
}

export default Tasks;
