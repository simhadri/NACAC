// FUNCTION
(function() {
	'use strict';
	if (document.getElementById('productForm')) {
		var validator = new FormValidator('productForm', [
		{
			name: 'firstName',
			rules: 'required|alpha'
		},{
			name: 'lastName',
			rules: 'required|alpha'
		}, {
			name: 'email',
			rules: 'valid_email'
		}], function(errors, evt) {

			if (errors.length > 0) {
				for (var i = 0; i < this.form.length; i++) {
					if (this.form[i].classList.contains('required')) {
						var errMessage = this.form[i].nextSibling.nextSibling;
						errMessage.innerHTML = 'This Field is Required';
						this.form[i].classList.add('error');
					}
				}
				return false;
			}
		});
	}
})();
