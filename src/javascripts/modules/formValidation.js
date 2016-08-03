// FUNCTION
(function() {
	'use strict';
	if (document.getElementById('productForm')) {
		var validator = new FormValidator('productForm', [
		{
			name: 'firstName',
			display: 'first name',
			rules: 'required|alpha'
		},{
			name: 'lastName',
			display: 'last name',
			rules: 'required|alpha'
		}, {
			name: 'email',
			display: 'email',
			rules: 'required|valid_email'
		}], function(errors, evt) {
			for (var field in this.fields) {
			  if (this.fields[field].element.validity.valid){
			  	this.fields[field].element.classList.remove('error');
			  }else{
			  	this.fields[field].element.classList.add('error');
			  }
			}
			if (errors.length > 0) {
				var errBox = document.getElementById('error-box');
				errBox.innerHTML = '';
				
				for (var n = 0; n < errors[0].messages.length; n++) {
					errBox.innerHTML = errBox.innerHTML + errors[0].messages[n] + '<br>';
				}
				errBox.classList.add('error-box--display')
				return false;
			}
		});
	}
})();
