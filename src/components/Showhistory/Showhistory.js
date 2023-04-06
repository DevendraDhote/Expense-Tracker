import React from 'react';
import './Showhistory.css'

function Showhistory(props) {
    return (
        <>
            <div className="history">
                <h2>History</h2>
                <hr />
                <div className="list">
                    {props.listhandler.map((val) => (
                    <div className="li">
                        <h6>{val.text}</h6>
                        <span>{val.amt}</span>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Showhistory;