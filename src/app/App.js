import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AppInfo from "../components/app-info/app-info";
import SearchPanel from "../components/search-panel/search-panel";
import WorkersAddForm from "../components/workers-add-form/workers-add-form";
import WorkersList from "../components/workers-list/workers-list";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Ivanov I.", salery: 1200, increase: true, rise: true, id: uuidv4() },
        { name: "Petrov P.", salery: 1500, increase: false, rise: false, id: uuidv4() },
        { name: "Sidorov R.", salery: 2000, increase: true, rise: false, id: uuidv4() }
      ]
    };
    this.maxId = 4;
  }
  deleteWorkers = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((el) => el.id === id);
      // let spliceArr = data.splice(0, index);
      // let spliceArrTwoPart = data.splice(index + 1);
      // const newArr = [...spliceArr, ...spliceArrTwoPart];
      // return {
      //   data: newArr
      // }
      return {
        data: data.filter((worker) => worker.id !== id)
      };
    });
  };

  addWorkers = (fullName, money) => {
    let workerObj = {
      name: fullName,
      salery: money,
      increase: false,
      rise: false,
      id: uuidv4()
    };
    this.setState(({ data }) => {
      let newData = [...data, workerObj];
      return {
        data: newData
      };
    });
  };

  togleWorkers = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        }
        return el;
      })
    }));
  };
  render() {
    const countWorkers = this.state.data.length;
    const richWorkers = this.state.data.filter((el) => el.increase).length;
    return (
      <div className='wrapper'>
        <AppInfo sum={countWorkers} rich={richWorkers} />
        <SearchPanel />
        <WorkersList data={this.state.data} onDelete={this.deleteWorkers} togle={this.togleWorkers} />
        <WorkersAddForm newWorkers={this.addWorkers} />
      </div>
    );
  }
}

export default App;
