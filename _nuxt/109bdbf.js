(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{205:function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(23),n(54),{layout:"center",data:function(){return{input:{email:"",password:""}}},methods:{Login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("auth/Login",e.input);case 3:e.$router.replace("/"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.$log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}}),l=n(8),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.Login(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Login")])])])}),[],!1,null,null,null);t.default=component.exports}}]);