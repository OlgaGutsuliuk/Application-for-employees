import React from 'react'
import AppFilter from '../app-filter/app-filter';
import "./search-panel.css"
const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input className="search-input" type="text" placeholder="Найти сотрудника" />
            <AppFilter/>
       </div> 
    );
}

export default SearchPanel;