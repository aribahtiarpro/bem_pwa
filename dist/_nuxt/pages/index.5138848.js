(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{207:function(t,e,l){var content=l(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(74).default)("32abb0ec",content,!0,{sourceMap:!1})},208:function(t,e,l){"use strict";l.r(e);l(100),l(45),l(19),l(20),l(11);var r={parseQuestDate:function(t){var e=new Date(t),l=new Date,r=Math.round((l-e)/6e4);if(0==r)if((n=Math.round((l-e)/1e3))<10)var o="baru saja";else if(n<20)o="20 detik";else o="30 detik";else if(1==r){var n;if(30==(n=Math.round((l-e)/1e3)))o="30 detik";else if(n<60)o="< 1 menit";else o="1 menit"}else if(r<45)o=r+" menit";else if(r>44&&r<60)o="< 1 jam";else if(r<1440){var d=Math.round(r/60);if(1==d)o=" 1 jam";else o=d+" jam"}else if(r>1439&&r<2880)o="1 hari";else o=Math.round(r/1440)+" hari";return o}},o={props:["data","bigtext","active","hideBalasan"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-theme_secondary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-primary",followTemp:!1}},methods:{followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return r.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),l="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var r=t.split("/");l="https://img.youtube.com/vi/".concat(r[4],"/mqdefault.jpg")}else l="";return l}return""}}},n=(l(211),l(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[l("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 ",class:t.active?"bg-theme_primary_dark":""},[t.hideBalasan?t._e():l("div",{staticClass:"w-full"},[t.data.quest_id?l("nuxt-link",{staticClass:"p-1 text-xs w-full",attrs:{to:"/quest/"+t.data.quest_id}},[t._v("\n                             \n                                     Membalas :\n                                     \n                                     "),l("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary rounded-xl p-1 px-2",attrs:{to:"/quest/"+t.data.quest_id}},[l("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                         : "+t._s(t.data.quest.text.substring(0,20))+" ..\n                                         \n                                      ")])],1):t._e()],1),t._v(" "),t.data.group?l("div",[t.data.group.user_id==t.data.user.id?l("span",{staticClass:"bg-primary px-2 rounded-xl  text-xs text-secondary "},[t._v("admin")]):t._e(),t._v(" "),t.data.group_id?l("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                                  \n                                              #"+t._s(t.data.group.username)+" \n\n                                              ")]):t._e()],1):t._e(),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),l("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[l("span",{staticClass:"font-bold text-lg"},[t._v(t._s(t.data.user.name)+"\n                                          ")]),t._v(" "),l("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),l("span",{staticClass:"text-xs ml-auto text-primary_light"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                      ")])],1),t._v(" "),l("div",{staticClass:"w-auto flex "},[l("div",{staticClass:"flex flex-wrap items-start pl-8"},[t.data.embed?l("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}},["youtube"==t.cekSumber(t.data.embed)?l("div",[l("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.embed),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.embed)?l("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[l("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),l("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),l("div",{staticClass:"w-full media-preview py-2"},[t.data.video?l("img",{staticClass:"absolute play-button-youtube text-primary bg-primary rounded-full p-1",attrs:{src:"/play.svg",alt:"logo"},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):t._e(),t._v(" "),t.data.video?l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.thumb},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.img},on:{dblclick:function(e){return t.followQuest(t.data.id)}}})]),t._v(" "),l("nuxt-link",{staticClass:"w-full pb-4 text-sm",class:t.bigtext?"text-xl":"",attrs:{to:"/quest/"+t.data.id}},t._l(t.textToArray(t.data.text.slice(0,200)+" ..."),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),l("div",{staticClass:"flex text-right "},[l("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),l("div",{staticClass:"flex mx-3"},[l("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl text-xs text-primary  shadow-sm",on:{click:function(e){return t.$emit("balas",t.data)}}},[l("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),l("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[l("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?l("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):l("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",[t.followTemp?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,l){"use strict";l.r(e);var r={scrollToTop:!0,layout:"app",middleware:"auth",props:["quest"],data:function(){return{media:"",text:""}},methods:{kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.quest.group_id,quest_id:this.quest.id,text:this.text}).then((function(e){t.text="",t.media="",t.$emit("kirim")}))}}},o=l(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2"},[l("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen"},[l("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){return t.$emit("batal")}}}),t._v(" "),l("div",{staticClass:"w-full p-4 lg:w-1/2 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[l("div",{staticClass:"w-full p-4 shadow-sm rounded-lg"},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{maxlength:"255",placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){return t.$emit("batal")}}},[t._v("\n                  Batalkan\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,l){var r=l(6),o=l(141)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},211:function(t,e,l){"use strict";var r=l(207);l.n(r).a},212:function(t,e,l){(e=l(73)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},226:function(t,e,l){"use strict";l.r(e);l(21),l(11),l(210),l(100);var r={layout:"no-header",middleware:"auth",data:function(){return{quest:"",search:"",balas_quest:"",page:1,loadMore:!1,last_page:!1}},fetch:function(){this.getData()},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?this.loadMore=!1:t.loadMoregetData())}))},methods:{loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then((function(e){if(e.data=Object.values(e.data),e.data.length>0){var l=Object.values(t.quest.data);t.quest=l.concat(e.data)}else t.last_page=!0;t.loadMore=!1}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then((function(e){t.quest=e.data,0==t.quest.length&&t.$router.push("/explore")}))},to:function(t){"left"==t&&this.$router.push("/explore")}}},o=l(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.to,expression:"to",arg:"swipe"}],staticClass:"w-full"},[l("div",{staticClass:"mx-auto text-sm flex p-2"},[l("nuxt-link",{staticClass:"mx-1 px-5 py-2  bg-primary text-white rounded-full font-bold",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("Home"))+" ")]),t._v(" "),l("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 px-5 py-2  rounded-full font-bold",attrs:{to:"/explore"}},[t._v("\n      "+t._s(t.$t("Explore"))+"\n      ")]),t._v(" "),l("nuxt-link",{staticClass:"px-5 mx-1 ml-auto py-2  bg-theme_primary_dark text-primary  border-primary rounded-full font-bold",attrs:{to:"/search"}},[l("svg",{staticClass:"bi bi-search",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])])],1),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest,(function(e){return l("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n      Memuat...\n    ")]):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BalasQuest:l(209).default,CardPost:l(208).default})}}]);