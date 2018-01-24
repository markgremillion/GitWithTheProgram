
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