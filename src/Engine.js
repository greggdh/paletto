'use strict';

var Engine = function () {

// private attributes and methods
    var board, color;
    var initBoard = function () {
        color = {black : 0, white : 1, red : 2, green : 3, blue : 4, yellow : 5};
        board = [
            [0,3,1,4,2,1],
            [5,1,3,2,5,4],
            [4,5,4,1,0,2],
            [2,0,2,3,4,1],
            [1,3,5,0,5,3],
            [5,4,0,2,3,0]
        ];

    };
    var foreach = function (n, callback) {
        var i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                callback(i, j);
            }
        }
    };

// public methods
    this.isInit = function () {
        foreach(5, function (i, j) {
            if (board[i][j] === board[i][j + 1] || board[i][j] === board[i + 1][j]) {
                return false;
            }
        });
        return true;
    };
    this.getCase = function (line, column) {
        return board[line][column];
    };
    this.getColor = function (number) {
        var colors;
        if (number === 0) {
            colors = "black"
        }
        return colors;
    };
    initBoard();
};
