function validfirstname()
{
  var fname= document.getElementById("firstname").value;
  var re1 = /^[a-zA-z\s\-\']{2,15}$/;
  if(re1.test(fname))
  {
    document.getElementById("firstnameprompt").style.color="green";
    document.getElementById("firstnameprompt").innerHTML="<strong> VALID </strong>";
    return true;
  }
  else {
    document.getElementById("firstnameprompt").style.color="red";
    document.getElementById("firstnameprompt").innerHTML="<strong> ENTER 2-15 CHARACTERS</strong>";
    return false;
  }
}
function validlastname()
{
  var lname= document.getElementById("lastname").value;
  var re2 = /^[a-zA-z\s\'\-]{2,25}$/;
  if(re2.test(lname))
  {
    document.getElementById("lastnameprompt").style.color="green";
    document.getElementById("lastnameprompt").innerHTML="<strong> VALID </strong>";
    return true;
  }
  else {
    document.getElementById("lastnameprompt").style.color="red";
    document.getElementById("lastnameprompt").innerHTML="<strong> ENTER 2-25 CHARACTERS</strong>";
    return false;
  }
}
function validphone()
{
  var pname= document.getElementById("phone").value;
  var re3 = /^\d{10}$/;
  if(re3.test(pname))
  {
    document.getElementById("phoneprompt").style.color="green";
    document.getElementById("phoneprompt").innerHTML="<strong> VALID </strong>";
    return true;
  }
  else {
    document.getElementById("phoneprompt").style.color="red";
    document.getElementById("phoneprompt").innerHTML="<strong> USE xxxxxxxxxx</strong>";
    return false;
  }
}
function calcorder()
{

  var r = document.getElementsByName('vehicle').value;
if(r =='1'){
    price=10000;
}
else if(r =='2'){
    price=15000;
}



  document.getElementById("orderconfirm").innerHTML="<h2>ORDER SUMMARY :</h2>";
  document.getElementById("orderconfirm").innerHTML ="<p>"+ username.toUpperCase() + "</br>"+phone+"</p>";
  document.getElementById("orderconfirm").innerHTML="<p> TOTAL COST: $"+price*days+"</p>" ;
}
function fn1(){
  var firstname=document.getElementById("firstname").value;
  var lastname=document.getElementById("lastname").value;
  var username=firstname + " "+ lastname;
  var phone=document.getElementById("phone").value;
  var days=document.getElementById("days").value;
  var price;
   var rd1= document.getElementById("radio_1");
   var rd2= document.getElementById("radio_2");
   var rd3= document.getElementById("radio_3");
   var rd4= document.getElementById("radio_4");
   if(rd1.checked==true)
   {
     alert("ORDER SUMMARY :"+"\n"+username+"\n"+phone+"\n"+"Total Price: $ "+days*2000);

   }
   else if(rd2.checked==true)
   {
     alert("ORDER SUMMARY :"+"\n"+username+"\n"+phone+"\n"+"Total Price: $ "+days*5000);

   }
   else if(rd3.checked==true)
   {
     alert("ORDER SUMMARY :"+"\n"+username+"\n"+phone+"\n"+"Total Price: $ "+days*7000);

   }
   else if(rd4.checked==true)
   {
     alert("ORDER SUMMARY :"+"\n"+username+"\n"+phone+"\n"+"Total Price: $ "+days*10000);

   }
   else{
     alert("NO MODEL SELECTED");
   }

}
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
