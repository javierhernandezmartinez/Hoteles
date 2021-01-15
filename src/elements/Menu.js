import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-sin-fondo.png'
import '../css/Header.css'
import 'react-bootstrap'


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"header"}>
            <div className="row navbar">
                <div className="container-fluid">
                        <div className="col-md-2 navbar-header">
                            <Link to={"/"}>
                                <img className="logo-header" src={logo}/>
                            </Link>
                        </div>
                        <div className={"col-md-8"}>
                            <ul>
                                <Link to={"/"} className={"navv item-nav"}>Inicio</Link>
                                <Link to={"/servicios"} className={"navv item-nav"}>Servicios</Link>
                                <Link to={"/contacto"} className={"navv item-nav"}>Contacto</Link>
                                <Link to={"/login"} className={"navv item-nav"}>Ingresar</Link>
                            </ul>
                        </div>
                </div>
            </div>

            </div>
        );
    }
}
