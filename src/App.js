import React, {Component} from 'react';
import InputItem from "./components/InputItem";
import ItemList from "./components/ItemList";

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";

class App extends Component{
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <InputItem />
              <ItemList />
            </div>
          </div>
        </div>


    );
  }
}

export default App;
