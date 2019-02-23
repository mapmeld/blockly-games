// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Bird.soy.
 */

goog.provide('Bird.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Bird.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">ko ni aran</span><span id="Bird_heading">ak\u1ECDle</span><span id="Bird_noWormTooltip">Ipo naa nigbati eye ko ba ri aran gba.</span><span id="Bird_headingTooltip">Lo si ipa \u1ECDna ti igun ti a fifun: 0 si apa otun, \\n90 je ona oke tara, ati b\u1EB9b\u1EB9 l\u1ECD. </span><span id="Bird_positionTooltip">x ati y samisi ipo eye. Nigbati x = 0 eye naa \\nsunm\u1ECD igun apa osi, nigbati x = 100 o sunm\u1ECD igun \\napa otun. Nigbati y = 0 eye naa wa ni isale, \\nnigbati y = 100 o wa ni oke. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Bird.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: '\u1EB8y\u1EB9'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Fipam\u1ECD ki o si sop\u1ECD m\u1ECD aw\u1ECDn bul\u1ECD\u1ECDki."><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u1E62i\u1E63e lori eto naa ti o k\u1ECD"><img src="common/1x1.gif" class="run icon21"> \u1E62e Eto</button><button id="resetButton" class="primary" style="display: none" title="Da eto naa duro ki o si tun ipele naa to pada."><img src="common/1x1.gif" class="stop icon21"> Atunto</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Yi igun ak\u1ECDle pada lati j\u1EB9 ki eye gba aran ati lati ba sinu it\u1EB9 r\u1EB9</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Lo bul\u1ECD\u1ECDki yii lati l\u1ECD si akori kan ti o ba ni aran, tabi akori miran ti o ko ba ni aran.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' j\u1EB9 ipo petele ti o wa bayi. Lo bulooki yii lati l\u1ECD si akori kan ti o ba j\u1EB9 pe \'x\' kere ju n\u1ECDmba kan l\u1ECD, tabi akori miiran bib\u1EB9k\u1ECD.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>T\u1EB9 aami lati se ayipada \'bi\' naa pada.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Ipele yii nilo awon mejeji \'omiiran bi\' ati  \'bib\u1EB9\u1EB9k\u1ECD\' bulooki</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Bulooki \'ati\' naa j\u1EB9 otit\u1ECD nikan ti aw\u1ECDn mejeji igbew\u1ECDle ba j\u1EB9 otit\u1ECD.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Fa \'bib\u1EB9\u1EB9k\u1ECD\' bulooki sinu \'bi\'.</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Bird.soy.start.soyTemplateName = 'Bird.soy.start';
}


Bird.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="bird_heading"></block>' + ((opt_ijData.level >= 2) ? ((opt_ijData.level == 4 || opt_ijData.level == 5) ? '<block type="bird_noWorm" disabled="true"></block>' : '<block type="bird_noWorm"></block>') + ((opt_ijData.level >= 4) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="bird_and"></block>' : '') : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Bird.soy.toolbox.soyTemplateName = 'Bird.soy.toolbox';
}
