var d = new Date();
lista = document.getElementsByClassName("dia");
data = d.getDay();

for(var i = 0; i < lista.length; i++) {
    lista[i].innerHTML = data;
}

mes = document.getElementsByClassName('mes');
var months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for( var i = 0; i< mes.length; i++) {
    mes[i].innerHTML = months[d.getMonth()];
}


