$(document).ready(function() {
    var firstname = $.trim($('#firstname').val());
    var lastname = $.trim($('#lastname').val());
    var email = $.trim($('#email').val());
    var phone = $.trim($('#phone').val());
    //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
    $("#form_register").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            phoneNumber: {
                matches: "[0-9\-\(\)\s]+",
                minlength: 10,
                maxlength: 11,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            firstname: "Please enter firstname",
            lastname: "Please enter lastname",
            phone: "Please enter phone",
            email: "Please enter email",

        },
    });
});