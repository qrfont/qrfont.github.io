"use strict";(self["webpackChunkvue_project1"]=self["webpackChunkvue_project1"]||[]).push([[714],{3333:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var o=r(6768),n=r(5130),s=r(4232);const u=e=>((0,o.Qi)("data-v-5da1bdac"),e=e(),(0,o.jt)(),e),a={class:"lotto-generator"},l=["disabled"],i={class:"box-border"},d={class:"pattern-0"},c={class:"inputs"},h=["onUpdate:modelValue","onInput","disabled"],b=u((()=>(0,o.Lk)("p",null,"Enter Your Favorite Numbers (Optional)",-1))),p={key:0},m={key:1,class:"numbers"},v={class:"record-header"},f=u((()=>(0,o.Lk)("h3",null,"1st Prize Winners",-1))),k={class:"record-date"},L={class:"record-numbers"},g={class:"record-buttons"};function w(e,t,r,u,w,R){return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>R.generateLottoNumbers&&R.generateLottoNumbers(...e)),disabled:!R.isInputValid||w.lottoRecords.length>=30,class:"generate-button"},"(AUTO) Generator",8,l),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>R.resetLottoNumbers&&R.resetLottoNumbers(...e)),class:"reset-button"},"Clear"),(0,o.Lk)("div",i,[(0,o.Lk)("div",d,[(0,o.Lk)("div",c,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(w.userNumbers,((e,t)=>(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{key:t,type:"number","onUpdate:modelValue":e=>w.userNumbers[t]=e,onInput:e=>R.validateInput(t),disabled:w.lottoRecords.length>=100,placeholder:"1-49"},null,40,h)),[[n.Jo,w.userNumbers[t],void 0,{number:!0}]]))),128))]),b])]),w.lottoRecords.length>=100?((0,o.uX)(),(0,o.CE)("p",p,"You can enter up to 100 numbers.")):(0,o.Q3)("",!0),w.lottoRecords.length>0?((0,o.uX)(),(0,o.CE)("div",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(w.lottoRecords,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:(0,s.C4)(["record","pattern-"+(t%5+1)])},[(0,o.Lk)("div",v,[f,(0,o.Lk)("p",k,(0,s.v_)(e.date),1)]),(0,o.Lk)("div",L,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.numbers,((e,t)=>((0,o.uX)(),(0,o.CE)("span",{key:t,class:"number"},(0,s.v_)(e),1)))),128))])],2)))),128)),(0,o.Lk)("div",g,[(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>R.printLottoRecords&&R.printLottoRecords(...e)),class:"print-button"},"Print"),(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>R.downloadLottoRecords&&R.downloadLottoRecords(...e)),class:"download-button"},"Download")])])):(0,o.Q3)("",!0)])}r(4114),r(3375),r(9225),r(3972),r(9209),r(5714),r(7561),r(6197),r(4603),r(7566),r(8721);var R={data(){return{userNumbers:Array(6).fill(null),lottoRecords:[]}},computed:{isInputValid(){const e=new Set(this.userNumbers.filter((e=>null!==e)));return e.size===this.userNumbers.filter((e=>null!==e)).length&&this.userNumbers.every((e=>null===e||e>=1&&e<=49))}},methods:{validateInput(e){const t=this.userNumbers[e];(t<1||t>49||this.userNumbers.filter((e=>e===t)).length>1)&&(this.userNumbers[e]=null)},generateLottoNumbers(){if(this.lottoRecords.length<100&&this.isInputValid){const e=this.userNumbers.filter((e=>null!==e)),t=[...e];while(t.length<6){const e=Math.floor(49*Math.random())+1;t.includes(e)||t.push(e)}const r=(new Date).toLocaleString("en-US");this.lottoRecords.unshift({date:r,numbers:t.sort(((e,t)=>e-t))})}},resetLottoNumbers(){this.lottoRecords=[],this.userNumbers=Array(6).fill(null)},printLottoRecords(){const e=this.lottoRecords.map((e=>`${e.date}: ${e.numbers.join(", ")}`)).join("\n"),t=window.open("","","height=400,width=600");t.document.write("<pre>"+e+"</pre>"),t.document.close(),t.print()},downloadLottoRecords(){const e=new Blob([this.lottoRecords.map((e=>`${e.date}: ${e.numbers.join(", ")}`)).join("\n")],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="lotto-records.txt",t.click(),URL.revokeObjectURL(t.href)}}},y=r(1241);const N=(0,y.A)(R,[["render",w],["__scopeId","data-v-5da1bdac"]]);var C=N},655:function(e,t,r){var o=r(6955),n=String;e.exports=function(e){if("Symbol"===o(e))throw new TypeError("Cannot convert a Symbol value to a string");return n(e)}},2812:function(e){var t=TypeError;e.exports=function(e,r){if(e<r)throw new t("Not enough arguments");return e}},4603:function(e,t,r){var o=r(6840),n=r(9504),s=r(655),u=r(2812),a=URLSearchParams,l=a.prototype,i=n(l.append),d=n(l["delete"]),c=n(l.forEach),h=n([].push),b=new a("a=1&a=2&b=3");b["delete"]("a",1),b["delete"]("b",void 0),b+""!=="a=2"&&o(l,"delete",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return d(this,e);var o=[];c(this,(function(e,t){h(o,{key:t,value:e})})),u(t,1);var n,a=s(e),l=s(r),b=0,p=0,m=!1,v=o.length;while(b<v)n=o[b++],m||n.key===a?(m=!0,d(this,n.key)):p++;while(p<v)n=o[p++],n.key===a&&n.value===l||i(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,r){var o=r(6840),n=r(9504),s=r(655),u=r(2812),a=URLSearchParams,l=a.prototype,i=n(l.getAll),d=n(l.has),c=new a("a=1");!c.has("a",2)&&c.has("a",void 0)||o(l,"has",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return d(this,e);var o=i(this,e);u(t,1);var n=s(r),a=0;while(a<o.length)if(o[a++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,r){var o=r(3724),n=r(9504),s=r(2106),u=URLSearchParams.prototype,a=n(u.forEach);o&&!("size"in u)&&s(u,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=714.cf27e572.js.map