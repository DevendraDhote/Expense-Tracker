import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Addtransaction.css'

function Addtransaction(props) {

    // console.log(props.data)

    const [data, setdata] = useState({
        text : '', 
        amt : 0
    })

    const InputEvent = (e) => {
        setdata({...data, [e.target.name]: e.target.value})
        console.log(e)
    }

    // const Adddata = () => {
    //     const copydata = [...data];
    //     data.push(copydata)
    //     props.listhandler(copydata)
    // }
    // console.log(data)

    console.log(data);

    

    return (
        <>
        <div className="transaction">
            <h1>Add New Transaction</h1>
            <hr />
            <h4>Text</h4>
            <input 
            type="text"
            placeholder='Enter text..'
            onChange={InputEvent}
            // value={data.text}
            name='text'

            />
            <h4>Amount <br /> <span>(negative-expence, positive-income)</span></h4>
            <input 
            type="number"
            placeholder='Enter amount...'
            onChange={InputEvent}
            // value={data.amt}
            name='amt'
        
            />
            <br />
            <button onClick={()=>props.data({text:data.text, amt: +data.amt})}>Add transaction</button>
        </div>
        </>
    );
}

export default Addtransaction;