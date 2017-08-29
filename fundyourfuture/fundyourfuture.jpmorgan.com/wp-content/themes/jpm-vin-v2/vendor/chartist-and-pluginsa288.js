!function(t,e){"function"==typeof define&&define.amd?define([],function(){return t.Chartist=e()}):"object"==typeof exports?module.exports=e():t.Chartist=e()}(this,function(){var t={version:"0.9.4"};return function(t,e,i){"use strict";i.noop=function(t){return t},i.alphaNumerate=function(t){return String.fromCharCode(97+t%26)},i.extend=function(t){t=t||{};var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(e){for(var n in e)"object"!=typeof e[n]||null===e[n]||e[n]instanceof Array?t[n]=e[n]:t[n]=i.extend({},t[n],e[n])}),t},i.replaceAll=function(t,e,i){return t.replace(new RegExp(e,"g"),i)},i.stripUnit=function(t){return"string"==typeof t&&(t=t.replace(/[^0-9\+-\.]/g,"")),+t},i.ensureUnit=function(t,e){return"number"==typeof t&&(t+=e),t},i.querySelector=function(t){return t instanceof Node?t:e.querySelector(t)},i.times=function(t){return Array.apply(null,new Array(t))},i.sum=function(t,e){return t+(e?e:0)},i.mapMultiply=function(t){return function(e){return e*t}},i.mapAdd=function(t){return function(e){return e+t}},i.serialMap=function(t,e){var n=[],s=Math.max.apply(null,t.map(function(t){return t.length}));return i.times(s).forEach(function(i,s){var a=t.map(function(t){return t[s]});n[s]=e.apply(null,a)}),n},i.roundWithPrecision=function(t,e){var n=Math.pow(10,e||i.precision);return Math.round(t*n)/n},i.precision=8,i.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},i.serialize=function(t){return null===t||void 0===t?t:("number"==typeof t?t=""+t:"object"==typeof t&&(t=JSON.stringify({data:t})),Object.keys(i.escapingMap).reduce(function(t,e){return i.replaceAll(t,e,i.escapingMap[e])},t))},i.deserialize=function(t){if("string"!=typeof t)return t;t=Object.keys(i.escapingMap).reduce(function(t,e){return i.replaceAll(t,i.escapingMap[e],e)},t);try{t=JSON.parse(t),t=void 0!==t.data?t.data:t}catch(e){}return t},i.createSvg=function(t,e,n,s){var a;return e=e||"100%",n=n||"100%",Array.prototype.slice.call(t.querySelectorAll("svg")).filter(function(t){return t.getAttributeNS("http://www.w3.org/2000/xmlns/",i.xmlNs.prefix)}).forEach(function(e){t.removeChild(e)}),a=new i.Svg("svg").attr({width:e,height:n}).addClass(s).attr({style:"width: "+e+"; height: "+n+";"}),t.appendChild(a._node),a},i.reverseData=function(t){t.labels.reverse(),t.series.reverse();for(var e=0;e<t.series.length;e++)"object"==typeof t.series[e]&&void 0!==t.series[e].data?t.series[e].data.reverse():t.series[e]instanceof Array&&t.series[e].reverse()},i.getDataArray=function(t,e,n){function s(t){if(!i.isFalseyButZero(t)){if((t.data||t)instanceof Array)return(t.data||t).map(s);if(t.hasOwnProperty("value"))return s(t.value);if(n){var e={};return"string"==typeof n?e[n]=i.getNumberOrUndefined(t):e.y=i.getNumberOrUndefined(t),e.x=t.hasOwnProperty("x")?i.getNumberOrUndefined(t.x):e.x,e.y=t.hasOwnProperty("y")?i.getNumberOrUndefined(t.y):e.y,e}return i.getNumberOrUndefined(t)}}return(e&&!t.reversed||!e&&t.reversed)&&(i.reverseData(t),t.reversed=!t.reversed),t.series.map(s)},i.normalizePadding=function(t,e){return e=e||0,"number"==typeof t?{top:t,right:t,bottom:t,left:t}:{top:"number"==typeof t.top?t.top:e,right:"number"==typeof t.right?t.right:e,bottom:"number"==typeof t.bottom?t.bottom:e,left:"number"==typeof t.left?t.left:e}},i.getMetaData=function(t,e){var n=t.data?t.data[e]:t[e];return n?i.serialize(n.meta):void 0},i.orderOfMagnitude=function(t){return Math.floor(Math.log(Math.abs(t))/Math.LN10)},i.projectLength=function(t,e,i){return e/i.range*t},i.getAvailableHeight=function(t,e){return Math.max((i.stripUnit(e.height)||t.height())-(e.chartPadding.top+e.chartPadding.bottom)-e.axisX.offset,0)},i.getHighLow=function(t,e,n){function s(t){if(void 0!==t)if(t instanceof Array)for(var e=0;e<t.length;e++)s(t[e]);else{var i=n?+t[n]:+t;r&&i>a.high&&(a.high=i),o&&i<a.low&&(a.low=i)}}e=i.extend({},e,n?e["axis"+n.toUpperCase()]:{});var a={high:void 0===e.high?-Number.MAX_VALUE:+e.high,low:void 0===e.low?Number.MAX_VALUE:+e.low},r=void 0===e.high,o=void 0===e.low;return(r||o)&&s(t),(e.referenceValue||0===e.referenceValue)&&(a.high=Math.max(e.referenceValue,a.high),a.low=Math.min(e.referenceValue,a.low)),a.high<=a.low&&(0===a.low?a.high=1:a.low<0?a.high=0:a.low=0),a},i.isNum=function(t){return!isNaN(t)&&isFinite(t)},i.isFalseyButZero=function(t){return!t&&0!==t},i.getNumberOrUndefined=function(t){return isNaN(+t)?void 0:+t},i.getMultiValue=function(t,e){return i.isNum(t)?+t:t?t[e||"y"]||0:0},i.rho=function(t){function e(t,i){return t%i===0?i:e(i,t%i)}function i(t){return t*t+1}if(1===t)return t;var n,s=2,a=2;if(t%2===0)return 2;do s=i(s)%t,a=i(i(a))%t,n=e(Math.abs(s-a),t);while(1===n);return n},i.getBounds=function(t,e,n,s){var a,r,o,h=0,l={high:e.high,low:e.low};l.valueRange=l.high-l.low,l.oom=i.orderOfMagnitude(l.valueRange),l.step=Math.pow(10,l.oom),l.min=Math.floor(l.low/l.step)*l.step,l.max=Math.ceil(l.high/l.step)*l.step,l.range=l.max-l.min,l.numberOfSteps=Math.round(l.range/l.step);var u=i.projectLength(t,l.step,l),c=n>u,d=s?i.rho(l.range):0;if(s&&i.projectLength(t,1,l)>=n)l.step=1;else if(s&&d<l.step&&i.projectLength(t,d,l)>=n)l.step=d;else for(;;){if(c&&i.projectLength(t,l.step,l)<=n)l.step*=2;else{if(c||!(i.projectLength(t,l.step/2,l)>=n))break;if(l.step/=2,s&&l.step%1!==0){l.step*=2;break}}if(h++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}for(r=l.min,o=l.max;r+l.step<=l.low;)r+=l.step;for(;o-l.step>=l.high;)o-=l.step;for(l.min=r,l.max=o,l.range=l.max-l.min,l.values=[],a=l.min;a<=l.max;a+=l.step)l.values.push(i.roundWithPrecision(a));return l},i.polarToCartesian=function(t,e,i,n){var s=(n-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}},i.createChartRect=function(t,e,n){var s=!(!e.axisX&&!e.axisY),a=s?e.axisY.offset:0,r=s?e.axisX.offset:0,o=t.width()||i.stripUnit(e.width)||0,h=t.height()||i.stripUnit(e.height)||0,l=i.normalizePadding(e.chartPadding,n);o=Math.max(o,a+l.left+l.right),h=Math.max(h,r+l.top+l.bottom);var u={padding:l,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return s?("start"===e.axisX.position?(u.y2=l.top+r,u.y1=Math.max(h-l.bottom,u.y2+1)):(u.y2=l.top,u.y1=Math.max(h-l.bottom-r,u.y2+1)),"start"===e.axisY.position?(u.x1=l.left+a,u.x2=Math.max(o-l.right,u.x1+1)):(u.x1=l.left,u.x2=Math.max(o-l.right-a,u.x1+1))):(u.x1=l.left,u.x2=Math.max(o-l.right,u.x1+1),u.y2=l.top,u.y1=Math.max(h-l.bottom,u.y2+1)),u},i.createGrid=function(t,e,n,s,a,r,o,h){var l={};l[n.units.pos+"1"]=t,l[n.units.pos+"2"]=t,l[n.counterUnits.pos+"1"]=s,l[n.counterUnits.pos+"2"]=s+a;var u=r.elem("line",l,o.join(" "));h.emit("draw",i.extend({type:"grid",axis:n,index:e,group:r,element:u},l))},i.createLabel=function(t,e,n,s,a,r,o,h,l,u,c){var d,p={};if(p[a.units.pos]=t+o[a.units.pos],p[a.counterUnits.pos]=o[a.counterUnits.pos],p[a.units.len]=e,p[a.counterUnits.len]=r-10,u){var f='<span class="'+l.join(" ")+'" style="'+a.units.len+": "+Math.round(p[a.units.len])+"px; "+a.counterUnits.len+": "+Math.round(p[a.counterUnits.len])+'px">'+s[n]+"</span>";d=h.foreignObject(f,i.extend({style:"overflow: visible;"},p))}else d=h.elem("text",p,l.join(" ")).text(s[n]);c.emit("draw",i.extend({type:"label",axis:a,index:n,group:h,element:d,text:s[n]},p))},i.getSeriesOption=function(t,e,i){if(t.name&&e.series&&e.series[t.name]){var n=e.series[t.name];return n.hasOwnProperty(i)?n[i]:e[i]}return e[i]},i.optionsProvider=function(e,n,s){function a(e){var a=o;if(o=i.extend({},l),n)for(h=0;h<n.length;h++){var r=t.matchMedia(n[h][0]);r.matches&&(o=i.extend(o,n[h][1]))}s&&!e&&s.emit("optionsChanged",{previousOptions:a,currentOptions:o})}function r(){u.forEach(function(t){t.removeListener(a)})}var o,h,l=i.extend({},e),u=[];if(!t.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(n)for(h=0;h<n.length;h++){var c=t.matchMedia(n[h][0]);c.addListener(a),u.push(c)}return a(!0),{removeMediaQueryListeners:r,getCurrentOptions:function(){return i.extend({},o)}}}}(window,document,t),function(t,e,i){"use strict";i.Interpolation={},i.Interpolation.none=function(){return function(t,e){for(var n=new i.Svg.Path,s=!0,a=1;a<t.length;a+=2){var r=e[(a-1)/2];void 0===r.value?s=!0:s?(n.move(t[a-1],t[a],!1,r),s=!1):n.line(t[a-1],t[a],!1,r)}return n}},i.Interpolation.simple=function(t){var e={divisor:2};t=i.extend({},e,t);var n=1/Math.max(1,t.divisor);return function(t,e){for(var s=new i.Svg.Path,a=!0,r=2;r<t.length;r+=2){var o=t[r-2],h=t[r-1],l=t[r],u=t[r+1],c=(l-o)*n,d=e[r/2-1],p=e[r/2];void 0===d.value?a=!0:(a&&s.move(o,h,!1,d),void 0!==p.value&&(s.curve(o+c,h,l-c,u,l,u,!1,p),a=!1))}return s}},i.Interpolation.cardinal=function(t){function e(t,e){for(var i=[],n=!0,s=0;s<t.length;s+=2)void 0===e[s/2].value?n=!0:(n&&(i.push({pathCoordinates:[],valueData:[]}),n=!1),i[i.length-1].pathCoordinates.push(t[s],t[s+1]),i[i.length-1].valueData.push(e[s/2]));return i}var n={tension:1};t=i.extend({},n,t);var s=Math.min(1,Math.max(0,t.tension)),a=1-s;return function r(t,n){var o=e(t,n);if(o.length>1){var h=[];return o.forEach(function(t){h.push(r(t.pathCoordinates,t.valueData))}),i.Svg.Path.join(h)}if(t=o[0].pathCoordinates,n=o[0].valueData,t.length<=4)return i.Interpolation.none()(t,n);for(var l,u=(new i.Svg.Path).move(t[0],t[1],!1,n[0]),c=0,d=t.length;d-2*!l>c;c+=2){var p=[{x:+t[c-2],y:+t[c-1]},{x:+t[c],y:+t[c+1]},{x:+t[c+2],y:+t[c+3]},{x:+t[c+4],y:+t[c+5]}];l?c?d-4===c?p[3]={x:+t[0],y:+t[1]}:d-2===c&&(p[2]={x:+t[0],y:+t[1]},p[3]={x:+t[2],y:+t[3]}):p[0]={x:+t[d-2],y:+t[d-1]}:d-4===c?p[3]=p[2]:c||(p[0]={x:+t[c],y:+t[c+1]}),u.curve(s*(-p[0].x+6*p[1].x+p[2].x)/6+a*p[2].x,s*(-p[0].y+6*p[1].y+p[2].y)/6+a*p[2].y,s*(p[1].x+6*p[2].x-p[3].x)/6+a*p[2].x,s*(p[1].y+6*p[2].y-p[3].y)/6+a*p[2].y,p[2].x,p[2].y,!1,n[(c+2)/2])}return u}},i.Interpolation.step=function(t){var e={postpone:!0};return t=i.extend({},e,t),function(e,n){for(var s=new i.Svg.Path,a=!0,r=2;r<e.length;r+=2){var o=e[r-2],h=e[r-1],l=e[r],u=e[r+1],c=n[r/2-1],d=n[r/2];void 0===c.value?a=!0:(a&&s.move(o,h,!1,c),void 0!==d.value&&(t.postpone?s.line(l,h,!1,c):s.line(o,u,!1,d),s.line(l,u,!1,d),a=!1))}return s}}}(window,document,t),function(t,e,i){"use strict";i.EventEmitter=function(){function t(t,e){n[t]=n[t]||[],n[t].push(e)}function e(t,e){n[t]&&(e?(n[t].splice(n[t].indexOf(e),1),0===n[t].length&&delete n[t]):delete n[t])}function i(t,e){n[t]&&n[t].forEach(function(t){t(e)}),n["*"]&&n["*"].forEach(function(i){i(t,e)})}var n=[];return{addEventHandler:t,removeEventHandler:e,emit:i}}}(window,document,t),function(t,e,i){"use strict";function n(t){var e=[];if(t.length)for(var i=0;i<t.length;i++)e.push(t[i]);return e}function s(t,e){var n=e||this.prototype||i.Class,s=Object.create(n);i.Class.cloneDefinitions(s,t);var a=function(){var t,e=s.constructor||function(){};return t=this===i?Object.create(s):this,e.apply(t,Array.prototype.slice.call(arguments,0)),t};return a.prototype=s,a["super"]=n,a.extend=this.extend,a}function a(){var t=n(arguments),e=t[0];return t.splice(1,t.length-1).forEach(function(t){Object.getOwnPropertyNames(t).forEach(function(i){delete e[i],Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}),e}i.Class={extend:s,cloneDefinitions:a}}(window,document,t),function(t,e,i){"use strict";function n(t,e,n){return t&&(this.data=t,this.eventEmitter.emit("data",{type:"update",data:this.data})),e&&(this.options=i.extend({},n?this.options:this.defaultOptions,e),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=i.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function s(){return this.initializeTimeoutId?t.clearTimeout(this.initializeTimeoutId):(t.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function a(t,e){return this.eventEmitter.addEventHandler(t,e),this}function r(t,e){return this.eventEmitter.removeEventHandler(t,e),this}function o(){t.addEventListener("resize",this.resizeListener),this.optionsProvider=i.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(t){t instanceof Array?t[0](this,t[1]):t(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function h(t,e,n,s,a){this.container=i.querySelector(t),this.data=e,this.defaultOptions=n,this.options=s,this.responsiveOptions=a,this.eventEmitter=i.EventEmitter(),this.supportsForeignObject=i.Svg.isSupported("Extensibility"),this.supportsAnimations=i.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(o.bind(this),0)}i.Base=i.Class.extend({constructor:h,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:n,detach:s,on:a,off:r,version:i.version,supportsForeignObject:!1})}(window,document,t),function(t,e,i){"use strict";function n(t,n,s,a,r){t instanceof Element?this._node=t:(this._node=e.createElementNS(O,t),"svg"===t&&this._node.setAttributeNS(M,i.xmlNs.qualifiedName,i.xmlNs.uri)),n&&this.attr(n),s&&this.addClass(s),a&&(r&&a._node.firstChild?a._node.insertBefore(this._node,a._node.firstChild):a._node.appendChild(this._node))}function s(t,e){return"string"==typeof t?e?this._node.getAttributeNS(e,t):this._node.getAttribute(t):(Object.keys(t).forEach(function(n){void 0!==t[n]&&(e?this._node.setAttributeNS(e,[i.xmlNs.prefix,":",n].join(""),t[n]):this._node.setAttribute(n,t[n]))}.bind(this)),this)}function a(t,e,n,s){return new i.Svg(t,e,n,this,s)}function r(){return this._node.parentNode instanceof SVGElement?new i.Svg(this._node.parentNode):null}function o(){for(var t=this._node;"svg"!==t.nodeName;)t=t.parentNode;return new i.Svg(t)}function h(t){var e=this._node.querySelector(t);return e?new i.Svg(e):null}function l(t){var e=this._node.querySelectorAll(t);return e.length?new i.Svg.List(e):null}function u(t,i,n,s){if("string"==typeof t){var a=e.createElement("div");a.innerHTML=t,t=a.firstChild}t.setAttribute("xmlns",C);var r=this.elem("foreignObject",i,n,s);return r._node.appendChild(t),r}function c(t){return this._node.appendChild(e.createTextNode(t)),this}function d(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function p(){return this._node.parentNode.removeChild(this._node),this.parent()}function f(t){return this._node.parentNode.replaceChild(t._node,this._node),t}function x(t,e){return e&&this._node.firstChild?this._node.insertBefore(t._node,this._node.firstChild):this._node.appendChild(t._node),this}function m(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function g(t){return this._node.setAttribute("class",this.classes(this._node).concat(t.trim().split(/\s+/)).filter(function(t,e,i){return i.indexOf(t)===e}).join(" ")),this}function v(t){var e=t.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(t){return-1===e.indexOf(t)}).join(" ")),this}function y(){return this._node.setAttribute("class",""),this}function w(t,e){try{return t.getBBox()[e]}catch(i){}return 0}function b(){return this._node.clientHeight||Math.round(w(this._node,"height"))||this._node.parentNode.clientHeight}function E(){return this._node.clientWidth||Math.round(w(this._node,"width"))||this._node.parentNode.clientWidth}function A(t,e,n){return void 0===e&&(e=!0),Object.keys(t).forEach(function(s){function a(t,e){var a,r,o,h={};t.easing&&(o=t.easing instanceof Array?t.easing:i.Svg.Easing[t.easing],delete t.easing),t.begin=i.ensureUnit(t.begin,"ms"),t.dur=i.ensureUnit(t.dur,"ms"),o&&(t.calcMode="spline",t.keySplines=o.join(" "),t.keyTimes="0;1"),e&&(t.fill="freeze",h[s]=t.from,this.attr(h),r=i.stripUnit(t.begin||0),t.begin="indefinite"),a=this.elem("animate",i.extend({attributeName:s},t)),e&&setTimeout(function(){try{a._node.beginElement()}catch(e){h[s]=t.to,this.attr(h),a.remove()}}.bind(this),r),n&&a._node.addEventListener("beginEvent",function(){n.emit("animationBegin",{element:this,animate:a._node,params:t})}.bind(this)),a._node.addEventListener("endEvent",function(){n&&n.emit("animationEnd",{element:this,animate:a._node,params:t}),e&&(h[s]=t.to,this.attr(h),a.remove())}.bind(this))}t[s]instanceof Array?t[s].forEach(function(t){a.bind(this)(t,!1)}.bind(this)):a.bind(this)(t[s],e)}.bind(this)),this}function S(t){var e=this;this.svgElements=[];for(var n=0;n<t.length;n++)this.svgElements.push(new i.Svg(t[n]));Object.keys(i.Svg.prototype).filter(function(t){return-1===["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(t)}).forEach(function(t){e[t]=function(){var n=Array.prototype.slice.call(arguments,0);return e.svgElements.forEach(function(e){i.Svg.prototype[t].apply(e,n)}),e}})}var O="http://www.w3.org/2000/svg",M="http://www.w3.org/2000/xmlns/",C="http://www.w3.org/1999/xhtml";i.xmlNs={qualifiedName:"xmlns:ct",prefix:"ct",uri:"http://gionkunz.github.com/chartist-js/ct"},i.Svg=i.Class.extend({constructor:n,attr:s,elem:a,parent:r,root:o,querySelector:h,querySelectorAll:l,foreignObject:u,text:c,empty:d,remove:p,replace:f,append:x,classes:m,addClass:g,removeClass:v,removeAllClasses:y,height:b,width:E,animate:A}),i.Svg.isSupported=function(t){return e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+t,"1.1")};var N={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};i.Svg.Easing=N,i.Svg.List=i.Class.extend({constructor:S})}(window,document,t),function(t,e,i){"use strict";function n(t,e,n,s,a,r){var o=i.extend({command:a?t.toLowerCase():t.toUpperCase()},e,r?{data:r}:{});n.splice(s,0,o)}function s(t,e){t.forEach(function(i,n){w[i.command.toLowerCase()].forEach(function(s,a){e(i,s,n,a,t)})})}function a(t,e){this.pathElements=[],this.pos=0,this.close=t,this.options=i.extend({},b,e)}function r(t){return void 0!==t?(this.pos=Math.max(0,Math.min(this.pathElements.length,t)),this):this.pos}function o(t){return this.pathElements.splice(this.pos,t),this}function h(t,e,i,s){return n("M",{x:+t,y:+e},this.pathElements,this.pos++,i,s),this}function l(t,e,i,s){return n("L",{x:+t,y:+e},this.pathElements,this.pos++,i,s),this}function u(t,e,i,s,a,r,o,h){return n("C",{x1:+t,y1:+e,x2:+i,y2:+s,x:+a,y:+r},this.pathElements,this.pos++,o,h),this}function c(t,e,i,s,a,r,o,h,l){return n("A",{rx:+t,ry:+e,xAr:+i,lAf:+s,sf:+a,x:+r,y:+o},this.pathElements,this.pos++,h,l),this}function d(t){var e=t.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(t,e){return e.match(/[A-Za-z]/)&&t.push([]),t[t.length-1].push(e),t},[]);"Z"===e[e.length-1][0].toUpperCase()&&e.pop();var n=e.map(function(t){var e=t.shift(),n=w[e.toLowerCase()];return i.extend({command:e},n.reduce(function(e,i,n){return e[i]=+t[n],e},{}))}),s=[this.pos,0];return Array.prototype.push.apply(s,n),Array.prototype.splice.apply(this.pathElements,s),this.pos+=n.length,this}function p(){var t=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(e,i){var n=w[i.command.toLowerCase()].map(function(e){return this.options.accuracy?Math.round(i[e]*t)/t:i[e]}.bind(this));return e+i.command+n.join(",")}.bind(this),"")+(this.close?"Z":"")}function f(t,e){return s(this.pathElements,function(i,n){i[n]*="x"===n[0]?t:e}),this}function x(t,e){return s(this.pathElements,function(i,n){i[n]+="x"===n[0]?t:e}),this}function m(t){return s(this.pathElements,function(e,i,n,s,a){var r=t(e,i,n,s,a);(r||0===r)&&(e[i]=r)}),this}function g(t){var e=new i.Svg.Path(t||this.close);return e.pos=this.pos,e.pathElements=this.pathElements.slice().map(function(t){return i.extend({},t)}),e.options=i.extend({},this.options),e}function v(t){var e=[new i.Svg.Path];return this.pathElements.forEach(function(n){n.command===t.toUpperCase()&&0!==e[e.length-1].pathElements.length&&e.push(new i.Svg.Path),e[e.length-1].pathElements.push(n)}),e}function y(t,e,n){for(var s=new i.Svg.Path(e,n),a=0;a<t.length;a++)for(var r=t[a],o=0;o<r.pathElements.length;o++)s.pathElements.push(r.pathElements[o]);return s}var w={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},b={accuracy:3};i.Svg.Path=i.Class.extend({constructor:a,position:r,remove:o,move:h,line:l,curve:u,arc:c,scale:f,translate:x,transform:m,parse:d,stringify:p,clone:g,splitByCommand:v}),i.Svg.Path.elementDescriptions=w,i.Svg.Path.join=y}(window,document,t),function(t,e,i){"use strict";function n(t,e,i,n){this.units=t,this.counterUnits=t===a.x?a.y:a.x,this.chartRect=e,this.axisLength=e[t.rectEnd]-e[t.rectStart],this.gridOffset=e[t.rectOffset],this.ticks=i,this.options=n}function s(t,e,n,s,a){var r=s["axis"+this.units.pos.toUpperCase()],o=this.ticks.map(this.projectValue.bind(this)),h=this.ticks.map(r.labelInterpolationFnc);o.forEach(function(l,u){var c,d={x:0,y:0};c=o[u+1]?o[u+1]-l:Math.max(this.axisLength-l,30),(h[u]||0===h[u])&&("x"===this.units.pos?(l=this.chartRect.x1+l,d.x=s.axisX.labelOffset.x,"start"===s.axisX.position?d.y=this.chartRect.padding.top+s.axisX.labelOffset.y+(n?5:20):d.y=this.chartRect.y1+s.axisX.labelOffset.y+(n?5:20)):(l=this.chartRect.y1-l,d.y=s.axisY.labelOffset.y-(n?c:0),"start"===s.axisY.position?d.x=n?this.chartRect.padding.left+s.axisY.labelOffset.x:this.chartRect.x1-10:d.x=this.chartRect.x2+s.axisY.labelOffset.x+10),r.showGrid&&i.createGrid(l,u,this,this.gridOffset,this.chartRect[this.counterUnits.len](),t,[s.classNames.grid,s.classNames[this.units.dir]],a),r.showLabel&&i.createLabel(l,c,u,h,this,r.offset,d,e,[s.classNames.label,s.classNames[this.units.dir],s.classNames[r.position]],n,a))}.bind(this))}var a={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};i.Axis=i.Class.extend({constructor:n,createGridAndLabels:s,projectValue:function(t,e,i){throw new Error("Base axis can't be instantiated!")}}),i.Axis.units=a}(window,document,t),function(t,e,i){"use strict";function n(t,e,n,a){var r=a.highLow||i.getHighLow(e.normalized,a,t.pos);this.bounds=i.getBounds(n[t.rectEnd]-n[t.rectStart],r,a.scaleMinSpace||20,a.onlyInteger);var o=a.scale||"linear",h=o.match(/^([a-z]+)(\d+)?$/);if(this.scale={type:h[1],base:Number(h[2])},"log"===this.scale.type){var l=this.scale.base,u=Math.floor(s(this.bounds.low,l)),c=Math.ceil(s(this.bounds.high,l));this.bounds.min=Math.pow(l,u),this.bounds.max=Math.pow(l,c),this.bounds.values=[];for(var d=u;c>=d;++d)this.bounds.values.push(Math.pow(l,d))}i.AutoScaleAxis["super"].constructor.call(this,t,n,this.bounds.values,a)}function s(t,e){return Math.log(t)/Math.log(e)}function a(t){var e=+i.getMultiValue(t,this.units.pos);if("log"===this.scale.type){var n=this.bounds.max,a=this.bounds.min,r=this.scale.base;return this.axisLength/s(n/a,r)*s(e/a,r)}return this.axisLength*(e-this.bounds.min)/this.bounds.range}i.AutoScaleAxis=i.Axis.extend({constructor:n,projectValue:a})}(window,document,t),function(t,e,i){"use strict";function n(t,e,n,s){var a=s.highLow||i.getHighLow(e.normalized,s,t.pos);this.divisor=s.divisor||1,this.ticks=s.ticks||i.times(this.divisor).map(function(t,e){return a.low+(a.high-a.low)/this.divisor*e}.bind(this)),this.range={min:a.low,max:a.high},i.FixedScaleAxis["super"].constructor.call(this,t,n,this.ticks,s),this.stepLength=this.axisLength/this.divisor}function s(t){return this.axisLength*(+i.getMultiValue(t,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}i.FixedScaleAxis=i.Axis.extend({constructor:n,projectValue:s})}(window,document,t),function(t,e,i){"use strict";function n(t,e,n,s){i.StepAxis["super"].constructor.call(this,t,n,s.ticks,s),this.stepLength=this.axisLength/(s.ticks.length-(s.stretch?1:0))}function s(t,e){return this.stepLength*e}i.StepAxis=i.Axis.extend({constructor:n,projectValue:s})}(window,document,t),function(t,e,i){"use strict";function n(t){var e={raw:this.data,normalized:i.getDataArray(this.data,t.reverseData,!0)};this.svg=i.createSvg(this.container,t.width,t.height,t.classNames.chart);var n,s,r=this.svg.elem("g").addClass(t.classNames.gridGroup),o=this.svg.elem("g"),h=this.svg.elem("g").addClass(t.classNames.labelGroup),l=i.createChartRect(this.svg,t,a.padding);n=void 0===t.axisX.type?new i.StepAxis(i.Axis.units.x,e,l,i.extend({},t.axisX,{ticks:e.raw.labels,stretch:t.fullWidth})):t.axisX.type.call(i,i.Axis.units.x,e,l,t.axisX),s=void 0===t.axisY.type?new i.AutoScaleAxis(i.Axis.units.y,e,l,i.extend({},t.axisY,{high:i.isNum(t.high)?t.high:t.axisY.high,low:i.isNum(t.low)?t.low:t.axisY.low})):t.axisY.type.call(i,i.Axis.units.y,e,l,t.axisY),n.createGridAndLabels(r,h,this.supportsForeignObject,t,this.eventEmitter),s.createGridAndLabels(r,h,this.supportsForeignObject,t,this.eventEmitter),e.raw.series.forEach(function(a,r){var h=o.elem("g");h.attr({"series-name":a.name,meta:i.serialize(a.meta)},i.xmlNs.uri),h.addClass([t.classNames.series,a.className||t.classNames.series+"-"+i.alphaNumerate(r)].join(" "));var u=[],c=[];e.normalized[r].forEach(function(t,o){var h={x:l.x1+n.projectValue(t,o,e.normalized[r]),y:l.y1-s.projectValue(t,o,e.normalized[r])};u.push(h.x,h.y),c.push({value:t,valueIndex:o,meta:i.getMetaData(a,o)})}.bind(this));var d={lineSmooth:i.getSeriesOption(a,t,"lineSmooth"),showPoint:i.getSeriesOption(a,t,"showPoint"),showLine:i.getSeriesOption(a,t,"showLine"),showArea:i.getSeriesOption(a,t,"showArea"),areaBase:i.getSeriesOption(a,t,"areaBase")},p="function"==typeof d.lineSmooth?d.lineSmooth:d.lineSmooth?i.Interpolation.cardinal():i.Interpolation.none(),f=p(u,c);if(d.showPoint&&f.pathElements.forEach(function(e){var o=h.elem("line",{x1:e.x,y1:e.y,x2:e.x+.01,y2:e.y},t.classNames.point).attr({value:[e.data.value.x,e.data.value.y].filter(function(t){return t}).join(","),meta:e.data.meta},i.xmlNs.uri);this.eventEmitter.emit("draw",{type:"point",value:e.data.value,index:e.data.valueIndex,meta:e.data.meta,series:a,seriesIndex:r,axisX:n,axisY:s,group:h,element:o,x:e.x,y:e.y})}.bind(this)),d.showLine){var x=h.elem("path",{d:f.stringify()},t.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:e.normalized[r],path:f.clone(),chartRect:l,index:r,series:a,seriesIndex:r,axisX:n,axisY:s,group:h,element:x})}if(d.showArea&&s.range){var m=Math.max(Math.min(d.areaBase,s.range.max),s.range.min),g=l.y1-s.projectValue(m);f.splitByCommand("M").filter(function(t){return t.pathElements.length>1}).map(function(t){var e=t.pathElements[0],i=t.pathElements[t.pathElements.length-1];return t.clone(!0).position(0).remove(1).move(e.x,g).line(e.x,e.y).position(t.pathElements.length+1).line(i.x,g)}).forEach(function(o){var u=h.elem("path",{d:o.stringify()},t.classNames.area,!0).attr({values:e.normalized[r]},i.xmlNs.uri);this.eventEmitter.emit("draw",{type:"area",values:e.normalized[r],path:o.clone(),series:a,seriesIndex:r,axisX:n,axisY:s,chartRect:l,index:r,group:h,element:u})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:s.bounds,chartRect:l,axisX:n,axisY:s,svg:this.svg,options:t})}function s(t,e,n,s){i.Line["super"].constructor.call(this,t,e,a,i.extend({},a,n),s)}var a={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:i.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:i.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};i.Line=i.Base.extend({constructor:s,createChart:n})}(window,document,t),function(t,e,i){"use strict";function n(t){var e,n={raw:this.data,normalized:t.distributeSeries?i.getDataArray(this.data,t.reverseData,t.horizontalBars?"x":"y").map(function(t){return[t]}):i.getDataArray(this.data,t.reverseData,t.horizontalBars?"x":"y")};this.svg=i.createSvg(this.container,t.width,t.height,t.classNames.chart+(t.horizontalBars?" "+t.classNames.horizontalBars:""));var s=this.svg.elem("g").addClass(t.classNames.gridGroup),r=this.svg.elem("g"),o=this.svg.elem("g").addClass(t.classNames.labelGroup);if(t.stackBars){var h=i.serialMap(n.normalized,function(){return Array.prototype.slice.call(arguments).map(function(t){return t}).reduce(function(t,e){return{x:t.x+e.x||0,y:t.y+e.y||0}},{x:0,y:0})});e=i.getHighLow([h],i.extend({},t,{referenceValue:0}),t.horizontalBars?"x":"y")}else e=i.getHighLow(n.normalized,i.extend({},t,{referenceValue:0}),t.horizontalBars?"x":"y");e.high=+t.high||(0===t.high?0:e.high),e.low=+t.low||(0===t.low?0:e.low);var l,u,c,d,p,f=i.createChartRect(this.svg,t,a.padding);u=t.distributeSeries&&t.stackBars?n.raw.labels.slice(0,1):n.raw.labels,t.horizontalBars?(l=d=void 0===t.axisX.type?new i.AutoScaleAxis(i.Axis.units.x,n,f,i.extend({},t.axisX,{highLow:e,referenceValue:0})):t.axisX.type.call(i,i.Axis.units.x,n,f,i.extend({},t.axisX,{highLow:e,referenceValue:0})),c=p=void 0===t.axisY.type?new i.StepAxis(i.Axis.units.y,n,f,{ticks:u}):t.axisY.type.call(i,i.Axis.units.y,n,f,t.axisY)):(c=d=void 0===t.axisX.type?new i.StepAxis(i.Axis.units.x,n,f,{ticks:u}):t.axisX.type.call(i,i.Axis.units.x,n,f,t.axisX),l=p=void 0===t.axisY.type?new i.AutoScaleAxis(i.Axis.units.y,n,f,i.extend({},t.axisY,{highLow:e,referenceValue:0})):t.axisY.type.call(i,i.Axis.units.y,n,f,i.extend({},t.axisY,{highLow:e,referenceValue:0})));var x=t.horizontalBars?f.x1+l.projectValue(0):f.y1-l.projectValue(0),m=[];c.createGridAndLabels(s,o,this.supportsForeignObject,t,this.eventEmitter),l.createGridAndLabels(s,o,this.supportsForeignObject,t,this.eventEmitter),n.raw.series.forEach(function(e,s){var a,o,h=s-(n.raw.series.length-1)/2;a=t.distributeSeries&&!t.stackBars?c.axisLength/n.normalized.length/2:t.distributeSeries&&t.stackBars?c.axisLength/2:c.axisLength/n.normalized[s].length/2,o=r.elem("g"),o.attr({"series-name":e.name,meta:i.serialize(e.meta)},i.xmlNs.uri),o.addClass([t.classNames.series,e.className||t.classNames.series+"-"+i.alphaNumerate(s)].join(" ")),n.normalized[s].forEach(function(r,u){var g,v,y,w;if(w=t.distributeSeries&&!t.stackBars?s:t.distributeSeries&&t.stackBars?0:u,g=t.horizontalBars?{x:f.x1+l.projectValue(r&&r.x?r.x:0,u,n.normalized[s]),y:f.y1-c.projectValue(r&&r.y?r.y:0,w,n.normalized[s])}:{x:f.x1+c.projectValue(r&&r.x?r.x:0,w,n.normalized[s]),y:f.y1-l.projectValue(r&&r.y?r.y:0,u,n.normalized[s])},c instanceof i.StepAxis&&(c.options.stretch||(g[c.units.pos]+=a*(t.horizontalBars?-1:1)),g[c.units.pos]+=t.stackBars||t.distributeSeries?0:h*t.seriesBarDistance*(t.horizontalBars?-1:1)),y=m[u]||x,m[u]=y-(x-g[c.counterUnits.pos]),void 0!==r){var b={};b[c.units.pos+"1"]=g[c.units.pos],
b[c.units.pos+"2"]=g[c.units.pos],b[c.counterUnits.pos+"1"]=t.stackBars?y:x,b[c.counterUnits.pos+"2"]=t.stackBars?m[u]:g[c.counterUnits.pos],b.x1=Math.min(Math.max(b.x1,f.x1),f.x2),b.x2=Math.min(Math.max(b.x2,f.x1),f.x2),b.y1=Math.min(Math.max(b.y1,f.y2),f.y1),b.y2=Math.min(Math.max(b.y2,f.y2),f.y1),v=o.elem("line",b,t.classNames.bar).attr({value:[r.x,r.y].filter(function(t){return t}).join(","),meta:i.getMetaData(e,u)},i.xmlNs.uri),this.eventEmitter.emit("draw",i.extend({type:"bar",value:r,index:u,meta:i.getMetaData(e,u),series:e,seriesIndex:s,axisX:d,axisY:p,chartRect:f,group:o,element:v},b))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:l.bounds,chartRect:f,axisX:d,axisY:p,svg:this.svg,options:t})}function s(t,e,n,s){i.Bar["super"].constructor.call(this,t,e,a,i.extend({},a,n),s)}var a={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:i.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:i.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,onlyInteger:!1,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,horizontalBars:!1,distributeSeries:!1,reverseData:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};i.Bar=i.Base.extend({constructor:s,createChart:n})}(window,document,t),function(t,e,i){"use strict";function n(t,e,i){var n=e.x>t.x;return n&&"explode"===i||!n&&"implode"===i?"start":n&&"implode"===i||!n&&"explode"===i?"end":"middle"}function s(t){var e,s,a,o,h,l=[],u=t.startAngle,c=i.getDataArray(this.data,t.reverseData);this.svg=i.createSvg(this.container,t.width,t.height,t.donut?t.classNames.chartDonut:t.classNames.chartPie),s=i.createChartRect(this.svg,t,r.padding),a=Math.min(s.width()/2,s.height()/2),h=t.total||c.reduce(function(t,e){return t+e},0),a-=t.donut?t.donutWidth/2:0,o="outside"===t.labelPosition||t.donut?a:"center"===t.labelPosition?0:a/2,o+=t.labelOffset;var d={x:s.x1+s.width()/2,y:s.y2+s.height()/2},p=1===this.data.series.filter(function(t){return t.hasOwnProperty("value")?0!==t.value:0!==t}).length;t.showLabel&&(e=this.svg.elem("g",null,null,!0));for(var f=0;f<this.data.series.length;f++){var x=this.data.series[f];l[f]=this.svg.elem("g",null,null,!0),l[f].attr({"series-name":x.name},i.xmlNs.uri),l[f].addClass([t.classNames.series,x.className||t.classNames.series+"-"+i.alphaNumerate(f)].join(" "));var m=u+c[f]/h*360;m-u===360&&(m-=.01);var g=i.polarToCartesian(d.x,d.y,a,u-(0===f||p?0:.2)),v=i.polarToCartesian(d.x,d.y,a,m),y=new i.Svg.Path(!t.donut).move(v.x,v.y).arc(a,a,0,m-u>180,0,g.x,g.y);t.donut||y.line(d.x,d.y);var w=l[f].elem("path",{d:y.stringify()},t.donut?t.classNames.sliceDonut:t.classNames.slicePie);if(w.attr({value:c[f],meta:i.serialize(x.meta)},i.xmlNs.uri),t.donut&&w.attr({style:"stroke-width: "+ +t.donutWidth+"px"}),this.eventEmitter.emit("draw",{type:"slice",value:c[f],totalDataSum:h,index:f,meta:x.meta,series:x,group:l[f],element:w,path:y.clone(),center:d,radius:a,startAngle:u,endAngle:m}),t.showLabel){var b=i.polarToCartesian(d.x,d.y,o,u+(m-u)/2),E=t.labelInterpolationFnc(this.data.labels?this.data.labels[f]:c[f],f);if(E||0===E){var A=e.elem("text",{dx:b.x,dy:b.y,"text-anchor":n(d,b,t.labelDirection)},t.classNames.label).text(""+E);this.eventEmitter.emit("draw",{type:"label",index:f,group:e,element:A,text:""+E,x:b.x,y:b.y})}}u=m}this.eventEmitter.emit("created",{chartRect:s,svg:this.svg,options:t})}function a(t,e,n,s){i.Pie["super"].constructor.call(this,t,e,r,i.extend({},r,n),s)}var r={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:i.noop,labelDirection:"neutral",reverseData:!1};i.Pie=i.Base.extend({constructor:a,createChart:s,determineAnchorPosition:n})}(window,document,t),t}),function(t,e,i){"use strict";var n={axisTitle:"",axisClass:"ct-axis-title",offset:{x:0,y:0},textAnchor:"middle",flipText:!1},s={axisX:i.extend({},n),axisY:i.extend({},n)};s.axisX.offset.y=40,s.axisY.offset.y=-1,i.plugins=i.plugins||{},i.plugins.ctAxisTitle=function(t){return t=i.extend({},s,t),function(e){e.on("created",function(e){if(!t.axisX.axisTitle&&!t.axisY.axisTitle)throw new Error("ctAxisTitle plugin - You must provide at least one axis title");if(!e.axisX&&!e.axisY)throw new Error("ctAxisTitle plugin can only be used on charts that have at least one axis");var n,s,a;if(t.axisX.axisTitle&&e.axisX&&(n=e.axisX.axisLength/2+e.options.axisY.offset+e.options.chartPadding.left,s=e.options.chartPadding.top,"end"===e.options.axisY.position&&(n-=e.options.axisY.offset),"end"===e.options.axisX.position&&(s+=e.axisY.axisLength),a=new i.Svg("text"),a.addClass(t.axisX.axisClass),a.text(t.axisX.axisTitle),a.attr({x:n+t.axisX.offset.x,y:s+t.axisX.offset.y,"text-anchor":t.axisX.textAnchor}),e.svg.append(a,!0)),t.axisY.axisTitle&&e.axisY){n=0,s=e.axisY.axisLength/2+e.options.chartPadding.top,"start"===e.options.axisX.position&&(s+=e.options.axisX.offset),"end"===e.options.axisY.position&&(n=e.axisX.axisLength);var r="rotate("+(t.axisY.flipTitle?-90:90)+", "+n+", "+s+")";a=new i.Svg("text"),a.addClass(t.axisY.axisClass),a.text(t.axisY.axisTitle),a.attr({x:n+t.axisY.offset.x,y:s+t.axisY.offset.y,transform:r,"text-anchor":t.axisY.textAnchor}),e.svg.append(a,!0)}})}}}(window,document,Chartist),function(t,e,i){"use strict";var n={labelClass:"ct-label",labelOffset:{x:0,y:-10},textAnchor:"middle",labelInterpolationFnc:i.noop};i.plugins=i.plugins||{},i.plugins.ctPointLabels=function(t){return t=i.extend({},n,t),function(e){e instanceof i.Line&&e.on("draw",function(e){"point"===e.type&&e.group.elem("text",{x:e.x+t.labelOffset.x,y:e.y+t.labelOffset.y,style:"text-anchor: "+t.textAnchor},t.labelClass).text(t.labelInterpolationFnc(void 0===e.value.x?e.value.y:e.value.x+", "+e.value.y))})}}}(window,document,Chartist);