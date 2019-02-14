// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Maze.soy.
 */

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">gaa n\'ihu</span><span id="Maze_turnLeft">t\u1EE5ghar\u1ECBa aka ekpe</span><span id="Maze_turnRight">t\u1EE5ghar\u1ECBa aka nri</span><span id="Maze_doCode">meghar\u1ECBa</span><span id="Maze_elseCode">\u1ECDz\u1ECD</span><span id="Maze_helpIfElse">Ng\u1ECDng\u1ECD ma \u1ECD b\u1EE5r\u1EE5 - \u1ECDz\u1ECD ga-eme otu ihe ma \u1ECD b\u1EE5 nke \u1ECDz\u1ECD.</span><span id="Maze_pathAhead">ma \u1ECD b\u1EE5r\u1EE5 \u1EE5z\u1ECD n\'ihu</span><span id="Maze_pathLeft">ma \u1ECD b\u1EE5r\u1EE5 \u1EE5z\u1ECD aka ekpe</span><span id="Maze_pathRight">ma \u1ECD b\u1EE5r\u1EE5 \u1EE5z\u1ECD aka nri</span><span id="Maze_repeatUntil">meghar\u1ECBa ruo mgbe</span><span id="Maze_moveForwardTooltip">Na-eme ka \u1ECDnye egwuregwu ah\u1EE5 gaa n\'ihu otu ohere.</span><span id="Maze_turnTooltip">Na-at\u1EE5ghar\u1ECB onye egwuregwu ah\u1EE5 aka ekpe ma \u1ECD b\u1EE5 \\naka nri site ogo 90. </span><span id="Maze_ifTooltip">\u1ECC b\u1EE5r\u1EE5 na e nwere \u1EE5z\u1ECD na ntuziaka a kap\u1ECBr\u1ECB \u1ECDn\u1EE5, \\nmezie \u1EE5f\u1ECDd\u1EE5 omume. </span><span id="Maze_ifelseTooltip">\u1ECC b\u1EE5r\u1EE5 na e nwere \u1EE5z\u1ECD na ntuziaka a kap\u1ECBr\u1ECB \u1ECDn\u1EE5, \\nmezie omume ng\u1ECDng\u1ECD mbu. Ma \u1ECD b\u1EE5gh\u1ECB ya, mee omume \\nng\u1ECDng\u1ECD nke ab\u1EE5\u1ECD. </span><span id="Maze_whileTooltip">Tinyeghar\u1ECBa ihe omume ah\u1EE5 mechiri ruo mgbe \u1ECD \\ngw\u1EE5chara. </span><span id="Maze_capacity0">\u1ECA nwere ihe ng\u1ECDng\u1ECD %0 f\u1ECDr\u1ECD.</span><span id="Maze_capacity1">\u1ECA nwere ihe ng\u1ECDng\u1ECD %1 f\u1ECDr\u1ECD.</span><span id="Maze_capacity2">\u1ECA nwere ihe ng\u1ECDng\u1ECD %2 f\u1ECDr\u1ECD.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'R\u1ECBg\u1ECDr\u1ECBg\u1ECD'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Z\u1ECDp\u1EE5ta ma jik\u1ECDta ng\u1ECDng\u1ECD."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Na-eme ka onye egwuregwu ah\u1EE5 mee ihe ng\u1ECDng\u1ECD ah\u1EE5 \\nna-ekwu. "><img src="common/1x1.gif" class="run icon21"> B\u1ECBdo \u1EE5soro ihe omume</button><button id="resetButton" class="primary" style="display: none" title="Tinyeghachi onye egwuregwu ah\u1EE5 az\u1EE5 na mmalite \\nnke r\u1ECBg\u1ECDr\u1ECBg\u1ECD. "><img src="common/1x1.gif" class="stop icon21"> T\u1ECDghar\u1ECBa</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>K\u1ECDk\u1ECDta \u1EE5f\u1ECDd\u1EE5 ng\u1ECDng\u1ECD \u2018na-aga n\'ihu\u2019 \u1ECDn\u1EE5 iji nyere m aka iru ihe mgbaru \u1ECDs\u1ECD.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Na ogo a, \u1ECBkwes\u1ECBr\u1ECB \u1ECBk\u1ECDk\u1ECDta ng\u1ECDng\u1ECD niile na ndebanye \u1ECDr\u1EE5 \u1ECDcha.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>B\u1ECBdo \u1EE5soro ihe omume g\u1ECB iji h\u1EE5 ihe ga emenu.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Usoro ihe omume gi edozighi ihe r\u1ECBg\u1ECDr\u1ECBg\u1ECD. P\u1ECBa \'T\u1ECDgharia\' ma gbal\u1ECBa \u1ECDz\u1ECD.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Jiri naan\u1ECB ng\u1ECDng\u1ECD ab\u1EE5\u1ECD ga na njedebe nke \u1EE5z\u1ECD a. Jiri \'meghar\u1ECBa\' iji gbaa ihe ng\u1ECDng\u1ECD kar\u1ECBa otu ugboro.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>I j\u1ECBr\u1ECBla ng\u1ECDng\u1ECD niile d\u1ECB maka ogo a. Iji mep\u1EE5ta ng\u1ECDng\u1ECD \u1ECDh\u1EE5r\u1EE5, \u1ECB ga-ebu \u1EE5z\u1ECD wep\u1EE5 ihe ng\u1ECDng\u1ECD d\u1ECB ugbu a.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u1ECA nwere ike itinye ihe kar\u1ECBr\u1ECB otu ng\u1ECDng\u1ECD n\'ime mkp\u1ECDchi ng\u1ECDng\u1ECD \'meghar\u1ECBa\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">H\u1ECDr\u1ECD onye egwuregwu kachas\u1ECB amas\u1ECB g\u1ECB site na ngh\u1ECDr\u1ECD a.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Ng\u1ECDng\u1ECD \'ma \u1ECD b\u1EE5r\u1EE5 na\' ga-eme ihe naan\u1ECB ma \u1ECD b\u1EE5r\u1EE5 na \u1ECDn\u1ECDd\u1EE5 ah\u1EE5 b\u1EE5 eziokwu. Gbal\u1ECBa t\u1EE5ghar\u1ECBa aka ekpe ma \u1ECD b\u1EE5r\u1EE5 na e nwere \u1EE5z\u1ECD gara n\'aka ekpe.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">P\u1ECBa na %1 ng\u1ECDng\u1ECD \'ma \u1ECD b\u1EE5r\u1EE5 na\' iji gbanwe \u1ECDn\u1ECDd\u1EE5 ya.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Ng\u1ECDng\u1ECD ma \u1ECD b\u1EE5r\u1EE5 - \u1ECDz\u1ECD ga-eme otu ihe ma \u1ECD b\u1EE5 nke \u1ECDz\u1ECD.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u1ECA nwere ike idozi nsogbu r\u1ECBg\u1ECDr\u1ECBg\u1ECD a d\u1ECB mgbagwoju anya? Gbal\u1ECBa soro mgbidi aka ekpe. Nd\u1ECB odee koodu d\u1ECB elu naan\u1ECB!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Maze.soy.start.soyTemplateName = 'Maze.soy.start';
}


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Maze.soy.toolbox.soyTemplateName = 'Maze.soy.toolbox';
}
