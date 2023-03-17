import { useState } from "react";

function TaskForm(props) {
    const
        [current, setCurrent] = useState(),
        [hours, setHours] = useState(),
        [minutes, setMinutes] = useState(),
        getCurrent = () =>{
            let
            today = new Date(),
            hours = today.getHours() === 12 ? 12 : today.getHours()%12,
            minutes = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes(),
            seconds = today.getSeconds() < 10 ? '0'+today.getSeconds() : today.getSeconds(),
            ampm = today.getHours() >= 12 ? 'PM' : 'AM'

            setMinutes(parseInt(minutes))
            setHours(hours)
            setCurrent(`${hours}:${minutes}:${seconds} ${ampm}`)
        }
        setTimeout(getCurrent, 500);


    return ( 
        <>
        <h1>currently {current}</h1>
        <form id='taskForm' >
            <label htmlFor="starting">Starting time</label>
            <select name="timeStart" id="starting" onChange={props.handleStartTime}>
                <option value={minutes >= 45? (hours + 1) + ':' + (minutes - 45): hours + ':' + (minutes + 15)}>{minutes >= 45? (hours + 1) + ':' + ((minutes - 45) > 10? minutes - 45 : '0'+(minutes-45)): hours + ':' + (minutes + 15)}</option>
                <option value={minutes >= 30? (hours + 1) + ':' + (minutes - 30): hours + ':' + (minutes + 30)} >{minutes >= 30? (hours + 1) + ':' + (minutes - 30): hours + ':' + (minutes + 30)}</option>
                <option value={(hours === 12|| hours === 0? 1 : hours + 1)+ ':' + minutes}>{(hours === 12|| hours === 0? 1 : hours + 1)+ ':' + (minutes < 10 ? '0'+minutes : minutes)}</option>
            </select>
            <label htmlFor="label">Task</label>
            <input type="text" name="label" id="label" value={props.task.label} onChange={props.handleChange}/>
            <input type="submit" value="add" onClick={props.handleAdd} />
        </form>
        </>
     );
}

export default TaskForm;