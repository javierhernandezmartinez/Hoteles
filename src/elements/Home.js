import React from 'react';
import '../css/Home.css'
import 'react-bootstrap'
import Header from "./Menu";
import fondo1 from '../images/imgHoteles/fondo1.jpg';
import fondo2 from '../images/imgHoteles/fondo2.jpg';
import fondo3 from '../images/imgHoteles/fondo3.jpg';
import fondo4 from '../images/imgHoteles/fondo4.jpg';
import fondo5 from '../images/imgHoteles/fondo5.jpg';
import fondo6 from '../images/imgHoteles/fondo6.jpg';
import fondo7 from '../images/imgHoteles/fondo7.jpg';
import fondo8 from '../images/imgHoteles/fondo8.jpg';
import fondo9 from '../images/imgHoteles/fondo9.jpg';
import fondo10 from '../images/imgHoteles/fondo10.jpg';
import fondo11 from '../images/imgHoteles/fondo11.jpg';
import fondo12 from '../images/imgHoteles/fondo12.jpg';
import fondo13 from '../images/imgHoteles/fondo13.jpg';
import {Modal, Button, Table} from "react-bootstrap";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModalHotel:false,
            showModalHotel2:false,
            listHoteles:[
                {
                    hotelImg:fondo1,
                    description:"Casa ubicada en Oaxaca perfecta para tus comodidades y asistir a la gelagetza"
                },
                {
                    hotelImg:fondo2,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo3,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo4,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo5,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo6,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo7,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo8,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo9,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo10,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo11,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo12,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                },
                {
                    hotelImg:fondo13,
                    description:"habitacion de hotel ubicada en Cazones de herrera para poder visitar sus hermosas playas"
                }


            ],
            imgHotelSelected:null,
            descriptionHotel:null,
            tableTheand:["Tipo de habitación", "Capacidad", "Precio noche", "Total"],
            tableTbody:[
                {
                    tipo:"Junior",
                    capacidad:2,
                    precioNoche:"$600",
                    total:"1200"
                },
                {
                    tipo:"Junior",
                    capacidad:2,
                    precioNoche:"$600",
                    total:"1200"
                },
                {
                    tipo:"Junior",
                    capacidad:2,
                    precioNoche:"$600",
                    total:"1200"
                },
                {
                    tipo:"Junior",
                    capacidad:2,
                    precioNoche:"$600",
                    total:"1200"
                },
                {
                    tipo:"Junior",
                    capacidad:2,
                    precioNoche:"$600",
                    total:"1200"
                },
            ]
        }
    }

    componentDidMount() {
    }

    handleShowModal=()=>{
        this.setState({showModalHotel:!this.state.showModalHotel})
    }
    handleShowModal2=()=>{
        this.setState({showModalHotel2:!this.state.showModalHotel2})
    }

    render() {
        return(
            <div className={"fondo"}>

                <div className={"row menuHeader"}>
                    <Header/>
                </div>

                <div className={"row panelHome "}>
                    <div className={"col welcom"}>
                        <p className={"textVienvenida"}>Wolcome</p>
                        <p className={"textSlogan"}>Hospedate en el mejor lugar</p>
                    </div>
                </div>
                <div className={"row panel_images"}>
                    <div className={"col-md-12"}>
                        <p className={"texts-header-images"}>Casas y apartamentos</p></div>
                    <div className={"col-md-12"}>
                        <p className={"texts-header-images2"}>Selecciona tu mejor opción</p>
                    </div>
                    <div className={"conl-md-12"}>
                        <div className={"row panel_images2"}>
                            {
                                this.state.listHoteles.map(
                                    (item)=>(
                                        <div className={"col-md-4 col_image"}>
                                            <div className={"xpanel-img"} onClick={
                                                ()=>{
                                                    console.log("briendo modal")
                                                    this.setState({
                                                        descriptionHotel:item.description,
                                                        imgHotelSelected:item.hotelImg
                                                    })
                                                    this.handleShowModal()
                                                }
                                            }>
                                                <img src={item.hotelImg} className={"imgHoteles_home"} alt={""}/>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>

                <Modal
                    show={this.state.showModalHotel}
                    onHide={this.handleShowModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Hotel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col-md-12 imgHotelModal"}>
                                <img src={this.state.imgHotelSelected} alt={""}/>
                            </div>
                            <div className={"col-md-12"}>
                                <p>{this.state.descriptionHotel}</p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-md-4"}>
                                <div>
                                    <p>Buscar</p>
                                    <p>Fecha de entra</p>
                                    <input type={"date"}/>
                                    <p>Fecha de salida</p>
                                    <input type={"date"}/>
                                    <p>Adultos</p>
                                    <input type={"number"}/>
                                    <p>Niños</p>
                                    <input type={"number"}/>
                                    <p>Habitaciones</p>
                                    <input type={"number"}/>
                                </div>
                                <div>
                                    <Button>Submit</Button>
                                </div>
                            </div>
                            <div className={"col-md-8"}>
                                <Table>
                                    <thead>
                                    <tr>
                                        {
                                            this.state.tableTheand.map((item)=>(<th>{item}</th>))
                                        }
                                    </tr>
                                    </thead>
                                    <tbody>
                                            {
                                                this.state.tableTbody.map(
                                                    (item)=>(
                                                        <tr>
                                                        <td>{item.tipo}</td>
                                                        <td>{item.capacidad}</td>
                                                        <td>{item.precioNoche}</td>
                                                        <td>{item.total}</td>
                                                        <td><Button onClick={()=>this.handleShowModal2()}>Reservar</Button></td>
                                                    </tr>
                                                ))
                                            }

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShowModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.showModalHotel2}
                    onHide={this.handleShowModal2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Revisa tus datos de reserva</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h4>Datos de tu reserva</h4>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h5>Entrada</h5>
                                        <p>vie, 15 ene 2021</p>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h5>Salida</h5>
                                        <p>lun, 18 ene 2021</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h5>Duración total de la estadía</h5>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <p>3 noches</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h5>Seleccionaste</h5>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <p>3 x Suite Junior</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-6"}>
                                        <h5>Precio</h5>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <p>MXN 600.00</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h5>Tu reserva incluye</h5>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <p>Todo incluido</p>
                                        <p>Estacionamiento gratis</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h5>A tener en cuenta</h5>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <p>Los huéspedes deberán mostrar un documento de identidad válido y una tarjeta
                                            de crédito al realizar el registro de entrada. Tené en cuenta que todos los
                                            pedidos especiales están sujetos a disponibilidad y pueden comportar suplementos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6"}>
                                <div className={"row"}>
                                    <div className={"col-md-6"}>
                                        <img src={this.state.imgHotelSelected} width={"200px"} height={"200px"} alt={""}/>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h5>Hotel Primavera</h5>
                                        <p>Boulevard Cazones, Poza Rica, Veracruz</p>
                                        <p>-->Esta propiedad tiene buena ubicación.</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <p>Inicia sesión para reservar con los datos que ya tienés guardados o registrate
                                            para gestionar tus reservas estés donde estés.
                                        </p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h5>Ingresa tus datos</h5>
                                        <p>!Casi estas listo! Simplemente completá la * información requerida .</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-6"}>
                                        <h6>Indica tu nombre</h6>
                                        <input type={"text"}/>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h6>Ingresa tus apellidos</h6>
                                        <input type={"text"}/>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h6>Ingresa tu email</h6>
                                        <input type={"text"}/>
                                        <p>El e-mail de confirmación se enviará a esta dirección</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-6"}>
                                        <h6>Confirma tu email</h6>
                                        <input type={"text"}/>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h6>¿Para quién estás reservando?</h6>
                                        <input type={"radio"}/>
                                        <label>Yo soy el huésped principal</label>
                                        <input type={"radio"}/>
                                        <label>La reserva es para otra persona</label>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h6>Suite Junior</h6>
                                        <h6>No reembolsable</h6>
                                    </div>
                                    <div className={"col-md-2"}>
                                        <p>* Balcon</p>
                                    </div>
                                    <div className={"col-md-2"}>
                                        <p>* Vista</p>
                                    </div>
                                    <div className={"col-md-2"}>
                                        <p>* Clima</p>
                                    </div>
                                    <div className={"col-md-2"}>
                                        <p>* TV</p>
                                    </div>
                                    <div className={"col-md-2"}>
                                        <p>* Cafetería</p>
                                    </div>
                                    <div className={"col-md-2"}>
                                        <p>* Minibar</p>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <h6>Máx. personas</h6>
                                        <label>4</label>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h6>Nombre completo del cliente</h6>
                                        <input type={"text"}/>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <h6>E-mail del cliente (opcional)</h6>
                                        <input type={"text"}/>
                                        <p>Las direcciones de e-mail solo se usan para mandar información sobre las reservas.
                                            Te aseguramos que no vamos a enviar publicidad.</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <h6>Todo incluido: desayuno, almuerzo, cena y bebidas</h6>
                                            <p>Sí, nos gustaría tener todas las comidas y algunas bebidas durante nuestra
                                            estadía sin costo adicional.</p>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-12"}>
                                        <Button>Continuar</Button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShowModal2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>



            </div>
        )
    }
}