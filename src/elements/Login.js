import React from 'react';
import '../css/Home.css'
import '../css/login.css'
import 'react-bootstrap'
import logo from '../images/logo-sin-fondo.png'
import Header from "./Menu";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={"fondoLogin"}>
                <div className={"row menuHeader"}>
                    <Header/>
                </div>
                <div className={"row panelHome "}>
                    <div className={"col welcom"}>
                            <img src={logo} alt={""}/>
                            <div className={"camposLogin"}>
                                <label className={"loginLabel"}>Usuario:</label>
                                <input type={"text"}/>
                            </div>
                            <div className={"camposLogin"}>
                                <label className={"loginLabel"}>Password:</label>
                                <input type={"password"}/>
                            </div>
                    </div>

                </div>
            </div>

        )
    }
}