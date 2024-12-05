import React, { useState } from "react";

import Expenses from "./components//Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // January
{
  id: "e1",
  title: "Rent",
  amount: 1200,
  date: new Date(2024, 0, 1),
},
{
  id: "e2",
  title: "Groceries",
  amount: 310.75,
  date: new Date(2024, 0, 15),
},
{
  id: "e3",
  title: "Car Service",
  amount: 450,
  date: new Date(2024, 0, 28),
},

// February
{
  id: "e4",
  title: "Phone Bill",
  amount: 60.89,
  date: new Date(2024, 1, 3),
},
{
  id: "e5",
  title: "Valentine's Day Gift",
  amount: 80,
  date: new Date(2024, 1, 14),
},
{
  id: "e6",
  title: "Streaming Subscription",
  amount: 15.99,
  date: new Date(2024, 1, 20),
},

// March
{
  id: "e7",
  title: "Gas",
  amount: 75.45,
  date: new Date(2024, 2, 5),
},
{
  id: "e8",
  title: "Groceries",
  amount: 290.10,
  date: new Date(2024, 2, 18),
},
{
  id: "e9",
  title: "Home Repairs",
  amount: 320,
  date: new Date(2024, 2, 24),
},

// April
{
  id: "e10",
  title: "Insurance Premium",
  amount: 600,
  date: new Date(2024, 3, 1),
},
{
  id: "e11",
  title: "Groceries",
  amount: 295.75,
  date: new Date(2024, 3, 14),
},
{
  id: "e12",
  title: "Clothing",
  amount: 150.30,
  date: new Date(2024, 3, 22),
},

// May
{
  id: "e13",
  title: "Gym Membership",
  amount: 50,
  date: new Date(2024, 4, 5),
},
{
  id: "e14",
  title: "Mother's Day Gift",
  amount: 100,
  date: new Date(2024, 4, 12),
},
{
  id: "e15",
  title: "New Laptop",
  amount: 1200,
  date: new Date(2024, 4, 28),
},

// June
{
  id: "e16",
  title: "Vacation",
  amount: 1800,
  date: new Date(2024, 5, 10),
},
{
  id: "e17",
  title: "Groceries",
  amount: 310,
  date: new Date(2024, 5, 18),
},

// July
{
  id: "e18",
  title: "Car Tires",
  amount: 600,
  date: new Date(2024, 6, 8),
},
{
  id: "e19",
  title: "Electricity Bill",
  amount: 140,
  date: new Date(2024, 6, 15),
},
{
  id: "e20",
  title: "BBQ Party Supplies",
  amount: 250.55,
  date: new Date(2024, 6, 22),
},

// August
{
  id: "e21",
  title: "School Supplies",
  amount: 200,
  date: new Date(2024, 7, 10),
},
{
  id: "e22",
  title: "Groceries",
  amount: 325,
  date: new Date(2024, 7, 18),
},

// September
{
  id: "e23",
  title: "Phone Upgrade",
  amount: 800,
  date: new Date(2024, 8, 5),
},
{
  id: "e24",
  title: "Dining Out",
  amount: 120.89,
  date: new Date(2024, 8, 14),
},

// October
{
  id: "e25",
  title: "Halloween Costume",
  amount: 60,
  date: new Date(2024, 9, 25),
},
{
  id: "e26",
  title: "Pumpkin Spice Latte",
  amount: 15.50,
  date: new Date(2024, 9, 31),
},

// November
{
  id: "e27",
  title: "Black Friday Shopping",
  amount: 500,
  date: new Date(2024, 10, 29),
},
{
  id: "e28",
  title: "Groceries",
  amount: 290.10,
  date: new Date(2024, 10, 20),
},

// December
{
  id: "e29",
  title: "Christmas Gifts",
  amount: 750,
  date: new Date(2024, 11, 24),
},
{
  id: "e30",
  title: "New Year Celebration",
  amount: 350,
  date: new Date(2024, 11, 31),
},

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
