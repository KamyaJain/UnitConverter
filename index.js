const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn")
const meters = document.getElementById("meters")
const volumes = document.getElementById("volumes")
const masses = document.getElementById("masses")

btnEl.addEventListener("click", function() {
    meter(inputEl.value);
    volume(inputEl.value);
    mass(inputEl.value);
})

function meter(input) {
    let feet =  (input * 3.28).toFixed(3)
    let m = (input / 3.28).toFixed(3)
    meters.innerHTML = `${input} meters = ${feet} feet | ${input} feet = ${m} meters`
}

function volume(input) {
    let gallons =  (input * 0.264).toFixed(3)
    let liters = (input / 0.264).toFixed(3)
    volumes.innerHTML = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
}

function mass(input){
    let pounds =  (input * 2.20).toFixed(3)
    let kilos = (input / 2.20).toFixed(3)
    masses.innerHTML = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`
}