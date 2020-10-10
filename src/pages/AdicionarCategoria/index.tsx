import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

const AdicionarCategoria = () => {

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        status: '',
    });

    const [selectedStatus, setSelectedStatus] = useState('0');

    const history = useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({
            ...formData, [name]: value
        })
    }

    function handleSelectedStatus(event: ChangeEvent<HTMLSelectElement>) {
        const status = event.target.value;

        setSelectedStatus(status);
    }
    
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { nome, descricao, status } = formData;

        const infos = {
            nome,
            descricao,
            status
        };

        console.log(infos);

        // await api.post('rota', infos);

        // alert('Categoria inserida com sucesso no App!');

        // history.push('/categorias');
    }

    return (
        <>
        <Header />

        <div className="container">

            <h1>Adicionar Categoria</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" className="form-control" id="nome" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input className="form-control" name="descricao" id="descricao" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" id="status" name="status" value={selectedStatus} onChange={handleSelectedStatus}>
                        {/* {status.map(status => {
                            <option value={status}>{status.nome}</option>
                        })} */}
                        <option value="1">Ativo</option>
                        <option value="0">Desativado</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary mb-5">Adicionar</button>

            </form>

        </div>

        <Footer />
        </>
    )
}

export default AdicionarCategoria;