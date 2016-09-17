var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone=
{
    title: "aticle-one.pashupati verma.",
    heading: "ARTICLE ONE",
    date: "18 sep 2016",
    content:`<p>THIS IS MY ARTICLE ONE</p>`
    
};
function createtemplete(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    
var htmltemplete=

    `<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body>
        <div  class="container">
            <div>
                <img src="http://impreza.us-themes.com/wp-content/uploads/img-6.jpg"/>
            </div>
       <div>
           <nav>
                <a href="/">Home&nbsp;&nbsp;&nbsp;&nbsp;</a>
                
                <a href="article-two">About&nbsp;&nbsp;&nbsp;&nbsp;</a>
                
                <a href="/">Login</a>
           </nav>
          
           
        </div>
        
           <hr/>
           <h1>${heading}</h1>
           <div>${data}</div>
           <div>
          ${content}
          </div>
       
       </div>
    </body>
</html>
`;
return htmlltemplete;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
  app.get('/article-one', function (req, res) {
  res.send(createtemplete(articleone));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
