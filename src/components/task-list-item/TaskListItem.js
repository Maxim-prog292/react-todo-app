import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import './TaskListItem.css'

export default class TaskListItem extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            important: false,
            done: false
        };
        this.isImportant = this.isImportant.bind(this);
        this.isDone = this.isDone.bind(this);
    }
    isImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    isDone() {
        this.setState(({done}) => ({
            done: !done
        }))
    }
    render() {
        let classNames = 'task-list-item d-flex justify-content-between';

        if (this.state.important) {
            classNames += ' important';
        }
        if (this.state.done) {
            classNames += ' done';
        }
        return (
            <div className={classNames}>
                <span className='task-label'>{this.props.task}</span>
                <div className='icon-group d-flex'>
                    <span><FontAwesomeIcon 
                    className='star ' 
                    icon={faStar} 
                    onClick={this.isImportant}/></span>
                    <span><FontAwesomeIcon 
                    className='check ' 
                    icon={faCheck} 
                    onClick={this.isDone}/></span>
                </div>
               
            </div>
        )
    }
}
