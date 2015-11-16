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