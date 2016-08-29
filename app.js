'use strict'
var Koa = require('koa');
var sha1 = require('sha1');
var config={
	wechat:{
		appID:'',
		appSecret:'',
		token:''
	}
}
var app=new Koa()
app.use(function *(next){
	console.log(this.query);
})
app.listen(1234)
console.log('Listeneing:1234')