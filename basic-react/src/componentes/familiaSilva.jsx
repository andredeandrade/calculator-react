import React from 'react'
import Membro from './membro'

export default props =>
    <div>
        <Membro nome="André" sobrenome={props.sobrenome} />
        <Membro nome="Daniela" sobrenome="Silva" />
    </div>