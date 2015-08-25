var http = require('http');
var serv = http.createServer(function(req, res){
	console.log('请求进入');
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<marquee>Smashing Node!</marquee>');
});
serv.listen(300);
console.log('server已经启动');