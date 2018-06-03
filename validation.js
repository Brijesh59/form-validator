$(function(){

  $.validator.addMethod( "nowhitespace", function( value, element ) {
	   return this.optional( element )
     || /^\S+$/i.test( value );
   }, "No white space please" );

   $.validator.addMethod( "lettersonly", function( value, element ) {
 	   return this.optional( element )
     || /^[a-z]+$/i.test( value );
   }, "Name should contain letters only" );

  $.validator.addMethod('strongPassword',function(value,element){
    return this.optional(element)
    || value.length >= 8
    && /\d/.test(value)
    && /[a-z]/i.test(value);
  }, 'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces.'
  );

  $.validator.setDefaults({
     // errorClass: 'has-error',
    highlight: function(element){
       $('.error').css({ 'color': '#D9524E'});
       $(element).closest('.form-group').addClass('has-danger');
       $(element).closest('.form-control').addClass('form-control-danger');
    },

    unhighlight: function(element){
       $(element).closest('.form-group').removeClass('has-danger');
       $(element).closest('.form-control').removeClass('form-control-danger');

       $(element).closest('.form-group').addClass('has-success');
       $(element).closest('.form-control').addClass('form-control-success');
    },

    errorPlacement: function(error, element){
       error.insertAfter(element.parent());
    }

  });

  $('#register-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        strongPassword: true,
        nowhitespace: true
      },
      password2: {
        required: true,
        equalTo: '#password'
      },
      firstName:{
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      lastName:{
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      checkbox:{
        required: true
      }
    },
    messages: {
      email: {
        required: 'Please enter an email address',
        email: 'Please enter a valid email address'
      },
      password: {
        required: 'Please enter a password',
        password: `Your password must be 8-20 characters long,
                   contain letters and numbers, and must not contain spaces,
                   special characters, or emoji.`
      },
      password2: 'Your Password should match',
      firstName:{
        required: 'Please enter your first name',
        firstName: 'Please enter valid first name'
      },
      lastName:{
        required: 'Please enter your last name',
        firstName: 'Please enter valid last name'
      },
      checkbox: 'You must agree the terms and conditions to continue.'
    }
  });
});
