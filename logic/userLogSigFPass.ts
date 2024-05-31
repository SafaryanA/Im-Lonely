import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';


// Define a type for the form values
interface FormValues {
	name: string;
	emailOrPhone: string;
	password: string;
	confirmPassword: string;
}

// Custom validation function for email or phone
const validateEmailOrPhone = ( value: string | undefined ): boolean => {
	if ( typeof value !== 'string' ) {
		return false;
	}
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/im;
	return emailRegex.test( value ) || phoneRegex.test( value );
};

// Define the validation schema using Yup and toTypedSchema
const validationSchema = yup.object( {
	name: yup.string()
			.required( 'Name is required' )
			.matches( /^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed' )
			.min( 2, 'Name must be at least 2 characters long' )
			.max( 50, 'Name must not exceed 50 characters' ),
	emailOrPhone: yup.string()
			.test( 'is-email-or-phone', 'Must be a valid email or phone number', validateEmailOrPhone )
			.required( 'Email or phone is required' ),
	password: yup.string().min( 6 ).required(),
	confirmPassword: yup.string()
			.oneOf( [ yup.ref( 'password' ) ], 'Passwords must match' )
			.required( 'Confirm password is required' )
} );

// Initialize useForm with the defined schema
const { errors, defineField, handleSubmit } = useForm<FormValues>( {
	validationSchema: toTypedSchema( validationSchema ),
} );

// Define fields
const [ name, nameAttrs ] = defineField( 'name' );
const [ emailOrPhone, emailOrPhoneAttrs ] = defineField( 'emailOrPhone' );
const [ password, passwordAttrs ] = defineField( 'password' );
const [ confirmPassword, confirmPasswordAttrs ] = defineField( 'confirmPassword' );

// Processing Form Submissions
const submitForm = async() => {
	try {
		const response=await fetch('/api/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name.value,
				nameAttrs: nameAttrs.value,
				emailOrPhone: emailOrPhone.value,
				emailOrPhoneAttrs: emailOrPhone.value,
				password: password.value,
				confirmPassword: confirmPassword.value,
			})
		})
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const responseData = await response.json();
		console.log('Registration successful:', responseData);

	}catch ( err ){
		console.error('Registration error:', err );
	}
};

// Submit form
const onSubmit = async () => {
	try {
		await handleSubmit( submitForm )();
	} catch ( error ) {
		console.error( 'Form submission error:', error );
	}
};


export {
	name,
	nameAttrs,
	emailOrPhone,
	emailOrPhoneAttrs,
	password,
	passwordAttrs,
	confirmPassword,
	confirmPasswordAttrs,
	errors,
	onSubmit
}


