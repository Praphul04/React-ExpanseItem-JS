import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 7, 15);
    // const expanseTitle ='Car Insurence';
    // // const expanseAmount = 500000 ;
    // const LocationOfExpenditure = 'Car Insurense';

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='LocationOfExpenditure mx-2'>
                    <h3>{props.LocationOfExpenditure}</h3>
                </div>
                <div className='expense-item_price'>Rs. {props.Amount}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;