const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(checkInput([username,email,password,password2])){
        
    }
    else{
        checkLength(username,3,15)
        checkEmail(email)
        checkLength(password,8,15)

        matchPassword(password,password2)
    }
    
})

function checkInput(inputArr){
    let flag= false
    inputArr.forEach(function(input){
    if(input.value.trim() === ""){
        showError(input,`Please fill the ${input.id}`)
        flag =true
    }
    });

    return flag
}

function showError(input, message){
    const parent = input.parentElement
    parent.setAttribute("class","form-control error")
    const errMsg = parent.querySelector('small')
    errMsg.innerText = `${message}`
}

function showSuccess(input){
    const parent = input.parentElement
    parent.setAttribute("class","form-control success")
}

function checkLength(input, min, max){
    if(input.value.trim().length < min ){
        showError(input, `${input.id} must at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${input.id} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
    }
    
}

function checkEmail(email){
    const pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/
    const isValid = pattern.test(email.value.trim())
    if(isValid){
        showSuccess(email)
    }
    else{
        showError(email,`${email.id} is not valid`)
    }
}

function matchPassword(p1 , p2){
    if(p1.value === p2.value){
        showSuccess(p2)
    }
    else{
        showError(p2,`password does not match`)
    }
}