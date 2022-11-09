$('#myForm').validate({
    rules:{
        firstname: "required",
        lastname: "required",
        email: "required"
    }
});

$('#reset').click(function(){
    validator.resetForm();
})