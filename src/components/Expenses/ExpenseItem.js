import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
const clickHandler = () =>{
  console.log("clicked")
}
const clickDelete = () =>{
  console.log("clicked")
}

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
          <div className='expense-item_description'>
            <h2>{props.title}</h2>
            </div>
          <div className='LocationOfExpenditure mx-2'>
            <h3>{props.LocationOfExpenditure}</h3>
            </div>
          <div className='expense-item_price'>${props.Amount} </div>
          <button onClick={clickHandler}>Change Title</button>
          <button onClick={clickDelete}>Delete Expanse</button>
    </Card>  
)
  }

export default ExpenseItem;