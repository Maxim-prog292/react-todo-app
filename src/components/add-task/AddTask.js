import React from 'react'
import { Input, Button } from 'reactstrap'
import './AddTask.css'

export default class AddTask extends React.Component {
	constructor(props){
        super(props);
        this.props = props;
    }
	render() {
		return (
			<form className='d-flex'>
				<Input  placeholder='Введите задачу'></Input>
				<Button outline onClick={() => this.props.onAddTask('Выйти на улицу')}>Добавить</Button>
			</form>
		)
	}
}
