
import './App.css';
import ExpenseItem from './components/ExpenseItem'
function App() {

  const expenses = [
    { title: 'Car Insurence', Amount: 500000, date: new Date(2023, 7, 15), LocationOfExpenditure: 'CarAgency' },
    { title: 'Toilet Paper', Amount: 500, date: new Date(2023, 6, 5), LocationOfExpenditure: 'Mall' },
    { title: 'Shoping', Amount: 70000, date: new Date(2023, 2, 10), LocationOfExpenditure: 'Clothes' },
    { title: 'Movie', Amount: 1000, date: new Date(2023, 5, 13), LocationOfExpenditure: 'Movie' }
  ]
  return (
    <>
    <div>
      <ExpenseItem title={expenses[0].title} Amount={expenses[0].Amount} date={expenses[0].date} LocationOfExpenditure={expenses[0].LocationOfExpenditure}></ExpenseItem >
      <ExpenseItem title={expenses[1].title} Amount={expenses[1].Amount} date={expenses[1].date} LocationOfExpenditure={expenses[1].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} Amount={expenses[2].Amount} date={expenses[2].date} LocationOfExpenditure={expenses[2].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} Amount={expenses[3].Amount} date={expenses[3].date} LocationOfExpenditure={expenses[3].LocationOfExpenditure}></ExpenseItem>
 
      </div>
      
  </>
  );
}

export default App;
