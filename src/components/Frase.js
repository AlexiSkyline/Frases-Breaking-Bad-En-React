import styled from '@emotion/styled'
import React from 'react'

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 900px;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 3rem;
        font-size: 1.5rem;
        &::before {
            content: open-quote;
            font-size: 7rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.1rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`;
export const Frase = ({ frase }) => {

    return (
        
        <ContenedorFrase>
            <h1> { frase.quote } </h1>
            <p>- { frase.author } </p>
        </ContenedorFrase>

    )
}
