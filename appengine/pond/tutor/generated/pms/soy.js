// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.Tutor.soy.
 */

goog.provide('Pond.Tutor.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Tutor.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_playerName">Giugador</span><span id="Pond_targetName">B\u00EBrsaj</span><span id="Pond_pendulumName">P\u00E8ndola</span><span id="Pond_scaredName">Sbaruv\u00E0</span></div>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.messages.soyTemplateName = 'Pond.Tutor.soy.messages';
}


Pond.Tutor.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = Pond.Tutor.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Mag\u00ECster \u00EBd Pond'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Argistr\u00E9 e lij\u00E9 ai bl\u00F2ch."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Giut\u00E9</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData);
  switch (opt_ijData.level) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      output += Pond.Tutor.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
      break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      output += '<div id="editor"></div>';
      break;
  }
  output += Pond.Tutor.soy.playerTarget(null, null, opt_ijData) + Pond.Tutor.soy.playerPendulum(null, null, opt_ijData) + Pond.Tutor.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 5 || opt_ijData.level == 6) ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Soa solussion a marcia, ma a peul f\u00E9 mej. Ch\'a deuvra \'scan\' p\u00EBr d\u00EC al canon a che distansa tir\u00E9.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1 || opt_ijData.level == 2) ? 'Ch\'a deuvra \u00EBl comand \'cannon\' p\u00EBr colp\u00EC \u00EBl b\u00EBrsaj. \u00CBl prim par\u00E0meter a l\'\u00E9 l\'\u00E0ngol, \u00EBl second a l\'\u00E9 la distansa. Ch\'a treuva la bon-a combinassion.' + ((opt_ijData.level == 1) ? '<br><br><svg height="41" width="250"><g class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36071014404297 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01641845703125,5 h -36.020530700683594 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.020530700683594 z M 193.4027557373047,5 h -38.31193542480469 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31193542480469 z"></path><path class="blocklyPath" fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36071014404297 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01641845703125,5 h -36.020530700683594 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.020530700683594 z M 193.4027557373047,5 h -38.31193542480469 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31193542480469 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 221.86071014404297 M 2.6966991411008934,33.30330085889911 A 7.5,7.5 0 0,1 0.5,28 V 8 M 125.51641845703125,5.5 v 27 h -36.020530700683594 M 83.89588775634766,24.3 l 3.68,-2.1 M 193.9027557373047,5.5 v 27 h -38.31193542480469 M 149.9908203125,24.3 l 3.68,-2.1"></path><g transform="translate(89.99588775634766,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.020530700683594 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#bdc2db" d="m 0,0 H 34.020530700683594 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.520530700683594 M 33.520530700683594,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.020530700683594"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><g transform="translate(156.0908203125,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 36.31193542480469 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#bdc2db" d="m 0,0 H 36.31193542480469 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 35.81193542480469 M 35.81193542480469,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.311935424804688"></rect><text class="blocklyText" y="12.5">70</text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">cannon</text><text class="blocklyText" y="12.5" transform="translate(68.11233520507812,10)">(</text><text class="blocklyText" y="12.5" transform="translate(135.01641845703125,10)">,</text><text class="blocklyText" y="12.5" transform="translate(203.4027557373047,10)">);</text></g></svg>' : (opt_ijData.level == 2) ? '<pre>cannon(0, 70);</pre>' : '') : (opt_ijData.level == 3 || opt_ijData.level == 4) ? '\u00CBs b\u00EBrsaj a dev esse colp\u00EC v\u00E0ire vire. Ch\'a deuvra un sicl \'while (true)\' p\u00EBr f\u00E9 cheic\u00F2s indefinitivaman.' + ((opt_ijData.level == 3) ? '<br><br><svg height="92" width="250"><g class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#498449" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94287872314453 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08705139160156,5 h -60.71040344238281 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71040344238281 z"></path><path class="blocklyPath" fill="#5ba55b" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94287872314453 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08705139160156,5 h -60.71040344238281 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71040344238281 z"></path><path class="blocklyPathLight" stroke="#8cc08c" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 162.44287872314453 M 49.5,36.5 M 21.989592359914347,59.01040764008565 a 8.5,8.5 0 0,0 6.0104076400856545,2.4895923599143455 H 49.5 M 49.5,61.5 H 49.5 M 2.6966991411008934,83.3033008588991 A 7.5,7.5 0 0,1 0.5,78 V 8 M 129.58705139160156,5.5 v 27 h -60.71040344238281 M 63.27664794921875,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">while&#160;(</text><text class="blocklyText" y="12.5" transform="translate(139.08705139160156,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,66)">}</text><g class="blocklyDraggable" transform="translate(69.37664794921875,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#496684" d="m 0,0 H 58.71040344238281 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#5b80a5" d="m 0,0 H 58.71040344238281 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 58.21040344238281 M 58.21040344238281,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="48.71040344238281"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">true<tspan style="fill: rgb(91, 128, 165);"> \u25BE</tspan></text></g></g></g></svg>' : (opt_ijData.level == 4) ? '<pre>while (true) {\n  ...\n}</pre>' : '') : (opt_ijData.level == 5 || opt_ijData.level == 6) ? 'S\'aversari a bogia anans e andr\u00E9, l\u00F2n ch\'a rend malf\u00E9 colpilo. L\'espression \'scan\' a smon la distansa precisa da l\'aversari ant la diression \u00EBspessific\u00E0.' + ((opt_ijData.level == 5) ? '<br><br><svg height="37" width="250"><g class="blocklyDraggable" transform="translate(8,0)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 20 H 132.76456451416016 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88101196289062,5 h -36.020530700683594 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.020530700683594 z"></path><path class="blocklyPath" fill="#995ba5" d="m 0,0 H 20 H 132.76456451416016 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88101196289062,5 h -36.020530700683594 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.020530700683594 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 132.26456451416016 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 108.38101196289062,5.5 v 27 h -36.020530700683594 M 66.76048126220704,24.3 l 3.68,-2.1"></path><g transform="translate(72.86048126220703,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.020530700683594 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#bdc2db" d="m 0,0 H 34.020530700683594 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.520530700683594 M 33.520530700683594,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.020530700683594"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">scan</text><text class="blocklyText" y="12.5" transform="translate(50.9769287109375,10)">(</text><text class="blocklyText" y="12.5" transform="translate(117.88101196289062,10)">)</text></g></svg><br><br>' : (opt_ijData.level == 6) ? '<pre>scan(0)</pre>' : '') + 'Sa distansa a l\'\u00E9 pr\u00F2pe cola dont \u00EBl comand \'cannon\' a l\'ha damanca p\u00EBr tir\u00E9 con precision.' : (opt_ijData.level == 7 || opt_ijData.level == 8) ? 'St\'aversari a l\'\u00E9 tr\u00F2p leugn p\u00EBr dovr\u00E9 \u00EBl canon (ch\'a l\'ha na limitassion d\u00EB 70 m\u00E9ter). Al p\u00F2st, ch\'a deuvra \u00EBl comand \'swim\' p\u00EBr ancamin\u00E9 a no\u00E9 vers l\'aversari e colpilo.' + ((opt_ijData.level == 7) ? '<br><br><svg height="41" width="250"><g class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.2592544555664 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.30130004882812,5 h -36.020530700683594 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.020530700683594 z"></path><path class="blocklyPath" fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.2592544555664 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.30130004882812,5 h -36.020530700683594 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.020530700683594 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 138.7592544555664 M 2.6966991411008934,33.30330085889911 A 7.5,7.5 0 0,1 0.5,28 V 8 M 110.80130004882812,5.5 v 27 h -36.020530700683594 M 69.18076934814454,24.3 l 3.68,-2.1"></path><g transform="translate(75.28076934814453,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.020530700683594 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#bdc2db" d="m 0,0 H 34.020530700683594 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.520530700683594 M 33.520530700683594,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.020530700683594"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">swim</text><text class="blocklyText" y="12.5" transform="translate(53.397216796875,10)">(</text><text class="blocklyText" y="12.5" transform="translate(120.30130004882812,10)">);</text></g></svg>' : (opt_ijData.level == 8) ? '<pre>swim(0);</pre>' : '') : (opt_ijData.level == 9) ? '\u00EBdc\u00F2 st\'aversari-s\u00EC a l\'\u00E9 tr\u00F2p leugn p\u00EBr dovr\u00E9 \u00EBl canon. Ma chiel a l\'\u00E9 tr\u00F2p d\u00E9bol p\u00EBr dzorvive a n\'antruch. Ch\'a noa vers l\'aversari fin-a a che soa posission orisontal a sia anferior a 50. Peui \'stop\' e ch\'a deuvra \u00EBl canon.' + ((opt_ijData.level == 9) ? '<br><br><svg height="37" width="250"><g class="blocklyDraggable" transform="translate(8,0)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 194.25144958496094 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93487548828125,5 h -81.93487548828125 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93487548828125 z M 184.25144958496094,5 h -38.31193542480469 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31193542480469 z"></path><path class="blocklyPath" fill="#5b80a5" d="m 0,0 H 20 H 194.25144958496094 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93487548828125,5 h -81.93487548828125 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93487548828125 z M 184.25144958496094,5 h -38.31193542480469 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31193542480469 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 193.75144958496094 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 98.43487548828125,5.5 v 26 h -81.93487548828125 M 10.9,24.3 l 3.68,-2.1 M 184.75144958496094,5.5 v 27 h -38.31193542480469 M 140.83951416015626,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(107.93487548828125,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="32.004638671875"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">&lt;<tspan style="fill: rgb(91, 128, 165);"> \u25BE</tspan></text></g><g class="blocklyDraggable" transform="translate(146.93951416015625,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#495284" d="m 0,0 H 36.31193542480469 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#5b67a5" d="m 0,0 H 36.31193542480469 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 35.81193542480469 M 35.81193542480469,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.311935424804688"></rect><text class="blocklyText" y="12.5">50</text></g></g><g class="blocklyDraggable" transform="translate(17,6)"><path class="blocklyPathDark" transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93487548828125 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPath" fill="#995ba5" d="m 0,0 H 79.93487548828125 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43487548828125 M 79.43487548828125,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getX</text><text class="blocklyText" y="12.5" transform="translate(50.16777038574219,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05132293701172,5)">)</text></g></g></svg><br><br><svg height="31" width="250"><g class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56034088134766 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPath" fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56034088134766 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 81.06034088134766 M 81.06034088134766,0.5 M 2.6966991411008934,21.303300858899107 A 7.5,7.5 0 0,1 0.5,16 V 8"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">stop</text><text class="blocklyText" y="12.5" transform="translate(47.718833923339844,5)">(</text><text class="blocklyText" y="12.5" transform="translate(62.602386474609375,5)">);</text></g></svg>' : (opt_ijData.level == 10) ? '<pre>getX() &lt; 50</pre><pre>stop();</pre>' : '') : (opt_ijData.level == 10) ? 'S\'aversari a s\u00EB slontan\u00EBr\u00E0 cand a sar\u00E0 colp\u00EC. Ch\'a noa vers \u00EBd chiel s\'a l\'\u00E9 f\u00F2ra port\u00E0 (70 m\u00E9ter).' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Pond.Tutor.soy.start.soyTemplateName = 'Pond.Tutor.soy.start';
}


Pond.Tutor.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><category name="Baciass"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block>' + ((opt_ijData.level >= 5) ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_stop"></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_getX"></block><block type="pond_getY"></block>' : '') + '</category>' + ((opt_ijData.level >= 3) ? '<category name="L\u00F2gica">' + ((opt_ijData.level >= 9) ? '<block type="controls_if"></block><block type="logic_compare"></block>' : '') + '<block type="logic_boolean"></block></category><category name="Liasse"><block type="controls_whileUntil"></block></category>' : '') + '<category name="Matem\u00E0tica"><block type="pond_math_number"><mutation angle_field="false"></mutation></block></category></xml>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.toolbox.soyTemplateName = 'Pond.Tutor.soy.toolbox';
}


Pond.Tutor.soy.playerTarget = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerTarget" style="display: none">\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerTarget.soyTemplateName = 'Pond.Tutor.soy.playerTarget';
}


Pond.Tutor.soy.playerPendulum = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (getX() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (getX() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerPendulum.soyTemplateName = 'Pond.Tutor.soy.playerPendulum';
}


Pond.Tutor.soy.playerScared = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerScared.soyTemplateName = 'Pond.Tutor.soy.playerScared';
}
