(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}})();function xt(){const t=$(".status-bar_rectangle"),e=$("[step='1']").find(t).first(),a=$("[step='2']").find(t).first(),o=$("[step='3']").find(t).first(),s=$("[step='4']").find(t).first(),u=$("[step='5']").find(t).first(),p=new Swiper(".swiper",{loop:!1,rewind:!1,allowTouchMove:!1,noSwipingClass:"swiper-no-swiping"});return p.on("slideChange",function(){const d=p.activeIndex;d===0&&e.removeClass("active"),d===1?(e.addClass("active"),a.removeClass("active")):d===2?(a.addClass("active"),o.removeClass("active")):d===3?(o.addClass("active"),s.removeClass("active")):d===4?(s.addClass("active"),u.removeClass("active")):d===5&&u.addClass("active")}),$(".back-btn").on("click",function(){p.slidePrev()}),p}function ge(t){return localStorage.getItem(t)}function j(t,e){localStorage.setItem(t,e)}function wt(t,e){let a;return e.each((o,s)=>{const u=$(s).val();a=u,localStorage.setItem(t,u)}),a}function Ct(t){$(".marketing-calc_content-wrapper .main-button").on("click",function(){j("step1",$(this).attr("data-val")),j("step1Total",0),t.slideNext()})}function Et(t,e,a){function o(){const s=$(".marketing-calc_content-wrapper_page-2 input:checked"),u=$(this).closest("label"),p=wt("step2",s),v=p&&p==="true"?e.priceForYes:e.priceForNo;j("step2total",v/a),s.length>0&&(u.animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50).delay(50).animate({opacity:0},50).delay(50).animate({opacity:1},50),setTimeout(()=>{t.slideTo(2)},800))}$(".marketing-calc_content-wrapper_page-2 label").on("click",o)}function kt(t,e){$(".marketing-calc_content-wrapper_page-3 label").on("click",function(a){a.preventDefault(),a.stopImmediatePropagation();const o=$(this).find("input");o.prop("checked",!o.prop("checked")),o.prop("checked")?o.prev().addClass("w--redirected-checked"):o.prev().removeClass("w--redirected-checked"),o.attr("name")==="platform-others"&&o.is(":checked")?$(this).closest("form").find("input[type='checkbox']").not(o).prop("checked",!1).prev().removeClass("w--redirected-checked"):o.attr("name")!=="platform-others"&&o.is(":checked")&&$(this).closest("form").find("input[name='platform-others']").prop("checked",!1).prev().removeClass("w--redirected-checked")}),$(".marketing-calc_content-wrapper_page-3 .main-button").on("click",function(a){a.preventDefault();const o=$(".marketing-calc_content-wrapper_page-3 input:checked"),s=o.map((u,p)=>$(p).attr("name")).get();if(j("step3",JSON.stringify(s)),j("step3Total",yt(s,e)),j("ad_spend",s.length*Number(e.costPerPlatform)),o.length===0)throw new Error("Please select at least one option");t.slideNext()})}const Pt={"platform-google":"google","platform-facebook":"facebook","platform-instagram":"instagram","platform-linkedin":"linkedIn","platform-tiktok":"tikTok","platform-youtube":"youtube","platform-snapchat":"snapchat","platform-bing":"bing","platform-others":"platform-others"};function yt(t,e){if(t.length===0||t.includes("platform-others"))return 0;let a=0;return t.forEach(o=>{const s=Pt[o],u=e[s];a+=+u}),t.includes("platform-facebook")&&t.includes("platform-instagram")&&(a-=+e.facebook,a-=+e.instagram,a+=+e.facebookAndInstagram),t.includes("platform-google")&&t.includes("platform-bing")&&(a-=+e.google,a-=+e.bing,a+=+e.googleAndBing),a/+e.baseTotalDivideBy}function At(t){$(".marketing-calc_content-wrapper_page-4 .main-button").on("click",function(e){e.preventDefault(),t.slideNext()})}function Vt(t){$(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click",function(v){v.preventDefault(),t.slideNext()});const e=$("#main-form"),a=$("#primary-submit-btn"),o=e.find(".loader"),s=e.find(".form-error-wrapper");function u(){o.show(),a.attr("disabled",!0),a.css({pointerEvents:"none",textIndent:"-9999px"})}function p(){o.hide(),a.attr("disabled",!1),a.css({pointerEvents:"auto",textIndent:"0"})}a.on("click",function(){u(),e.trigger("submit")}),e.on("submit",function(v){v.preventDefault(),v.stopPropagation();const d={};e.serializeArray().forEach(N=>{d[N.name]=N.value}),e.find($("input[type=checkbox]:not(:checked)")).each(function(){d.hasOwnProperty(this.name)||(d[this.name]="")}),Object.values(d).includes("")?(s.show(),p()):(s.hide(),setTimeout(()=>{p(),j("step5",JSON.stringify(d)),t.slideTo(5)},2e3))})}function Dt(){const t=$(".thankyou-popup"),e=$("#final-submit-btn"),a=e.find(".loader"),o=$(".marketing-calc_content-wrapper_page-7");o.find(".number-of-ads").first(),o.find(".number-of-views").first(),o.find(".number-of-visitors").first(),o.find(".number-of-conversion").first(),e.on("click",function(s){s.preventDefault(),a.show(),e.attr("disabled"),a.siblings().css({pointerEvents:"none",textIndent:"-9999px",display:"none"}),setTimeout(()=>{t.fadeIn(150),setTimeout(function(){a.hide(),a.siblings().css({pointerEvents:"none",textIndent:"0",display:"block"}),e.css({opacity:.4,pointerEvents:"none"})},300)},2e3)})}const Ue=(t,e,a,o)=>{t.on("click",function(s){s.preventDefault(),e.fadeIn()}),o.on("click",function(){e.fadeOut()}),e.on("click",function(s){!a.is(s.target)&&a.has(s.target).length===0&&e.fadeOut()})};function _t(){const t=$(".popup_link"),e=$(".help-popup"),a=e.find(".popup-content_wrapper"),o=e.find(".close-btn"),s=$(".NO_TRIGGER_FOR_THIS_POPUP"),u=$(".thankyou-popup"),p=u.find(".popup-content_wrapper"),v=u.find(".close-btn");Ue(t,e,a,o),Ue(s,u,p,v)}function Ot(t){$(".marketing-calc_content-wrapper_page-6 .pricing-button").on("click",function(e){e.preventDefault(),$("#small-package-price"),$("#medium-package-price"),$("#large-package-price");const a={packagePrice:$(this).attr("data-price"),packageName:$(this).attr("data-val")};j("step5",JSON.stringify(a)),t.slideNext()})}var K;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(K||(K={}));var T;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(T||(T={}));function $t(t){return re(t)&&typeof t.from=="function"}function re(t){return typeof t=="object"&&typeof t.to=="function"}function Te(t){t.parentElement.removeChild(t)}function Se(t){return t!=null}function Fe(t){t.preventDefault()}function Lt(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Nt(t,e){return Math.round(t/e)*e}function Mt(t,e){var a=t.getBoundingClientRect(),o=t.ownerDocument,s=o.documentElement,u=ze(o);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(u.x=0),e?a.top+u.y-s.clientTop:a.left+u.x-s.clientLeft}function H(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function Re(t,e,a){a>0&&(U(t,e),setTimeout(function(){te(t,e)},a))}function He(t){return Math.max(Math.min(t,100),0)}function ne(t){return Array.isArray(t)?t:[t]}function Ut(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function U(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function te(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Tt(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function ze(t){var e=window.pageXOffset!==void 0,a=(t.compatMode||"")==="CSS1Compat",o=e?window.pageXOffset:a?t.documentElement.scrollLeft:t.body.scrollLeft,s=e?window.pageYOffset:a?t.documentElement.scrollTop:t.body.scrollTop;return{x:o,y:s}}function Ft(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Rt(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Ht(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function xe(t,e){return 100/(e-t)}function be(t,e,a){return e*100/(t[a+1]-t[a])}function It(t,e){return be(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function jt(t,e){return e*(t[1]-t[0])/100+t[0]}function Y(t,e){for(var a=1;t>=e[a];)a+=1;return a}function zt(t,e,a){if(a>=t.slice(-1)[0])return 100;var o=Y(a,t),s=t[o-1],u=t[o],p=e[o-1],v=e[o];return p+It([s,u],a)/xe(p,v)}function Bt(t,e,a){if(a>=100)return t.slice(-1)[0];var o=Y(a,e),s=t[o-1],u=t[o],p=e[o-1],v=e[o];return jt([s,u],(a-p)*xe(p,v))}function Kt(t,e,a,o){if(o===100)return o;var s=Y(o,t),u=t[s-1],p=t[s];return a?o-u>(p-u)/2?p:u:e[s-1]?t[s-1]+Nt(o-t[s-1],e[s-1]):o}var Be=function(){function t(e,a,o){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[o||!1],this.xNumSteps=[!1],this.snap=a;var s,u=[];for(Object.keys(e).forEach(function(p){u.push([ne(e[p]),p])}),u.sort(function(p,v){return p[0][0]-v[0][0]}),s=0;s<u.length;s++)this.handleEntryPoint(u[s][1],u[s][0]);for(this.xNumSteps=this.xSteps.slice(0),s=0;s<this.xNumSteps.length;s++)this.handleStepPoint(s,this.xNumSteps[s])}return t.prototype.getDistance=function(e){for(var a=[],o=0;o<this.xNumSteps.length-1;o++)a[o]=be(this.xVal,e,o);return a},t.prototype.getAbsoluteDistance=function(e,a,o){var s=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[s+1];)s++;else e===this.xPct[this.xPct.length-1]&&(s=this.xPct.length-2);!o&&e===this.xPct[s+1]&&s++,a===null&&(a=[]);var u,p=1,v=a[s],d=0,V=0,N=0,k=0;for(o?u=(e-this.xPct[s])/(this.xPct[s+1]-this.xPct[s]):u=(this.xPct[s+1]-e)/(this.xPct[s+1]-this.xPct[s]);v>0;)d=this.xPct[s+1+k]-this.xPct[s+k],a[s+k]*p+100-u*100>100?(V=d*u,p=(v-100*u)/a[s+k],u=1):(V=a[s+k]*d/100*p,p=0),o?(N=N-V,this.xPct.length+k>=1&&k--):(N=N+V,this.xPct.length-k>=1&&k++),v=a[s+k]*p;return e+N},t.prototype.toStepping=function(e){return e=zt(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return Bt(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=Kt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,a,o){var s=Y(e,this.xPct);return(e===100||a&&e===this.xPct[s-1])&&(s=Math.max(s-1,1)),(this.xVal[s]-this.xVal[s-1])/o},t.prototype.getNearbySteps=function(e){var a=Y(e,this.xPct);return{stepBefore:{startValue:this.xVal[a-2],step:this.xNumSteps[a-2],highestStep:this.xHighestCompleteStep[a-2]},thisStep:{startValue:this.xVal[a-1],step:this.xNumSteps[a-1],highestStep:this.xHighestCompleteStep[a-1]},stepAfter:{startValue:this.xVal[a],step:this.xNumSteps[a],highestStep:this.xHighestCompleteStep[a]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Ut);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,a){var o;if(e==="min"?o=0:e==="max"?o=100:o=parseFloat(e),!H(o)||!H(a[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(o),this.xVal.push(a[0]);var s=Number(a[1]);o?this.xSteps.push(isNaN(s)?!1:s):isNaN(s)||(this.xSteps[0]=s),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,a){if(a){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=be([this.xVal[e],this.xVal[e+1]],a,0)/xe(this.xPct[e],this.xPct[e+1]);var o=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],s=Math.ceil(Number(o.toFixed(3))-1),u=this.xVal[e]+this.xNumSteps[e]*s;this.xHighestCompleteStep[e]=u}},t}(),Ie={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},Ke={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},B={tooltips:".__tooltips",aria:".__aria"};function qt(t,e){if(!H(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function Jt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function Wt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Gt(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function Xt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Be(e,t.snap||!1,t.singleStep)}function Yt(t,e){if(e=ne(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function Qt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Zt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function er(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function tr(t,e){var a=[!1],o;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(o=1;o<t.handles;o++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=e}t.connect=a}function rr(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function qe(t,e){if(!H(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function nr(t,e){if(!H(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function ir(t,e){var a;if(!H(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||H(e[0])||H(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],a=0;a<t.spectrum.xNumSteps.length-1;a++)if(t.padding[0][a]<0||t.padding[1][a]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var o=e[0]+e[1],s=t.spectrum.xVal[0],u=t.spectrum.xVal[t.spectrum.xVal.length-1];if(o/(u-s)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function ar(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function sr(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var a=e.indexOf("tap")>=0,o=e.indexOf("drag")>=0,s=e.indexOf("fixed")>=0,u=e.indexOf("snap")>=0,p=e.indexOf("hover")>=0,v=e.indexOf("unconstrained")>=0,d=e.indexOf("drag-all")>=0,V=e.indexOf("smooth-steps")>=0;if(s){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");qe(t,t.start[1]-t.start[0])}if(v&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:a||u,drag:o,dragAll:d,smoothSteps:V,fixed:s,snap:u,hover:p,unconstrained:v}}function or(t,e){if(e!==!1)if(e===!0||re(e)){t.tooltips=[];for(var a=0;a<t.handles;a++)t.tooltips.push(e)}else{if(e=ne(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(o){if(typeof o!="boolean"&&!re(o))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function lr(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function cr(t,e){if(!re(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function fr(t,e){if(!$t(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function ur(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function pr(t,e){t.documentElement=e}function dr(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function hr(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(a){t.cssClasses[a]=t.cssPrefix+e[a]})):t.cssClasses=e}function Je(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Ie,format:Ie},a={step:{r:!1,t:qt},keyboardPageMultiplier:{r:!1,t:Jt},keyboardMultiplier:{r:!1,t:Wt},keyboardDefaultStep:{r:!1,t:Gt},start:{r:!0,t:Yt},connect:{r:!0,t:tr},direction:{r:!0,t:ar},snap:{r:!1,t:Qt},animate:{r:!1,t:Zt},animationDuration:{r:!1,t:er},range:{r:!0,t:Xt},orientation:{r:!1,t:rr},margin:{r:!1,t:qe},limit:{r:!1,t:nr},padding:{r:!1,t:ir},behaviour:{r:!0,t:sr},ariaFormat:{r:!1,t:cr},format:{r:!1,t:fr},tooltips:{r:!1,t:or},keyboardSupport:{r:!0,t:ur},documentElement:{r:!1,t:pr},cssPrefix:{r:!0,t:dr},cssClasses:{r:!0,t:hr},handleAttributes:{r:!1,t:lr}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Ke,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(a).forEach(function(d){if(!Se(t[d])&&o[d]===void 0){if(a[d].r)throw new Error("noUiSlider: '"+d+"' is required.");return}a[d].t(e,Se(t[d])?t[d]:o[d])}),e.pips=t.pips;var s=document.createElement("div"),u=s.style.msTransform!==void 0,p=s.style.transform!==void 0;e.transformRule=p?"transform":u?"msTransform":"webkitTransform";var v=[["left","top"],["right","bottom"]];return e.style=v[e.dir][e.ort],e}function mr(t,e,a){var o=Ft(),s=Ht(),u=s&&Rt(),p=t,v,d,V,N,k,g=e.spectrum,F=[],x=[],O=[],W=0,P={},I=t.ownerDocument,R=e.documentElement||I.documentElement,z=I.body,G=I.dir==="rtl"||e.ort===1?0:100;function D(r,n){var i=I.createElement("div");return n&&U(i,n),r.appendChild(i),i}function We(r,n){var i=D(r,e.cssClasses.origin),l=D(i,e.cssClasses.handle);if(D(l,e.cssClasses.touchArea),l.setAttribute("data-handle",String(n)),e.keyboardSupport&&(l.setAttribute("tabindex","0"),l.addEventListener("keydown",function(c){return ft(c,n)})),e.handleAttributes!==void 0){var f=e.handleAttributes[n];Object.keys(f).forEach(function(c){l.setAttribute(c,f[c])})}return l.setAttribute("role","slider"),l.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),n===0?U(l,e.cssClasses.handleLower):n===e.handles-1&&U(l,e.cssClasses.handleUpper),i.handle=l,i}function we(r,n){return n?D(r,e.cssClasses.connect):!1}function Ge(r,n){var i=D(n,e.cssClasses.connects);d=[],V=[],V.push(we(i,r[0]));for(var l=0;l<e.handles;l++)d.push(We(n,l)),O[l]=l,V.push(we(i,r[l+1]))}function Xe(r){U(r,e.cssClasses.target),e.dir===0?U(r,e.cssClasses.ltr):U(r,e.cssClasses.rtl),e.ort===0?U(r,e.cssClasses.horizontal):U(r,e.cssClasses.vertical);var n=getComputedStyle(r).direction;return n==="rtl"?U(r,e.cssClasses.textDirectionRtl):U(r,e.cssClasses.textDirectionLtr),D(r,e.cssClasses.base)}function Ye(r,n){return!e.tooltips||!e.tooltips[n]?!1:D(r.firstChild,e.cssClasses.tooltip)}function Ce(){return p.hasAttribute("disabled")}function ie(r){var n=d[r];return n.hasAttribute("disabled")}function Qe(r){r!=null?(d[r].setAttribute("disabled",""),d[r].handle.removeAttribute("tabindex")):(p.setAttribute("disabled",""),d.forEach(function(n){n.handle.removeAttribute("tabindex")}))}function Ze(r){r!=null?(d[r].removeAttribute("disabled"),d[r].handle.setAttribute("tabindex","0")):(p.removeAttribute("disabled"),d.forEach(function(n){n.removeAttribute("disabled"),n.handle.setAttribute("tabindex","0")}))}function ae(){k&&(X("update"+B.tooltips),k.forEach(function(r){r&&Te(r)}),k=null)}function Ee(){ae(),k=d.map(Ye),fe("update"+B.tooltips,function(r,n,i){if(!(!k||!e.tooltips)&&k[n]!==!1){var l=r[n];e.tooltips[n]!==!0&&(l=e.tooltips[n].to(i[n])),k[n].innerHTML=l}})}function et(){X("update"+B.aria),fe("update"+B.aria,function(r,n,i,l,f){O.forEach(function(c){var m=d[c],h=Q(x,c,0,!0,!0,!0),w=Q(x,c,100,!0,!0,!0),b=f[c],C=String(e.ariaFormat.to(i[c]));h=g.fromStepping(h).toFixed(1),w=g.fromStepping(w).toFixed(1),b=g.fromStepping(b).toFixed(1),m.children[0].setAttribute("aria-valuemin",h),m.children[0].setAttribute("aria-valuemax",w),m.children[0].setAttribute("aria-valuenow",b),m.children[0].setAttribute("aria-valuetext",C)})})}function tt(r){if(r.mode===K.Range||r.mode===K.Steps)return g.xVal;if(r.mode===K.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var n=r.values-1,i=100/n,l=[];n--;)l[n]=n*i;return l.push(100),ke(l,r.stepped)}return r.mode===K.Positions?ke(r.values,r.stepped):r.mode===K.Values?r.stepped?r.values.map(function(f){return g.fromStepping(g.getStep(g.toStepping(f)))}):r.values:[]}function ke(r,n){return r.map(function(i){return g.fromStepping(n?g.getStep(i):i)})}function rt(r){function n(b,C){return Number((b+C).toFixed(7))}var i=tt(r),l={},f=g.xVal[0],c=g.xVal[g.xVal.length-1],m=!1,h=!1,w=0;return i=Lt(i.slice().sort(function(b,C){return b-C})),i[0]!==f&&(i.unshift(f),m=!0),i[i.length-1]!==c&&(i.push(c),h=!0),i.forEach(function(b,C){var E,S,A,M=b,_=i[C+1],L,de,he,me,Le,ve,Ne,Me=r.mode===K.Steps;for(Me&&(E=g.xNumSteps[C]),E||(E=_-M),_===void 0&&(_=M),E=Math.max(E,1e-7),S=M;S<=_;S=n(S,E)){for(L=g.toStepping(S),de=L-w,Le=de/(r.density||1),ve=Math.round(Le),Ne=de/ve,A=1;A<=ve;A+=1)he=w+A*Ne,l[he.toFixed(5)]=[g.fromStepping(he),0];me=i.indexOf(S)>-1?T.LargeValue:Me?T.SmallValue:T.NoValue,!C&&m&&S!==_&&(me=0),S===_&&h||(l[L.toFixed(5)]=[S,me]),w=L}}),l}function nt(r,n,i){var l,f,c=I.createElement("div"),m=(l={},l[T.None]="",l[T.NoValue]=e.cssClasses.valueNormal,l[T.LargeValue]=e.cssClasses.valueLarge,l[T.SmallValue]=e.cssClasses.valueSub,l),h=(f={},f[T.None]="",f[T.NoValue]=e.cssClasses.markerNormal,f[T.LargeValue]=e.cssClasses.markerLarge,f[T.SmallValue]=e.cssClasses.markerSub,f),w=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],b=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];U(c,e.cssClasses.pips),U(c,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function C(S,A){var M=A===e.cssClasses.value,_=M?w:b,L=M?m:h;return A+" "+_[e.ort]+" "+L[S]}function E(S,A,M){if(M=n?n(A,M):M,M!==T.None){var _=D(c,!1);_.className=C(M,e.cssClasses.marker),_.style[e.style]=S+"%",M>T.NoValue&&(_=D(c,!1),_.className=C(M,e.cssClasses.value),_.setAttribute("data-value",String(A)),_.style[e.style]=S+"%",_.innerHTML=String(i.to(A)))}}return Object.keys(r).forEach(function(S){E(S,r[S][0],r[S][1])}),c}function se(){N&&(Te(N),N=null)}function oe(r){se();var n=rt(r),i=r.filter,l=r.format||{to:function(f){return String(Math.round(f))}};return N=p.appendChild(nt(n,i,l)),N}function Pe(){var r=v.getBoundingClientRect(),n="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||v[n]:r.height||v[n]}function q(r,n,i,l){var f=function(m){var h=it(m,l.pageOffset,l.target||n);if(!h||Ce()&&!l.doNotReject||Tt(p,e.cssClasses.tap)&&!l.doNotReject||r===o.start&&h.buttons!==void 0&&h.buttons>1||l.hover&&h.buttons)return!1;u||h.preventDefault(),h.calcPoint=h.points[e.ort],i(h,l)},c=[];return r.split(" ").forEach(function(m){n.addEventListener(m,f,u?{passive:!0}:!1),c.push([m,f])}),c}function it(r,n,i){var l=r.type.indexOf("touch")===0,f=r.type.indexOf("mouse")===0,c=r.type.indexOf("pointer")===0,m=0,h=0;if(r.type.indexOf("MSPointer")===0&&(c=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(l){var w=function(E){var S=E.target;return S===i||i.contains(S)||r.composed&&r.composedPath().shift()===i};if(r.type==="touchstart"){var b=Array.prototype.filter.call(r.touches,w);if(b.length>1)return!1;m=b[0].pageX,h=b[0].pageY}else{var C=Array.prototype.find.call(r.changedTouches,w);if(!C)return!1;m=C.pageX,h=C.pageY}}return n=n||ze(I),(f||c)&&(m=r.clientX+n.x,h=r.clientY+n.y),r.pageOffset=n,r.points=[m,h],r.cursor=f||c,r}function ye(r){var n=r-Mt(v,e.ort),i=n*100/Pe();return i=He(i),e.dir?100-i:i}function at(r){var n=100,i=!1;return d.forEach(function(l,f){if(!ie(f)){var c=x[f],m=Math.abs(c-r),h=m===100&&n===100,w=m<n,b=m<=n&&r>c;(w||b||h)&&(i=f,n=m)}}),i}function st(r,n){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&le(r,n)}function ot(r,n){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&n.buttonsProperty!==0)return le(r,n);var i=(e.dir?-1:1)*(r.calcPoint-n.startCalcPoint),l=i*100/n.baseSize;Ae(i>0,l,n.locations,n.handleNumbers,n.connect)}function le(r,n){n.handle&&(te(n.handle,e.cssClasses.active),W-=1),n.listeners.forEach(function(i){R.removeEventListener(i[0],i[1])}),W===0&&(te(p,e.cssClasses.drag),pe(),r.cursor&&(z.style.cursor="",z.removeEventListener("selectstart",Fe))),e.events.smoothSteps&&(n.handleNumbers.forEach(function(i){J(i,x[i],!0,!0,!1,!1)}),n.handleNumbers.forEach(function(i){y("update",i)})),n.handleNumbers.forEach(function(i){y("change",i),y("set",i),y("end",i)})}function ce(r,n){if(!n.handleNumbers.some(ie)){var i;if(n.handleNumbers.length===1){var l=d[n.handleNumbers[0]];i=l.children[0],W+=1,U(i,e.cssClasses.active)}r.stopPropagation();var f=[],c=q(o.move,R,ot,{target:r.target,handle:i,connect:n.connect,listeners:f,startCalcPoint:r.calcPoint,baseSize:Pe(),pageOffset:r.pageOffset,handleNumbers:n.handleNumbers,buttonsProperty:r.buttons,locations:x.slice()}),m=q(o.end,R,le,{target:r.target,handle:i,listeners:f,doNotReject:!0,handleNumbers:n.handleNumbers}),h=q("mouseout",R,st,{target:r.target,handle:i,listeners:f,doNotReject:!0,handleNumbers:n.handleNumbers});f.push.apply(f,c.concat(m,h)),r.cursor&&(z.style.cursor=getComputedStyle(r.target).cursor,d.length>1&&U(p,e.cssClasses.drag),z.addEventListener("selectstart",Fe,!1)),n.handleNumbers.forEach(function(w){y("start",w)})}}function lt(r){r.stopPropagation();var n=ye(r.calcPoint),i=at(n);i!==!1&&(e.events.snap||Re(p,e.cssClasses.tap,e.animationDuration),J(i,n,!0,!0),pe(),y("slide",i,!0),y("update",i,!0),e.events.snap?ce(r,{handleNumbers:[i]}):(y("change",i,!0),y("set",i,!0)))}function ct(r){var n=ye(r.calcPoint),i=g.getStep(n),l=g.fromStepping(i);Object.keys(P).forEach(function(f){f.split(".")[0]==="hover"&&P[f].forEach(function(c){c.call(ee,l)})})}function ft(r,n){if(Ce()||ie(n))return!1;var i=["Left","Right"],l=["Down","Up"],f=["PageDown","PageUp"],c=["Home","End"];e.dir&&!e.ort?i.reverse():e.ort&&!e.dir&&(l.reverse(),f.reverse());var m=r.key.replace("Arrow",""),h=m===f[0],w=m===f[1],b=m===l[0]||m===i[0]||h,C=m===l[1]||m===i[1]||w,E=m===c[0],S=m===c[1];if(!b&&!C&&!E&&!S)return!0;r.preventDefault();var A;if(C||b){var M=b?0:1,_=$e(n),L=_[M];if(L===null)return!1;L===!1&&(L=g.getDefaultStep(x[n],b,e.keyboardDefaultStep)),w||h?L*=e.keyboardPageMultiplier:L*=e.keyboardMultiplier,L=Math.max(L,1e-7),L=(b?-1:1)*L,A=F[n]+L}else S?A=e.spectrum.xVal[e.spectrum.xVal.length-1]:A=e.spectrum.xVal[0];return J(n,g.toStepping(A),!0,!0),y("slide",n),y("update",n),y("change",n),y("set",n),!1}function ut(r){r.fixed||d.forEach(function(n,i){q(o.start,n.children[0],ce,{handleNumbers:[i]})}),r.tap&&q(o.start,v,lt,{}),r.hover&&q(o.move,v,ct,{hover:!0}),r.drag&&V.forEach(function(n,i){if(!(n===!1||i===0||i===V.length-1)){var l=d[i-1],f=d[i],c=[n],m=[l,f],h=[i-1,i];U(n,e.cssClasses.draggable),r.fixed&&(c.push(l.children[0]),c.push(f.children[0])),r.dragAll&&(m=d,h=O),c.forEach(function(w){q(o.start,w,ce,{handles:m,handleNumbers:h,connect:n})})}})}function fe(r,n){P[r]=P[r]||[],P[r].push(n),r.split(".")[0]==="update"&&d.forEach(function(i,l){y("update",l)})}function pt(r){return r===B.aria||r===B.tooltips}function X(r){var n=r&&r.split(".")[0],i=n?r.substring(n.length):r;Object.keys(P).forEach(function(l){var f=l.split(".")[0],c=l.substring(f.length);(!n||n===f)&&(!i||i===c)&&(!pt(c)||i===c)&&delete P[l]})}function y(r,n,i){Object.keys(P).forEach(function(l){var f=l.split(".")[0];r===f&&P[l].forEach(function(c){c.call(ee,F.map(e.format.to),n,F.slice(),i||!1,x.slice(),ee)})})}function Q(r,n,i,l,f,c,m){var h;return d.length>1&&!e.events.unconstrained&&(l&&n>0&&(h=g.getAbsoluteDistance(r[n-1],e.margin,!1),i=Math.max(i,h)),f&&n<d.length-1&&(h=g.getAbsoluteDistance(r[n+1],e.margin,!0),i=Math.min(i,h))),d.length>1&&e.limit&&(l&&n>0&&(h=g.getAbsoluteDistance(r[n-1],e.limit,!1),i=Math.min(i,h)),f&&n<d.length-1&&(h=g.getAbsoluteDistance(r[n+1],e.limit,!0),i=Math.max(i,h))),e.padding&&(n===0&&(h=g.getAbsoluteDistance(0,e.padding[0],!1),i=Math.max(i,h)),n===d.length-1&&(h=g.getAbsoluteDistance(100,e.padding[1],!0),i=Math.min(i,h))),m||(i=g.getStep(i)),i=He(i),i===r[n]&&!c?!1:i}function ue(r,n){var i=e.ort;return(i?n:r)+", "+(i?r:n)}function Ae(r,n,i,l,f){var c=i.slice(),m=l[0],h=e.events.smoothSteps,w=[!r,r],b=[r,!r];l=l.slice(),r&&l.reverse(),l.length>1?l.forEach(function(E,S){var A=Q(c,E,c[E]+n,w[S],b[S],!1,h);A===!1?n=0:(n=A-c[E],c[E]=A)}):w=b=[!0];var C=!1;l.forEach(function(E,S){C=J(E,i[E]+n,w[S],b[S],!1,h)||C}),C&&(l.forEach(function(E){y("update",E),y("slide",E)}),f!=null&&y("drag",m))}function Ve(r,n){return e.dir?100-r-n:r}function dt(r,n){x[r]=n,F[r]=g.fromStepping(n);var i=Ve(n,0)-G,l="translate("+ue(i+"%","0")+")";d[r].style[e.transformRule]=l,De(r),De(r+1)}function pe(){O.forEach(function(r){var n=x[r]>50?-1:1,i=3+(d.length+n*r);d[r].style.zIndex=String(i)})}function J(r,n,i,l,f,c){return f||(n=Q(x,r,n,i,l,!1,c)),n===!1?!1:(dt(r,n),!0)}function De(r){if(V[r]){var n=0,i=100;r!==0&&(n=x[r-1]),r!==V.length-1&&(i=x[r]);var l=i-n,f="translate("+ue(Ve(n,l)+"%","0")+")",c="scale("+ue(l/100,"1")+")";V[r].style[e.transformRule]=f+" "+c}}function _e(r,n){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=g.toStepping(r)),r===!1||isNaN(r))?x[n]:r}function Z(r,n,i){var l=ne(r),f=x[0]===void 0;n=n===void 0?!0:n,e.animate&&!f&&Re(p,e.cssClasses.tap,e.animationDuration),O.forEach(function(h){J(h,_e(l[h],h),!0,!1,i)});var c=O.length===1?0:1;if(f&&g.hasNoSize()&&(i=!0,x[0]=0,O.length>1)){var m=100/(O.length-1);O.forEach(function(h){x[h]=h*m})}for(;c<O.length;++c)O.forEach(function(h){J(h,x[h],!0,!0,i)});pe(),O.forEach(function(h){y("update",h),l[h]!==null&&n&&y("set",h)})}function ht(r){Z(e.start,r)}function mt(r,n,i,l){if(r=Number(r),!(r>=0&&r<O.length))throw new Error("noUiSlider: invalid handle number, got: "+r);J(r,_e(n,r),!0,!0,l),y("update",r),i&&y("set",r)}function Oe(r){if(r===void 0&&(r=!1),r)return F.length===1?F[0]:F.slice(0);var n=F.map(e.format.to);return n.length===1?n[0]:n}function vt(){for(X(B.aria),X(B.tooltips),Object.keys(e.cssClasses).forEach(function(r){te(p,e.cssClasses[r])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function $e(r){var n=x[r],i=g.getNearbySteps(n),l=F[r],f=i.thisStep.step,c=null;if(e.snap)return[l-i.stepBefore.startValue||null,i.stepAfter.startValue-l||null];f!==!1&&l+f>i.stepAfter.startValue&&(f=i.stepAfter.startValue-l),l>i.thisStep.startValue?c=i.thisStep.step:i.stepBefore.step===!1?c=!1:c=l-i.stepBefore.highestStep,n===100?f=null:n===0&&(c=null);var m=g.countStepDecimals();return f!==null&&f!==!1&&(f=Number(f.toFixed(m))),c!==null&&c!==!1&&(c=Number(c.toFixed(m))),[c,f]}function gt(){return O.map($e)}function St(r,n){var i=Oe(),l=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];l.forEach(function(c){r[c]!==void 0&&(a[c]=r[c])});var f=Je(a);l.forEach(function(c){r[c]!==void 0&&(e[c]=f[c])}),g=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,e.pips?oe(e.pips):se(),e.tooltips?Ee():ae(),x=[],Z(Se(r.start)?r.start:i,n)}function bt(){v=Xe(p),Ge(e.connect,v),ut(e.events),Z(e.start),e.pips&&oe(e.pips),e.tooltips&&Ee(),et()}bt();var ee={destroy:vt,steps:gt,on:fe,off:X,get:Oe,set:Z,setHandle:mt,reset:ht,disable:Qe,enable:Ze,__moveHandles:function(r,n,i){Ae(r,n,x,i)},options:a,updateOptions:St,target:p,removePips:se,removeTooltips:ae,getPositions:function(){return x.slice()},getTooltips:function(){return k},getOrigins:function(){return d},pips:oe};return ee}function vr(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var a=Je(e),o=mr(t,a,e);return t.noUiSlider=o,o}const gr={__spectrum:Be,cssClasses:Ke,create:vr};function je(t,e){let a=-1,o=1/0;for(let s=0;s<t.length;s++)t[s]>=e&&Math.abs(t[s]-e)<o&&(o=Math.abs(t[s]-e),a=s);return a}function Sr(t,e,a){const o=e.budget.map(R=>R.value),{numberOfAds:s,pageVisitors:u,conversions:p,adViews:v}=e,d=Number(ge("ad_spend")),V=Number(ge("step2total")),N=Number(ge("step3Total")),k=V+N+d,g=$(".marketing-calc_content-wrapper_page-4"),F=g.find(".number-of-ads").first(),x=g.find(".number-of-views").first(),O=g.find(".number-of-visitors").first(),W=g.find(".number-of-conversion").first();function P(R,z){return(+R*+z/+a).toFixed(0)}F.text(P(d,s)),x.text(P(d,v)),O.text(P(d,u)),W.text(P(d,p));const I=document.getElementById("price-slider");gr.create(I,{start:je(o,k),connect:[!0,!1],step:1,range:{min:0,max:6},pips:{mode:"values",values:[0,1,2,3,4,5,6],density:15}}),I.noUiSlider.on("update",function(R,z){const G=o[Number(R[z])]||"N/A";j("step4",G);const D=parseInt(G.replaceAll("+","").replaceAll(" ",""));F.text(P(D,s)),x.text(P(D,v)),O.text(P(D,u)),W.text(P(D,p)),j("resultsPromised",JSON.stringify({numberOfAds:P(D,s),numberOfViews:P(D,v),numberOfVisitors:P(D,u),numberOfConversion:P(D,p)})),$(".price-range").text(`${G} Kr`)}),t.on("slideChange",function(){if(t.activeIndex===3){const R=je(o,k);I.noUiSlider.set(R)}})}function br(){$("input[ms-code-phone-number]").each(function(){let t=this,e=window.intlTelInput(t,{preferredCountries:["no","se"],countrySearch:!0,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"});$.get("https://ipinfo.io",function(s){let u=s.country;e.setCountry(u)},"jsonp"),t.addEventListener("change",a),t.addEventListener("keyup",a);function a(){let s=e.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);t.value=s}$(t).closest("form").submit(function(){let s=e.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);t.value=s})})}window.vite="vite";const xr="https://marketing-calc-admin-2024.vercel.app/api/settings";(function(t){let e={};const a=xt();Ct(a),br(),t.ajax({url:xr,type:"GET",success:function(o){e=JSON.parse(o),_t(),Et(a,e.stepTwo,e.stepThree.baseTotalDivideBy),kt(a,e.stepThree),At(a),Sr(a,e.stepFour,e.stepThree.costPerPlatform),Vt(a),Ot(a),Dt()},error:function(o){}})})(jQuery);
