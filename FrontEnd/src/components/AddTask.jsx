import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import Dropdown from './dropdown'
import '../componentCSS/AddTask.css'
export default function AddTask() {
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would handle your form submission (e.g., sending data to a server).
    // After handling the submission, redirect to the '/dashboard' route:
    navigate('/dashboard');
  };
  return (
    <>
    <Navbar/>
    <form className='addTaskForm'  onSubmit={handleSubmit}>
        <fieldset className='fieldsetaddtask'>
        <legend>Add Task</legend>
        
        <div className='divdrop'><Dropdown/></div>
        
        <label className='inputaddtask' for="taskname">Task Name:</label>
        <input type="text" id="name" className="taskname"/><br/><br/>
        
        <label className='inputaddtask' for="email">Description:</label>
        <input type="textarea" id="Description" className="Description"/><br/><br/><br/>
        
        <label className='inputaddtask' for="birthday">Deadline:</label>
        <input type="date" id="birthday" className="deadline"/><br/><br/>

        <label className='inputaddtask'>Set Priority:</label><br/>

        <input type="radio" id="basic" className="inputaddtask" name='priority' value="High"/>
        <label for="High">High</label>
    
        <input type="radio" id="standard" className="priority" name='priority' value="Medium"/>
        <label for="Medium">Medium</label>
    
        <input type="radio" id="premium" className="priority" name='priority' value="Low" />
        <label for="Low">Low</label><br/><br/>

        <input className='addtasksubmit' type="submit" value="Submit"/>
        </fieldset>
    </form>
    </>
  )
}
