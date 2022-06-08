import React from "react";
import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import "./search-panel.css";
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item: "",
         filter: ""
    };
  }

  onSerchWorkers = (e) => {
    let item = e.target.value;
    this.setState({ item });
    this.props.serch(item);
  };
   
  render() {
    const { filter } = this.props;
    return (
      <div className='search-panel'>
        <input
          type='text'
          onChange={this.onSerchWorkers}
          value={this.state.item}
          className='search-input'
          placeholder='Найти сотрудника'
        />
        <AppFilter filter={filter} />
      </div>
    );
  }
}

export default SearchPanel;
