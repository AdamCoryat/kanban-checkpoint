(function(t){function e(e){for(var s,o,n=e[0],c=e[1],d=e[2],u=0,p=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ae1":function(t,e,a){},"0d78":function(t,e,a){t.exports=a.p+"img/carousel2.031d025e.jpg"},"124c":function(t,e,a){t.exports=a.p+"img/carousel4.1bf0a6a3.jpg"},"3d01":function(t,e,a){},"3f6f":function(t,e,a){t.exports=a.p+"img/carousel1.72b8163b.jpg"},"477c":function(t,e,a){t.exports=a.p+"img/carousel5.e074a953.jpg"},"4a03":function(t,e,a){"use strict";var s=a("769a"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-success"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("\n        Login\n      ")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),d=a.n(c);d.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var l={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=l,p=a("2877"),m=Object(p["a"])(u,o,n,!1,null,null,null),h=m.exports,v=a("335d"),g={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=g,b=(a("5c0b"),Object(p["a"])(f,r,i,!1,null,null,null)),k=b.exports,C=a("8c4f"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center home-title"},[s("h1",{staticClass:"title-text"},[t._v("Your Kanban")])]),t._v(" "),s("div",{staticClass:"col-12 d-flex justify-content-center"},[s("div",{staticClass:"carousel slide carousel-fade carousel-size my-3",attrs:{id:"carouselExampleFade","data-ride":"carousel"}},[s("div",{staticClass:"carousel-inner rounded shadow"},[s("div",{staticClass:"carousel-item active"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("3f6f"),alt:"..."}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("0d78"),alt:"..."}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("9c29"),alt:"..."}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("124c"),alt:"..."}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("477c"),alt:"..."}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("84df"),alt:"..."}})])]),t._v(" "),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])])])])])])}],_={name:"home",data(){return{}},computed:{},methods:{},components:{}},x=_,P=(a("f3a4"),Object(p["a"])(x,w,y,!1,null,"06b649b3",null)),T=P.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboards container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"card card-body bg-primary border-dark shadow m-1"},[a("form",{staticClass:"m-2",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-success border-dark",attrs:{type:"submit"}},[t._v("\n            Create Board\n          ")])])])])]),t._v(" "),a("div",{staticClass:"row d-flex flex-wrap justify-content-center"},t._l(t.boards,(function(t){return a("board-component",{key:t.id,attrs:{boardProp:t}})})))])},I=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board-component col-3"},[a("div",{staticClass:"card m-2 bg-primary"},[t.editToggle?a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.boardEdit.title,expression:"boardEdit.title"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Board title..."},domProps:{value:t.boardEdit.title},on:{input:function(e){e.target.composing||t.$set(t.boardEdit,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.boardEdit.description,expression:"boardEdit.description"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Board description..."},domProps:{value:t.boardEdit.description},on:{input:function(e){e.target.composing||t.$set(t.boardEdit,"description",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Save")])]):t._e(),t._v(" "),a("p",{staticClass:"d-flex justify-content-between p-1"},[a("i",{staticClass:"fa fa-paint-brush text-secondary text-left pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-times-circle-o text-danger text-right mx-1 pointer",attrs:{"aria-hidden":"true"},on:{click:t.deleteBoard}})]),t._v(" "),a("router-link",{attrs:{to:{name:"board",params:{id:t.boardProp.id}}}},[a("h1",{staticClass:"text-light text-center"},[t._v(t._s(t.boardProp.title))])]),t._v(" "),a("div",{staticClass:"card-body bg-white border-primary text-dark"},[a("p",{staticClass:"text-center"},[t._v(t._s(t.boardProp.description))])])],1)])},B=[],j={name:"board-component",props:{boardProp:{}},data(){return{boardEdit:{},editToggle:!1}},computed:{},methods:{editBoard(){this.$store.dispatch("edit",{getPath:"boards",path:"boards/"+this.boardProp.id,data:this.boardEdit,resource:"boards"}),this.boardEdit={},this.editToggle=!1},deleteBoard(){this.$store.dispatch("deleteById",{deletePath:"boards/"+this.boardProp.id,resource:"boards",path:"boards"})}},components:{}},D=j,L=Object(p["a"])(D,E,B,!1,null,"792a27c8",null),N=L.exports,O={name:"dashboards",mounted(){this.$store.dispatch("getResource",{path:"boards",resource:"boards"})},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("create",{getPath:"boards/",path:"boards/",resource:"boards",data:this.newBoard}),this.newBoard={}}},components:{BoardComponent:N}},S=O,R=Object(p["a"])(S,$,I,!1,null,null,null),A=R.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"m-2"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createList(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"List title..."},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"row p-2"},t._l(t.lists,(function(t){return a("list-component",{key:t.id,attrs:{listProp:t}})})))])},M=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-component col-3"},[a("div",{staticClass:"card bg-primary border-dark shadow m-1"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"d-flex justify-content-between p-1"},[a("i",{staticClass:"fa fa-paint-brush text-secondary text-left pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-times-circle-o text-danger text-right mx-1 pointer",attrs:{"aria-hidden":"true"},on:{click:t.deleteList}})]),t._v(" "),t.editToggle?a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editList(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listEdit.title,expression:"listEdit.title"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"List title..."},domProps:{value:t.listEdit.title},on:{input:function(e){e.target.composing||t.$set(t.listEdit,"title",e.target.value)}}})]):t._e(),t._v(" "),a("h2",{staticClass:"text-light text-center"},[t._v(t._s(t.listProp.title))]),t._v(" "),a("i",{staticClass:"fa fa-bars text-dark pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.listToggle=!t.listToggle}}})]),t._v(" "),t.listToggle?a("div",[a("div",{staticClass:"card-body"},[a("i",{staticClass:"fa fa-plus text-dark text-left pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.taskToggle=!t.taskToggle}}}),t._v(" "),t.taskToggle?a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Task title..."},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}})]):t._e()]),t._v(" "),a("div",{staticClass:"card-body p-2"},t._l(t.tasks,(function(t){return a("task-component",{key:t.id,attrs:{taskProp:t}})})))]):t._e()])])},z=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-component card bg-task border-dark border rounded my-1"},[a("div",{staticClass:"card-title bg-success rounded"},[a("p",{staticClass:"d-flex justify-content-between p-1"},[a("i",{staticClass:"fa fa-paint-brush text-dark text-left pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-times-circle-o text-danger text-right mx-1 pointer",attrs:{"aria-hidden":"true"},on:{click:t.deleteTask}})]),t._v(" "),a("h4",{staticClass:"text-center text-light"},[t._v(t._s(t.taskProp.title))]),t._v(" "),a("p",{staticClass:"d-flex justify-content-between p-1"},[a("i",{staticClass:"fa fa-plus text-dark text-left pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.commentToggle=!t.commentToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-arrows text-dark pointer m-1 text-right",attrs:{"aria-hidden":"true"},on:{click:function(e){t.moveToggle=!t.moveToggle}}})])]),t._v(" "),t.moveToggle?a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.newTaskList.listId,expression:"newTaskList.listId"}],staticClass:"custom-select",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newTaskList,"listId",e.target.multiple?a:a[0])},function(e){t.moveTask()}]}},t._l(t.lists,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])})))]):t._e(),t._v(" "),t.editToggle?a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editTask(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskEdit.title,expression:"taskEdit.title"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Task title..."},domProps:{value:t.taskEdit.title},on:{input:function(e){e.target.composing||t.$set(t.taskEdit,"title",e.target.value)}}})]):t._e(),t._v(" "),t.commentToggle?a("div",{staticClass:"card-body"},[a("form",{staticClass:"md-form",attrs:{id:"comment-add"},on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.body,expression:"newComment.body"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Enter Comment..."},domProps:{value:t.newComment.body},on:{input:function(e){e.target.composing||t.$set(t.newComment,"body",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"card-body"},t._l(t.comments,(function(t){return a("comment-component",{key:t.id,attrs:{commentProp:t}})})))])},Y=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-component"},[a("div",{staticClass:"card comment-border my-1 bg-warning"},[a("div",{staticClass:"text-right"},[a("i",{staticClass:"fa fa-paint-brush text-dark text-right pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-times-circle-o text-danger text-right mx-1 pointer",attrs:{"aria-hidden":"true"},on:{click:t.deleteComment}})]),t._v(" "),a("p",{staticClass:"mx-1 rounded bg-light p-2"},[t._v(t._s(t.commentProp.body))]),t._v(" "),t.editToggle?a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.commentEdit.body,expression:"commentEdit.body"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Comment edit..."},domProps:{value:t.commentEdit.body},on:{input:function(e){e.target.composing||t.$set(t.commentEdit,"body",e.target.value)}}})]):t._e()])])},J=[],W={name:"comment-component",props:{commentProp:{}},data(){return{commentEdit:{},editToggle:!1}},computed:{},methods:{editComment(){this.$store.dispatch("editDictionaries",{getPath:"tasks/"+this.commentProp.taskId+"/comments",path:"comments/"+this.commentProp.id,resource:"comments",data:this.commentEdit,parentId:this.commentProp.taskId}),this.commentEdit={},this.editToggle=!1},deleteComment(){this.$store.dispatch("deleteDictionary",{deletePath:"comments/"+this.commentProp.id,path:"tasks/"+this.commentProp.taskId+"/comments",resource:"comments",id:this.commentProp.id,parentId:this.commentProp.taskId})}},components:{}},q=W,Q=(a("f82a"),Object(p["a"])(q,H,J,!1,null,"47cf9513",null)),Z=Q.exports,G={name:"task-component",props:{taskProp:{}},mounted(){this.$store.dispatch("getDictionaries",{path:"tasks/"+this.taskProp.id+"/comments",resource:"comments",parentId:this.taskProp.id})},data(){return{taskEdit:{},newComment:{},newTaskList:{},editToggle:!1,moveToggle:!1,commentToggle:!1}},computed:{lists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskProp.id]}},methods:{moveTask(){this.$store.dispatch("moveTask",{path:"tasks/"+this.taskProp.id,data:this.newTaskList,id:this.$route.params.id,parentId:this.newTaskList.listId,oldParentId:this.taskProp.listId})},editTask(){this.$store.dispatch("editDictionaries",{getPath:"lists/"+this.taskProp.listId+"/tasks",path:"tasks/"+this.taskProp.id,resource:"tasks",data:this.taskEdit,parentId:this.taskProp.listId}),this.taskEdit={},this.editToggle=!1},deleteTask(){this.$store.dispatch("deleteDictionary",{deletePath:"tasks/"+this.taskProp.id,path:"lists/"+this.taskProp.listId+"/tasks",resource:"tasks",parentId:this.taskProp.listId})},addComment(){this.newComment.taskId=this.taskProp.id,this.newComment.listId=this.taskProp.listId,this.newComment.boardId=this.$route.params.id,this.$store.dispatch("createDictionary",{getPath:"tasks/"+this.taskProp.id+"/comments",path:"comments",resource:"comments",data:this.newComment,parentId:this.taskProp.id}),this.newComment={}}},components:{CommentComponent:Z}},V=G,X=(a("4a03"),Object(p["a"])(V,K,Y,!1,null,"5557b9e0",null)),tt=X.exports,et={name:"list-component",props:{listProp:{}},mounted(){this.$store.dispatch("getDictionaries",{path:"lists/"+this.listProp.id+"/tasks",resource:"tasks",parentId:this.listProp.id})},data(){return{listEdit:{},newTask:{},editToggle:!1,taskToggle:!1,listToggle:!1}},computed:{tasks(){return this.$store.state.tasks[this.listProp.id]}},methods:{editList(){this.$store.dispatch("edit",{getPath:"boards/"+this.listProp.boardId+"/lists",path:"lists/"+this.listProp.id,data:this.listEdit,resource:"lists"}),this.listEdit={},this.editToggle=!1},deleteList(){this.$store.dispatch("deleteById",{deletePath:"lists/"+this.listProp.id,id:this.listProp.id,resource:"lists",path:"boards/"+this.listProp.boardId+"/lists"})},addTask(){this.newTask.listId=this.listProp.id,this.newTask.boardId=this.$route.params.id,this.$store.dispatch("createDictionary",{getPath:"lists/"+this.listProp.id+"/tasks",path:"tasks",resource:"tasks",data:this.newTask,parentId:this.listProp.id}),this.newTask={}}},components:{TaskComponent:tt}},at=et,st=Object(p["a"])(at,U,z,!1,null,"51f8896a",null),rt=st.exports,it={name:"board",props:["id"],mounted(){this.$store.dispatch("getResource",{path:"boards/"+this.$route.params.id,resource:"activeBoard"}),this.$store.dispatch("getResource",{path:"boards/"+this.$route.params.id+"/lists",resource:"lists"})},data(){return{newList:{}}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{createList(){this.newList.boardId=this.$route.params.id,this.$store.dispatch("create",{getPath:"boards/"+this.$route.params.id+"/lists",path:"lists",resource:"lists",data:this.newList}),this.newList={}}},components:{ListComponent:rt}},ot=it,nt=Object(p["a"])(ot,F,M,!1,null,null,null),ct=nt.exports;s["a"].use(C["a"]);var dt=new C["a"]({routes:[{path:"/",name:"home",component:T},{path:"/dashboard",name:"dashboard",component:A,beforeEnter:v["b"]},{path:"/boards/:id",name:"board",component:ct,beforeEnter:v["b"]},{path:"*",redirect:"/"}]}),lt=a("2f62");let ut=location.host.includes("localhost")?"http://localhost:3000/":"/";const pt=d.a.create({baseURL:ut+"api/",timeout:3e3,withCredentials:!0});var mt=a("ac68"),ht=a.n(mt);class vt{static async confirmAction(t="Are you sure",e="You won't be able to revert this!"){try{let a=await ht.a.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonColor:"teal",cancelButtonColor:"lightsalmon",confirmButtonText:"Yes, delete it!"});return!!a.value}catch(a){}}static toast(t="Default Toast",e=5e3,a="info"){ht.a.fire({title:t,icon:a,timer:e,toast:!0,position:"top-right",showConfirmButton:!1,timerProgressBar:!0})}}s["a"].use(lt["a"]);var gt=new lt["a"].Store({state:{user:{},boards:[],lists:[],tasks:{},comments:{},activeBoard:{}},mutations:{setUser(t,e){t.user=e},setResource(t,e){t[e.resource]=e.data},setDictionary(t,e){s["a"].set(t[e.resource],e.parentId,e.data)},addResource(t,e){let a=t[e.resource];Array.isArray(a)?a.push(e.data):console.error("Cannot add to ${payload.resource} as it is not an array")},addDictionary(t,e){let a=t[e.resource][e.id];a.push(e.data)}},actions:{setBearer({},t){pt.defaults.headers.authorization=t},resetBearer(){pt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await pt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},async getResource({commit:t},e){try{let a=await pt.get(e.path);t("setResource",{data:a.data,resource:e.resource})}catch(a){console.error(a)}},async create({dispatch:t},e){try{await pt.post(e.path,e.data),t("getResource",{path:e.getPath,resource:e.resource}),vt.toast("Created!",2e3,"success")}catch(a){console.error(a)}},async edit({dispatch:t},e){try{await pt.put(e.path,e.data),t("getResource",{path:e.getPath,resource:e.resource}),vt.toast("Saved!",2e3,"success")}catch(a){console.error(a)}},async deleteById({dispatch:t},e){try{await vt.confirmAction()&&await pt.delete(e.deletePath),t("getResource",{path:e.path,resource:e.resource}),vt.toast("Deleted!",2e3,"success")}catch(a){console.error(a)}},async getDictionaries({commit:t},e){try{let a=await pt.get(e.path);t("setDictionary",{resource:e.resource,data:a.data,parentId:e.parentId})}catch(a){console.error(a)}},async createDictionary({dispatch:t},e){try{let a=await pt.post(e.path,e.data);t("getDictionaries",{path:e.getPath,resource:e.resource,data:a.data,parentId:e.parentId}),vt.toast("Created!",2e3,"success")}catch(a){console.error(a)}},async editDictionaries({dispatch:t},e){try{await pt.put(e.path,e.data);t("getDictionaries",{path:e.getPath,parentId:e.parentId,resource:e.resource}),vt.toast("Saved!",2e3,"success")}catch(a){}},async deleteDictionary({dispatch:t},e){try{await vt.confirmAction("do you want to delete?")&&await pt.delete(e.deletePath),t("getDictionaries",{resource:e.resource,path:e.path,parentId:e.parentId}),vt.toast("Deleted!",2e3,"success")}catch(a){console.error(a)}},async moveTask({dispatch:t},e){try{await pt.put(e.path,e.data),t("getLists",{id:e.id,resource:"tasks",parentId:e.parentId}),t("getLists",{id:e.id,resource:"tasks",parentId:e.oldParentId}),vt.toast("Task Moved!",2e3,"success")}catch(a){console.error(a)}},async getLists({commit:t,dispatch:e},a){try{let s=await pt.get("boards/"+a.id+"/lists");console.log(s),t("setResource",{data:s.data,resource:"lists"}),e("getDictionaries",{resource:"tasks",path:"lists/"+a.parentId+"/tasks",parentId:a.parentId})}catch(s){console.error(s)}}}});const ft="dev-tunnelvision77.us.auth0.com",bt="https://kanban-checkpoint",kt="p9RHPMs8MBoN4dcrZS6RDAcQiKyEMWnb";s["a"].use(v["a"],{domain:ft,clientId:kt,audience:bt,onRedirectCallback:t=>{dt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:dt,store:gt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"769a":function(t,e,a){},"84df":function(t,e,a){t.exports=a.p+"img/carousel6.f0a9b543.jpg"},"9c0c":function(t,e,a){},"9c29":function(t,e,a){t.exports=a.p+"img/carousel3.75cfcce3.jpg"},f3a4:function(t,e,a){"use strict";var s=a("3d01"),r=a.n(s);r.a},f82a:function(t,e,a){"use strict";var s=a("0ae1"),r=a.n(s);r.a}});