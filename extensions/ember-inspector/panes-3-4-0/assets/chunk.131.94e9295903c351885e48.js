/*! For license information please see chunk.131.94e9295903c351885e48.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[131],{348:(e,t,n)=>{"use strict"
function r(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function i(e,t,n,i){var o={configurable:!0,enumerable:!0}
"undefined"!==r(i)?o.get=i:(o.writable=!1,o.value=n),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function s(e,t){this.blueprint=e,this.builders=t}n.d(t,{Z:()=>u}),s.prototype={builderFor:function(e){return this.builders[r(e)]||this.builders.default},build:function(e){var t,n={}
return this.processNode({root:this.blueprint},n),o(t=n.root,e),t},processNode:function(e,t,n){var i=Object.keys(e),s=this
return i.forEach((function(n){var i,o,u,l=e[n]
i=s.builderFor(l),o=a[r(l)]||a.default,(u=i(t,n,l,o))&&s.processNode(u[1],u[0],t)})),o(t,n),t}}
const a={descriptor:function(e,t,n){"function"==typeof n.setup&&n.setup(e,t),n.value?i(e,t,n.value):i(e,t,void 0,(function(){return n.get.call(this,t)}))},object:function(e,t,n){var r,o,s={}
return i(e,t,s),r=s,o=t,Object.defineProperty(r,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[s,n]},default:function(e,t,n){i(e,t,n)}},u={defineProperty:i,create:function(e,t){var n=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++)if(e=n[r])for(var i in e)void 0!==e[i]&&(t[i]=e[i])
return t}({},a,(t=t||{}).builder)
return new s(e,n).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},800:(e,t,n)=>{"use strict"
n.d(t,{CP:()=>s,VS:()=>a,u4:()=>o})
var r=n(348),i=n(554)
const o="Element not found."
function s(e,t){const{query:n,node:r}=e,o=(0,i.KM)(r,n.selector,n)
a(r,n.key,t,{selector:o})}function a(e,t,n){let i,{selector:o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=[t],a=n instanceof Error?n.message:n.toString()
for(i=e;i;i=r.Z.parent(i))s.unshift(r.Z.meta(i).key)
s[0]="page",s.length>0&&(a+=`\n\nPageObject: '${s.join(".")}'`),"string"==typeof o&&o.trim().length>0&&(a=`${a}\n  Selector: '${o}'`)
const u=new Error(a)
throw n instanceof Error&&"stack"in n&&(u.stack=n.stack),console.error(u.message),u}},304:(e,t,n)=>{"use strict"
n.d(t,{U:()=>s,y:()=>o})
var r=n(348),i=n(554)
function o(e){return!(0,i.yj)(e)._chainedTree}function s(e){if(o(e))return e
let t,n=[]
for(t=e;t;t=r.Z.parent(t))n.unshift(r.Z.meta(t).key)
return n.shift(),t=(0,i.yj)(e)._chainedTree,n.forEach((e=>{t=function(e,t){let n
if(n=/\[(\d+)\]$/.exec(t)){let[r,i]=n
return e[t.slice(0,-r.length)].objectAt(parseInt(i,10))}return e[t]}(t,e)})),t}},58:(e,t,n)=>{"use strict"
function r(e,t,n,i){Array.isArray(r.__calls)&&r.__calls.push([e,t,n,i])
const[o,s]=n.split(".")
console.warn(`DEPRECATION: ${t} [deprecation id: ember-cli-page-object.${e}] See https://ember-cli-page-object.js.org/docs/v${o}.${s}.x/deprecations#${e} for more details.`)}n.d(t,{Z:()=>r})},964:(e,t,n)=>{"use strict"
n.d(t,{X3:()=>u,Yv:()=>l,bl:()=>a,cw:()=>c})
var r=n(554),i=n(385),o=n(800)
function s(e,t){return t.testContainer||(0,r.wK)(e,"testContainer")||(0,i.u)().testContainer}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),a=s(e,n),u=(0,r.$)(i,a).toArray()
return(0,r.fP)(u,i),0===u.length&&(0,o.VS)(e,n.pageObjectKey,o.u4,{selector:i}),u[0]}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),o=s(e,n)
return(0,r.$)(i,o).toArray()}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),a=s(e,n)
let u=(0,r.$)(i,a)
return(0,r.fP)(u,i,n.multiple),0===u.length&&(0,o.VS)(e,n.pageObjectKey,o.u4,{selector:i}),u}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),o=s(e,n)
let a=(0,r.$)(i,o)
return(0,r.fP)(a,i,n.multiple),a}n(348),n(823),n(550)},554:(e,t,n)=>{"use strict"
n.d(t,{$:()=>o,KM:()=>c,wK:()=>d,Rs:()=>p,yj:()=>f,fP:()=>l})
var r=n(348),i=n(58)
let o
{const e=(s=n(339))?.__esModule?s:{default:s}
o=e.default}var s
function a(e){return void 0!==e}class u{constructor(e,t,n,r){this.targetNode=e,this.targetScope=t||"",this.targetSelector=n||"",this.targetFilters=r}toString(){let e,t
e=this.targetFilters.resetScope?this.targetScope:this.calculateScope(this.targetNode,this.targetScope),`${e} ${this.targetSelector}`.indexOf(",")>-1&&(0,i.Z)("comma-separated-selectors","Usage of comma separated selectors is deprecated in ember-cli-page-object","1.16.0","2.0.0"),t=this.calculateFilters(this.targetFilters)
let n=`${e} ${this.targetSelector}${t}`.trim()
return n.length||(n=":first"),n}calculateFilters(){let e=[]
return this.targetFilters.visible&&e.push(":visible"),this.targetFilters.contains&&e.push(`:contains("${this.targetFilters.contains}")`),"number"==typeof this.targetFilters.at?e.push(`:eq(${this.targetFilters.at})`):this.targetFilters.last&&e.push(":last"),e.join("")}calculateScope(e,t){let n=this.getScopes(e)
return n.reverse(),n.push(t),n.join(" ").trim()}getScopes(e){let t=[]
return e.scope&&t.push(e.scope),!e.resetScope&&r.Z.parent(e)&&(t=t.concat(this.calculateScope(r.Z.parent(e)))),t}}function l(e,t,n){if(e.length>1&&!n)throw new Error(`"${t}" matched more than one element. If you want to select many elements, use collections instead.`)}function c(e,t,n){return new u(e,n.scope,t,n).toString()}function f(e){let t=r.Z.parent(e),n=e
for(;t;)n=t,t=r.Z.parent(t)
return n}function p(e){let t=function(e,t){let n=e,i=[]
for(;a(n);)a(n.scope)&&i.push(n.scope),n=r.Z.parent(n)
return i}(e)
return t.reverse().join(" ")}function d(e,t){if(a(e[t]))return e[t]
let n=r.Z.parent(e)
return a(n)?d(n,t):void 0}},385:(e,t,n)=>{"use strict"
n.d(t,{u:()=>i})
var r=n(823)
function i(){return new r.Z}n(550)},823:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>i})
var r=n(550)
class i extends class{get testContainer(){throw new Error("`testContainer` is not implemented for the adapter")}visit(){throw new Error("`visit` is not implemented for the adapter")}click(){throw new Error("`click` is not implemented for the adapter")}fillIn(){throw new Error("`fillIn` is not implemented for the adapter")}triggerEvent(){throw new Error("`triggerEvent` is not implemented for the adapter")}focus(){throw new Error("`focus` is not implemented for the adapter")}blur(){throw new Error("`blur` is not implemented for the adapter")}}{get testContainer(){return(0,r.getRootElement)()}visit(e){return(0,r.visit)(e)}click(e){return(0,r.click)(e)}fillIn(e,t){return(0,r.fillIn)(e,t)}triggerEvent(e,t,n){if(void 0!==n.key||void 0!==n.keyCode){const i=n.key||n.keyCode
return(0,r.triggerKeyEvent)(e,t,i,n)}return(0,r.triggerEvent)(e,t,n)}focus(e){return(0,r.focus)(e)}blur(e){return(0,r.blur)(e)}}},490:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{buildSelector:()=>i.KM,findElement:()=>r.cw,findElementWithAssert:()=>r.Yv,findMany:()=>r.X3,findOne:()=>r.bl,fullScope:()=>i.Rs})
var r=n(964),i=n(554)
n(385),n(823),n(550),n(800),n(348)},359:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{attribute:()=>_,blurrable:()=>v,buildSelector:()=>a.KM,clickOnText:()=>m,clickable:()=>y,collection:()=>R,contains:()=>b,count:()=>M,create:()=>H,default:()=>U,fillable:()=>x,findElement:()=>g.cw,findElementWithAssert:()=>g.Yv,focusable:()=>T,hasClass:()=>F,isHidden:()=>C,isPresent:()=>E,isVisible:()=>j,notHasClass:()=>W,property:()=>B,selectable:()=>K,text:()=>k,triggerable:()=>X,value:()=>D,visitable:()=>$})
var r=n(348),i=n(58)
function o(e){if(e&&"object"==typeof e){let t=r.Z.meta(e)
return Boolean(t&&t.__poDef__)}return!1}function s(e){if(o(e))return r.Z.meta(e).__poDef__
throw new Error("cannot get the page object definition from a node that is not a page object")}var a=n(554),u=n(385),l=n(800),c=n(304)
function f(e,t,n){const r=(0,u.u)(),i=Object.freeze({query:t,node:e,adapter:r}),o=(0,a.yj)(e)
return(0,c.y)(e)?(o._promise=Promise.resolve(o._promise).then((()=>p(i,n))),e):(o._chainedTree._promise=p(i,n),(0,c.U)(e))}function p(e,t){let n
try{n=t(e)}catch(t){(0,l.CP)(e,t)}return Promise.resolve(n).catch((t=>{(0,l.CP)(e,t)}))}function d(e,t){return{isDescriptor:!0,get:n=>function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
return({query:e,cb:t}=h(n,e,t,i)),f(this,e,(e=>t.bind(e)(...i)))}}}function h(e,t,n,r){let i=`${e}(${r.length?`"${r.map((e=>String(e))).join('", "')}"`:""})`
return"function"==typeof t?(n=t,t={key:i}):t={...t,key:i},{query:t,cb:n}}n(823),n(550)
var g=n(964)
function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return d({...t,selector:e},(function(){const e=(0,g.bl)(this.node,this.query.selector,this.query)
return this.adapter.blur(e)}))}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return d({...t,selector:e},(function(){const e=(0,g.bl)(this.node,this.query.selector,this.query)
return this.adapter.click(e)}))}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return d({...t,selector:e},(function(t){this.query.contains=t,this.query.last=!0
const n=`${e||""} `
let r
r=(0,g.X3)(this.node,n,this.query).length?n:e
const i=(0,g.bl)(this.node,r,this.query)
return this.adapter.click(i)}))}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get:n=>function(r){let i={pageObjectKey:`${n}("${r}")`,...t}
return(0,a.$)((0,g.bl)(this,e,i)).text().indexOf(r)>-1}}}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return d({...t,selector:e},(function(t,n){let r
void 0===n?n=t:r=t
let i=e
if(r&&(i=w(this,r),!i))throw new Error(`Can not find element by clue: "${r}".`)
const o=(0,g.bl)(this.node,i,this.query)
return this.adapter.fillIn(o,n)}))}function w(e,t){let{node:n,query:r}=e
return["input","textarea","select","[contenteditable]"].map((e=>[`${e}[data-test="${t}"]`,`${e}[aria-label="${t}"]`,`${e}[placeholder="${t}"]`,`${e}[name="${t}"]`,`${e}#${t}`])).reduce(((e,t)=>e.concat(t)),[]).find((e=>(0,g.X3)(n,`${r.selector} ${e}`,r)[0]))}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n={...t,selector:e}
return d(n,(function(){const e=(0,g.bl)(this.node,this.query.selector,this.query)
return this.adapter.focus(e)}))}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){let r={pageObjectKey:n,...t},i=(0,g.X3)(this,e,r)
return(0,a.fP)(i,e),0===i.length||(0,a.$)(i[0]).is(":hidden")}}}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){let r={pageObjectKey:n,...t},i=(0,g.X3)(this,e,r)
return(0,a.fP)(i,e),1===i.length}}}function j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){let r={pageObjectKey:n,...t},i=(0,g.X3)(this,e,r)
return(0,a.fP)(i,e,r.multiple),1===i.length&&(0,a.$)(i[0]).is(":visible")}}}function S(e){return e}function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){let r={pageObjectKey:n,...t}
return(!1===r.normalize?S:A)((0,a.$)((0,g.bl)(this,e,r)).text())}}}function A(e){return e.trim().replace(/\n/g," ").replace(/\s\s*/g," ")}function D(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){let r={pageObjectKey:n,...t}
const i=(0,g.bl)(this,e,r)
return i.hasAttribute("contenteditable")?(0,a.$)(i).html():(0,a.$)(i).val()}}}const N={isDescriptor:!0,value(){const e=(0,a.yj)(this)
return(e._chainedTree||e)._promise.then(...arguments)}},q={as:function(e){return e(this),this},blur:v(),click:y(),clickOn:m(),contains:b(),fillIn:x(),focus:T(),isHidden:C(),isPresent:E(),isVisible:j(),select:x(),text:k(),then:N,value:D()}
function O(e,t){return e.split("/").map((function(e){let n=e.match(/^:(.+)$/)
if(n){let[,e]=n,r=t[e]
if(void 0===r)throw new Error(`Missing parameter for '${e}'`)
return delete t[e],encodeURIComponent(r)}return e})).join("/")}function L(e,t){return Object.keys(t).length&&(e+=`?${a.$.param(t)}`),e}function $(e){return d((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={...t},r=O(e,n)
return r=L(r,n),this.adapter.visit(r)}))}function P(e,t,n,a){let u
o(n)?u=s(n):(Object.getOwnPropertyNames(n).forEach((e=>{const{get:t,value:r}=Object.getOwnPropertyDescriptor(n,e)
"function"==typeof t?Object.defineProperty(n,e,{value:{isDescriptor:!0,get:t}}):"string"!=typeof r||["scope","testContainer"].includes(e)||(0,i.Z)("string-properties-on-definition","do not use string values on definitions","1.17.0","2.0.0")})),u=n)
let l={...u}
l._chainedTree&&delete l._chainedTree,n={...q,...u}
const[c,f]=a(e,t,n,a)
return function(e,t){r.Z.meta(e).__poDef__=t}(c,l),[c,f]}function H(e,t,n){let a,u,l
var c,f
if("string"==typeof e?(u=e,a=t||{},l=n||{}):(u=!1,a=e||{},l=t||{}),a=o(a)?{...s(a)}:(c={},f=a,Object.getOwnPropertyNames(f).forEach((e=>{const t=Object.getOwnPropertyDescriptor(f,e)
Object.defineProperty(c,e,t)})),c),a.context)throw new Error('"context" key is not allowed to be passed at definition root.')
"string"==typeof u&&(0,i.Z)("create-url-argument","Passing an URL argument to `create()` is deprecated","1.17.0","2.0.0"),u&&(a.visit=$(u))
let p={object:P},d=r.Z.create(a,{builder:p,...l})
a._chainedTree={isDescriptor:!0,get:()=>d}
let h={object:P}
return r.Z.create(a,{builder:h,...l})}function _(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return{isDescriptor:!0,get(r){let i={pageObjectKey:r,...n}
return(0,a.$)((0,g.bl)(this,t,i)).attr(e)}}}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){let r={pageObjectKey:n,...t}
return(0,g.X3)(this,e,r).length}}}function R(e,t){if("string"!=typeof e)throw new Error("collection requires `scope` as the first argument")
o(t)&&(t=s(t))
let n={isDescriptor:!0,setup(r,i){var o
n.value=(o=new I(e,t,r,i),window.Proxy?new window.Proxy(o,{get:function(e,t){if("number"==typeof t||"string"==typeof t){let n=parseInt(t,10)
if(!isNaN(n))return e.objectAt(n)}return e[t]}}):o)}}
return n}class I{constructor(e,t,n,r){this.scope=e,this.definition=t||{},this.parent=n,this.key=r,this._itemCounter=H({count:M(e,{resetScope:this.definition.resetScope,testContainer:this.definition.testContainer})},{parent:n}),this._items=[]}get length(){return this._itemCounter.count}objectAt(e){let{key:t}=this
if(void 0===this._items[e]){let{scope:n,definition:i,parent:o}=this,s=(0,a.KM)({},n,{at:e}),u={...i}
u.scope=s
let l=H(u,{parent:o})
r.Z.meta(l).key=`${t}[${e}]`,this._items[e]=l}return this._items[e]}filter(){return this.toArray().filter(...arguments)}filterBy(e,t){return this.toArray().filter((n=>void 0!==t?n[e]===t:Boolean(n[e])))}forEach(){return this.toArray().forEach(...arguments)}map(){return this.toArray().map(...arguments)}mapBy(e){return this.toArray().map((t=>t[e]))}findOneBy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=this.filterBy(...t)
return this._assertFoundElements(r,...t),r[0]}findOne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=this.filter(...t)
return this._assertFoundElements(r,...t),r[0]}_assertFoundElements(e){const t=1==(arguments.length<=1?0:arguments.length-1)?"condition":`${arguments.length<=1?void 0:arguments[1]}: "${arguments.length<=2?void 0:arguments[2]}"`
e.length>1&&(0,l.VS)(this.parent,this.key,`${e.length} elements found by ${t}, but expected 1`),0===e.length&&(0,l.VS)(this.parent,this.key,`cannot find element by ${t}`)}toArray(){let{length:e}=this,t=[]
for(let n=0;n<e;n++)t.push(this.objectAt(n))
return t}}function F(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return{isDescriptor:!0,get(r){let i={pageObjectKey:r,...n}
return(0,g.bl)(this,t,i).classList.contains(e)}}}function W(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return{isDescriptor:!0,get(r){let i={pageObjectKey:r,...n}
return!(0,g.bl)(this,t,i).classList.contains(e)}}}function B(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return{isDescriptor:!0,get(r){let i={pageObjectKey:r,...n}
return(0,a.$)((0,g.bl)(this,t,i)).prop(e)}}}function X(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return d({...n,selector:t},(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const r={...n.eventProperties,...t},i=(0,g.bl)(this.node,this.query.selector,this.query)
return this.adapter.triggerEvent(i,e,r)}))}"undefined"!=typeof Symbol&&Symbol.iterator&&(I.prototype[Symbol.iterator]=function(){let e=0,t=this.toArray()
return{next:()=>({done:e>=t.length,value:t[e++]})}})
const K=x
var U={attribute:_,blurrable:v,clickOnText:m,clickable:y,collection:R,contains:b,count:M,create:H,fillable:x,focusable:T,hasClass:F,isHidden:C,isPresent:E,isVisible:j,notHasClass:W,property:B,selectable:x,text:k,value:D,visitable:$,triggerable:X}},413:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{alias:()=>o,getter:()=>a})
var r=n(800),i=n(304)
function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{isDescriptor:!0,get(n){try{const n=s(this,e)
return"function"==typeof n&&t.chainable?function(){return n(...arguments),(0,i.U)(this)}:n}catch(e){(0,r.VS)(this,n,e)}}}}function s(e,t){const n=t.split(".")
let r,i=e
for(;n.length>0;){const e=n.shift()
if(null===i||"object"!=typeof i||!Object.prototype.hasOwnProperty.call(i,e))throw new Error(`PageObject does not contain aliased property \`${t}\`.`)
n.length?i=i[e]:r=i[e]}return"function"==typeof r?r.bind(i):r}function a(e){return{isDescriptor:!0,get(t){return"function"!=typeof e&&(0,r.VS)(this,t,"Argument passed to `getter` must be a function."),e.call(this,t)}}}n(348),n(554)},339:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,i){"use strict"
var o=[],s=Object.getPrototypeOf,a=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,c=o.indexOf,f={},p=f.toString,d=f.hasOwnProperty,h=d.toString,g=h.call(Object),v={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},m=function(e){return null!=e&&e===e.window},b=r.document,x={type:!0,src:!0,nonce:!0,noModule:!0}
function w(e,t,n){var r,i,o=(n=n||b).createElement("script")
if(o.text=e,t)for(r in x)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i)
n.head.appendChild(o).parentNode.removeChild(o)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[p.call(e)]||"object":typeof e}var C="3.6.1",E=function(e,t){return new E.fn.init(e,t)}
function j(e){var t=!!e&&"length"in e&&e.length,n=T(e)
return!y(e)&&!m(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}E.fn=E.prototype={jquery:C,constructor:E,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(E.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1
for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||y(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,s[t]=E.extend(l,o,r)):void 0!==r&&(s[t]=r))
return s},E.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==p.call(e)||(t=s(e))&&("function"!=typeof(n=d.call(t,"constructor")&&t.constructor)||h.call(n)!==g))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(j(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},makeArray:function(e,t){var n=t||[]
return null!=e&&(j(Object(e))?E.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,n){var r,i,o=0,s=[]
if(j(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i)
else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i)
return u(s)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=o[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}))
var S=function(e){var t,n,r,i,o,s,a,u,l,c,f,p,d,h,g,v,y,m,b,x="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ue(),j=ue(),S=ue(),k=ue(),A=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,N=[],q=N.pop,O=N.push,L=N.push,$=N.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",_="[\\x20\\t\\r\\n\\f]",M="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",R="\\[[\\x20\\t\\r\\n\\f]*("+M+")(?:"+_+"*([*^$|!~]?=)"+_+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+_+"*\\]",I=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",F=new RegExp(_+"+","g"),W=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),B=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),X=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),K=new RegExp(_+"|>"),U=new RegExp(I),z=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+I),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},Z=/HTML$/i,Y=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){p()},se=xe((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"})
try{L.apply(N=$.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(e){L={apply:N.length?function(e,t){O.apply(e,$.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ae(e,t,r,i){var o,a,l,c,f,h,y,m=t&&t.ownerDocument,w=t?t.nodeType:9
if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r
if(!i&&(p(t),t=t||d,g)){if(11!==w&&(f=J.exec(e)))if(o=f[1]){if(9===w){if(!(l=t.getElementById(o)))return r
if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r
if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!v||!v.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(y=e,m=t,1===w&&(K.test(e)||X.test(e))){for((m=ee.test(e)&&ye(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,ie):t.setAttribute("id",c=x)),a=(h=s(e)).length;a--;)h[a]=(c?"#"+c:":scope")+" "+be(h[a])
y=h.join(",")}try{return L.apply(r,m.querySelectorAll(y)),r}catch(t){k(e,!0)}finally{c===x&&t.removeAttribute("id")}}}return u(e.replace(W,"$1"),t,r,i)}function ue(){var e=[]
return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function le(e){return e[x]=!0,e}function ce(e){var t=d.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function de(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ve(e){return le((function(t){return t=+t,le((function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))}))}))}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},o=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!Z.test(t||n&&n.nodeName||"HTML")},p=ae.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:w
return s!=d&&9===s.nodeType&&s.documentElement?(h=(d=s).documentElement,g=!o(d),w!=d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),n.scope=ce((function(e){return h.appendChild(e).appendChild(d.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ce((function(e){return h.appendChild(e).id=x,!d.getElementsByName||!d.getElementsByName(x).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e)
return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=Q.test(d.querySelectorAll))&&(ce((function(e){var t
h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+H+")"),e.querySelectorAll("[id~="+x+"-]").length||v.push("~="),(t=d.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=d.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")}))),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",I)})),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),t=Q.test(h.compareDocumentPosition),b=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},A=t?function(e,t){if(e===t)return f=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==d||e.ownerDocument==w&&b(w,e)?-1:t==d||t.ownerDocument==w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],a=[t]
if(!i||!o)return e==d?-1:t==d?1:i?-1:o?1:c?P(c,e)-P(c,t):0
if(i===o)return pe(e,t)
for(n=e;n=n.parentNode;)s.unshift(n)
for(n=t;n=n.parentNode;)a.unshift(n)
for(;s[r]===a[r];)r++
return r?pe(s[r],a[r]):s[r]==w?-1:a[r]==w?1:0},d):d},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&g&&!k[t+" "]&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){k(t,!0)}return ae(t,d,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=d&&p(e),b(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=d&&p(e)
var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0
return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ae.escape=function(e){return(e+"").replace(re,ie)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,r=[],i=0,o=0
if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o))
for(;i--;)e.splice(r[i],1)}return c=null,e},i=ae.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t)
return n},r=ae.selectors={cacheLength:50,createPseudo:le,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "]
return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+_+"|$)"))&&E(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=ae.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(F," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,y=a&&t.nodeName.toLowerCase(),m=!u&&!a,b=!1
if(v){if(o){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1
h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&m){for(b=(d=(l=(c=(f=(p=v)[x]||(p[x]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(b=d=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){c[e]=[T,d,b]
break}}else if(m&&(b=d=(l=(c=(f=(p=t)[x]||(p[x]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===b)for(;(p=++d&&p&&p[g]||(b=d=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++b||(m&&((c=(f=p[x]||(p[x]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,b]),p!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e)
return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=P(e,o[s])]=!(n[r]=o[s])})):function(e){return i(e,0,n)}):i}},pseudos:{not:le((function(e){var t=[],n=[],r=a(e.replace(W,"$1"))
return r[x]?le((function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:le((function(e){return function(t){return ae(e,t).length>0}})),contains:le((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:le((function(e){return z.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n
do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve((function(){return[0]})),last:ve((function(e,t){return[t-1]})),eq:ve((function(e,t,n){return[n<0?n+t:n]})),even:ve((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:ve((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:ve((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:ve((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=de(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t)
function me(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function xe(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=C++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i)
return!1}:function(t,n,u){var l,c,f,p=[T,a]
if(u){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(c=(f=t[x]||(t[x]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
else{if((l=c[o])&&l[0]===T&&l[1]===a)return p[2]=l[2]
if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function Te(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)))
return s}function Ce(e,t,n,r,i,o){return r&&!r[x]&&(r=Ce(r)),i&&!i[x]&&(i=Ce(i,o)),le((function(o,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ae(e,t[r],n)
return n}(t||"*",a.nodeType?[a]:a,[]),v=!e||!o&&t?g:Te(g,p,e,a,u),y=n?i||(o?e:h||r)?[]:s:v
if(n&&n(v,y,a,u),r)for(l=Te(y,d),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!(v[d[c]]=f))
if(o){if(i||e){if(i){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f)
i(null,y=[],l,u)}for(c=y.length;c--;)(f=y[c])&&(l=i?P(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else y=Te(y===s?y.splice(h,y.length):y),i?i(null,s,y,u):L.apply(s,y)}))}function Ee(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],u=s?1:0,c=xe((function(e){return e===t}),a,!0),f=xe((function(e){return P(t,e)>-1}),a,!0),p=[function(e,n,r){var i=!s&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r))
return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[xe(we(p),n)]
else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[x]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return Ce(u>1&&we(p),u>1&&be(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(W,"$1"),n,u<i&&Ee(e.slice(u,i)),i<o&&Ee(e=e.slice(i)),i<o&&be(e))}p.push(n)}return we(p)}return me.prototype=r.filters=r.pseudos,r.setFilters=new me,s=ae.tokenize=function(e,t){var n,i,o,s,a,u,l,c=j[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],l=r.preFilter;a;){for(s in n&&!(i=B.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=X.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(W," ")}),a=a.slice(n.length)),r.filter)!(i=V[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length))
if(!n)break}return t?a.length:a?ae.error(e):j(e,u).slice(0)},a=ae.compile=function(e,t){var n,i=[],o=[],a=S[e+" "]
if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=Ee(t[n]))[x]?i.push(a):o.push(a)
a=S(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,u,c){var f,h,v,y=0,m="0",b=o&&[],x=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,j=C.length
for(c&&(l=s==d||s||c);m!==j&&null!=(f=C[m]);m++){if(i&&f){for(h=0,s||f.ownerDocument==d||(p(f),a=!g);v=e[h++];)if(v(f,s||d,a)){u.push(f)
break}c&&(T=E)}n&&((f=!v&&f)&&y--,o&&b.push(f))}if(y+=m,n&&m!==y){for(h=0;v=t[h++];)v(b,x,s,a)
if(o){if(y>0)for(;m--;)b[m]||x[m]||(x[m]=q.call(u))
x=Te(x)}L.apply(u,x),c&&!o&&x.length>0&&y+t.length>1&&ae.uniqueSort(u)}return c&&(T=E,l=w),b}
return n?le(o):o}(o,i)),a.selector=e}return a},u=ae.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&s(e=p.selector||e)
if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n
p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=V.needsContext.test(e)?0:u.length;o--&&(l=u[o],!r.relative[c=l.type]);)if((f=r.find[c])&&(i=f(l.matches[0].replace(te,ne),ee.test(u[0].type)&&ye(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&be(u)))return L.apply(n,i),n
break}}return(p||a(e,d))(i,t,!g,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!f,p(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||fe("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||fe("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||fe(H,(function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ae}(r)
E.find=S,E.expr=S.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=S.uniqueSort,E.text=S.getText,E.isXMLDoc=S.isXML,E.contains=S.contains,E.escapeSelector=S.escape
var k=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break
r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},D=E.expr.match.needsContext
function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function O(e,t,n){return y(t)?E.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?E.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?E.grep(e,(function(e){return c.call(t,e)>-1!==n})):E.filter(t,e,n)}E.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,(function(e){return 1===e.nodeType})))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(E(e).filter((function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n)
return r>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(O(this,e||[],!1))},not:function(e){return this.pushStack(O(this,e||[],!0))},is:function(e){return!!O(this,"string"==typeof e&&D.test(e)?E(e):e||[],!1).length}})
var L,$=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||L,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:$.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),q.test(r[1])&&E.isPlainObject(t))for(r in t)y(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(i=b.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,L=E(b)
var P=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0}
function _(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&E(e)
if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(E(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return _(e,"nextSibling")},prev:function(e){return _(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(N(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},(function(e,t){E.fn[e]=function(n,r){var i=E.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=E.filter(r,i)),this.length>1&&(H[e]||E.uniqueSort(i),P.test(e)&&i.reverse()),this.pushStack(i)}}))
var M=/[^\x20\t\r\n\f]+/g
function R(e){return e}function I(e){throw e}function F(e,t,n,r){var i
try{e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return E.each(e.match(M)||[],(function(e,n){t[n]=!0})),t}(e):E.extend({},e)
var t,n,r,i,o=[],s=[],a=-1,u=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){E.each(n,(function(n,r){y(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==T(r)&&t(r)}))}(arguments),n&&!t&&u()),this},remove:function(){return E.each(arguments,(function(e,t){for(var n;(n=E.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?E.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},E.extend({Deferred:function(e){var t=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return E.Deferred((function(n){E.each(t,(function(t,r){var i=y(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=i&&i.apply(this,arguments)
e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,i){var o=0
function s(e,t,n,i){return function(){var a=this,u=arguments,l=function(){var r,l
if(!(e<o)){if((r=n.apply(a,u))===t.promise())throw new TypeError("Thenable self-resolution")
l=r&&("object"==typeof r||"function"==typeof r)&&r.then,y(l)?i?l.call(r,s(o,t,R,i),s(o,t,I,i)):(o++,l.call(r,s(o,t,R,i),s(o,t,I,i),s(o,t,R,t.notifyWith))):(n!==R&&(a=void 0,u=[r]),(i||t.resolveWith)(a,u))}},c=i?l:function(){try{l()}catch(r){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(r,c.stackTrace),e+1>=o&&(n!==I&&(a=void 0,u=[r]),t.rejectWith(a,u))}}
e?c():(E.Deferred.getStackHook&&(c.stackTrace=E.Deferred.getStackHook()),r.setTimeout(c))}}return E.Deferred((function(r){t[0][3].add(s(0,r,y(i)?i:R,r.notifyWith)),t[1][3].add(s(0,r,y(e)?e:R)),t[2][3].add(s(0,r,y(n)?n:I))})).promise()},promise:function(e){return null!=e?E.extend(e,i):i}},o={}
return E.each(t,(function(e,r){var s=r[2],a=r[5]
i[r[1]]=s.add,a&&s.add((function(){n=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=s.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=E.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}}
if(t<=1&&(F(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||y(i[n]&&i[n].then)))return o.then()
for(;n--;)F(i[n],s(n),o.reject)
return o.promise()}})
var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
E.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&W.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){r.setTimeout((function(){throw e}))}
var B=E.Deferred()
function X(){b.removeEventListener("DOMContentLoaded",X),r.removeEventListener("load",X),E.ready()}E.fn.ready=function(e){return B.then(e).catch((function(e){E.readyException(e)})),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0,!0!==e&&--E.readyWait>0||B.resolveWith(b,[E]))}}),E.ready.then=B.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?r.setTimeout(E.ready):(b.addEventListener("DOMContentLoaded",X),r.addEventListener("load",X))
var K=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n
if("object"===T(n))for(a in i=!0,n)K(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,y(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},U=/^-ms-/,z=/-([a-z])/g
function V(e,t){return t.toUpperCase()}function Z(e){return e.replace(U,"ms-").replace(z,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[Z(t)]=n
else for(r in t)i[Z(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Z(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Z):(t=Z(t))in r?[t]:t.match(M)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!E.isEmptyObject(t)}}
var Q=new G,J=new G,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g
function ne(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}J.set(e,t,n)}else n=void 0
return n}E.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=Z(r.slice(5)),ne(o,r,i[r]))
Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){J.set(this,e)})):K(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=J.get(o,e))||void 0!==(n=ne(o,e))?n:void 0
this.each((function(){J.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){J.remove(this,e)}))}}),E.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){E.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return Q.get(e,n)||Q.access(e,n,{empty:E.Callbacks("once memory").add((function(){Q.remove(e,[t+"queue",n])}))})}}),E.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?E.queue(this[0],e):void 0===t?this:this.each((function(){var n=E.queue(this,e,t)
E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){E.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Q.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],se=b.documentElement,ae=function(e){return E.contains(e.ownerDocument,e)},ue={composed:!0}
se.getRootNode&&(ae=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(ue)===e.ownerDocument})
var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ae(e)&&"none"===E.css(e,"display")}
function ce(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=a(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&ie.exec(E.css(e,t))
if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;s--;)E.style(e,t,c+l),(1-o)*(1-(o=a()/u||.5))<=0&&(s=0),c/=o
c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var fe={}
function pe(e){var t,n=e.ownerDocument,r=e.nodeName,i=fe[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=E.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),fe[r]=i,i)}function de(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Q.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&le(r)&&(i[o]=pe(r))):"none"!==n&&(i[o]="none",Q.set(r,"display",n)))
for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}E.fn.extend({show:function(){return de(this,!0)},hide:function(){return de(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?E(this).show():E(this).hide()}))}})
var he,ge,ve=/^(?:checkbox|radio)$/i,ye=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,me=/^$|^module$|\/(?:java|ecma)script/i
he=b.createDocumentFragment().appendChild(b.createElement("div")),(ge=b.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),he.appendChild(ge),v.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",v.option=!!he.lastChild
var be={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function xe(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?E.merge([e],n):n}function we(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,v.option||(be.optgroup=be.option=[1,"<select multiple='multiple'>","</select>"])
var Te=/<|&#?\w+;/
function Ce(e,t,n,r,i){for(var o,s,a,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===T(o))E.merge(p,o.nodeType?[o]:o)
else if(Te.test(o)){for(s=s||f.appendChild(t.createElement("div")),a=(ye.exec(o)||["",""])[1].toLowerCase(),u=be[a]||be._default,s.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];c--;)s=s.lastChild
E.merge(p,s.childNodes),(s=f.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(f.textContent="",d=0;o=p[d++];)if(r&&E.inArray(o,r)>-1)i&&i.push(o)
else if(l=ae(o),s=xe(f.appendChild(o),"script"),l&&we(s),n)for(c=0;o=s[c++];)me.test(o.type||"")&&n.push(o)
return f}var Ee=/^([^.]*)(?:\.(.+)|)/
function je(){return!0}function Se(){return!1}function ke(e,t){return e===function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var s,a
if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se
else if(!i)return e
return 1===o&&(s=i,i=function(e){return E().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=E.guid++)),e.each((function(){E.event.add(this,t,i,r,n)}))}function De(e,t,n){n?(Q.set(e,t,!1),E.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=Q.get(this,t)
if(1&e.isTrigger&&this[t]){if(o.length)(E.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(o=a.call(arguments),Q.set(this,t,o),r=n(this,t),this[t](),o!==(i=Q.get(this,t))||r?Q.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i&&i.value}else o.length&&(Q.set(this,t,{value:E.event.trigger(E.extend(o[0],E.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,t)&&E.event.add(e,t,je)}E.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=Q.get(e)
if(Y(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(se,i),n.guid||(n.guid=E.guid++),(u=v.events)||(u=v.events=Object.create(null)),(s=v.handle)||(s=v.handle=function(t){return void 0!==E&&E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;l--;)d=g=(a=Ee.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e)
if(v&&(u=v.events)){for(l=(t=(t||"").match(M)||[""]).length;l--;)if(d=g=(a=Ee.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d){for(f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||E.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0)
E.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=new Array(arguments.length),u=E.event.fix(e),l=(Q.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{}
for(a[0]=u,t=1;t<arguments.length;t++)a[t]=arguments[t]
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(s=E.event.handlers.call(this,u,l),t=0;(i=s[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,s,a=[],u=t.delegateCount,l=e.target
if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],s={},n=0;n<u;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?E(i,this).index(l)>-1:E.find(i,this,null,[l]).length),s[i]&&o.push(r)
o.length&&a.push({elem:l,handlers:o})}return l=this,u<t.length&&a.push({elem:l,handlers:t.slice(u)}),a},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return ve.test(t.type)&&t.click&&N(t,"input")&&De(t,"click",je),!1},trigger:function(e){var t=this||e
return ve.test(t.type)&&t.click&&N(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target
return ve.test(t.type)&&t.click&&N(t,"input")&&Q.get(t,"click")||N(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?je:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=je,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=je,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=je,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},(function(e,t){E.event.special[e]={setup:function(){return De(this,e,ke),!1},trigger:function(){return De(this,e),!0},_default:function(t){return Q.get(t.target,e)},delegateType:t}})),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
return i&&(i===r||E.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),E.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each((function(){E.event.remove(this,e,n,t)}))}})
var Ne=/<script|<style|<link/i,qe=/checked\s*(?:[^=]|=\s*.checked.)/i,Oe=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function $e(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,s,a
if(1===t.nodeType){if(Q.hasData(e)&&(a=Q.get(e).events))for(i in Q.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)E.event.add(t,i,a[i][n])
J.hasData(e)&&(o=J.access(e),s=E.extend({},o),J.set(t,s))}}function _e(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&ve.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Me(e,t,n,r){t=u(t)
var i,o,s,a,l,c,f=0,p=e.length,d=p-1,h=t[0],g=y(h)
if(g||p>1&&"string"==typeof h&&!v.checkClone&&qe.test(h))return e.each((function(i){var o=e.eq(i)
g&&(t[0]=h.call(this,i,o.html())),Me(o,t,n,r)}))
if(p&&(o=(i=Ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=E.map(xe(i,"script"),$e)).length;f<p;f++)l=i,f!==d&&(l=E.clone(l,!0,!0),a&&E.merge(s,xe(l,"script"))),n.call(e[f],l,f)
if(a)for(c=s[s.length-1].ownerDocument,E.map(s,Pe),f=0;f<a;f++)l=s[f],me.test(l.type||"")&&!Q.access(l,"globalEval")&&E.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?E._evalUrl&&!l.noModule&&E._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):w(l.textContent.replace(Oe,""),l,c))}return e}function Re(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(xe(r)),r.parentNode&&(n&&ae(r)&&we(xe(r,"script")),r.parentNode.removeChild(r))
return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=ae(e)
if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(s=xe(a),r=0,i=(o=xe(e)).length;r<i;r++)_e(o[r],s[r])
if(t)if(n)for(o=o||xe(e),s=s||xe(a),r=0,i=o.length;r<i;r++)He(o[r],s[r])
else He(e,a)
return(s=xe(a,"script")).length>0&&we(s,!u&&xe(e,"script")),a},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle)
n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return K(this,(function(e){return void 0===e?E.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Me(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)}))},prepend:function(){return Me(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(xe(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return E.clone(this,e,t)}))},html:function(e){return K(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Ne.test(e)&&!be[(ye.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(xe(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return Me(this,arguments,(function(t){var n=this.parentNode
E.inArray(this,e)<0&&(E.cleanData(xe(this)),n&&n.replaceChild(t,this))}),e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){E.fn[e]=function(e){for(var n,r=[],i=E(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),E(i[s])[t](n),l.apply(r,n.get())
return this.pushStack(r)}}))
var Ie=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),Fe=/^--/,We=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},Be=function(e,t,n){var r,i,o={}
for(i in t)o[i]=e.style[i],e.style[i]=t[i]
for(i in r=n.call(e),t)e.style[i]=o[i]
return r},Xe=new RegExp(oe.join("|"),"i"),Ke=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g")
function Ue(e,t,n){var r,i,o,s,a=Fe.test(t),u=e.style
return(n=n||We(e))&&(s=n.getPropertyValue(t)||n[t],a&&(s=s.replace(Ke,"$1")),""!==s||ae(e)||(s=E.style(e,t)),!v.pixelBoxStyles()&&Ie.test(s)&&Xe.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=s,s=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==s?s+"":s}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(l).appendChild(c)
var e=r.getComputedStyle(c)
n="1%"!==e.top,u=12===t(e.marginLeft),c.style.right="60%",s=36===t(e.right),i=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),se.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,s,a,u,l=b.createElement("div"),c=b.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===c.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,i
return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",se.appendChild(e).appendChild(t).appendChild(n),i=r.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,se.removeChild(e)),a}}))}()
var Ve=["Webkit","Moz","ms"],Ze=b.createElement("div").style,Ye={}
function Ge(e){return E.cssProps[e]||Ye[e]||(e in Ze?e:Ye[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ve.length;n--;)if((e=Ve[n]+t)in Ze)return e}(e)||e)}var Qe=/^(none|table(?!-c[ea]).+)/,Je={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"}
function tt(e,t,n){var r=ie.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function nt(e,t,n,r,i,o){var s="width"===t?1:0,a=0,u=0
if(n===(r?"border":"content"))return 0
for(;s<4;s+=2)"margin"===n&&(u+=E.css(e,n+oe[s],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+oe[s],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+oe[s]+"Width",!0,i))):(u+=E.css(e,"padding"+oe[s],!0,i),"padding"!==n?u+=E.css(e,"border"+oe[s]+"Width",!0,i):a+=E.css(e,"border"+oe[s]+"Width",!0,i))
return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-a-.5))||0),u}function rt(e,t,n){var r=We(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,s=Ue(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1)
if(Ie.test(s)){if(!n)return s
s="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&N(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+nt(e,t,n||(i?"border":"content"),o,r,s)+"px"}function it(e,t,n,r,i){return new it.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ue(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z(t),u=Fe.test(t),l=e.style
if(u||(t=Ge(a)),s=E.cssHooks[t]||E.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:l[t]
"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ce(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,s,a=Z(t)
return Fe.test(t)||(t=Ge(a)),(s=E.cssHooks[t]||E.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Ue(e,t,r)),"normal"===i&&t in et&&(i=et[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],(function(e,t){E.cssHooks[t]={get:function(e,n,r){if(n)return!Qe.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?rt(e,t,r):Be(e,Je,(function(){return rt(e,t,r)}))},set:function(e,n,r){var i,o=We(e),s=!v.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===E.css(e,"boxSizing",!1,o),u=r?nt(e,t,r,a,o):0
return a&&s&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-nt(e,t,"border",!1,o)-.5)),u&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),tt(0,n,u)}}})),E.cssHooks.marginLeft=ze(v.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ue(e,"marginLeft"))||e.getBoundingClientRect().left-Be(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),E.each({margin:"",padding:"",border:"Width"},(function(e,t){E.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0]
return i}},"margin"!==e&&(E.cssHooks[e+t].set=tt)})),E.fn.extend({css:function(e,t){return K(this,(function(e,t,n){var r,i,o={},s=0
if(Array.isArray(t)){for(r=We(e),i=t.length;s<i;s++)o[t[s]]=E.css(e,t[s],!1,r)
return o}return void 0!==n?E.style(e,t,n):E.css(e,t)}),e,t,arguments.length>1)}}),E.Tween=it,it.prototype={constructor:it,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=it.propHooks[this.prop]
return e&&e.get?e.get(this):it.propHooks._default.get(this)},run:function(e){var t,n=it.propHooks[this.prop]
return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):it.propHooks._default.set(this),this}},it.prototype.init.prototype=it.prototype,it.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}},it.propHooks.scrollTop=it.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=it.prototype.init,E.fx.step={}
var ot,st,at=/^(?:toggle|show|hide)$/,ut=/queueHooks$/
function lt(){st&&(!1===b.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(lt):r.setTimeout(lt,E.fx.interval),E.fx.tick())}function ct(){return r.setTimeout((function(){ot=void 0})),ot=Date.now()}function ft(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function dt(e,t,n){var r,i,o=0,s=dt.prefilters.length,a=E.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1
for(var t=ot||ct(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r)
return a.notifyWith(e,[l,r,n]),r<1&&s?n:(s||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:ot||ct(),duration:n.duration,tweens:[],createTween:function(t,n){var r=E.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)l.tweens[n].run(1)
return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=Z(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=E.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,l.opts.specialEasing);o<s;o++)if(r=dt.prefilters[o].call(l,e,c,l.opts))return y(r.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r
return E.map(c,pt,l),y(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return ce(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(M)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&le(e),v=Q.get(e,"fxshow")
for(r in n.queue||(null==(s=E._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always((function(){p.always((function(){s.unqueued--,E.queue(e,"fx").length||s.empty.fire()}))}))),t)if(i=t[r],at.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue
g=!0}d[r]=v&&v[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(de([e],!0),l=e.style.display||l,c=E.css(e,"display"),de([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&de([e],!0),p.done((function(){for(r in g||de([e]),Q.remove(e,"fxshow"),d)E.style(e,r,d[r])}))),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t}
return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=E.isEmptyObject(e),o=E.speed(t,n,r),s=function(){var t=dt(this,E.extend({},e),o);(i||Q.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=E.timers,s=Q.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&ut.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||E.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=E.timers,s=r?r.length:0
for(n.finish=!0,E.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),E.each(["toggle","show","hide"],(function(e,t){var n=E.fn[t]
E.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ft(t,!0),e,r,i)}})),E.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){E.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers
for(ot=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||E.fx.stop(),ot=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){st||(st=!0,lt())},E.fx.stop=function(){st=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(e,t){return e=E.fx&&E.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var i=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(i)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"))
e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",v.radioValue="t"===e.value}()
var ht,gt=E.expr.attrHandle
E.fn.extend({attr:function(e,t){return K(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){E.removeAttr(this,e)}))}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&N(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=gt[t]||E.find.attr
gt[t]=function(e,t,r){var i,o,s=t.toLowerCase()
return r||(o=gt[s],gt[s]=i,i=null!=n(e,t,r)?s:null,gt[s]=o),i}}))
var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i
function mt(e){return(e.match(M)||[]).join(" ")}function bt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}E.fn.extend({prop:function(e,t){return K(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[E.propFix[e]||e]}))}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex")
return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){E.propFix[this.toLowerCase()]=this})),E.fn.extend({addClass:function(e){var t,n,r,i,o,s
return y(e)?this.each((function(t){E(this).addClass(e.call(this,t,bt(this)))})):(t=xt(e)).length?this.each((function(){if(r=bt(this),n=1===this.nodeType&&" "+mt(r)+" "){for(o=0;o<t.length;o++)i=t[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ")
s=mt(n),r!==s&&this.setAttribute("class",s)}})):this},removeClass:function(e){var t,n,r,i,o,s
return y(e)?this.each((function(t){E(this).removeClass(e.call(this,t,bt(this)))})):arguments.length?(t=xt(e)).length?this.each((function(){if(r=bt(this),n=1===this.nodeType&&" "+mt(r)+" "){for(o=0;o<t.length;o++)for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ")
s=mt(n),r!==s&&this.setAttribute("class",s)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,s=typeof e,a="string"===s||Array.isArray(e)
return y(e)?this.each((function(n){E(this).toggleClass(e.call(this,n,bt(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=xt(e),this.each((function(){if(a)for(o=E(this),i=0;i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r)
else void 0!==e&&"boolean"!==s||((r=bt(this))&&Q.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":Q.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+mt(bt(n))+" ").indexOf(t)>-1)return!0
return!1}})
var wt=/\r/g
E.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=y(e),this.each((function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,E(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=E.map(i,(function(e){return null==e?"":e+""}))),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(wt,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value")
return null!=t?t:mt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],u=s?o+1:i.length
for(r=o<0?u:s?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=E(n).val(),s)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),s=i.length;s--;)((r=i[s]).selected=E.inArray(E.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],(function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),v.focusin="onfocusin"in r
var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()}
E.extend(E.event,{trigger:function(e,t,n,i){var o,s,a,u,l,c,f,p,h=[n||b],g=d.call(e,"type")?e.type:e,v=d.call(e,"namespace")?e.namespace.split("."):[]
if(s=p=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(g+E.event.triggered)&&(g.indexOf(".")>-1&&(v=g.split("."),g=v.shift(),v.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[E.expando]?e:new E.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=v.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),f=E.event.special[g]||{},i||!f.trigger||!1!==f.trigger.apply(n,t))){if(!i&&!f.noBubble&&!m(n)){for(u=f.delegateType||g,Tt.test(u+g)||(s=s.parentNode);s;s=s.parentNode)h.push(s),a=s
a===(n.ownerDocument||b)&&h.push(a.defaultView||a.parentWindow||r)}for(o=0;(s=h[o++])&&!e.isPropagationStopped();)p=s,e.type=o>1?u:f.bindType||g,(c=(Q.get(s,"events")||Object.create(null))[e.type]&&Q.get(s,"handle"))&&c.apply(s,t),(c=l&&s[l])&&c.apply&&Y(s)&&(e.result=c.apply(s,t),!1===e.result&&e.preventDefault())
return e.type=g,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(h.pop(),t)||!Y(n)||l&&y(n[g])&&!m(n)&&((a=n[l])&&(n[l]=null),E.event.triggered=g,e.isPropagationStopped()&&p.addEventListener(g,Ct),n[g](),e.isPropagationStopped()&&p.removeEventListener(g,Ct),E.event.triggered=void 0,a&&(n[l]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0})
E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each((function(){E.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){E.event.simulate(t,e.target,E.event.fix(e))}
E.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=Q.access(r,t)
i||r.addEventListener(e,n,!0),Q.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=Q.access(r,t)-1
i?Q.access(r,t,i):(r.removeEventListener(e,n,!0),Q.remove(r,t))}}}))
var Et=r.location,jt={guid:Date.now()},St=/\?/
E.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var kt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i
function qt(e,t,n,r){var i
if(Array.isArray(t))E.each(t,(function(t,i){n||kt.test(e)?r(e,i):qt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}))
else if(n||"object"!==T(t))r(e,t)
else for(i in t)qt(e+"["+i+"]",t[i],n,r)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=y(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,(function(){i(this.name,this.value)}))
else for(n in e)qt(n,e[n],t,i)
return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=E.prop(this,"elements")
return e?E.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!ve.test(e))})).map((function(e,t){var n=E(this).val()
return null==n?null:Array.isArray(n)?E.map(n,(function(e){return{name:t.name,value:e.replace(At,"\r\n")}})):{name:t.name,value:n.replace(At,"\r\n")}})).get()}})
var Ot=/%20/g,Lt=/#.*$/,$t=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ht=/^(?:GET|HEAD)$/,_t=/^\/\//,Mt={},Rt={},It="*/".concat("*"),Ft=b.createElement("a")
function Wt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(M)||[]
if(y(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Bt(e,t,n,r){var i={},o=e===Rt
function s(a){var u
return i[a]=!0,E.each(e[a]||[],(function(e,a){var l=a(t,n,r)
return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),s(l),!1)})),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Xt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&E.extend(!0,e,r),e}Ft.href=Et.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Xt(Xt(e,E.ajaxSettings),t):Xt(E.ajaxSettings,e)},ajaxPrefilter:Wt(Mt),ajaxTransport:Wt(Rt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,i,o,s,a,u,l,c,f,p,d=E.ajaxSetup({},t),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?E(h):E.event,v=E.Deferred(),y=E.Callbacks("once memory"),m=d.statusCode||{},x={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t
if(l){if(!s)for(s={};t=Pt.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(l)C.always(e[C.status])
else for(t in e)m[t]=[m[t],e[t]]
return this},abort:function(e){var t=e||T
return n&&n.abort(t),j(0,t),this}}
if(v.promise(C),d.url=((e||d.url||Et.href)+"").replace(_t,Et.protocol+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(M)||[""],null==d.crossDomain){u=b.createElement("a")
try{u.href=d.url,u.href=u.href,d.crossDomain=Ft.protocol+"//"+Ft.host!=u.protocol+"//"+u.host}catch(e){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=E.param(d.data,d.traditional)),Bt(Mt,d,t,C),l)return C
for(f in(c=E.event&&d.global)&&0==E.active++&&E.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Ht.test(d.type),i=d.url.replace(Lt,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Ot,"+")):(p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(St.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace($t,"$1"),p=(St.test(i)?"&":"?")+"_="+jt.guid+++p),d.url=i+p),d.ifModified&&(E.lastModified[i]&&C.setRequestHeader("If-Modified-Since",E.lastModified[i]),E.etag[i]&&C.setRequestHeader("If-None-Match",E.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&C.setRequestHeader("Content-Type",d.contentType),C.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+It+"; q=0.01":""):d.accepts["*"]),d.headers)C.setRequestHeader(f,d.headers[f])
if(d.beforeSend&&(!1===d.beforeSend.call(h,C,d)||l))return C.abort()
if(T="abort",y.add(d.complete),C.done(d.success),C.fail(d.error),n=Bt(Rt,d,t,C)){if(C.readyState=1,c&&g.trigger("ajaxSend",[C,d]),l)return C
d.async&&d.timeout>0&&(a=r.setTimeout((function(){C.abort("timeout")}),d.timeout))
try{l=!1,n.send(x,j)}catch(e){if(l)throw e
j(-1,e)}}else j(-1,"No Transport")
function j(e,t,s,u){var f,p,b,x,w,T=t
l||(l=!0,a&&r.clearTimeout(a),n=void 0,o=u||"",C.readyState=e>0?4:0,f=e>=200&&e<300||304===e,s&&(x=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,C,s)),!f&&E.inArray("script",d.dataTypes)>-1&&E.inArray("json",d.dataTypes)<0&&(d.converters["text script"]=function(){}),x=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice()
if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(d,x,C,f),f?(d.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(E.lastModified[i]=w),(w=C.getResponseHeader("etag"))&&(E.etag[i]=w)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=x.state,p=x.data,f=!(b=x.error))):(b=T,!e&&T||(T="error",e<0&&(e=0))),C.status=e,C.statusText=(t||T)+"",f?v.resolveWith(h,[p,T,C]):v.rejectWith(h,[C,T,b]),C.statusCode(m),m=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[C,d,f?p:b]),y.fireWith(h,[C,T]),c&&(g.trigger("ajaxComplete",[C,d]),--E.active||E.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],(function(e,t){E[t]=function(e,n,r,i){return y(n)&&(i=i||r,r=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:i,data:n,success:r},E.isPlainObject(e)&&e))}})),E.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t
return this[0]&&(y(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return y(e)?this.each((function(t){E(this).wrapInner(e.call(this,t))})):this.each((function(){var t=E(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=y(e)
return this.each((function(n){E(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){E(this).replaceWith(this.childNodes)})),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var Kt={0:200,1223:204},Ut=E.ajaxSettings.xhr()
v.cors=!!Ut&&"withCredentials"in Ut,v.ajax=Ut=!!Ut,E.ajaxTransport((function(e){var t,n
if(v.cors||Ut&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr()
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s]
for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s])
t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Kt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),E.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),E.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=E("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var zt,Vt=[],Zt=/(=)\?(?=&|$)|\?\?/
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vt.pop()||E.expando+"_"+jt.guid++
return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",(function(e,t,n){var i,o,s,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data")
if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+i):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||E.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=r[i],r[i]=function(){s=arguments},n.always((function(){void 0===o?E(r).removeProp(i):r[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Vt.push(i)),s&&y(o)&&o(s[0]),s=o=void 0})),"script"})),v.createHTMLDocument=((zt=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===zt.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(r)):t=b),o=!n&&[],(i=q.exec(e))?[t.createElement(i[1])]:(i=Ce([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)))
var r,i,o},E.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ")
return a>-1&&(r=mt(e.slice(a)),e=e.slice(0,a)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},E.expr.pseudos.animated=function(e){return E.grep(E.timers,(function(t){return e===t.elem})).length},E.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=E.css(e,"position"),c=E(e),f={}
"static"===l&&(e.style.position="relative"),a=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),y(t)&&(t=t.call(e,n,E.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){E.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0}
if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent
return e||se}))}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
E.fn[e]=function(r){return K(this,(function(e,r,i){var o
if(m(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),E.each(["top","left"],(function(e,t){E.cssHooks[t]=ze(v.pixelPosition,(function(e,n){if(n)return n=Ue(e,t),Ie.test(n)?E(e).position()[t]+"px":n}))})),E.each({Height:"height",Width:"width"},(function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){E.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border")
return K(this,(function(t,n,i){var o
return m(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?E.css(t,n,a):E.style(t,n,i,a)}),t,s?i:void 0,s)}}))})),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){E.fn[t]=function(e){return this.on(t,e)}})),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var Yt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
E.proxy=function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return r=a.call(arguments,2),i=function(){return e.apply(t||this,r.concat(a.call(arguments)))},i.guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=N,E.isFunction=y,E.isWindow=m,E.camelCase=Z,E.type=T,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Yt,"$1")},void 0===(n=function(){return E}.apply(t,[]))||(e.exports=n)
var Gt=r.jQuery,Qt=r.$
return E.noConflict=function(e){return r.$===E&&(r.$=Qt),e&&r.jQuery===E&&(r.jQuery=Gt),E},void 0===i&&(r.jQuery=r.$=E),E}))}}])
