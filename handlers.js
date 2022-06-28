function handleSignIn(){
   document.getElementById("cartObjects").style.display = "none";
   document.getElementById("cartTotal").style.display = "none";
   document.getElementById("copyRightInfo").style.display = "block";
    document.getElementById("content").style.display = "block";
    fetch('./html/login.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); 
  }

  function handleSignUp(){
    document.getElementById("cartObjects").style.display = "none";
    document.getElementById("cartTotal").style.display = "none";
    document.getElementById("copyRightInfo").style.display = "block";
    document.getElementById("content").style.display = "block";
    fetch('./html/signup.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); 
  }

  function handleHome(){
    document.getElementById("cartObjects").style.display = "none";
    document.getElementById("cartTotal").style.display = "none";
    document.getElementById("copyRightInfo").style.display = "block";
    document.getElementById("content").style.display = "block";
    fetch('./html/home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text); 
  }
  function handleCart(){
    let isCartEmpty = false;
    if(document.getElementById("total1").innerHTML=='Rs.0'){
      isCartEmpty = true;
    }
    if(JSON.parse(sessionStorage.getItem("cartItems")) && !isCartEmpty){
      document.getElementById("cartObjects").style.display = "block";
      document.getElementById("cartTotal").style.display = "block";
      document.getElementById("copyRightInfo").style.display = "none";
      document.getElementById("content").style.display = "none";
      fetch('./html/cart.html')
      .then(response=> response.text())
      .then(text=> document.getElementById('content').innerHTML = JSON.parse(sessionStorage.getItem("cartItems") || text)); 
    }
    else{
      document.getElementById("cartTotal").style.display = "none";
      fetch('./html/cart.html')
      .then(response=> response.text())
      .then(text=> document.getElementById('content').innerHTML = text); 
    }
  }
  
