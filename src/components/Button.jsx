
const Button = ({ texto, color, onClick }) => {

    /*
    const onClick = () => {
        console.log('click')
    }
    */

    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{texto}</button>
    )
}

export default Button