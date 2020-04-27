function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
        alert('Please username and password');
    } else {
        alert('Login success');
        window.location = "home.html";
    }
}