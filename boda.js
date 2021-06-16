
var date = document.getElementById('date');
var pickUp = document.getElementById('pick-up');
var dropOff = document.getElementById('dropoff');
var pickUpTime = document.getElementById('pickup-time')
var arrivalTime = document.getElementById('arrivalTime');
var temperature = document.getElementById('temp');
var vaccinated = document.getElementById('vaccinated');
var gender = document.getElementById('gender')

const inputs = [date, pickUp, dropOff, pickUpTime, arrivalTime, temperature, vaccinated, gender]

var error = document.querySelectorAll('.error')


const checkEmpty = (input) => {
     for(let i=0; i<input.length; i++){
         if(input[i].value==""){
             input[i].style.border="1px solid red"
             error[i].textContent = "This field is required"
         }
     }
}





