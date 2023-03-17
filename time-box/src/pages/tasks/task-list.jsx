import { useState } from "react"

function TaskList(props) {
  const
  [day, setDay] = useState(),
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dataSource = props.tasks

  const getDay = () =>{
    let
    today = new Date(),
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    setDay(days[today.getDay()])
  }
  setTimeout(getDay, 500);

  return (
    <div >
      <h1>schedule for {day}</h1>
      {dataSource.map((task, idx) =>{
        return <h1 key={idx}>{task.label}, {task.timeStart}</h1>
      })}
    </div>
  );
}



export default TaskList;