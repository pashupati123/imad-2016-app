var button=document.getElementByid("counter");
var counter=0;

button.onclick=function()
{
  counter=counter+1;
  var span=document.getElementByid("count");
  span.innerHtml=counter.toString();
  
};
