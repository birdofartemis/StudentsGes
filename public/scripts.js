function logIn () {
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    if(email && password) {
        processUser()
    }

    else{
        alert('Must fill all fields, correctely!');
    }
  }

  function processUser(){
    fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(() => {
        alert('Username or password is wrong!')
    });
}