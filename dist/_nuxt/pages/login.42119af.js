(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{215:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{loginWithUsername:!1,login:{username:"",password:""}}},fetch:function(){var t,s,e,n,o;this.$store.state.auth&&this.$router.push("/"),window.fbAsyncInit=function(){FB.init({appId:"303728384144081",cookie:!0,xfbml:!0,version:"v7.0"}),FB.AppEvents.logPageView()},t=document,s="script",e="facebook-jssdk",o=t.getElementsByTagName(s)[0],t.getElementById(e)||((n=t.createElement(s)).id=e,n.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(n,o))},computed:{settings:function(){return this.$store.state.leftMenu+" "+this.$store.state.theme+" "+this.$store.state.primaryColor}},methods:{cekLoginFb:function(){var t=this;FB.getLoginStatus((function(e){e.authResponse?t.$store.commit("loginfb",e.authResponse):t.loginFb()}))},loginFb:function(){var t=this;FB.login((function(e){t.$store.commit("loginfb",e.authResponse)}),{scope:"email",return_scopes:!0})},loginAct:function(){this.$store.commit("login",this.login)}}},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full min-h-screen flex flex-wrap content-center ",class:t.settings},[n("settings",{staticClass:"z-50"}),t._v(" "),n("topheader",{staticClass:"fixed top-0 "}),t._v(" "),n("main",{staticClass:"w-full  mx-auto flex flex-wrap   px-10",staticStyle:{"max-width":"400px"}},[t.loginWithUsername?n("div",{staticClass:"flex w-full flex-wrap"},[t.$store.state.errorMessages?n("div",{staticClass:"bg-danger w-full py-1 my-3 px-3 text-center rounded-full"},[t._v("\n        "+t._s(t.$store.state.errorMessages)+"\n      ")]):t._e(),t._v(" "),n("label",{staticClass:"w-full py-3 px-2"},[t._v("Username or Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],staticClass:" \n                       bg-theme_primary_light\n                      py-2 px-8 \n                      rounded-full mb-3\n                      w-full\n                      \n                      ",attrs:{type:"text",placeholder:"Username or Email"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),n("label",{staticClass:"w-full py-3 px-2"},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:" \n                       bg-theme_primary_light\n                      py-2 px-8 \n                      rounded-full mb-3\n                      w-full\n                      \n                      ",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginAct(e)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),n("button",{staticClass:"w-full  py-2 px-4 bg-primary hover:opacity-75 rounded-full mt-5 text-white font-bold",on:{click:t.loginAct}},[t._v("\n        Login\n      ")])]):t._e(),t._v(" "),t.loginWithUsername?t._e():n("h1",{staticClass:"w-full text-center text-4xl mb-20"},[t._v("\n      "+t._s(t.$t("welcome"))+"\n    ")]),t._v(" "),n("button",{staticClass:"text-white w-full p-2  rounded-full bg-blue-600 hover:bg-blue-700 mt-5",on:{click:t.cekLoginFb}},[t._v("\n      "+t._s(t.$t("loginwith"))+" Facebook\n    ")]),t._v(" "),t.loginWithUsername?t._e():n("button",{staticClass:"w-full p-2  rounded-full bg-theme_primary_light  mt-5",attrs:{loginWithUsername:""},on:{click:function(e){t.loginWithUsername=!0}}},[t._v("\n      "+t._s(t.$t("loginwith"))+" Username\n    ")]),t._v(" "),n("p",{staticClass:"w-full text-center p-2 pt-10 text-sm"},[n("a",{staticClass:"text-primary",attrs:{href:"/privacy-policy.html"}},[t._v(t._s(t.$t("tos")))])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Settings:n(138).default,Topheader:n(137).default})}}]);