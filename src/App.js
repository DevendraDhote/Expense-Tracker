import Showbalance from './components/Showbalance/Showbalance.js';
import Showhistory from './components/Showhistory/Showhistory.js';
import Addtransaction from './components/Addtransaction/Addtransaction.js';
import './App.css';
import { useState } from 'react';

function App() {

  const [list, setlist] = useState([ 
      {text : "income", amt : 25000},
      {text : "Shampo", amt : -20},
      {text : "Ball", amt : -50},
  ]);

  // const [uplist, setuplist] = useState([])

  const Addtrans = (dets) => {
    const copy=[...list]
    copy.push(dets)
    setlist(copy)
  }



  return (
    <>
    <div className="main">
      <h1>Expense Tracker</h1>
      <Showbalance mat = {list} />
      <Showhistory listhandler = {list} />
      <Addtransaction data = { Addtrans} />
    </div>
    </>
  );
}

export default App;
