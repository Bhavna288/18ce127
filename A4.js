function validateForm(){
  document.getElementById("errFname").style.display="none";
  document.getElementById("errLname").style.display="none";
  document.getElementById("errEmail").style.display="none";
  document.getElementById("errUname").style.display="none";
  document.getElementById("errPass").style.display="none";
  document.getElementById("errPasslen").style.display="none";
  document.getElementById("errPassCh").style.display="none";
  document.getElementById("errUnlen").style.display="none";
  document.getElementById("errUnCh").style.display="none";
}

function emptyf(){
  if(document.getElementById("fname").value.length == 0){
    document.getElementById("errFname").style.display="block";
    document.getElementById("fname").focus;
    document.getElementById("fname").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errFname").style.display="none";
    document.getElementById("lname").focus;
    document.getElementById("fname").style.borderBottomColor="gray";
  }
}

function emptyl(){
  if(document.getElementById("lname").value.length == 0){
    document.getElementById("errLname").style.display="block";
    document.getElementById("lname").focus;
    document.getElementById("lname").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errLname").style.display="none";
    document.getElementById("email").focus;
    document.getElementById("lname").style.borderBottomColor="gray";
  }
}

function emptye(){
  if(document.getElementById("email").value.length == 0){
    document.getElementById("errEmail").style.display="block";
    document.getElementById("email").focus;
    document.getElementById("email").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errEmail").style.display="none";
    document.getElementById("uname").focus;
    document.getElementById("email").style.borderBottomColor="gray";
  }
}

function validatePass(){
  var pass = document.getElementById("pass").value;
  var letters = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  
  if(pass.length == 0){
    document.getElementById("errPass").style.display="block";
    document.getElementById("pass").focus;
    document.getElementById("pass").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errPass").style.display="none";
    document.getElementById("terms").focus;
    document.getElementById("pass").style.borderBottomColor="gray";
  }
  if(pass.length <6 || pass.length >14){
    document.getElementById("errPasslen").style.display="block";
    document.getElementById("pass").focus;
    document.getElementById("pass").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errPasslen").style.display="none";
    document.getElementById("terms").focus;
    document.getElementById("pass").style.borderBottomColor="gray";
  }
  if(!pass.match(letters)){
    document.getElementById("errPassCh").style.display="block";
    document.getElementById("pass").focus;
    document.getElementById("pass").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errPassCh").style.display="none";
    document.getElementById("terms").focus;
    document.getElementById("pass").style.borderBottomColor="gray";
  }
}

function validateUname(){
  var uname = document.getElementById("uname").value;
  var letters = /^[0-9a-zA-Z]+$/;
  
  if(uname.length == 0){
    document.getElementById("errUname").style.display="block";
    document.getElementById("uname").focus;
    document.getElementById("uname").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errUname").style.display="none";
    document.getElementById("pass").focus;
    document.getElementById("uname").style.borderBottomColor="gray";
  }
  if(uname.length <4 || uname.length >18){
    document.getElementById("errUnlen").style.display="block";
    document.getElementById("uname").focus;
    document.getElementById("uname").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errUnlen").style.display="none";
    document.getElementById("pass").focus;
    document.getElementById("uname").style.borderBottomColor="gray";
  }
  if(!uname.match(letters)){
    document.getElementById("errUnCh").style.display="block";
    document.getElementById("uname").focus;
    document.getElementById("uname").style.borderBottomColor="red";
  }
  else{
    document.getElementById("errUnCh").style.display="none";
    document.getElementById("pass").focus;
    document.getElementById("uname").style.borderBottomColor="gray";
  }
}