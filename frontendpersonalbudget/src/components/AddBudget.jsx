import  React, { useState  } from 'react'
import '../App.css';
import Axios from 'axios';

export function AddBudget() {
    //Declaro los campos del Form
    let [ concept, setConcept ] = useState('');
    let [ amount, setAmount ] = useState(0);
    let [ type, setType ] = useState('');
    let [ reference, setReference ] = useState('');
    let [ setBudgetList ] = useState([]);
    //Realizo el fetch con la api express
    const addBudget = () => {
        Axios.post('/addBudget' , {
            concept,
            amount,
            type,
            reference
        }).then((response) => {
            setBudgetList(response.data);
        })
    }
    //Realizo la funcion para enviar el form
    const submitBudget = (e) => {
        e.preventDefault();
        addBudget();
        window.location.href = `/AdminBudget`;
    };
    return (
        <main id="content" className="principal">
        <div className="container">
            <form className="form-group" onSubmit={submitBudget}>
                <div className="form-group-12">
                    <label for="concept" className="form-label">Concept</label>
                    <input className="form-control" type="text" name="concept" 
                    onChange={(e) => { 
                        setConcept(e.target.value);
                        }} id="concept" required/>
                </div>
                    <div className="form-group-12">    
                    <label for="amount" className="form-label">Amount</label>
                    <input className="form-control" type="text" name="amount" id="amount" required 
                    onChange={(e) => { 
                        setAmount(e.target.value);
                        }}/>
                </div>
                <div className="form-group-12">
                    <label for="type" className="form-label">Type</label>
                    <input className="form-control" type="text" name="type" id="type" required default="Entry" onChange={(e) => { 
                        setType(e.target.value);
                        }} />
                </div>
                
                <div className="form-group-12">
                    <label for="reference" className="form-label">Reference<small>(optional)</small></label>
                    <textarea className="form-control" id="reference" rows="12" placeholder="Operation reference" name="reference"
                    onChange={(e) => { 
                        setReference(e.target.value);
                        }}></textarea>
                </div>
                <button type="submit" className="mt-1 btn btn-add" onClick={submitBudget} >Add</button>
            </form>
        </div>
    </main>
    )
}
