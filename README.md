# Tic-Tac-Toe Game

A classic two-player Tic-Tac-Toe game built with pure **HTML, CSS, and vanilla JavaScript**. This project was created as a **JavaScript learning project** to practice DOM manipulation, event handling, and game logic.

## Features

- Two-player local gameplay (Player X vs Player O)
- Automatic turn switching after every move
- Win detection across all 8 winning patterns (3 rows, 3 columns, 2 diagonals)
- Draw detection when all 9 boxes are filled without a winner
- Winner announcement overlay with a "New Game" button
- "Reset Game" button to restart the current round anytime
- Game board is hidden after a win or draw and restored on reset
- Blocks clicking on already-filled boxes

## Project Structure

```
├── index.html    # Page structure: game board, buttons, message overlay
├── style.css     # Styling and layout (responsive, vmin-based sizing)
├── app.js        # All game logic (JavaScript)
└── README.md     # Project documentation
```

## How to Run

No build tools or dependencies are required. Simply:

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.

## Gameplay

- Players take turns clicking the 3×3 grid.
- Player **O** always starts the game (turn alternates: O → X → O → ...).
- The first player to line up three of their marks in a row, column, or diagonal wins.
- If all 9 boxes are filled and no one has three in a row, the game is a **draw**.

## How the Game Logic Works

### Turn handling

```js
if(turnO){
    box.innerText = "O";
    turnO = false;
}else{
    box.innerText = "X";
    turnO = true;
}
```

A `turnO` boolean tracks whose turn it is. Each click sets the box text, flips the turn, disables the box, increments the move counter, and checks for a winner.

### Win detection

```js
const checkWinner = () => {
    for(let pattern of winPatterns){
        // ...compares the values of the 3 boxes in each pattern
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
}
```

All 8 winning combinations (rows, columns, diagonals) are stored in the `winPatterns` array. After every move, the three positions of each pattern are compared.

### Draw detection

After each move the move counter (`count`) is incremented. If `count === 9` and no winner was found, `gameDraw()` is called.

### Game state functions

| Function        | Purpose                                                        |
|-----------------|----------------------------------------------------------------|
| `checkWinner()` | Loops through winning patterns and announces a winner if found |
| `showWinner()`  | Displays the winner message and disables all boxes             |
| `gameDraw()`    | Shows the draw message and disables all boxes                  |
| `disableBoxes()`| Disables every box (used after win/draw)                       |
| `enableBoxes()` | Clears and re-enables all boxes for a new round                 |
| `resetGame()`   | Resets turn/counter and clears the board (new round)           |

### UI hiding

The `.hide` CSS class (`display: none`) is toggled to show/hide the winner/draw overlay and the game board:

- `msgContainer` is shown on win/draw and hidden on reset
- `mainClass` (the board) is hidden on win/draw and shown on reset

## CSS Highlights

- Fully responsive sizing using `vmin` units for the board and boxes
- Rounded, shadowed cells with a clean color palette:
  - Background: `#548687`
  - Boxes: `#ffffc7` with `#b0413e` marks
  - Buttons: `#191913` with white text
- Flexbox layout to center the grid and the overlay

## Learning Outcomes

This project helped practice:

- `document.querySelector` / `querySelectorAll` to select DOM elements
- `addEventListener` for handling button and box clicks
- Arrow functions and array methods like `forEach` and `for...of`
- `classList.add` / `classList.remove` to toggle CSS classes
- Comparison logic for win/draw detection
- Disabling/enabling buttons dynamically via the `disabled` property

## Possible Improvements / Ideas

- Add score tracking across rounds
- Add a single-player mode versus an AI opponent
- Add sound effects and animations
- Use `checkWinner` to return a boolean so draw detection is more robust
- Add difficulty levels for the AI