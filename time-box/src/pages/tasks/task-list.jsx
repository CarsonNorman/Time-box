
function TaskList(props) {

  const 
    dataSource = props.tasks

  return (
    <div >
      {dataSource.map((task, idx) =>{
        return <h1 key={idx}>{task.label}, {task.dateStart.getHours()}:{task.dateStart.getMinutes()}</h1>
      })}
    </div>
  );
}



export default TaskList;