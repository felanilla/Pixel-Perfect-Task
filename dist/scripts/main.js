"use strict";!function r(i,a,l){function c(n,e){if(!a[n]){if(!i[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);throw new Error("Cannot find module '"+n+"'")}var o=a[n]={exports:{}};i[n][0].call(o.exports,function(e){var t=i[n][1][e];return c(t||e)},o,o.exports,r,i,a,l)}return a[n].exports}for(var s="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,n){var o=e("./utilities").getClasses("on-page-load"),r={rotateMove:function(){document.getElementById("oval").addEventListener("mouseover",function(e){if(t&&t.isActive())return;t=TweenMax.to("#oval",4,{rotation:n-=360})},!1);var t,n=0},scrollMagic:{controller:new ScrollMagic.Controller,init:function(){o.forEach(function(e,t){var n=new ScrollMagic.Scene({triggerElement:"."+e,triggerHook:1});n.setTween(TweenMax.from("."+e,.8,{opacity:0,offset:50,y:50})),r.scrollMagic.controller.addScene([n])})}},init:function(){r.scrollMagic.init(),r.rotateMove()}};t.exports={init:r.init}},{"./utilities":4}],2:[function(e,t,n){var o=e("./form"),r=e("./animation");o.init(),r.init()},{"./animation":1,"./form":3}],3:[function(e,t,n){var o={init:function(){var e=document.getElementById("submit"),n=(document.getElementById("name"),document.getElementById("number"));function t(e){var t=function(e){return Math.floor(e.getBoundingClientRect().top)};e.preventDefault();var n=this.getAttribute("href"),o=document.querySelector(n);if(o){var r=t(o);window.scrollBy({top:r,left:0,behavior:"smooth"});var i=setInterval(function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===t(o)||e)&&(o.tabIndex="-1",o.focus(),window.history.pushState("","",n),clearInterval(i))},100)}}n.addEventListener("keyup",function(e){var t=document.getElementById("tickets-amount");isNaN(n.value)||(t.innerHTML=20*n.value)}),e.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("name").value,n=document.getElementById("number").value,o=document.getElementById("error-name"),r=document.getElementById("error-number"),i=!1,a=!1;if(""!=t&&isNaN(t)&&t.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)?(o.style.display="none",i=!0):(o.style.display="block",i=!1),""!=n&&n.match(/[0-9]/)?(r.style.display="none",a=!0):(r.style.display="block",a=!1),i&&a){for(var l=document.querySelectorAll("input"),c=0;c<l.length;++c)l[c].style.display="none";document.getElementById("oval-form").classList.toggle("active"),setTimeout(function(){document.getElementById("alert-success").setAttribute("class","show")},1e3)}}),document.querySelectorAll('a[href^="#"]').forEach(function(e){return e.onclick=t})}};t.exports={init:o.init}},{}],4:[function(e,t,n){var o={getClasses:function(e){for(var t=document.getElementsByClassName(e),n=t.length,o=new Array,r=0;r<n;r++)o.push(t[r].classList.item(0)+"-"+r),t[r].classList.add(t[r].classList.item(0)+"-"+r);return o}};t.exports={getClasses:o.getClasses}},{}]},{},[2]);