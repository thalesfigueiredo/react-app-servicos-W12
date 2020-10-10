import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

const AdicionarServico = () => {

    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        data: '',
    });

    const [selectedCategoria, setSelectedCategoria] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('0');

    const history = useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({
            ...formData, [name]: value
        })
    }
    
    function handleSelectedCategoria(event: ChangeEvent<HTMLSelectElement>) {
        const categoria = event.target.value;

        setSelectedCategoria(categoria);
    }

    function handleSelectedStatus(event: ChangeEvent<HTMLSelectElement>) {
        const status = event.target.value;

        setSelectedStatus(status);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { titulo, descricao, data } = formData;
        const categoria = selectedCategoria;
        const status = selectedStatus;

        const infos = {
            titulo,
            descricao,
            data,
            categoria,
            status
        };

        console.log(infos);

        // await api.post('rota', infos);

        // alert('Serviço inserido com sucesso no App!');

        // history.push('/servicos');
    }

    return (
        <>
        <Header />

        <div className="container">

            <h1>Adicionar Serviço</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" className="form-control" id="titulo" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <select className="form-control" id="categoria" name="categoria" value={selectedCategoria} onChange={handleSelectedCategoria}>
                        {/* {categorias.map(categoria => {
                            <option value={categoria.nome}>{categoria.nome}</option>
                        })} */}
                        <option value="Categoria 2">Categoria 2</option>
                        <option value="Categoria 3">Categoria 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input className="form-control" name="descricao" id="descricao" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input className="form-control" name="data" type="datetime-local" id="data" onChange={handleInputChange} />
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

export default AdicionarServico;