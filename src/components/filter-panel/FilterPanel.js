import React from 'react'
import { Button } from 'reactstrap'
import './FilterPanel.css'


export default class FilterPanel extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div
                className='FilterPanel btn-group'
            >
                <Button 
                    color="primary"
                    outline>
                    Все
                </Button>
                <Button 
                    color="success"
                    outline>
                    Выполненные
                </Button>
                <Button 
                    color="warning"
                    outline>
                    Важные
                </Button>
            </div>
        )
    }
}
