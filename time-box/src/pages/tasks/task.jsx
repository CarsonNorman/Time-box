import { useState } from "react";
import TaskForm from "./task-form";
import TaskList from "./task-list";

function Tasks() {
  const 
  today = new Date(),
    [tasks, setTasks] = useState([]),
    [task, setTask] = useState({label: '', timeStart:'00:00', timeEnd: '00:00'}),
    [flag, setFlag] = useState(false),
    handleAdd = (e) => {
      e.preventDefault();
      setTasks([
        ...tasks,
        task,
      ]);
      setTask({label: '', timeStart: '00:00', timeEnd: '00:00'});
    },
    handleChange = (e) => {
      console.log(e.target.name, e.target.value)
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
        handleD
        task={task}
      />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </>
  );
}

export default Tasks;
