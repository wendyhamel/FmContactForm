window.contactForm = function () {
	return {
		firstname: '',
		lastname: '',
		selectedQueryType: '',
		email: '',
		message: '',
		consent: '',
		contactRequest: {},
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
			selectedQueryType: {
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
		successMessage: false,
		submit() {
			this.validate('firstname')
			this.validate('lastname')
			this.validate('email')
			this.validate('selectedQueryType')
			this.validate('message')
			this.validate('consent')
			if(
				this.validation['firstname'].invalid === false &&
				this.validation['lastname'].invalid === false &&
				this.validation['email'].invalid === false &&
				this.validation['selectedQueryType'].invalid === false &&
				this.validation['message'].invalid === false &&
				this.validation['consent'].invalid === false
			) {
				this.contactRequest = {
					firstname: this.firstname,
					lastname: this.lastname,
					selectedQueryType: this.selectedQueryType,
					email: this.email,
					message: this.message,
					consent: this.consent,
				}
				this.firstname =  ''
				this.lastname =  ''
				this.selectedQueryType =  ''
				this.email =  ''
				this.message =  ''
				this.consent =  ''
				this.successMessage = true
				setTimeout(() => {
					this.successMessage = false
				}, 5000)
			}
		}
	}
}