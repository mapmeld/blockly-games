// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Puzzle.soy.
 */

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">P\u1EB9p\u1EB9y\u1EB9</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Iy\u1EB9</span><span id="Puzzle_animal1Trait2">\u1EB8nu \u1EB9y\u1EB9</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Ol\u00F3gb\u00F2</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Igbekuro</span><span id="Puzzle_animal2Trait2">Irun</span><span id="Puzzle_animal2HelpUrl">https://yo.wikipedia.org/wiki/Ol%C3%B3gb%C3%B2</span><span id="Puzzle_animal3">Oyin</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Oyin</span><span id="Puzzle_animal3Trait2">Agb\u1ECDn</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Igbin</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Ikarahun</span><span id="Puzzle_animal4Trait2">Iw\u1ECDn didun</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">aworan:</span><span id="Puzzle_legs">ese:</span><span id="Puzzle_legsChoose">yan...</span><span id="Puzzle_traits">aw\u1ECDn iwa:</span><span id="Puzzle_error0">Ope! Gbogbo \u1EB9 %1 aw\u1ECDn bul\u1ECD\u1ECDki j\u1EB9 pipeye.</span><span id="Puzzle_error1">O ku di\u1EB9! Bul\u1ECD\u1ECDki kan j\u1EB9 aipeye.</span><span id="Puzzle_error2">%1 aw\u1ECDn bul\u1ECD\u1ECDki j\u1EB9 aipeye.</span><span id="Puzzle_tryAgain">Bul\u1ECD\u1ECDki ti fihan ko peye. Gbiyanju siwaju si.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: 'Adojuru'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">\u00CCr\u00E0nw\u1ECD\u0301</button>&nbsp;<button id="checkButton" class="primary">\u1E62ay\u1EB9wo Aw\u1ECDn Idahun</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Fun \u1EB9ranko k\u1ECD\u1ECDkan (alaw\u1ECD ewe),  aworan r\u1EB9 wa nib\u1EB9, yan iye \u1EB9s\u1EB9 ti o ni, ki o si \u1E63e akop\u1ECD aw\u1ECDn iwar\u1EB9</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
