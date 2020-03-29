import React, {Component} from 'react';
import Item from "./Item";

class ItemList extends Component {

    render() {
        return (
            <ul className="list-group my-3">
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                {
                    this.props.body.map((value, index) => {
                        return(
                            <Item key={index} title={value.fName} number={value.no} complete={value.complete}
                                  editItem={this.props.editItem}
                                  deleteItem={this.props.deleteItem}
                                  markComplete={this.props.markComplete}
                            />
                        )
                    })
                }
            </ul>
        );
    }
}

export default ItemList;