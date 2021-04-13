(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{209:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"mb-12"},[r("h1",{staticClass:"font-bold text-gray-900 text-3xl"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){var content=r(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("4b5eb52a",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";r(220)},229:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,"[data-v-73269340] .ProseMirror{outline:2px solid transparent !important;outline-offset:2px !important;border-radius:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;cursor:text;overflow-y:scroll;resize:vertical;line-height:2rem;height:40rem}[data-v-73269340] .ProseMirror:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgba(37, 99, 235, var(--tw-ring-opacity))}",""]),t.exports=n},232:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(23),r(218)),l=r(222),c={components:{EditorContent:o.b,EditorMenuBar:o.c,EditorMenuBubble:o.d},data:function(){return{magazine:null,editor:null,lastCursor:0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.uuid,e.next=3,t.$store.dispatch("magazines/FetchByUuid",r);case 3:n=e.sent,c=n.magazine,t.editor=new o.a({onUpdate:function(e){var r=(0,e.getHTML)();t.magazine.content=r},editable:!0,content:c.content,extensions:[new l.j,new l.a,new l.c,new l.e,new l.f,new l.g({levels:[1,2,3]}),new l.i,new l.m,new l.n,new l.p,new l.q,new l.l,new l.b,new l.d,new l.k,new l.o,new l.r,new l.h]}),t.magazine=c;case 7:case"end":return e.stop()}}),e)})))()},methods:{OnFile:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,form,l,image;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=document.getElementById("file-input"),o=n.files[0],(form=new FormData).append("file",o),r.next=7,e.$store.dispatch("images/Create",form);case 7:l=r.sent,image=l.image,t({src:image.url}),r.next=14;break;case 12:r.prev=12,r.t0=r.catch(0);case 14:case"end":return r.stop()}}),r,null,[[0,12]])})))()},showImagePrompt:function(t){document.getElementById("file-input").click()},OnSave:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("magazines/UpdateByUuid",{uuid:t.$route.query.uuid,data:t.magazine});case 3:alert("저장되었습니다."),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()},OnRemove:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,confirm("정말 삭제하시겠습니까? 이 행동은 되돌릴 수 없습니다.")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$store.dispatch("magazines/DeleteByUuid",t.$route.query.uuid);case 5:t.$router.push({name:"magazines"}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},beforeDestroy:function(){this.editor.destroy()}},d=(r(228),r(8)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("page-header",{attrs:{title:"Edit Magazine"}}),t._v(" "),r("main",{staticClass:"space-y-20"},[t.magazine?r("div",{staticClass:"space-y-6"},[r("label",{staticClass:"block",attrs:{for:"category-input"}},[r("div",{staticClass:"mb-1 font-bold text-sm text-gray-600"},[t._v("카테고리")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.magazine.category,expression:"magazine.category"}],staticClass:"bg-transparent border-gray-200 shadow-sm rounded-lg",attrs:{id:"category-input",type:"text"},domProps:{value:t.magazine.category},on:{input:function(e){e.target.composing||t.$set(t.magazine,"category",e.target.value)}}})]),t._v(" "),r("label",{staticClass:"block",attrs:{for:"title-input"}},[r("div",{staticClass:"mb-1 font-bold text-sm text-gray-600"},[t._v("제목")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.magazine.title,expression:"magazine.title"}],staticClass:"bg-transparent border-gray-200 shadow-sm rounded-lg w-full",attrs:{id:"title-input",type:"text"},domProps:{value:t.magazine.title},on:{input:function(e){e.target.composing||t.$set(t.magazine,"title",e.target.value)}}})]),t._v(" "),r("label",{staticClass:"block",attrs:{for:"content-input"}},[r("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.commands,o=e.isActive;return[r("div",{staticClass:"mb-2 space-x-2"},[r("button",{staticClass:"menubar__button",class:{"is-active":o.bold()},on:{click:n.bold}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("path",{attrs:{d:"M17.194,10.962A6.271,6.271,0,0,0,12.844.248H4.3a1.25,1.25,0,0,0,0,2.5H5.313a.25.25,0,0,1,.25.25V21a.25.25,0,0,1-.25.25H4.3a1.25,1.25,0,1,0,0,2.5h9.963a6.742,6.742,0,0,0,2.93-12.786Zm-4.35-8.214a3.762,3.762,0,0,1,0,7.523H8.313a.25.25,0,0,1-.25-.25V3a.25.25,0,0,1,.25-.25Zm1.42,18.5H8.313a.25.25,0,0,1-.25-.25V13.021a.25.25,0,0,1,.25-.25h4.531c.017,0,.033,0,.049,0l.013,0h1.358a4.239,4.239,0,0,1,0,8.477Z"}})])]),t._v(" "),r("button",{staticClass:"menubar__button",class:{"is-active":o.italic()},on:{click:n.italic}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("path",{attrs:{d:"M22.5.248H14.863a1.25,1.25,0,0,0,0,2.5h1.086a.25.25,0,0,1,.211.384L4.78,21.017a.5.5,0,0,1-.422.231H1.5a1.25,1.25,0,0,0,0,2.5H9.137a1.25,1.25,0,0,0,0-2.5H8.051a.25.25,0,0,1-.211-.384L19.22,2.98a.5.5,0,0,1,.422-.232H22.5a1.25,1.25,0,0,0,0-2.5Z"}})])]),t._v(" "),r("button",{staticClass:"menubar__button",class:{"is-active":o.strike()},on:{click:n.strike}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("path",{attrs:{d:"M23.75,12.952A1.25,1.25,0,0,0,22.5,11.7H13.564a.492.492,0,0,1-.282-.09c-.722-.513-1.482-.981-2.218-1.432-2.8-1.715-4.5-2.9-4.5-4.863,0-2.235,2.207-2.569,3.523-2.569a4.54,4.54,0,0,1,3.081.764A2.662,2.662,0,0,1,13.615,5.5l0,.3a1.25,1.25,0,1,0,2.5,0l0-.268A4.887,4.887,0,0,0,14.95,1.755C13.949.741,12.359.248,10.091.248c-3.658,0-6.023,1.989-6.023,5.069,0,2.773,1.892,4.512,4,5.927a.25.25,0,0,1-.139.458H1.5a1.25,1.25,0,0,0,0,2.5H12.477a.251.251,0,0,1,.159.058,4.339,4.339,0,0,1,1.932,3.466c0,3.268-3.426,3.522-4.477,3.522-1.814,0-3.139-.405-3.834-1.173a3.394,3.394,0,0,1-.65-2.7,1.25,1.25,0,0,0-2.488-.246A5.76,5.76,0,0,0,4.4,21.753c1.2,1.324,3.114,2,5.688,2,4.174,0,6.977-2.42,6.977-6.022a6.059,6.059,0,0,0-.849-3.147.25.25,0,0,1,.216-.377H22.5A1.25,1.25,0,0,0,23.75,12.952Z"}})])]),t._v(" "),r("button",{staticClass:"menubar__button",class:{"is-active":o.underline()},on:{click:n.underline}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("path",{attrs:{d:"M22.5,21.248H1.5a1.25,1.25,0,0,0,0,2.5h21a1.25,1.25,0,0,0,0-2.5Z"}}),t._v(" "),r("path",{attrs:{d:"M1.978,2.748H3.341a.25.25,0,0,1,.25.25v8.523a8.409,8.409,0,0,0,16.818,0V3a.25.25,0,0,1,.25-.25h1.363a1.25,1.25,0,0,0,0-2.5H16.3a1.25,1.25,0,0,0,0,2.5h1.363a.25.25,0,0,1,.25.25v8.523a5.909,5.909,0,0,1-11.818,0V3a.25.25,0,0,1,.25-.25H7.7a1.25,1.25,0,1,0,0-2.5H1.978a1.25,1.25,0,0,0,0,2.5Z"}})])]),t._v(" "),r("button",{on:{click:function(e){return t.showImagePrompt(n.image)}}},[r("input",{staticClass:"hidden",attrs:{type:"file",id:"file-input"},on:{change:function(e){return t.OnFile(n.image)}}}),t._v(" "),r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("circle",{attrs:{cx:"9.75",cy:"6.247",r:"2.25"}}),t._v(" "),r("path",{attrs:{d:"M16.916,8.71A1.027,1.027,0,0,0,16,8.158a1.007,1.007,0,0,0-.892.586L13.55,12.178a.249.249,0,0,1-.422.053l-.82-1.024a1,1,0,0,0-.813-.376,1.007,1.007,0,0,0-.787.426L7.59,15.71A.5.5,0,0,0,8,16.5H20a.5.5,0,0,0,.425-.237.5.5,0,0,0,.022-.486Z"}}),t._v(" "),r("path",{attrs:{d:"M22,0H5.5a2,2,0,0,0-2,2V18.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm-.145,18.354a.5.5,0,0,1-.354.146H6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,6,2H21.5a.5.5,0,0,1,.5.5V18A.5.5,0,0,1,21.855,18.351Z"}}),t._v(" "),r("path",{attrs:{d:"M19.5,22H2.5a.5.5,0,0,1-.5-.5V4.5a1,1,0,0,0-2,0V22a2,2,0,0,0,2,2H19.5a1,1,0,0,0,0-2Z"}})])]),t._v(" "),r("button",{staticClass:"menubar__button",on:{click:n.undo}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("path",{attrs:{d:"M17.786,3.77A12.542,12.542,0,0,0,4.821,2.905a.249.249,0,0,1-.292-.045L1.937.269A.507.507,0,0,0,1.392.16a.5.5,0,0,0-.308.462v6.7a.5.5,0,0,0,.5.5h6.7a.5.5,0,0,0,.354-.854L6.783,5.115a.253.253,0,0,1-.068-.228.249.249,0,0,1,.152-.181,10,10,0,0,1,9.466,1.1,9.759,9.759,0,0,1,.094,15.809A1.25,1.25,0,0,0,17.9,23.631a12.122,12.122,0,0,0,5.013-9.961A12.125,12.125,0,0,0,17.786,3.77Z"}})])]),t._v(" "),r("button",{staticClass:"menubar__button",on:{click:n.redo}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[r("path",{attrs:{d:"M22.608.161a.5.5,0,0,0-.545.108L19.472,2.86a.25.25,0,0,1-.292.045A12.537,12.537,0,0,0,6.214,3.77,12.259,12.259,0,0,0,6.1,23.632a1.25,1.25,0,0,0,1.476-2.018A9.759,9.759,0,0,1,7.667,5.805a10,10,0,0,1,9.466-1.1.25.25,0,0,1,.084.409l-1.85,1.85a.5.5,0,0,0,.354.853h6.7a.5.5,0,0,0,.5-.5V.623A.5.5,0,0,0,22.608.161Z"}})])])])]}}],null,!1,1182358332)}),t._v(" "),r("editor-content",{staticClass:"border border-gray-300 shadow-sm rounded-lg",attrs:{id:"content-input",editor:t.editor}})],1),t._v(" "),r("label",{staticClass:"block",attrs:{for:"published-input"}},[r("span",{staticClass:"mb-1 font-bold text-sm text-gray-600"},[t._v("공개")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.magazine.is_published,expression:"magazine.is_published"}],staticClass:"rounded-sm",attrs:{type:"checkbox",id:"published-input"},domProps:{checked:Array.isArray(t.magazine.is_published)?t._i(t.magazine.is_published,null)>-1:t.magazine.is_published},on:{change:function(e){var r=t.magazine.is_published,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(t.magazine,"is_published",r.concat([null])):l>-1&&t.$set(t.magazine,"is_published",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.magazine,"is_published",o)}}})]),t._v(" "),r("div",[r("button",{staticClass:"transition-colors shadow-sm py-1.5 px-3.5 font-semibold text-gray-600 border border-gray-200 bg-gray-100 rounded-lg hover:bg-gray-200",on:{click:t.OnSave}},[t._v("\n          저장하기\n        ")])])]):t._e(),t._v(" "),r("div",{staticClass:"flex items-center justify-between border-2 border-red-500 p-4 rounded-lg"},[r("div",[t._v("\n        데이터 삭제하기\n      ")]),t._v(" "),r("div",[r("button",{staticClass:"text-red-500 font-semibold rounded-lg py-1.5 px-3 border border-red-700",on:{click:t.OnRemove}},[t._v("\n          삭제하기\n        ")])])])])],1)}),[],!1,null,"73269340",null);e.default=component.exports;installComponents(component,{PageHeader:r(209).default})}}]);