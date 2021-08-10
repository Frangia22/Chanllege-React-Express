import  React, { useState } from 'react'
import '../App.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export function EditBudget() {
    //Obtengo el id que viene atraves de la URL
    const {id} = useParams();
    //console.log(id);
    //Declaro los campos del Form
    let [ concept, setConcept ] = useState('');
    let [ amount, setAmount ] = useState(0);
    let [ type, setType ] = useState('');
    let [ reference, setReference ] = useState('');
    //Creo funcion para enviar los datos, es como si le especificara un action en un form comun
    function updateBudget() {
        Axios.post('/editBudget/'+id, {
            concept,
            amount,
            type,
            reference
        }
        )
        .then((response) => {
            console.log(response.data);
        })
    }
    //onChange se encarga de guardar los datos de cada campo en una variable
    return (
        <main id="content" className="principal">
        <div className="container">
            
            <form className="form-group" onClick={updateBudget}>
                <div className="form-group-12">
                    <label for="concept" className="form-label">Concept</label>
                    <input className="form-control" type="text"  name="concept" 
                       id="concept" onChange={(e) => { 
                        setConcept(e.target.value);
                        }} required/>
                </div>
                    <div className="form-group-12">    
                    <label for="amount" className="form-label">Amount</label>
                    <input className="form-control" type="text"  name="amount"  id="amount" onChange={(e) => { 
                        setAmount(e.target.value);
                        }} required 
                      />
                </div>
                <div className="form-group-12">
                    <label for="type" className="form-label">Type</label>
                    <input className="form-control" type="text" name="type"  id="type" onChange={(e) => { 
                        setType(e.target.value);
                        }} required default="Entry" 
                      />
                </div>
                
                <div className="form-group-12">
                    <label for="reference" className="form-label">Reference<small>(optional)</small></label>
                    <textarea className="form-control" id="reference" onChange={(e) => { 
                        setReference(e.target.value);
                        }} rows="12" placeholder="Operation reference" name="reference"
                      ></textarea>
                </div>
                <a href="/AdminBudget" type="submit" className="mt-1 btn btn-add card-text">Edit</a>
            </form>
        </div>
    </main>
    )
}