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
  let time = props.startTime.split(':'),
  minutes = parseInt(time[1]),
  hours = parseInt(time[0])

  dataSource.forEach((item)=>{
    item.startTime = hours + ':' +( minutes < 10? '0'+minutes : minutes);
    if(minutes >= 35){
      item.endTime = (hours + 1) + ':' + '0'+(minutes -= 35)
    } else{
      item.endTime = hours + ':' + (minutes + 25)
    }
    if(minutes >= 30){
      hours === 12 || hours === 0? hours = 1 : hours += 1;
      minutes -=30;
    } else{
      minutes += 30
    }
    
  })
  

  return (
    <div >
      <h1>schedule for {day}</h1>

    
      {dataSource.map((task, idx) =>{
        return <h1 key={idx}>{task.label}, {task.startTime} - {task.endTime}</h1>
      })}
    </div>
  );
}



export default TaskList;