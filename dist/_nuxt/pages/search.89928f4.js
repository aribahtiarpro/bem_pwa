(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{232:function(e,t,l){"use strict";l.r(t);var r={layout:"no-header",middleware:"auth",data:function(){return{search:"",className:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",classNameActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",data:"",filter:{type:"",search:"",page:1},loadMore:!1}},methods:{getData:function(){}}},n=l(9),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"p-4"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full py-2 px-5 rounded-full bg-theme_primary_dark",attrs:{type:"text",placeholder:"Ketikan Sesuatu"},domProps:{value:e.search},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getData(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),l("div",{staticClass:"py-3 flex flex-row",staticStyle:{"overflow-x":"scroll"}},[l("div",{class:e.filter.type==e.type?e.classNameActive:e.className},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),e._v("\n            Quest\n          ")]),e._v(" "),l("div",{class:e.filter.type==e.type?e.classNameActive:e.className},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),e._v("\n            Group\n          ")]),e._v(" "),l("div",{class:e.filter.type==e.type?e.classNameActive:e.className},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),e._v("\n            Pengguna\n          ")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);