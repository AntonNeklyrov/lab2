function closeSignIn() {
    document.getElementById('SignIn').style.display = 'none';
    document.getElementById('popup-fade').style.display = 'none';
}

function closeLogIn() {
    document.getElementById('LogIn').style.display = 'none';
    document.getElementById('popup-fade').style.display = 'none';
}

function showLogIn(){
    document.getElementById('LogIn').style.display = 'block';
    document.getElementById('popup-fade').style.display = 'block'
}

function showSignIn(){
    document.getElementById('SignIn').style.display = 'block';
    document.getElementById('popup-fade').style.display = 'block'
}

function validValue(){
    let p1 = document.getElementsByClassName("user_password");
    let p2 = document.getElementsByClassName("user_password2");
    if(p1!=p2){
        return alert("Пороли не совпадают!")
    }
}




