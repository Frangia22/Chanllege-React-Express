import  React, { useState, useEffect } from 'react'
import '../App.css'; 
import Axios from 'axios';

export function AdminBudget() {
    //Fetch para traer los datos de la DB
    const [ budgetList, setBudgetList ] = useState([]);
    useEffect(() => {
        Axios.get("/getBudget")
        .then((response) => {
            setBudgetList(response.data);
        })
        .catch(e=>console.log(e.response));
    }, [])
    //Fetch para eliminar un presupuesto
    const deleteBudget = (id) =>{
        Axios.get(`/deleteBudget/${id}`)
        .then((result) => {
            console.log(result);
        })      
    }
    // Fetch para obtener el ID del presupuesto que quiero modificar
    const editBudget = (id) =>{
        Axios.get(`/editBudget/${id}`)
        .then((result) => {
            console.log('EL resultado es ', result);
        })      
    }
    return (
        <main className="principal" id="content">
            <div className="container">
                <div className="header-subtitle">
                    <ul className="subtitle-list">
                        <li className="subtitle-item subtitle-item-admin"><h1 className="subtitle-item-link">Administration panel</h1></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                        <table className="table">
                            <thead className="thead">
                                <tr className="tr">
                                    <th className="td hide">Operation number</th>
                                    <th className="td">Concept</th>
                                    <th className="td">$ Amount</th>
                                    <th className="td hide">Date</th>
                                    <th className="td">Type</th> 
                                    <th className="td">Actions</th>                     
                                </tr>
                            </thead>
                            { budgetList.map((val) => {
                            return(
                        <tbody className="tbody">
                            <tr className="tr">
                                <td className="td hide">{ val.id }</td>
                                <td className="td">{ val.concept }</td>
                                <td className="td">$ { val.amount }</td>
                                <td className="td hide">{ val.date }</td>
                                <td className="td">{ val.type }</td> 
                                <td className="td actions">
                                        <button className="btn btn-edit" onClick={
                                            () => {
                                                editBudget(val.id);
                                                window.location.href = `/EditBudget/${val.id}`;
                                            }
                                        }>Edit</button>
                                        <button className="btn btn-delete" type="submit" onClick={() => {deleteBudget(val.id); window.location.href = `/AdminBudget`;}} >Delete</button>
                                    </td>                       
                            </tr>
                        </tbody>
                            )
                        }) }                            
                        </table>          
                    </div>
                    <div className="add-product">
                        <a className="btn btn-add" href="/AddBudget">Add operation</a>
                    </div>
                </main>
    )
}
