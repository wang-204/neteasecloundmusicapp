(function(e){function t(t){for(var c,r,s=t[0],o=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={index:0},a={index:0},i=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0f3a372a"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"7f456589"}[e]+".css",a=o.p+c,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===c||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var i=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12b9":function(e,t,n){"use strict";n("12e0")},"12e0":function(e,t,n){},1720:function(e,t,n){},"20d8":function(e,t,n){},"32a0":function(e,t,n){e.exports=n.p+"img/swiper2.bc809ff2.jpg"},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return f}));n("99af");var c=n("73ef"),r=n.n(c),a="http://music.cpengx.cn";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.get("".concat(a,"/banner?type=").concat(e))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return r.a.get("".concat(a,"/personalized?limit=").concat(e))}function o(e){return r.a.get("".concat(a,"/playlist/detail?id=").concat(e))}function u(e){return r.a.get("".concat(a,"/lyric?id=").concat(e))}function l(e){return r.a.get("".concat(a,"/search?keywords=").concat(e))}function d(e,t){return r.a.get("".concat(a,"/login/cellphone?phone=").concat(e,"&password=").concat(t))}function f(e){return r.a.get("".concat(a,"/user/detail?uid=").concat(e))}},"3e0a":function(e,t,n){"use strict";n("1720")},4195:function(e,t,n){},4360:function(e,t,n){"use strict";var c=n("1da1"),r=(n("96cf"),n("d81d"),n("ac1f"),n("1276"),n("fb6a"),n("159b"),n("5502")),a=n("365c");t["a"]=Object(r["a"])({state:{playlist:[{name:"彩劵",id:1486513704,al:{id:"96680121",name:"彩劵",picUrl:"http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg",pic:0x186a0009b7935f0,pic_str:"109951165386012146"}}],playCurrentIndex:0,lyric:"",currentTime:0,intervalId:0,user:{isLogin:!1,account:{},userDetail:{}}},getters:{lyricList:function(e){var t=e.lyric.split(/\n/gi).map((function(e,t,n){var c=parseInt(e.slice(1,3)),r=parseInt(e.slice(4,6)),a=parseInt(e.slice(7,10));return{min:c,sec:r,mill:a,lyric:e.slice(11,e.length),content:e,time:a+1e3*r+60*c*1e3}}));return t.forEach((function(e,n){e.pre=0==n?0:t[n-1].time})),t}},mutations:{setPlaylist:function(e,t){e.playlist=t},setPlayIndex:function(e,t){e.playCurrentIndex=t},setLyric:function(e,t){e.lyric=t},setCurrentTime:function(e,t){e.currentTime=t},pushPlaylist:function(e,t){e.playlist.push(t)},setUser:function(e,t){e.user=t}},actions:{reqLyric:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(a["b"])(t.id);case 2:c=n.sent,e.commit("setLyric",c.data.lrc.lyric);case 4:case"end":return n.stop()}}),n)})))()},phoneLogin:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(a["e"])(t.phone,t.password);case 2:if(c=n.sent,200!=c.data.code){n.next=13;break}return e.state.user.isLogin=!0,e.state.user.account=c.data.account,n.next=8,Object(a["g"])(c.data.account.id);case 8:r=n.sent,e.state.user.userDetail=r.data,localStorage.userData=JSON.stringify(e.state.user),console.log(r),e.commit("setUser",e.state.user);case 13:return n.abrupt("return",c);case 14:case"end":return n.stop()}}),n)})))()}},modules:{}})},"4aaa":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,i){var s=Object(c["x"])("router-view"),o=Object(c["x"])("play-controller");return Object(c["q"])(),Object(c["d"])("div",null,[Object(c["f"])(s),Object(c["f"])(o)])}n("b0c0");var a=Object(c["G"])("data-v-3400531d");Object(c["t"])("data-v-3400531d");var i={class:"playController"},s={class:"content"},o={class:"title"},u=Object(c["f"])("div",{class:"tips"},"横滑可以切换上下首哟~",-1),l={class:"right"},d=Object(c["f"])("use",{"xlink:href":"#icon-zanting1"},null,-1),f=Object(c["f"])("use",{"xlink:href":"#icon-bofang6"},null,-1),p=Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-bofangliebiao"})],-1);Object(c["r"])();var b=a((function(e,t,n,r,a,b){var j=Object(c["x"])("play-music");return Object(c["q"])(),Object(c["d"])("div",i,[Object(c["f"])("div",{class:"left",onClick:t[1]||(t[1]=function(){return b.showitem&&b.showitem.apply(b,arguments)})},[Object(c["f"])("img",{src:e.playlist[e.playCurrentIndex].al.picUrl,alt:""},null,8,["src"]),Object(c["f"])("div",s,[Object(c["f"])("div",o,Object(c["z"])(e.playlist[e.playCurrentIndex].name),1),u])]),Object(c["f"])("div",l,[a.paused?(Object(c["q"])(),Object(c["d"])("svg",{key:0,class:"icon","aria-hidden":"true",onClick:t[2]||(t[2]=function(){return b.play&&b.play.apply(b,arguments)})},[d])):(Object(c["q"])(),Object(c["d"])("svg",{key:1,class:"icon","aria-hidden":"true",onClick:t[3]||(t[3]=function(){return b.play&&b.play.apply(b,arguments)})},[f])),p]),Object(c["E"])(Object(c["f"])(j,{play:b.play,paused:a.paused,onBack:t[4]||(t[4]=function(e){return a.show=!a.show}),playDetail:e.playlist[e.playCurrentIndex]},null,8,["play","paused","playDetail"]),[[c["C"],a.show]]),Object(c["f"])("audio",{ref:"audio",src:"https://music.163.com/song/media/outer/url?id=".concat(e.playlist[e.playCurrentIndex].id,".mp3")},null,8,["src"])])})),j=n("5530"),O=n("5502"),v=n("5de0"),h=n.n(v),m=n("d386"),y=n.n(m),g=Object(c["G"])("data-v-148a2a18");Object(c["t"])("data-v-148a2a18");var w={class:"playMusic"},x={class:"playTop"},k=Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-prev"})],-1),C={class:"center"},I={class:"title"},q=Object(c["f"])("div",{class:"share"},[Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-fenxiang"})])],-1),L=Object(c["f"])("div",{class:"progress"},null,-1),_={class:"playFooter"},T=Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-xunhuan"})],-1),P=Object(c["f"])("use",{"xlink:href":"#icon-shangyishoushangyige"},null,-1),E=Object(c["f"])("use",{"xlink:href":"#icon-bofang5"},null,-1),S=Object(c["f"])("use",{"xlink:href":"#icon-zanting"},null,-1),$=Object(c["f"])("use",{"xlink:href":"#icon-xiayigexiayishou"},null,-1),U=Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-bofangliebiao"})],-1);Object(c["r"])();var D=g((function(e,t,n,r,a,i){var s=Object(c["x"])("marquee");return Object(c["q"])(),Object(c["d"])("div",w,[Object(c["f"])("div",{class:"bg",style:{backgroundImage:"url(".concat(n.playDetail.al.picUrl,")")},onClick:t[1]||(t[1]=function(){return i.lyricsshow&&i.lyricsshow.apply(i,arguments)})},null,4),Object(c["f"])("div",x,[Object(c["f"])("div",{class:"back",onClick:t[2]||(t[2]=function(t){return e.$emit("back")})},[k]),Object(c["f"])("div",C,[Object(c["f"])("div",I,[Object(c["f"])(s,{behavior:"scroll",direction:"left"},{default:g((function(){return[Object(c["e"])(Object(c["z"])(n.playDetail.al.name),1)]})),_:1})])]),q]),Object(c["E"])(Object(c["f"])("div",{class:"playContent",onClick:t[3]||(t[3]=function(){return i.lyricsshow&&i.lyricsshow.apply(i,arguments)})},[Object(c["f"])("img",{class:["needle",{active:!n.paused}],src:h.a,alt:""},null,2),Object(c["f"])("img",{class:["disc Rotation",{pause:n.paused}],src:y.a,alt:""},null,2),Object(c["f"])("img",{class:["playImg Rotation",{pause:n.paused}],src:n.playDetail.al.picUrl,alt:""},null,10,["src"])],512),[[c["C"],!a.lyrics]]),Object(c["E"])(Object(c["f"])("div",{class:"playLyric",ref:"playLyric",onClick:t[4]||(t[4]=function(){return i.lyricsshow&&i.lyricsshow.apply(i,arguments)})},[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(e.$store.getters.lyricList,(function(t,n){return Object(c["q"])(),Object(c["d"])("p",{class:{active:1e3*e.currentTime>=t.pre&&1e3*e.currentTime<t.time},key:n},Object(c["z"])(t.lyric),3)})),128))],512),[[c["C"],a.lyrics]]),L,Object(c["f"])("div",_,[T,(Object(c["q"])(),Object(c["d"])("svg",{class:"icon","aria-hidden":"true",onClick:t[5]||(t[5]=function(e){return i.goPlay(-1)})},[P])),n.paused?(Object(c["q"])(),Object(c["d"])("svg",{key:0,class:"icon play","aria-hidden":"true",onClick:t[6]||(t[6]=function(){return n.play&&n.play.apply(n,arguments)})},[E])):(Object(c["q"])(),Object(c["d"])("svg",{key:1,class:"icon play","aria-hidden":"true",onClick:t[7]||(t[7]=function(){return n.play&&n.play.apply(n,arguments)})},[S])),(Object(c["q"])(),Object(c["d"])("svg",{class:"icon","aria-hidden":"true",onClick:t[8]||(t[8]=function(e){return i.goPlay(1)})},[$])),U])])})),N={props:["playDetail","paused","play"],data:function(){return{isLyric:!0,lyrics:!1}},computed:Object(j["a"])({},Object(O["c"])(["lyric","currentTime","playlist","playCurrentIndex"])),watch:{currentTime:function(e){document.querySelector("p");var t=document.querySelector("p.active");if(t){var n=t.offsetTop;this.$refs.playLyric.scrollTop=n}}},methods:{goPlay:function(e){var t=this.playCurrentIndex+e;t<0?t=this.playlist.length-1:t==this.playlist.length&&(t=0),this.$store.commit("setPlayIndex",t)},lyricsshow:function(){this.lyrics=!this.lyrics}}};n("db22");N.render=D,N.__scopeId="data-v-148a2a18";var R=N,z={components:{playMusic:R},data:function(){return{paused:!0,show:!1,id:""}},computed:Object(j["a"])({},Object(O["c"])(["playlist","playCurrentIndex"])),mounted:function(){this.$store.dispatch("reqLyric",{id:this.playlist[this.playCurrentIndex].id})},updated:function(){this.$store.dispatch("reqLyric",{id:this.playlist[this.playCurrentIndex].id})},methods:{play:function(){this.$refs.audio.paused?(this.paused=!this.paused,this.$refs.audio.play(),this.UpdateTime()):(this.paused=!this.paused,this.$refs.audio.pause(),clearInterval(this.$store.state.id))},UpdateTime:function(){var e=this;this.$store.state.id=setInterval((function(){e.$store.commit("setCurrentTime",e.$refs.audio.currentTime)}),1e3)},showitem:function(){this.show=!this.show}}};n("bea6");z.render=b,z.__scopeId="data-v-3400531d";var B=z,A={components:{playController:B},mounted:function(){var e=JSON.parse(localStorage.userData);this.$store.commit("setUser",e)}};n("5895");A.render=r;var M=A,F=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),G=Object(c["G"])("data-v-5a2bd2f3");Object(c["t"])("data-v-5a2bd2f3");var H={class:"home"};Object(c["r"])();var J=G((function(e,t,n,r,a,i){var s=Object(c["x"])("top-Nav"),o=Object(c["x"])("swipercom"),u=Object(c["x"])("iconlist"),l=Object(c["x"])("musiclist");return Object(c["q"])(),Object(c["d"])("div",H,[Object(c["f"])(s),Object(c["f"])(o),Object(c["f"])(u),Object(c["f"])(l)])})),V=Object(c["G"])("data-v-642b6174");Object(c["t"])("data-v-642b6174");var K={class:"topNav"},Z=Object(c["f"])("div",{class:"topLeft"},[Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-list01"})])],-1),Q={class:"topCenter"},W=Object(c["f"])("span",{class:"navBtn active"},"发现",-1),X=Object(c["f"])("span",{class:"navBtn"},"云村",-1),Y=Object(c["f"])("span",{class:"navBtn"},"视频",-1),ee=Object(c["f"])("svg",{class:"icon search ","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-sousuo"})],-1);Object(c["r"])();var te=V((function(e,t,n,r,a,i){return Object(c["q"])(),Object(c["d"])("div",K,[Z,Object(c["f"])("div",Q,[Object(c["f"])("span",{class:"navBtn",onClick:t[1]||(t[1]=function(t){return e.$router.push("/me")})},"我的"),W,X,Y]),Object(c["f"])("div",{class:"topRight",onClick:t[2]||(t[2]=function(t){return e.$router.push("/searchview")})},[ee])])})),ne={};n("cbb9");ne.render=te,ne.__scopeId="data-v-642b6174";var ce=ne,re={id:"swipercom"},ae={class:"swiper-container",id:"swiperindex"},ie={class:"swiper-wrapper"},se=Object(c["f"])("div",{class:"swiper-pagination"},null,-1);function oe(e,t,n,r,a,i){return Object(c["q"])(),Object(c["d"])("div",re,[Object(c["f"])("div",ae,[Object(c["f"])("div",ie,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(a.imgs,(function(e,t){return Object(c["q"])(),Object(c["d"])("div",{class:"swiper-slide",key:t},[Object(c["f"])("img",{src:e.pic},null,8,["src"])])})),128))]),se])])}var ue=n("1da1"),le=(n("96cf"),n("488c"),n("c620")),de=(n("73ef"),n("365c")),fe={data:function(){return{imgs:[{pic:n("ed6a")},{pic:n("32a0")},{pic:n("81e7")}]}},mounted:function(){var e=this;return Object(ue["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(de["a"])(1);case 2:n=t.sent,e.imgs=n.data.banners,new le["a"]("#swiperindex",{loop:!0,pagination:{el:".swiper-pagination"}});case 5:case"end":return t.stop()}}),t)})))()}};n("8981");fe.render=oe;var pe=fe,be=Object(c["G"])("data-v-178fe36e");Object(c["t"])("data-v-178fe36e");var je={class:"iconlist"},Oe=Object(c["f"])("div",{class:"inconItem"},[Object(c["f"])("div",{class:"cricle"},[Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-huo"})])]),Object(c["f"])("span",null,"每日推荐")],-1),ve=Object(c["f"])("div",{class:"inconItem"},[Object(c["f"])("div",{class:"cricle"},[Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-FM"})])]),Object(c["f"])("span",null,"私人FM")],-1),he=Object(c["f"])("div",{class:"inconItem"},[Object(c["f"])("div",{class:"cricle"},[Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-gedan2"})])]),Object(c["f"])("span",null,"歌单")],-1),me=Object(c["f"])("div",{class:"inconItem"},[Object(c["f"])("div",{class:"cricle"},[Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-paihangbang"})])]),Object(c["f"])("span",null,"排行榜")],-1);Object(c["r"])();var ye=be((function(e,t,n,r,a,i){return Object(c["q"])(),Object(c["d"])("div",je,[Oe,ve,he,me])})),ge={};n("3e0a");ge.render=ye,ge.__scopeId="data-v-178fe36e";var we=ge,xe=Object(c["G"])("data-v-ba1fbc68");Object(c["t"])("data-v-ba1fbc68");var ke={class:"musiclist"},Ce=Object(c["f"])("div",{class:"musicList-top"},[Object(c["f"])("div",{class:"title"},"发现好歌单"),Object(c["f"])("div",{class:"more"},"查看更多")],-1),Ie={class:"mlist"},qe={class:"swiper-container",id:"musicswiper"},Le={class:"swiper-wrapper"},_e={class:"name"},Te={class:"count"},Pe=Object(c["f"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["f"])("use",{"xlink:href":"#icon-bofang1"})],-1);Object(c["r"])();var Ee=xe((function(e,t,n,r,a,i){var s=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",ke,[Ce,Object(c["f"])("div",Ie,[Object(c["f"])("div",qe,[Object(c["f"])("div",Le,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(r.state.musicList,(function(e,t){return Object(c["q"])(),Object(c["d"])(s,{to:{path:"/listview",query:{id:e.id}},class:"swiper-slide",key:t},{default:xe((function(){return[Object(c["f"])("img",{src:e.picUrl,alt:e.name},null,8,["src","alt"]),Object(c["f"])("div",_e,Object(c["z"])(e.name),1),Object(c["f"])("div",Te,[Pe,Object(c["f"])("span",null,Object(c["z"])(r.changeValue(e.playCount)),1)])]})),_:2},1032,["to"])})),128))])])])])})),Se=(n("b680"),{setup:function(){var e=Object(c["u"])({musicList:[]});function t(e){var t=0;return e>1e8?(t=e/1e8,t=t.toFixed(2)+"亿"):e>1e4&&(t=e/1e4,t=t.toFixed(2)+"万"),t}return Object(c["n"])(Object(ue["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(de["c"])();case 2:n=t.sent,e.musicList=n.data.result;case 4:case"end":return t.stop()}}),t)})))),Object(c["p"])((function(){new le["a"]("#musicswiper",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,loop:!0})})),{state:e,changeValue:t}}});n("12b9");Se.render=Ee,Se.__scopeId="data-v-ba1fbc68";var $e=Se,Ue={name:"Home",data:function(){return{}},mounted:function(){new le["a"](".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})},components:{topNav:ce,swipercom:pe,iconlist:we,musiclist:$e}};Ue.render=J,Ue.__scopeId="data-v-5a2bd2f3";var De=Ue,Ne=n("4360"),Re=[{path:"/",name:"Home",component:De},{path:"/listview",name:"listview",component:function(){return n.e("about").then(n.bind(null,"4055"))}},{path:"/searchview",name:"searchview",component:function(){return n.e("about").then(n.bind(null,"2d3b"))}},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/me",name:"me",beforeEnter:function(e,t,n){console.log(Ne["a"].state.user),Ne["a"].state.user.isLogin?n():n("/login")},component:function(){return n.e("about").then(n.bind(null,"0a99"))}}],ze=Object(F["a"])({history:Object(F["b"])(""),routes:Re}),Be=ze;Object(c["c"])(M).use(Ne["a"]).use(Be).mount("#app")},5895:function(e,t,n){"use strict";n("20d8")},"5de0":function(e,t,n){e.exports=n.p+"img/needle-ab.4b81da04.png"},"625e":function(e,t,n){},"695d":function(e,t,n){},"81e7":function(e,t,n){e.exports=n.p+"img/swiper3.276af577.jpg"},8981:function(e,t,n){"use strict";n("695d")},bea6:function(e,t,n){"use strict";n("4195")},cbb9:function(e,t,n){"use strict";n("625e")},d386:function(e,t,n){e.exports=n.p+"img/dist1.2aa9bb90.png"},db22:function(e,t,n){"use strict";n("4aaa")},ed6a:function(e,t,n){e.exports=n.p+"img/swiper1.3da09806.jpg"}});
//# sourceMappingURL=index.da1fd770.js.map