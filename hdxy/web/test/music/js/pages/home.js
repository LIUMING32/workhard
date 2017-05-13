/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-26 09:33:30
 * @version $Id$
 */

$(function(){
	var ShareTip = function(){ };
	//分享到腾讯微博  
	ShareTip.prototype.sharetoqq=function(content,url,picurl)  
	{  
	 var shareqqstring='http://v.t.qq.com/share/share.php?title='+content+'&url='+url+'&pic='+picurl;  
	 window.open(shareqqstring,'newwindow','height=100,width=100,top=100,left=100');  
	}  
	//分享到新浪微博  
	ShareTip.prototype.sharetosina=function(title,url,picurl)  
	{  
	 var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;  
	 window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');  
	}  
	//分享到QQ空间  
	ShareTip.prototype.sharetoqqzone=function(title,url,picurl)  
	{  
	 var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;  
	 window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');  
	}
	var sina = $('.bds_tsina');
	sina.click(function(event) {
		var share1=new ShareTip();  
			share1.sharetosina("电影春节档票房回暖,有望带动电影市场温和复苏","http://www.haidaxingyi.com","");
	});
	var qzone = $('.bds_tqq');
	qzone.click(function(event) {
		var share1=new ShareTip();  
			share1.sharetoqqzone("电影春节档票房回暖,有望带动电影市场温和复苏","http://www.haidaxingyi.com","");
	});
	var weixin = $('#bds_weixin'); 
	weixin.click(function(event) {
		$("#content").css("display","block");
	});
	


	
})
function yiru(id,src){
	$(id).attr('src', src); 
}

function yichu(id2,src2){
	$(id2).attr('src', src2); 
}
function pageScroll() { 
	 //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
} 
function WeiXinShareBtn() { 
 	if (typeof WeixinJSBridge == "undefined") { 
	 alert("请关注海大星艺公众号 "); 
	} else { 
	 	WeixinJSBridge.invoke('shareTimeline', { 
			 "title": "海大星艺", 
			 "link": "http://www.haidaxingyi.com", 
			 "desc": "关注海大星艺", 
			 "img_url": "http://www.haidaxingyi.com/……/icon.jpg" 
		}); 
	} 
}

var audio;
function player(id,btn){
	var idT = id;
	audio = null;
	audio = document.getElementById(idT);
	//防止冒泡
    event.stopPropagation();
    if(audio.paused) //如果当前是暂停状态
    {
        $(btn).css("background","#987351 url(css/images/music/zanting1.png) no-repeat center center");
        audio.play();//播放
        return;
    }
    //当前是播放状态
    $(btn).css("background","url(css/images/music/bofang1.png) no-repeat center center");
    audio.pause(); //暂停
 }



 function load1(){
 	console.log("下载");
 	window.location.href="bahe.mp3";
 }
