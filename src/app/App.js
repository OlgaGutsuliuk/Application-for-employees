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
      ],
      item: "",
      filter: ""
    };
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

  toggleWorkers = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        }
        return el;
      })
    }));
  };

  onSearchWorker = (workers, item) => {
    if (item.length === 0) {
      return workers;
    }
    return workers.filter((el) => {
      return el.name.indexOf(item) > -1;
    });
  };

  onUpdateItem = (item) => {
    this.setState({ item });
  };

  filterWorkers = (workers, filter) => {
    switch (filter) {
      case "rise":
        return workers.filter((el) => el.rise);

      case "salery":
        return workers.filter((el) => el.salery > 1000);

      default:
        return workers;
    }
  };
   onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, item, filter } = this.state;
    const filterName = this.filterWorkers(this.onSearchWorker(data, item), filter);
    const countWorkers = data.length;
    const richWorkers = data.filter((el) => el.increase).length;
    return (
      <div className='wrapper'>
        <AppInfo sum={countWorkers} rich={richWorkers} />
        <SearchPanel serch={this.onUpdateItem}  filter={this.onUpdateFilter} />
        <WorkersList data={filterName} onDelete={this.deleteWorkers} toggle={this.toggleWorkers} />
        <WorkersAddForm newWorkers={this.addWorkers} />
      </div>
    );
  }
}

export default App;
