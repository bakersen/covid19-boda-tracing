
// Declare variables to pick inputs from form

var date = document.getElementById('date');
var pickUp = document.getElementById('pick-up');
var dropOff = document.getElementById('dropoff');
var pickUpTime = document.getElementById('pickup-time');
var arrivalTime = document.getElementById('arrivalTime');
var temperature = document.getElementById('temp');
// var vaccinated = document.getElementById('vaccinated');
var gender = document.getElementById('gender')

const inputs = [date, pickUp, dropOff, pickUpTime, arrivalTime, temperature, gender]

var error = document.querySelectorAll('.error')

// Define a function that check for empty fields
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

// Declare variables to be used in validation

let nameEl = document.form.nameof
let telNum = document.form.tel
let nin = document.form.nationalid
let small = document.querySelectorAll('small')


 // Function validating the name field  
let validateName =() => {        //   
            let nameMatches = /^[A-Za-z]+$/                    

            if (nameEl.value.length > 8) {
                small[7].innerHTML = 'Name Should be 8 Characters atmost';
            } else if (nameEl.value.length<= 8 && nameEl.value.match(nameMatches)) {
                small[7].innerHTML = '';
            } else if (!(nameEl.value.length<= 8 && nameEl.value.match(nameMatches))) {
                small[7].innerHTML = 'Enter Valid Name';
            } else if (nameEl.value.length=0) {
                small[7].innerHTML = '';
            }
}

 // Function validating Telephone 
let validateTelephone =() => {    
            
            let tel = /^[0-9]+$/                   

            if (telNum.value.length > 12 || !(telNum.value.match(tel))) {
                small[9].innerHTML = 'Enter a Valid Number';
            } else if (telNum.value.length <= 10 && (telNum.value.match(tel))) {
                small[9].innerHTML = '';
            }            
}

 // Function validating Temperature
let validateTemp =() => {              
            let temp = /^[0-9a-zA-Z]+$/            

            if (temperature.value.length > 2 || !(temperature.value.match(temp))) {
                small[5].innerHTML = 'invalid Temperature';
            } else if (temperature.value.length <= 10 && temperature.value.match(temp)) {
                small[5].innerHTML = '';
            }            
}

 // Function validating ID
 let validateID =()=> {
        
         let id = /^[0-9a-zA-Z]+$/          

            if (nin.value.length > 14 || !(nin.value.match(id))) {
                small[10].innerHTML = 'Enter valid ID';
            } else if (nin.value.length <= 14 && nin.value.match(id)) {
                small[10].innerHTML = '';
            }            
}
