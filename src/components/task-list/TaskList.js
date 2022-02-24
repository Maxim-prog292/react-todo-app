import React from 'react'
import './TaskList.css'
import TaskListItem from '../task-list-item'


export default class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        const tasks = this.props.tasks;
        const elements = tasks.map(({ task, id, warning, done }) => {
            return (
                <li className='list-group-item' key={id}>
                    <TaskListItem task={task} warning={warning} done={done} deleted={() => this.props.onDeleted(id)}/>
                </li>
            )
        })

        return (
            <ul
                className='task-list d-block list-group'
            >
                {elements}
            </ul>
        )
    }
}
