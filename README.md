# Tic-Tac-Toe

The Tic Tac Toe game is implemented in HTML, CSS, and JavaScript.
Table of Contents

    HTML Structure
    CSS Styling
    JavaScript Logic
    Game Rules
    Responsive Design

1. HTML Structure <a name="html-structure"></a>

The HTML structure defines the layout and elements of the Tic Tac Toe game. Key elements include the game board, buttons, and message containers.

    <!DOCTYPE html>: Document type declaration for HTML5.
    <html>: Root element.
    <head>: Contains meta information, title, and links to stylesheets.
    <body>: Main content area.

2. CSS Styling <a name="css-styling"></a>

The CSS styles provide the visual appearance of the game. Key styling elements include the game board, buttons, and responsive design.

    body: Background color and general styling.
    .main-box: Styling for the game board.
    .box: Styling for individual game cells.
    .reset, .new: Styling for reset and new game buttons.
    .msg-container: Styling for the message container.

3. JavaScript Logic <a name="javascript-logic"></a>

The JavaScript logic handles game mechanics, including player moves, checking for a winner, and resetting the game.

    const boxes: Selects all game cells.
    const resetBtn, const newGameBtn: Selects reset and new game buttons.
    const msgContainer, const msg: Selects message container and message elements.
    Functions: disableBox, enableBox, reSet, gameDraw, showWinner, checkWinner.

4. Game Rules <a name="game-rules"></a>

The game follows standard Tic Tac Toe rules, where players take turns placing their symbols (X or O) on the board. The game ends when a player has three symbols in a row horizontally, vertically, or diagonally. A draw is declared if no player achieves a winning combination.

5. Responsive Design <a name="responsive-design"></a>

The game is designed to be responsive, with specific styles for smaller screens (max-width: 480px). This ensures a consistent user experience across different devices.
