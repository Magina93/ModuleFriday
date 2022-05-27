const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
reader.question("Welcome to the password validator, Please enter your password?", function(input){
    tokens = input.split(' ');
password = tokens[0];
    if (input.length < 10) {
        console.log("Your password is invalid")
    } else if (input.length > 12) {
        console.log("Your password should not have more than twelve characters")
    }
    else {
        console.log("Congratulations your password has been validated")
    }
  })