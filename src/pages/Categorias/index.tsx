import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Categoria {
    nome: string;
    descricao: string;
    // servicos: xxx;
    status: boolean;
}

const Categorias = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
        useEffect(() => {
            api.get('categorias').then(response => {
                setCategorias(response.data);
            });
        }, 
    []);

    return (
        <>
        <Header />

        <div className="container">
            <h1>Categorias</h1>
            
            <Link to="/adicionar-categoria" className="mt-4 btn btn-lg btn-primary">Adicionar Categoria</Link>

            <table className="table mt-4 mb-5">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Status</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(categoria => (
                        <tr>
                            <th scope="row">{categoria.nome}</th>
                            <td>{categoria.descricao}</td>
                            <td>{categoria.status}</td>
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

export default Categorias;