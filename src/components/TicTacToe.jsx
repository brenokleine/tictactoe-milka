import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicTacToe.css';
import { Modal, Button } from 'react-bootstrap';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const navigate = useNavigate();

  //handles the click on each cell
  const handleCellClick = (index) => {
    if (!gameOver && board[index] === '') {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      checkWinner(newBoard);
    }
  };

  // renders each cell based on the board state
  const renderCell = (index) => {
    return (
      <button className={index + " gameBtn shadow-lg"} onClick={() => handleCellClick(index)}>
        {board[index]}
      </button>
    );
  };

  //checks if there is a winner
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6], 
    ];

    for(const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setGameOver(true);
        return;
      }
    }
    
    if(!board.includes('')){
      setWinner('draw');
      setGameOver(true);
    }
  }

  const restartGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
    setGameOver(false);
  }
  
  const confirmRestartGame = () => {
    restartGame();
    setShowRestartModal(false);
  };

  //if its a draw asks for restart, if a player won goes to coupon page
  useEffect(() => {
    setTimeout(() => {
      if(winner === 'draw'){
        setShowRestartModal(true);
      }
      else if(winner === 'X' || winner === 'O'){
        navigate('/Coupon', {state: { winner }});
      }
    }, 2000);
  }, [winner, navigate]);

  return (
    <>
      <div className="container">
        <div className='game-text'>
          <h1>Win the game for a Coupon on Milka™ products!</h1>
        </div>
        
        <div className="tic-tac-toe shadow-lg">
          <div className="board">
            {board.map((cell, index) => (
              <div key={index} >
                {renderCell(index)}
              </div>
            ))}
        </div>

        <div className="result">
          {winner === null && <h1 className="player-turn">Current Player: {currentPlayer}</h1>}
          {winner && winner !== 'draw' && <h1 className="endgame">Player {winner} Won!</h1>}
          {winner === 'draw' && <h1 className="endgame">Its a Draw!</h1> }
        </div>

          <Modal show={showRestartModal} centered>
            <Modal.Body className='my-modal'>
              <h2>It's a draw! Restart the game and try again.</h2>
              <Button variant="secondary" className='restart-btn' onClick={confirmRestartGame}>Restart</Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
