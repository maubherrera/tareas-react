import { FaTimes } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete, onToggle }) => {

    return (
        <div className={`tarea ${tarea.terminada ? 'terminada' : ''}`} onDoubleClick={() => onToggle(tarea.id)} >
            <h3>{tarea.texto} <FaTimes onClick={() => onDelete(tarea.id)} style={{ color: 'red', cursor: 'pointer' }} /> </h3>
            <p>{tarea.fecha}</p>
        </div>
    )
}

export default Tarea

