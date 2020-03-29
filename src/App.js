import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _findIndex from "lodash.findindex";

import ItemList from "./components/ItemList";
import EditComponent from "./components/EditComponent";

class App extends Component{

    constructor() {
        super();

        this.state = {
            formData: [],
            no:1,
            complete:false,
            currentData: {},
            editComponentData: {}
        };
    }

    onChangeFn = (event) => {
        this.setState({
            currentData: {
                ...this.state.currentData,
                no:this.state.no-1,
                fName: event.target.value,
                complete:false
            }
        })
    };

    addItem = () => {
        this.setState({
            currentData: {
                ...this.state.currentData,
                no:this.state.no++
            }
        })
        this.setState({
            formData: [
                ...this.state.formData,
                ...[this.state.currentData]
            ]
        })
    };

    deleteItem = (id) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:id});

        temp.splice(record,1);
        this.setState({
            formData: temp
        })
    };

    editItem = (id) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:id});

        this.setState( {
            editComponentData: temp[record]
        })
    };

    setUpdatedData = (data) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:data.no});

        temp.splice(record, 1, data);
        this.setState( {
            formData: temp
        })
    };

    markComplete = (id) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:id});

        this.setState( {
            formData: temp
        })
    };

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h1 className="text-capitalize text-center">ToDo App</h1>
                <div className="card card-body my-3">
                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book" />
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type Here"
                                name={"fName"}
                                onChange={(event) => this.onChangeFn(event)}
                            />
                        </div>
                        <button type = "button" className="btn btn-block btn-primary mt-3" onClick={() => this.addItem()}>
                            Add ToDo
                        </button>
                    </form>
                </div>
              <ItemList body={this.state.formData}
                        deleteItem={(event) => this.deleteItem(event.id)}
                        editItem={(event) => this.editItem(event.id)}
                        markComplete={(event) => this.markComplete(event.id)}
              />
            </div>
              <EditComponent editData={this.state.editComponentData}
                             setUpdatedData={(data) => this.setUpdatedData(data)}
              />
          </div>
        </div>
    );
  }
}

export default App;
