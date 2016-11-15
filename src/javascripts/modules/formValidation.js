;(function() {
	// Validation Function
	var initValidate = function(rules, formId) {
		document.getElementById('productForm').setAttribute('name', formId)
		var validator = new FormValidator(formId, rules, function(errors, e) {
			// get <p id="error-box__FormId"></p> and clear it
			var errBox = document.getElementById('error-box__' + formId);
			errBox.innerHTML = '';
			// remove input--error is added previously
			for (var i = 0; i < e.target.length; i++) {
				e.target[i].classList.remove('input--error')
			}
			// add errors to error-box and error class to respective inputs
			for (var field in errors) {
				for (var field in this.fields) {
					if (this.fields[field].element.validity.valid) {
						this.fields[field].element.classList.remove('input--error');
					} else {
						this.fields[field].element.classList.add('input--error');
					}
				}
				if (errors.length > 0) {
					var errBox = document.getElementById('error-box__'+formId);
					errBox.innerHTML = '';

					for (var n = 0; n < errors[0].messages.length; n++) {
						errBox.innerHTML = errBox.innerHTML + errors[0].messages[n] + '<br>';
					}
					errBox.classList.add('error-box--display')
					return false;
				}

			}
		});
		// Custom Callbacks
		// validator.registerCallback('checkbox_list', function(value) {});
		// validator.setMessage('lastName', 'Custom Last Name Message');
	}
	if (document.getElementById('productForm')) {
		var formRules = [{
			name: 'firstName',
			display: 'first name',
			rules: 'required|alpha'
		}, {
			name: 'lastName',
			display: 'last name',
			rules: 'required|alpha'
		}, {
			name: 'email',
			display: 'email',
			rules: 'required|valid_email'
		}]
		initValidate(formRules, 'productForm');
	}
	document.addEventListener('load', initValidate);
})();
