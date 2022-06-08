import React from "react";
import "./workers-list-item.css";
const WorkersListItem = (props) => {
  let { name, salery, toggleWorker, increase, rise, onDelete } = props;
  let className = "list-group-item d-flex justify-content-between";
  if (increase) {
    className += " increase";
  }
  if (rise) {
    className += " like";
  }
  return (
    <li className={className}>
      <span onClick={toggleWorker} className='list-group-item-label' data-toggle='rise'>
        {name}
      </span>
      <input type='text' className='list-group-item-input' defaultValue={(salery += "$")} />
      <div className='d-flex justify-content-center align-items-center'>
        <button onClick={toggleWorker} data-toggle='increase' type='button' className='btn-cookie btn-sm '>
          <i className='fas fa-cookie' />
        </button>

        <button onClick={onDelete} type='button' className='btn-trash btn-sm '>
          <i className='fas fa-trash' />
        </button>
        <i className='fas fa-star' />
      </div>
    </li>
  );
};

export default WorkersListItem;
