import React from "react";
import "./MyDayTaskListItem.css";

function MyDayTaskListItem(props) {
  return (
    <li className="MyDayTaskListItem">
      <div className="text">
        <div className="circle" onClick={props.onCompleted}>
          <span className="circle-icon">
            <ion-icon name="checkmark-outline"></ion-icon>
          </span>
        </div>
        <span>{props.text}</span>
      </div>
      <div className="icons">
        <ion-icon name="star-outline"></ion-icon>
      </div>
    </li>
  );
}

export default MyDayTaskListItem;
