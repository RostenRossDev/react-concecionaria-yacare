import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { clientes } from '../assets/clientes'


const UserCard = styled.div`
    background-color:#ddd;
    min-height:250px;
    width:400px;
    margin-left:auto;
    margin-right:auto;
    padding:1rem;
    border-radius:10px;
    text-align:center;
`
const UserImg = styled.img`
    display:block;
    margin-left:auto;
    margin-right:auto;
    border-radius:150%;
    height:200px;
    width:200px;
`
const UserTitle= styled.h2`
    margin:0;
`

const BackButton = styled(Link)`
    display:block;
    text-decoration:none;
    background:none;
    width:30px;
    margin-left:auto;
    margin-right:auto;
    color:royalblue;
    border-bottom:1px solid royalblue;
`

const Cliente= ({match}) =>{
    const cliente = clientes.find(cliente => cliente.id === parseInt(match.params.id))

    return (
        <UserCard>
            <UserImg src={cliente.imagen}/>
            <UserTitle>{cliente.nombre} {cliente.apellido}</UserTitle>               
            <p>{cliente.email}</p>
            <p>{cliente.edad}</p>
            <p>{cliente.telefono}</p>
            <p>{cliente.calular}</p>
            <p>{cliente.provincia} {cliente.ciudad}</p>
            <p>{cliente.calle} al {cliente.altura}</p>
            <p>{cliente.piso} {cliente.departamento}</p>
            <p>Primer transaccion:{cliente.fecha_inicio}</p>
            <p>Ultima transaccion:{cliente.fecha_ultima_transaccion}</p>
            <BackButton to="/">Volver</BackButton>
        </UserCard>
    )
}

export default Cliente