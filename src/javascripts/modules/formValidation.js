if (document.getElementById('productForm')){
	var validator = new FormValidator('productForm', [{
		name: 'email',
		rules: 'valid_email'
	}, {
		names: ['firstName', 'lastName'],
		rules: 'required|alpha'
	}], function(errors, evt) {

		if (errors.length > 0) {

			// Show the errors
			// console.log(this)
			
			for (var i = 0; i < this.form.length; i++) {
				
				if (this.form[i].classList.contains('required')){
					// let err = document.createElement('span');
					// err.id = 'error-message_' + i;
					// err.className = 'error-message';
					// err.innerHTML = 'This field is required!';
					console.log(this.form[i].nextSibling)
					this.form[i].nextSibling.innerHTML = 'pr';
					this.form[i].classList.add('error');
				}
			}
			return false;
		}
	});
}