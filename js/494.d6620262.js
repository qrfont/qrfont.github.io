"use strict";(self["webpackChunkvue_project1"]=self["webpackChunkvue_project1"]||[]).push([[494],{7494:function(e,a,s){s.r(a),s.d(a,{default:function(){return y}});var r=s(6768),t=s(5130),o=s(4232);const l=e=>((0,r.Qi)("data-v-639a1ba8"),e=e(),(0,r.jt)(),e),n=l((()=>(0,r.Lk)("div",{class:"top-title"},[(0,r.Lk)("h1",null,"Help Desk"),(0,r.Lk)("h4",null,"If you have any questions or suggestions for improvement, "),(0,r.Lk)("h4",null,"please don't hesitate to contact us.")],-1))),u={class:"submitForm"},i=l((()=>(0,r.Lk)("label",{for:"email"},"Email:",-1))),m=l((()=>(0,r.Lk)("br",null,null,-1))),c=l((()=>(0,r.Lk)("label",{for:"message"},"Message:",-1))),d=l((()=>(0,r.Lk)("br",null,null,-1))),b=l((()=>(0,r.Lk)("button",{type:"submit",class:"button down"},"submit",-1))),g=l((()=>(0,r.Lk)("br",null,null,-1))),k={key:0,class:"align-c"};function p(e,a,s,l,p,h){return(0,r.uX)(),(0,r.CE)(r.FK,null,[n,(0,r.Lk)("div",u,[(0,r.Lk)("form",{onSubmit:a[2]||(a[2]=(0,t.D$)(((...e)=>h.submitForm&&h.submitForm(...e)),["prevent"]))},[i,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),required:""},null,512),[[t.Jo,e.email]]),m,c,(0,r.bo)((0,r.Lk)("textarea",{id:"message","onUpdate:modelValue":a[1]||(a[1]=a=>e.message=a),required:""},null,512),[[t.Jo,e.message]]),d,b],32),g,p.errorMessage?((0,r.uX)(),(0,r.CE)("div",k,(0,o.v_)(p.errorMessage),1)):(0,r.Q3)("",!0)])],64)}var h=s(4373),f={data(){return{form:{email:"",name:"",createdDate:""},errorMessage:""}},methods:{async submitForm(){try{this.errorMessage="Thank you for your message. We're processing it now...";const e={email:this.form.email,message:this.form.message,createdDate:(new Date).toISOString(),sheet_name:"contact"},a=await h.A.post("https://script.google.com/macros/s/AKfycbyfIAbqO2IU6HtHGUxn_c4VP-bN1vw9e65H6jKBt7Y6rBlQAw7anfJEKVlNSoNnXbA7/exec",null,{params:e});"error"===a.data.result?this.errorMessage=a.data.error:this.errorMessage="We have received your message and will get back to you soon."}catch(e){this.errorMessage="Error saving data."}}}},v=s(1241);const L=(0,v.A)(f,[["render",p],["__scopeId","data-v-639a1ba8"]]);var y=L}}]);
//# sourceMappingURL=494.d6620262.js.map