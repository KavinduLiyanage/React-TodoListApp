import React, {Component} from 'react';
import InputItem from "./components/InputItem";
import ItemList from "./components/ItemList";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    state = {
        items:[],
        id:1,
        item:'',
        editItem:false
    };

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: this.state.id++,
            title: this.state.item
        };

        const updatedItems = [...this.state.items,newItem];

        this.setState({
            items:updatedItems,
            item:'',
            id:this.state.id,
            editItem:false
        });
    };

/*    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    };
*/
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <InputItem
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit} />
              <ItemList items={this.state.items} /*handleDelete={this.handleDelete()}*/ />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
