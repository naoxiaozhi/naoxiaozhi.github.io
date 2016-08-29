'use strict'
var Koa = require('koa');
var sha1 = require('sha1');
var config={
	wechat:{
		appID:'wxa7407da346a4f7c8',
		appSecret:'fb3c18b50ab33c1e3e64a19bac7c5963',
		token:'abc5218899'
	}
}
var app=new Koa()
app.use(function *(next){
	console.log(this.query);
	var token=config.wechat.token
	var signature= this.query.signature
	var nonce=this.query.nonce
	var timestamp=this.query.timestamp
	var echostr=this.query.echostr
	var str=[token,timestamp,nonce].sort().join('')
	var sha=sha1(str)
	if(sha===signature){
		this.body=echostr+''
	}else{
		this.body='wrong'
	}
})
app.listen(1234)
console.log('Listeneing:1234')