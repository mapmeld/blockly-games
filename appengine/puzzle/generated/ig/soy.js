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
  return '<div style="display: none"><span id="Puzzle_animal1">\u1ECCb\u1ECDgw\u1EE5</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Nku</span><span id="Puzzle_animal1Trait2">\u1ECCn\u1EE5</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Pusi</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Akp\u1EE5</span><span id="Puzzle_animal2Trait2">Aji</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">A\u0144u</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mman\u1EE5 a\u1E45\u1EE5</span><span id="Puzzle_animal3Trait2">\u1ECCgba</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Eju</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Az\u1EE5</span><span id="Puzzle_animal4Trait2">\u1ECCn\u1EE5n\u1ECD</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">foto:</span><span id="Puzzle_legs">\u1EE5kw\u1EE5:</span><span id="Puzzle_legsChoose">h\u1ECDr\u1ECD...</span><span id="Puzzle_traits">\u00E0gw\u00E0:</span><span id="Puzzle_error0">Zuru ok\u00E8! Ihe %1 ng\u1ECDng\u1ECD niile bu ihe ziri ezi.</span><span id="Puzzle_error1">Ihe f\u1ECDr\u1ECD nke nta ka \u1ECD b\u1EE5r\u1EE5! Otu ng\u1ECDng\u1ECD ezighi ezi.</span><span id="Puzzle_error2">%1 ng\u1ECDng\u1ECD ezighi ezi.</span><span id="Puzzle_tryAgain">Ihe nkesa ah\u1EE5 egosiri ezighi ezi. Na-agbal\u1ECB.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: 'Mgbagwoju anya'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Nkw\u00E1do</button>&nbsp;<button id="checkButton" class="primary">Nyocha Az\u1ECBza</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Maka an\u1EE5 \u1ECD b\u1EE5la (akw\u1EE5kw\u1ECD nd\u1EE5), tinye foto ya, h\u1ECDr\u1ECD \u1ECDn\u1EE5\u1ECDg\u1EE5 \u1EE5kw\u1EE5 ya, ma mee \u1ECBk\u1ECDk\u1ECDta \u00E0gw\u00E0 ya.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
