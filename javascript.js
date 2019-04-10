function ValidateEmail()
{
	var inputText=document.getElementById('email1');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.getElementById("demo").innerHTML="";


}
else
{

document.getElementById("demo").innerHTML="invalid email";
document.form1.text1.focus();
}
}


function ValidatePassword()
{
var inputText=document.getElementById('password1');
var passwordformat = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
if(inputText.value.match(passwordformat))
{
document.getElementById("demo1").innerHTML="";


}
else
{

document.getElementById("demo1").innerHTML="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";

}
}