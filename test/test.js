'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    assertTrue(e.isInit());
};

PalettoTestCase.prototype.testStory2 = function () {
    var e = new Engine();
    e.move("A6");
    assertTrue(e.getCaseBoard(5, 0) === -1);
};

PalettoTestCase.prototype.testStory3 = function () {
    var e = new Engine();
    e.move("A6");
    assertTrue(e.getCaseBoard(5, 0) === -1);
    assertTrue(e.getCaseList(0, 5) === 1);
    assertTrue(e.getNumberToken() === 35);
};

PalettoTestCase.prototype.testStory4one = function () {
    var e = new Engine();
    e.move("A6");
    e.nextPlayer();
    assertException(function () {
        e.move("A6");
    }, "ExceptionBadToken");
};

PalettoTestCase.prototype.testStory4 = function () {
    var e = new Engine();
    e.move("A1");
    e.move("A2");
    e.move("A3");
    e.move("B1");
    e.move("B2");
    e.move("B3");
    e.move("C1");
    e.move("C2");
    e.move("A6");
    e.move("A5");
    e.move("B6");
    e.move("F6");
    e.move("F5");
    e.move("F4");
    e.move("F3");
    e.move("F2");
    e.move("E6");
    e.move("E5");
    e.move("E4");
    e.move("D6");
    e.move("D5");
    e.move("D4");
    e.nextPlayer();
    e.move("E3");
    e.move("C6");
    assertTrue(e.getCaseList(1, 0) === 2);
};

PalettoTestCase.prototype.testStory5 = function () {
    var e = new Engine();
    e.move("A1");
    e.move("A2");
    e.move("A3");
    e.move("B1");
    e.move("B2");
    e.move("B3");
    e.move("C1");
    e.move("C2");
    e.move("A6");
    e.move("A5");
    e.move("B6");
    e.move("F6");
    e.move("F5");
    e.move("F4");
    e.move("F3");
    e.move("F2");
    e.move("E6");
    e.move("E5");
    e.move("E4");
    e.move("D6");
    e.move("D5");
    e.move("D4");
    assertException(function () {
        e.move("C3");
    }, "ExceptionBadToken");
};

PalettoTestCase.prototype.testPlayMoveList = function () {
    var e = new Engine();
    var moveList = "A1;A2";
    e.playMoveList(moveList);
    assertTrue(e.getCaseList(0, 0) === 1);
    assertTrue(e.getCaseList(0, 5) === 1);
    assertTrue(e.getCaseBoard(0, 0) === -1);
    assertTrue(e.getCaseBoard(1, 0) === -1);
};

PalettoTestCase.prototype.testStory6 = function () {
    var e = new Engine();
    var moveList = "A1;F6";
    e.playMoveList(moveList);
    e.nextPlayer();
    moveList = "B1;E6;F5";
    e.playMoveList(moveList);
    e.nextPlayer();
    moveList = "A2;A6";
    e.playMoveList(moveList);
    e.nextPlayer();
    e.move("A3");
    e.nextPlayer();
    moveList = "A5;F4;F1;C1";
    e.playMoveList(moveList);
    e.nextPlayer();
    moveList = "E1;F3;D6;A4";
    e.playMoveList(moveList);
    e.nextPlayer();
    moveList = "F2;B6";
    e.playMoveList(moveList);
    e.nextPlayer();
    moveList = "E2;E5";
    e.playMoveList(moveList);
    e.nextPlayer();
    moveList = "C6;D5;E3";
    e.playMoveList(moveList);
    e.nextPlayer();
    e.move("B5");
    e.nextPlayer();
    e.move("B4");
    assertTrue(e.getCaseList(0, 0) === 6);
    assertTrue(e.getWinner() === 0);

};