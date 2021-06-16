
var date = document.getElementById('date');
var pickUp = document.getElementById('pick-up');
var dropOff = document.getElementById('dropoff');
var pickUpTime = document.getElementById('pickup-time')
var arrivalTime = document.getElementById('arrivalTime');
var temperature = document.getElementById('temp');
var temperature = document.getElementById('temp');
var inputName = document.getElementById('nameof');
var dropDowns = document.querySelectorAll('.custom-select')

var error = document.querySelectorAll('.error')


const checkEmpty =()=> {
     if(date.value =='') {
        error[0].textContent = "Enter Date";
    }
}

var button = document.querySelector('button')

button.addEventListener('click', checkEmpty)



