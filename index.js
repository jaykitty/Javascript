// Likes & Dislikes For Youtube //
var like=0;
var dislike=0;

function likes(){
    like=like+1;
    document.getElementById('l').innerHTML=like;
}

function dislikes() {
    dislike = dislike+1;
    document.getElementById('d').innerHTML = dislike;
}

//Name click Alert//
function displayMessage(firstName) {
    alert("Hello " + firstName + ",Hope You like java script");
}

//Name With Iamge//
function login(){
    event.preventDefault();

 var users=['Jay','kiran','anil'];

  var username=document.getElementById('username').value;

  if(users.includes(username)){

    document.getElementById('userprofile').src= 'images'+'/'+username+"."+'jpg';             

  }


}

//Enter HAll Ticket Number//

function results(){
    event.preventDefault();
    var hno=document.getElementById('htno').value;
      
    if (hno=="Jay123") {
        alert ("pass");
    }
        
        else {
            alert ("Fail");
        }
    }

    // Colour change onclick//
    function colorchange(){

        document.getElementById('cl').style.color = "red";

    }


    //<!--password confirmation-->
    function  Validate(){

        var password=document.getElementById('txtpassword').value;
        var confirmpassword=document.getElementById('txtconfirmpassword').value;

        if (password != confirmpassword) {
            alert ("Password does not Match");
            return false;
        }
       return true;
    
    }