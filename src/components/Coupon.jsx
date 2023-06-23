import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Coupon.css';
import { Modal, ModalBody, Button } from 'react-bootstrap';

const Coupon = () => {
  
    const location = useLocation();
    const winner = location.state && location.state.winner;
    const navigate = useNavigate();

    return (
        <>
            <div className="coupon-container">
                <Modal show={true} centered size='bg'>
                    <Modal.Title className='modal-title'>
                        <h1 className='coupon-title'>Congratulations player {winner ? winner : ''}</h1>
                        <h2>You won a 10% OFF coupon on Milka™ products!</h2>
                    </Modal.Title>
                    <Modal.Body>
                        <img src="/img/10off.png" alt="10off" className="milka2" />
                    </Modal.Body>
                    <Modal.Footer className='modal-footer'>
                        <Button variant="secondary" className='play-again' onClick={() => navigate("/TicTacToe")}>Play Again</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
    }

export default Coupon