/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"3046288","c":[".tk-proxima-nova","\"proxima-nova\",sans-serif"],"f":"//use.typekit.net/c/4f3257/1w;proxima-nova,7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191,cdc:T:i1,fsR:T:i3,cdh:T:i4,cdf:T:i6,cdX:T:i7,cdZ:T:i8,cdV:T:i9,cdb:T:n1,cdj:T:n3,cdg:T:n4,cdd:T:n6,cdW:T:n7,cdY:T:n8,cdT:T:n9/{format}{/extras*}?3bb2a6e53c9684ffdc9a9af11d5b2a620ecc366e1cec4c7dd51591ff051430bbe394700c1e840010f8c87eaf01ccae6113a8676795adc28d1264605e140dae8da1434738453bb0c1108471757c","fi":[137,138,139,140,169,170,171,172,173,174,175,176,5474,5475],"fn":["proxima-nova",["i1","i3","i4","i6","i7","i8","i9","n1","n3","n4","n6","n7","n8","n9"]],"ht":"tk","js":"1.12.5","k":"//use.typekit.net/{id}.js","kt":"ayz7ncw","p":"//p.typekit.net/p.gif?s=1&k=ayz7ncw&ht=tk&h={host}&f=137.138.139.140.169.170.171.172.173.174.175.176.5474.5475&a=3046288&_={_}","ps":1,"w":"ayz7ncw"};
/*{"k":"1.12.5","last_published":"2015-04-29 14:34:38 UTC","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.oa=a;this.X=b||a;this.F=this.X.document}da.prototype.createElement=function(a,b,c){a=this.F.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.F.createTextNode(c));return a};function ea(a,b,c){a=a.F.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.F.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){if("string"===typeof a.ra)return a.ra;var b=a.X.location.protocol;"about:"==b&&(b=a.oa.location.protocol);return"https:"==b?"https:":"http:"}function ia(a,b){/^http(s)?:$/.test(b)&&(a.ra=b)}function ja(a){return a.X.location.hostname||a.oa.location.hostname}
function ka(a,b,c,d){function e(a){for(var c=0;c<g.length;c++)if(g[c].href&&-1!==g[c].href.indexOf(b)){a();return}setTimeout(function(){e(a)},0)}var f=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),g=a.F.styleSheets,k=!1;f.onload=function(){k||(k=!0,c&&c(null))};f.onerror=function(){k||(k=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",f);d&&e(function(){f.media="all"})}
function la(a,b,c){var d=a.F.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);window.setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function m(a){this.va=a}
function n(a,b,c,d){this.l=null!=a?a:null;this.q=null!=b?b:null;this.P=null!=c?c:null;this.h=null!=d?d:null}var ma=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;n.prototype.compare=function(a){return this.l>a.l||this.l===a.l&&this.q>a.q||this.l===a.l&&this.q===a.q&&this.P>a.P?1:this.l<a.l||this.l===a.l&&this.q<a.q||this.l===a.l&&this.q===a.q&&this.P<a.P?-1:0};function p(a,b){return-1===a.compare(b)}function r(a,b){return 0===a.compare(b)||1===a.compare(b)}
function s(a,b){return 0===a.compare(b)}n.prototype.toString=function(){return[this.l,this.q||"",this.P||"",this.h||""].join("")};function u(a){a=ma.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new n(b,c,d,e)}
function y(a,b,c,d,e,f,g,k){this.Y=a;this.w=b;this.L=c;this.T=d;this.m=e;this.g=f;this.ca=g;this.D=k}y.prototype.getName=function(){return this.Y};function na(a,b){this.b=a;this.S=b}var oa=new y("Unknown",new n,"Unknown",new n,"Unknown",new n,void 0,new m(!1));
na.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=z(this);var b=u(A(this)),c=null,d=null,e=null,e=B(this.b,/Trident\/([\d\w\.]+)/,1),f=C(this.S),c=-1!=this.b.indexOf("MSIE")?u(B(this.b,/MSIE ([\d\w\.]+)/,1)):u(B(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=u(e)):(d="Unknown",e=new n);a=new y("MSIE",c,d,e,a,b,f,new m(!1))}else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=u(B(this.b,/Presto\/([\d\w\.]+)/,1)),c=u(A(this)),d=C(this.S),null!==
b.l?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=u(B(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=u(B(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new y("OperaMini",f,a,b,z(this),c,d,new m(!1));else{if(-1!=this.b.indexOf("Version/")&&(f=u(B(this.b,/Version\/([\d\.]+)/,1)),null!==f.l)){a=new y("Opera",f,a,b,z(this),c,d,new m(!1));break a}f=u(B(this.b,/Opera[\/ ]([\d\.]+)/,1));a=null!==f.l?new y("Opera",f,a,b,z(this),c,d,new m(!1)):new y("Opera",new n,a,b,z(this),c,d,new m(!1))}else/OPR\/[\d.]+/.test(this.b)?
a=pa(this):/AppleWeb(K|k)it/.test(this.b)?a=pa(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new n,c=u(A(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=u(B(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=u(B(this.b,/rv:([^\)]+)/,1)),a=new y(a,b,"Gecko",d,z(this),c,C(this.S),new m(!1))):a=oa;return a};
function z(a){var b=B(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=B(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function A(a){var b=B(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=B(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=B(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=B(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=B(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function pa(a){var b=z(a),c=u(A(a)),d=u(B(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new n,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=B(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=B(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=B(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=B(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=B(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=B(a.b,/PhantomJS\/([\d.]+)/,1));f=u(f);return new y(e,f,"AppleWebKit",d,b,c,C(a.S),new m(536>d.l||536==d.l&&11>d.q))}function B(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function C(a){if(a.documentMode)return a.documentMode}
function qa(a){this.Ea=a||"-"}qa.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ea)};function ra(a,b){this.e=a;this.u=a.X.document.documentElement;this.$=b;this.o="wf";this.n=new qa("-");this.za=!1!==b.events;this.I=!1!==b.classes}function sa(a){if(a.I){var b=ga(a.u,a.n.h(a.o,"active")),c=[],d=[a.n.h(a.o,"loading")];b||c.push(a.n.h(a.o,"inactive"));l(a.u,c,d)}D(a,"inactive")}
function D(a,b,c){if(a.za&&a.$[b])if(c)a.$[b](c.getName(),E(c));else a.$[b]()}function F(a,b){this.Y=a;this.ea=4;this.Z="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Z=c[1],this.ea=parseInt(c[2],10))}F.prototype.getName=function(){return this.Y};function E(a){return a.Z+a.ea}function G(a,b){this.e=a;this.O=b;this.p=this.e.createElement("span",{"aria-hidden":"true"},this.O)}function ta(a){ea(a.e,"body",a.p)}
function H(a){var b;b=[];for(var c=a.Y.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Z?c="oblique":"i"===a.Z&&(c="italic");return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.ea+"00")+";")}
G.prototype.remove=function(){var a=this.p;a.parentNode&&a.parentNode.removeChild(a)};
function ua(a,b,c,d,e,f,g,k){this.fa=a;this.Da=b;this.e=c;this.t=d;this.D=e;this.O=k||"BESbswy";this.C={};this.da=f||3E3;this.pa=g||null;this.N=this.B=this.A=null;this.A=new G(this.e,this.O);this.B=new G(this.e,this.O);this.N=new G(this.e,this.O);a=new F("serif",E(this.t));a=H(a);this.A.p.style.cssText=a;a=new F("sans-serif",E(this.t));a=H(a);this.B.p.style.cssText=a;a=new F("monospace",E(this.t));a=H(a);this.N.p.style.cssText=a;ta(this.A);ta(this.B);ta(this.N);this.C.serif=this.A.p.offsetWidth;this.C["sans-serif"]=
this.B.p.offsetWidth;this.C.monospace=this.N.p.offsetWidth}var I={Ra:"serif",Qa:"sans-serif",Na:"monospace"};ua.prototype.start=function(){this.Ia=ca();var a=new F(this.t.getName()+",serif",E(this.t)),a=H(a);this.A.p.style.cssText=a;a=new F(this.t.getName()+",sans-serif",E(this.t));a=H(a);this.B.p.style.cssText=a;va(this)};function wa(a,b,c){for(var d in I)if(I.hasOwnProperty(d)&&b===a.C[I[d]]&&c===a.C[I[d]])return!0;return!1}
function va(a){var b=a.A.p.offsetWidth,c=a.B.p.offsetWidth;b===a.C.serif&&c===a.C["sans-serif"]||a.D.va&&wa(a,b,c)?ca()-a.Ia>=a.da?a.D.va&&wa(a,b,c)&&(null===a.pa||a.pa.hasOwnProperty(a.t.getName()))?xa(a,a.fa):xa(a,a.Da):ya(a):xa(a,a.fa)}function ya(a){setTimeout(h(function(){va(this)},a),50)}function xa(a,b){a.A.remove();a.B.remove();a.N.remove();b(a.t)}function za(a,b,c,d){this.e=b;this.G=c;this.ba=0;this.ua=this.na=!1;this.da=d;this.D=a.D}
za.prototype.Aa=function(a){var b=this.G;b.I&&l(b.u,[b.n.h(b.o,a.getName(),E(a).toString(),"active")],[b.n.h(b.o,a.getName(),E(a).toString(),"loading"),b.n.h(b.o,a.getName(),E(a).toString(),"inactive")]);D(b,"fontactive",a);this.ua=!0;Aa(this)};
za.prototype.Ba=function(a){var b=this.G;if(b.I){var c=ga(b.u,b.n.h(b.o,a.getName(),E(a).toString(),"active")),d=[],e=[b.n.h(b.o,a.getName(),E(a).toString(),"loading")];c||d.push(b.n.h(b.o,a.getName(),E(a).toString(),"inactive"));l(b.u,d,e)}D(b,"fontinactive",a);Aa(this)};function Aa(a){0==--a.ba&&a.na&&(a.ua?(a=a.G,a.I&&l(a.u,[a.n.h(a.o,"active")],[a.n.h(a.o,"loading"),a.n.h(a.o,"inactive")]),D(a,"active")):sa(a.G))}function J(){this.J=this.Q=-1}J.prototype.now=function(){return(new Date).getTime()};
J.prototype.start=function(){this.Q=this.now();this.J=-1};J.prototype.stop=function(){this.J=this.now()};function Ba(){var a=[{name:"font-family",value:K.c[L+1]}];this.Ga=[K.c[L]];this.ia=a}function Ca(a){for(var b=a.Ga.join(","),c=[],d=0;d<a.ia.length;d++){var e=a.ia[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Da(a){this.e=a}Da.prototype.toString=function(){return encodeURIComponent(ja(this.e))};function Ea(a,b){this.r=a;this.s=b}
Ea.prototype.toString=function(){for(var a=[],b=0;b<this.s.length;b++)for(var c=this.s[b],d=c.H(),c=c.H(this.r),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function N(a){this.Ka=a}
N.prototype.h=function(a,b){var c=b||{},d=this.Ka.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Fa(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ga(a,b){this.M=a;this.V=b;this.ka={};this.ja={}}Ga.prototype.H=function(a){return a?(this.ka[a]||this.V).slice(0):this.V.slice(0)};
function Ha(a,b,c){for(var d=[],e=a.M.split(",")[0].replace(/"|'/g,""),f=a.H(),g,k=[],v={},x=0;x<f.length;x++)g=f[x],0<g.length&&!v[g]&&(v[g]=!0,k.push(g));c=c.ta?c.ta(e,k,d):k;a.ka[b]=c;a.ja[b]=d}function Ia(a,b){for(var c=a.H(b),d=a.ja[b]||[],e=[],f=0;f<c.length;f++)e.push(new F(a.M,c[f]));for(f=0;f<d.length;f++)if(c=d[f].M,c!==a.M)for(var g=d[f].H(),k=0;k<g.length;k++)e.push(new F(c,g[k]));return e}function Ja(a,b){this.M=a;this.V=b}Ja.prototype.H=function(){return this.V};
function Ka(a,b,c,d,e,f){this.Ha=a;this.Ca=b;this.U=c||[];this.xa=d||null;this.Ja=e||null;this.version=f||null}
Ka.prototype.send=function(a,b,c){var d=new N("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||"").toString().substr(0,20)),f=encodeURIComponent(ja(a)),g=[],k=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var k=window.Typekit.fonts,v=0;v<this.U.length;v++){for(var x=!1,w=0;w<k.length;w++)if(this.U[v]===k[w]){x=!0;break}x||
(g.push(this.U[v]),k.push(this.U[v]))}g.length&&Ma(d.h("https:"===ha(a),{service:this.Ha,token:this.Ja,app:e,hosting:this.Ca,host:f,variations:g.join("."),account:this.xa,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function Ma(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Na(){this.ga=this.wa=this.K=this.W=this.ma=!0}
function O(a){return"Windows"===a.m}function P(a){return O(a)&&s(a.g,new n(5,1))||O(a)&&s(a.g,new n(5,2))||O(a)&&s(a.g,new n(6,0))||O(a)&&r(a.g,new n(6,1))}function Q(a){return"Macintosh"===a.m&&(r(a.g,new n(10,4))||null===a.g.l)}function Oa(a,b){return b.ma&&("iPhone"===a.m||"iPod"===a.m)}function Pa(a,b){return Oa(a,b)&&r(a.g,new n(4,2))&&p(a.g,new n(5))}function Qa(a,b){return b.W&&"iPad"===a.m&&r(a.g,new n(4,2))&&p(a.g,new n(5))}function R(a,b){return b.K&&"Android"===a.m}
function Ra(a,b){return R(a,b)&&r(a.g,new n(2,2))&&p(a.g,new n(3,1))}function Sa(a,b){return R(a,b)&&r(a.g,new n(3,1))&&p(a.g,new n(4,1))}function T(a){return"Linux"===a.m||"Ubuntu"===a.m}function Ta(a){return"Safari"===a.getName()&&"AppleWebKit"===a.L||"Unknown"===a.getName()&&"AppleWebKit"===a.L&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}function Ua(a){return"BuiltinBrowser"===a.getName()}function Va(a){this.ta=a}function Wa(a,b){return b}
var U={Oa:"a",Sa:"d",Ma:"i",Pa:"j",La:"k",NONE:"x"},V={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.L&&r(a.T,new n(525,13))&&p(a.T,new n(534,50))&&(P(a)||Q(a))||Ua(a)&&(Ra(a,b)||R(a,b)&&r(a.g,new n(4,1)))||b.K&&"Silk"===a.getName()&&p(a.w,new n(2))&&(Ra(a,b)||Q)||b.K&&"Silk"===a.getName()&&r(a.w,new n(2))&&R(a,b)&&r(a.g,new n(4,1))||Ta(a)&&(Qa(a,b)||Pa(a,b))||"Chrome"===a.getName()&&r(a.w,new n(6))&&(Qa(a,b)||Pa(a,b))||"AdobeAIR"===a.getName()&&r(a.w,new n(2,5))&&(O(a)&&null===
a.g.l||T(a)||Q(a))},d:function(a,b){return"Chrome"===a.getName()&&r(a.w,new n(6))&&(P(a)||T(a)||Q(a)||R(a,b)||"CrOS"===a.m||"CrKey"===a.m||b.W&&"iPad"===a.m&&r(a.g,new n(5))||Oa(a,b)&&r(a.g,new n(5)))||"Gecko"===a.L&&1===a.T.compare(new n(1,9,1))&&(P(a)||T(a)||Q(a)||R(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.L&&r(a.T,new n(534,50))&&(P(a)||Q(a))||Ta(a)&&(b.W&&"iPad"===a.m&&r(a.g,new n(5))||Oa(a,b)&&r(a.g,new n(5)))||"Opera"===a.getName()&&r(a.w,new n(11,10))&&(P(a)||T(a)||Q(a)||R(a,b))||"MSIE"===
a.getName()&&9<=a.ca&&(O(a)&&r(a.g,new n(6,1))||O(a)&&s(a.g,new n(6,0)))||"MSIE"===a.getName()&&b.wa&&"Windows Phone"===a.m&&r(a.g,new n(8))||Ua(a)&&(b.ga&&"BlackBerry"===a.m&&r(a.g,new n(10))||T(a))},j:function(a,b){return Ua(a)&&Sa(a,b)||b.K&&"Silk"===a.getName()&&r(a.w,new n(2))&&(Sa(a,b)||T(a))},i:function(a){return"MSIE"===a.getName()&&r(a.w,new n(6,0))&&(void 0===a.ca||9>a.ca)&&P(a)},x:function(){return!1}},Xa={};
Xa.i=new Va(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ja(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var k=f[g];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var W={};W.a=W.d=W.j=function(){return[]};W.i=function(a,b,c){return[new Da(a),new Ea(b,c)]};W.k=function(a){return[new Da(a)]};function Ya(a,b,c){return W[b](a,b,c)}function X(a){this.e=a;this.r="x";this.ha=this.b=null;this.s=[];this.R=[];this.la=this.aa=null}X.prototype.supportsConfiguredBrowser=function(){return"x"!==this.r};
X.prototype.init=function(){if(0<this.R.length){for(var a=[],b=0;b<this.R.length;b++)a.push(Ca(this.R[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
X.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",k=f.hostname||this.la;a=f.timeout;c=!!f.async;var v=!1!==f.events,x=null,w=new J,M=new J;f.active&&(d=f.active);f.active=function(){M.stop();e.qa&&e.qa.send(e.e,-1!==w.Q&&-1!==w.J?w.J-w.Q:-1,-1!==M.Q&&-1!==M.J?M.J-M.Q:-1);d()};x=new ra(this.e,f);if(this.r){for(var f=Xa[this.r]||new Va(Wa),q=0;q<this.s.length;q++)Ha(this.s[q],this.r,f);this.aa&&(f=Ya(this.e,this.r,this.s),f=Fa(this.r,f),f.contextPath=g,k&&(f.hostname=
k),g=this.aa.h("https:"===ha(this.e),f),w.start(),ka(this.e,g,function(){w.stop();M.start()},c));if(v){for(var S=[],La={},t=new za(this.b,this.e,x,a),q=0;q<this.s.length;q++)S=S.concat(Ia(this.s[q],this.r));for(q=0;q<S.length;q++)La[S[q].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.e,function(){var a=S,c={},d=La||{};if(0===a.length&&b)sa(t.G);else{t.ba+=a.length;b&&(t.na=b);for(var e=0;e<a.length;e++){var f=a[e],g=d[f.getName()],k=t.G,q=f;k.I&&l(k.u,[k.n.h(k.o,q.getName(),
E(q).toString(),"loading")]);D(k,"fontloading",q);k=null;k=new ua(h(t.Aa,t),h(t.Ba,t),t.e,f,t.D,t.da,c,g);k.start()}}})}}};X.prototype.performOptionalActions=function(){};function Za(a,b,c,d){this.Fa=a;this.e=b;this.b=c;this.u=d;this.v=[]}Za.prototype.ya=function(a){this.v.push(a)};
Za.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);d.protocol&&ia(this.e,d.protocol);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)$a(this,c[g],function(){0==--f&&ab(e,d)});else ab(this,d)};function $a(a,b,c){b=a.Fa.h("https:"===ha(a.e),{id:encodeURIComponent(b)});la(a.e,b,c)}
function ab(a,b){if(0!=a.v.length){for(var c=new ra(a.e,b),d=!1,e=0;e<a.v.length;e++)a.v[e].init(),d=d||a.v[e].supportsConfiguredBrowser();if(d)for(c.I&&l(c.u,[c.n.h(c.o,"loading")]),D(c,"loading"),c=0;c<a.v.length;c++)d=a.v[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.v.length-1,b);else sa(c);a.v=[]}}var bb=(new na(navigator.userAgent,document)).parse(),cb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var db=window.Typekit.config||{},eb=null;db.k&&(eb=new N(db.k));var fb=new Za(eb,cb,bb,document.documentElement);window.Typekit.load=function(){fb.load.apply(fb,arguments)};window.Typekit.addKit=function(){fb.ya.apply(fb,arguments)}}var gb,Y,Z,K=window.Typekit.config||{};Z=new X(cb);Z.qa=new Ka(K.ps,K.ht,K.fi,K.a,K.kt,K.js);Y=new Na;Y.ma=!K.si;Y.W=!K.st;Y.K=!K.sa;Y.wa=!K.sw;Y.ga=!K.sb;Z.ha=Y;K.f&&(gb=new N(K.f),Z.aa=gb);K.hn&&(Z.la=K.hn);var L;
if(K.fn)for(L=0;L<K.fn.length;L+=2)Z.s.push(new Ga(K.fn[L],K.fn[L+1]));if(K.c)for(L=0;L<K.c.length;L+=2)Z.R.push(new Ba);Z.b=bb;var hb;a:{var ib=Z.b,jb=new Na,kb=Z.ha||jb,lb;for(lb in U){var $=U[lb];if(V[$]&&V[$](ib,kb)){hb=$;break a}}for(lb in U)if($=U[lb],V[$]&&V[$](ib,jb)){hb="x";break a}hb="k"}Z.r=hb;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(mb){};
})(this,document);
