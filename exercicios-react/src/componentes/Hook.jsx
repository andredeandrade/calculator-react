import React from 'react'

export default props => {
    const [contador, setContador] = React.useState(100)
    const [status, setParOuImpar] = React.useState('Par')

    React.useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    }, [contador])

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador+1)}>
                Inc
            </button>
        </div>
    )
}