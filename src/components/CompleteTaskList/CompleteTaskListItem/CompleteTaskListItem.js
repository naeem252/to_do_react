import React from "react";

function CompleteTaskListItem(props) {
  return (
    <li className="MyDayTaskListItem">
      <div className="text">
        <div className="circle" onClick={props.onUncomplete}>
          <span className="circle-icon active">
            <ion-icon name="checkmark-outline"></ion-icon>
          </span>
        </div>
        <span>{props.text}</span>
      </div>
      <div className="icons">
        <ion-icon name="star"></ion-icon>
      </div>
    </li>
  );
}

export default CompleteTaskListItem;
