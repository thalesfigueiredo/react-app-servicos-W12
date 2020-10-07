import React from 'react';

import './styles.css';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center login-mg">
                <div className="col-lg-5 col-md-7 col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-primary text-center mt-3 mb-4">Login</h2>

                            <form>

                                <div className="form-row align-items-center">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Usuário</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" className="form-control" id="" placeholder="Usuário" />
                                    </div>
                                    
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Senha</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="password" className="form-control" id="" placeholder="Senha" />
                                    </div>
                                    
                                    <div className="input-group ml-3 mb-2 col-sm-7 col-12 text-sm-left text-center">
                                        <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                                        <label className="form-check-label" htmlFor="autoSizingCheck">Lembrar senha</label>
                                    </div>

                                    <div className="input-group mb-2">
                                        <button type="submit" className="btn btn-lg btn-primary btn-block">Logar</button>
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

export default Login;