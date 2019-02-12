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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">enwegh\u1ECB ikpuru</span><span id="Bird_heading">isi</span><span id="Bird_noWormTooltip">\u1ECCn\u1ECDd\u1EE5 mgbe nnunu ah\u1EE5 enwetabegh\u1ECB ikpuru.</span><span id="Bird_headingTooltip">Gaa na nt\u1EE5ziaka nke ebe a nyere: 0 d\u1ECB n\'aka nri, \\n90 di na ogologo, wdg. </span><span id="Bird_positionTooltip">x na y b\u1EE5 akara \u1ECDn\u1ECDd\u1EE5 nnunu. Mgbe x = 0 nn\u1EE5n\u1EE5 d\u1ECB \\nnso n\'ak\u1EE5k\u1EE5 aka ekpe, mgbe x = 100 \u1ECD d\u1ECB nso \\nn\'ak\u1EE5k\u1EE5 aka nri. Mgbe y = 0 nn\u1EE5n\u1EE5 d\u1ECB na ala, mgbe \\ny = 100 \u1ECD d\u1ECB n\'elu. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Bird.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Nn\u1EE5n\u1EE5'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Z\u1ECDp\u1EE5ta ma jik\u1ECDta ng\u1ECDng\u1ECD."><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Gbaa usoro ihe omume i dere."><img src="common/1x1.gif" class="run icon21"> Gbaa usoro ihe omume</button><button id="resetButton" class="primary" style="display: none" title="Kw\u1EE5s\u1ECB ihe omume ah\u1EE5 ma t\u1ECDghar\u1ECBa ogo."><img src="common/1x1.gif" class="stop icon21"> T\u1ECDghar\u1ECBa</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Gbanwee ak\u1EE5k\u1EE5 isiokwu iji mee ka nn\u1EE5n\u1EE5 nweta ikpuru ma laa n\'ime akw\u1EE5 ya.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Jiri ng\u1ECDng\u1ECD a gaa n\'otu isiokwu ma \u1ECD b\u1EE5r\u1EE5 na \u1ECB nwere ikpuru, ma \u1ECD b\u1EE5 isiokwu d\u1ECB iche ma \u1ECD b\u1EE5r\u1EE5 na i nwegh\u1ECB ikpuru.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' b\u1EE5 \u1ECDn\u1ECDd\u1EE5 akara g\u1ECB d\u1ECB n\u2019ala ugbu a. Jiri ng\u1ECDng\u1ECD a gaa n\'otu isiokwu ma \u1ECD b\u1EE5r\u1EE5 na \'x\' b\u1EE5 ihe na-erugh\u1ECB n\u1ECDmba, ma \u1ECD b\u1EE5 isiokwu d\u1ECB iche ma \u1ECD b\u1EE5gh\u1ECB ya.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>P\u1ECBa akara ngosi iji gbanwee ng\u1ECDng\u1ECD \'ma \u1ECD b\u1EE5r\u1EE5 na\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u1ECCkwa a ch\u1ECDr\u1ECD ng\u1ECDng\u1ECD ma \'\u1ECDz\u1ECD ma \u1ECD b\u1EE5r\u1EE5\' na ng\u1ECDng\u1ECD \'\u1ECDz\u1ECD\u2019.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Ng\u1ECDng\u1ECD MA b\u1EE5 eziokwu naan\u1ECB ma \u1ECD b\u1EE5r\u1EE5 na ntinye ya ab\u1EE5\u1ECD b\u1EE5 eziokwu.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>D\u1ECDr\u1ECD otu ng\u1ECDng\u1ECD \'\u1ECDz\u1ECD\' na-etinye n\'ime ng\u1ECDng\u1ECD \'ma \u1ECD b\u1EE5r\u1EE5\'.</td></tr></table></div>' : '');
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
