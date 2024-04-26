
import './App.css';

// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => '')));
  const [isSolved, setIsSolved] = useState(false);
  function isSafe(grid, row, col, num)
{

	for(let x = 0; x <= 8; x++)
		if (grid[row][x] === num)
			return false;

	for(let x = 0; x <= 8; x++)
		if (grid[x][col] === num)
			return false;


	let startRow = row - row % 3, 
		startCol = col - col % 3;
		
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; j++)
			if (grid[i + startRow][j + startCol] === num)
				return false;

	return true;
}
  const handleInputChange = (e, row, col) => {
    const newBoard = [...board];
    newBoard[row][col] = (Number(e.target.value) >0 && Number(e.target.value) <10 ) && isSafe(board,row , col , Number(e.target.value)) ?  Number(e.target.value) : "";
    setBoard(newBoard);
  };


  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => (
          <input
            type="text"
            className="cell"
            key={colIndex}
            value={cell}
            onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
          />
        ))}
      </div>
    ));
  };
 function handleClick(){
  if(isSolved){
    setBoard(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => '')));
    setIsSolved(false);
  } 
  else solveBoard();
 }
function solveBoard(){
    
let N = 9;
function solveSudoku(grid, row, col)
{
	
	if (row === N - 1 && col === N)
		return true;

	if (col === N)
	{
		row++;
		col = 0;
	}

	if (grid[row][col] !== "")
		return solveSudoku(grid, row, col + 1);

	for(let num = 1; num < 10; num++)
	{
	
		if (isSafe(grid, row, col, num))
		{
		
			grid[row][col] = num;

			if (solveSudoku(grid, row, col + 1))
				return true;
		}
		
		grid[row][col] = "";
	}
	return false;
}




function isSafe(grid, row, col, num)
{

	for(let x = 0; x <= 8; x++)
		if (grid[row][x] === num)
			return false;

	for(let x = 0; x <= 8; x++)
		if (grid[x][col] === num)
			return false;


	let startRow = row - row % 3, 
		startCol = col - col % 3;
		
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; j++)
			if (grid[i + startRow][j + startCol] === num)
				return false;

	return true;
}

let grid = [...board].map(b => [...b]);

if (solveSudoku(grid, 0, 0)){
	setBoard(grid);
  setIsSolved(true);}

}
 
  return (
    <div className="container">
      <h1>Sudoku Solver</h1>
      <div className="board">{renderBoard()}</div>
      <button onClick={handleClick}>{isSolved ? "Reset" : "Solve" }</button>
    </div>
  );
}

export default App;

