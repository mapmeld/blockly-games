// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Turtle.soy.
 */

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Na-ebughar\u1ECB mbe n\u2019ih\u1EE5 ma \u1ECD b\u1EE5 az\u1EE5 site na \u1ECDn\u1EE5 \\n\u1ECDg\u1EE5g\u1EE5 a kap\u1ECBr\u1ECB \u1ECDn\u1EE5. </span><span id="Turtle_moveForward">gaa n\'ihu site</span><span id="Turtle_moveBackward">laa n\u2019az\u1EE5 site</span><span id="Turtle_turnTooltip">Na-at\u1EE5ghar\u1ECB mbe aka nr\u1ECB ma \u1ECD b\u1EE5 aka ekpe site na \\nogo \u1ECDn\u1EE5 \u1ECDg\u1EE5g\u1EE5 a kap\u1ECBr\u1ECB \u1ECDn\u1EE5. </span><span id="Turtle_turnRight">t\u1EE5ghar\u1ECB aka nr\u1ECB site</span><span id="Turtle_turnLeft">t\u1EE5ghar\u1ECB aka ekpe site</span><span id="Turtle_widthTooltip">Na-agbanwe obosara nke pen.</span><span id="Turtle_setWidth">ghaz\u1ECBe obosara na</span><span id="Turtle_colourTooltip">Na-agbanwe agba nke mkp\u1ECBs\u1ECB ode akw\u1EE5kw\u1ECD.</span><span id="Turtle_setColour">ghaz\u1ECBe agba na</span><span id="Turtle_penTooltip">Wel\u1ECBte ma \u1ECD b\u1EE5 wedata mkp\u1ECBs\u1ECB ode akw\u1EE5kw\u1ECD, \\niji kw\u1EE5s\u1ECB ma \u1ECD b\u1EE5 malite ihe eserese. </span><span id="Turtle_penUp">wel\u1ECBte mkp\u1ECBs\u1ECB ode akw\u1EE5kw\u1ECD</span><span id="Turtle_penDown">wedata mkp\u1ECBs\u1ECB ode akw\u1EE5kw\u1ECD</span><span id="Turtle_turtleVisibilityTooltip">Na-eme ka mbe (gburugburu na ak\u1EE5) p\u1EE5ta ihe ma \u1ECD \\nb\u1EE5 zoo ezo. </span><span id="Turtle_hideTurtle">zoo mbe</span><span id="Turtle_showTurtle">gos\u1ECB mbe</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Na-ede ederede na ntuziaka nke mbe na ebe \u1ECD n\u1ECD\u1ECD.</span><span id="Turtle_print">bip\u1EE5ta</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Haz\u1ECBr\u1ECB akara ihe edere nke ng\u1ECDng\u1ECD mbip\u1EE5ta jiri.</span><span id="Turtle_font">akara ihe ederede</span><span id="Turtle_fontSize">nhata akara ihe ederede</span><span id="Turtle_fontNormal">na nk\u1ECBt\u1ECB</span><span id="Turtle_fontBold">okpokpo</span><span id="Turtle_fontItalic">\u1ECBtalik</span><span id="Turtle_submitDisabled">Gbaa usoro ihe omume gi ruo mgbe o kwusiri. Mgbe ah\u1EE5 \u1ECB nwere ike \u1ECBdebe ihe eserese g\u1ECB na ihe onyinyo galeri ah\u1EE5.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Mbe'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Z\u1ECDp\u1EE5ta ma jik\u1ECDta ng\u1ECDng\u1ECD."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Nkw\u00E1do</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Gbaa usoro ihe omume i dere."><img src="common/1x1.gif" class="run icon21"> Gbaa usoro ihe omume</button><button id="resetButton" class="primary" style="display: none" title="Kw\u1EE5s\u1ECB ihe omume ah\u1EE5 ma t\u1ECDghar\u1ECBa ogo."><img src="common/1x1.gif" class="stop icon21"> T\u1ECDghar\u1ECBa</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Lee galeri eserese."><img src="common/1x1.gif" class="gallery icon21"> Lee Galeri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Nyefee eserese g\u1ECB na Galeri."><img src="common/1x1.gif" class="camera icon21"> Nyefee na Galeri</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Nyefee eserese g\u1ECB na Galeri.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Aha <input id="galleryTitle" type="text" name="title" required></div><footer><!--Legal disclaimer goes here if needed.--></footer><div class="farSide"><button id="galleryCancel" type="button">Hap\u1EE5\u0300</button><button id="galleryOk" class="secondary" type="submit">\u1ECC D\u1ECA MMA</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Ihe ngw\u1ECDta g\u1ECB na-ar\u1EE5 \u1ECDr\u1EE5, ma i nwere ike ime nke \u1ECDma kar\u1ECBa. ' + ((opt_ijData.level < 3) ? 'Jiri nani ng\u1ECDng\u1ECD at\u1ECD see ihe odidi ahu.' : 'Jiri nani ng\u1ECDng\u1ECD an\u1ECD see kpakpando ahu.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Mep\u1EE5ta ihe omume nke na-ese skweya.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Gbanwee usoro ihe omume g\u1ECB iji see pentag\u1ECDn kama \u1ECBb\u1EE5 skweya.' : (opt_ijData.level == 3) ? 'Enwere ng\u1ECDng\u1ECD \u1ECDh\u1EE5r\u1EE5 nke na-enye g\u1ECB ohere \u1ECBgbanwe agba:<div id="sampleHelp3" class="readonly"></div>See kpakpando n\u2019acha odo.' : (opt_ijData.level == 4) ? 'Nke a b\u1EE5 ng\u1ECDng\u1ECD \u1ECDh\u1EE5r\u1EE5 nke na-enye g\u1ECB ohere ibuli mkp\u1ECBs\u1ECB ode akw\u1EE5kw\u1ECD g\u1ECB na akw\u1EE5kw\u1ECD ah\u1EE5 mgbe \u1ECB na-agaghar\u1ECB:<div id="sampleHelp4" class="readonly"></div>See obere kpakpando n\u2019acha odo, wee see akara n\'elu ya.' : (opt_ijData.level == 5) ? 'Kama otu kpakpando, \u1ECB nwere ike see kpakpando an\u1ECD n\u2019ime skweya?' : (opt_ijData.level == 6) ? 'See kpakpando odo odo at\u1ECD, na otu akara \u1ECDcha.' : (opt_ijData.level == 7) ? 'See kpakpando ah\u1EE5, ma see akara \u1ECDcha an\u1ECD.' : (opt_ijData.level == 8) ? '\u1ECAsee akara \u1ECDcha 360 ga - ad\u1ECB ka \u1ECDnwa zuru ezu.' : (opt_ijData.level == 9) ? '\u1ECA nwere ike igbakwunye nwa gburugburu ojii ka \u1ECDnwa wee gh\u1ECD\u1ECD mpekere onwa?' : (opt_ijData.level == 10) ? 'See ihe \u1ECD b\u1EE5la \u1ECB ch\u1ECDr\u1ECD. \u1ECA nwere nnukwu ng\u1ECDng\u1ECD \u1ECDh\u1EE5r\u1EE5 \u1ECB nwere ike \u1ECBch\u1ECDp\u1EE5ta. Nwee an\u1EE5r\u1ECB!' + ((! opt_ijData.html) ? '<br><br>Jiri b\u1ECDt\u1ECBn\u1EE5 "Lee Galeri" iji h\u1EE5 ihe nd\u1ECB \u1ECDz\u1ECD dere. \u1ECC b\u1EE5r\u1EE5 na \u1ECB dee ihe na-ad\u1ECDr\u1ECD mmas\u1ECB, jiri b\u1ECDt\u1ECBn\u1EE5 "Nyefee na Galeri" iji bip\u1EE5ta ya.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>H\u1ECDr\u1ECD out \u1EE5d\u1ECB iji h\u1EE5 ng\u1ECDng\u1ECD.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.level == 10) ? '<category name="Mbe"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Agba"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="L\u1ECDg\u1ECBk"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Meghachi"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Mgbak\u1ECD na mwep\u1EE5"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Agbanwe" custom="VARIABLE"></category><category name="\u1ECCr\u1EE5" custom="PROCEDURE"></category>' : '<category name="Mbe"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Agba"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Meghachi"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}
