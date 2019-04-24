import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

//import { base } from "./base";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    //current copy of list
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }

  render() {
    return (
      <div className>
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="jumbotron bg-success title">
                <h2 class="text-center">To Do List (React App)</h2>
              </div>
              <div>
                Add item
                <br />
                <div class="input-group">
                  <input
                    id="input"
                    type="text"
                    class="form-control"
                    placeholder="task..."
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                  />
                  <div class="input-group-addon hover-cursor">
                    <button
                      class="input-group btn btn-success"
                      id="btn"
                      onClick={() => this.addItem()}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <br />
                <div>
                  <ul class="list-group">
                    {this.state.list.map(item => {
                      return (
                        <li class="list-group-item form-control" key={item.id}>
                          {item.value}
                          <span class="pull-right">
                            <i id="i" onClick={() => this.deleteItem(item.id)}>
                              del
                            </i>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
