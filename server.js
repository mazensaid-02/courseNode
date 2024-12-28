const http = require("http");

const server = http.createServer((req, res) => {
 
  if(req.url=='/home'){
        res.statusCode = 200;

    res.write("welcome from home")
  }else{
    res.statusCode=404
    res.write("not found")
  }

  res.end();
});

server.listen(3000, () => {
  console.log("server work");
});
