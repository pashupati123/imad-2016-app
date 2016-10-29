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


function createtemplete(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplete=

    `<html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body background="http://www.walldevil.com/wallpapers/a24/8861-background-color-ground-back-patterns.jpg">
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
           <div class="container">
             ${content}
               <div class="footer">
                
                 <hr/>
                <input type="text" id= "name" placeholder="Type Comment"></input>
                <input type="submit" value="comment" id="submit_btn"></input>
                <ul id="namelist">
                    
                </ul>
            </div>
           
          </div>
      
       </div>
    </body>
</html>
`;
return htmltemplete;
}


function createtemplete_resume(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplete_resume=

    `<html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body background="http://www.walldevil.com/wallpapers/a24/8861-background-color-ground-back-patterns.jpg">
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
           <div class="container">
             ${content}
              
          </div>
      <hr/>
       </div>
    </body>
</html>
`;
return htmltemplete_resume;
}


function createtemplete_contact(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplete_contact=

    `<html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body background="http://www.walldevil.com/wallpapers/a24/8861-background-color-ground-back-patterns.jpg">
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
           <div class="container">
             ${content}
              <a href="https://twitter.com/PashupatiVerma" target="_blank"><img title="Follow Me On Twitter (via NiftyButtons.com)" src="http://www.niftybuttons.com/twitter/twitter_followme.png" alt="Smiley face" height="50px" width="50px"></a>

            </div>
           <hr/>
          </div>
      
       </div>
    </body>
</html>
`;
return htmltemplete_contact;
}



function createtemplete_blog(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplete_blog=

    `<html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body background="http://www.walldevil.com/wallpapers/a24/8861-background-color-ground-back-patterns.jpg">
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
           <div  class="container">
             ${content}
             <div class="footer">
                
                 <hr/>
                <input type="text" id= "name" placeholder="Type Comment"></input>
                <input type="submit" value="comment" id="submit_btn"></input>
                <ul id="namelist">
                    
                </ul>
            </div>
          </div>
<hr/>
       </div>
    </body>
</html>
`;
return htmltemplete_blog;
}

function createtemplete_aboutme(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplete_aboutme=

    `<html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body background="http://www.walldevil.com/wallpapers/a24/8861-background-color-ground-back-patterns.jpg">
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
           <div  class="container">
             ${content}
            </div>
           
          </div>
      
       </div>
    </body>
</html>
`;
return htmltemplete_aboutme;
}

function createtemplete_portfolio(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplete_portfolio=

    `<html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
      <title>
          ${title}
      </title> 
     
    </head>
    <body background="http://www.walldevil.com/wallpapers/a24/8861-background-color-ground-back-patterns.jpg">
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
           <div class="container">
             ${content}
               <div class="footer">
                
                 <hr/>
                <input type="text" id= "name" placeholder="Type Comment"></input>
                <input type="submit" value="comment" id="submit_btn"></input>
                <ul id="namelist">
                    
                </ul>
            </div>
           
          </div>
      
       </div>
    </body>
</html>
`;
return htmltemplete_portfolio;
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
 
var names=[];
app.get('/submit-name', function(rq,res)
{
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
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


app.get('/contact/:contactName', function (req, res) {
     //var articleName=req.params.articleName;
     //pool.query("SELECT * FROM article WHERE title= '" + req.params.articleName + "'",function(err,result)
      pool.query("SELECT * FROM contact WHERE title= $1", [req.params.contactName],function(err,result)
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
              var contactData=result.rows[0];
              res.send(createtemplete_contact(contactData));
          }
      }
     });
});


app.get('/resume/:resumeName', function (req, res) {
     
      pool.query("SELECT * FROM resume WHERE title= $1", [req.params.resumeName],function(err,result)
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
              var resumeData=result.rows[0];
              res.send(createtemplete_resume(resumeData));
          }
      }
     });
     
  
  
});



app.get('/blogs/:blogName', function (req, res) {
     //var articleName=req.params.articleName;
     //pool.query("SELECT * FROM blog WHERE title= '" + req.params.articleName + "'",function(err,result)
      pool.query("SELECT * FROM blog WHERE title= $1", [req.params.blogName],function(err,result)
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
              var blogData=result.rows[0];
              res.send(createtemplete_blog(blogData));
          }
      }
     });
});

 app.get('/abouts/:aboutme', function (req, res) {
     //var articleName=req.params.articleName;
     //pool.query("SELECT * FROM article WHERE title= '" + req.params.articleName + "'",function(err,result)
      pool.query("SELECT * FROM about_me WHERE title= $1", [req.params.aboutme],function(err,result)
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
              var aboutmeData=result.rows[0];
              res.send(createtemplete_aboutme(aboutmeData));
          }
      }
     });
});

 app.get('/portfolio/:portfolioName', function (req, res) {
     //var articleName=req.params.articleName;
     //pool.query("SELECT * FROM portfolio WHERE title= '" + req.params.articleName + "'",function(err,result)
      pool.query("SELECT * FROM portfolio WHERE title= $1", [req.params.portfolioName],function(err,result)
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
              var portfolioData=result.rows[0];
              res.send(createtemplete_portfolio(portfolioData));
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
