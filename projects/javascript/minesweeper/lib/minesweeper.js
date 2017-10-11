'use strict';

var board = [[], [], []];

board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

var printBoard = function printBoard(board) {
    console.log("Current Board: ");
    console.log(board[0][0].join('|'));
};

console.log(board);