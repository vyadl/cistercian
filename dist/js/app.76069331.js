(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f46":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f5df1"),n("b107");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-layout"},[t._t("default")],2)},r=[],c=n("2877"),l={},u=Object(c["a"])(l,o,r,!1,null,null,null),d=u.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-layout"},[t._t("default")],2)},f=[],m={},b=Object(c["a"])(m,h,f,!1,null,null,null),p=b.exports,g={components:{HomeLayout:d,InfoLayout:p},computed:{layout:function(){return this.$route.meta.layout||"HomeLayout"}}},v=g,C=Object(c["a"])(v,s,a,!1,null,null,null),_=C.exports,y=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("h1",{staticClass:"title"},[t._v("numerals")]),n("h2",{staticClass:"subtitle"},[t._v("decimal to cistercian")]),n("div",{staticClass:"main-content",class:{parallax:t.isSidebarShown}},[n("CistercianNumbers",{attrs:{"transition-mode":t.transitionMode,"lines-color":t.linesColor}})],1),n("Sidebar",{on:{"change-sidebar-state":function(e){t.isSidebarShown=e},"change-transition-mode":function(e){t.transitionMode=e},"change-lines-color":function(e){t.linesColor=e}}})],1)},w=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cistercian-numbers"},[n("form",{staticClass:"form-number"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.number,expression:"number",modifiers:{number:!0}}],staticClass:"input-number",attrs:{type:"number",placeholder:"your number"},domProps:{value:t.number},on:{input:[function(e){e.target.composing||(t.number=t._n(e.target.value))},function(e){return e.preventDefault(),t.runConvertation(e)}],blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"message-container"},[t.isValidationMessageShown?n("span",{staticClass:"message"},[t._v("max number - "+t._s(t.maxDecimal))]):t._e()])]),n("div",{ref:"cistercianNumber",staticClass:"cistercian-numbers-container",class:{multiple:t.digits.length>1}},t._l(t.digits,(function(e,i){return n("div",{key:i,staticClass:"cistercian-number"},[n("transition",{attrs:{name:t.transitionModeLocal+"-central"}},[t.isCistercianShown&&t.number?n("div",{staticClass:"central-line-wrapper"},[n("div",{staticClass:"central-line-inner",style:{"background-color":t.linesColorLocal}})]):t._e()]),t._l(e.digitsList,(function(i,s,a){return n("div",{key:s,staticClass:"digit",class:[s,"numeral-"+i]},[n("transition",{attrs:{name:"together"===t.transitionModeLocal?t.transitionModeLocal:"separately-"+e.transitions[a]}},[t.isCistercianShown?n("div",t._l(["first","second","third"],(function(e){return n("div",{key:e,staticClass:"line",class:e,style:{"background-color":t.linesColorLocal}})})),0):t._e()])],1)}))],2)})),0),n("div",{staticClass:"links-container"},[t.number?n("span",[n("a",{staticClass:"link",attrs:{href:t.linkHref,download:"cistercian-"+t.number},on:{click:t.downloadAsImage}},[t._v("download")]),t._v(" / "),n("a",{staticClass:"link",attrs:{href:t.linkHref},on:{click:t.copyImage}},[t._v("copy")])]):t._e()])])},k=[],L=(n("fb6a"),n("ac1f"),n("1276"),n("a15b"),n("a434"),function(t,e,n){var i;return function(){for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];var r=this,c=function(){i=null,n||t.apply(r,a)},l=n&&!i;clearTimeout(i),i=setTimeout(c,e),l&&t.apply(r,a)}}),O=function(t){for(var e=[],n=t.slice(),i=0;i<t.length;i++){var s=Math.floor(Math.random()*n.length);e.push(n[s]),n.splice(s,1)}return e},T=n("70b0"),E=n.n(T),x=n("a1bc"),$=window,D=$.ClipboardItem,I=999999999999,N={props:{transitionMode:String,linesColor:String},data:function(){return{number:null,digits:[],isCistercianShown:!1,isValidationMessageShown:!1,maxDecimal:I,linkHref:"http://",digitsTransitionsOrder:[1,2,3,4],transitionModeLocal:localStorage.getItem("transition-mode")||x["DEFAULT_TRANSITION_MODE"],linesColorLocal:localStorage.getItem("lines-color")||x["DEFAULT_LINES_COLOR"]}},watch:{transitionMode:function(){this.transitionModeLocal=this.transitionMode},linesColor:function(){this.linesColorLocal=this.linesColor}},mounted:function(){this.$route.params.number&&(this.number=+this.$route.params.number,this.convertToCistercian())},methods:{validateDecimalNumber:function(){this.number>I&&(this.number=String(this.number).slice(0,String(I).length),this.isValidationMessageShown=!0)},manageRoute:function(){this.number?this.$router.push({name:"homePageWithNumber",params:{number:this.number}}).catch((function(){})):this.$router.push({name:"homePage"}).catch((function(){}))},defineDigits:function(){var t=String(this.number).split(""),e=[];while(t.length){var n=t.length>=4?t.splice(t.length-4,4).join(""):t.splice(0).join("");e.unshift({digitsList:{units:n%10,tens:Math.floor(n%100/10),hundreds:Math.floor(n%1e3/100),thousands:Math.floor(n/1e3)},transitions:O(this.digitsTransitionsOrder)})}this.digits=e},convertToCistercian:function(){var t=this;this.validateDecimalNumber(),this.manageRoute(),this.defineDigits(),this.$nextTick((function(){t.isCistercianShown=!0}))},convertToCistercianDebounced:L((function(){this.convertToCistercian()}),x["DELAY_ON_INPUT"]),runConvertation:function(){this.isCistercianShown=!1,this.isValidationMessageShown=!1,this.convertToCistercianDebounced()},downloadAsImage:function(t){var e=this;"http://"===this.linkHref?(t.preventDefault(),E.a.toJpeg(this.$refs.cistercianNumber).then((function(n){e.linkHref=n,e.$nextTick((function(){t.target.click()}))}))):this.$nextTick((function(){e.linkHref="http://"}))},copyImage:function(t){t.preventDefault(),E.a.toBlob(this.$refs.cistercianNumber).then((function(t){navigator.clipboard.write([new D({"image/png":t})])}))}}},j=N,A=(n("cb34"),Object(c["a"])(j,M,k,!1,null,null,null)),P=A.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar",class:{show:t.isSidebarShown}},[n("div",{staticClass:"buttons-container"},[n("button",{staticClass:"open-button",class:{active:"settings"===t.sidebarMode},on:{click:function(e){return t.showSidebar("settings")}}},[t._v("settings")]),n("button",{staticClass:"open-button",class:{active:"about"===t.sidebarMode},on:{click:function(e){return t.showSidebar("about")}}},[t._v("about")])]),n("div",{staticClass:"sidebar-content"},[n("transition-group",{attrs:{name:"sidebar"}},["settings"===t.sidebarMode?n("CistercianSettings",{key:"settings",on:{"change-transition-mode":t.changeTransitionMode,"change-lines-color":t.changeLinesColor}}):t._e(),"about"===t.sidebarMode?n("CistercianAbout",{key:"about"}):t._e()],1)],1)])},H=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cistercian-settings"},[n("form",{staticClass:"settings"},[n("div",{staticClass:"form-title"},[t._v("lines appearence mode")]),n("div",{staticClass:"transition-mode-buttons-container"},[n("button",{staticClass:"transition-mode-button",class:{active:"together"===t.transitionMode},on:{click:function(e){return e.preventDefault(),t.changeTransitionMode("together")}}},[t._v("together")]),n("button",{staticClass:"transition-mode-button",class:{active:"separately"===t.transitionMode},on:{click:function(e){return e.preventDefault(),t.changeTransitionMode("separately")}}},[t._v("separately")])])]),n("form",{staticClass:"settings"},[n("div",{staticClass:"form-title"},[t._v("lines color")]),n("div",{staticClass:"lines-color-buttons-container"},t._l(t.linesColorPalette,(function(e,i){return n("button",{key:i,staticClass:"lines-color-button",class:{active:t.linesColor===e},style:{"background-color":e},on:{click:function(n){return n.preventDefault(),t.changeLinesColor(e)}}})})),0)])])},F=[],W={data:function(){return{transitionMode:localStorage.getItem("transition-mode")||x["DEFAULT_TRANSITION_MODE"],linesColor:localStorage.getItem("lines-color")||x["DEFAULT_LINES_COLOR"],linesColorPalette:x["LINES_COLOR_PALETTE"]}},methods:{changeTransitionMode:function(t){this.transitionMode=t,this.$emit("change-transition-mode",t),localStorage.setItem("transition-mode",t)},changeLinesColor:function(t){this.linesColor=t,this.$emit("change-lines-color",t),localStorage.setItem("lines-color",t)}}},V=W,J=(n("804c"),Object(c["a"])(V,U,F,!1,null,null,null)),B=J.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cistercian-about"},[n("div",{staticClass:"text"},[n("h3",{staticClass:"text-part-title"},[t._v("What is it?")]),n("p",{staticClass:"text-part"},[t._v(" A numeral system that represents any number up to 9999 in one sign."),n("br"),t._v(" More info in "),n("a",{staticClass:"wiki-link",attrs:{href:"https://en.wikipedia.org/wiki/Cistercian_numerals"}},[t._v("Wikipedia")]),t._v(". ")]),n("h3",{staticClass:"text-part-title"},[t._v("How does it work above 9999?")]),n("p",{staticClass:"text-part"},[t._v(" We use this numeral system as decamillesimal numeral system"),n("br"),t._v(" (system with 10000 distinct symbols)."),n("br"),t._v(' It means that "10000" in decimal system converts into two separate cistercian signs one by one - "1" and "0".'),n("br"),t._v(' Like decimal "8" is "10" in octal system or decimal "16" is "10" in hexadecimal. ')])])])}],z=(n("63b0"),{}),G=Object(c["a"])(z,Y,q,!1,null,null,null),K=G.exports,Q={components:{CistercianSettings:B,CistercianAbout:K},data:function(){return{isSidebarShown:!1,sidebarMode:null}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.target.closest(".sidebar")||(t.isSidebarShown=!1,t.sidebarMode=null,t.$emit("change-sidebar-state",!1))}))},methods:{showSidebar:function(t){this.isSidebarShown=!0,this.sidebarMode=t,this.$emit("change-sidebar-state",!0)},changeTransitionMode:function(t){this.$emit("change-transition-mode",t)},changeLinesColor:function(t){this.$emit("change-lines-color",t)}}},X=Q,Z=(n("f203"),Object(c["a"])(X,R,H,!1,null,null,null)),tt=Z.exports,et={components:{CistercianNumbers:P,Sidebar:tt},data:function(){return{isSidebarShown:!1,transitionMode:"",linesColor:""}}},nt=et,it=(n("e146"),Object(c["a"])(nt,S,w,!1,null,null,null)),st=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-page"},[t._v("info")])},ot=[],rt={},ct=Object(c["a"])(rt,at,ot,!1,null,null,null),lt=ct.exports;i["a"].use(y["a"]);var ut=[{path:"/",name:"homePage",component:st,children:[{path:":number",name:"homePageWithNumber",component:st}]},{path:"/pages/info",name:"infoPage",component:lt,meta:{layout:"InfoLayout"}}],dt=new y["a"]({mode:"history",base:"/",routes:ut}),ht=dt;i["a"].config.productionTip=!1,new i["a"]({router:ht,render:function(t){return t(_)}}).$mount("#app")},"63b0":function(t,e,n){"use strict";n("88b9")},"7b7f":function(t,e,n){},"804c":function(t,e,n){"use strict";n("7b7f")},"88b9":function(t,e,n){},9741:function(t,e,n){},"9b8d":function(t,e,n){},a1bc:function(t,e){t.exports={DELAY_ON_INPUT:600,DEFAULT_TRANSITION_MODE:"together",DEFAULT_LINES_COLOR:"#000",LINES_COLOR_PALETTE:{black:"#000",cherry:"#871933",peach:"#F2B08F",blue:"#349E97",green:"#1b6d54",purple:"#6D7CD1"}}},b107:function(t,e,n){},cb34:function(t,e,n){"use strict";n("1f46")},e146:function(t,e,n){"use strict";n("9b8d")},f203:function(t,e,n){"use strict";n("9741")}});
//# sourceMappingURL=app.76069331.js.map