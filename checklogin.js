function checkLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "123456"){
        alert ("Login successfully");
        window.location = "/home.html";
    }
}