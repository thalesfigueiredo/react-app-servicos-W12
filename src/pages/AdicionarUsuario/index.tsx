import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiKey, FiUser, FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

const AdicionarUsuario = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const history = useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({
            ...formData, [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { nome, email, senha } = formData;

        const infos = {
            nome,
            email,
            senha,
        };

        console.log(infos);

        // await api.post('rota', infos);

        // alert('Usuário inserido com sucesso no App!');

        // history.push('/');
    }
    return (
        <div className="container">
            <div className="row justify-content-center login-mg">
                <div className="col-lg-5 col-md-7 col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-primary text-center mt-3 mb-4">Novo Usuário</h2>

                            <form onSubmit={handleSubmit}>

                                <div className="form-row align-items-center">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Nome</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FiUser /></div>
                                        </div>
                                        <input type="text" className="form-control" name="nome" placeholder="Nome" onChange={handleInputChange} />
                                    </div>

                                    <label className="sr-only" htmlFor="inlineFormInputGroup">E-mail</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FiMail /></div>
                                        </div>
                                        <input type="text" className="form-control" name="email" placeholder="E-mail" onChange={handleInputChange} />
                                    </div>
                                    
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Senha</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FiKey /></div>
                                        </div>
                                        <input type="password" className="form-control" name="senha" placeholder="Senha" onChange={handleInputChange} />
                                    </div>

                                    <div className="input-group mb-3">
                                        <button type="submit" className="btn btn-lg btn-primary btn-block">Criar Usuário</button>
                                    </div>

                                    <div className="input-group mb-2">
                                        <Link to="/">Voltar a tela de login</Link>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdicionarUsuario;