"use strict";(self["webpackChunkvue_project1"]=self["webpackChunkvue_project1"]||[]).push([[976],{9976:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(6768),o=r(5130),s=r(4232);const u=e=>((0,n.Qi)("data-v-27181bc2"),e=e(),(0,n.jt)(),e),l={class:"lotto-generator"},a=["disabled"],i={class:"box-border"},c={class:"pattern-0"},d={class:"inputs"},b=["onUpdate:modelValue","onInput","disabled"],h=u((()=>(0,n.Lk)("p",null,"Enter Your Favorite Numbers (Optional)",-1))),m={key:0},p={key:1,class:"numbers"},v={class:"record-header"},f=u((()=>(0,n.Lk)("h3",null,"1st Prize Winners",-1))),g={class:"record-date"},k={class:"record-numbers"},L={class:"number bonus-number"},N={class:"record-buttons"};function w(e,t,r,u,w,y){return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>y.generateLottoNumbers&&y.generateLottoNumbers(...e)),disabled:!y.isInputValid||w.lottoRecords.length>=30,class:"generate-button"},"(AUTO) Generator",8,a),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>y.resetLottoNumbers&&y.resetLottoNumbers(...e)),class:"reset-button"},"Clear"),(0,n.Lk)("div",i,[(0,n.Lk)("div",c,[(0,n.Lk)("div",d,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(w.userNumbers,((e,t)=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:t,type:"number","onUpdate:modelValue":e=>w.userNumbers[t]=e,onInput:e=>y.validateInput(t),disabled:w.lottoRecords.length>=100,placeholder:"1-43"},null,40,b)),[[o.Jo,w.userNumbers[t],void 0,{number:!0}]]))),128))]),h])]),w.lottoRecords.length>=100?((0,n.uX)(),(0,n.CE)("p",m,"You can enter up to 100 numbers.")):(0,n.Q3)("",!0),w.lottoRecords.length>0?((0,n.uX)(),(0,n.CE)("div",p,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(w.lottoRecords,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,s.C4)(["record","pattern-"+(t%5+1)])},[(0,n.Lk)("div",v,[f,(0,n.Lk)("p",g,(0,s.v_)(e.date),1)]),(0,n.Lk)("div",k,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.numbers,((e,t)=>((0,n.uX)(),(0,n.CE)("span",{key:t,class:"number"},(0,s.v_)(e),1)))),128)),(0,n.Lk)("span",L,(0,s.v_)(e.bonusNumber),1)])],2)))),128)),(0,n.Lk)("div",N,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>y.printLottoRecords&&y.printLottoRecords(...e)),class:"print-button"},"Print"),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>y.downloadLottoRecords&&y.downloadLottoRecords(...e)),class:"download-button"},"Download")])])):(0,n.Q3)("",!0)])}r(4114),r(3375),r(9225),r(3972),r(9209),r(5714),r(7561),r(6197),r(4603),r(7566),r(8721);var y={data(){return{userNumbers:Array(6).fill(null),bonusNumber:null,lottoRecords:[]}},computed:{isInputValid(){const e=new Set(this.userNumbers.filter((e=>null!==e)));return e.size===this.userNumbers.filter((e=>null!==e)).length&&this.userNumbers.every((e=>null===e||e>=1&&e<=43))&&(null===this.bonusNumber||this.bonusNumber>=1&&this.bonusNumber<=43)}},methods:{validateInput(e){const t=this.userNumbers[e];(t<1||t>43||this.userNumbers.filter((e=>e===t)).length>1)&&(this.userNumbers[e]=null)},generateLottoNumbers(){if(this.lottoRecords.length<100&&this.isInputValid){const e=this.userNumbers.filter((e=>null!==e)),t=[...e];while(t.length<6){const e=Math.floor(43*Math.random())+1;t.includes(e)||t.push(e)}const r=this.bonusNumber||Math.floor(43*Math.random())+1,n=(new Date).toLocaleString("en-US");this.lottoRecords.unshift({date:n,numbers:t.sort(((e,t)=>e-t)),bonusNumber:r})}},resetLottoNumbers(){this.lottoRecords=[],this.userNumbers=Array(6).fill(null),this.bonusNumber=null},printLottoRecords(){const e=this.lottoRecords.map((e=>`${e.date}: ${e.numbers.join(", ")} Bonus: ${e.bonusNumber}`)).join("\n"),t=window.open("","","height=400,width=600");t.document.write("<pre>"+e+"</pre>"),t.document.close(),t.print()},downloadLottoRecords(){const e=new Blob([this.lottoRecords.map((e=>`${e.date}: ${e.numbers.join(", ")} Bonus: ${e.bonusNumber}`)).join("\n")],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="lotto-records.txt",t.click(),URL.revokeObjectURL(t.href)}}},R=r(1241);const C=(0,R.A)(y,[["render",w],["__scopeId","data-v-27181bc2"]]);var E=C},6955:function(e,t,r){var n=r(2140),o=r(4901),s=r(4576),u=r(8227),l=u("toStringTag"),a=Object,i="Arguments"===s(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(r){}};e.exports=n?s:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=c(t=a(e),l))?r:i?s(t):"Object"===(n=s(t))&&o(t.callee)?"Arguments":n}},2106:function(e,t,r){var n=r(283),o=r(4913);e.exports=function(e,t,r){return r.get&&n(r.get,t,{getter:!0}),r.set&&n(r.set,t,{setter:!0}),o.f(e,t,r)}},2140:function(e,t,r){var n=r(8227),o=n("toStringTag"),s={};s[o]="z",e.exports="[object z]"===String(s)},655:function(e,t,r){var n=r(6955),o=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},2812:function(e){var t=TypeError;e.exports=function(e,r){if(e<r)throw new t("Not enough arguments");return e}},4603:function(e,t,r){var n=r(6840),o=r(9504),s=r(655),u=r(2812),l=URLSearchParams,a=l.prototype,i=o(a.append),c=o(a["delete"]),d=o(a.forEach),b=o([].push),h=new l("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&n(a,"delete",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return c(this,e);var n=[];d(this,(function(e,t){b(n,{key:t,value:e})})),u(t,1);var o,l=s(e),a=s(r),h=0,m=0,p=!1,v=n.length;while(h<v)o=n[h++],p||o.key===l?(p=!0,c(this,o.key)):m++;while(m<v)o=n[m++],o.key===l&&o.value===a||i(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,r){var n=r(6840),o=r(9504),s=r(655),u=r(2812),l=URLSearchParams,a=l.prototype,i=o(a.getAll),c=o(a.has),d=new l("a=1");!d.has("a",2)&&d.has("a",void 0)||n(a,"has",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return c(this,e);var n=i(this,e);u(t,1);var o=s(r),l=0;while(l<n.length)if(n[l++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,r){var n=r(3724),o=r(9504),s=r(2106),u=URLSearchParams.prototype,l=o(u.forEach);n&&!("size"in u)&&s(u,"size",{get:function(){var e=0;return l(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=976.15e09f54.js.map