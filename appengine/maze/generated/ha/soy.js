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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">matsa gaba</span><span id="Maze_turnLeft">juya hagu</span><span id="Maze_turnRight">juya dama</span><span id="Maze_doCode">yi</span><span id="Maze_elseCode">wani</span><span id="Maze_helpIfElse">Bulullukan idan-kuma za su yi wannan aiki ko wani.</span><span id="Maze_pathAhead">idan hanya a gaba</span><span id="Maze_pathLeft">idan hanya zuwa hagu</span><span id="Maze_pathRight">idan hanya zuwa dama</span><span id="Maze_repeatUntil">maimaita har</span><span id="Maze_moveForwardTooltip">Zai matsar da mai wasa gaba da sarari \u0257aya.</span><span id="Maze_turnTooltip">Zai juya mai wasa hagu ko dama da digiri 90.</span><span id="Maze_ifTooltip">Idan akwai hanya a wata ke\u0253antacciyar hanya, \\nto yi wasu ayyuka. </span><span id="Maze_ifelseTooltip">Idan akwai hanya a wata ke\u0253antacciyar hanya, \\nto yi ayyukan bulo na farko. Idan ba haka ba, \\nyi ayyukan bulo na biyu. </span><span id="Maze_whileTooltip">Maimaita ayyukan da aka kewaye har sai an kai \\nwurin da aka kammala. </span><span id="Maze_capacity0">Kana da bululluka %0 da suka rage.</span><span id="Maze_capacity1">Kana da bulo %1 da ya rage.</span><span id="Maze_capacity2">Kana da bululluka %2 da suka rage.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Kanannna\u0257o'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Ajiye kuma a ha\u0257a zuwa bululluka."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Zai sa mai wasa ya yi abin da bululluka suka ce."><img src="common/1x1.gif" class="run icon21"> Gudanar da Shiri</button><button id="resetButton" class="primary" style="display: none" title="Zai sa mai wasa ya koma baya daga farkon kananna\u0257o."><img src="common/1x1.gif" class="stop icon21"> Sake saiti</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Ya kafe bulullukan \'matsa gaba\' a wuri \u0257aya domin taimaka min cimma buri na.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>A wannan mataki, kana bukatar kafe dukkan bululluka a wuri \u0257aya a sararin aiki fari.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Gudanar da shirin ka domin ganin abin da ke faruwa.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Shirin ka bai aikatar da kananna\u0257o ba. Danna \'Sake saitawa\' sannan ka sake gwadawa.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Kai \u0199arshe na wannan hanya ta amfani da bululluka biyu kawai. Yi amfani da \'maimaita\' domin gudanar da bulo fiye da sau \u0257aya.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Ka yi amfani da duk bululluka na wannan mataki. Domin \u0199ir\u0199iran sabon bulo, farko kana bukatar goge bulon da ke akwai.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Za ka iya saka fiye da bulo \u0257aya a cikin bulon \'maimaita\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Za\u0253i \u0257an wasan da ka fi so daga wannan jeri na za\u0253i.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Bulon \'idan\' zai yi wani abu ne kawai idan shara\u0257in gaskiya ne. Juyawa hagu idan akwai hanya zuwa hagun.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Danna %1 a cikin bulon \'idan\' domin canza shara\u0257in sa.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Bulullukan idan-kuma za su yi wannan aiki ko wani.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Za ka iya aiwatar da wannan kananna\u0257o mai sar\u0199a\u0199iya? Jarraba bin bangon hannun-hagu. Masu aiwatarwa wa\u0257anda suka yi zurfi kawai!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
