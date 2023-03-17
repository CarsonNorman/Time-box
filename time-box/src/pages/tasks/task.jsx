import { useState } from "react";
import TaskForm from "./task-form";
import TaskList from "./task-list";

function Tasks() {
  const 
  today = new Date(),
    todayDate = today.getDate(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth(),  
    [tasks, setTasks] = useState([]),
    [task, setTask] = useState({label: '', dateStart: today, dateEnd: today}),
    [flag, setFlag] = useState(false),
    handleAdd = (e) => {
      e.preventDefault();
      setTasks([
        ...tasks,
        task,
      ]);
      setTask({label: '', dateStart: today, dateEnd: today});
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
        handleD
        task={task}
      />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </>
  );
}

export default Tasks;
