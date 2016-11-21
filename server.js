var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

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


app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));




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
             <hr/>
             <div class="center">
    <p>
         <a href="/"><b><font color="white" size="5">Home</font></b></a>&nbsp;&nbsp;
   <a href="https://www.facebook.com/pashupati.verma.5" target="_blank"><b><font color="white" size="5">Facebook</font></b></a>&nbsp;&nbsp;
     <a href="https://twitter.com/pashupativerma" target="_blank"><b><font color="white" size="5">Twitter</font></b></a>&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/pashupatinathverma"><b><font color="white" size="5">LinkedIn</font></b></a>&nbsp;&nbsp;
        <a href="https://plus.google.com/117938751194236754900"><b><font color="white" size="5">Google+</font></b></a>&nbsp;&nbsp;
        <a href="https://github.com/pashupati123"><b><font color="white" size="5">GitHub</font></b></a>
   
   
    </p>
    <p>
    Home
    </p>
</div>

               
           
          </div>
      <hr/>
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
              <hr/>
              <div class="center">
    <p>
          <a href="/"><b><font color="white" size="5">Home</font></b></a>&nbsp;&nbsp;
   <a href="https://www.facebook.com/pashupati.verma.5" target="_blank"><b><font color="white" size="5">Facebook</font></b></a>&nbsp;&nbsp;
     <a href="https://twitter.com/pashupativerma" target="_blank"><b><font color="white" size="5">Twitter</font></b></a>&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/pashupatinathverma"><b><font color="white" size="5">LinkedIn</font></b></a>&nbsp;&nbsp;
        <a href="https://plus.google.com/117938751194236754900"><b><font color="white" size="5">Google+</font></b></a>&nbsp;&nbsp;
        <a href="https://github.com/pashupati123"><b><font color="white" size="5">GitHub</font></b></a>
   
   
    </p>
</div>

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
             <hr/>
             <div class="center">
    <p>
          <a href="/"><b><font color="white" size="5">Home</font></b></a>&nbsp;&nbsp;
   <a href="https://www.facebook.com/pashupati.verma.5" target="_blank"><b><font color="white" size="5">Facebook</font></b></a>&nbsp;&nbsp;
     <a href="https://twitter.com/pashupativerma" target="_blank"><b><font color="white" size="5">Twitter</font></b></a>&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/pashupatinathverma"><b><font color="white" size="5">LinkedIn</font></b></a>&nbsp;&nbsp;
        <a href="https://plus.google.com/117938751194236754900"><b><font color="white" size="5">Google+</font></b></a>&nbsp;&nbsp;
        <a href="https://github.com/pashupati123"><b><font color="white" size="5">GitHub</font></b></a>
   
   
    </p>
</div>

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
             <hr/>
             <div class="center">
    <p>
          <a href="/"><b><font color="white" size="5">Home</font></b></a>&nbsp;&nbsp;
   <a href="https://www.facebook.com/pashupati.verma.5" target="_blank"><b><font color="white" size="5">Facebook</font></b></a>&nbsp;&nbsp;
     <a href="https://twitter.com/pashupativerma" target="_blank"><b><font color="white" size="5">Twitter</font></b></a>&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/pashupatinathverma"><b><font color="white" size="5">LinkedIn</font></b></a>&nbsp;&nbsp;
        <a href="https://plus.google.com/117938751194236754900"><b><font color="white" size="5">Google+</font></b></a>&nbsp;&nbsp;
        <a href="https://github.com/pashupati123"><b><font color="white" size="5">GitHub</font></b></a>
   
   
    </p>
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
             <div class="center">
    <p>
          <a href="/"><b><font color="white" size="5">Home</font></b></a>&nbsp;&nbsp;
   <a href="https://www.facebook.com/pashupati.verma.5" target="_blank"><b><font color="white" size="5">Facebook</font></b></a>&nbsp;&nbsp;
     <a href="https://twitter.com/pashupativerma" target="_blank"><b><font color="white" size="5">Twitter</font></b></a>&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/pashupatinathverma"><b><font color="white" size="5">LinkedIn</font></b></a>&nbsp;&nbsp;
        <a href="https://plus.google.com/117938751194236754900"><b><font color="white" size="5">Google+</font></b></a>&nbsp;&nbsp;
        <a href="https://github.com/pashupati123"><b><font color="white" size="5">GitHub</font></b></a>
   
    </p>
</div>

          </div>
      <hr/>
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
              
           
            
            
             <div class="center">
    <p>
          <a href="/"><b><font color="white" size="5">Home</font></b></a>&nbsp;&nbsp;
   <a href="https://www.facebook.com/pashupati.verma.5" target="_blank"><b><font color="white" size="5">Facebook</font></b></a>&nbsp;&nbsp;
     <a href="https://twitter.com/pashupativerma" target="_blank"><b><font color="white" size="5">Twitter</font></b></a>&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/pashupatinathverma"><b><font color="white" size="5">LinkedIn</font></b></a>&nbsp;&nbsp;
        <a href="https://plus.google.com/117938751194236754900"><b><font color="white" size="5">Google+</font></b></a>&nbsp;&nbsp;
        <a href="https://github.com/pashupati123"><b><font color="white" size="5">GitHub</font></b></a>
   
    </p>
</div>

        
          </div>
      <hr/>
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
 


function hash (input, salt) {
    // How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}


app.get('/hash/:input', function(req, res) {
   var hashedString = hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
});

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "pashupati", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});

app.post('/login', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                // Set the session
                req.session.auth = {userId: result.rows[0].id};
                // set cookie with a session id
                // internally, on the server side, it maps the session id to an object
                // { auth: {userId }}
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
   });
});




app.get('/check-login', function (req, res) {
   if (req.session && req.session.auth && req.session.auth.userId) {
       // Load the user object
       pool.query('SELECT * FROM "user" WHERE id = $1', [req.session.auth.userId], function (err, result) {
           if (err) {
              res.status(500).send(err.toString());
           } else {
              res.send(result.rows[0].username);    
           }
       });
   } else {
       res.status(400).send('You are not logged in');
   }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');
});



app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id = comment.article_id AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.post('/submit-comment/:articleName', function (req, res) {
   // Check if the user is logged in
    if (req.session && req.session.auth && req.session.auth.userId) {
        // First check if the article exists and get the article-id
        pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                if (result.rows.length === 0) {
                    res.status(400).send('Article not found');
                } else {
                    var articleId = result.rows[0].id;
                    // Now insert the right comment for this article
                    pool.query(
                        "INSERT INTO comment (comment, article_id, user_id) VALUES ($1, $2, $3)",
                        [req.body.comment, articleId, req.session.auth.userId],
                        function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
                        });
                }
            }
       });     
    } else {
        res.status(403).send('Only logged in users can comment');
    }
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
     //varcontactName=req.params.contactName;
     //pool.query("SELECT * FROM contact WHERE title= '" + req.params.contactName + "'",function(err,result)
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
     //var blogName=req.params.blogName;
     //pool.query("SELECT * FROM blog WHERE title= '" + req.params.blogName + "'",function(err,result)
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
     //var aboutme=req.params.aboutme;
     //pool.query("SELECT * FROM about WHERE title= '" + req.params.aboutme+ "'",function(err,result)
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
     //var articleName=req.params.portfolioName;
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




/*var counter=0;
app.get('/counter', function(req,res)
{
   counter=counter+1;
   res.send(counter.toString());
});
*/


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
