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

PalettoTestCase.prototype.testStory4two = function () {
    var e = new Engine();
    e.move("A6");
    e.nextPlayer();
    assertException(function () {
        e.move("C3");
    }, "ExceptionBadToken");
};