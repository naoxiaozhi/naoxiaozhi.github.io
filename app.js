'use strict'
var Koa = require('koa');
var path=require('path');
var app=new Koa();
var we=require('./wechat/g');
var util=require('./libs/util');
var wechat_file=path.join(__dirname,'./config/wechat.txt')
var config={
	wechat:{
		appID:'',
		appSecret:'',
		token:'',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken:function(data){
			data=JSON.stringify(data)
			return util.writeFileAsync(wechat_file,data)
		}
	}
}
app.use(we(config.wechat));
app.listen(80);
console.log('Listeneing:80');
