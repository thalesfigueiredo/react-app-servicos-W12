import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdicionarServico = () => {
    return (
        <>
        <Header />

        <div className="container">

            <h1>Adicionar Serviço</h1>
            
            <form>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" className="form-control" id="titulo" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <select className="form-control" id="categoria">
                        <option>Categoria 1</option>
                        <option>Categoria 2</option>
                        <option>Categoria 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea className="form-control" id="descricao" rows={3}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="data" />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" id="status">
                        <option>Ativo</option>
                        <option>Desativado</option>
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