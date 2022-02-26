import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import './TaskListItem.css'

export default class TaskListItem extends React.Component {

    render() {
        const {warning, done, onWarning, onDone, deleted} = this.props;
        let classNames = 'task-list-item d-flex justify-content-between';

        if (warning) {
            classNames += ' important';
        }
        if (done) {
            classNames += ' done';
        }
        return (
            <div className={classNames}>
                <span className='task-label'>{this.props.task}</span>
                <div className='icon-group d-flex'>
                    <span className='icon'><FontAwesomeIcon 
                    className='star ' 
                    icon={faStar} 
                    onClick={onWarning}/></span>

                    <span className='icon'><FontAwesomeIcon 
                    className='check ' 
                    icon={faCheck} 
                    onClick={onDone}/></span>

                    <span className='icon'><FontAwesomeIcon 
                    className='trash ' 
                    icon={faTrash} 
                    onClick={deleted}/></span>
                </div>
               
            </div>
        )
    }
}
