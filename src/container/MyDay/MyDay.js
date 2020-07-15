import React, { Component } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./MyDay.css";
import AddTaskInput from "../../components/AddTaskInput/AddTaskInput";
import MyDayTaskList from "../../components/MyDayTaskList/MyDayTaskList";
import CompleteTaskList from "../../components/CompleteTaskList/CompleteTaskList";
class MyDay extends Component {
  render() {
    return (
      <div className="MyDay">
        <MainHeader />
        <div className="list-container">
          <MyDayTaskList />
          <CompleteTaskList />
        </div>

        <AddTaskInput />
      </div>
    );
  }
}

export default MyDay;
