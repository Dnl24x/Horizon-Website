// ==========================
// Wippix Account System
// ==========================


// Create Account

function createAccount(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if(username === "" || password === ""){

        document.getElementById("message").innerHTML =
        "Please enter username and password.";

        return;

    }


    localStorage.setItem("wippixUsername", username);
    localStorage.setItem("wippixPassword", password);


    if(username === "Dnl24x"){

        localStorage.setItem("wippixRank","OWNER");

    } else {

        localStorage.setItem("wippixRank","PLAYER");

    }


    localStorage.setItem("wippixLoggedIn","true");


    // Default Character

    localStorage.setItem("wippixCharacter","true");
    localStorage.setItem("wippixCharacterName",username);
    localStorage.setItem("wippixCharacterStyle","Driver");

    localStorage.setItem("wippixCharacterHair","Default");
    localStorage.setItem("wippixCharacterClothes","Default");
    localStorage.setItem("wippixCharacterShoes","Default");
    localStorage.setItem("wippixCharacterSkin","Default");
    localStorage.setItem("wippixCharacterAccessories","None");


    window.location.href="index.html";

}





// Login

function login(){

    let username =
    document.getElementById("loginUsername").value;


    let password =
    document.getElementById("loginPassword").value;



    let savedUsername =
    localStorage.getItem("wippixUsername");


    let savedPassword =
    localStorage.getItem("wippixPassword");



    if(username === savedUsername && password === savedPassword){


        localStorage.setItem(
        "wippixLoggedIn",
        "true"
        );


        window.location.href="index.html";


    } else {


        document.getElementById("message").innerHTML =
        "Incorrect username or password.";


    }

}





// Logout

function logout(){

    localStorage.removeItem(
    "wippixLoggedIn"
    );


    window.location.href="index.html";

}





// Check login

function isLoggedIn(){

    return localStorage.getItem(
    "wippixLoggedIn"
    ) === "true";

}