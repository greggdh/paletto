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