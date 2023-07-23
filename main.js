const btn = document.querySelector('.btns')
// inputs
const yearInput = document.querySelector('.year-input')
const monthInput = document.querySelector('.month-input')
const dayInput = document.querySelector('.day-input')
// result
const yearSpan = document.querySelector('.years-span')
const monthSpan = document.querySelector('.months-span')
const daySpan = document.querySelector('.days-span')
// error
let errorMessage = document.querySelectorAll('.error')

const date = new Date()
let year = date.getFullYear()
let month = 1 + date.getMonth()
let day = date.getDate()
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const errorMessageFunction = (err) => {
  errorMessage.forEach((error) => {
    error.innerHTML = err
    yearInput.style.borderColor = 'rgb(255, 87, 87)'
    monthInput.style.borderColor = 'rgb(255, 87, 87)'
    dayInput.style.borderColor = 'rgb(255, 87, 87)'
  })
}

const errorMessageMonth = (err) => {
  errorMessage[1].innerHTML = err
  monthInput.style.borderColor = 'rgb(255, 87, 87)'
}

const errorMessageYear = (err) => {
  errorMessage[2].innerHTML = err
  yearInput.style.borderColor = 'rgb(255, 87, 87)'
}

const ageFunction = () => {
  if (
    yearInput.value === '' &&
    monthInput.value === '' &&
    dayInput.value === ''
  ) {
    errorMessageFunction('this field is required')

  } else if (monthInput.value > 13) {
    errorMessageMonth('Must be a valid month')
  } else if (yearInput.value >= year) {
    errorMessageYear('Must be a valid year')
  } else {
    if (dayInput.value > day) {
      day = day + months[month - 1]
      month = month - 1
    }
    if (monthInput.value > month) {
      month = month + 12
      year = year - 1
    }

    let years = year - yearInput.value
    let mont = month - monthInput.value
    let da = day - dayInput.value

    yearSpan.innerHTML = years
    monthSpan.innerHTML = mont
    daySpan.innerHTML = da
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  ageFunction()
})
