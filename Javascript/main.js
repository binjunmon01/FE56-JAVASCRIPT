// Biến 
// String 
var username = "Tran Cong Khanh";
var address = "112 Cao Thắng";
console.log(username, address);
// Number 
var age = 18;
// Boolean 
var status = true;
// NULL 
var numberStudent = null;

// Hoisting
console.log("Fullname: " + fullName);
var fullName = "Hello"

// Hằng số 
const PI = 3.14;
// If condition 
// == : so sánh giá trị
// ===:so sánh giá trị & kiểu dữ liệu
if (1 === "1") {
    console.log("True condition")
}
else {
    console.log("False condition");
}

console.log((1 == 1) ? "True condition" : "False condition")

var test = 1;

switch (test) {
    case 0:
        console.log("Test:" + test);
    case 1:
        console.log("Test:" + test);
    default:
        console.log("Undefined");
        break;
 }

 var number1 = 10;
 var number2 = 20;

 function Sum(number1,number2){
     return (number1+number2);
 }
 console.log(Sum(number1,number2));

// Bài tập 
console.log("Bài tập : 21/11/2020:");
var dT = 1;
var dL = 5;
var dH = 4;

function averagePoint(dT, dL, dH){
    return (dT+dL+dH)/3;
}
var point = averagePoint(dT,dL,dH);
point >= 5 ? (point >= 7 ? (point >= 8 ? (point >=9 ? console.log("Xuất sắc"):console.log("Giỏi")) : console.log("Khá")) : console.log("Trung bình")) : console.log("Yếu");


// DOM 
var txtInput = document.getElementById("txtInput");
console.log(txtInput.value);
var _pText = document.getElementById("pText");
console.log(_pText.innerHTML);

// Cách 1 
function eventClick(){
    alert(txtInput.value);
} ; 
// Cách 2 
// document.getElementById("btn-Click").onclick = function(){
//     alert("Lêu lêu");
// };
// Cách 3 - callback-function
// document.getElementById("btn-Click").addEventListener("click",function(){
//     alert("haha");
// });

document.getElementById("clickMe").addEventListener("click",function(){
    
    document.getElementById("content").innerHTML="Hihi";
    document.getElementById("content").style.backgroundColor="#F14AB4";
    document.getElementById("content").style.color="#FFFFFF";
    document.getElementById("content").style.textAlign="center";
    document.getElementById("content").style.fontSize="30px";
});
document.getElementById("Hide").addEventListener("click",function(){
    
    document.getElementById("content").style.display="none";

});
document.getElementById("On").addEventListener("click",function(){
    
    document.getElementById("content").style.display="block";

});




document.getElementById("bullOn").addEventListener("click",function(){
    document.getElementById("imgBulb").src="./img/pic_bulbon.gif"
});

document.getElementById("bullOff").addEventListener("click",function(){
    document.getElementById("imgBulb").src="./img/pic_bulboff.gif"
});

// DOM tagName 
var tagName = document.getElementsByTagName("button")[0];
console.log(tagName);
// DOM class-Name
var _className = document.getElementsByClassName("btn");
console.log(_className);

// // DOM querySelector 
// var _querySelector = document.querySelector(".container #txtThongbao");
// // DOM querySelectorAll 
// var _querySelectorAll = document.querySelectorAll(".container");
// console.log(_querySelectorAll);

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var total = document.getElementById("txtTongTien").value;
    var  discount = document.getElementById("slPhanTramTip").value;
    var number = document.getElementById("txtSoNguoi").value;

    var money = (total*discount/100)/number;
    document.getElementById("txtThongBaoTienTip").className="alert alert-danger d-block";
    document.getElementById("txtThongBaoTienTip").innerHTML = money;
});
    function addUsers(){
        console.log("User added");
    }