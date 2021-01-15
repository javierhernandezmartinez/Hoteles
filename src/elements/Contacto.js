import React from 'react';
import '../css/Home.css'
import '../css/Contacto.css'
import 'react-bootstrap'
import logo from "../images/logo-sin-fondo.png";
import contactenos from "../images/contactcenter_principal.jpg"
import Header from "./Menu";

export default class Contacto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={"fondoContacto"}>
                <div className={"row menuHeader"}>
                    <Header/>
                </div>
                <div className={"row fondoContacto2"}>
                    <div className={"col-md-12"}>
                        <p className={"textContact"}>Contactanos</p>
                        <p className={"textContact2"}>Queremos conocer tu opinión</p>
                    </div>
                    <div className={"col-md-12 center_panel_contact"}>
                        <div className={"row panelContacto"}>
                            <div className={"col-md-6 separador"}>
                                <p className={"text_p_contact title_p_contact"}>Teléfono</p>
                                <p className={"text_p_contact "}>55 9999 0000 - 55 8888 7777</p>
                                <p className={"text_p_contact title_p_contact"}>Email</p>
                                <p className={"text_p_contact "}>homesoft@gmail.com</p>
                                <p className={"text_p_contact title_p_contact"}>Direción</p>
                                <p className={"text_p_contact"}>C. Jose María, Num. 50, Col. Tajín, Poza Rica, Veracruz. </p>
                            </div>
                            <div className={"col-md-6"}>
                                <div className={"camposContact"}>
                                    <input type={"text"} placeholder={"Nombre"}/>
                                </div>
                                <div className={"camposContact"}>
                                    <input type={"text"} placeholder={"Email"}/>
                                </div>
                                <div className={"camposContact"}>
                                    <input type={"text"} placeholder={"Asunto"}/>
                                </div>
                                <div className={"camposContact"}>
                                    <textarea className={"mensage_contact"} placeholder={"Escriba su mensage"}/>
                                </div>
                            </div>
                            <div className={"col-md-12 button_Enviar_contact"}>
                                <button>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}