import React from "react";
import "./workers-list.css";
import WorkersListItem from "../workers-list-item/workers-list-item";
const WorkersList = ({ data, onDelete, togle }) => {
  return (
    <ul className='app-list list-group'>
      {data.map(({id, ...objEl}) => (
        <WorkersListItem {...objEl} key={id} onDelete={()=>onDelete(id)} togleWorker={(e)=>togle(id, e.currentTarget.getAttribute("data-toggle"))}/>
      ))}
    </ul>
  );
};

export default WorkersList;
