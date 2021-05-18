import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const VentanaModal = ({showModal}) => {
    const [show,setshow] = useState(showModal)
    const changeShow = () => {
        setshow(!show)
    }
    return <>
            <Modal show={show}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary">
                    Close
                </Button>
                <Button variant="primary" onClick={changeShow}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    
}
export default VentanaModal