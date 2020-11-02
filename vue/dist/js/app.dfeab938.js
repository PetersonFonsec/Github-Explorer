(function(e){function t(t){for(var o,n,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,n=1;n<r.length;n++){var s=r[n];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var o={},n={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({repository:"repository"}[e]||e)+"."+{repository:"de4e53a2"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={repository:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({repository:"repository"}[e]||e)+"."+{repository:"e6c220b0"}[e]+".css",i=u.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===o||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete n[e],f.parentNode.removeChild(f),r(a)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){n[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,r){o=i[e]=[t,r]}));t.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=i[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",p.name="ChunkLoadError",p.type=o,p.request=n,r[1](p)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(r,o,function(t){return e[t]}.bind(null,o));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"140e":function(e,t,r){"use strict";r("2dc2")},"15f0":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{staticClass:"bar-info"},[e.avatar?o("img",{attrs:{src:e.avatar,alt:e.alt}}):e._e(),o("div",[o("strong",[e._v(e._s(e.title))]),o("p",[e._v(e._s(e.description))])]),o("img",{staticClass:"arrow",attrs:{src:r("b36e"),alt:"Chevron Right"}})])},n=[],i={name:"BarInfo",props:{msg:{type:String,require:!0},title:{type:String,require:!0},description:{type:String,require:!0},avatar:{type:String,require:!1},alt:{type:String,require:!1}}},a=i,s=(r("3308"),r("2877")),u=Object(s["a"])(a,o,n,!1,null,"7b4e4f54",null);t["a"]=u.exports},"2dc2":function(e,t,r){},3308:function(e,t,r){"use strict";r("83c5")},3481:function(e,t,r){"use strict";var o=r("d4ec"),n=r("bee2"),i=r("ade3"),a=r("bc3a"),s=r.n(a),u=s.a.create({baseURL:"https://api.github.com/"}),c=u,l=function(){function e(){var t;Object(o["a"])(this,e),Object(i["a"])(this,"api",c),Object(i["a"])(this,"localStorageKey",null!==(t=Object({NODE_ENV:"production",BASE_URL:"/"}).REACT_APP_LOCAL_STORAGE_KEY)&&void 0!==t?t:"@GithubExplorer:repositories")}return Object(n["a"])(e,[{key:"getRepositoryData",value:function(e){return this.api.get("repos/".concat(e))}},{key:"getIssue",value:function(e){return this.api.get("repos/".concat(e,"/issues"))}},{key:"getLocalRepository",value:function(){var e=localStorage.getItem(this.localStorageKey);return e?JSON.parse(e):[]}},{key:"setRepository",value:function(e){localStorage.setItem(this.localStorageKey,JSON.stringify(e))}}]),e}();t["a"]=new l},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],a=(r("034f"),r("2877")),s={},u=Object(a["a"])(s,n,i,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"Dashboard"},[o("img",{attrs:{src:r("9b19"),alt:"Github Explorer"}}),o("h2",{staticClass:"title"},[e._v("Explore repositórios no Github.")]),o("form-repository",{on:{submit:e.getRepository}}),o("list-repositories",{attrs:{repositories:e.repositories}})],1)},f=[],d=(r("99af"),r("2909")),h=(r("96cf"),r("1da1")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"list"},e._l(e.repositoriesInternal,(function(e){return r("li",{key:e.full_name},[r("router-link",{attrs:{to:"/repositorio/"+e.full_name}},[r("bar-info",{attrs:{title:e.full_name,description:e.description,avatar:e.owner.avatar_url,alt:e.owner.login}})],1)],1)})),0)},v=[],g=r("15f0"),y={name:"ListRepositories",components:{BarInfo:g["a"]},props:{link:Boolean,repositories:{type:Array,require:!0}},data:function(){return{repositoriesInternal:[]}},watch:{repositories:function(e){return this.repositoriesInternal=e}},mounted:function(){this.repositoriesInternal=this.repositories}},b=y,_=Object(a["a"])(b,m,v,!1,null,null,null),O=_.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],class:{error:e.error},attrs:{type:"text",placeholder:"Digite o nome do repositorio aqui"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Pesquisar")])]),r("span",{staticClass:"error"},[e._v(e._s(e.error))])])},j=[],E={name:"FormRepository",data:function(){return{value:"",error:""}},methods:{reset:function(){this.error=!1,this.value=""},submit:function(){this.value?(this.$emit("submit",this.value),this.reset()):this.error="Digite o autor/nome do repositório"}}},R=E,S=(r("140e"),Object(a["a"])(R,w,j,!1,null,"c48b1f14",null)),x=S.exports,C=r("3481"),k={name:"Dashboard",components:{FormRepository:x,ListRepositories:O},data:function(){return{repositories:[]}},methods:{getRepository:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,C["a"].getRepositoryData(e);case 2:o=r.sent,t.setRepositories([o.data]);case 4:case"end":return r.stop()}}),r)})))()},setRepositories:function(e){var t=[].concat(Object(d["a"])(this.repositories),Object(d["a"])(e));C["a"].setRepository(t),this.repositories=t}},mounted:function(){this.repositories=C["a"].getLocalRepository()}},P=k,L=(r("b985"),Object(a["a"])(P,p,f,!1,null,null,null)),A=L.exports;o["a"].use(l["a"]);var D=[{path:"/",name:"Dashboard",component:A},{path:"/repositorio/:owner/:repository",name:"Repository",component:function(){return r.e("repository").then(r.bind(null,"405d"))}}],q=new l["a"]({mode:"history",base:"/",routes:D}),I=q;o["a"].config.productionTip=!1,new o["a"]({router:I,render:function(e){return e(c)}}).$mount("#app")},"83c5":function(e,t,r){},"85ec":function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.04f6798f.svg"},b36e:function(e,t,r){e.exports=r.p+"img/FiChevronRight.c05090f4.svg"},b985:function(e,t,r){"use strict";r("de7f")},de7f:function(e,t,r){}});
//# sourceMappingURL=app.dfeab938.js.map