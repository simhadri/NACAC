var headStyle = function() {
	var head = document.getElementsByTagName('head')[0];
	this.addRules = function(rules) {
		var css = '',
			head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		for (var property in rules) {
			if (rules.hasOwnProperty(property)) {
				var css = css + property + '{' + rules[property] + '}';
			}
		}
		style.type = 'text/css';
		style.setAttribute('id', 'customHeadStyle')
		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);
	},
	this.removeRules = function() {
		var customHeadStyle = document.getElementById('customHeadStyle');
		customHeadStyle.remove();
	}
}
module.exports = headStyle;