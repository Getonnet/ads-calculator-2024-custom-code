(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&f(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(o){if(o.ep)return;o.ep=!0;const d=n(o);fetch(o.href,d)}})();function gt(t){$(".marketing-calc_content-wrapper .main-button").on("click",function(){t.slideNext()})}function St(t){function e(){const n=$(".marketing-calc_content-wrapper_page-2 input:checked"),f=$(this).closest("label");n.length>0&&(f.animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50),setTimeout(()=>{t.slideTo(2)},800))}$(".marketing-calc_content-wrapper_page-2 label").on("click",e)}function wt(t){$(".marketing-calc_content-wrapper_page-3 label").on("click",function(e){e.preventDefault(),e.stopImmediatePropagation();const n=$(this).find("input");n.prop("checked",!n.prop("checked")),n.prop("checked")?n.prev().addClass("w--redirected-checked"):n.prev().removeClass("w--redirected-checked"),n.attr("name")==="platform-others"&&n.is(":checked")?$(this).closest("form").find("input[type='checkbox']").not(n).prop("checked",!1).prev().removeClass("w--redirected-checked"):n.attr("name")!=="platform-others"&&n.is(":checked")&&$(this).closest("form").find("input[name='platform-others']").prop("checked",!1).prev().removeClass("w--redirected-checked")}),$(".marketing-calc_content-wrapper_page-3 .main-button").on("click",function(e){if(e.preventDefault(),$(".marketing-calc_content-wrapper_page-3 input:checked").length===0)throw new Error("Please select at least one option");t.slideNext()})}function bt(t){const e=$(".marketing-calc_content-wrapper_page-4 .price-range");t.on("slideChange",function(){t.activeIndex===3&&(setTimeout(function(){typeof window.fsAttributes<"u"&&window.fsAttributes.rangeslider.init()},1e3),$(window).trigger("resize"))}),$(".fs-rangeslider_input").on("input",function(){const n=$(this).val();e.text(`${n} Kr`)}),$(".marketing-calc_content-wrapper_page-4 .main-button").on("click",function(n){n.preventDefault(),t.slideNext()})}function xt(t){$(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click",function(e){e.preventDefault(),t.slideNext()})}var j;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(j||(j={}));var M;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(M||(M={}));function Ct(t){return Z(t)&&typeof t.from=="function"}function Z(t){return typeof t=="object"&&typeof t.to=="function"}function Oe(t){t.parentElement.removeChild(t)}function ve(t){return t!=null}function Ue(t){t.preventDefault()}function Et(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function kt(t,e){return Math.round(t/e)*e}function Pt(t,e){var n=t.getBoundingClientRect(),f=t.ownerDocument,o=f.documentElement,d=Ne(f);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(d.x=0),e?n.top+d.y-o.clientTop:n.left+d.x-o.clientLeft}function H(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function He(t,e,n){n>0&&(L(t,e),setTimeout(function(){Q(t,e)},n))}function Re(t){return Math.max(Math.min(t,100),0)}function ee(t){return Array.isArray(t)?t:[t]}function At(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function L(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function Q(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function yt(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function Ne(t){var e=window.pageXOffset!==void 0,n=(t.compatMode||"")==="CSS1Compat",f=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,o=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:f,y:o}}function Dt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Vt(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function _t(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function ge(t,e){return 100/(e-t)}function me(t,e,n){return e*100/(t[n+1]-t[n])}function Lt(t,e){return me(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function Mt(t,e){return e*(t[1]-t[0])/100+t[0]}function q(t,e){for(var n=1;t>=e[n];)n+=1;return n}function Ot(t,e,n){if(n>=t.slice(-1)[0])return 100;var f=q(n,t),o=t[f-1],d=t[f],p=e[f-1],m=e[f];return p+Lt([o,d],n)/ge(p,m)}function Ut(t,e,n){if(n>=100)return t.slice(-1)[0];var f=q(n,e),o=t[f-1],d=t[f],p=e[f-1],m=e[f];return Mt([o,d],(n-p)*ge(p,m))}function Ht(t,e,n,f){if(f===100)return f;var o=q(f,t),d=t[o-1],p=t[o];return n?f-d>(p-d)/2?p:d:e[o-1]?t[o-1]+kt(f-t[o-1],e[o-1]):f}var je=function(){function t(e,n,f){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[f||!1],this.xNumSteps=[!1],this.snap=n;var o,d=[];for(Object.keys(e).forEach(function(p){d.push([ee(e[p]),p])}),d.sort(function(p,m){return p[0][0]-m[0][0]}),o=0;o<d.length;o++)this.handleEntryPoint(d[o][1],d[o][0]);for(this.xNumSteps=this.xSteps.slice(0),o=0;o<this.xNumSteps.length;o++)this.handleStepPoint(o,this.xNumSteps[o])}return t.prototype.getDistance=function(e){for(var n=[],f=0;f<this.xNumSteps.length-1;f++)n[f]=me(this.xVal,e,f);return n},t.prototype.getAbsoluteDistance=function(e,n,f){var o=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[o+1];)o++;else e===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);!f&&e===this.xPct[o+1]&&o++,n===null&&(n=[]);var d,p=1,m=n[o],v=0,E=0,U=0,y=0;for(f?d=(e-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):d=(this.xPct[o+1]-e)/(this.xPct[o+1]-this.xPct[o]);m>0;)v=this.xPct[o+1+y]-this.xPct[o+y],n[o+y]*p+100-d*100>100?(E=v*d,p=(m-100*d)/n[o+y],d=1):(E=n[o+y]*v/100*p,p=0),f?(U=U-E,this.xPct.length+y>=1&&y--):(U=U+E,this.xPct.length-y>=1&&y++),m=n[o+y]*p;return e+U},t.prototype.toStepping=function(e){return e=Ot(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return Ut(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=Ht(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,n,f){var o=q(e,this.xPct);return(e===100||n&&e===this.xPct[o-1])&&(o=Math.max(o-1,1)),(this.xVal[o]-this.xVal[o-1])/f},t.prototype.getNearbySteps=function(e){var n=q(e,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(At);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,n){var f;if(e==="min"?f=0:e==="max"?f=100:f=parseFloat(e),!H(f)||!H(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(f),this.xVal.push(n[0]);var o=Number(n[1]);f?this.xSteps.push(isNaN(o)?!1:o):isNaN(o)||(this.xSteps[0]=o),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,n){if(n){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=me([this.xVal[e],this.xVal[e+1]],n,0)/ge(this.xPct[e],this.xPct[e+1]);var f=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],o=Math.ceil(Number(f.toFixed(3))-1),d=this.xVal[e]+this.xNumSteps[e]*o;this.xHighestCompleteStep[e]=d}},t}(),Fe={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},Be={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},N={tooltips:".__tooltips",aria:".__aria"};function Rt(t,e){if(!H(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function Ft(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function zt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Nt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function jt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new je(e,t.snap||!1,t.singleStep)}function Bt(t,e){if(e=ee(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function It(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Tt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function $t(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function Kt(t,e){var n=[!1],f;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(f=1;f<t.handles;f++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function qt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ie(t,e){if(!H(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function Gt(t,e){if(!H(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Xt(t,e){var n;if(!H(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||H(e[0])||H(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var f=e[0]+e[1],o=t.spectrum.xVal[0],d=t.spectrum.xVal[t.spectrum.xVal.length-1];if(f/(d-o)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Wt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Yt(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,f=e.indexOf("drag")>=0,o=e.indexOf("fixed")>=0,d=e.indexOf("snap")>=0,p=e.indexOf("hover")>=0,m=e.indexOf("unconstrained")>=0,v=e.indexOf("drag-all")>=0,E=e.indexOf("smooth-steps")>=0;if(o){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ie(t,t.start[1]-t.start[0])}if(m&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||d,drag:f,dragAll:v,smoothSteps:E,fixed:o,snap:d,hover:p,unconstrained:m}}function Jt(t,e){if(e!==!1)if(e===!0||Z(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=ee(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(f){if(typeof f!="boolean"&&!Z(f))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function Qt(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function Zt(t,e){if(!Z(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function er(t,e){if(!Ct(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function tr(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function rr(t,e){t.documentElement=e}function ir(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function ar(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(n){t.cssClasses[n]=t.cssPrefix+e[n]})):t.cssClasses=e}function Te(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Fe,format:Fe},n={step:{r:!1,t:Rt},keyboardPageMultiplier:{r:!1,t:Ft},keyboardMultiplier:{r:!1,t:zt},keyboardDefaultStep:{r:!1,t:Nt},start:{r:!0,t:Bt},connect:{r:!0,t:Kt},direction:{r:!0,t:Wt},snap:{r:!1,t:It},animate:{r:!1,t:Tt},animationDuration:{r:!1,t:$t},range:{r:!0,t:jt},orientation:{r:!1,t:qt},margin:{r:!1,t:Ie},limit:{r:!1,t:Gt},padding:{r:!1,t:Xt},behaviour:{r:!0,t:Yt},ariaFormat:{r:!1,t:Zt},format:{r:!1,t:er},tooltips:{r:!1,t:Jt},keyboardSupport:{r:!0,t:tr},documentElement:{r:!1,t:rr},cssPrefix:{r:!0,t:ir},cssClasses:{r:!0,t:ar},handleAttributes:{r:!1,t:Qt}},f={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Be,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(v){if(!ve(t[v])&&f[v]===void 0){if(n[v].r)throw new Error("noUiSlider: '"+v+"' is required.");return}n[v].t(e,ve(t[v])?t[v]:f[v])}),e.pips=t.pips;var o=document.createElement("div"),d=o.style.msTransform!==void 0,p=o.style.transform!==void 0;e.transformRule=p?"transform":d?"msTransform":"webkitTransform";var m=[["left","top"],["right","bottom"]];return e.style=m[e.dir][e.ort],e}function nr(t,e,n){var f=Dt(),o=_t(),d=o&&Vt(),p=t,m,v,E,U,y,g=e.spectrum,R=[],k=[],O=[],te=0,F={},T=t.ownerDocument,G=e.documentElement||T.documentElement,X=T.body,$e=T.dir==="rtl"||e.ort===1?0:100;function z(r,i){var a=T.createElement("div");return i&&L(a,i),r.appendChild(a),a}function Ke(r,i){var a=z(r,e.cssClasses.origin),s=z(a,e.cssClasses.handle);if(z(s,e.cssClasses.touchArea),s.setAttribute("data-handle",String(i)),e.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(l){return ot(l,i)})),e.handleAttributes!==void 0){var c=e.handleAttributes[i];Object.keys(c).forEach(function(l){s.setAttribute(l,c[l])})}return s.setAttribute("role","slider"),s.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?L(s,e.cssClasses.handleLower):i===e.handles-1&&L(s,e.cssClasses.handleUpper),a.handle=s,a}function Se(r,i){return i?z(r,e.cssClasses.connect):!1}function qe(r,i){var a=z(i,e.cssClasses.connects);v=[],E=[],E.push(Se(a,r[0]));for(var s=0;s<e.handles;s++)v.push(Ke(i,s)),O[s]=s,E.push(Se(a,r[s+1]))}function Ge(r){L(r,e.cssClasses.target),e.dir===0?L(r,e.cssClasses.ltr):L(r,e.cssClasses.rtl),e.ort===0?L(r,e.cssClasses.horizontal):L(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?L(r,e.cssClasses.textDirectionRtl):L(r,e.cssClasses.textDirectionLtr),z(r,e.cssClasses.base)}function Xe(r,i){return!e.tooltips||!e.tooltips[i]?!1:z(r.firstChild,e.cssClasses.tooltip)}function we(){return p.hasAttribute("disabled")}function re(r){var i=v[r];return i.hasAttribute("disabled")}function We(r){r!=null?(v[r].setAttribute("disabled",""),v[r].handle.removeAttribute("tabindex")):(p.setAttribute("disabled",""),v.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function Ye(r){r!=null?(v[r].removeAttribute("disabled"),v[r].handle.setAttribute("tabindex","0")):(p.removeAttribute("disabled"),v.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function ie(){y&&(K("update"+N.tooltips),y.forEach(function(r){r&&Oe(r)}),y=null)}function be(){ie(),y=v.map(Xe),le("update"+N.tooltips,function(r,i,a){if(!(!y||!e.tooltips)&&y[i]!==!1){var s=r[i];e.tooltips[i]!==!0&&(s=e.tooltips[i].to(a[i])),y[i].innerHTML=s}})}function Je(){K("update"+N.aria),le("update"+N.aria,function(r,i,a,s,c){O.forEach(function(l){var h=v[l],u=W(k,l,0,!0,!0,!0),b=W(k,l,100,!0,!0,!0),w=c[l],x=String(e.ariaFormat.to(a[l]));u=g.fromStepping(u).toFixed(1),b=g.fromStepping(b).toFixed(1),w=g.fromStepping(w).toFixed(1),h.children[0].setAttribute("aria-valuemin",u),h.children[0].setAttribute("aria-valuemax",b),h.children[0].setAttribute("aria-valuenow",w),h.children[0].setAttribute("aria-valuetext",x)})})}function Qe(r){if(r.mode===j.Range||r.mode===j.Steps)return g.xVal;if(r.mode===j.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,a=100/i,s=[];i--;)s[i]=i*a;return s.push(100),xe(s,r.stepped)}return r.mode===j.Positions?xe(r.values,r.stepped):r.mode===j.Values?r.stepped?r.values.map(function(c){return g.fromStepping(g.getStep(g.toStepping(c)))}):r.values:[]}function xe(r,i){return r.map(function(a){return g.fromStepping(i?g.getStep(a):a)})}function Ze(r){function i(w,x){return Number((w+x).toFixed(7))}var a=Qe(r),s={},c=g.xVal[0],l=g.xVal[g.xVal.length-1],h=!1,u=!1,b=0;return a=Et(a.slice().sort(function(w,x){return w-x})),a[0]!==c&&(a.unshift(c),h=!0),a[a.length-1]!==l&&(a.push(l),u=!0),a.forEach(function(w,x){var C,S,A,_=w,D=a[x+1],V,ue,de,pe,_e,he,Le,Me=r.mode===j.Steps;for(Me&&(C=g.xNumSteps[x]),C||(C=D-_),D===void 0&&(D=_),C=Math.max(C,1e-7),S=_;S<=D;S=i(S,C)){for(V=g.toStepping(S),ue=V-b,_e=ue/(r.density||1),he=Math.round(_e),Le=ue/he,A=1;A<=he;A+=1)de=b+A*Le,s[de.toFixed(5)]=[g.fromStepping(de),0];pe=a.indexOf(S)>-1?M.LargeValue:Me?M.SmallValue:M.NoValue,!x&&h&&S!==D&&(pe=0),S===D&&u||(s[V.toFixed(5)]=[S,pe]),b=V}}),s}function et(r,i,a){var s,c,l=T.createElement("div"),h=(s={},s[M.None]="",s[M.NoValue]=e.cssClasses.valueNormal,s[M.LargeValue]=e.cssClasses.valueLarge,s[M.SmallValue]=e.cssClasses.valueSub,s),u=(c={},c[M.None]="",c[M.NoValue]=e.cssClasses.markerNormal,c[M.LargeValue]=e.cssClasses.markerLarge,c[M.SmallValue]=e.cssClasses.markerSub,c),b=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],w=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];L(l,e.cssClasses.pips),L(l,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function x(S,A){var _=A===e.cssClasses.value,D=_?b:w,V=_?h:u;return A+" "+D[e.ort]+" "+V[S]}function C(S,A,_){if(_=i?i(A,_):_,_!==M.None){var D=z(l,!1);D.className=x(_,e.cssClasses.marker),D.style[e.style]=S+"%",_>M.NoValue&&(D=z(l,!1),D.className=x(_,e.cssClasses.value),D.setAttribute("data-value",String(A)),D.style[e.style]=S+"%",D.innerHTML=String(a.to(A)))}}return Object.keys(r).forEach(function(S){C(S,r[S][0],r[S][1])}),l}function ae(){U&&(Oe(U),U=null)}function ne(r){ae();var i=Ze(r),a=r.filter,s=r.format||{to:function(c){return String(Math.round(c))}};return U=p.appendChild(et(i,a,s)),U}function Ce(){var r=m.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||m[i]:r.height||m[i]}function B(r,i,a,s){var c=function(h){var u=tt(h,s.pageOffset,s.target||i);if(!u||we()&&!s.doNotReject||yt(p,e.cssClasses.tap)&&!s.doNotReject||r===f.start&&u.buttons!==void 0&&u.buttons>1||s.hover&&u.buttons)return!1;d||u.preventDefault(),u.calcPoint=u.points[e.ort],a(u,s)},l=[];return r.split(" ").forEach(function(h){i.addEventListener(h,c,d?{passive:!0}:!1),l.push([h,c])}),l}function tt(r,i,a){var s=r.type.indexOf("touch")===0,c=r.type.indexOf("mouse")===0,l=r.type.indexOf("pointer")===0,h=0,u=0;if(r.type.indexOf("MSPointer")===0&&(l=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(s){var b=function(C){var S=C.target;return S===a||a.contains(S)||r.composed&&r.composedPath().shift()===a};if(r.type==="touchstart"){var w=Array.prototype.filter.call(r.touches,b);if(w.length>1)return!1;h=w[0].pageX,u=w[0].pageY}else{var x=Array.prototype.find.call(r.changedTouches,b);if(!x)return!1;h=x.pageX,u=x.pageY}}return i=i||Ne(T),(c||l)&&(h=r.clientX+i.x,u=r.clientY+i.y),r.pageOffset=i,r.points=[h,u],r.cursor=c||l,r}function Ee(r){var i=r-Pt(m,e.ort),a=i*100/Ce();return a=Re(a),e.dir?100-a:a}function rt(r){var i=100,a=!1;return v.forEach(function(s,c){if(!re(c)){var l=k[c],h=Math.abs(l-r),u=h===100&&i===100,b=h<i,w=h<=i&&r>l;(b||w||u)&&(a=c,i=h)}}),a}function it(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&se(r,i)}function at(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return se(r,i);var a=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),s=a*100/i.baseSize;ke(a>0,s,i.locations,i.handleNumbers,i.connect)}function se(r,i){i.handle&&(Q(i.handle,e.cssClasses.active),te-=1),i.listeners.forEach(function(a){G.removeEventListener(a[0],a[1])}),te===0&&(Q(p,e.cssClasses.drag),fe(),r.cursor&&(X.style.cursor="",X.removeEventListener("selectstart",Ue))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(a){I(a,k[a],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(a){P("update",a)})),i.handleNumbers.forEach(function(a){P("change",a),P("set",a),P("end",a)})}function oe(r,i){if(!i.handleNumbers.some(re)){var a;if(i.handleNumbers.length===1){var s=v[i.handleNumbers[0]];a=s.children[0],te+=1,L(a,e.cssClasses.active)}r.stopPropagation();var c=[],l=B(f.move,G,at,{target:r.target,handle:a,connect:i.connect,listeners:c,startCalcPoint:r.calcPoint,baseSize:Ce(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:k.slice()}),h=B(f.end,G,se,{target:r.target,handle:a,listeners:c,doNotReject:!0,handleNumbers:i.handleNumbers}),u=B("mouseout",G,it,{target:r.target,handle:a,listeners:c,doNotReject:!0,handleNumbers:i.handleNumbers});c.push.apply(c,l.concat(h,u)),r.cursor&&(X.style.cursor=getComputedStyle(r.target).cursor,v.length>1&&L(p,e.cssClasses.drag),X.addEventListener("selectstart",Ue,!1)),i.handleNumbers.forEach(function(b){P("start",b)})}}function nt(r){r.stopPropagation();var i=Ee(r.calcPoint),a=rt(i);a!==!1&&(e.events.snap||He(p,e.cssClasses.tap,e.animationDuration),I(a,i,!0,!0),fe(),P("slide",a,!0),P("update",a,!0),e.events.snap?oe(r,{handleNumbers:[a]}):(P("change",a,!0),P("set",a,!0)))}function st(r){var i=Ee(r.calcPoint),a=g.getStep(i),s=g.fromStepping(a);Object.keys(F).forEach(function(c){c.split(".")[0]==="hover"&&F[c].forEach(function(l){l.call(J,s)})})}function ot(r,i){if(we()||re(i))return!1;var a=["Left","Right"],s=["Down","Up"],c=["PageDown","PageUp"],l=["Home","End"];e.dir&&!e.ort?a.reverse():e.ort&&!e.dir&&(s.reverse(),c.reverse());var h=r.key.replace("Arrow",""),u=h===c[0],b=h===c[1],w=h===s[0]||h===a[0]||u,x=h===s[1]||h===a[1]||b,C=h===l[0],S=h===l[1];if(!w&&!x&&!C&&!S)return!0;r.preventDefault();var A;if(x||w){var _=w?0:1,D=Ve(i),V=D[_];if(V===null)return!1;V===!1&&(V=g.getDefaultStep(k[i],w,e.keyboardDefaultStep)),b||u?V*=e.keyboardPageMultiplier:V*=e.keyboardMultiplier,V=Math.max(V,1e-7),V=(w?-1:1)*V,A=R[i]+V}else S?A=e.spectrum.xVal[e.spectrum.xVal.length-1]:A=e.spectrum.xVal[0];return I(i,g.toStepping(A),!0,!0),P("slide",i),P("update",i),P("change",i),P("set",i),!1}function lt(r){r.fixed||v.forEach(function(i,a){B(f.start,i.children[0],oe,{handleNumbers:[a]})}),r.tap&&B(f.start,m,nt,{}),r.hover&&B(f.move,m,st,{hover:!0}),r.drag&&E.forEach(function(i,a){if(!(i===!1||a===0||a===E.length-1)){var s=v[a-1],c=v[a],l=[i],h=[s,c],u=[a-1,a];L(i,e.cssClasses.draggable),r.fixed&&(l.push(s.children[0]),l.push(c.children[0])),r.dragAll&&(h=v,u=O),l.forEach(function(b){B(f.start,b,oe,{handles:h,handleNumbers:u,connect:i})})}})}function le(r,i){F[r]=F[r]||[],F[r].push(i),r.split(".")[0]==="update"&&v.forEach(function(a,s){P("update",s)})}function ct(r){return r===N.aria||r===N.tooltips}function K(r){var i=r&&r.split(".")[0],a=i?r.substring(i.length):r;Object.keys(F).forEach(function(s){var c=s.split(".")[0],l=s.substring(c.length);(!i||i===c)&&(!a||a===l)&&(!ct(l)||a===l)&&delete F[s]})}function P(r,i,a){Object.keys(F).forEach(function(s){var c=s.split(".")[0];r===c&&F[s].forEach(function(l){l.call(J,R.map(e.format.to),i,R.slice(),a||!1,k.slice(),J)})})}function W(r,i,a,s,c,l,h){var u;return v.length>1&&!e.events.unconstrained&&(s&&i>0&&(u=g.getAbsoluteDistance(r[i-1],e.margin,!1),a=Math.max(a,u)),c&&i<v.length-1&&(u=g.getAbsoluteDistance(r[i+1],e.margin,!0),a=Math.min(a,u))),v.length>1&&e.limit&&(s&&i>0&&(u=g.getAbsoluteDistance(r[i-1],e.limit,!1),a=Math.min(a,u)),c&&i<v.length-1&&(u=g.getAbsoluteDistance(r[i+1],e.limit,!0),a=Math.max(a,u))),e.padding&&(i===0&&(u=g.getAbsoluteDistance(0,e.padding[0],!1),a=Math.max(a,u)),i===v.length-1&&(u=g.getAbsoluteDistance(100,e.padding[1],!0),a=Math.min(a,u))),h||(a=g.getStep(a)),a=Re(a),a===r[i]&&!l?!1:a}function ce(r,i){var a=e.ort;return(a?i:r)+", "+(a?r:i)}function ke(r,i,a,s,c){var l=a.slice(),h=s[0],u=e.events.smoothSteps,b=[!r,r],w=[r,!r];s=s.slice(),r&&s.reverse(),s.length>1?s.forEach(function(C,S){var A=W(l,C,l[C]+i,b[S],w[S],!1,u);A===!1?i=0:(i=A-l[C],l[C]=A)}):b=w=[!0];var x=!1;s.forEach(function(C,S){x=I(C,a[C]+i,b[S],w[S],!1,u)||x}),x&&(s.forEach(function(C){P("update",C),P("slide",C)}),c!=null&&P("drag",h))}function Pe(r,i){return e.dir?100-r-i:r}function ft(r,i){k[r]=i,R[r]=g.fromStepping(i);var a=Pe(i,0)-$e,s="translate("+ce(a+"%","0")+")";v[r].style[e.transformRule]=s,Ae(r),Ae(r+1)}function fe(){O.forEach(function(r){var i=k[r]>50?-1:1,a=3+(v.length+i*r);v[r].style.zIndex=String(a)})}function I(r,i,a,s,c,l){return c||(i=W(k,r,i,a,s,!1,l)),i===!1?!1:(ft(r,i),!0)}function Ae(r){if(E[r]){var i=0,a=100;r!==0&&(i=k[r-1]),r!==E.length-1&&(a=k[r]);var s=a-i,c="translate("+ce(Pe(i,s)+"%","0")+")",l="scale("+ce(s/100,"1")+")";E[r].style[e.transformRule]=c+" "+l}}function ye(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=g.toStepping(r)),r===!1||isNaN(r))?k[i]:r}function Y(r,i,a){var s=ee(r),c=k[0]===void 0;i=i===void 0?!0:i,e.animate&&!c&&He(p,e.cssClasses.tap,e.animationDuration),O.forEach(function(u){I(u,ye(s[u],u),!0,!1,a)});var l=O.length===1?0:1;if(c&&g.hasNoSize()&&(a=!0,k[0]=0,O.length>1)){var h=100/(O.length-1);O.forEach(function(u){k[u]=u*h})}for(;l<O.length;++l)O.forEach(function(u){I(u,k[u],!0,!0,a)});fe(),O.forEach(function(u){P("update",u),s[u]!==null&&i&&P("set",u)})}function ut(r){Y(e.start,r)}function dt(r,i,a,s){if(r=Number(r),!(r>=0&&r<O.length))throw new Error("noUiSlider: invalid handle number, got: "+r);I(r,ye(i,r),!0,!0,s),P("update",r),a&&P("set",r)}function De(r){if(r===void 0&&(r=!1),r)return R.length===1?R[0]:R.slice(0);var i=R.map(e.format.to);return i.length===1?i[0]:i}function pt(){for(K(N.aria),K(N.tooltips),Object.keys(e.cssClasses).forEach(function(r){Q(p,e.cssClasses[r])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function Ve(r){var i=k[r],a=g.getNearbySteps(i),s=R[r],c=a.thisStep.step,l=null;if(e.snap)return[s-a.stepBefore.startValue||null,a.stepAfter.startValue-s||null];c!==!1&&s+c>a.stepAfter.startValue&&(c=a.stepAfter.startValue-s),s>a.thisStep.startValue?l=a.thisStep.step:a.stepBefore.step===!1?l=!1:l=s-a.stepBefore.highestStep,i===100?c=null:i===0&&(l=null);var h=g.countStepDecimals();return c!==null&&c!==!1&&(c=Number(c.toFixed(h))),l!==null&&l!==!1&&(l=Number(l.toFixed(h))),[l,c]}function ht(){return O.map(Ve)}function vt(r,i){var a=De(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach(function(l){r[l]!==void 0&&(n[l]=r[l])});var c=Te(n);s.forEach(function(l){r[l]!==void 0&&(e[l]=c[l])}),g=c.spectrum,e.margin=c.margin,e.limit=c.limit,e.padding=c.padding,e.pips?ne(e.pips):ae(),e.tooltips?be():ie(),k=[],Y(ve(r.start)?r.start:a,i)}function mt(){m=Ge(p),qe(e.connect,m),lt(e.events),Y(e.start),e.pips&&ne(e.pips),e.tooltips&&be(),Je()}mt();var J={destroy:pt,steps:ht,on:le,off:K,get:De,set:Y,setHandle:dt,reset:ut,disable:We,enable:Ye,__moveHandles:function(r,i,a){ke(r,i,k,a)},options:n,updateOptions:vt,target:p,removePips:ae,removeTooltips:ie,getPositions:function(){return k.slice()},getTooltips:function(){return y},getOrigins:function(){return v},pips:ne};return J}function sr(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=Te(e),f=nr(t,n,e);return t.noUiSlider=f,f}const or={__spectrum:je,cssClasses:Be,create:sr},ze=document.getElementById("price-slider");function lr(){or.create(ze,{connect:!0,start:0,step:1,range:{min:0,max:7},pips:{mode:"values",values:[0,1,2,3,4,5,6,7],density:10}}),ze.noUiSlider.on("update",function(t,e){$(".price-range").text(`${t[e]} Kr`)})}window.vite="vite";(function(t){const e=t(".status-bar_rectangle"),n=t("[step='1']").find(e).first(),f=t("[step='2']").find(e).first(),o=t("[step='3']").find(e).first(),d=t("[step='4']").find(e).first(),p=t("[step='5']").find(e).first(),m=new Swiper(".swiper",{loop:!1,rewind:!1,allowTouchMove:!1,noSwipingClass:"swiper-no-swiping"});m.on("slideChange",function(){const E=m.activeIndex;E===0&&n.removeClass("active"),E===1?(n.addClass("active"),f.removeClass("active")):E===2?(f.addClass("active"),o.removeClass("active")):E===3?(o.addClass("active"),d.removeClass("active")):E===4?(d.addClass("active"),p.removeClass("active")):E===5&&p.addClass("active")}),m.slideTo(3),t(".back-btn").on("click",function(){m.slidePrev()}),lr(),gt(m),St(m),wt(m),bt(m),xt(m)})(jQuery);
