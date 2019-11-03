import React from 'react'

export default props =>
    <button
        onClick={ () => props.notificarSaida('Shopping') }>
        vou sair
    </button>