// LOADING -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
$(window).on('load pageshow', function(){
  $('body').addClass('active');
  $('.fade a').on('click', function(){
    var url= $(this).attr('href');

    $('body').removeClass('active');
    setTimeout(function(){
      location.href = url;
    }, 400);

    return false;
  });
  $('a.fade').on('click', function(){
    var url= $(this).attr('href');

    $('body').removeClass('active');
    setTimeout(function(){
      location.href = url;
    }, 400);

    return false;
  });
});


$(function() {
	
	// SP MENU -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

	$('#btn_menu').click(function(){
    $(this).toggleClass('active');
    $('.left').toggleClass('active');
	});
	
	$('.nav_scr').click(function(){
    $('#btn_menu').removeClass('active');
    $('.left').removeClass('active');
	});
	
	$('#btn_index_readmore').click(function(){
    $(this).toggleClass('close');
    $('#index_wrap').toggleClass('close');
	});
	
	$('#btn_block_readmore').click(function(){
    $(this).toggleClass('close');
    $('#readmore_wrap').toggleClass('close');
	});
	
	$('#btn_buy_menu').click(function(){
    $('#buy_menu_sp').toggleClass('active');
	});
	
	$('#btn_buy_menu_close').click(function(){
    $('#buy_menu_sp').toggleClass('active');
	});
	
	
	// PAGE TOP -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

	var showFlag = false;
	var topBtn = $('#pagetop');
  var hSize = $(window).height();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.addClass('active'); 
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.removeClass('active');
			}
		}
	});
	
	smoothScroll.init() ;
		
});




$(window).load(function() {
	//画面高さ取得
	h = $('#index_wrap p').height();
	$('#index_wrap').css("height", h + 400 + "px");
	$('#index_wrap').addClass('close');
});
$(window).resize(function() {
	//画面リサイズ時の高さ取得
	h = $('#index_wrap p').height();
	$('#index_wrap').css("height", h + 400 + "px");
});

$(window).load(function() {
	//画面高さ取得
	h = $('#readmore_wrap dl').height();
	$('#readmore_wrap').css("height", h + 90 + "px");
	$('#readmore_wrap').addClass('close');
});
$(window).resize(function() {
	//画面リサイズ時の高さ取得
	h = $('#readmore_wrap dl').height();
	$('#readmore_wrap').css("height", h + 90 + "px");
});



//VIEWPORT --------------------
$(window).on("resize orientationchange", function (e) {
	var wsw = window.screen.width;
	if (wsw <= 639) {
		$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no");
	} else if (wsw < 1023) {
		$("meta[name='viewport']").attr("content", "width=1024px,user-scalable=0,shrink-to-fit=no");
	} else {
		$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no");
	}
}).trigger("resize");


/*!
 * smooth-scroll v7.1.1: Animate scrolling to anchor links
 * (c) 2015 Chris Ferdinandi
 * MIT License
 * https://github.com/cferdinandi/smooth-scroll
 */
(function(a,b){if(typeof define==="function"&&define.amd){define([],b(a))}else{if(typeof exports==="object"){module.exports=b(a)}else{a.smoothScroll=b(a)}}})(typeof global!=="undefined"?global:this.window||this.global,function(l){var j={};var q="querySelector" in document&&"addEventListener" in l;var s,b,t,n;var f={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:true,callback:function(){}};var r=function(){var u={};var v=false;var w=0;var x=arguments.length;if(Object.prototype.toString.call(arguments[0])==="[object Boolean]"){v=arguments[0];w++}var z=function(A){for(var B in A){if(Object.prototype.hasOwnProperty.call(A,B)){if(v&&Object.prototype.toString.call(A[B])==="[object Object]"){u[B]=r(true,u[B],A[B])}else{u[B]=A[B]}}}};for(;w<x;w++){var y=arguments[w];z(y)}return u};var g=function(u){return Math.max(u.scrollHeight,u.offsetHeight,u.clientHeight)};var m=function(y,u){var x=u.charAt(0);var v="classList" in document.documentElement;var w,z;if(x==="["){u=u.substr(1,u.length-2);w=u.split("=");if(w.length>1){z=true;w[1]=w[1].replace(/"/g,"").replace(/'/g,"")}}for(;y&&y!==document;y=y.parentNode){if(x==="."){if(v){if(y.classList.contains(u.substr(1))){return y}}else{if(new RegExp("(^|\\s)"+u.substr(1)+"(\\s|$)").test(y.className)){return y}}}if(x==="#"){if(y.id===u.substr(1)){return y}}if(x==="["){if(y.hasAttribute(w[0])){if(z){if(y.getAttribute(w[0])===w[1]){return y}}else{return y}}}if(y.tagName.toLowerCase()===u){return y}}return null};var i=function(A){var x=String(A);var z=x.length;var w=-1;var y;var u="";var v=x.charCodeAt(0);while(++w<z){y=x.charCodeAt(w);if(y===0){throw new InvalidCharacterError("Invalid character: the input contains U+0000.")}if((y>=1&&y<=31)||y==127||(w===0&&y>=48&&y<=57)||(w===1&&y>=48&&y<=57&&v===45)){u+="\\"+y.toString(16)+" ";continue}if(y>=128||y===45||y===95||y>=48&&y<=57||y>=65&&y<=90||y>=97&&y<=122){u+=x.charAt(w);continue}u+="\\"+x.charAt(w)}return u};var e=function(u,w){var v;if(u==="easeInQuad"){v=w*w}if(u==="easeOutQuad"){v=w*(2-w)}if(u==="easeInOutQuad"){v=w<0.5?2*w*w:-1+(4-2*w)*w}if(u==="easeInCubic"){v=w*w*w}if(u==="easeOutCubic"){v=(--w)*w*w+1}if(u==="easeInOutCubic"){v=w<0.5?4*w*w*w:(w-1)*(2*w-2)*(2*w-2)+1}if(u==="easeInQuart"){v=w*w*w*w}if(u==="easeOutQuart"){v=1-(--w)*w*w*w}if(u==="easeInOutQuart"){v=w<0.5?8*w*w*w*w:1-8*(--w)*w*w*w}if(u==="easeInQuint"){v=w*w*w*w*w}if(u==="easeOutQuint"){v=1+(--w)*w*w*w*w}if(u==="easeInOutQuint"){v=w<0.5?16*w*w*w*w*w:1+16*(--w)*w*w*w*w}return v||w};var p=function(w,v,x){var u=0;if(w.offsetParent){do{u+=w.offsetTop;w=w.offsetParent}while(w)}u=u-v-x;return u>=0?u:0};var a=function(){return Math.max(l.document.body.scrollHeight,l.document.documentElement.scrollHeight,l.document.body.offsetHeight,l.document.documentElement.offsetHeight,l.document.body.clientHeight,l.document.documentElement.clientHeight)};var h=function(u){return !u||!(typeof JSON==="object"&&typeof JSON.parse==="function")?{}:JSON.parse(u)};var c=function(v,u){if(l.history.pushState&&(u||u==="true")&&l.location.protocol!=="file:"){l.history.pushState(null,null,[l.location.protocol,"//",l.location.host,l.location.pathname,l.location.search,v].join(""))}};var k=function(u){return u===null?0:(g(u)+u.offsetTop)};j.animateScroll=function(A,y,K){var G=h(A?A.getAttribute("data-options"):null);var v=r(v||f,K||{},G);y="#"+i(y.substr(1));var H=y==="#"?l.document.documentElement:l.document.querySelector(y);var F=l.pageYOffset;if(!t){t=l.document.querySelector(v.selectorHeader)}if(!n){n=k(t)}var E=p(H,n,parseInt(v.offset,10));var D;var u=E-F;var J=a();var C=0;var I,z;c(y,v.updateURL);var B=function(L,O,M){var N=l.pageYOffset;if(L==O||N==O||((l.innerHeight+N)>=J)){clearInterval(M);H.focus();v.callback(A,y)}};var x=function(){C+=16;I=(C/parseInt(v.speed,10));I=(I>1)?1:I;z=F+(u*e(v.easing,I));l.scrollTo(0,Math.floor(z));B(z,E,D)};var w=function(){D=setInterval(x,16)};if(l.pageYOffset===0){l.scrollTo(0,0)}w()};var o=function(v){var u=m(v.target,s.selector);if(u&&u.tagName.toLowerCase()==="a"){v.preventDefault();j.animateScroll(u,u.hash,s)}};var d=function(u){if(!b){b=setTimeout(function(){b=null;n=k(t)},66)}};j.destroy=function(){if(!s){return}l.document.removeEventListener("click",o,false);l.removeEventListener("resize",d,false);s=null;b=null;t=null;n=null};j.init=function(u){if(!q){return}j.destroy();s=r(f,u||{});t=l.document.querySelector(s.selectorHeader);n=k(t);l.document.addEventListener("click",o,false);if(t){l.addEventListener("resize",d,false)}};return j});
