import React from 'react';
import './App.css'
import { BrowserRouter, Route, Link, Navlink } from 'react-router-dom'
import Home from './components/homeTasks'
import Work from './components/workTasks'
import Todo from './components/todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> To-Do </h1>
		<Todo />
		<BrowserRouter>
		<div>
		<Link style={{margin:5+'px'}} to='/work'>Work</Link>
		<Link style={{margin:5+'px'}} to='/home'>Home</Link>
		</div>
		<Route exact path='/home' component={Home}/>
		<Route exact path='/work' component={Work}/>
		</BrowserRouter>
      </header>
	  
    </div>
  );
}

export default App;
