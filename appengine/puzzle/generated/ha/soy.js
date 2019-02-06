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
  return '<div style="display: none"><span id="Puzzle_animal1">Agwagwa</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Gashi</span><span id="Puzzle_animal1Trait2">Baki</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Mage</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Gashin baki</span><span id="Puzzle_animal2Trait2">Gashi</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">\u0198udan zuma</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Zuma</span><span id="Puzzle_animal3Trait2">Mai harbi</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Dodon-ko\u0257i</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Kwanso</span><span id="Puzzle_animal4Trait2">Yau\u0199i</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">hoto:</span><span id="Puzzle_legs">\u0199afafu:</span><span id="Puzzle_legsChoose">za\u0253i...</span><span id="Puzzle_traits">halaye:</span><span id="Puzzle_error0">Da kyau! Duk bulullukan guda %1 dai dai ne.</span><span id="Puzzle_error1">Kusa! Bulo \u0257aya ba dai dai ba ne.</span><span id="Puzzle_error2">Bululluka %1 ba dai dai ba ne.</span><span id="Puzzle_tryAgain">Bulo \u0257in da aka bayar da haske ba dai dai ba ne. Ci gaba da \u0199o\u0199ari.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: '\u018Aaurin Gwarmai'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Help</button>&nbsp;<button id="checkButton" class="primary">Duba amsoshi</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Domin kowace dabba (koriya), li\u0199a hoton ta, za\u0253i yawan \u0199afafunta, sannan ka yi jeri na halayen ta.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
