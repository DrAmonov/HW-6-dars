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
    elDesc.textContent= 'Oq yo\l' + ' ' + userName.toUpperCase + '!'; 
}else {
    elDesc.textContent= userName.toUpperCase + ' ' + 'Ozgina sabr qilish kerak bo\'lar ekan!';
}