window.contactForm = function () {
	return {
		firstname: '',
		lastname: '',
		queryType: '',
		email: '',
		message: '',
		consent: '',
		validation: {
			firstname: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'This field is required' }
						}
					}
				}
			},
			lastname: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'This field is required' }
						}
					}
				}
			},
			email: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'This field is required' }
						}
					},
					email: function (field) {
						const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
						if (validEmailRegex.test(field)) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'Please enter a valid email address' }
						}
					}
				}
			},
			queryType: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'Please select a query type' }
						}
					}
				}
			},
			message: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'This field is required' }
						}
					}
				}
			},
			consent: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'To submit this form, please consent to being contacted' }
						}
					}
				}
			},
		},
		validate(field) {
			for (const key in this.validation[field].rule) {
				const validationResult = this.validation[field].rule[key](this[field])
				if (validationResult.invalid) {
					this.validation[field].invalid = true
					this.validation[field].message = validationResult.message
					break
				}
				this.validation[field].invalid = false
				this.validation[field].message = ''
			}
		},
		submit() {
			this.validate('firstname')
			this.validate('lastname')
			this.validate('email')
			this.validate('queryType')
			this.validate('message')
			this.validate('consent')
		}
	}
}