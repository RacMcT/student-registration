// alert("Welcome Eric Idle!
// Your registration is complete.
// Your temporary password is: Eric\*1934");

// bug- need to push the form value into the alert in a way the DOM recognizes

function submitAlert (){
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let birth = document.getElementById("birth").value;
  alert("Welcome " + firstName + " "+ lastName + "Your registration is complete\n Your temporary password is: " + fname + "*" + birth);
  console.log(firstName, lastName, birth)
}

