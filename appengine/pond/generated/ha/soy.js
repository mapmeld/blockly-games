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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Yi lalube domin ma\u0199iya. Fayyace wani wuri \\n(0-360). Ya dawo da tazara zuwa ma\u0199iyi mafi \\nkusa na wancan wuri. Ya dawo da Maras Iyaka \\nidan ba a sami kowane ma\u0199iyi ba. </span><span id="Pond_cannonTooltip">Harba bindiga. Fayyace wani wuri (0-360) da kuma \\njeri (0-70). </span><span id="Pond_swimTooltip">Yi iwo zuwa gaba. Fayyace wuri (0-360). </span><span id="Pond_stopTooltip">Dakata da iyo. Mai wasa zai tafi a hankali har \\nzuwa tsayawa. </span><span id="Pond_healthTooltip">Ya maido da matsayin lafiya na yanzu na mai wasa \\n(0 shine matacce, 100 shine mai lafiya). </span><span id="Pond_speedTooltip">Ya maido da matsayin sauri na mai wasa (0 shine \\ntsayawa, 100 shine cikakken sauri). </span><span id="Pond_locXTooltip">Ya maido da X mai shiryawa na wasa (0 shine \\ngefen hagu, 100 shine gefen dama). </span><span id="Pond_locYTooltip">Ya maido da Y mai shiryawa na wasa (0 shine \\ngefen \u0199asa, 100 shine gefen sama). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title=" Nuna yare na daftarin.">Daftari</button></td><td><button id="runButton" class="primary" title="Gudanar da shirin da ka rubuta."><img src="common/1x1.gif" class="run icon21"> Gudanar da Shiri</button><button id="resetButton" class="primary" style="display: none" title="Tsayar da shirin kuma a sake saita matakin."><img src="common/1x1.gif" class="stop icon21"> Sake saiti</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
