import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }else if(props.item.length === 1){
    return <h2 className='expenses-list__fallback'>Only single expenses here. Please add More...</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;