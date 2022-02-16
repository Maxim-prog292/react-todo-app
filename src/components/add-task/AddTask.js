import React from 'react'
import { Input, Button } from 'reactstrap'
import './AddTask.css'

export default class AddTask extends React.Component {
	render() {
		return (
			<form className='d-flex'>
				<Input  placeholder='Введите задачу'></Input>
				<Button outline>Добавить</Button>
			</form>
		)
	}
}
