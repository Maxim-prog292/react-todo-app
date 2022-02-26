import React from 'react'
import { Button } from 'reactstrap'
import './FilterPanel.css'


export default class FilterPanel extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'done', label: 'Выполненные'},
            {name: 'warning', label: 'Важные'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clas = active ? 'btn-success' : 'btn-outline-secondary';
            return (
                <button 
                key={name} 
                className={`btn ${clas}`}
                onClick={() => this.props.filterTask(name)}
                >{label}</button>
            )
        })
        return (
            <div
                className='FilterPanel btn-group'
            >
                {buttons}
            </div>
        )
    }
}
