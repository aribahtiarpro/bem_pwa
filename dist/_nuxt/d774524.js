(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{239:function(t,e,r){var content=r(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("32abb0ec",content,!0,{sourceMap:!1})},240:function(t,e,r){"use strict";r.r(e);r(107),r(52),r(21),r(22),r(12);var l={parseQuestDate:function(t){var e=new Date(t),r=new Date,l=Math.round((r-e)/6e4);if(0==l)if((n=Math.round((r-e)/1e3))<10)var o="baru saja";else if(n<20)o="20 detik";else o="30 detik";else if(1==l){var n;if(30==(n=Math.round((r-e)/1e3)))o="30 detik";else if(n<60)o="< 1 menit";else o="1 menit"}else if(l<45)o=l+" menit";else if(l>44&&l<60)o="< 1 jam";else if(l<1440){var d=Math.round(l/60);if(1==d)o=" 1 jam";else o=d+" jam"}else if(l>1439&&l<2880)o="1 hari";else o=Math.round(l/1440)+" hari";return o}},o={props:["data","bigtext","active","hideBalasan","link"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-theme_secondary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-primary",followTemp:!1}},methods:{isLink:function(link){return!!link&&"http"==link.substring(0,4)},followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return l.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var l=t.split("/");r="https://img.youtube.com/vi/".concat(l[4],"/mqdefault.jpg")}else r="";return r}return""}}},n=(r(241),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.id?r("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[r("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 ",class:t.active?"bg-theme_primary_dark":""},[t.hideBalasan?t._e():r("div",{staticClass:"w-full"},[t.data.quest_id?r("nuxt-link",{staticClass:"p-1 text-xs w-full",attrs:{to:"/quest/"+t.data.quest_id}},[t._v("\n                             \n                                     Membalas :\n                                     \n                                     "),r("nuxt-link",{staticClass:" text-primary rounded-xl p-1 px-2",attrs:{to:"/quest/"+t.data.quest_id}},[r("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                         : \n                                      "+t._s(t.data.quest.text.substring(0,20))+" \n                                         \n                                      ")])],1):t._e()],1),t._v(" "),t.data.group?r("div",[t.data.group.user_id==t.data.user.id?r("span",{staticClass:"bg-primary px-2 rounded-xl  text-xs text-secondary "},[t._v("admin")]):t._e(),t._v(" "),t.data.group_id?r("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                                  \n                                              #"+t._s(t.data.group.username)+" \n\n                                              ")]):t._e()],1):t._e(),t._v(" "),r("div",{staticClass:"flex pt-2"},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),r("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[r("span",{staticClass:"font-bold text-lg"},[t._v(t._s(t.data.user.name)+"\n                                          ")]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),r("span",{staticClass:"text-xs ml-auto text-primary_light flex"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                         "),t.data.user_id==t.$store.state.user.id?r("span",{staticClass:"px-2"},[r("svg",{staticClass:"bi bi-pencil bg-theme_primary_dark p-1 rounded-full",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}})])]):t._e()])],1),t._v(" "),r("div",{staticClass:"w-auto flex "},[r("div",{staticClass:"flex flex-wrap items-start pl-8"},[t.data.embed?r("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}},["youtube"==t.cekSumber(t.data.embed)?r("div",[r("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.embed),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.embed)?r("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[r("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),r("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),r("div",{staticClass:"w-full media-preview py-2"},[t.data.video?r("img",{staticClass:"absolute play-button-youtube text-primary bg-primary rounded-full p-1",attrs:{src:"/play.svg",alt:"logo"},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):t._e(),t._v(" "),t.data.video?r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.thumb},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.img},on:{dblclick:function(e){return t.followQuest(t.data.id)}}})]),t._v(" "),t.active?r("div",{staticClass:"w-full pb-4 text-sm"},t._l(t.textToArray(t.data.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t.link?r("span",[t.isLink(e)?r("a",{staticClass:"text-primary",attrs:{href:e,target:"_BLANK"}},[t._v(t._s(e))]):r("span",[t._v(" "+t._s(e)+" ")])]):r("span",[t._v(" "+t._s(e)+" ")])])],1)})),0):r("nuxt-link",{staticClass:"w-full pb-4 text-sm",attrs:{to:"/quest/"+t.data.id}},t._l(t.textToArray(t.data.text.slice(0,200)+" ..."),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),r("div",{staticClass:"flex text-right "},[r("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),r("div",{staticClass:"flex mx-3"},[r("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl text-xs text-primary  shadow-sm",on:{click:function(e){return t.$emit("balas",t.data)}}},[r("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),r("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[r("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?r("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):r("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",[t.followTemp?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,r){"use strict";var l=r(239);r.n(l).a},242:function(t,e,r){(e=r(65)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},244:function(t,e,r){"use strict";r.r(e);var l={scrollToTop:!0,layout:"app",middleware:"auth",props:["quest"],data:function(){return{media:"",text:""}},created:function(){var t=this;this.$nextTick((function(){return t.$refs.inputText.focus()}))},methods:{kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.quest.group_id,quest_id:this.quest.id,text:this.text}).then((function(e){t.$emit("kirim"),t.$store.commit("setNotif",{to:t.quest.user_id,text:"@"+t.$store.state.user.username+" membalas : "+t.text}),t.text="",t.media=""}))}}},o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2"},[r("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen"},[r("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){return t.$emit("batal")}}}),t._v(" "),r("div",{staticClass:"w-full p-4 lg:w-1/2 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[r("div",{staticClass:"w-full p-4 shadow-sm rounded-lg"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"inputText",staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{maxlength:"255",placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){return t.$emit("batal")}}},[t._v("\n                  Batalkan\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,r){"use strict";r.r(e);r(52),r(21),r(22),r(12),r(107);var l={scrollToTop:!0,layout:"no-header",middleware:"auth",props:["showModalDefault","group","hiddenbottom","umum"],data:function(){return{modal_quest:!1,showModal:"",d:{}}},created:function(){this.$props.showModalDefault&&(this.modal_quest=!0)},methods:{showModalQuest:function(source){var t=this;"img"==source?this.showModal="img":"sp"==source&&(this.showModal="sp",this.$nextTick((function(){return t.$refs.inputSP.focus()}))),"yt"==source&&(this.showModal="yt",this.$nextTick((function(){return t.$refs.inputYT.focus()})))},createNew:function(){this.modal_quest=!0},cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtu.be")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))r="https://www.youtube.com/embed/"+t.split("/")[3];else r="";return r}return""},kirim:function(){var t=this;this.group&&(this.d.group_id=this.group.id),this.d.embed=this.getUrl(this.d.embed),this.$axios.$post("/quest",this.d).then((function(e){t.$router.push("/quest/"+e.id)}))}}},o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2"},[r("div",{class:t.$store.state.topMenu?"":"hidden"},[t.hiddenbottom?t._e():r("button",{staticClass:" bg-primary text-secondary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 ",on:{click:t.createNew}},[r("svg",{staticClass:"bi bi-plus-circle",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v(" "),r("span",{staticClass:"hidden lg:block px-2"},[t._v(" Buat Quest")])])]),t._v(" "),t.modal_quest?r("section",{staticClass:"mx-auto flex flex-wrap  z-30 fixed top-0"},[t.hiddenbottom?t._e():r("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){t.modal_quest=!1}}}),t._v(" "),r("div",{staticClass:"w-full content-start max-w-xl flex flex-wrap justify-center z-50 overflow-y-scroll bg-theme_primary rounded-xl p-4",staticStyle:{height:"90vh"}},[t.d.video?r("div",{staticClass:"rounded-xl w-full"},[r("video",{attrs:{width:"100%",controls:"",autoplay:""}},[r("source",{attrs:{src:t.d.video,type:"video/mp4"}}),t._v("\n          Your browser does not support the video tag.\n        ")])]):r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.d.img}}),t._v(" "),t.d.embed?r("div",{staticClass:"w-full pb-4 videoWrapper"},["spotify"==t.cekSumber(t.d.embed)?r("iframe",{attrs:{src:t.getUrl(t.d.embed),width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.d.embed)?r("iframe",{attrs:{width:"560",height:"315",src:t.getUrl(t.d.embed),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),t.group?r("h1",{staticClass:"p-2 font-bold"},[t._v("\n      Kirim Ke Group : #"+t._s(t.group.username)+"\n    ")]):t._e(),t._v(" "),t.umum?t._e():r("div",[r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.d.type,expression:"d.type"}],staticClass:"w-full\n      shadow-sm bg-theme_primary_light\n      py-2 px-4 \n      rounded-lg mb-3\n      ",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.d,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"0",selected:""}},[t._v("Umum")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("Pertanyaan ")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Event")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("Donasi")]),t._v(" "),r("option",{attrs:{value:"4"}},[t._v("Katalog")]),t._v(" "),r("option",{attrs:{value:"5"}},[t._v("Loker")]),t._v(" "),r("option",{attrs:{value:"6"}},[t._v("Pengaduan (Private)")])])]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.text,expression:"d.text"}],staticClass:"bg-theme_primary_dark w-full rounded-lg p-4 mt-3 h-48",attrs:{placeholder:"Katakan sesuatu ..."},domProps:{value:t.d.text},on:{input:function(e){e.target.composing||t.$set(t.d,"text",e.target.value)}}}),t._v(" "),r("div",{staticClass:"flex w-full my-5 "},[r("span",{staticClass:"px-2"},[t._v("Upload Dari :")]),t._v(" "),r("div",{staticClass:"ml-8 cursor-pointer text-primary",on:{click:function(e){return t.showModalQuest("img")}}},[r("svg",{staticClass:"w-7 h-8 bi bi-card-image",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])]),t._v(" "),r("img",{staticClass:"ml-8 cursor-pointer w-8 h-8",attrs:{src:"/youtube.png"},on:{click:function(e){return t.showModalQuest("yt")}}}),t._v(" "),r("img",{staticClass:"ml-8 cursor-pointer w-8 h-8",attrs:{src:"/spotify.png"},on:{click:function(e){return t.showModalQuest("sp")}}})]),t._v(" "),r("button",{staticClass:" py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n      Kirim\n    ")]),t._v(" "),t.hiddenbottom?r("button",{staticClass:" py-2 w-full rounded-lg mt-2 bg-secondary text-primary shadow-sm",on:{click:function(e){return t.$router.back()}}},[t._v("\n      Batalkan\n    ")]):r("button",{staticClass:" py-2 w-full rounded-lg mt-2 bg-secondary text-primary shadow-sm",on:{click:function(e){t.modal_quest=!1}}},[t._v("\n      Batalkan\n    ")]),t._v(" "),t.showModal?r("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-end lg:content-center z-30 fixed bottom-0 right-0 "},[r("div",{staticClass:"w-full  flex flex-wrap justify-center content-end bg-theme_primary_dark opacity-50 z-40 fixed bottom-0 right-0 h-screen ",on:{click:function(e){t.showModal=""}}}),t._v(" "),r("div",{staticClass:"w-full  lg:w-1/3 justify-center flex flex-wrap z-50 content-end bg-theme_primary rounded-xl mb-16 p-5 mx-auto"},["yt"==t.showModal?r("div",{staticClass:"w-full flex flex-wrap"},[r("h1",{staticClass:"font-bold p-2"},[t._v("Paste Youtube Share Link")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.embed,expression:"d.embed"}],ref:"inputYT",staticClass:"  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Youtube contoh: 'https://youtu.be/hH6hI5grCms'",type:"text"},domProps:{value:t.d.embed},on:{input:function(e){e.target.composing||t.$set(t.d,"embed",e.target.value)}}})]):t._e(),t._v(" "),"sp"==t.showModal?r("div",{staticClass:"w-full flex flex-wrap"},[r("h1",{staticClass:"font-bold p-2"},[t._v("Paste Spotify Podcast Link")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.embed,expression:"d.embed"}],ref:"inputSP",staticClass:"  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Spotify Podcast Link contoh: 'https://open.spotify.com/episode/1IJCl8993xjDNdIKR5EVVE?si=K4XrGBSrS12Kcjh3ZHOMZA'",type:"text"},domProps:{value:t.d.embed},on:{input:function(e){e.target.composing||t.$set(t.d,"embed",e.target.value)}}})]):t._e(),t._v(" "),"img"==t.showModal?r("div",{staticClass:"w-full flex flex-wrap"},[t._v("\n           Upload Foto\n        ")]):t._e()])]):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,r){"use strict";r.r(e);r(107),r(45),r(46);var l={layout:"no-header",middleware:"auth",props:["id","editprofile"],data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",profile:"",quest:"",search:"",filter:"Quest Only",balas_quest:"",page:1,loadMore:!1,last_page:!1,usernameIg:"",followTemp:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?t.loadMore=!1:t.loadMoregetData())}))},fetch:function(){var t=this;this.$axios.$get("/profile/"+this.id).then((function(data){t.profile=data,t.getData(),t.profile.instagram&&(t.profile.instagram.includes("@")?t.usernameIg=t.profile.instagram.substring(1):t.usernameIg=t.profile.instagram)}))},methods:{followUser:function(t){var e=this;this.$axios.get("/user/follow/"+t).then((function(r){e.followTemp=!0,e.$store.commit("setNotif",{to:t,text:"@"+e.$store.state.user.username+" Mengikuti anda"})}))},loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.$get("/profile/quest/"+this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(e){e.data.length>0?t.quest.data=t.quest.data.concat(e.data):t.last_page=!0,t.loadMore=!1}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/profile/quest/"+this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(data){t.quest=data}))}}},o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.profile?r("div",{staticClass:"w-full"},[r("section",[r("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl "},[r("div",{staticClass:"w-full font-bold flex justify-start  "},[r("img",{staticClass:"w-12 h-12 mt-4 rounded-full",attrs:{src:t.profile.avatar,alt:t.profile.name}}),t._v(" "),r("div",{staticClass:"w-full pl-5 flex flex-wrap items-start "},[r("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[t._v("\n            "+t._s(t.profile.name)+"\n            "),r("br"),t._v(" "),r("router-link",{staticClass:"text-lg text-primary",attrs:{to:"@"+t.profile.username}},[t._v("@"+t._s(t.profile.username))]),t._v(" "),t.editprofile?t._e():r("div",{staticClass:"float-right text-sm flex"},[t.profile.followed?r("div",[r("span",{staticClass:"cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                                  Diikuti\n                              ")])]):r("div",[t.followTemp?t._e():r("span",{staticClass:"cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary",on:{click:function(e){return t.followUser(t.profile.id)}}},[t._v("\n                                            Ikuti\n                                        ")]),t._v(" "),t.followTemp?r("span",{staticClass:"cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                                          Diikuti\n                                      ")]):t._e()]),t._v(" "),t.usernameIg?r("div",{staticClass:"px-3 -mt-2"},[r("a",{staticClass:"text-primary",attrs:{href:"https://instagram.com/"+t.usernameIg}},[r("img",{staticClass:"h-10 w-10 p-2",attrs:{src:"/instagram.png"}})])]):t._e()]),t._v(" "),t.editprofile?r("div",{staticClass:"float-right text-sm -mt-6"},[r("span",{staticClass:"mb-2 text-center cursor-pointer bg-theme_primary_dark  px-4 py-1 rounded-full text-primary",on:{click:function(e){return t.$store.commit("toggleSetting",!0)}}},[t._v("\n                              Pengaturan\n                       ")]),t._v(" "),r("div",{staticClass:"w-full pt-3 text-right"},[r("router-link",{staticClass:"mb-2 text-center cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary",attrs:{to:"/edit/profile"}},[t._v("\n                                  Edit Profile\n                          ")])],1)]):t._e()],1)])])])]),t._v(" "),t.balas_quest?r("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),r("div",{staticClass:"p-2 flex flex-row mt-2",staticStyle:{"overflow-x":"scroll"}},[r("div",{class:"Quest Only"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest Only",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest Saja\n    ")]),t._v(" "),r("div",{class:"Quest & Balasan"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest & Balasan",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest & Balasan\n    ")]),t._v(" "),r("div",{class:"Media"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Media",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Media\n    ")])]),t._v(" "),r("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest.data,(function(e){return r("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),t.loadMore?r("span",{staticClass:"p-4 text-center w-full"},[t._v("\n      Memuat ...\n    ")]):t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BalasQuest:r(244).default,CardPost:r(240).default})}}]);