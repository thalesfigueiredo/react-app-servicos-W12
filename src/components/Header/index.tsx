import React from 'react';

const Header = () => {
    return(
        <header className="mb-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">
                                Serviços
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">
                                Categorias
                            </a>
                        </li>
                    </ul>

                    <div className="my-2 my-lg-0">
                        <a className="nav-link text-light" href="#">Logout</a>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;