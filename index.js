//ngrok http 5500
const loginbutton = document.getElementById("Login");
loginbutton.addEventListener('click', function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "Name" && password == "Pass") {   
        alert("success")
        window.location.href = "home.html";
    }
    else {
        alert("incorrect")
    }
})