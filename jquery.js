// Validation form not empty

// Login Page
$(document).ready(function () {
    $("#login").click(function (e) {
        const username = $("input[type='text']").val();
        const password = $("input[type='password']").val();
        const email = $("input[type='email']").val();

        if (username === "" || password === "") {
            e.preventDefault();
            alert("Harap isi semua form!");
        }
    });
});

// Register Page
$(document).ready(function () {
    $("#register").click(function (e) {
        const username = $("input[type='text']").val();
        const password = $("input[type='password']").val();
        const email = $("input[type='email']").val();

        if (username === "" || password === "" || email === "") {
            e.preventDefault();
            alert("Harap isi semua form!");
        }
    });
});

// Forgot password modal
$(document).ready(function () {
    $("#sendEmail").click(function (e) {
        const email = $("input[type='email']").val();

        if (email === "") {
            e.preventDefault();
            alert("Harap isi form terlebih dahulu!");
        } else {
            $("#forgotModal").fadeOut();
        }
    })
})


// Animation card after relod
$(document).ready(function () {
    $(".card").hide().fadeIn(1000); 
});


// Toggle show or hiddne password
$(document).ready(function () {
    $("#togglePassword").click(function () {
        const passwordField = $("#password");
        const type = passwordField.attr("type") === "password" ? "text" : "password";
        passwordField.attr("type", type);

        $(this).toggleClass("fa-eye fa-eye-slash");
    });
});


// Fotgot password modal
$(document).ready(function () {
    $(".remember span:last-child").click(function () {
        $("#forgotModal").fadeIn();
    });

    $("#closeModalButton").click(function () {
        $("#forgotModal").fadeOut();
    });
});
