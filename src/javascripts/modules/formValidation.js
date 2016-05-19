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

			if (errors.length > 0) {
				var errBox = document.getElementById('error-box');
				errBox.innerHTML = '';
				console.log(errors[0].messages)
				for (var n = 0; n < errors[0].messages.length; n++) {
					// errors[0].messages[n];
					console.log(errBox)
					errBox.innerHTML = errBox.innerHTML + errors[0].messages[n] + '<br>';
				}
				for (var i = 0; i < this.form.length; i++) {
					
					if (this.form[i].classList.contains('required')) {
						// var errMessage = this.form[i].nextSibling.nextSibling;
						// errMessage.innerHTML = 'This Field is Required';
						this.form[i].classList.add('error');
					}
				}
				return false;
			}
		});
	}
})();
