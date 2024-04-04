(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}})();function St(){const t=$(".status-bar_rectangle"),e=$("[step='1']").find(t).first(),a=$("[step='2']").find(t).first(),l=$("[step='3']").find(t).first(),s=$("[step='4']").find(t).first(),u=$("[step='5']").find(t).first(),d=new Swiper(".swiper",{loop:!1,rewind:!1,allowTouchMove:!1,noSwipingClass:"swiper-no-swiping"});return d.on("slideChange",function(){const h=d.activeIndex;h===0&&e.removeClass("active"),h===1?(e.addClass("active"),a.removeClass("active")):h===2?(a.addClass("active"),l.removeClass("active")):h===3?(l.addClass("active"),s.removeClass("active")):h===4?(s.addClass("active"),u.removeClass("active")):h===5&&u.addClass("active")}),$(".back-btn").on("click",function(){d.slidePrev()}),d}function ee(t,e){localStorage.setItem(t,e)}function bt(t,e){e.each((a,l)=>{const s=$(l).val();localStorage.setItem(t,s)})}function wt(t){$(".marketing-calc_content-wrapper .main-button").on("click",function(){ee("step1",$(this).attr("data-val")),t.slideNext()})}function xt(t){function e(){const a=$(".marketing-calc_content-wrapper_page-2 input:checked"),l=$(this).closest("label");bt("step2",a),a.length>0&&(l.animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50),setTimeout(()=>{t.slideTo(2)},800))}$(".marketing-calc_content-wrapper_page-2 label").on("click",e)}function Et(t){$(".marketing-calc_content-wrapper_page-3 label").on("click",function(e){e.preventDefault(),e.stopImmediatePropagation();const a=$(this).find("input");a.prop("checked",!a.prop("checked")),a.prop("checked")?a.prev().addClass("w--redirected-checked"):a.prev().removeClass("w--redirected-checked"),a.attr("name")==="platform-others"&&a.is(":checked")?$(this).closest("form").find("input[type='checkbox']").not(a).prop("checked",!1).prev().removeClass("w--redirected-checked"):a.attr("name")!=="platform-others"&&a.is(":checked")&&$(this).closest("form").find("input[name='platform-others']").prop("checked",!1).prev().removeClass("w--redirected-checked")}),$(".marketing-calc_content-wrapper_page-3 .main-button").on("click",function(e){e.preventDefault();const a=$(".marketing-calc_content-wrapper_page-3 input:checked"),l=a.map((s,u)=>$(u).attr("name")).get();if(localStorage.setItem("step3",JSON.stringify(l)),a.length===0)throw new Error("Please select at least one option");t.slideNext()})}function Ct(t){$(".marketing-calc_content-wrapper_page-4 .price-range"),$(".marketing-calc_content-wrapper_page-4 .main-button").on("click",function(e){e.preventDefault(),t.slideNext()})}function kt(t){$(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click",function(g){g.preventDefault(),t.slideNext()});const e=$("#main-form"),a=$("#primary-submit-btn"),l=e.find(".loader"),s=e.find(".form-error-wrapper");function u(){l.show(),a.attr("disabled",!0),a.css({pointerEvents:"none",textIndent:"-9999px"})}function d(){l.hide(),a.attr("disabled",!1),a.css({pointerEvents:"auto",textIndent:"0"})}a.on("click",function(){u(),e.trigger("submit")}),e.on("submit",function(g){g.preventDefault(),g.stopPropagation();const h={};e.serializeArray().forEach(M=>{h[M.name]=M.value}),e.find($("input[type=checkbox]:not(:checked)")).each(function(){h.hasOwnProperty(this.name)||(h[this.name]="")}),Object.values(h).includes("")?(s.show(),d()):(s.hide(),setTimeout(()=>{d(),ee("step5",JSON.stringify(h)),t.slideTo(5)},2e3))})}function Pt(){const t=$(".thankyou-popup"),e=$("#final-submit-btn"),a=e.find(".loader"),l=$(".marketing-calc_content-wrapper_page-7");l.find(".number-of-ads").first(),l.find(".number-of-views").first(),l.find(".number-of-visitors").first(),l.find(".number-of-conversion").first(),e.on("click",function(s){s.preventDefault(),a.show(),e.attr("disabled"),a.siblings().css({pointerEvents:"none",textIndent:"-9999px",display:"none"}),setTimeout(()=>{t.fadeIn(150),setTimeout(function(){a.hide(),a.siblings().css({pointerEvents:"none",textIndent:"0",display:"block"}),e.css({opacity:.4,pointerEvents:"none"})},300)},2e3)})}const Me=(t,e,a,l)=>{t.on("click",function(s){s.preventDefault(),e.fadeIn()}),l.on("click",function(){e.fadeOut()}),e.on("click",function(s){!a.is(s.target)&&a.has(s.target).length===0&&e.fadeOut()})};function yt(){const t=$(".popup_link"),e=$(".help-popup"),a=e.find(".popup-content_wrapper"),l=e.find(".close-btn"),s=$(".NO_TRIGGER_FOR_THIS_POPUP"),u=$(".thankyou-popup"),d=u.find(".popup-content_wrapper"),g=u.find(".close-btn");Me(t,e,a,l),Me(s,u,d,g)}function At(t){$(".marketing-calc_content-wrapper_page-6 .pricing-button").on("click",function(e){e.preventDefault(),$("#small-package-price"),$("#medium-package-price"),$("#large-package-price");const a={packagePrice:$(this).attr("data-price"),packageName:$(this).attr("data-val")};ee("step5",JSON.stringify(a)),t.slideNext()})}var j;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(j||(j={}));var L;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(L||(L={}));function Dt(t){return Z(t)&&typeof t.from=="function"}function Z(t){return typeof t=="object"&&typeof t.to=="function"}function Ue(t){t.parentElement.removeChild(t)}function me(t){return t!=null}function He(t){t.preventDefault()}function _t(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Vt(t,e){return Math.round(t/e)*e}function $t(t,e){var a=t.getBoundingClientRect(),l=t.ownerDocument,s=l.documentElement,u=ze(l);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(u.x=0),e?a.top+u.y-s.clientTop:a.left+u.x-s.clientLeft}function H(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function Fe(t,e,a){a>0&&(O(t,e),setTimeout(function(){Q(t,e)},a))}function Re(t){return Math.max(Math.min(t,100),0)}function te(t){return Array.isArray(t)?t:[t]}function Ot(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function O(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function Q(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Lt(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function ze(t){var e=window.pageXOffset!==void 0,a=(t.compatMode||"")==="CSS1Compat",l=e?window.pageXOffset:a?t.documentElement.scrollLeft:t.body.scrollLeft,s=e?window.pageYOffset:a?t.documentElement.scrollTop:t.body.scrollTop;return{x:l,y:s}}function Mt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Ut(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Ht(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Se(t,e){return 100/(e-t)}function ge(t,e,a){return e*100/(t[a+1]-t[a])}function Ft(t,e){return ge(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function Rt(t,e){return e*(t[1]-t[0])/100+t[0]}function q(t,e){for(var a=1;t>=e[a];)a+=1;return a}function Nt(t,e,a){if(a>=t.slice(-1)[0])return 100;var l=q(a,t),s=t[l-1],u=t[l],d=e[l-1],g=e[l];return d+Ft([s,u],a)/Se(d,g)}function zt(t,e,a){if(a>=100)return t.slice(-1)[0];var l=q(a,e),s=t[l-1],u=t[l],d=e[l-1],g=e[l];return Rt([s,u],(a-d)*Se(d,g))}function jt(t,e,a,l){if(l===100)return l;var s=q(l,t),u=t[s-1],d=t[s];return a?l-u>(d-u)/2?d:u:e[s-1]?t[s-1]+Vt(l-t[s-1],e[s-1]):l}var je=function(){function t(e,a,l){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[l||!1],this.xNumSteps=[!1],this.snap=a;var s,u=[];for(Object.keys(e).forEach(function(d){u.push([te(e[d]),d])}),u.sort(function(d,g){return d[0][0]-g[0][0]}),s=0;s<u.length;s++)this.handleEntryPoint(u[s][1],u[s][0]);for(this.xNumSteps=this.xSteps.slice(0),s=0;s<this.xNumSteps.length;s++)this.handleStepPoint(s,this.xNumSteps[s])}return t.prototype.getDistance=function(e){for(var a=[],l=0;l<this.xNumSteps.length-1;l++)a[l]=ge(this.xVal,e,l);return a},t.prototype.getAbsoluteDistance=function(e,a,l){var s=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[s+1];)s++;else e===this.xPct[this.xPct.length-1]&&(s=this.xPct.length-2);!l&&e===this.xPct[s+1]&&s++,a===null&&(a=[]);var u,d=1,g=a[s],h=0,_=0,M=0,y=0;for(l?u=(e-this.xPct[s])/(this.xPct[s+1]-this.xPct[s]):u=(this.xPct[s+1]-e)/(this.xPct[s+1]-this.xPct[s]);g>0;)h=this.xPct[s+1+y]-this.xPct[s+y],a[s+y]*d+100-u*100>100?(_=h*u,d=(g-100*u)/a[s+y],u=1):(_=a[s+y]*h/100*d,d=0),l?(M=M-_,this.xPct.length+y>=1&&y--):(M=M+_,this.xPct.length-y>=1&&y++),g=a[s+y]*d;return e+M},t.prototype.toStepping=function(e){return e=Nt(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return zt(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=jt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,a,l){var s=q(e,this.xPct);return(e===100||a&&e===this.xPct[s-1])&&(s=Math.max(s-1,1)),(this.xVal[s]-this.xVal[s-1])/l},t.prototype.getNearbySteps=function(e){var a=q(e,this.xPct);return{stepBefore:{startValue:this.xVal[a-2],step:this.xNumSteps[a-2],highestStep:this.xHighestCompleteStep[a-2]},thisStep:{startValue:this.xVal[a-1],step:this.xNumSteps[a-1],highestStep:this.xHighestCompleteStep[a-1]},stepAfter:{startValue:this.xVal[a],step:this.xNumSteps[a],highestStep:this.xHighestCompleteStep[a]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Ot);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,a){var l;if(e==="min"?l=0:e==="max"?l=100:l=parseFloat(e),!H(l)||!H(a[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(l),this.xVal.push(a[0]);var s=Number(a[1]);l?this.xSteps.push(isNaN(s)?!1:s):isNaN(s)||(this.xSteps[0]=s),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,a){if(a){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=ge([this.xVal[e],this.xVal[e+1]],a,0)/Se(this.xPct[e],this.xPct[e+1]);var l=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],s=Math.ceil(Number(l.toFixed(3))-1),u=this.xVal[e]+this.xNumSteps[e]*s;this.xHighestCompleteStep[e]=u}},t}(),Ne={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},Be={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},z={tooltips:".__tooltips",aria:".__aria"};function Bt(t,e){if(!H(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function It(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function Tt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Kt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function qt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new je(e,t.snap||!1,t.singleStep)}function Gt(t,e){if(e=te(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function Jt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Wt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function Xt(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function Yt(t,e){var a=[!1],l;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(l=1;l<t.handles;l++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=e}t.connect=a}function Qt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ie(t,e){if(!H(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function Zt(t,e){if(!H(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function er(t,e){var a;if(!H(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||H(e[0])||H(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],a=0;a<t.spectrum.xNumSteps.length-1;a++)if(t.padding[0][a]<0||t.padding[1][a]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var l=e[0]+e[1],s=t.spectrum.xVal[0],u=t.spectrum.xVal[t.spectrum.xVal.length-1];if(l/(u-s)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function tr(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function rr(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var a=e.indexOf("tap")>=0,l=e.indexOf("drag")>=0,s=e.indexOf("fixed")>=0,u=e.indexOf("snap")>=0,d=e.indexOf("hover")>=0,g=e.indexOf("unconstrained")>=0,h=e.indexOf("drag-all")>=0,_=e.indexOf("smooth-steps")>=0;if(s){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ie(t,t.start[1]-t.start[0])}if(g&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:a||u,drag:l,dragAll:h,smoothSteps:_,fixed:s,snap:u,hover:d,unconstrained:g}}function ir(t,e){if(e!==!1)if(e===!0||Z(e)){t.tooltips=[];for(var a=0;a<t.handles;a++)t.tooltips.push(e)}else{if(e=te(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(l){if(typeof l!="boolean"&&!Z(l))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function nr(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function ar(t,e){if(!Z(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function sr(t,e){if(!Dt(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function or(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function lr(t,e){t.documentElement=e}function cr(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function fr(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(a){t.cssClasses[a]=t.cssPrefix+e[a]})):t.cssClasses=e}function Te(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Ne,format:Ne},a={step:{r:!1,t:Bt},keyboardPageMultiplier:{r:!1,t:It},keyboardMultiplier:{r:!1,t:Tt},keyboardDefaultStep:{r:!1,t:Kt},start:{r:!0,t:Gt},connect:{r:!0,t:Yt},direction:{r:!0,t:tr},snap:{r:!1,t:Jt},animate:{r:!1,t:Wt},animationDuration:{r:!1,t:Xt},range:{r:!0,t:qt},orientation:{r:!1,t:Qt},margin:{r:!1,t:Ie},limit:{r:!1,t:Zt},padding:{r:!1,t:er},behaviour:{r:!0,t:rr},ariaFormat:{r:!1,t:ar},format:{r:!1,t:sr},tooltips:{r:!1,t:ir},keyboardSupport:{r:!0,t:or},documentElement:{r:!1,t:lr},cssPrefix:{r:!0,t:cr},cssClasses:{r:!0,t:fr},handleAttributes:{r:!1,t:nr}},l={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Be,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(a).forEach(function(h){if(!me(t[h])&&l[h]===void 0){if(a[h].r)throw new Error("noUiSlider: '"+h+"' is required.");return}a[h].t(e,me(t[h])?t[h]:l[h])}),e.pips=t.pips;var s=document.createElement("div"),u=s.style.msTransform!==void 0,d=s.style.transform!==void 0;e.transformRule=d?"transform":u?"msTransform":"webkitTransform";var g=[["left","top"],["right","bottom"]];return e.style=g[e.dir][e.ort],e}function ur(t,e,a){var l=Mt(),s=Ht(),u=s&&Ut(),d=t,g,h,_,M,y,m=e.spectrum,F=[],C=[],U=[],re=0,R={},T=t.ownerDocument,G=e.documentElement||T.documentElement,J=T.body,Ke=T.dir==="rtl"||e.ort===1?0:100;function N(r,i){var n=T.createElement("div");return i&&O(n,i),r.appendChild(n),n}function qe(r,i){var n=N(r,e.cssClasses.origin),o=N(n,e.cssClasses.handle);if(N(o,e.cssClasses.touchArea),o.setAttribute("data-handle",String(i)),e.keyboardSupport&&(o.setAttribute("tabindex","0"),o.addEventListener("keydown",function(c){return lt(c,i)})),e.handleAttributes!==void 0){var f=e.handleAttributes[i];Object.keys(f).forEach(function(c){o.setAttribute(c,f[c])})}return o.setAttribute("role","slider"),o.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?O(o,e.cssClasses.handleLower):i===e.handles-1&&O(o,e.cssClasses.handleUpper),n.handle=o,n}function be(r,i){return i?N(r,e.cssClasses.connect):!1}function Ge(r,i){var n=N(i,e.cssClasses.connects);h=[],_=[],_.push(be(n,r[0]));for(var o=0;o<e.handles;o++)h.push(qe(i,o)),U[o]=o,_.push(be(n,r[o+1]))}function Je(r){O(r,e.cssClasses.target),e.dir===0?O(r,e.cssClasses.ltr):O(r,e.cssClasses.rtl),e.ort===0?O(r,e.cssClasses.horizontal):O(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?O(r,e.cssClasses.textDirectionRtl):O(r,e.cssClasses.textDirectionLtr),N(r,e.cssClasses.base)}function We(r,i){return!e.tooltips||!e.tooltips[i]?!1:N(r.firstChild,e.cssClasses.tooltip)}function we(){return d.hasAttribute("disabled")}function ie(r){var i=h[r];return i.hasAttribute("disabled")}function Xe(r){r!=null?(h[r].setAttribute("disabled",""),h[r].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),h.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function Ye(r){r!=null?(h[r].removeAttribute("disabled"),h[r].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),h.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function ne(){y&&(K("update"+z.tooltips),y.forEach(function(r){r&&Ue(r)}),y=null)}function xe(){ne(),y=h.map(We),ce("update"+z.tooltips,function(r,i,n){if(!(!y||!e.tooltips)&&y[i]!==!1){var o=r[i];e.tooltips[i]!==!0&&(o=e.tooltips[i].to(n[i])),y[i].innerHTML=o}})}function Qe(){K("update"+z.aria),ce("update"+z.aria,function(r,i,n,o,f){U.forEach(function(c){var v=h[c],p=W(C,c,0,!0,!0,!0),w=W(C,c,100,!0,!0,!0),b=f[c],x=String(e.ariaFormat.to(n[c]));p=m.fromStepping(p).toFixed(1),w=m.fromStepping(w).toFixed(1),b=m.fromStepping(b).toFixed(1),v.children[0].setAttribute("aria-valuemin",p),v.children[0].setAttribute("aria-valuemax",w),v.children[0].setAttribute("aria-valuenow",b),v.children[0].setAttribute("aria-valuetext",x)})})}function Ze(r){if(r.mode===j.Range||r.mode===j.Steps)return m.xVal;if(r.mode===j.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,n=100/i,o=[];i--;)o[i]=i*n;return o.push(100),Ee(o,r.stepped)}return r.mode===j.Positions?Ee(r.values,r.stepped):r.mode===j.Values?r.stepped?r.values.map(function(f){return m.fromStepping(m.getStep(m.toStepping(f)))}):r.values:[]}function Ee(r,i){return r.map(function(n){return m.fromStepping(i?m.getStep(n):n)})}function et(r){function i(b,x){return Number((b+x).toFixed(7))}var n=Ze(r),o={},f=m.xVal[0],c=m.xVal[m.xVal.length-1],v=!1,p=!1,w=0;return n=_t(n.slice().sort(function(b,x){return b-x})),n[0]!==f&&(n.unshift(f),v=!0),n[n.length-1]!==c&&(n.push(c),p=!0),n.forEach(function(b,x){var E,S,P,V=b,A=n[x+1],D,pe,de,he,$e,ve,Oe,Le=r.mode===j.Steps;for(Le&&(E=m.xNumSteps[x]),E||(E=A-V),A===void 0&&(A=V),E=Math.max(E,1e-7),S=V;S<=A;S=i(S,E)){for(D=m.toStepping(S),pe=D-w,$e=pe/(r.density||1),ve=Math.round($e),Oe=pe/ve,P=1;P<=ve;P+=1)de=w+P*Oe,o[de.toFixed(5)]=[m.fromStepping(de),0];he=n.indexOf(S)>-1?L.LargeValue:Le?L.SmallValue:L.NoValue,!x&&v&&S!==A&&(he=0),S===A&&p||(o[D.toFixed(5)]=[S,he]),w=D}}),o}function tt(r,i,n){var o,f,c=T.createElement("div"),v=(o={},o[L.None]="",o[L.NoValue]=e.cssClasses.valueNormal,o[L.LargeValue]=e.cssClasses.valueLarge,o[L.SmallValue]=e.cssClasses.valueSub,o),p=(f={},f[L.None]="",f[L.NoValue]=e.cssClasses.markerNormal,f[L.LargeValue]=e.cssClasses.markerLarge,f[L.SmallValue]=e.cssClasses.markerSub,f),w=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],b=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];O(c,e.cssClasses.pips),O(c,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function x(S,P){var V=P===e.cssClasses.value,A=V?w:b,D=V?v:p;return P+" "+A[e.ort]+" "+D[S]}function E(S,P,V){if(V=i?i(P,V):V,V!==L.None){var A=N(c,!1);A.className=x(V,e.cssClasses.marker),A.style[e.style]=S+"%",V>L.NoValue&&(A=N(c,!1),A.className=x(V,e.cssClasses.value),A.setAttribute("data-value",String(P)),A.style[e.style]=S+"%",A.innerHTML=String(n.to(P)))}}return Object.keys(r).forEach(function(S){E(S,r[S][0],r[S][1])}),c}function ae(){M&&(Ue(M),M=null)}function se(r){ae();var i=et(r),n=r.filter,o=r.format||{to:function(f){return String(Math.round(f))}};return M=d.appendChild(tt(i,n,o)),M}function Ce(){var r=g.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||g[i]:r.height||g[i]}function B(r,i,n,o){var f=function(v){var p=rt(v,o.pageOffset,o.target||i);if(!p||we()&&!o.doNotReject||Lt(d,e.cssClasses.tap)&&!o.doNotReject||r===l.start&&p.buttons!==void 0&&p.buttons>1||o.hover&&p.buttons)return!1;u||p.preventDefault(),p.calcPoint=p.points[e.ort],n(p,o)},c=[];return r.split(" ").forEach(function(v){i.addEventListener(v,f,u?{passive:!0}:!1),c.push([v,f])}),c}function rt(r,i,n){var o=r.type.indexOf("touch")===0,f=r.type.indexOf("mouse")===0,c=r.type.indexOf("pointer")===0,v=0,p=0;if(r.type.indexOf("MSPointer")===0&&(c=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(o){var w=function(E){var S=E.target;return S===n||n.contains(S)||r.composed&&r.composedPath().shift()===n};if(r.type==="touchstart"){var b=Array.prototype.filter.call(r.touches,w);if(b.length>1)return!1;v=b[0].pageX,p=b[0].pageY}else{var x=Array.prototype.find.call(r.changedTouches,w);if(!x)return!1;v=x.pageX,p=x.pageY}}return i=i||ze(T),(f||c)&&(v=r.clientX+i.x,p=r.clientY+i.y),r.pageOffset=i,r.points=[v,p],r.cursor=f||c,r}function ke(r){var i=r-$t(g,e.ort),n=i*100/Ce();return n=Re(n),e.dir?100-n:n}function it(r){var i=100,n=!1;return h.forEach(function(o,f){if(!ie(f)){var c=C[f],v=Math.abs(c-r),p=v===100&&i===100,w=v<i,b=v<=i&&r>c;(w||b||p)&&(n=f,i=v)}}),n}function nt(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&oe(r,i)}function at(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return oe(r,i);var n=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),o=n*100/i.baseSize;Pe(n>0,o,i.locations,i.handleNumbers,i.connect)}function oe(r,i){i.handle&&(Q(i.handle,e.cssClasses.active),re-=1),i.listeners.forEach(function(n){G.removeEventListener(n[0],n[1])}),re===0&&(Q(d,e.cssClasses.drag),ue(),r.cursor&&(J.style.cursor="",J.removeEventListener("selectstart",He))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(n){I(n,C[n],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(n){k("update",n)})),i.handleNumbers.forEach(function(n){k("change",n),k("set",n),k("end",n)})}function le(r,i){if(!i.handleNumbers.some(ie)){var n;if(i.handleNumbers.length===1){var o=h[i.handleNumbers[0]];n=o.children[0],re+=1,O(n,e.cssClasses.active)}r.stopPropagation();var f=[],c=B(l.move,G,at,{target:r.target,handle:n,connect:i.connect,listeners:f,startCalcPoint:r.calcPoint,baseSize:Ce(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:C.slice()}),v=B(l.end,G,oe,{target:r.target,handle:n,listeners:f,doNotReject:!0,handleNumbers:i.handleNumbers}),p=B("mouseout",G,nt,{target:r.target,handle:n,listeners:f,doNotReject:!0,handleNumbers:i.handleNumbers});f.push.apply(f,c.concat(v,p)),r.cursor&&(J.style.cursor=getComputedStyle(r.target).cursor,h.length>1&&O(d,e.cssClasses.drag),J.addEventListener("selectstart",He,!1)),i.handleNumbers.forEach(function(w){k("start",w)})}}function st(r){r.stopPropagation();var i=ke(r.calcPoint),n=it(i);n!==!1&&(e.events.snap||Fe(d,e.cssClasses.tap,e.animationDuration),I(n,i,!0,!0),ue(),k("slide",n,!0),k("update",n,!0),e.events.snap?le(r,{handleNumbers:[n]}):(k("change",n,!0),k("set",n,!0)))}function ot(r){var i=ke(r.calcPoint),n=m.getStep(i),o=m.fromStepping(n);Object.keys(R).forEach(function(f){f.split(".")[0]==="hover"&&R[f].forEach(function(c){c.call(Y,o)})})}function lt(r,i){if(we()||ie(i))return!1;var n=["Left","Right"],o=["Down","Up"],f=["PageDown","PageUp"],c=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(o.reverse(),f.reverse());var v=r.key.replace("Arrow",""),p=v===f[0],w=v===f[1],b=v===o[0]||v===n[0]||p,x=v===o[1]||v===n[1]||w,E=v===c[0],S=v===c[1];if(!b&&!x&&!E&&!S)return!0;r.preventDefault();var P;if(x||b){var V=b?0:1,A=Ve(i),D=A[V];if(D===null)return!1;D===!1&&(D=m.getDefaultStep(C[i],b,e.keyboardDefaultStep)),w||p?D*=e.keyboardPageMultiplier:D*=e.keyboardMultiplier,D=Math.max(D,1e-7),D=(b?-1:1)*D,P=F[i]+D}else S?P=e.spectrum.xVal[e.spectrum.xVal.length-1]:P=e.spectrum.xVal[0];return I(i,m.toStepping(P),!0,!0),k("slide",i),k("update",i),k("change",i),k("set",i),!1}function ct(r){r.fixed||h.forEach(function(i,n){B(l.start,i.children[0],le,{handleNumbers:[n]})}),r.tap&&B(l.start,g,st,{}),r.hover&&B(l.move,g,ot,{hover:!0}),r.drag&&_.forEach(function(i,n){if(!(i===!1||n===0||n===_.length-1)){var o=h[n-1],f=h[n],c=[i],v=[o,f],p=[n-1,n];O(i,e.cssClasses.draggable),r.fixed&&(c.push(o.children[0]),c.push(f.children[0])),r.dragAll&&(v=h,p=U),c.forEach(function(w){B(l.start,w,le,{handles:v,handleNumbers:p,connect:i})})}})}function ce(r,i){R[r]=R[r]||[],R[r].push(i),r.split(".")[0]==="update"&&h.forEach(function(n,o){k("update",o)})}function ft(r){return r===z.aria||r===z.tooltips}function K(r){var i=r&&r.split(".")[0],n=i?r.substring(i.length):r;Object.keys(R).forEach(function(o){var f=o.split(".")[0],c=o.substring(f.length);(!i||i===f)&&(!n||n===c)&&(!ft(c)||n===c)&&delete R[o]})}function k(r,i,n){Object.keys(R).forEach(function(o){var f=o.split(".")[0];r===f&&R[o].forEach(function(c){c.call(Y,F.map(e.format.to),i,F.slice(),n||!1,C.slice(),Y)})})}function W(r,i,n,o,f,c,v){var p;return h.length>1&&!e.events.unconstrained&&(o&&i>0&&(p=m.getAbsoluteDistance(r[i-1],e.margin,!1),n=Math.max(n,p)),f&&i<h.length-1&&(p=m.getAbsoluteDistance(r[i+1],e.margin,!0),n=Math.min(n,p))),h.length>1&&e.limit&&(o&&i>0&&(p=m.getAbsoluteDistance(r[i-1],e.limit,!1),n=Math.min(n,p)),f&&i<h.length-1&&(p=m.getAbsoluteDistance(r[i+1],e.limit,!0),n=Math.max(n,p))),e.padding&&(i===0&&(p=m.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,p)),i===h.length-1&&(p=m.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,p))),v||(n=m.getStep(n)),n=Re(n),n===r[i]&&!c?!1:n}function fe(r,i){var n=e.ort;return(n?i:r)+", "+(n?r:i)}function Pe(r,i,n,o,f){var c=n.slice(),v=o[0],p=e.events.smoothSteps,w=[!r,r],b=[r,!r];o=o.slice(),r&&o.reverse(),o.length>1?o.forEach(function(E,S){var P=W(c,E,c[E]+i,w[S],b[S],!1,p);P===!1?i=0:(i=P-c[E],c[E]=P)}):w=b=[!0];var x=!1;o.forEach(function(E,S){x=I(E,n[E]+i,w[S],b[S],!1,p)||x}),x&&(o.forEach(function(E){k("update",E),k("slide",E)}),f!=null&&k("drag",v))}function ye(r,i){return e.dir?100-r-i:r}function ut(r,i){C[r]=i,F[r]=m.fromStepping(i);var n=ye(i,0)-Ke,o="translate("+fe(n+"%","0")+")";h[r].style[e.transformRule]=o,Ae(r),Ae(r+1)}function ue(){U.forEach(function(r){var i=C[r]>50?-1:1,n=3+(h.length+i*r);h[r].style.zIndex=String(n)})}function I(r,i,n,o,f,c){return f||(i=W(C,r,i,n,o,!1,c)),i===!1?!1:(ut(r,i),!0)}function Ae(r){if(_[r]){var i=0,n=100;r!==0&&(i=C[r-1]),r!==_.length-1&&(n=C[r]);var o=n-i,f="translate("+fe(ye(i,o)+"%","0")+")",c="scale("+fe(o/100,"1")+")";_[r].style[e.transformRule]=f+" "+c}}function De(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=m.toStepping(r)),r===!1||isNaN(r))?C[i]:r}function X(r,i,n){var o=te(r),f=C[0]===void 0;i=i===void 0?!0:i,e.animate&&!f&&Fe(d,e.cssClasses.tap,e.animationDuration),U.forEach(function(p){I(p,De(o[p],p),!0,!1,n)});var c=U.length===1?0:1;if(f&&m.hasNoSize()&&(n=!0,C[0]=0,U.length>1)){var v=100/(U.length-1);U.forEach(function(p){C[p]=p*v})}for(;c<U.length;++c)U.forEach(function(p){I(p,C[p],!0,!0,n)});ue(),U.forEach(function(p){k("update",p),o[p]!==null&&i&&k("set",p)})}function pt(r){X(e.start,r)}function dt(r,i,n,o){if(r=Number(r),!(r>=0&&r<U.length))throw new Error("noUiSlider: invalid handle number, got: "+r);I(r,De(i,r),!0,!0,o),k("update",r),n&&k("set",r)}function _e(r){if(r===void 0&&(r=!1),r)return F.length===1?F[0]:F.slice(0);var i=F.map(e.format.to);return i.length===1?i[0]:i}function ht(){for(K(z.aria),K(z.tooltips),Object.keys(e.cssClasses).forEach(function(r){Q(d,e.cssClasses[r])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider}function Ve(r){var i=C[r],n=m.getNearbySteps(i),o=F[r],f=n.thisStep.step,c=null;if(e.snap)return[o-n.stepBefore.startValue||null,n.stepAfter.startValue-o||null];f!==!1&&o+f>n.stepAfter.startValue&&(f=n.stepAfter.startValue-o),o>n.thisStep.startValue?c=n.thisStep.step:n.stepBefore.step===!1?c=!1:c=o-n.stepBefore.highestStep,i===100?f=null:i===0&&(c=null);var v=m.countStepDecimals();return f!==null&&f!==!1&&(f=Number(f.toFixed(v))),c!==null&&c!==!1&&(c=Number(c.toFixed(v))),[c,f]}function vt(){return U.map(Ve)}function mt(r,i){var n=_e(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach(function(c){r[c]!==void 0&&(a[c]=r[c])});var f=Te(a);o.forEach(function(c){r[c]!==void 0&&(e[c]=f[c])}),m=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,e.pips?se(e.pips):ae(),e.tooltips?xe():ne(),C=[],X(me(r.start)?r.start:n,i)}function gt(){g=Je(d),Ge(e.connect,g),ct(e.events),X(e.start),e.pips&&se(e.pips),e.tooltips&&xe(),Qe()}gt();var Y={destroy:ht,steps:vt,on:ce,off:K,get:_e,set:X,setHandle:dt,reset:pt,disable:Xe,enable:Ye,__moveHandles:function(r,i,n){Pe(r,i,C,n)},options:a,updateOptions:mt,target:d,removePips:ae,removeTooltips:ne,getPositions:function(){return C.slice()},getTooltips:function(){return y},getOrigins:function(){return h},pips:se};return Y}function pr(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var a=Te(e),l=ur(t,a,e);return t.noUiSlider=l,l}const dr={__spectrum:je,cssClasses:Be,create:pr},hr=[{value:"6 000 - 10 000"},{value:"10 000 - 15 000"},{value:"15 000 - 20 000"},{value:"20 000 - 30 000"},{value:"30 000 - 40 000"},{value:"40 000 - 50 000"},{value:"50 000+"}];function vr(t=hr){const e=$(".marketing-calc_content-wrapper_page-4");e.find(".number-of-ads").first(),e.find(".number-of-views").first(),e.find(".number-of-visitors").first(),e.find(".number-of-conversion").first();const a=document.getElementById("price-slider");dr.create(a,{start:3,connect:[!0,!1],step:1,range:{min:0,max:6},pips:{mode:"values",values:[0,1,2,3,4,5,6],density:15}}),a.noUiSlider.on("update",function(l,s){var d;const u=((d=t[Number(l[s])])==null?void 0:d.value)||"N/A";ee("step4",u),$(".price-range").text(`${u} Kr`)})}window.vite="vite";const mr="https://marketing-calc-admin-2024.vercel.app/api/settings";(function(t){const e=St();t.ajax({url:mr,type:"GET",success:function(a){JSON.parse(a)},error:function(a){}}),vr(),yt(),wt(e),xt(e),Et(e),Ct(e),kt(e),At(e),Pt()})(jQuery);
