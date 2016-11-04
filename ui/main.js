function loadLoginForm () {
    var loginHtml = `
        <h3>Login/Register to unlock awesome features</h3>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" />
        <br/><br/>
        <input type="submit" id="login_btn" value="Login" />
        <input type="submit" id="register_btn" value="Register" />
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
}


var button=document.getElementById('counter');

button.onclick=function()
{
  var request=new XMLHttpRequest();
  
 request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE)
      {
         if(request.status===200)
         {
             var counter=request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
             
         }
      }
  };
  
  request.open('GET','http://pashupati123.imad.hasura-app.io/counter',true);
  request.send(null);
  
  
};


var submit=document.getElementById('submit_btn');
submit.onclick = function()
{
    var request=new XMLHttpRequest();
  
 request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE)
      {
         if(request.status===200)
         {
              var names=request.responseText;
              names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
         }
      }
  };
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  request.open('GET','http://pashupati123.imad.hasura-app.io/submit-name='+name,true);
  request.send(null);
};


document.getElementById("link").style.width=document.getElementById("img").width+"px";




