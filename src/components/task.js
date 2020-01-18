import React from 'react';
import {connect} from 'react-redux'

class Task extends React.Component{
	
	handleClick = (e)=>{
		if(!this.state.done){
			console.log(this.props)
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

const mapStateToProps = (state) => {
	return {
		tasks: state.done
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateDones : (dones) => {
			dispatch({type:'updateDones', dones:dones})
		}
	}
}

export default connect(mapStateToProps)(Task)