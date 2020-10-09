import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="mb-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/servicos">
                                Serviços
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/categorias">
                                Categorias
                            </Link>
                        </li>
                    </ul>

                    <div className="my-2 my-lg-0">
                        <Link className="nav-link text-light" to="/">Logout</Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;