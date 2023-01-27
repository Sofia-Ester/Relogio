const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const seguntos = document.getElementById('seguntos');
const body = document.querySelector('body');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    seguntos.textContent = seg;

    if (hr >= 19){
        body.classList.add('night');
    }

    if (hr >= 0 && hr < 5) {
        body.classList.add('dawn');
    }

    if (hr >=5 && hr <=7){
        body.classList.add('sunrice');
    }
    

})