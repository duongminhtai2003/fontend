let loggin;
let statusToken;
let id;
let nameAndId;
let name = '';
const respone = {
    status: 'connected',
    authResponse: {
        accessToken: this.statusToken,
        expiresIn: '...',
        signedRequest: '...',
        userID: this.id
    }
}

const setupFb = () => {
    return new Promise(() => {
        window.fbAsyncInit = function() {
            FB.init({
                appId: '672979440148488',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.AppEvents.logPageView();

        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })
}

const submitLogin = () => {
    FB.login(response => {
        console.log(response)
        if (response.authResponse) {
            loggin = response.status;
            statusToken = response.authResponse.accessToken;
            localStorage.setItem("user_token", statusToken);
            FB.api("/me", function(response) {
                nameAndId = response;
                name = response.name;
                id = response.id;
            });
            window.location = "home.html";
        } else {
            console.log("User login failed");
        }
    });
}

const eventLogin = () => {
    const fb = document.getElementById('fb');
    fb.addEventListener('click', (e) => {
        e.preventDefault();
        submitLogin();
    })
}

const initFunc = async() => {
    await setupFb()
        .then(eventLogin())
}

initFunc();