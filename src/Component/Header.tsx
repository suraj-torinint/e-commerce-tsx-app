const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info ">
                <div className="container-fluid">
                    <a className="text-dark navbar-brand" href="/">
                        Z-Kart
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="text-dark nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="text-dark nav-link" href="/">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="text-dark nav-link" href="/">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
