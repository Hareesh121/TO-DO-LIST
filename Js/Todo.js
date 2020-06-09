$(document).ready(function(){
       $.get("https://jsonplaceholder.typicode.com/todos",function(response,status){
         if(status=="success") 
          {
            var out = "";
            for (var i = 0; i < response.length; i++)
             {
                out += "<tr><td>" + 
                + response[i].id+ "</td><td>" 
                + response[i].title + "</td><td>" 
                + response[i].completed + "</td><td>" ;
           
                if(response[i].completed==true) 
                          {  
                               out +="<input type='checkbox' checked disabled></td></tr>";  
                            }
                            else
                            {
                                out +="<input type='checkbox' class='Box' onchange='tasks()'></td></tr>"; 
                            } 
           
             }
            $("#format").append(out);
          }               
          if(status=="error")   
          console.log("error");
        })
    })

function tasks()
{
    var promise = new Promise(function(resolve,reject){
        
        var count=0;
    var todo= document.getElementsByClassName("Box")
    for(let i=0;i<todo.length;i++) 
    {
         if(todo[i].checked)
            {
                console.log(todo[i]);
               count +=1;
            }
    }  
    if(count==5)
    {
        resolve("Congrats!!! 5 Tasks have been successfully completed");
    }
    else if(count>5)
    {
        reject("Cannot check more than 5 !!");
    }
   });

   promise.
   then(function(s){
       alert(s)
   })
   .catch(function(e){
    alert(e)
})

}


