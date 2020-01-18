import React from 'react';
import '../App.css'
import Task from './task'
import {connect} from 'react-redux'


class Todo extends React.Component{
	
	handleSubmit = (e) =>{
		e.preventDefault();
		var input = document.getElementById("task_input")
		var tasks = this.props.tasks
		tasks.push(input.value);
		input.value=""
		this.props.updateTasks(tasks)
	}
	
	deleteTask = (task) => {
		let tasks = this.props.tasks.filter((t)=>{
			return t!==task;
		})
		console.log("deleted")
		this.props.updateTasks(tasks)
	}
	
	render(){
		console.log("rendering todo")
		console.log(this.state)
		console.log(this.props)
		return(
			<div>
			<ul>
			{this.props.tasks.map((i,index)=>{
			return <div>{i}</div>
				// return <Task task={i} key ={index} deleteTask = {this.deleteTask.bind(this)} />
				})
			}
			</ul>
			<form onSubmit = {this.handleSubmit} >
			<input type="text" id="task_input" ></input>
			<button type="submit" >Add Task</button>
			</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateTasks : (tasks) => {
			dispatch({type:'updateTasks', task:tasks})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)