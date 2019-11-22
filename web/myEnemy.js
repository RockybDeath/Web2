function checkNick(nick) {
    if (nick==null || nick==="" || nick===" " || typeof nick==="undefined"){
        return false;
    }
    return true;
}
function check() {
    if(localStorage.getItem("Nickname").includes("Жаворонков")) ENEMY();
    else standart();
}
function ENEMY() {
    document.getElementById("scream").hidden=false;
    document.getElementById("permission").innerHTML="Не смей обижать Настю!";;
    let body=document.getElementById("hardBody");
    body.style.backgroundImage='none';
    document.getElementById("secret").hidden=true;
    document.getElementById("secret1").hidden=false;
}
function standart() {
    document.getElementById("scream").hidden=true;
    document.getElementById("permission").innerHTML="Нада регистрироваться";
    let body=document.getElementById("hardBody");
    body.style.backgroundImage="url('1.png')";
    document.getElementById("secret").hidden=true;
    document.getElementById("secret1").hidden=true;
}
function whoAreYou() {
    let nickname=document.getElementById("Nickname");
    if(checkNick(nickname.value)) {
        if(nickname.value.includes("Жаворонков")) ENEMY();
        else {
            document.getElementById("secret").hidden = true;
            localStorage.clear();
            localStorage.setItem("Nickname", nickname.value);
            document.location.href = "index.jsp";
        }
    } else {
       document.getElementById("secret").hidden=false;
    }
}