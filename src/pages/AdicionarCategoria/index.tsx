import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdicionarCategoria = () => {
    return (
        <>
        <Header />

        <div className="container">

            <h1>Adicionar Categoria</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" id="nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea className="form-control" id="descricao" rows={3}></textarea>
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

export default AdicionarCategoria;