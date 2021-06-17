
var date = document.getElementById('date');
var pickUp = document.getElementById('pick-up');
var dropOff = document.getElementById('dropoff');
var pickUpTime = document.getElementById('pickup-time')
var arrivalTime = document.getElementById('arrivalTime');
var temperature = document.getElementById('temp');
// var vaccinated = document.getElementById('vaccinated');
var gender = document.getElementById('gender')

const inputs = [date, pickUp, dropOff, pickUpTime, arrivalTime, temperature, gender]

var error = document.querySelectorAll('.error')


const checkEmpty = (input) => {
     for(let i=0; i<input.length; i++){
         if(input[i].value==""){
             input[i].style.border="2px solid red"
            error[i].textContent = 'Please fill field'
         } else {
            input[i].style.border="2px solid lightgrey"
            error[i].textContent = ''
         }
     }
}

let nameEl = document.form.nameof
let telNum = document.form.tel
let nin = document.form.nationalid
let small = document.querySelectorAll('small')
let validation =() => {
    let name = /^[A-Za-z]+$/ 
    if (nameEl.value <= 8 || (nameEl.value.match(name))) {
        nameEl.style.border="2px solid lightgrey"
        small[8].innerHTML = ''
    }
else {
    nameEl.style.border = '2px solid red'
    small[8].innerHTML = 'Invalid username'
}
   
let tel = /^[0-9]+$/
if (telNum.value <= 10 || (telNum.value.match(tel))) {
    telNum.style.border="2px solid lightgrey"
    small[10].innerHTML = ''
} 
 else {
    telNum.style.border="2px solid red"
    small[10].innerHTML = 'Invaid no.'
 }

 let temp = /^[0-9a-zA-Z]+$/
 if (temperature.value.match(temp)){
    temperature.style.border="2px solid lightgrey"
    small[5].innerHTML = ''
 }
 else {
     temperature.style.border = "2px solid red"
     small[5].innerHTML = 'Invalid temperature'
 }

let id = /^[0-9a-zA-Z]+$/
if(nin.value <=14 || (nin.value.match(id)))  {
    nin.style.border="2px solid lightgrey"
    small[9].innerHTML = ''
} else  {
    nin.style.border="2px solid red"
    small[9].innerHTML = 'Invalid ID'
}


 
}





