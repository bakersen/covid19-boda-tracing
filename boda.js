
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

nameOutput =  document.getElementById('nameof')


// Define Function Validation
    let validation =()=> {
  
    // Function validating  the Temperature field
    let validateTemp =()=> {
        let temp = /^[0-9a-zA-Z]+$/
        if (temperature.value.match(temp)){
            temperature.style.border="2px solid lightgrey"
            small[5].innerHTML = ''
        }
        else {
            temperature.style.border = "2px solid red"
            small[5].innerHTML = 'Invalid temperature'
        }
    }

    // Function validating the National ID/Passport field
    let validateID =()=> {
        let id = /^[0-9a-zA-Z]+$/
        if(nin.value <=14 || (nin.value.match(id)))  {
            nin.style.border="2px solid lightgrey"
            small[9].innerHTML = ''
        } else  {
            nin.style.border="2px solid red"
            small[9].innerHTML = 'Invalid ID'
        }
    }
   
    // Invoke functions defined above
    // validateName()
    // validateTelephone()
    validateTemp()
    validateID()
 
}

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

let validateTelephone =() => {    
            
            let tel = /^[0-9]+$/                   

            if (telNum.value.length > 12 || !(telNum.value.match(tel))) {
                small[9].innerHTML = 'Enter a Valid Number';
            } else if (telNum.value.length <= 10 && (telNum.value.match(tel))) {
                small[9].innerHTML = '';
            }            
}

