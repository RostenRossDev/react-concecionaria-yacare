import React, {useState} from 'react';
import styled from 'styled-components'
import {clientes} from '../assets/clientes'
import {generate as id} from 'shortid';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

const titulo="Consecionaria Yacarecito"

const TableUsers = styled.table`
    width: 100%;
    background-color:#23ff00;
    color: black;
    border-spacing: 5px;
    border-collapse: collapse;
    border-style:none;
    border-radius:10px;

    tr:nth-child(odd) {
     background-color: #00de32;
     border-collapse: collapse;
     border-bottom-color:#00de32;
     border-left-color:#00de32;
     border-top-color:#00de32;
     border-right-color:#00de32;
    }
`
const TableData = styled.td`
    padding:.8rem;
    width:150px;
`
const TableButon = styled.td`
    width:auto;

`
const TableHead = styled.th`
    padding:.8rem;
`
const StyledLink = styled(Link)`
    max-width:2rem;
`

const TableContainer = styled.div`
    display:grid;
    justify-content:center;
    width:100%;
    margin-bottom:5rem;
`
const Title = styled.h1`
    background-color: green;
    font-size: 1rem;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    
`
const UserImg = styled.img`
    border-radius:150px;
    border:5px solid #666;
    height:100px;
    width:100px;
`
const ListadoClientes = () =>(
    <>
    <TableContainer>
        <Title ><h1>{titulo}</h1> <h2>Lista de clientes</h2></Title>
        <StyledLink to={`/agregar`}><Button variant="primary">Agregar</Button></StyledLink> 
        <TableUsers>
            <tr>
                <TableHead>Foto</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Apellido</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Fecha de inicio</TableHead>
                <TableHead>Fecha ultimo compra</TableHead>
                <TableHead>Editar</TableHead>
                <TableHead>Eliminar</TableHead>
                <TableHead>Facturar</TableHead>
            </tr>
            {
                clientes.map(cliente => (
                    <tr key={id()}>
                        <TableData >
                            <Link to={`/cliente/${cliente.id}`}><UserImg src={cliente.imagen} /></Link>
                        </TableData>
                        <TableData>
                            {cliente.nombre}
                        </TableData>
                        <TableData>
                            {cliente.apellido}
                        </TableData>
                        <TableData>
                            {cliente.email}
                        </TableData>
                        <TableData>
                            {cliente.fecha_inicio}
                        </TableData>
                        <TableData>
                            {cliente.fecha_ultima_transaccion}
                        </TableData>
                        <TableData>
                            <StyledLink to={`/cliente/editar/${cliente.id}`}>
                                <Button variant="primary">editar</Button>
                            </StyledLink> 
                        </TableData>
                        <TableData>
                            <StyledLink to={`/cliente/eliminar/${cliente.id}`}>
                                <Button variant="danger">Eliminar</Button>
                            </StyledLink> 
                        </TableData>
                        <TableData>
                            <StyledLink to={`/cliente/facturar/${cliente.id}`}>
                                <Button variant="warning">Facturar</Button>
                            </StyledLink> 
                        </TableData>
                    </tr>

                ))    
            }
        </TableUsers>
    </TableContainer>
    </>
)

export default ListadoClientes