var arrivalTime = document.getElementById('arrivalTime');
var temperature = document.getElementById('temp');
var inputName = document.getElementById('username');

var error = document.querySelectorAll('.error')


const checkEmpty =()=> {
     if((arrivalTime.value || inputName.value || temperature.value) =='') {
        error[0].textContent = "Arrival time cant be empty";
        error[1].textContent = "temp Can't cant be empty";
        error[2].textContent = "Name Can't cant be empty";
    }
}

var button = document.querySelector('button')

button.addEventListener('click', checkEmpty)



