import React, {Component} from 'react';

class Item extends Component {

    render() {
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-6">
                <h6>{this.props.title}</h6>
                <div className="todo-icon">

                    <span className="mx-2 text-warning" data-toggle="modal" data-target="#editComponent"
                          onClick={(event)=>this.props.editItem({id:this.props.number})}>
                        <i className="fas fa-pen" />
                    </span>

                    <span className="mx-2 text-success"
                          onClick={(event)=>this.props.markComplete({id:this.props.number})}>
                        <i className="fas fa-check" />
                    </span>

                    <span className="mx-2 text-danger"
                          onClick={(event)=>this.props.deleteItem({id:this.props.number})}>
                        <i className="fas fa-trash" />
                    </span>

                </div>
            </li>
        );
    }
}

export default Item;