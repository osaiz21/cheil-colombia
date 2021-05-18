import React, {useState} from 'react'
import Table  from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import VentanaModal from './Modal'

const Grid = ( {countHoteles} ) => {
    const [showModal, setShow] = useState(false);
    const changeShow = () => {
        setShow(!showModal)
    }
    
    return <>
        { showModal && <VentanaModal showModal={showModal}/>}
        <Table striped bordered hover responsive >
            <caption>List of users</caption>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
                <th scope="col">capacidad</th>
                <th scope="col">ubicacion</th>
                <th scope="col">observacion</th>
                <th scope="col">Accion</th>
            </tr>
            </thead>
            <tbody>
            {
                countHoteles.map(element => ( 
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.nombre}</td>
                        <td>{element.capacidad}</td>
                        <td>{element.ubicacion}</td>
                        <td>{element.observacion}</td>
                        <td>
                            <Button variant="outline-info" id={element.id} onClick={(e) => changeShow(e) }>Info</Button>
                            <Button variant="outline-danger" >Eliminar</Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
  </>
}
export default Grid
