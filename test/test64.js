'use strict';

var PalettoTestCase64 = TestCase("PalettoTestCase64");

PalettoTestCase64.prototype.testStory8 = function () {
    var e = new Engine64();
    assertTrue(e.isInit());
};

PalettoTestCase64.prototype.testStory9 = function () {
    var e = new Engine();
    e.moveAll("A1");
    e.nextPlayer();
    e.moveAll("B1");
    e.nextPlayer();
    e.moveAll("F4");
    e.nextPlayer();
    e.moveAll("D6");
    e.nextPlayer();
    e.moveAll("E5");
    e.nextPlayer();
    e.moveAll("D1");
    e.nextPlayer();
    e.moveAll("C6");
    e.nextPlayer();
    e.moveAll("A4");
    e.nextPlayer();
    e.moveAll("A5");
    e.nextPlayer();
    e.moveAll("E2");
    e.nextPlayer();
    e.moveAll("D2");
    e.nextPlayer();
    e.moveAll("C2");
    e.nextPlayer();
    assertTrue(e.getWinner() === 1);
};