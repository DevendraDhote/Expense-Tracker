import React from 'react';
import './Showbalance.css'

function Showbalance(props) {
    var income = 0
    console.log(props.mat.map(val => val.amt>0?income+=val.amt:0))
    var expense = 0
    console.log(props.mat.map(val => val.amt<0?expense+=val.amt:0))
    var totalbalance = Number(income + expense)

    return (
        <>
            <div className="balance">
                <h3>YOUR BALANCE <br /> <h2>₹{totalbalance}</h2></h3>
                <div className="incexp">
                    <h4>INCOME <br /> <p className='a'>₹{income}</p></h4>
                    <hr />
                    <h4>EXPENSE <br /> <p>₹{expense}</p></h4>

                </div>
            </div>
        </>
    );
}

export default Showbalance;