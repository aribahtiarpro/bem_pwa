(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{200:function(t,e,r){"use strict";r.r(e);r(23),r(20);var n=r(2),l=r(1),o=r(187),c=r.n(o);r(188);l.a.use(c.a);var d={layout:"app",middleware:"auth",data:function(){return{layout:"app",middleware:"auth",avatar:{},d:{avatar:"",name:"",desc:"",type:""}}},methods:{onInit:function(){this.avatar.addClipPlugin((function(t,e,r,n,l){t.beginPath(),t.arc(e+n/2,r+l/2,n/2,0,2*Math.PI,!0),t.closePath()}))},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.avatar.generateBlob((function(t){}),"image/jpeg",.8),""==t.d.name||""==t.d.desc||""==t.d.type){e.next=7;break}return t.d.avatar=t.avatar.generateDataUrl(),e.next=5,t.$store.commit("createGroup",t.d);case 5:return e.next=7,t.$router.push("/");case 7:case"end":return e.stop()}}),e)})))()}}},m=r(8),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("section",{staticClass:"w-full shadow-sm rounded-xl mb-20"},[r("div",{staticClass:"shadow-sm rounded-xl px-5 pb-5"},[r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"w-full  px-5 flex flex-wrap"},[r("label",{staticClass:" pl-2 w-full my-3 flex",attrs:{for:"nama"}},[t._v("avatar")]),t._v(" "),r("div",{staticClass:"w-full my-3 flex content-center justify-center items-center"},[r("croppa",{staticClass:"shadow-sm rounded-lg",attrs:{width:50,"prevent-white-space":"",height:50,"show-remove-button":!1},on:{init:t.onInit},model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}}),t._v(" "),r("button",{staticClass:"mx-3 rounded-full bg-theme_primary_light p-1 px-5 text-xs",on:{click:function(e){return t.avatar.remove()}}},[t._v("\r\n                      Remove\r\n                    ")])],1),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"nama"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.name,expression:"d.name"}],staticClass:"w-full\r\n                      shadow-sm bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-lg mb-3\r\n                      ",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.d.name},on:{input:function(e){e.target.composing||t.$set(t.d,"name",e.target.value)}}}),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.d.type,expression:"d.type"}],staticClass:"w-full\r\n                      shadow-sm bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-lg mb-3\r\n                      ",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.d,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Student activity units"}},[t._v("Student activity units")]),t._v(" "),r("option",{attrs:{value:"Student organizations"}},[t._v("Student organizations")]),t._v(" "),r("option",{attrs:{value:"StartUp"}},[t._v("StartUp")]),t._v(" "),r("option",{attrs:{value:"Community"}},[t._v("Community")])]),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"email"}},[t._v("Descriptions")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.desc,expression:"d.desc"}],staticClass:"w-full\r\n                          shadow-sm bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-lg mb-3\r\n                          ",attrs:{placeholder:"Descriptions"},domProps:{value:t.d.desc},on:{input:function(e){e.target.composing||t.$set(t.d,"desc",e.target.value)}}}),t._v(" "),r("button",{staticClass:"w-full  py-2 px-4 bg-primary_dark hover:opacity-75 rounded-lg mt-5",on:{click:t.save}},[r("i",{staticClass:"fa fa-plus"}),t._v("\r\n                          Create Group\r\n                      ")]),t._v(" "),r("router-link",{staticClass:"w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5",attrs:{to:"/"}},[r("i",{staticClass:"fa fa-plus"}),t._v("\r\n                          Cancel\r\n                      ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);