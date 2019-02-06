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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">ba shi da tsutsa</span><span id="Bird_heading">fuskanta</span><span id="Bird_noWormTooltip">Shara\u0257i na lokacin da tsuntsu ya sami tsutsa.</span><span id="Bird_headingTooltip">Matsa zuwa wani wurin na kusurwa da aka bayar: 0 \\nshine zuwa dama, 90 ita ce sama \u0257o\u0257ar, dsrs. </span><span id="Bird_positionTooltip">x da y na nuna wurin da tsuntsu yake. \\nIdan x = 0 tsuntsun yana kusa da ga\u0253ar \\nhagu, idan x = 100 yana kusa da ga\u0253ar \\ndama. Idan y = 0 tsuntsun yana \u0199asa, \\nidan y = 100 yana sama. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Bird.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Tsuntsu'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Ajiye kuma a ha\u0257a zuwa bululluka."><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Gudanar da shirin da ka rubuta."><img src="common/1x1.gif" class="run icon21"> Gudanar da Shiri</button><button id="resetButton" class="primary" style="display: none" title="Tsayar da shirin kuma a sake saita matakin."><img src="common/1x1.gif" class="stop icon21"> Sake saiti</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Canza sunan kusurwa domin sanya tsuntsu ya sami tsutsa kuma ya sauka a she\u0199arsa.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Yi amfani da wannan bulo domin tafiya zuwa wurin fuskanta \u0257aya idan ka na da tsutsar, ko wurin fuskanta daban idan ba ka da tsutsar.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' shine mi\u0199a\u0199\u0199en wurinka na yanzu. Yi amfani da wannan bulo domin zuwa wani wurin fuskanta \u0257aya idan \'x\' ba ta kai wata lamba ba, ko wani wurin fuskanta daban in ba haka ba.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Danna alamar domin gyara bulo na \'idan\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Wannan matakin na bukatar bulo \u0257in \'idan kuma\' da kuma \'kuma\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Bulo \u0257in DA gaskiya ne kawai idan duk bayanan gaskiya ne.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Janye bulo na \'kuma\' zuwa cikin bulo na \'idan\'.</td></tr></table></div>' : '');
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
