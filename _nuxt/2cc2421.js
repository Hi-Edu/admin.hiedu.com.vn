(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{220:function(t,n,e){var content=e(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("d4feb590",content,!0,{sourceMap:!1})},231:function(t,n,e){"use strict";e(220)},232:function(t,n,e){var o=e(53)((function(i){return i[1]}));o.push([t.i,'.icon{position:relative;vertical-align:middle;width:.8rem;height:.8rem;margin:0 .3rem;top:-.05rem;fill:currentColor}.icon,.icon__svg{display:inline-block}.icon__svg{vertical-align:top;width:100%;height:100%}.icon use>svg circle,.icon use>svg g,.icon use>svg path,.icon use>svg rect,body>svg circle,body>svg g,body>svg path,body>svg rect,symbol circle,symbol g,symbol path,symbol rect{fill:currentColor;stroke:none}.icon use>svg [d="M0 0h24v24H0z"],body>svg [d="M0 0h24v24H0z"],symbol [d="M0 0h24v24H0z"]{display:none}',""]),t.exports=o},237:function(t,n,e){"use strict";e.r(n);var o={props:{name:{},size:{default:"normal"},modifier:{default:null},fixAlign:{default:!0}}},c=(e(231),e(7)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icon",class:["icon--"+t.name,"icon--"+t.size,{"has-align-fix":t.fixAlign}]},[e("svg",{staticClass:"icon__svg"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon--"+t.name}})])])}),[],!1,null,null,null);n.default=component.exports},255:function(t,n,e){"use strict";e.r(n);var o=e(233),c=e(238),l={components:{EditorContent:o.b,EditorMenuBar:o.c},data:function(){return{editor:new o.a({extensions:[new c.a,new c.c,new c.e,new c.f,new c.g({levels:[1,2,3]}),new c.i,new c.m,new c.n,new c.p,new c.q,new c.l,new c.b,new c.d,new c.k,new c.o,new c.r,new c.h],content:"\n          <h2>\n            Hi there,\n          </h2>\n          <p>\n            this is a very <em>basic</em> example of tiptap.\n          </p>\n          <pre><code>body { display: none; }</code></pre>\n          <ul>\n            <li>\n              A regular list\n            </li>\n            <li>\n              With regular items\n            </li>\n          </ul>\n          <blockquote>\n            It's amazing 👏\n            <br />\n            – mom\n          </blockquote>\n        "})}},beforeDestroy:function(){this.editor.destroy()}},r=e(7),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"editor"},[e("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.commands,c=n.isActive;return[e("div",{staticClass:"menubar"},[e("button",{staticClass:"menubar__button",class:{"is-active":c.bold()},on:{click:o.bold}},[e("editor-icon",{attrs:{name:"bold"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.italic()},on:{click:o.italic}},[e("editor-icon",{attrs:{name:"italic"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.strike()},on:{click:o.strike}},[e("editor-icon",{attrs:{name:"strike"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.underline()},on:{click:o.underline}},[e("editor-icon",{attrs:{name:"underline"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.code()},on:{click:o.code}},[e("editor-icon",{attrs:{name:"code"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.paragraph()},on:{click:o.paragraph}},[e("editor-icon",{attrs:{name:"paragraph"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.heading({level:1})},on:{click:function(t){return o.heading({level:1})}}},[t._v("\n        H1\n      ")]),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.heading({level:2})},on:{click:function(t){return o.heading({level:2})}}},[t._v("\n        H2\n      ")]),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.heading({level:3})},on:{click:function(t){return o.heading({level:3})}}},[t._v("\n        H3\n      ")]),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.bullet_list()},on:{click:o.bullet_list}},[e("editor-icon",{attrs:{name:"ul"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.ordered_list()},on:{click:o.ordered_list}},[e("editor-icon",{attrs:{name:"ol"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.blockquote()},on:{click:o.blockquote}},[e("editor-icon",{attrs:{name:"quote"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",class:{"is-active":c.code_block()},on:{click:o.code_block}},[e("editor-icon",{attrs:{name:"code"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",on:{click:o.horizontal_rule}},[e("editor-icon",{attrs:{name:"hr"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",on:{click:o.undo}},[e("editor-icon",{attrs:{name:"undo"}})],1),t._v(" "),e("button",{staticClass:"menubar__button",on:{click:o.redo}},[e("editor-icon",{attrs:{name:"redo"}})],1)])]}}])}),t._v(" "),e("editor-content",{staticClass:"editor__content",attrs:{editor:t.editor}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{EditorIcon:e(237).default})}}]);