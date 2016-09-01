var fs=require('fs');
var readStream=fs.createReadStream("理财计划书.txt");
var writeStream=fs.createWriteStream('plan.txt');
readStream.on('data',function(chunk){
	if(writeStream.write(chunk)===false){
		readStream.pause();
	}
})
.on('end',function(){//sending end
	writeStream.end()
})
writeStream.on('drain',function(){
	readStream.resume()
})