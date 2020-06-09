function validate(callback)
{

let user=document.getElementById("user")
let pwd = document.getElementById("pwd")

if(pwd.value==="12345" && user.value=== "admin")
{   
callback();
alert("Login successful")
return true;

}
else if( user.value=="" || pwd.value=="")
{
 alert("All fields are required")

 return false;
}


else
{
    alert("The input credentials are wrong")
    return false;
}
}


function main()
{
    
    window.location.href='Home1.html';
}