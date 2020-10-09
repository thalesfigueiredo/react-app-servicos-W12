import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import AdicionarUsuario from './pages/AdicionarUsuario';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import AdicionarCategoria from './pages/AdicionarCategoria';
import Servicos from './pages/Servicos';
import AdicionarServico from './pages/AdicionarServico';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={AdicionarUsuario} path="/novo-usuario" />
            <Route component={Home} path="/home" />
            <Route component={Categorias} path="/categorias" />
            <Route component={AdicionarCategoria} path="/adicionar-categoria" />
            <Route component={Servicos} path="/servicos" />
            <Route component={AdicionarServico} path="/adicionar-servico" />
        </BrowserRouter>
    );
}

export default Routes;