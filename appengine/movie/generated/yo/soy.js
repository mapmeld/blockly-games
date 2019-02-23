// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Movie.soy.
 */

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">beere x</span><span id="Movie_y1">beere y</span><span id="Movie_x2">pari x</span><span id="Movie_y2">pari y</span><span id="Movie_radius">Ila arin</span><span id="Movie_width">f\u00EDf\u1EB9\u0300s\u00ED</span><span id="Movie_height">g\u00EDgas\u00ED</span><span id="Movie_circleTooltip">Ya iyika kan ni ipo ti a ti yan ati p\u1EB9lu iw\u1ECDn \\nila arin ti o wa. </span><span id="Movie_circleDraw">ayika</span><span id="Movie_rectTooltip">Ya onigun m\u1EB9\u1EB9rin kan ni ipo ti a ti yan ati p\u1EB9lu \\niw\u1ECDn fiife ati giga. </span><span id="Movie_rectDraw">onigun m\u1EB9rin</span><span id="Movie_lineTooltip">Fa ila kan lati ojuami kan si omiran p\u1EB9lu iw\u1ECDn \\nfiife kan. </span><span id="Movie_lineDraw">ila</span><span id="Movie_timeTooltip">Da akoko tio wa yii pada ninu aworan (0-100).</span><span id="Movie_colourTooltip">Se ayipada si aw\u1ECD ohun ik\u1ECDwe</span><span id="Movie_setColour">\u1E63eto aw\u1ECD si</span><span id="Movie_submitDisabled">Fiimu r\u1EB9 ko lo siwaju. Lo aw\u1ECDn bul\u1ECD\u1ECDki lati \u1E63e nkan ti o joju. L\u1EB9hinna o le fi fiimu r\u1EB9 sowo si ibi i\u1E63afiha f\u1ECDto.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Fiimu'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Fipam\u1ECD ki o si sop\u1ECD m\u1ECD aw\u1ECDn bul\u1ECD\u1ECDki."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">\u00CCr\u00E0nw\u1ECD\u0301</button></td></tr></table><div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u1E62ii ibi aworan ti aw\u1ECDn sinima. "><img src="common/1x1.gif" class="gallery icon21"> Wo ibi i\u1E63afiha f\u1ECDto</button></form></td><td style="text-align: center;"><button id="submitButton" title="Fi fiimu r\u1EB9 sowo si ibi i\u1E63afiha."><img src="common/1x1.gif" class="camera icon21"> Firan\u1E63\u1EB9 si ibi i\u1E63afiha f\u1ECDto</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Fi fiimu r\u1EB9 sowo si ibi i\u1E63afiha.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Ak\u1ECDle: <input id="galleryTitle" type="text" name="title" required></div><footer><!--Legal disclaimer goes here if needed.--></footer><div class="farSide"><button id="galleryCancel" type="button">Fagil\u00E9</button><button id="galleryOk" class="secondary" type="submit">O DARA</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Sun agbet\u1EB9l\u1EB9 iyika si oke ti eto r\u1EB9. L\u1EB9hinna yoo farahan l\u1EB9hin eniyan naa.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Lo aw\u1ECDn \u1ECDna ti o r\u1ECDrun lati ya eniyan yii.' : (opt_ijData.level == 2) ? 'Ipele yii j\u1EB9 fiimu. O f\u1EB9 ki apa \u1EB9ni naa gba oju iworan koja. T\u1EB9 b\u1ECDtini ere lati wo awot\u1EB9l\u1EB9<div id="sampleHelp2" class="readonly"></div>Bi fiimu naa \u1E63e n \u1E63i\u1E63\u1EB9, iye \'akoko\' bulooki yoo ka lati ori 0 si 100. Niwon igbati ti o f\u1EB9 ipo \'y\' ti apa lati b\u1EB9r\u1EB9 ni 0 ati l\u1ECD si 100 o y\u1EB9 ki o r\u1ECDrun.' : (opt_ijData.level == 3) ? 'Aago \'akoko\' naa nkaa lati 0 si 100. \u1E62ugb\u1ECDn nisisiyi o f\u1EB9 ipo \'y\' ti apa miiran b\u1EB9r\u1EB9 ni 100 ati l\u1ECD si 0. Nj\u1EB9 o le \u1E63af\u1ECDri agbekal\u1EB9 isiro kan ti o si si it\u1ECDnis\u1ECDna naa?' : (opt_ijData.level == 4) ? 'Lo ohun ti o k\u1ECD\u1ECD ni ipele ti o koja lati \u1E63e aw\u1ECDn \u1EB9s\u1EB9 ti se agbelebu.' : (opt_ijData.level == 5) ? 'Ilana isiro fun apa j\u1EB9 ohun idiju. Eyi ni idahun naa:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">2 ^ (5 &divide; (50 - time)) = y</code>' : (opt_ijData.level == 6) ? 'Fun eniyan ni \u1ECDw\u1ECD melo kan.' : (opt_ijData.level == 7) ? 'Lo b\u1ECDtini \'bi\' lati ya ori kekere kan fun idaji ak\u1ECDk\u1ECD ti fiimu naa. L\u1EB9hinna ya ori nla kan fun idaji keji ti fiimu naa.' : (opt_ijData.level == 8) ? '\u1E62e aw\u1ECDn ese naa yi \u1ECDna won pada ni agbede meji nipas\u1EB9 fiimu naa.' : (opt_ijData.level == 9) ? 'Fa ila ti o tobi sii l\u1EB9hin \u1EB9niyan naa.' : (opt_ijData.level == 10) ? '\u1E62e fiimu lori ti ohunkohun ti o f\u1EB9. O ni opolopo bul\u1ECD\u1ECDki tuntun ti o le \u1E63e awari Gba dun ara \u1EB9!' + ((! opt_ijData.html) ? '<br><br>Lo b\u1ECDtini \\' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Fiimu"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Aw\u1ECD"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Irogun"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Ilosiwaju losehin"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="Isiro"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<sep></sep><category name="Oniruru" custom="VARIABLE"></category><category name="I\u1E63e" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
