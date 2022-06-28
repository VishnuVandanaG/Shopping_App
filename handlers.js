function handleSignIn(){
   document.getElementById("copyRightInfo").style.display = "block";
    document.getElementById("content").style.display = "block";
    fetch('./html/login.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); 
  }

  function handleSignUp(){
    document.getElementById("copyRightInfo").style.display = "block";
    document.getElementById("content").style.display = "block";
    fetch('./html/signup.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); 
  }

  function handleHome(){
    document.getElementById("copyRightInfo").style.display = "block";
    document.getElementById("content").style.display = "block";
    fetch('./html/home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); 
  }
  function handleCart(){
    if(JSON.parse(localStorage.getItem("cartItems"))){
      document.getElementById("copyRightInfo").style.display = "none";
      document.getElementById("content").style.display = "none";
      fetch('./html/cart.html')
      .then(response=> response.text())
      .then(text=> document.getElementById('content').innerHTML = JSON.parse(localStorage.getItem("cartItems") || text)); 
    }
    else{
      fetch('./html/cart.html')
      .then(response=> response.text())
      .then(text=> document.getElementById('content').innerHTML = text); 
    }
  }
  
