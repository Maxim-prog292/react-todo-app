import React from 'react'
import { Input, Button } from 'reactstrap'
import './AddTask.css'

export default class AddTask extends React.Component {
	constructor(props){
        super(props);
        this.props = props;
		this.state = {
			value: ''
		}
		this.inputTask = this.inputTask.bind(this);
		this.onAddTask = this.onAddTask.bind(this);
    }
	onAddTask(e) {
		e.preventDefault()
		this.props.onAddTask(this.state.value)
		this.setState({
			value: ''
		})
	}
	inputTask(e) {
		let value = e.target.value;
		this.setState({
			value: value
		})
	}
	render() {
		return (
			<form 
			className='d-flex' 
			onSubmit={this.onAddTask}>
				<Input 
				placeholder='Введите задачу' 
				onChange={this.inputTask}
				value={this.state.value}></Input>
				<Button 
				outline 
				>Добавить</Button>
			</form>
		)
	}
}
