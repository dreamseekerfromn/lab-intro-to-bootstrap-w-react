import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <p><Link className="navbar-brand" to="/">Travel <span style={{color:"gold",fontFamily:"Snell Roundhand"}}>Blog</span></Link></p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Popular posts <span className="text-warning">(NOT OPEN)</span></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}