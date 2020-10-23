import React from 'react';
import styled from 'styled-components'

const FooterStyled = styled.footer`
    background-color: black;
    color: #fff;
    width:100%;
    position:fixed;
    bottom:0;
    padding:0;
    margin:0;
`

const Footer = () => (
        <FooterStyled>
            <p>Soy un pie de pagina.</p>
        </FooterStyled>
);

export default Footer