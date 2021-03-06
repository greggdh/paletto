'use strict';

function ExceptionBadToken() {
    "use strict";
    this.name = "ExceptionBadToken";
}

var Engine = function () {

// private attributes and methods
    var board, tokenList, color, player, curPlayer, winner;
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
        winner = -1;
        color = {black : 0, white : 1, red : 2, green : 3, blue : 4, yellow : 5};
        board = [
            [0, 3, 1, 4, 2, 1],
            [5, 1, 3, 2, 5, 4],
            [4, 5, 4, 1, 0, 2],
            [2, 0, 2, 3, 4, 1],
            [1, 3, 5, 0, 5, 3],
            [5, 4, 0, 2, 3, 0]
        ];

    };
    var check_piece_top = function (column) {
        return (column !== 0);
    };
    var check_piece_left = function (line) {
        return (line !== 0);
    };
    var check_piece_right = function (line) {
        return (line !== 5);
    };
    var check_piece_bottom = function (column) {
        return (column !== 5);
    };

    var checkNeighborLeft = function (line, column) {
        if (check_piece_top(column)) {
            if (board[line][column - 1] !== -1) {
                return {"x" : 1, "y" : true};
            }
        }
        return {"x" : 0, y : false};
    };
    var checkNeighborTop = function (line, column) {
        if (check_piece_left(line)) {
            if (board[line - 1][column] !== -1) {
                return {"x" : 1, "y" : true};
            }
        }
        return {"x" : 0, "y" : false};
    };
    var checkNeighborRight = function (line, column) {
        if (check_piece_bottom(column)) {
            if (board[line][column + 1] !== -1) {
                return {"x" : 1, "y" : true};
            }
        }
        return {"x" : 0, "y" : false};
    };
    var checkNeighborLow = function (line, column) {
        if (check_piece_right(line)) {
            if (board[line + 1][column] !== -1) {
                return {"x" : 1, "y" : true};
            }
        }
        return {"x" : 0, "y" : false};
    };
    var checkTop = function (line, column, tt, tl, tr) {
        if (tt && tl && board[line - 1][column - 1] === -1) {
            return false;
        }
        if (tt && tr && board[line + 1][column - 1] === -1) {
            return false;
        }
        return true;
    };
    var checkLow = function (line, column, tl, tb, tr) {
        if (tb && tl && board[line - 1][column + 1] === -1 ){
            return false;
        }
        if (tb && tr && board[line + 1][column + 1] === -1) {
            return false;
        }
        return true;
    };
    var checkCross = function (tt, tl, tb, tr) {
        if (tt && tb && !tl && !tr) {
            return false;
        }
        if (tl && tr && !tt && !tb) {
            return false;
        }
        return true;
    };
    var checkTypeNeighbor = function (line, column, tt, tl, tb, tr) {
        var top, low, cross;
        top = checkTop(line, column, tt, tl, tr);
        low = checkLow(line, column, tl, tb, tr);
        cross = checkCross(tt, tl, tb, tr);
        if (top && low && cross) {
            return true;
        }
        return false;
    };
    var goodToken = function (line, column) {
        var cpt = 0, t, l, b, r;
        cpt = checkNeighborLow(line, column).x + checkNeighborRight(line, column).x;
        cpt = cpt + checkNeighborTop(line, column).x + checkNeighborLeft(line, column).x;
        t = checkNeighborLeft(line, column).y;
        l = checkNeighborTop(line, column).y;
        b = checkNeighborRight(line, column).y;
        r = checkNeighborLow(line, column).y;
        if (cpt <= 1) {
            return true;
        }
        if (cpt === 2) {
            return checkTypeNeighbor(line, column, t, l, b, r);
        }
        return false;
    };
    var testIsInit = function (i, j) {
        if (board[i][j] === board[i][j + 1] || board[i][j] === board[i + 1][j]) {
            return false;
        }
        return true;
    };
    var getNumberTokens = function () {
        var cpt = 0;
        foreach(6, 6, function (i, j) {
            if (board[i][j] !== -1) {
                cpt++;
            }
        });
        return cpt;
    };
    var checkWinner = function () {
        foreach(2, 6, function (i, j) {
            if (tokenList[i][j] === 6) {
                winner = curPlayer;
            }
        });
        if (getNumberTokens() === 0) {
            winner = curPlayer;
        }
    };
    var takeAllToken = function (saveColor) {
        foreach(6, 6, function (i, j) {
            if (board[i][j] === saveColor && goodToken(i, j)){
                tokenList[curPlayer][saveColor] += 1;
                board[i][j] = -1;
                checkWinner();
            }
        });
    };
// public methods
    this.isInit = function () {
        var i, j;
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 5; j++) {
                if (!testIsInit(i, j)) {
                    return false;
                }
            }
        }
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
            checkWinner();
        } else {
            throw new ExceptionBadToken();
        }
    };
    this.moveAll = function (token) {
        var saveColor = null;
        var column = token.charCodeAt(0) - 65;
        var line = token.charCodeAt(1) - 49;
        if (board[line][column] !== -1 && goodToken(line, column)) {
            saveColor = board[line][column];
            tokenList[curPlayer][saveColor] += 1;
            board[line][column] = -1;
            checkWinner();
            takeAllToken(saveColor);
        } else {
            throw new ExceptionBadToken();
        }
    };
    this.getNumberToken = function () {
        return getNumberTokens();
    };
    this.nextPlayer = function () {
        if (curPlayer === player.player1) {
            curPlayer = player.player2;
        } else {
            curPlayer = player.player1;
        }
    };
    this.playMoveList = function (baseList) {
        var list = baseList.split(";"), i, move;
        for (i = 0; i < list.length; i++) {
            move = list[i].charAt(0) + list[i].charAt(1);
            this.move(move);
        }
    };
    this.getWinner = function () {
        return winner;
    };

    initBoard();
};