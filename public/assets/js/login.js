

$("#signIn").on('click', function(event) {
    event.preventDefault();

    var email = $('#signInEmail').val().trim()
    var password = $('#signInPassword').val().trim()
    var userInfo = {
        email: email,
        password: password
    }
    console.log(userInfo)
    $.post("/api/login", userInfo).then(function (response) {
        console.log(response)
    })
})







//create new account
$("#submitBtn").on('click', function(event) {
    event.preventDefault();
    var name = $('#createName').val().trim()
    var userName = $('#createUserName').val().trim()
    var email = $('#createEmail').val().trim()
    var password = $('#createPassword').val().trim()
  
    var newUser = {
      name: name, 
      username: userName,
      email: email,
      password: password
    }
    console.log(newUser)
    $.post('/api/signUp', newUser).then(function (response) {
      console.log(response)
    })
  })