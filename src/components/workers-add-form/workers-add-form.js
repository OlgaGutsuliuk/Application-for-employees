import React from "react";
import { Component } from "react";
import "./workers-add-form.css";
class WorkersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salery: ""
    };
  }
  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newWorkers(this.state.name, this.state.salery);
    this.setState({
      name: "",
      salery: ""
    });
  };

  render() {
    const { name, salery } = this.state;
    return (
      <div className='workers-form'>
        <p className='text'>Добавить нового сотрудника</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.onChangeValue}
            name='name'
            value={name}
            className='workers-input'
            type='text'
            placeholder='Имя нового сотрудника'
            required
          />
          <input
            onChange={this.onChangeValue}
            name='salery'
            value={salery}
            className='workers-input'
            type='text'
            placeholder='З/П в $'
            required
          />
          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default WorkersAddForm;
