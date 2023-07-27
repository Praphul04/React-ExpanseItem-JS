import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
     <ExpensesList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;