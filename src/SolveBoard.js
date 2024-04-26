
// let N = 9;
// function solveSudoku(grid, row, col)
// {
	
// 	if (row === N - 1 && col === N)
// 		return true;

// 	if (col === N)
// 	{
// 		row++;
// 		col = 0;
// 	}

// 	if (grid[row][col] !== "")
// 		return solveSudoku(grid, row, col + 1);

// 	for(let num = 1; num < 10; num++)
// 	{
	
// 		if (isSafe(grid, row, col, num))
// 		{
		
// 			grid[row][col] = num;

// 			if (solveSudoku(grid, row, col + 1))
// 				return true;
// 		}
		
// 		grid[row][col] = 0;
// 	}
// 	return false;
// }

// function print(grid)
// {
// 	for(let i = 0; i < N; i++)
// 	{
// 		for(let j = 0; j < N; j++)
// 			document.write(grid[i][j] + " ");
			
// 		document.write("<br>");
// 	}
// }


// function isSafe(grid, row, col, num)
// {

// 	for(let x = 0; x <= 8; x++)
// 		if (grid[row][x] === num)
// 			return false;

// 	for(let x = 0; x <= 8; x++)
// 		if (grid[x][col] === num)
// 			return false;


// 	let startRow = row - row % 3, 
// 		startCol = col - col % 3;
		
// 	for(let i = 0; i < 3; i++)
// 		for(let j = 0; j < 3; j++)
// 			if (grid[i + startRow][j + startCol] === num)
// 				return false;

// 	return true;
// }

// let grid = board;

// if (solveSudoku(grid, 0, 0))
// 	print(grid)
// else
// 	document.write("no solution exists ")

//  let temp =    [ [ 3, "", 6, 5, "", 8, 4, "", "" ],
//     [ 5, 2, "", "", "", "", "", "", "" ],
//     [ "", 8, 7, "", "", "", "", 3, 1 ],
//     [ "", "", 3, "", 1, "", "", 8, "" ],
//     [ 9, "", "", 8, 6, 3, "", "", 5 ],
//     [ "", 5, "", "", 9, "", 6, "", "" ],
//     [ 1, 3, "", "", "", "", 2, 5, "" ],
//     [ "", "", "", "", "", "", "", 7, 4 ],
//     [ "", "", 5, 2, "", 6, 3, "", "" ] ]