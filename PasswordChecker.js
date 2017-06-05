// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"

// --Parameters--
var userId = "Amy"
var password = "jstreet$"

password !== userId
userId.length >= 6
password.length >= 6
!userId.includes("!")
!userId.includes("#")
!userId.includes("$")
password.includes("!") || password.includes("#") || password.includes("$")
password !== "password"

// --Functions-- check user ID
function checkUserId(user) {
  return user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")
}

// --Functions-- check password
function checkPassword(pw) {
  var password = pw
  return (password.includes("!") || password.includes("#") || password.includes("$")) && (password !== "password") && (password.length >= 6)
}

// --Function to compare--
function compare(id, pword) {
return id !== pword
}

// --Login--
function login(id, pw) {
  return checkUserId(id) && checkPassword(pw) && compare(id, pw)
  }

// --Main Check--
function main() {
var userIdent = prompt("Whats your user id?")
var userPword = prompt("Whats your password?")
alert("Your Login is Valid " + login(userIdent, userPword))
}
