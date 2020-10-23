import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Menu = styled.ul`
    display:flex;
    justify-content:space-between;
    background-color:#333;
    padding-left:0;
    margin-top:0;
    margin-bottom:1rem;
    list-style:none;
`

const MenuItem = styled.li`
    padding:1rem;
`

const MenuLink = styled(Link)`
    text-decoration:none;
    text-transform:uppercase;
    color:#fff;
`


const Header = () =>  (
    <nav>
        <Menu>
            <MenuItem>
                <MenuLink to="/">Inicio</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink to="/automotores">Automotores</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink to="/ciclomotores">Ciclomotores</MenuLink>
            </MenuItem>
        </Menu>
    </nav>
)

export default Header