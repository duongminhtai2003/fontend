const url = "http://localhost:8080"

function checkLogin() {
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    if (phone == "" || password == "") {
        alert('Please phone and password');
    } else {
        const body = {
            phone: phone,
            password: password
        }
        loginApi(JSON.stringify(body));
    }
}


const loginApi = async(body) => {
    const response = await fetch(`${url}/api/login`, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = response.json();
    json.then(res => {
        const status = res.meta.code;
        if (status === '200') {
            // gan token va chuyen trang
            type = res.data.type;
            token = res.data.token;
            window.localStorage.setItem("type", type);
            window.localStorage.setItem("token", token);
            alert(res.meta.message);
            window.location.href = './home.html';
        } else {
            alert(res.meta.message);
        }
    }).catch(err => {
        console.log(err);
    })

}