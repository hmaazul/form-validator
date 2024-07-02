const username = document.querySelector('#username')
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value
const password2 = document.querySelector('#password2').value
const button = document.querySelector('button')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(username.value);
})


function checkLength(username){
    if(username.length < 3){
        
    }
}