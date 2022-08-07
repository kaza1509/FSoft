var countries = ['Selecte country', 'Vietnam', 'Singapore', 'Malaysia', 'Indonesia', 'Philippines', 'Laos', 'Cambodia']
var positions = ['Choose desire position', 'Operator', 'Manager', 'Developer', 'Designer', 'Tester']

var selectContries = document.querySelector('.time-3 select')
var htmlCountries = ''

countries.forEach((element, index) => {
    htmlCountries += `<option value="${index}">${element}</option>`
})

selectContries.innerHTML = htmlCountries

var selectPositions = document.querySelector('.time-5 select')
var htmlPositions = ''
positions.forEach((element, index) => {
    htmlPositions += `<option value="${index}">${element}</option>`
})
selectPositions.innerHTML = htmlPositions


//information
var infoFirstName = 'The First name should not be blank'
var infoLastName = 'The Last name should not be blank'
var infoEmailBlank = 'The email should not be blank'
var inforEmailFormat = 'Please input your email address'
var infoCountry = 'Please select your country'
var infoPosition = 'Please select your position'


var send = document.querySelector('input[name="send"]')
send.addEventListener('click', (e) => {
    var firstName = document.querySelector('input[name="firstName"]')
    var lastName = document.querySelector('input[name="lastName"]')
    var email = document.querySelector('input[name="email"]')
    var phone = document.querySelector('input[name="phone"]')
    var country = document.querySelector('select[name="country"]')
    var position = document.querySelector('select[name="position"]')
    var city = document.querySelector('input[name="city"]')

    var firstNameErorr = document.getElementById('firstNameErorr')
    var lastNameErorr = document.getElementById('lastNameErorr')
    var emailErorr = document.getElementById('emailErorr')
    var phoneErorr = document.getElementById('phoneErorr')
    var countryErorr = document.getElementById('countryErorr')
    var cityErorr = document.getElementById('cityErorr')
    var positionErorr = document.getElementById('positionError')

    if (firstName.value == '') {
        firstNameErorr.textContent = infoFirstName
        firstNameErorr.style.display = 'block'
        firstName.style.borderColor = 'red'
    }
    else {
        firstNameErorr.style.display = 'none'
        firstName.style.borderColor = 'green'
    }

    if (lastName.value == '') {
        lastNameErorr.textContent = infoLastName
        lastNameErorr.style.display = 'block'
        lastName.style.borderColor = 'red'
    }
    else {
        lastNameErorr.style.display = 'none'
        lastName.style.borderColor = 'green'
    }

    if (email.value == '') {
        emailErorr.textContent = infoEmailBlank
        emailErorr.style.display = 'block'
        email.style.borderColor = 'red'
    }
    else {
        var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!regexEmail.test(email.value)) {
            emailErorr.textContent = inforEmailFormat
            emailErorr.style.display = 'block'
            email.style.borderColor = 'red'
        }
        else {
            emailErorr.style.display = 'none'
            email.style.borderColor = 'green'
        }
    }

    if (country.value == 0) {
        countryErorr.textContent = infoCountry
        countryErorr.style.display = 'block'
        country.style.borderColor = 'red'
    }
    else {
        countryErorr.style.display = 'none'
        country.style.borderColor = 'green'
    }

    if (position.value == 0) {
        positionErorr.textContent = infoPosition
        positionErorr.style.display = 'block'
        position.style.borderColor = 'red'
    }
    else {
        positionErorr.style.display = 'none'
        position.style.borderColor = 'green'
    }

    e.preventDefault();
})