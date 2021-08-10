import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'; 
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { AdminBudget } from '../src/components/AdminBudget';
import { AddBudget } from '../src/components/AddBudget';
import { EditBudget } from '../src/components/EditBudget';
import { Home } from '../src/components/Home';
export function App() {
    return  (
        <BrowserRouter>
        <React.Fragment>
        <Navbar />
            <Switch>
              <Route component={Home} path="/" exact={true} />
              <Route component={AdminBudget} path="/AdminBudget" />
              <Route component={AddBudget} path="/AddBudget" />
              <Route component={EditBudget} path="/EditBudget/:id" />
            </Switch>
        <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
}