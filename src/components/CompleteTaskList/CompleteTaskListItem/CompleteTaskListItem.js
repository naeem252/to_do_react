import React from 'react';

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
        <span className="star_icon">
          {props.isImp ? <ion-icon name="star"></ion-icon> : <ion-icon name="star-outline"></ion-icon>}
        </span>
        <span className="delete_icon" onClick={props.onModalDelete}>
          <ion-icon name="trash-bin-outline"></ion-icon>
        </span>
      </div>
    </li>
  );
}

export default CompleteTaskListItem;
