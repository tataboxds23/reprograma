
var hora = prompt("Olá! Por favor, escreva que horas são no seu computador agora:");

if(hora >= 0 && hora <= 19){
    alert("É dia.");
}

else if(hora >= 20 && hora <= 23){
    alert("É noite.");
}

else{
    alert("Desculpe. O horário informado está incorreto.");
}