import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Servico {
    titulo: string;
    descricao: string;
    // categoria: xxx;
    data: Date;
    status: boolean;
}

const Servicos = () => {

    const [servicos, setServicos] = useState<Servico[]>([]);
        useEffect(() => {
            api.get('servicos').then(response => {
                setServicos(response.data);
            });
        }, 
    []);

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
                    {servicos.map(servico => (
                        // <tr key={servico.id}>
                        <tr>
                            <th scope="row">{servico.titulo}</th>
                            <td>{servico.descricao}</td>
                            <td>{servico.data}</td>
                            <td>{servico.status}</td>
                            <td><Link to="#">Editar</Link> / <Link to="#">Excluir</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

        <Footer />
        </>
    )
}

export default Servicos;