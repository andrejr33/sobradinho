import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import api from '../../services/api';


function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [notification, setNotification] = useState('');

    async function hundleSubmit(e) {
        e.preventDefault();
        api.post('/cadastros', { nome, email, telefone })
            .then(function (response) {
                setNotification(response.data.messager);
                alert(response.data.messager);
            }).catch((error) => {
                setNotification("E-mail já cadastrado.");
                alert(notification);
            });
    }
    return (

        <div className="login" >
            <div className="notification">
            </div>

            <form onSubmit={hundleSubmit}>
                <input
                    type="text"
                    name="nome"
                    className="form-control"
                    placeholder="Nome Completo"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="number"
                    name="telefone"
                    className="form-control"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    required
                />
                <strong className="text-center">Valor de R$ 10.00 ( deve ser entregue na entrada do evento).</strong>
                <center>
                    <button type="submit" className='btn' >Cadastrar </button>
                </center>
            </form>
            <Link to="/sobradinho/duvidas">
                <button className="btn_mais">Quero saber mais!</button>
            </Link>
        </div>
    )
}
export default Formulario;