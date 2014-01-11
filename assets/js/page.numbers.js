/* © 2011-2013 33cube, Inc. All rights reserved. */

// Underscore.js 1.5.2, copyright 2009-2013 Jeremy Ashkenas, licensed under MIT
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);

// jQuery Easing v1.3, copyright 2001 Robert Penner, licensed under BSD
// Easing Functions, copyright 2001 Robert Penner
(function(j) {j.easing["jswing"]=j.easing["swing"];j.extend(j.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return j.easing[j.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b}});})(jQuery);

// jQuery ScrollTo v1.4.7, copyright 2007-2013 Ariel Flesler, licensed under MIT
(function(d){function h(b){return"object"==typeof b?b:{top:b,left:b}}var n=d.scrollTo=function(b,c,a){return d(window).scrollTo(b,c,a)};n.defaults={axis:"xy",duration:1.3<=parseFloat(d.fn.jquery)?0:1,limit:!0};n.window=function(b){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==d.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"]))return this;var b=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)|| "BackCompat"==b.compatMode?b.body:b.documentElement})};d.fn.scrollTo=function(b,c,a){"object"==typeof c&&(a=c,c=0);"function"==typeof a&&(a={onAfter:a});"max"==b&&(b=9E9);a=d.extend({},n.defaults,a);c=c||a.duration;a.queue=a.queue&&1<a.axis.length;a.queue&&(c/=2);a.offset=h(a.offset);a.over=h(a.over);return this._scrollable().each(function(){function q(b){k.animate(e,c,a.easing,b&&function(){b.call(this,g,a)})}if(null!=b){var l=this,k=d(l),g=b,p,e={},s=k.is("html,body");switch(typeof g){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(g)){g= h(g);break}g=d(g,this);if(!g.length)return;case "object":if(g.is||g.style)p=(g=d(g)).offset()}d.each(a.axis.split(""),function(b,d){var c="x"==d?"Left":"Top",m=c.toLowerCase(),f="scroll"+c,h=l[f],r=n.max(l,d);p?(e[f]=p[m]+(s?0:h-k.offset()[m]),a.margin&&(e[f]-=parseInt(g.css("margin"+c))||0,e[f]-=parseInt(g.css("border"+c+"Width"))||0),e[f]+=a.offset[m]||0,a.over[m]&&(e[f]+=g["x"==d?"width":"height"]()*a.over[m])):(c=g[m],e[f]=c.slice&&"%"==c.slice(-1)?parseFloat(c)/100*r:c);a.limit&&/^\d+$/.test(e[f])&& (e[f]=0>=e[f]?0:Math.min(e[f],r));!b&&a.queue&&(h!=e[f]&&q(a.onAfterFirst),delete e[f])});q(a.onAfter)}}).end()};n.max=function(b,c){var a="x"==c?"Width":"Height",h="scroll"+a;if(!d(b).is("html,body"))return b[h]-d(b)[a.toLowerCase()]();var a="client"+a,l=b.ownerDocument.documentElement,k=b.ownerDocument.body;return Math.max(l[h],k[h])-Math.min(l[a],k[a])}})(jQuery);

$(function() {
  var $window = $(window),
      $sections = $("#main").find("section"),
      $navUl = $("#sectionNav").find("ul"),
      $navLinks,
      updateSectionsOnChange = true,
      mainTop = $("#main").offset().top;

  function switchToSection(id) {
    var $section = $sections.filter("[id='"+id+"']"),
        currentScroll;

    if ($section.length && !$section.hasClass("selected")) {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, "#"+id);
      }

      // Toggle classes
      $sections.filter(".selected").removeClass("selected");
      $section.addClass("selected");
      $navLinks.filter(".selected").removeClass("selected");
      $navLinks.filter("[href='#"+id+"']").addClass("selected");

      return $section;
    } else {
      return false;
    }
  }

  // Set up nav
  $sections.each(function() {
    var $section = $(this),
        $el,
        id = $section.attr("id");

    $el = $("<li/>").append($("<a/>", {
      href : "#" + id,
      html : $section.attr("data-navtext")
    })).appendTo($navUl);

    $el.on("click", function(e) {
      var $th = $(this),
          $section = switchToSection(id);

      if (!!$section) {
        setTimeout(function() {
          updateSectionsOnChange = false;

          $.scrollTo($section, {
            duration : 500,
            easing : "easeInOutQuad",
            offset : {
                top : Math.round($window.height() / -4)
              },
            onAfter : function() {
                updateSectionsOnChange = true;
              }
          });
        }, 0);
      }

      e.preventDefault();
    });
  });

  $navLinks = $navUl.find("a");

  $window.on("scroll resize orientationchange", function() {
    var scrollTop = $window.scrollTop(),
        windowHeight,
        documentHeight,
        thirdLine,
        $sectionToSelect;

    // $("#sectionNav").css("top", scrollTop > mainTop ? scrollTop - mainTop : 0);
    $("#sectionNav").toggleClass("sticky", scrollTop > mainTop);

    if (updateSectionsOnChange) {
      windowHeight = $window.height();
      documentHeight = $(document).height();

      if (scrollTop + windowHeight >= $(document).height()) {
        $sectionToSelect = $sections.last();
      } else {
        thirdLine = scrollTop + Math.round(windowHeight / 4);

        $sections.each(function() {
          var $th = $(this);

          if ($th.offset().top <= thirdLine) {
            $sectionToSelect = $th;
          } else {
            return false;
          }
        });
      }

      if (!!$sectionToSelect) {
        switchToSection($sectionToSelect.attr("id"));
      }
    }
  });

  // Expandoids
  $(".expandoid").each(function() {
    var $th = $(this);

    $th.find(".expandoid-expand").one("click", function() {
      $th.find(".expandoid-window").css("height", $th.find(".expandoid-content").outerHeight());
      $th.addClass("expanded");
    });
  });

  // Graphs
  $(".graph[data-json]").each(function() {
    var $th = $(this),
        type = $th.data("type"),
        scale = $th.data("scale"),
        isSideBySide = $th.data("sidebyside") !== undefined,
        isFilled = $th.data("filled") !== undefined,
        usesPercentages = $th.data("percentages") !== undefined,
        json = $th.data("json"),
        numSeries = 0,
        formattedData = [],
        barsOverrides = {},
        lineOverrides = {},
        xaxisOverrides = {},
        yaxisOverrides = {},
        $plot = $th.find(".graph-content"),
        $legend = $th.find(".graph-legend"),
        $tooltip = $th.find(".graph-tooltip"),
        tooltipItemSeriesIndex,
        tooltipItemDataIndex;

    $.each(json, function(key, value) {
      numSeries++;

      formattedData.push({
        label : key,
        color : numSeries - 1,
        bars : {
            order : isSideBySide ? numSeries : null
          },
        data : value
      });
    });

    if (scale === "months") {
      xaxisOverrides = {
        mode : "time",
        timeformat : "%b %Y",
        minTickSize : [1, "month"]
      };

      if (type === "bars") {
        if (isSideBySide) {
          barsOverrides.barWidth = 7*24*60*60*1000;
        } else {
          barsOverrides.barWidth = 16*24*60*60*1000;
        }
      }
    } else if (scale === "weeks") {
      xaxisOverrides = {
        mode : "time",
        timeformat : "%b %Y",
        minTickSize : [7, "day"]
      };

      if (type === "bars") {
        if (isSideBySide) {
          barsOverrides.barWidth = 1*24*60*60*1000;
        } else {
          barsOverrides.barWidth = 3*24*60*60*1000;
        }
      }
    } else if (scale === "days") {
      xaxisOverrides = {
        mode : "time",
        timeformat : "%b %Y",
        minTickSize : [1, "day"]
      };

      if (type === "bars") {
        if (isSideBySide) {
          barsOverrides.barWidth = 4*60*60*1000;
        } else {
          barsOverrides.barWidth = 12*60*60*1000;
        }
      }
    } else if (scale === "percentiles") {
      xaxisOverrides = {
        min : 0,
        max : 1,
        tickSize : 0.1,
        tickFormatter : function(tick) {
            return Math.round(100 * tick) + "%";
          }
      };

      if (type === "bars") {
        if (isSideBySide) {
          barsOverrides.barWidth = 0.5;
        } else {
          barsOverrides.barWidth = 1;
        }
      }
    }

    if (usesPercentages) {
      yaxisOverrides.tickFormatter = function(tick) {
        return Math.round(100 * tick) + "%";
      };
    }

    $plot.plot(formattedData, {
      series : {
          stack : !isSideBySide,
          bars : $.extend(true, {
              show : type === "bars",
              fill : 1
            }, barsOverrides),
          lines : $.extend(true, {
              show : type === "lines",
              fill : isFilled ? 1 : 0
            }, lineOverrides),
          shadowSize : 0
        },
      xaxis : $.extend(true, {
          tickLength : 0,
          font : {
              color : "#000"
            }
        }, xaxisOverrides),
      yaxis : $.extend(true, {
          tickColor : "#ccc",
          font : {
              color : "#000"
            }
        }, yaxisOverrides),
      grid : {
          margin : {
              top : 0,
              right : 0,
              bottom : 0,
              left : 5
            },
          labelMargin : 10,
          axisMargin : 0,
          borderWidth : {
              top : 0,
              right : 0,
              bottom : 1,
              left : 0
            },
          borderColor : "#000",
          hoverable : true
        },
      legend : {
          show : numSeries > 1,
          noColumns : Math.min(numSeries,4),
          container : $legend
        },
      colors : [
          "#e57300",
          "#e4c951",
          "#899ab3",
          "#7f739f",
          "#84bcbb",
          "#a0a983",
          "#b1796b",
          "#e09f66"
        ]
    });

    $plot.on("plothover", function(e, pos, item) {
      var itemX,
          itemY,
          plotOffset,
          tipWd,
          tipHt;

      if (!item) {
        tooltipItemSeriesIndex = undefined;
        tooltipItemDataIndex = undefined;

        $tooltip.removeClass("visible").css({
          top : 0,
          left : 0
        });
      } else if (tooltipItemSeriesIndex !== item.seriesIndex || tooltipItemDataIndex !== item.dataIndex) {
        tooltipItemSeriesIndex = item.seriesIndex;
        tooltipItemDataIndex = item.dataIndex;

        itemX = item.series.data[item.dataIndex][0];
        itemY = item.series.data[item.dataIndex][1];

        $tooltip.find(".graph-tooltip-series").html(item.series.label).toggleClass("hidden", numSeries === 1);
        $tooltip.find(".graph-tooltip-label").html(item.series.xaxis.tickFormatter(itemX, item.series.xaxis));
        $tooltip.find(".graph-tooltip-value").html(itemY);

        plotOffset = $plot.offset();

        tipWd = $tooltip.outerWidth();
        tipHt = $tooltip.outerHeight();

        $tooltip.css({
          top : item.pageY - plotOffset.top - tipHt,
          left : item.pageX - plotOffset.left - (tipWd / 2)
        }).addClass("visible");
      }
    });

    if (numSeries === 1) {
      $legend.addClass("hidden");
    }
  });
});

function formatForFlot(inputData, seriesNames, precision) {
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      REGEX_DATE = /Date\((\d{4}),(\d{1,2}),(\d{1,2})\)/,
      dataPoints = _(inputData).pluck("c"),
      seriesData = [],
      outputData;

  // Set up output series
  _.times(seriesNames.length, function() {
    seriesData.push([]);
  });


  _(dataPoints).each(function(dataPoint) {
    var key = _(dataPoint).first()["v"],
        values = _(dataPoint).chain().rest().pluck("v").value(),
        datePieces;

    // Parse the key
    if (!_(key).isNumber()) {
      datePieces = key.match(REGEX_DATE);

      if (datePieces !== null) {
        key = Date.UTC(datePieces[1], datePieces[2], datePieces[3]);
      } else {
        datePieces = key.split("-");
        key = Date.UTC(2000 + parseInt(datePieces[1]), _(MONTHS).indexOf(datePieces[0]));
      }
    }

    // Make a data pair for each value
    _(values).each(function(value, index) {
      if (!!precision) {
        value = parseFloat(value.toFixed(+precision));
      } else {
        value = Math.round(value);
      }
      seriesData[index].push([key, value]);
    });
  });

  // Map seriesData to seriesNames
  outputData = _(seriesNames).object(seriesData);

  return JSON.stringify(outputData).replace(/00000,/g, 'e5,');
}

