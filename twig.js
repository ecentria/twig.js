/**
 * twig.js
 * https://github.com/schmittjoh/twig.js
 *
 * (C) 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 * Licensed under the Apache 2.0 License.
 *
 * Portions of this code are from the Google Closure Library received
 * from the Closure Authors under the Apache 2.0 License.
 */
(function() {function e(a){return function(){return this[a]}}var g,k=this;function m(a,b,c){a=a.split(".");c=c||k;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]?c[d]:c[d]={}:c[d]=b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"array"==n(a)}function q(a){return"string"==typeof a}function r(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var t="closure_uid_"+(1E9*Math.random()>>>0),u=0;function v(a,b,c){return a.call.apply(a.bind,arguments)}
function w(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w;return x.apply(null,arguments)}function y(a,b){m(a,b,void 0)};var z=/&/g,A=/</g,B=/>/g,C=/\"/g,D=/[&<>\"]/,E={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},F={"'":"\\'"};function G(a,b){null!=a&&this.append.apply(this,arguments)}G.prototype.b="";G.prototype.append=function(a,b,c){this.b+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};G.prototype.toString=e("b");function H(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function I(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function J(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function K(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}function L(a){var b={},c;for(c in a)b[c]=a[c];return b}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function N(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var h=0;h<M.length;h++)c=M[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var O=Array.prototype,P=O.indexOf?function(a,b,c){return O.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Q=O.forEach?function(a,b,c){O.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&b.call(c,f[h],h,a)};
function aa(a){for(var b={},c=0,d=0;d<a.length;){var f=a[d++],h=r(f)?"o"+(f[t]||(f[t]=++u)):(typeof f).charAt(0)+f;Object.prototype.hasOwnProperty.call(b,h)||(b[h]=!0,a[c++]=f)}a.length=c};var ba=x,t="twig_ui_"+Math.floor(2147483648*Math.random()).toString(36);function R(a){return null===a||!1===a||void 0===a||0===a?!0:S(a)?0===T(a):!1}function U(a,b){N.apply(null,Array.prototype.slice.call(arguments,0));return a}function S(a){return p(a)||q(a)||r(a)}function T(a){if(p(a))a=a.length;else if(q(a))a=a.length;else if(r(a)){var b=0,c;for(c in a)b++;a=b}else a=("number"===typeof a?a.toString():"").length;return a}function V(a,b,c){p(a)?Q(a,b,c):H(a,b,c)}
function W(a){return a.replace(/[\.\\+*?\[\]<>(){}^$=!|:-]/g,"\\$\x26")};function X(a){this.env_=a;this.c=[];this.m={}}g=X.prototype;g.s=e("c");g.D=function(a){this.c=a};g.L=function(a){this.m=a};g.getParent=function(a){a=this.getParent_(a);return!1===a?!1:this.env_.d(a)};g.C=function(a,b,c){if(a in this.m){var d=new G;this.m[a](d,b,c||{});return d.toString()}d=this.getParent(b);if(!1!==d)return d.k(a,b,c);throw Error("The template '"+this.o()+"' has no parent, and no trait defining the block '"+a+"'.");};
g.k=function(a,b,c){if(c&&a in c){var d=new G,f=c[a];delete c[a];f(d,b,c);return d.toString()}if(a in this.c)return d=new G,this.c[a](d,b,c||null),d.toString();d=this.getParent(b);return!1!==d?d.k(a,b,c):""};g.j=function(a,b){var c=new G;this.render_(c,a||{},b||{});return c.toString()};
g.q=function(a,b,c,d){if(!a["get"+b])throw Error("The macro "+b+" is not defined in "+a.o()+".");if(void 0===d)return a["get"+b].apply(a,c);throw Error("Positional arguments, or default values in macro arguments are not supported, yet.");};function Y(a){this.r=a}Y.prototype.toString=e("r");function Z(a,b,c,d,f){if(f&&b instanceof Y)return b.toString();b=null==b?"":String(b);if(ca===c){a=String(b);if(a.quote)b=a.quote();else{b=['"'];for(c=0;c<a.length;c++){var h=a.charAt(c),l=h.charCodeAt(0);d=b;f=c+1;var s;if(!(s=E[h])){if(!(31<l&&127>l))if(h in F)h=F[h];else if(h in E)h=F[h]=E[h];else{l=h;s=h.charCodeAt(0);if(31<s&&127>s)l=h;else{if(256>s){if(l="\\x",16>s||256<s)l+="0"}else l="\\u",4096>s&&(l+="0");l+=s.toString(16).toUpperCase()}h=F[h]=l}s=h}d[f]=s}b.push('"');b=b.join("")}return b.substring(1,
b.length-1)}if(!c||da===c)return a=b,D.test(a)&&(-1!=a.indexOf("\x26")&&(a=a.replace(z,"\x26amp;")),-1!=a.indexOf("\x3c")&&(a=a.replace(A,"\x26lt;")),-1!=a.indexOf("\x3e")&&(a=a.replace(B,"\x26gt;")),-1!=a.indexOf('"')&&(a=a.replace(C,"\x26quot;"))),a;if(ea===c)return encodeURIComponent(b);throw Error("The type '"+c+"' is not supported.");}var da="html",ca="js",ea="url";function $(){this.a={};this.g={};this.h={};this.l={};this.f={};this.e={};this.p=!1;this.M="UTF-8"}g=$.prototype;g.j=function(a,b){var c=this.d(a);return c.j.call(c,U({},this.e,b||{}))};g.filter=function(a,b,c){if(!(a in this.g))throw Error("The filter '"+a+"' does not exist.");return this.g[a].apply(null,Array.prototype.slice.call(arguments,1))};
g.w=function(a,b,c){if(!(a in this.h))throw Error("The function '"+a+"' does not exist.");return this.h[a].apply(null,Array.prototype.slice.call(arguments,1))};g.test=function(a,b,c){if(!(a in this.l))throw Error("The test '"+a+"' does not exist.");return this.l[a].apply(null,Array.prototype.slice.call(arguments,1))};g.escape=function(a,b,c,d){return Z(0,a,b,0,d)};
g.A=function(a,b,c){var d=this.d(a),f=d["get"+b];if(!f)throw Error("The macro '"+b+"' does not exist on template '"+d.o()+"'.");return f.apply(d,Array.prototype.slice.call(arguments,2)).toString()};g.G=function(a,b){this.g[a]=b};g.H=function(a,b){this.h[a]=b};g.K=function(a,b){this.l[a]=b};g.J=function(a){this.e=a};g.I=function(a,b){this.e[a]=b};g.u=e("e");g.i=function(){this.p=!0;H(this.a,function(a){a.i()},this)};g.v=function(a){return a in this.a};
g.getExtension=function(a){if(!(a in this.a))throw Error('The "'+a+'" extension is not enabled.');return this.a[a]};g.n=function(a){this.a[a.getName()]=a};g.B=function(a){delete this.a[a]};g.F=function(a){H(a,function(a){this.n(a)})};g.t=e("a");g.d=function(a){var b=a[t]||(a[t]=++u);if(b in this.f)return this.f[b];!1===this.p&&this.i();a=new a(this);return this.f[b]=a};window.Twig=new $;y("goog.provide",function(a){m(a)});y("goog.require",function(){});y("twig.templates",{});
y("twig.attr",function(a,b,c,d,f){d=d||"any";f=void 0!==f?f:!1;if(!r(a)&&!p(a))return f?!1:null;if(b in a){if("array"!==d&&"function"==n(a[b]))return f?!0:a[b].apply(a,c||[]);if("method"!==d)return f?!0:a[b]}if("array"===d||p(a))return f?!1:null;b=b.toLowerCase();var h="get"+b,l="is"+b;return(b=K(a,function(a,b){b=b.toLowerCase();return b===h||b===l}))&&"function"==n(a[b])?f?!0:a[b].apply(a,c||[]):f?!1:null});y("twig.bind",ba);
y("twig.inherits",function(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c});y("twig.extend",U);y("twig.spaceless",function(a){return a.replace(/>[\s\xa0]+</g,"\x3e\x3c").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")});y("twig.range",function(a,b){for(var c=[];a<=b;a+=1)c.push(a);return c});y("twig.contains",function(a,b){var c;if(p(a))c=0<=P(a,b);else if(q(a))c=-1!=a.indexOf(b)&&(""!==b||""===a);else a:{for(c in a)if(a[c]==b){c=!0;break a}c=!1}return c});y("twig.countable",S);
y("twig.count",T);y("twig.forEach",V);y("twig.empty",R);y("twig.createObj",function(a){for(var b={},c=0;c<arguments.length;c+=2)b[arguments[c]]=arguments[c+1];return b});y("twig.pregQuote",W);y("twig.filter.capitalize",function(a,b){return b.charAt(0).toUpperCase()+b.substring(1)});y("twig.filter.escape",Z);y("twig.filter.first",function(a,b){return p(b)?b[0]:r(b)?b[Object.keys(b)[0]]:q(b)?b.charAt(0):""});y("twig.filter.length",function(a,b){return T(b)});
y("twig.filter.def",function(a,b){return R(a)?b||"":a});y("twig.filter.replace",function(a,b){for(var c in b){var d;d=W(c);a=a.replace(RegExp(d,"g"),b[c])}return a});y("twig.filter.join",function(a,b){var c=b||"",d=new G,f=!0;V(a,function(a){f||d.append(c);f=!1;d.append(a)});return d.toString()});y("twig.filter.keys",J);y("twig.filter.upper",function(a,b){return b.toUpperCase()});y("twig.filter.lower",function(a,b){return b.toLowerCase()});
y("twig.filter.nl2br",function(a){return a.replace(/\n/g,"\x3cbr /\x3e")});y("twig.filter.abs",function(a){return Math.abs(a)});y("twig.filter.title",function(a,b){return b.split(" ").map(function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}).join(" ")});y("twig.filter.trim",function(a,b){var c="\n ";b&&(c=W(b));a=a.replace(RegExp("^["+c+"]+"),"");return a=a.replace(RegExp("["+c+"]+$"),"")});y("twig.filter.json_encode",function(a){return JSON.stringify(a)});
y("twig.filter.last",function(a,b){if(p(b))return b[b.length-1];if(r(b)){var c=Object.keys(b);return b[c[c.length-1]]}return q(b)?b.charAt(b.length-1):""});y("twig.filter.reverse",function(a,b){if(p(b))return b.reverse();if(r(b)){for(var c={},d=J(b).reverse(),f=0;f<d.length;f++)c[d[f]]=b[d[f]];return c}return q(b)?b.split("").reverse().join(""):b});
y("twig.filter.batch",function(a,b,c){for(var d=Array(Math.ceil(a.length/b)),f=d.length*b,h=0;h<f;h++){var l=Math.floor(h/b);"undefined"===typeof d[l]&&(d[l]=[]);"undefined"!==typeof a[h]?d[l].push(a[h]):q(c)&&d[l].push(c)}return d});y("twig.filter.merge",function(a,b){var c=[];p(a)&&p(b)?(c=a.concat(b),aa(c)):r(a)&&r(b)&&(c=L(a),H(b,function(a,b){c[b]=a}));return c});y("twig.functions.max",function(a){return p(a)?Math.max.apply(null,a):r(a)?Math.max.apply(null,I(a)):Math.max.apply(null,arguments)});
y("twig.functions.min",function(a){return p(a)?Math.min.apply(null,a):r(a)?Math.min.apply(null,I(a)):Math.min.apply(null,arguments)});y("twig.functions.random",function(a,b){return p(b)||q(b)?b[Math.floor(Math.random()*b.length)]:"number"==typeof b?Math.floor(Math.random()*b):null===b||"undefined"===typeof b?Math.floor(2147483647*Math.random()):""});y("twig.StringBuffer",G);G.prototype.append=G.prototype.append;G.prototype.toString=G.prototype.toString;y("twig.Environment",$);
$.prototype.createTemplate=$.prototype.d;$.prototype.filter=$.prototype.filter;$.prototype.invoke=$.prototype.w;$.prototype.test=$.prototype.test;$.prototype.escape=$.prototype.escape;$.prototype.macro=$.prototype.A;$.prototype.setFilter=$.prototype.G;$.prototype.setFunction=$.prototype.H;$.prototype.setTest=$.prototype.K;$.prototype.render=$.prototype.j;$.prototype.getGlobals=$.prototype.u;$.prototype.setGlobals=$.prototype.J;$.prototype.setGlobal=$.prototype.I;$.prototype.initRuntime=$.prototype.i;
$.prototype.hasExtension=$.prototype.v;$.prototype.getExtension=$.prototype.getExtension;$.prototype.addExtension=$.prototype.n;$.prototype.removeExtension=$.prototype.B;$.prototype.setExtensions=$.prototype.F;$.prototype.getExtensions=$.prototype.t;y("twig.Template",X);X.prototype.setTraits=X.prototype.L;X.prototype.setBlocks=X.prototype.D;X.prototype.getBlocks=X.prototype.s;X.prototype.renderParentBlock=X.prototype.C;X.prototype.renderBlock=X.prototype.k;X.prototype.callMacro=X.prototype.q;
y("twig.Markup",Y);})();
