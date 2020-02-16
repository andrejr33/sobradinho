import React from 'react';


import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Formulario from './pages/formulario/';
import Duvidas from './pages/duvidas/';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/sobradinho" component={Formulario} />
            <Route path="/sobradinho/duvidas" component={Duvidas} />
        </Switch>
    </BrowserRouter>
);


export default Routes;