import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Servicos = () => {
    return (
        <>
        <Header />

        <div className="container">
            <h1>Serviços</h1>
            
            <Link to="/adicionar-servico" className="mt-4 btn btn-lg btn-primary">Adicionar Serviço</Link>

            <table className="table mt-4 mb-5">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data</th>
                        <th scope="col">Status</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td><Link to="#">Editar</Link> / <Link to="#">Excluir</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td><Link to="#">Editar</Link> / <Link to="#">Excluir</Link></td>
                    </tr>
                </tbody>
            </table>

        </div>

        <Footer />
        </>
    )
}

export default Servicos;