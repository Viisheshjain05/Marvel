/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'dfi\'">' + entity + '</span>' + html;
	}
	var icons = {
		'dfi-reset-transfer': '&#xe937;',
		'dfi-contest-pts': '&#xe935;',
		'dfi-subs-1': '&#xe933;',
		'dfi-lightning': '&#xe934;',
		'dfi-booster-clock': '&#xe930;',
		'dfi-booster-lock': '&#xe931;',
		'dfi-booster-tick': '&#xe932;',
		'dfi-history': '&#xe92e;',
		'dfi-reset': '&#xe92f;',
		'dfi-admin-outline': '&#xe92c;',
		'dfi-intro-badge-outline': '&#xe92d;',
		'dfi-booster-outline': '&#xe928;',
		'dfi-subs-outline': '&#xe929;',
		'dfi-jersy-outline': '&#xe92a;',
		'dfi-stats-outline': '&#xe92b;',
		'dfi-leagues-outline': '&#xe936;',
		'dfi-lock': '&#xe927;',
		'dfi-badge': '&#xe925;',
		'dfi-badge-fill': '&#xe926;',
		'dfi-admin-user': '&#xe924;',
		'dfi-remove': '&#xe923;',
		'dfi-logout': '&#xe921;',
		'dfi-share-stroke': '&#xe922;',
		'dfi-tab-more': '&#xe920;',
		'dfi-uncap': '&#xe91f;',
		'dfi-tripleX': '&#xe91e;',
		'dfi-stats': '&#xe915;',
		'dfi-stats-fill': '&#xe916;',
		'dfi-rules': '&#xe917;',
		'dfi-rules-fill': '&#xe918;',
		'dfi-home': '&#xe919;',
		'dfi-home-fill': '&#xe91a;',
		'dfi-contests': '&#xe91b;',
		'dfi-contests-fill': '&#xe91c;',
		'dfi-more': '&#xe91d;',
		'dfi-info': '&#xe914;',
		'dfi-announcement': '&#xe913;',
		'dfi-copy': '&#xe912;',
		'dfi-share': '&#xe911;',
		'dfi-view-more': '&#xe910;',
		'dfi-subs': '&#xe90c;',
		'dfi-sub-in': '&#xe90d;',
		'dfi-sub-out': '&#xe90e;',
		'dfi-injured': '&#xe90f;',
		'dfi-list': '&#xe90a;',
		'dfi-tick': '&#xe90b;',
		'dfi-help': '&#xe909;',
		'dfi-search': '&#xe900;',
		'dfi-flight': '&#xe901;',
		'dfi-filter': '&#xe902;',
		'dfi-close': '&#xe903;',
		'dfi-aUp': '&#xe904;',
		'dfi-aRgt': '&#xe905;',
		'dfi-aDw': '&#xe906;',
		'dfi-aLft': '&#xe907;',
		'dfi-aDown': '&#xe908;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/dfi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
