import Button from './Button'

const Header = ({ titulo, onAdd, mostrarForm }) => {

    const onClick = () => {
        console.log('click')
    }


    return (
        <header className='header'>
            <h1>{titulo}</h1>
            <Button texto={mostrarForm ? 'Cerrar' : 'Agregar'} color={mostrarForm ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    titulo: 'Tareas'
}

/*
const estiloEncabezado = {
    color: 'red',
    backgroundColor: 'black'
}
*/

export default Header