import React from 'react';
import '../App.css'; 

export function Navbar() {
    return <nav className="navbar" id="nav">
    <ul className="list">
        <li className="list-item"><a href="../" className="list-item-link">Home</a></li>
        <li className="list-item"><a href="/AddBudget" className="list-item-link">Add budget</a></li>
        <li className="list-item"><a href="/AdminBudget" className="list-item-link">Admin budget</a></li>    
    </ul>
    </nav>;
}

