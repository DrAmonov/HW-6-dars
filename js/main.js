var elDesc = document.querySelector('.desc');

var userName = prompt ('Iltimos ismingizni kiriting!');
var userMoney = prompt ('Sayohat uchun jamgargan mablagingizni kiriting!');
var forTicket = 500;
var forHotel = 250;
var forTravel = 120;
var halfDollar = ((forHotel + forTicket) * 11225);
var halfEuro = (forTravel * 11686);
var total = (halfDollar + halfEuro);
console.log (total);



if (userMoney >= total) {
    elDesc.textContent= 'Oq yo\l' + ' ' + userName + '!'; 
} else if (userMoney <0) {
    elDesc.textContent= 'Hisobingiz minusda' + ' ' + userName + '!';
}else if (userMoney = isNaN(userMoney) == true) {
    elDesc.textContent='raqam kiriting' + ' ' + userName;
}
else {
    elDesc.textContent= userName + ' ' + 'Ozgina sabr qilish kerak bo\'lar ekan!';
}