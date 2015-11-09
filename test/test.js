'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    assertTrue(e.getCase(0,0) === 0);
};

PalettoTestCase.prototype.testGetColor = function () {
    var e = new Engine();
    assertTrue(e.getColor(0) === "black");
};