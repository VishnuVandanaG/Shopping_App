function handleSignIn(){
    fetch('./html/login.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); // Hnadling
  }

  function handleSignUp(){
    fetch('./html/signup.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); // Hnadling
  }

  function handleHome(){
    fetch('./html/home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); // Hnadling
  }
  function handleCart(){
    fetch('./html/cart.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); // Hnadling
  }
  
