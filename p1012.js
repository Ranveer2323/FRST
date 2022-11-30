var i = 3;
var tries = 3;
var username = "hello";
var secretWord = "HelloWorld";

//function for the password
function password(){

    //gets the value from the user for username
    var name = document.getElementById("textBox").value;
    
    //gets the value from the user for username
    var word = document.getElementById("secret").value;

    //checks if input matches the username and password

    

    if((name === username) && (word === secretWord)){
        location.href="secondPage.html" //directs to another webpage once the user logs in
        i = 3; //resets the counter for number of incorrect attempts whenever user is able to log in
        tries = 3; //resets the number of tries
    }
    else {
        counter(); //calls the counter function
        tries--; //updates the number of tries
        
        //if statement for user
        if (tries == 0){
            document.getElementById("output").innerHTML = "Login unsuccessful! System locked.";
        }
        else {
            document.getElementById("output").innerHTML = "Login failed! Number of attempts left: " + tries;
         }
       

        
    }
}
//function counter that counts the number of times a user tries to log in
function counter(){

    //counter that disables button after 3 tries
    if(i>1){
        i--;
    }
    else {
        document.getElementById("button").disabled = true;
    }
    return i;
}

//function for forgot password
function forgotPassword(){
    i = 3; //resets the counter for number of incorrect attempts whenever user is able to log in
    tries = 3; //resets the number of tries

    //if the buttong is disabled after 3 tries, this enables it again
    document.getElementById("button").disabled = false;

    //this gets the new password from user
    var newPassword = prompt ("Enter New Password", "New Password...");
    secretWord = newPassword; //sets the old password to new user input


}

function signUp(){
    var newUsername = prompt("Enter New Username: ");
    var newPass = prompt("Enter new password: ");

    username = newUsername; 
    secretWord= newPass; 

    return username, secretWord; 
     
}
