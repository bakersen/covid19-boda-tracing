
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
             input[i].style.border="2px solid red"
             error[i].textContent = "This field is required"
         } else {
            input[i].style.border="2px solid blue"
            error[i].textContent = ""
         }
     }
}

let nameEl = document.form.nameof
let telNum = document.form.tel
let small = document.querySelectorAll('small')
let validation =() => {
    let name = /^[A-Za-z]+$/ 
    if (nameEl.value.match(name)) {
        nameEl.style.border ="2px solid blue"
        small[8].innerHTML = ''
    }
    else{
        nameEl.style.border = '2px solid red'
        small[8].innerHTML = 'Invalid username'
    }
let tel = /^[0-9]+$/
 if (telNum.value.match(tel)){
     telNum.style.border = "2px solid blue"
     small[10].innerHTML = ''
 }
 else {
     telNum.style.border = "2px dotted red"
     small[10].innerHTML = 'Invalid tel number'
 }
}





