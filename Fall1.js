const xMax = 3;
const xMin = -3;
const correctY = [-4, -2, -1, 0, 1, 2, 3, 4, 4];
let R1=document.getElementById("R1").value;
let nick3 = document.getElementById("nickname");
if(localStorage.getItem("Nickname")!=null && typeof localStorage.getItem("Nickname")!=="undefined" && localStorage.getItem("Nickname")!==""){
    nick3.innerHTML = "Добро пожаловать - " + localStorage.getItem("Nickname");
} else{
    nick3.innerHTML="";
}
function checkValue(X) {
    return (isNaN(Number(X.value.replace(',','.'))) || X.value.replace(',','.')< xMin || X.value.replace(',','.')>xMax || X.value==="");
}
function onX() {
    var X=document.getElementById("Yea");
    if (checkValue(X)) X.style.backgroundColor="red";
    else X.style.backgroundColor="white";
}
// var flag=0;
function clear(){
    var p=document.getElementById("error");
    p.innerHTML="";
}
function error(message){
    clear();
    var p=document.getElementById("error");
    p.innerHTML=message;
    // var error=document.createElement("error");
    // var errorParent=document.getElementById("error");
    // if (flag<1){
    //     flag++;
    //     error.innerHTML=message;
    //     error.style.cssText="color: Red;";
    //     errorParent.appendChild(error);
    // }
}
function onSubmit(){
    var X=document.getElementById("Yea");
    var Y=getCheckboxes();
    if (checkValue(X) || Y.length === 0){
        event.preventDefault();
        error("You have entered extraneous characters or nothing, look at the picture on the left, aren't you ashamed ?!");
    }
    return !(checkValue(X)||Y.length===0);
}
function getCheckboxes() {
    var checkboxes=document.getElementsByClassName("rb");
    var check=[];
    for(var index=0;index<checkboxes.length;index++){
        if(checkboxes[index].checked){
            check.push(checkboxes[index].value);
        }
    }
    return check;
}
function check() {
    if(onSubmit()) {
        var Y=getCheckboxes();
        var X = document.getElementById("Yea");
        var R=document.getElementById("R1");
        var R2=document.getElementById("R1").value;
        if(R1!=R2) {
            drawCanwas("canvas",R2);
            R1=R2;
        }
        clear();
        $.ajax({
            url:"control",
            data:{
                X : X.value.replace(',','.'),
                R : R.value,
                Y : Y,
                nickname : localStorage.getItem("Nickname")
            },
            datatype:"json",
            success: function (answer) {
                var result=document.getElementById("results");
                result.innerHTML=answer;
            },
            error: function (req){
                if(req.status===418){
                    location.href="http://"+location.host+req.responseText;
                }else{error("А вот нинада");
                }
            }
        });
    }
}
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

function createCanvas(id, x, y, r, isArea){
    // drawCanwas(id, r);
    context.beginPath();
    context.rect(Math.round(150 + ((x / r) * 130))-2, Math.round(150 - ((y / r) * 130))-2, 4, 4);
    context.closePath();
    if(isArea === "true"){
        context.strokeStyle = "green";
        context.fillStyle = "green";
    } else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    context.fill();
    context.stroke();

}
function drawPoint(id, x, y, r,isArea){
    context.beginPath();
    context.rect(x - 2, y - 2, 4, 4);
    context.closePath();
    if(isArea === "true"){
        context.strokeStyle = "yellow";
        context.fillStyle = "yellow";
    } else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    context.fill();
    context.stroke();

}

function clicCanvas(canvId, R) {
    if(R1!=R) {
        drawCanwas("canvas",R);
        R1=R;
    }
    var elem = document.getElementById(canvId);
    var br = elem.getBoundingClientRect();
    var left = br.left;
    var top = br.top;
    var event = window.event;
    var x = event.clientX-left;
    var y = event.clientY-top;
    x=(x-150)/130*R; y=Math.round((150-y)/130*R);
    var Y =[]; Y.push(y);
    $.ajax({
        url:"control",
        data:{
            X : x,
            R : R,
            Y : Y,
            nickname : localStorage.getItem("Nickname")
        },
        datatype:"json",
        success: function (answer) {
            clear();
            var result=document.getElementById("results");
            result.innerHTML=answer;
            createCanvas("canvas",x,y,R,document.getElementById("secret").innerHTML);
            // var haveR = document.getElementsByClassName("tea");
            // for(let i=0; i<haveR.length; i++){
            //     let superR= haveR[i].getElementsByClassName("need");
            //     if(superR[0].value===R1) createCanvas("canvas",haveR[i].getElementsByClassName("need2")[0].value
            //     ,haveR[i].getElementsByClassName("need1")[0].value,superR[0].value,
            //         haveR[i].getElementsByClassName("need3")[0].value);
            // }
        },
        error: function (req){
        if(req.status===418){
            location.href="http://"+location.host+req.responseText;
        }else{error("А вот нинада");
        }
        }
    });
    // drawPoint(canvId, x, y, R,true);
    // var boolArea = isArea(x, y, R);
}
function drawCanwas(id, r){
    //очистка
    context.clearRect(0, 0, canvas.width, canvas.height);

    //прямоугольник
    context.beginPath();
    context.rect(150, 150, 65, 130);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    // сектор
    context.beginPath();
    context.moveTo(150, 150);
    context.arc(150, 150, 65, 0, -Math.PI/2, true);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //треугольник
    context.beginPath();
    context.moveTo(85, 150);
    context.lineTo(150, 150);
    context.lineTo(150, 280);
    context.lineTo(85, 150);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //отрисовка осей
    context.beginPath();
    context.font = "10px Verdana";
    context.moveTo(150, 0); context.lineTo(150, 300);
    context.moveTo(150, 0); context.lineTo(145, 15);
    context.moveTo(150, 0); context.lineTo(155, 15);
    context.fillText("Y", 160, 10);
    context.moveTo(0, 150); context.lineTo(300, 150);
    context.moveTo(300, 150); context.lineTo(285, 145);
    context.moveTo(300, 150); context.lineTo(285, 155);
    context.fillText("X", 290, 135);

    // деления X
    context.moveTo(145, 20); context.lineTo(155, 20); context.fillText(r, 160, 20);
    context.moveTo(145, 85); context.lineTo(155, 85); context.fillText((r / 2), 160, 78);
    context.moveTo(145, 215); context.lineTo(155, 215); context.fillText(-(r / 2), 160, 215);
    context.moveTo(145, 280); context.lineTo(155, 280); context.fillText(-r, 160, 280);
    // деления Y
    context.moveTo(20, 145); context.lineTo(20, 155); context.fillText(-r, 20, 170);
    context.moveTo(85, 145); context.lineTo(85, 155); context.fillText(-(r / 2), 70, 170);
    context.moveTo(215, 145); context.lineTo(215, 155); context.fillText((r / 2), 215, 170);
    context.moveTo(280, 145); context.lineTo(280, 155); context.fillText(r, 280, 170);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();
}
// var canvas = document.getElementById('graphic');
// let is_default_graphic = false;
// function init() {
//     createGraphic('canvas', document.getElementById("R1").value);
// }
// function createGraphic(id, r) {
//     if (r === 0 || r === '_') {
//         is_default_graphic = true;
//         r = 1;
//     }else{
//         is_default_graphic = false;
//     }
//     let canvas = document.getElementById(id);
//     context = canvas.getContext("2d");
//     context.clearRect(0, 0, canvas.width, canvas.height);
//
//     // rectangle
//     context.beginPath();
//     context.rect(20, 150, 130, 130);
//     context.closePath();
//     context.strokeStyle = "#2f9aff";
//     context.fillStyle = "#2f9aff";
//     context.fill();
//     context.stroke();
//
//     // sector
//     context.beginPath();
//     context.moveTo(150, 150);
//     context.arc(150, 150, 65, -Math.PI / 2, 0, false);
//     context.closePath();
//     context.strokeStyle = "#2f9aff";
//     context.fillStyle = "#2f9aff";
//     context.fill();
//     context.stroke();
//
//     // triangle
//     context.beginPath();
//     context.moveTo(150, 150);
//     context.lineTo(20, 150);
//     context.lineTo(150, 20);
//     context.lineTo(150, 150);
//     context.closePath();
//     context.strokeStyle = "#2f9aff";
//     context.fillStyle = "#2f9aff";
//     context.fill();
//     context.stroke();
//
//     // axes
//     context.beginPath();
//     context.font = "10px Verdana";
//     context.strokeStyle = "black";
//     context.fillStyle = "black";
//     context.moveTo(150, 0);
//     context.lineTo(150, 300);
//     context.moveTo(150, 0);
//     context.lineTo(145, 15);
//     context.moveTo(150, 0);
//     context.lineTo(155, 15);
//     context.fillText("Y", 160, 10);
//     context.moveTo(0, 150);
//     context.lineTo(300, 150);
//     context.moveTo(300, 150);
//     context.lineTo(285, 145);
//     context.moveTo(300, 150);
//     context.lineTo(285, 155);
//     context.fillText("X", 290, 130);
//
//     // Y parts
//     context.moveTo(145, 20);
//     context.lineTo(155, 20);
//     context.fillText(is_default_graphic ? 'R' : String(r), 160, 20);
//     context.moveTo(145, 85);
//     context.lineTo(155, 85);
//     context.fillText(is_default_graphic ? 'R/2' : String(r / 2), 160, 78);
//     context.moveTo(145, 215);
//     context.lineTo(155, 215);
//     context.fillText(is_default_graphic ? '-R/2' : String(-(r / 2)), 160, 215);
//     context.moveTo(145, 280);
//     context.lineTo(155, 280);
//     context.fillText(is_default_graphic ? '-R' : String(-r), 160, 280);
//
//     // X parts
//     context.moveTo(20, 145);
//     context.lineTo(20, 155);
//     context.fillText(is_default_graphic ? '-R' : String(-r), 15, 140);
//     context.moveTo(85, 145);
//     context.lineTo(85, 155);
//     context.fillText(is_default_graphic ? '-R/2' : String(-(r / 2)), 70, 140);
//     context.moveTo(215, 145);
//     context.lineTo(215, 155);
//     context.fillText(is_default_graphic ? 'R/2' : String(r / 2), 215, 140);
//     context.moveTo(280, 145);
//     context.lineTo(280, 155);
//     context.fillText(is_default_graphic ? 'R' : String(r), 280, 140);
//
//     context.closePath();
//     context.strokeStyle = "black";
//     context.fillStyle = "black";
//     context.stroke();
// }
// function clickCanvas(R) {
//     console.log("Click on canvas");
//     let canvas = document.getElementById("canvas");
//     console.log('is default graphic: ' + is_default_graphic);
//     if (is_default_graphic) {
//         console.log('error: R is not set');
//         createGraphic('canvas', 0);
//         let canvas = document.getElementById("canvas"), context = canvas.getContext("2d");
//         context.strokeStyle = "#000000";
//         context.fillStyle = "#ff0014";
//         context.font = '20px Arial';
//         context.fillText('You have to set ', 20, 50);
//         context.fillText('R parameter', 20, 70);
//         return;
//     }
//
//     let br = canvas.getBoundingClientRect();
//     let left = br.left;
//     let top = br.top;
//     let event = window.event;
//     let x = event.clientX - left;
//     let y = event.clientY - top;
//     console.log(x);
//     console.log(y);
//     // markPoint((x - 150) / 130 * R, (-y + 150) / 130 * R, R);
// }
// function isRcorrect(r) {
//     return r >= 1 && r <= 5;
// }
// function isYcorrect(y) {
//     let yFloat = parseFloat(y.replace(/,/, '.'));
//     return isNumber(y.replace(/,/, '.')) && yFloat >= -4 && yFloat <= 4;
// }
// function checkall(x,y,r) {
//     return (!checkValue(x) && isYcorrect(y) && isRcorrect(r))
// }
// function markPoint(x,y,r) {
//     clear();
//     if(!checkall(x,y,r)) {
//         error("Тыкать намальна нада");
//     }
//     else{
//         $.ajax({
//             url:"control",
//             data:{
//                 X : X.value.replace(',','.'),
//                 R : R.value,
//                 Y : Y
//             },
//             datatype:"json",
//             success: function (answer) {
//                 var result=document.getElementById("results");
//                 result.innerHTML=answer;
//             },
//             error: function (message) {
//                 error("Ошибочка");
//             }
//         });
//     }
// }