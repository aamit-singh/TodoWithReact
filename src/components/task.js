import React from 'react';


class Task extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			textDeco : "",
			done : false
		}
	}
	handleClick = (e)=>{
		if(!this.state.done){
			this.setState({
				done : true,
				textDeco: "line-through"
			})
		}
		else{
			var deleteTask = this.props.deleteTask
			deleteTask(this.props.task)
		}
	}
	
	render(){
		return(
			<div style={{textDecoration : this.state.textDeco}} onClick = {this.handleClick} >
				{this.props.task}
			</div>
		)
	}
}

export default Task