(()=>{"use strict";var t={53:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([t.id,".test {\n  font-size: 2rem;\n  background-color: green;\n  /* width: ; */\n}\n\n.project-button {\n  border: none;\n  display: flex;\n}\n\ni {\n  padding: 2rem;\n}",""]);const a=s},609:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([t.id,"",""]);const a=s},424:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([t.id,"/* #content {\n  background-color: black;\n  color: white;\n} */",""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);n&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],d=n.base?c[0]+n.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,n);n.byIndex=a,e.splice(a,0,{identifier:l,updater:v,references:1})}s.push(l)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=r(i[s]);e[a].references--}for(var c=n(t,o),d=0;d<i.length;d++){var u=r(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(379),e=r.n(t),n=r(795),o=r.n(n),i=r(569),s=r.n(i),a=r(565),c=r.n(a),d=r(216),u=r.n(d),l=r(589),p=r.n(l),f=r(609),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var m=r(53),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const y=(t,e)=>{const r=document.createElement("button"),n=document.createElement("p"),o=(({iconName:t,className:e,onClick:r=(()=>{})})=>{const n=document.createElement("i");return e&&n.classList.add(e),n.classList.add(...t.split(" ")),n.onclick=r,n})({iconName:"fa-solid fa-trash-can"});return r.classList.add("project-button"),n.textContent=e.title,r.append(n,o),r},g={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let b;const I=new Uint8Array(16);function w(){if(!b&&(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(I)}const j=[];for(let t=0;t<256;++t)j.push((t+256).toString(16).slice(1));const E=function(t,e,r){if(g.randomUUID&&!e&&!t)return g.randomUUID();const n=(t=t||{}).random||(t.rng||w)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return(j[t[e+0]]+j[t[e+1]]+j[t[e+2]]+j[t[e+3]]+"-"+j[t[e+4]]+j[t[e+5]]+"-"+j[t[e+6]]+j[t[e+7]]+"-"+j[t[e+8]]+j[t[e+9]]+"-"+j[t[e+10]]+j[t[e+11]]+j[t[e+12]]+j[t[e+13]]+j[t[e+14]]+j[t[e+15]]).toLowerCase()}(n)},D={LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH"};class T{constructor(t,e,r,n){if(this.id=E(),this.title=t,this.description=e,this.dueDate=new Date(r),Object.values(D).every(priorityItem!==n))throw new Error("Invalid value for 'priority'");this.priority=n}setId=t=>{this.id=t};getId=()=>this.id;setTitle=t=>{this.title=t};getTitle=()=>this.title;setDescription=t=>{this.description=t};getDescription=()=>this.description;setDueDate=t=>{this.dueDate=new Date(t)};getDueDate=()=>this.dueDate;setPriority=t=>{if(Object.values(D).every(priorityItem!==t))throw new Error("Invalid value for 'priority'");this.priority=t};getPriority=()=>this.priority}class x{constructor(t){this.id=E(),this.title=t,this.todos=[]}addTodo=t=>{if(!(t instanceof T))throw new Error("Invalid todo object");this.todos.push(t)};removeTodo=t=>{this.todos=this.todos.filter((e=>e.id!==t))}}var U=r(424),Z={};Z.styleTagTransform=p(),Z.setAttributes=c(),Z.insert=s().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=u(),e()(U.Z,Z),U.Z&&U.Z.locals&&U.Z.locals,(()=>{const t=(()=>{const t=[new x("Today")];let e=t[0].id;return{addProject:e=>{if(!(e instanceof x))throw new Error("Invalid project object");t.push(e)},removeProject:t=>{if((void 0).projects.every((e=>e.id!==t)))throw new Error("Invalid project id");(void 0).projects=[...(void 0).projects.filter((({id:e})=>e!==t))]},getProjects:()=>t,setActiveProjectId:r=>{if(t.every((t=>t.id!==r)))throw new Error("Invalid project id");e=r},getActiveProjectId:()=>e}})(),e=()=>{const e=(t=>{const e=document.createElement("menu");e.classList.add("side-menu");const r=t.getProjects().map((t=>y(0,t)));return e.append(...r),e})(t);document.getElementById("content").appendChild(e)};e()})()})()})();