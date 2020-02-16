import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Formulario extends Component {
    render() {
        return (
            <div className="duvidas">
                <div className="list">
                    <h2>
                    Quando vai rolar?
                    </h2>
                    <h3>
                        Data: 14/03/2020<br />
                        Horário: 08:30hrs às 11:30hrs e  13:00hrs às 16:00hrs.<br />
                    </h3>
                </div>


                <div className="list">
                    <h2>Quanto custa?
                    </h2>
                    <h3>
                    Bem baratinho!! <br /> 
                    O evento custa apenas R$10,00. O valor deverá ser pago na entrada. <br />
                    
                    </h3> <br /><br /><br />
                    <h2 class='text-center'>
                        Venha participar conosco!!...
                    </h2>       
                </div>

                <div className="col-8">

                    <Link to="/sobradinho">
                        <button className="btn_mais" >Voltar para Inscrição</button>
                    </Link>
                </div>

            </div>

        )
    }
}