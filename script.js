$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true

            },
            month:{
                required:true

            },
            year:{
                required:true

            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
            required:"Enter the first name ",
            minlength:"Enter atleast 4 characters"
        }
        }
    })
})