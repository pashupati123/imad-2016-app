var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool=require('pg').Pool;
var config=
{
    user: 'pashupati123',
    database: 'pashupati123',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

/*var articles=
{
'article-one':
{
    title: "aticle-one.pashupati verma.",
    heading: "ARTICLE ONE",
    date: "18 sep 2016",
    content:`<p>THIS IS MY ARTICLE ONE</p>`
    
},
'article-two':
{
    title: "aticle-one.pashupati verma.",
    heading: "ARTICLE ONE",
    date: "18 sep 2016",
    content:`<p>THIS IS MY ARTICLE ONE</p>`
    
},

'article-three':
{
    
    title: "aticle-one.pashupati verma.",
    heading: "ARTICLE ONE",
    date: "18 sep 2016",
    content:`<p>THIS IS MY ARTICLE ONE</p>`
}
};*/

function createtemplete(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
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
         <nav>
                <a style="underline=none" href="/">Home</a>
                
                <!--a href="article-two">About&nbsp;&nbsp;&nbsp;&nbsp;</a-->
                
               
           </nav>
          <hr/>
            <!--div>
                <img src="http://impreza.us-themes.com/wp-content/uploads/img-6.jpg"/>
            </div-->
       <div>
          
        </div>
        
           
           <h1>
           ${heading}
           </h1>
           <div>
           ${date.toDateString()}
           </div>
           <div>
             ${content}
               <div class="footer">
                This Button <button id="counter"> Click Me! </button> has been clicked <span id="count"> 0 </span> times.
                
            </div>
           
          </div>
      
       </div>
    </body>
</html>
`;
return htmltemplete;
}


var pool=new Pool(config);

app.get('/test-db', function(req,res)
{
    
    pool.query('SELECT * FROM test', function(err,result)
    {
        if(err)
        {
          res.status(500).send(err.toString());  
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
        
    });
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 

 app.get('/articles/:articleName', function (req, res) {
     //var articleName=req.params.articleName;
     //pool.query("SELECT * FROM article WHERE title= '" + req.params.articleName + "'",function(err,result)
      pool.query("SELECT * FROM article WHERE title= $1", [req.params.articleName],function(err,result)
     {
      if(err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          if(result.rows.length===0)
          {
           res.status(404).send('article not found');
          }
          else
          {
              var articleData=result.rows[0];
              res.send(createtemplete(articleData));
          }
      }
     });
     
  
  
});

app.get('/articles/:articleName', function (req, res) {
     //var articleName=req.params.articleName;
     //pool.query("SELECT * FROM article WHERE title= '" + req.params.articleName + "'",function(err,result)
      pool.query("SELECT * FROM articletwo WHERE title= $1", [req.params.articleName],function(err,result)
     {
      if(err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          if(result.rows.length===0)
          {
           res.status(404).send('article no found');
          }
          else
          {
              var articleData=result.rows[0];
              res.send(createtemplete(articleData));
          }
      }
     });
});


var counter=0;
app.get('/counter', function(req,res)
{
   counter=counter+1;
   res.send(counter.toString());
});


var names=[];
app.get('/submit-name', function(rq,res)
{
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
