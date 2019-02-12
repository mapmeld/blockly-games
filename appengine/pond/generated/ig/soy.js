// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Nyocha maka nd\u1ECB iro. K\u1ECDwaa nt\u1EE5ziaka \u1EE5z\u1ECD nke \\n(0-360). Weghachiri ntoanya n\'ebe onye iro \\nkachas\u1ECB nso n\u1ECD na nt\u1EE5ziaka ah\u1EE5. \\nWeghachite oge ebighi ebi ma oburu na enweghi \\nonye iro. </span><span id="Pond_cannonTooltip">Gbaa egbe \u1ECDk\u1EE5 ah\u1EE5. K\u1ECDwaa nt\u1EE5ziaka \u1EE5z\u1ECD nke \\n(0-360) na renji (0-70). </span><span id="Pond_swimTooltip">Gwuo n\'ihu. K\u1ECDwaa nt\u1EE5ziaka \u1EE5z\u1ECD nke (0-360). </span><span id="Pond_stopTooltip">Kw\u1EE5s\u1ECB igwu mmiri. Nd\u1ECB na-egwu egwu ga-akw\u1EE5s\u1ECB na \\nnway\u1ECD. </span><span id="Pond_healthTooltip">Weghachite ah\u1EE5ike nke onye egwuregwu ah\u1EE5 (0 b\u1EE5 \\nonye nw\u1EE5r\u1EE5 anw\u1EE5, 100 d\u1ECB ike). </span><span id="Pond_speedTooltip">Weghachite \u1ECDs\u1ECD ngwangwa nke onye egwuregwu ah\u1EE5 \\n(0 b\u1EE5 kw\u1EE5s\u1ECBr\u1ECB, 100 b\u1EE5 ngwangwa zuru oke). </span><span id="Pond_locXTooltip">Weghachite njikwa X nke onye egwuregwu (0 b\u1EE5 aka \\nekpe, 100 b\u1EE5 ihu aka nri). </span><span id="Pond_locYTooltip">Weghachite njikwa Y nke onye egwuregwu (0 b\u1EE5 \u1ECDn\u1EE5 \\nala, 100 b\u1EE5 \u1ECDn\u1EE5 elu). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Gosip\u1EE5ta ndek\u1ECD akw\u1EE5kw\u1ECD as\u1EE5s\u1EE5.">Ndek\u1ECD akw\u1EE5kw\u1ECD</button></td><td><button id="runButton" class="primary" title="Gbaa usoro ihe omume i dere."><img src="common/1x1.gif" class="run icon21"> Gbaa usoro ihe omume</button><button id="resetButton" class="primary" style="display: none" title="Kw\u1EE5s\u1ECB ihe omume ah\u1EE5 ma t\u1ECDghar\u1ECBa ogo."><img src="common/1x1.gif" class="stop icon21"> T\u1ECDghar\u1ECBa</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
