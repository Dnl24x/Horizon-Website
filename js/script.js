function createAccount(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


if(username=="" || password==""){

document.getElementById("message").innerHTML =
"Please fill everything!";

return;

}


localStorage.setItem("horizonUsername", username);
localStorage.setItem("horizonPassword", password);


document.getElementById("message").innerHTML =
"Account created! You can now sign in.";

}





function login(){


let username =
document.getElementById("loginUsername").value;


let password =
document.getElementById("loginPassword").value;



let savedUsername =
localStorage.getItem("horizonUsername");


let savedPassword =
localStorage.getItem("horizonPassword");



if(username===savedUsername && password===savedPassword){


localStorage.setItem(
"horizonLoggedIn",
"true"
);


window.location.href="account.html";


}

else{


document.getElementById("message").innerHTML =
"Incorrect username or password.";


}



}





function logout(){


localStorage.removeItem("horizonLoggedIn");
localStorage.removeItem("horizonUsername");
localStorage.removeItem("horizonPassword");
localStorage.removeItem("horizonRank");


window.location.href="index.html";


}