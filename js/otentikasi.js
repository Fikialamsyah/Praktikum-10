// iniasiasi element
let btn_login = document.getElementById("login");

// jika button login di klik
btn_login.addEventListener('click', function(){
    // inisiasi username
    let username = document.getElementById("username").value;
    // inisiasi password
    let password = document.getElementById("password").value;

    // validasi
    if (username == "fiki" && password == "123"){
        alert("Login Berhasil !");
        window.location = "homepage.html";
        return false;
    } else {
        alert("Username atau password yang anda masukan salah !");
        return false;
    }
})