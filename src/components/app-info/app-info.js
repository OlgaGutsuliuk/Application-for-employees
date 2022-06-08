import React from "react";
import "./app-info.css";
const AppInfo = ({ sum, rich }) => {
  return (
    <div className='wrapper-info'>
      <h1 className='text'>Учет сотрудников в компании Coffee Art ☕ </h1>
      <h2 className='text'>Общее число сотрудников: {sum}</h2>
      <h2 className='text'>Премию получат: {rich}</h2>
    </div>
  );
};

export default AppInfo;
