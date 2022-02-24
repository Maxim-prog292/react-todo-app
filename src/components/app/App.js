import React from 'react'
import './App.css'
import FilterPanel from '../filter-panel'
import TaskList from '../task-list'
import AddTask from '../add-task'


function makeid(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;

	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = { 
			taskArray: [
			{task: 'Погулять',
				id: 'nrt3u87',
				warning: false,
				done: false
			},
			{task: 'Попить',
				id: 'n4uihr3',
				warning: false,
				done: false
			},
			{task: 'Поесть',
				id: 'sdfr3t4',
				warning: false,
				done: false
			},
		]};
		this.deleted = this.deleted.bind(this);
		this.addTask = this.addTask.bind(this);
	}
	deleted(id){
		this.setState(({taskArray}) => {
			const index = taskArray.findIndex( item => item.id === id);
			const newTaskArray = [...taskArray.slice(0, index), ...taskArray.slice(index + 1)];

			return (
				{taskArray: newTaskArray}
			)
		})
	}
	addTask(task) {
		const newId = makeid(7);
		const newTask = {
			task: task,
			id: newId,
			warning: false,
			done: false};

		this.setState(({taskArray}) => {
			const newTaskArray = [...taskArray, newTask];

			return (
					{taskArray: newTaskArray}
			)
		})
	}
	render() {
		return (
			<div
				className='appBlock'
			>
				<FilterPanel />
				
				<TaskList 
				tasks={this.state.taskArray} 
				onDeleted={this.deleted} />

				<AddTask 
				onAddTask={this.addTask}/>
			</div>
		)
	}
}
