
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
            
         } else {
            input[i].style.border="2px solid"
         }
     }
}

let nameEl = document.form.nameof
let telNum = document.form.tel
let nin = document.form.nationalid
let small = document.querySelectorAll('small')
let validation =() => {
    let name = /^[A-Za-z]+$/ 
    if (nameEl.value <= 8) {
        nameEl.style.border="2px solid"
        small[8].innerHTML = ''
    }
else if(!nameEl.value.match(name)) {
    nameEl.style.border = '2px solid red'
    small[8].innerHTML = 'Invalid username'
}
   
let tel = /^[0-9]+$/
if (telNum.value <= 10) {
    telNum.style.border="2px solid"
    small[10].innerHTML = ''
} else if (!telNum.value.match(tel)){
    telNum.style.border = "2px solid red"
    small[10].innerHTML = 'Invalid tel number'
 }

 let temp = /[0-9a-zA-Z]+$/
 if (temperature.value.match(temp)){
    temperature.style.border="2px solid"
    
 }
 else {
     temperature.style.border = "2px solid red"
     
 }

let id = /[0-9a-zA-Z]+$/
if(nin.value <=14)  {
    nin.style.border="2px solid"
    error[9].innerHTML = ''
} else if(!nin.value.match(id)) {
    nin.style.border="2px solid red"
    error[9].innerHTML = 'Invalid ID no.'
}


 
}





