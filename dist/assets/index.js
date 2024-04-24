(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(s){if(s.ep)return;s.ep=!0;const f=a(s);fetch(s.href,f)}})();function St(){const t=$(".status-bar_rectangle"),e=$("[step='1']").find(t).first(),a=$("[step='2']").find(t).first(),o=$("[step='3']").find(t).first(),s=$("[step='4']").find(t).first(),f=$("[step='5']").find(t).first(),p=new Swiper(".swiper",{loop:!1,rewind:!1,allowTouchMove:!1,noSwipingClass:"swiper-no-swiping"});return p.on("slideChange",function(){const h=p.activeIndex;h===0&&e.removeClass("active"),h===1?(e.addClass("active"),a.removeClass("active")):h===2?(a.addClass("active"),o.removeClass("active")):h===3?(o.addClass("active"),s.removeClass("active")):h===4?(s.addClass("active"),f.removeClass("active")):h===5&&f.addClass("active")}),$(".back-btn").on("click",function(){p.slidePrev()}),p}function bt(t){return localStorage.getItem(t)}function H(t,e){localStorage.setItem(t,e)}function xt(t,e){let a;return e.each((o,s)=>{const f=$(s).val();a=f,localStorage.setItem(t,f)}),a}function wt(t){$(".marketing-calc_content-wrapper .main-button").on("click",function(){H("step1",$(this).attr("data-val")),H("step1Total",0),t.slideNext()})}function Ct(t,e,a){function o(){const s=$(".marketing-calc_content-wrapper_page-2 input:checked"),f=$(this).closest("label"),p=xt("step2",s),v=p&&p==="true"?e.priceForYes:e.priceForNo;H("step2total",v/a),s.length>0&&(f.animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50),setTimeout(()=>{t.slideTo(2)},800))}$(".marketing-calc_content-wrapper_page-2 label").on("click",o)}function Et(t,e){$(".marketing-calc_content-wrapper_page-3 label").on("click",function(a){a.preventDefault(),a.stopImmediatePropagation();const o=$(this).find("input");o.prop("checked",!o.prop("checked")),o.prop("checked")?o.prev().addClass("w--redirected-checked"):o.prev().removeClass("w--redirected-checked"),o.attr("name")==="platform-others"&&o.is(":checked")?$(this).closest("form").find("input[type='checkbox']").not(o).prop("checked",!1).prev().removeClass("w--redirected-checked"):o.attr("name")!=="platform-others"&&o.is(":checked")&&$(this).closest("form").find("input[name='platform-others']").prop("checked",!1).prev().removeClass("w--redirected-checked")}),$(".marketing-calc_content-wrapper_page-3 .main-button").on("click",function(a){a.preventDefault();const o=$(".marketing-calc_content-wrapper_page-3 input:checked"),s=o.map((f,p)=>$(p).attr("name")).get();if(H("step3",JSON.stringify(s)),H("step3Total",Pt(s,e)),H("ad_spend",s.length*Number(e.costPerPlatform)),o.length===0)throw new Error("Please select at least one option");t.slideNext()})}const kt={"platform-google":"google","platform-facebook":"facebook","platform-instagram":"instagram","platform-linkedin":"linkedIn","platform-tiktok":"tikTok","platform-youtube":"youtube","platform-snapchat":"snapchat","platform-bing":"bing","platform-others":"platform-others"};function Pt(t,e){if(t.length===0||t.includes("platform-others"))return 0;let a=0;return t.forEach(o=>{const s=kt[o],f=e[s];a+=+f}),t.includes("platform-facebook")&&t.includes("platform-instagram")&&(a-=+e.facebook,a-=+e.instagram,a+=+e.facebookAndInstagram),t.includes("platform-google")&&t.includes("platform-bing")&&(a-=+e.google,a-=+e.bing,a+=+e.googleAndBing),a/+e.baseTotalDivideBy}function yt(t){$(".marketing-calc_content-wrapper_page-4 .main-button").on("click",function(e){e.preventDefault(),t.slideNext()})}function At(t){$(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click",function(v){v.preventDefault(),t.slideNext()});const e=$("#main-form"),a=$("#primary-submit-btn"),o=e.find(".loader"),s=e.find(".form-error-wrapper");function f(){o.show(),a.attr("disabled",!0),a.css({pointerEvents:"none",textIndent:"-9999px"})}function p(){o.hide(),a.attr("disabled",!1),a.css({pointerEvents:"auto",textIndent:"0"})}a.on("click",function(){f(),e.trigger("submit")}),e.on("submit",function(v){v.preventDefault(),v.stopPropagation();const h={};e.serializeArray().forEach(_=>{h[_.name]=_.value}),e.find($("input[type=checkbox]:not(:checked)")).each(function(){h.hasOwnProperty(this.name)||(h[this.name]="")}),Object.values(h).includes("")?(s.show(),p()):(s.hide(),setTimeout(()=>{p(),H("step5",JSON.stringify(h)),t.slideTo(5)},2e3))})}function Vt(){const t=$(".thankyou-popup"),e=$("#final-submit-btn"),a=e.find(".loader"),o=$(".marketing-calc_content-wrapper_page-7");o.find(".number-of-ads").first(),o.find(".number-of-views").first(),o.find(".number-of-visitors").first(),o.find(".number-of-conversion").first(),e.on("click",function(s){s.preventDefault(),a.show(),e.attr("disabled"),a.siblings().css({pointerEvents:"none",textIndent:"-9999px",display:"none"}),setTimeout(()=>{t.fadeIn(150),setTimeout(function(){a.hide(),a.siblings().css({pointerEvents:"none",textIndent:"0",display:"block"}),e.css({opacity:.4,pointerEvents:"none"})},300)},2e3)})}const Me=(t,e,a,o)=>{t.on("click",function(s){s.preventDefault(),e.fadeIn()}),o.on("click",function(){e.fadeOut()}),e.on("click",function(s){!a.is(s.target)&&a.has(s.target).length===0&&e.fadeOut()})};function Dt(){const t=$(".popup_link"),e=$(".help-popup"),a=e.find(".popup-content_wrapper"),o=e.find(".close-btn"),s=$(".NO_TRIGGER_FOR_THIS_POPUP"),f=$(".thankyou-popup"),p=f.find(".popup-content_wrapper"),v=f.find(".close-btn");Me(t,e,a,o),Me(s,f,p,v)}function Ot(t){$(".marketing-calc_content-wrapper_page-6 .pricing-button").on("click",function(e){e.preventDefault(),$("#small-package-price"),$("#medium-package-price"),$("#large-package-price");const a={packagePrice:$(this).attr("data-price"),packageName:$(this).attr("data-val")};H("step5",JSON.stringify(a)),t.slideNext()})}var z;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(z||(z={}));var F;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(F||(F={}));function _t(t){return te(t)&&typeof t.from=="function"}function te(t){return typeof t=="object"&&typeof t.to=="function"}function Ne(t){t.parentElement.removeChild(t)}function ve(t){return t!=null}function Ue(t){t.preventDefault()}function $t(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Lt(t,e){return Math.round(t/e)*e}function Mt(t,e){var a=t.getBoundingClientRect(),o=t.ownerDocument,s=o.documentElement,f=He(o);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f.x=0),e?a.top+f.y-s.clientTop:a.left+f.x-s.clientLeft}function T(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function Fe(t,e,a){a>0&&(N(t,e),setTimeout(function(){ee(t,e)},a))}function Re(t){return Math.max(Math.min(t,100),0)}function re(t){return Array.isArray(t)?t:[t]}function Nt(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function N(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function ee(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Ut(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function He(t){var e=window.pageXOffset!==void 0,a=(t.compatMode||"")==="CSS1Compat",o=e?window.pageXOffset:a?t.documentElement.scrollLeft:t.body.scrollLeft,s=e?window.pageYOffset:a?t.documentElement.scrollTop:t.body.scrollTop;return{x:o,y:s}}function Ft(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Rt(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Tt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Se(t,e){return 100/(e-t)}function ge(t,e,a){return e*100/(t[a+1]-t[a])}function Ht(t,e){return ge(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function It(t,e){return e*(t[1]-t[0])/100+t[0]}function W(t,e){for(var a=1;t>=e[a];)a+=1;return a}function jt(t,e,a){if(a>=t.slice(-1)[0])return 100;var o=W(a,t),s=t[o-1],f=t[o],p=e[o-1],v=e[o];return p+Ht([s,f],a)/Se(p,v)}function zt(t,e,a){if(a>=100)return t.slice(-1)[0];var o=W(a,e),s=t[o-1],f=t[o],p=e[o-1],v=e[o];return It([s,f],(a-p)*Se(p,v))}function Bt(t,e,a,o){if(o===100)return o;var s=W(o,t),f=t[s-1],p=t[s];return a?o-f>(p-f)/2?p:f:e[s-1]?t[s-1]+Lt(o-t[s-1],e[s-1]):o}var Ie=function(){function t(e,a,o){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[o||!1],this.xNumSteps=[!1],this.snap=a;var s,f=[];for(Object.keys(e).forEach(function(p){f.push([re(e[p]),p])}),f.sort(function(p,v){return p[0][0]-v[0][0]}),s=0;s<f.length;s++)this.handleEntryPoint(f[s][1],f[s][0]);for(this.xNumSteps=this.xSteps.slice(0),s=0;s<this.xNumSteps.length;s++)this.handleStepPoint(s,this.xNumSteps[s])}return t.prototype.getDistance=function(e){for(var a=[],o=0;o<this.xNumSteps.length-1;o++)a[o]=ge(this.xVal,e,o);return a},t.prototype.getAbsoluteDistance=function(e,a,o){var s=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[s+1];)s++;else e===this.xPct[this.xPct.length-1]&&(s=this.xPct.length-2);!o&&e===this.xPct[s+1]&&s++,a===null&&(a=[]);var f,p=1,v=a[s],h=0,D=0,_=0,k=0;for(o?f=(e-this.xPct[s])/(this.xPct[s+1]-this.xPct[s]):f=(this.xPct[s+1]-e)/(this.xPct[s+1]-this.xPct[s]);v>0;)h=this.xPct[s+1+k]-this.xPct[s+k],a[s+k]*p+100-f*100>100?(D=h*f,p=(v-100*f)/a[s+k],f=1):(D=a[s+k]*h/100*p,p=0),o?(_=_-D,this.xPct.length+k>=1&&k--):(_=_+D,this.xPct.length-k>=1&&k++),v=a[s+k]*p;return e+_},t.prototype.toStepping=function(e){return e=jt(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return zt(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=Bt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,a,o){var s=W(e,this.xPct);return(e===100||a&&e===this.xPct[s-1])&&(s=Math.max(s-1,1)),(this.xVal[s]-this.xVal[s-1])/o},t.prototype.getNearbySteps=function(e){var a=W(e,this.xPct);return{stepBefore:{startValue:this.xVal[a-2],step:this.xNumSteps[a-2],highestStep:this.xHighestCompleteStep[a-2]},thisStep:{startValue:this.xVal[a-1],step:this.xNumSteps[a-1],highestStep:this.xHighestCompleteStep[a-1]},stepAfter:{startValue:this.xVal[a],step:this.xNumSteps[a],highestStep:this.xHighestCompleteStep[a]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Nt);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,a){var o;if(e==="min"?o=0:e==="max"?o=100:o=parseFloat(e),!T(o)||!T(a[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(o),this.xVal.push(a[0]);var s=Number(a[1]);o?this.xSteps.push(isNaN(s)?!1:s):isNaN(s)||(this.xSteps[0]=s),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,a){if(a){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=ge([this.xVal[e],this.xVal[e+1]],a,0)/Se(this.xPct[e],this.xPct[e+1]);var o=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],s=Math.ceil(Number(o.toFixed(3))-1),f=this.xVal[e]+this.xNumSteps[e]*s;this.xHighestCompleteStep[e]=f}},t}(),Te={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},je={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},j={tooltips:".__tooltips",aria:".__aria"};function Kt(t,e){if(!T(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function qt(t,e){if(!T(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function Jt(t,e){if(!T(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Wt(t,e){if(!T(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function Gt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Ie(e,t.snap||!1,t.singleStep)}function Xt(t,e){if(e=re(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function Yt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Qt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function Zt(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function er(t,e){var a=[!1],o;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(o=1;o<t.handles;o++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=e}t.connect=a}function tr(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function ze(t,e){if(!T(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function rr(t,e){if(!T(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function ir(t,e){var a;if(!T(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||T(e[0])||T(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],a=0;a<t.spectrum.xNumSteps.length-1;a++)if(t.padding[0][a]<0||t.padding[1][a]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var o=e[0]+e[1],s=t.spectrum.xVal[0],f=t.spectrum.xVal[t.spectrum.xVal.length-1];if(o/(f-s)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function nr(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function ar(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var a=e.indexOf("tap")>=0,o=e.indexOf("drag")>=0,s=e.indexOf("fixed")>=0,f=e.indexOf("snap")>=0,p=e.indexOf("hover")>=0,v=e.indexOf("unconstrained")>=0,h=e.indexOf("drag-all")>=0,D=e.indexOf("smooth-steps")>=0;if(s){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");ze(t,t.start[1]-t.start[0])}if(v&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:a||f,drag:o,dragAll:h,smoothSteps:D,fixed:s,snap:f,hover:p,unconstrained:v}}function sr(t,e){if(e!==!1)if(e===!0||te(e)){t.tooltips=[];for(var a=0;a<t.handles;a++)t.tooltips.push(e)}else{if(e=re(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(o){if(typeof o!="boolean"&&!te(o))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function or(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function lr(t,e){if(!te(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function cr(t,e){if(!_t(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function ur(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function fr(t,e){t.documentElement=e}function pr(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function dr(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(a){t.cssClasses[a]=t.cssPrefix+e[a]})):t.cssClasses=e}function Be(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Te,format:Te},a={step:{r:!1,t:Kt},keyboardPageMultiplier:{r:!1,t:qt},keyboardMultiplier:{r:!1,t:Jt},keyboardDefaultStep:{r:!1,t:Wt},start:{r:!0,t:Xt},connect:{r:!0,t:er},direction:{r:!0,t:nr},snap:{r:!1,t:Yt},animate:{r:!1,t:Qt},animationDuration:{r:!1,t:Zt},range:{r:!0,t:Gt},orientation:{r:!1,t:tr},margin:{r:!1,t:ze},limit:{r:!1,t:rr},padding:{r:!1,t:ir},behaviour:{r:!0,t:ar},ariaFormat:{r:!1,t:lr},format:{r:!1,t:cr},tooltips:{r:!1,t:sr},keyboardSupport:{r:!0,t:ur},documentElement:{r:!1,t:fr},cssPrefix:{r:!0,t:pr},cssClasses:{r:!0,t:dr},handleAttributes:{r:!1,t:or}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:je,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(a).forEach(function(h){if(!ve(t[h])&&o[h]===void 0){if(a[h].r)throw new Error("noUiSlider: '"+h+"' is required.");return}a[h].t(e,ve(t[h])?t[h]:o[h])}),e.pips=t.pips;var s=document.createElement("div"),f=s.style.msTransform!==void 0,p=s.style.transform!==void 0;e.transformRule=p?"transform":f?"msTransform":"webkitTransform";var v=[["left","top"],["right","bottom"]];return e.style=v[e.dir][e.ort],e}function hr(t,e,a){var o=Ft(),s=Tt(),f=s&&Rt(),p=t,v,h,D,_,k,g=e.spectrum,P=[],x=[],A=[],B=0,R={},U=t.ownerDocument,G=e.documentElement||U.documentElement,X=U.body,Ke=U.dir==="rtl"||e.ort===1?0:100;function I(r,i){var n=U.createElement("div");return i&&N(n,i),r.appendChild(n),n}function qe(r,i){var n=I(r,e.cssClasses.origin),l=I(n,e.cssClasses.handle);if(I(l,e.cssClasses.touchArea),l.setAttribute("data-handle",String(i)),e.keyboardSupport&&(l.setAttribute("tabindex","0"),l.addEventListener("keydown",function(c){return lt(c,i)})),e.handleAttributes!==void 0){var u=e.handleAttributes[i];Object.keys(u).forEach(function(c){l.setAttribute(c,u[c])})}return l.setAttribute("role","slider"),l.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?N(l,e.cssClasses.handleLower):i===e.handles-1&&N(l,e.cssClasses.handleUpper),n.handle=l,n}function be(r,i){return i?I(r,e.cssClasses.connect):!1}function Je(r,i){var n=I(i,e.cssClasses.connects);h=[],D=[],D.push(be(n,r[0]));for(var l=0;l<e.handles;l++)h.push(qe(i,l)),A[l]=l,D.push(be(n,r[l+1]))}function We(r){N(r,e.cssClasses.target),e.dir===0?N(r,e.cssClasses.ltr):N(r,e.cssClasses.rtl),e.ort===0?N(r,e.cssClasses.horizontal):N(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?N(r,e.cssClasses.textDirectionRtl):N(r,e.cssClasses.textDirectionLtr),I(r,e.cssClasses.base)}function Ge(r,i){return!e.tooltips||!e.tooltips[i]?!1:I(r.firstChild,e.cssClasses.tooltip)}function xe(){return p.hasAttribute("disabled")}function ie(r){var i=h[r];return i.hasAttribute("disabled")}function Xe(r){r!=null?(h[r].setAttribute("disabled",""),h[r].handle.removeAttribute("tabindex")):(p.setAttribute("disabled",""),h.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function Ye(r){r!=null?(h[r].removeAttribute("disabled"),h[r].handle.setAttribute("tabindex","0")):(p.removeAttribute("disabled"),h.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function ne(){k&&(J("update"+j.tooltips),k.forEach(function(r){r&&Ne(r)}),k=null)}function we(){ne(),k=h.map(Ge),ce("update"+j.tooltips,function(r,i,n){if(!(!k||!e.tooltips)&&k[i]!==!1){var l=r[i];e.tooltips[i]!==!0&&(l=e.tooltips[i].to(n[i])),k[i].innerHTML=l}})}function Qe(){J("update"+j.aria),ce("update"+j.aria,function(r,i,n,l,u){A.forEach(function(c){var m=h[c],d=Y(x,c,0,!0,!0,!0),w=Y(x,c,100,!0,!0,!0),b=u[c],C=String(e.ariaFormat.to(n[c]));d=g.fromStepping(d).toFixed(1),w=g.fromStepping(w).toFixed(1),b=g.fromStepping(b).toFixed(1),m.children[0].setAttribute("aria-valuemin",d),m.children[0].setAttribute("aria-valuemax",w),m.children[0].setAttribute("aria-valuenow",b),m.children[0].setAttribute("aria-valuetext",C)})})}function Ze(r){if(r.mode===z.Range||r.mode===z.Steps)return g.xVal;if(r.mode===z.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,n=100/i,l=[];i--;)l[i]=i*n;return l.push(100),Ce(l,r.stepped)}return r.mode===z.Positions?Ce(r.values,r.stepped):r.mode===z.Values?r.stepped?r.values.map(function(u){return g.fromStepping(g.getStep(g.toStepping(u)))}):r.values:[]}function Ce(r,i){return r.map(function(n){return g.fromStepping(i?g.getStep(n):n)})}function et(r){function i(b,C){return Number((b+C).toFixed(7))}var n=Ze(r),l={},u=g.xVal[0],c=g.xVal[g.xVal.length-1],m=!1,d=!1,w=0;return n=$t(n.slice().sort(function(b,C){return b-C})),n[0]!==u&&(n.unshift(u),m=!0),n[n.length-1]!==c&&(n.push(c),d=!0),n.forEach(function(b,C){var E,S,V,M=b,O=n[C+1],L,pe,de,he,_e,me,$e,Le=r.mode===z.Steps;for(Le&&(E=g.xNumSteps[C]),E||(E=O-M),O===void 0&&(O=M),E=Math.max(E,1e-7),S=M;S<=O;S=i(S,E)){for(L=g.toStepping(S),pe=L-w,_e=pe/(r.density||1),me=Math.round(_e),$e=pe/me,V=1;V<=me;V+=1)de=w+V*$e,l[de.toFixed(5)]=[g.fromStepping(de),0];he=n.indexOf(S)>-1?F.LargeValue:Le?F.SmallValue:F.NoValue,!C&&m&&S!==O&&(he=0),S===O&&d||(l[L.toFixed(5)]=[S,he]),w=L}}),l}function tt(r,i,n){var l,u,c=U.createElement("div"),m=(l={},l[F.None]="",l[F.NoValue]=e.cssClasses.valueNormal,l[F.LargeValue]=e.cssClasses.valueLarge,l[F.SmallValue]=e.cssClasses.valueSub,l),d=(u={},u[F.None]="",u[F.NoValue]=e.cssClasses.markerNormal,u[F.LargeValue]=e.cssClasses.markerLarge,u[F.SmallValue]=e.cssClasses.markerSub,u),w=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],b=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];N(c,e.cssClasses.pips),N(c,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function C(S,V){var M=V===e.cssClasses.value,O=M?w:b,L=M?m:d;return V+" "+O[e.ort]+" "+L[S]}function E(S,V,M){if(M=i?i(V,M):M,M!==F.None){var O=I(c,!1);O.className=C(M,e.cssClasses.marker),O.style[e.style]=S+"%",M>F.NoValue&&(O=I(c,!1),O.className=C(M,e.cssClasses.value),O.setAttribute("data-value",String(V)),O.style[e.style]=S+"%",O.innerHTML=String(n.to(V)))}}return Object.keys(r).forEach(function(S){E(S,r[S][0],r[S][1])}),c}function ae(){_&&(Ne(_),_=null)}function se(r){ae();var i=et(r),n=r.filter,l=r.format||{to:function(u){return String(Math.round(u))}};return _=p.appendChild(tt(i,n,l)),_}function Ee(){var r=v.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||v[i]:r.height||v[i]}function K(r,i,n,l){var u=function(m){var d=rt(m,l.pageOffset,l.target||i);if(!d||xe()&&!l.doNotReject||Ut(p,e.cssClasses.tap)&&!l.doNotReject||r===o.start&&d.buttons!==void 0&&d.buttons>1||l.hover&&d.buttons)return!1;f||d.preventDefault(),d.calcPoint=d.points[e.ort],n(d,l)},c=[];return r.split(" ").forEach(function(m){i.addEventListener(m,u,f?{passive:!0}:!1),c.push([m,u])}),c}function rt(r,i,n){var l=r.type.indexOf("touch")===0,u=r.type.indexOf("mouse")===0,c=r.type.indexOf("pointer")===0,m=0,d=0;if(r.type.indexOf("MSPointer")===0&&(c=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(l){var w=function(E){var S=E.target;return S===n||n.contains(S)||r.composed&&r.composedPath().shift()===n};if(r.type==="touchstart"){var b=Array.prototype.filter.call(r.touches,w);if(b.length>1)return!1;m=b[0].pageX,d=b[0].pageY}else{var C=Array.prototype.find.call(r.changedTouches,w);if(!C)return!1;m=C.pageX,d=C.pageY}}return i=i||He(U),(u||c)&&(m=r.clientX+i.x,d=r.clientY+i.y),r.pageOffset=i,r.points=[m,d],r.cursor=u||c,r}function ke(r){var i=r-Mt(v,e.ort),n=i*100/Ee();return n=Re(n),e.dir?100-n:n}function it(r){var i=100,n=!1;return h.forEach(function(l,u){if(!ie(u)){var c=x[u],m=Math.abs(c-r),d=m===100&&i===100,w=m<i,b=m<=i&&r>c;(w||b||d)&&(n=u,i=m)}}),n}function nt(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&oe(r,i)}function at(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return oe(r,i);var n=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),l=n*100/i.baseSize;Pe(n>0,l,i.locations,i.handleNumbers,i.connect)}function oe(r,i){i.handle&&(ee(i.handle,e.cssClasses.active),B-=1),i.listeners.forEach(function(n){G.removeEventListener(n[0],n[1])}),B===0&&(ee(p,e.cssClasses.drag),fe(),r.cursor&&(X.style.cursor="",X.removeEventListener("selectstart",Ue))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(n){q(n,x[n],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(n){y("update",n)})),i.handleNumbers.forEach(function(n){y("change",n),y("set",n),y("end",n)})}function le(r,i){if(!i.handleNumbers.some(ie)){var n;if(i.handleNumbers.length===1){var l=h[i.handleNumbers[0]];n=l.children[0],B+=1,N(n,e.cssClasses.active)}r.stopPropagation();var u=[],c=K(o.move,G,at,{target:r.target,handle:n,connect:i.connect,listeners:u,startCalcPoint:r.calcPoint,baseSize:Ee(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:x.slice()}),m=K(o.end,G,oe,{target:r.target,handle:n,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers}),d=K("mouseout",G,nt,{target:r.target,handle:n,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers});u.push.apply(u,c.concat(m,d)),r.cursor&&(X.style.cursor=getComputedStyle(r.target).cursor,h.length>1&&N(p,e.cssClasses.drag),X.addEventListener("selectstart",Ue,!1)),i.handleNumbers.forEach(function(w){y("start",w)})}}function st(r){r.stopPropagation();var i=ke(r.calcPoint),n=it(i);n!==!1&&(e.events.snap||Fe(p,e.cssClasses.tap,e.animationDuration),q(n,i,!0,!0),fe(),y("slide",n,!0),y("update",n,!0),e.events.snap?le(r,{handleNumbers:[n]}):(y("change",n,!0),y("set",n,!0)))}function ot(r){var i=ke(r.calcPoint),n=g.getStep(i),l=g.fromStepping(n);Object.keys(R).forEach(function(u){u.split(".")[0]==="hover"&&R[u].forEach(function(c){c.call(Z,l)})})}function lt(r,i){if(xe()||ie(i))return!1;var n=["Left","Right"],l=["Down","Up"],u=["PageDown","PageUp"],c=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(l.reverse(),u.reverse());var m=r.key.replace("Arrow",""),d=m===u[0],w=m===u[1],b=m===l[0]||m===n[0]||d,C=m===l[1]||m===n[1]||w,E=m===c[0],S=m===c[1];if(!b&&!C&&!E&&!S)return!0;r.preventDefault();var V;if(C||b){var M=b?0:1,O=Oe(i),L=O[M];if(L===null)return!1;L===!1&&(L=g.getDefaultStep(x[i],b,e.keyboardDefaultStep)),w||d?L*=e.keyboardPageMultiplier:L*=e.keyboardMultiplier,L=Math.max(L,1e-7),L=(b?-1:1)*L,V=P[i]+L}else S?V=e.spectrum.xVal[e.spectrum.xVal.length-1]:V=e.spectrum.xVal[0];return q(i,g.toStepping(V),!0,!0),y("slide",i),y("update",i),y("change",i),y("set",i),!1}function ct(r){r.fixed||h.forEach(function(i,n){K(o.start,i.children[0],le,{handleNumbers:[n]})}),r.tap&&K(o.start,v,st,{}),r.hover&&K(o.move,v,ot,{hover:!0}),r.drag&&D.forEach(function(i,n){if(!(i===!1||n===0||n===D.length-1)){var l=h[n-1],u=h[n],c=[i],m=[l,u],d=[n-1,n];N(i,e.cssClasses.draggable),r.fixed&&(c.push(l.children[0]),c.push(u.children[0])),r.dragAll&&(m=h,d=A),c.forEach(function(w){K(o.start,w,le,{handles:m,handleNumbers:d,connect:i})})}})}function ce(r,i){R[r]=R[r]||[],R[r].push(i),r.split(".")[0]==="update"&&h.forEach(function(n,l){y("update",l)})}function ut(r){return r===j.aria||r===j.tooltips}function J(r){var i=r&&r.split(".")[0],n=i?r.substring(i.length):r;Object.keys(R).forEach(function(l){var u=l.split(".")[0],c=l.substring(u.length);(!i||i===u)&&(!n||n===c)&&(!ut(c)||n===c)&&delete R[l]})}function y(r,i,n){Object.keys(R).forEach(function(l){var u=l.split(".")[0];r===u&&R[l].forEach(function(c){c.call(Z,P.map(e.format.to),i,P.slice(),n||!1,x.slice(),Z)})})}function Y(r,i,n,l,u,c,m){var d;return h.length>1&&!e.events.unconstrained&&(l&&i>0&&(d=g.getAbsoluteDistance(r[i-1],e.margin,!1),n=Math.max(n,d)),u&&i<h.length-1&&(d=g.getAbsoluteDistance(r[i+1],e.margin,!0),n=Math.min(n,d))),h.length>1&&e.limit&&(l&&i>0&&(d=g.getAbsoluteDistance(r[i-1],e.limit,!1),n=Math.min(n,d)),u&&i<h.length-1&&(d=g.getAbsoluteDistance(r[i+1],e.limit,!0),n=Math.max(n,d))),e.padding&&(i===0&&(d=g.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,d)),i===h.length-1&&(d=g.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,d))),m||(n=g.getStep(n)),n=Re(n),n===r[i]&&!c?!1:n}function ue(r,i){var n=e.ort;return(n?i:r)+", "+(n?r:i)}function Pe(r,i,n,l,u){var c=n.slice(),m=l[0],d=e.events.smoothSteps,w=[!r,r],b=[r,!r];l=l.slice(),r&&l.reverse(),l.length>1?l.forEach(function(E,S){var V=Y(c,E,c[E]+i,w[S],b[S],!1,d);V===!1?i=0:(i=V-c[E],c[E]=V)}):w=b=[!0];var C=!1;l.forEach(function(E,S){C=q(E,n[E]+i,w[S],b[S],!1,d)||C}),C&&(l.forEach(function(E){y("update",E),y("slide",E)}),u!=null&&y("drag",m))}function ye(r,i){return e.dir?100-r-i:r}function ft(r,i){x[r]=i,P[r]=g.fromStepping(i);var n=ye(i,0)-Ke,l="translate("+ue(n+"%","0")+")";h[r].style[e.transformRule]=l,Ae(r),Ae(r+1)}function fe(){A.forEach(function(r){var i=x[r]>50?-1:1,n=3+(h.length+i*r);h[r].style.zIndex=String(n)})}function q(r,i,n,l,u,c){return u||(i=Y(x,r,i,n,l,!1,c)),i===!1?!1:(ft(r,i),!0)}function Ae(r){if(D[r]){var i=0,n=100;r!==0&&(i=x[r-1]),r!==D.length-1&&(n=x[r]);var l=n-i,u="translate("+ue(ye(i,l)+"%","0")+")",c="scale("+ue(l/100,"1")+")";D[r].style[e.transformRule]=u+" "+c}}function Ve(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=g.toStepping(r)),r===!1||isNaN(r))?x[i]:r}function Q(r,i,n){var l=re(r),u=x[0]===void 0;i=i===void 0?!0:i,e.animate&&!u&&Fe(p,e.cssClasses.tap,e.animationDuration),A.forEach(function(d){q(d,Ve(l[d],d),!0,!1,n)});var c=A.length===1?0:1;if(u&&g.hasNoSize()&&(n=!0,x[0]=0,A.length>1)){var m=100/(A.length-1);A.forEach(function(d){x[d]=d*m})}for(;c<A.length;++c)A.forEach(function(d){q(d,x[d],!0,!0,n)});fe(),A.forEach(function(d){y("update",d),l[d]!==null&&i&&y("set",d)})}function pt(r){Q(e.start,r)}function dt(r,i,n,l){if(r=Number(r),!(r>=0&&r<A.length))throw new Error("noUiSlider: invalid handle number, got: "+r);q(r,Ve(i,r),!0,!0,l),y("update",r),n&&y("set",r)}function De(r){if(r===void 0&&(r=!1),r)return P.length===1?P[0]:P.slice(0);var i=P.map(e.format.to);return i.length===1?i[0]:i}function ht(){for(J(j.aria),J(j.tooltips),Object.keys(e.cssClasses).forEach(function(r){ee(p,e.cssClasses[r])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function Oe(r){var i=x[r],n=g.getNearbySteps(i),l=P[r],u=n.thisStep.step,c=null;if(e.snap)return[l-n.stepBefore.startValue||null,n.stepAfter.startValue-l||null];u!==!1&&l+u>n.stepAfter.startValue&&(u=n.stepAfter.startValue-l),l>n.thisStep.startValue?c=n.thisStep.step:n.stepBefore.step===!1?c=!1:c=l-n.stepBefore.highestStep,i===100?u=null:i===0&&(c=null);var m=g.countStepDecimals();return u!==null&&u!==!1&&(u=Number(u.toFixed(m))),c!==null&&c!==!1&&(c=Number(c.toFixed(m))),[c,u]}function mt(){return A.map(Oe)}function vt(r,i){var n=De(),l=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];l.forEach(function(c){r[c]!==void 0&&(a[c]=r[c])});var u=Be(a);l.forEach(function(c){r[c]!==void 0&&(e[c]=u[c])}),g=u.spectrum,e.margin=u.margin,e.limit=u.limit,e.padding=u.padding,e.pips?se(e.pips):ae(),e.tooltips?we():ne(),x=[],Q(ve(r.start)?r.start:n,i)}function gt(){v=We(p),Je(e.connect,v),ct(e.events),Q(e.start),e.pips&&se(e.pips),e.tooltips&&we(),Qe()}gt();var Z={destroy:ht,steps:mt,on:ce,off:J,get:De,set:Q,setHandle:dt,reset:pt,disable:Xe,enable:Ye,__moveHandles:function(r,i,n){Pe(r,i,x,n)},options:a,updateOptions:vt,target:p,removePips:ae,removeTooltips:ne,getPositions:function(){return x.slice()},getTooltips:function(){return k},getOrigins:function(){return h},pips:se};return Z}function mr(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var a=Be(e),o=hr(t,a,e);return t.noUiSlider=o,o}const vr={__spectrum:Ie,cssClasses:je,create:mr};function gr(t,e){let a=t.reduce((o,s)=>Math.abs(s-e)<Math.abs(o-e)?s:o);return t.indexOf(a)}function Sr(t,e){const a=t.budget.map(A=>A.value),{numberOfAds:o,pageVisitors:s,conversions:f,adViews:p}=t,v=Number(bt("ad_spend")),h=$(".marketing-calc_content-wrapper_page-4"),D=h.find(".number-of-ads").first(),_=h.find(".number-of-views").first(),k=h.find(".number-of-visitors").first(),g=h.find(".number-of-conversion").first();function P(A,B){return(+A*+B/+e).toFixed(0)}D.text(P(v,o)),_.text(P(v,p)),k.text(P(v,s)),g.text(P(v,f));const x=document.getElementById("price-slider");vr.create(x,{start:gr(a,v),connect:[!0,!1],step:1,range:{min:0,max:6},pips:{mode:"values",values:[0,1,2,3,4,5,6],density:15}}),x.noUiSlider.on("update",function(A,B){const R=a[Number(A[B])]||"N/A";H("step4",R);const U=parseInt(R.replaceAll("+","").replaceAll(" ","").split(" - ")[0]);D.text(P(U,o)),_.text(P(U,p)),k.text(P(U,s)),g.text(P(U,f)),H("resultsPromised",JSON.stringify({numberOfAds:P(U,o),numberOfViews:P(U,p),numberOfVisitors:P(U,s),numberOfConversion:P(U,f)})),$(".price-range").text(`${R} Kr`)})}function br(){$("input[ms-code-phone-number]").each(function(){let t=this,e=window.intlTelInput(t,{preferredCountries:["no","se"],countrySearch:!0,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"});$.get("https://ipinfo.io",function(s){let f=s.country;e.setCountry(f)},"jsonp"),t.addEventListener("change",a),t.addEventListener("keyup",a);function a(){let s=e.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);t.value=s}$(t).closest("form").submit(function(){let s=e.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);t.value=s})})}window.vite="vite";const xr="https://marketing-calc-admin-2024.vercel.app/api/settings";(function(t){let e={};const a=St();wt(a),br(),t.ajax({url:xr,type:"GET",success:function(o){e=JSON.parse(o),Dt(),Ct(a,e.stepTwo,e.stepThree.baseTotalDivideBy),Et(a,e.stepThree),yt(a),Sr(e.stepFour,e.stepThree.costPerPlatform),At(a),Ot(a),Vt()},error:function(o){}})})(jQuery);
