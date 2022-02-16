import React from 'react'
import './App.css'
import FilterPanel from '../filter-panel'
import TaskList from '../task-list'
import AddTask from '../add-task'

const taskArray = [
    {task: 'Lorem ipsum',
     id: 'nrt3u87',
     warning: false,
     done: false},
    {task: 'Lorem ipsum, ipsum',
     id: 'n4uihr3',
     warning: false,
     done: false},
    {task: 'Lorem ipsum, lorem',
     id: 'sdfr3t4',
     warning: false,
     done: false},
];


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div
                className='appBlock'
            >
                <FilterPanel />
                <TaskList tasks={taskArray} />
                <AddTask />
            </div>
        )
    }
}
