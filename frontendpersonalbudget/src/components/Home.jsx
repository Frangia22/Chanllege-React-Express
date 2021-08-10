import  React, { useState, useEffect } from 'react'
import '../App.css'; 
import Axios from 'axios';

export function Home() {
    //Traigo los ultimos 10 movimientos
    const [ budgetList, setBudgetList ] = useState([]);
    useEffect(() => {
        Axios.get("/home")
        .then((response) => {
            setBudgetList(response.data);
        })
        .catch(e=>console.log(e));
    }, [])
    //Traigo balance de la resta de ingresos y egresos
    const [ balanceList, setBalanceList ] = useState([]);
    useEffect(() => {
        Axios.get("/balance")
        .then((response) => {
            setBalanceList(response.data);
        })
        .catch(e=>console.log(e));
    }, [])
    return (
            <main className="principal" id="content">
                <div className="container">
                    <div className="header-subtitle">
                        <ul className="subtitle-list">
                            <li className="subtitle-item subtitle-item-admin"><h1 className="subtitle-item-link">Balance budget</h1></li>
                        </ul>
                    </div>
                    <div className="balance">                      
                        <ul className="list py-2">
                            <li className="list-balance"><p className="list-item">Entry</p></li>
                
                            <li className="list-balance"><p className="list-item text-success">$ {balanceList.entry}</p></li>
                                                    
                        </ul> 
                        <ul className="list py-2">
                            <li className="list-balance"><p className="list-item">Egress</p></li>
                            <li className="list-balance"><p className="list-item text-warning">$ {balanceList.egress}</p></li>
                        </ul>   
                        <hr/>   
                            <ul className="list py-2">
                                <li className="list-balance"><p className="list-item">Balance</p></li>
                                {balanceList.totalBalance > 0 ?
                                <li className="list-balance"><p className="list-item text-success d-flex">$ {balanceList.totalBalance}<img class="img-arrow" src="/flechaarriba.svg" alt=""></img></p></li>
                                :
                                    <li className="list-balance"><p className="list-item text-warning d-flex">$ {balanceList.totalBalance}<img class="img-arrow" src="/flechaabajo.svg" alt=""></img></p></li>
                                }
                            </ul>                                   
                    </div>
                    <div className="container">
                        <div className="header-subtitle">
                            <ul className="subtitle-list">
                                <li className="subtitle-item subtitle-item-admin"><h1 className="subtitle-item-link">Last operations</h1></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                    <table className="table">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Operation number</th>
                                <th className="th">Concept</th>
                                <th className="th">$ Amount</th>
                                <th className="th">Date</th>
                                <th className="th">Type</th>                      
                            </tr>
                        </thead>
                        { budgetList.map((val) => {
                            return(
                        <tbody className="tbody">
                            <tr className="tr">
                                <td className="td">{ val.id }</td>
                                <td className="td">{ val.concept }</td>
                                <td className="td">$ { val.amount }</td>
                                <td className="td">{ val.date }</td>
                                <td className="td">{ val.type }</td>                      
                            </tr>
                        </tbody>
                            )
                        }) } 
                    </table>      
                    </div>                       
                </div>
            </main>
    );
}
