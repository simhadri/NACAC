// Add Custom style for #EpiserverEditMode if use is in View Mode

// FUNCTION
(function() {
	if(document.body.id === 'EpiserverEditMode'){
		let head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('link');
			style.setAttribute('rel', 'stylesheet');
			style.setAttribute('href', '/stylesheets/episerver-edit-mode.css');
			head.appendChild(style);
	}
})();
