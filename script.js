

const loginform=document.querySelector("#loginform");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const message=document.querySelector("#result");

loginform.addEventListener("submit",(event)=>{

event.preventDefault();

if(username.value.trim()===""){
    message.textContent="Please enter name";
    message.style.color="red";
}

else if(email.value.trim()===""){
    message.textContent="Please enter email";
    message.style.color="red";
}

else if(password.value.trim()===""){
    message.textContent="Please enter password";
    message.style.color="red";
}

else if(password.value.length<6){
    message.textContent="Password must be at least 6 characters long";
    message.style.color="red";
}

else{
    message.textContent="Form Submitted Successfully";
    message.style.color="green";

    username.value="";
    email.value="";
    password.value="";
}

})

