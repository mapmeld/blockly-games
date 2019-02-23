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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\u1E62ay\u1EB9wo fun aw\u1ECDn \u1ECDta. Wa it\u1ECDs\u1ECDna kan pato \\n(0-360). Da ijinna pada si \u1ECDta ti o sunm\u1ECD \\njul\u1ECD ni \u1ECDna yii. Da Infiniti ti ko ba si \\n\u1ECDta kankan. </span><span id="Pond_cannonTooltip">Yin ibon naa. Wa itona kan pato (0-360) ati \\nsakani (0-70). </span><span id="Pond_swimTooltip">W\u1EB9 siwaju. Wa itona kan pato (0-360). </span><span id="Pond_stopTooltip">Da iw\u1EB9 duro. Oludije yoo daa duro di\u1EB9 di\u1EB9. </span><span id="Pond_healthTooltip">Da ilera oludije naa l\u1ECDw\u1ECDl\u1ECDw\u1ECD pada (0 ti ku, \\n100 ni ilera). </span><span id="Pond_speedTooltip">Da iyara oludije naa l\u1ECDw\u1ECDl\u1ECDw\u1ECD pada (0 o ti duro, \\n100 o wa iyara kikun). </span><span id="Pond_locXTooltip">Da X naa pada se akoso oludije naa (0 je igun \\napa osi, 100 je igun apa osi). </span><span id="Pond_locYTooltip">Da Y naa pada se akoso oludije naa (0 je igun \\nisale, 100 je igun oke). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u1E62e afihan aw\u1ECDn Iwe akosil\u1EB9 ede.">Iwe akosil\u1EB9</button></td><td><button id="runButton" class="primary" title="\u1E62i\u1E63e lori eto naa ti o k\u1ECD"><img src="common/1x1.gif" class="run icon21"> \u1E62e Eto</button><button id="resetButton" class="primary" style="display: none" title="Da eto naa duro ki o si tun ipele naa to pada."><img src="common/1x1.gif" class="stop icon21"> Atunto</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
