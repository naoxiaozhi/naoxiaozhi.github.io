var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
	res.setHeader('content-type', 'text/html;charset=utf-8')
	res.writeHeader(200,{'Context-Type':'text/html;'})
	fs.createReadStream('理财计划书.txt').pipe(res)
}).listen(3000)