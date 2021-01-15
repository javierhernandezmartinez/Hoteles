import Header from "./Menu";
import React from "react";
import {render} from "@testing-library/react";


export default class Servicios extends React.Component{

    render=()=>{


        return(
            <div className={"fondo"}>

                <div className={"row menuHeader"}>
                    <Header/>
                </div>

                <div className={"row panelHome "}>
                    <div className={"col welcom"}>
                        <p className={"textVienvenida"}>Conoce nuestros servicios</p>
                        <p className={"textSlogan"}>Y disfruta de tu estadía de la mejor manera</p>
                    </div>
                </div>
            </div>
                )
    }

}

