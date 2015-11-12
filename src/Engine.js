'use strict';

function ExceptionBadToken() {
    "use strict";
    this.name = "ExceptionBadToken";
}

var Engine = function () {

// private attributes and methods
    var board, tokenList, color, player, curPlayer;
    var foreach = function (n1, n2, callback) {
        var i, j;
        for (i = 0; i < n1; i++) {
            for (j = 0; j < n2; j++) {
                callback(i, j);
            }
        }
    };
    var initTokenList = function () {
        var k;
        for (k = 0; k < 6; k++) {
            tokenList[k] = new Array (6);
        }
        foreach(2, 6, function (i, j) {
            tokenList[i][j] = 0;
        });
    };
    var initBoard = function () {
        player = {player1 : 0, player2 : 1};
        curPlayer = player.player1;
        tokenList = new Array(2);
        initTokenList();
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
    var goodToken = function (line, column) {
        return true;
    };
// public methods
    this.isInit = function () {
        foreach(5, 5, function (i, j) {
            if (board[i][j] === board[i][j + 1] || board[i][j] === board[i + 1][j]) {
                return false;
            }
        });
        return true;
    };
    this.getCaseBoard = function (line, column) {
        return board[line][column];
    };
    this.getCaseList = function (players, colors) {
        return tokenList[players][colors];
    };
    this.move = function (token) {
        var saveColor = null;
        var column = token.charCodeAt(0) - 65;
        var line = token.charCodeAt(1) - 49;
        if (board[line][column] !== -1 && goodToken(line, column)) {
            saveColor = board[line][column];
            tokenList[curPlayer][saveColor] += 1;
            board[line][column] = -1;
        } else {
            throw new ExceptionBadToken();
        }
    };
    this.getNumberToken = function () {
        var cpt = 0;
        foreach(6, 6, function (i, j) {
            if (board[i][j] !== -1) {
                cpt++;
            }
        });
        return cpt;
    };
    this.nextPlayer = function () {
        if (curPlayer === player.player1) {
            curPlayer = player.player2;
        } else {
            curPlayer = player.player1;
        }
    };
    initBoard();
};