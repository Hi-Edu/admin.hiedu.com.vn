(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{252:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(23),n(57),{layout:"center",data:function(){return{input:{email:"",password:""}}},methods:{Login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("auth/Login",t.input);case 3:t.$router.replace("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.$log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"py-20"},[n("div",{staticClass:"text-center"},[n("brand-logo",{staticClass:"block"})],1),t._v(" "),n("form",{staticClass:"mt-6",on:{submit:function(e){return e.preventDefault(),t.Login(e)}}},[n("label",{staticClass:"block",attrs:{for:"email-input"}},[n("div",{staticClass:"text-gray-600 font-semibold text-sm"},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],staticClass:"transition-all shadow-sm outline-none mt-1 block rounded-lg w-full bg-gray-100 border-gray-300",attrs:{id:"email-input",type:"email"},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}})]),t._v(" "),n("label",{staticClass:"block mt-4",attrs:{for:"password-input"}},[n("div",{staticClass:"text-gray-600 font-semibold text-sm"},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"transition-all shadow-sm outline-none mt-1 block rounded-lg w-full bg-gray-100 border-gray-300",attrs:{id:"password-input",type:"password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}})]),t._v(" "),t._m(0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-6"},[n("button",{staticClass:"transition-all shadow-sm w-full bg-gray-700 text-white py-2.5 rounded-lg font-semibold hover:bg-gray-600",attrs:{type:"submit"}},[t._v("\n          Login\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BrandLogo:n(136).default})}}]);