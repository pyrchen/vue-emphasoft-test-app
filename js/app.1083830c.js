(function(){"use strict";var e={4281:function(e,t,a){a.d(t,{YB:function(){return V},U7:function(){return L},oi:function(){return l},to:function(){return H}});var r=a(3396),n=a(4870),s=a(5708),o=(0,r.aZ)({__name:"TextInput",props:{name:null,type:null,label:null,modelValue:null},setup(e){const t=e,{value:a,handleBlur:o,errorMessage:i}=(0,s.U$)((0,n.Vh)(t,"name"),{},{initialValue:t.modelValue||""});return(s,l)=>{const u=(0,r.up)("v-text-field");return(0,r.wg)(),(0,r.j4)(u,{modelValue:(0,n.SU)(a),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(a)?a.value=e:null),modelModifiers:{trim:!0},onBlur:(0,n.SU)(o),label:t.label,"error-messages":(0,n.SU)(i),type:e.type},null,8,["modelValue","onBlur","label","error-messages","type"])}}});const i=o;var l=i,u=(a(7658),a(7139)),d=a(2483),c=a(5242),m=(0,r.aZ)({__name:"UserCard",props:{user:null},emits:["deleteUser"],setup(e,{emit:t}){const a=e,s=(0,d.tv)(),o=(0,c.t)(a.user.id),i=(0,r.Fl)((()=>o.isExpanded)),l=(0,n.qj)({isExpanded:i.value,user:Object.assign({},a.user)}),m=()=>{s.push(l.isExpanded?"/users":`/users/${a.user.id}`),l.isExpanded=!l.isExpanded};return(0,r.JJ)("chosenUser",a.user),(a,n)=>{const s=(0,r.up)("v-card-title"),o=(0,r.up)("v-btn"),i=(0,r.up)("v-spacer"),d=(0,r.up)("v-card-actions"),c=(0,r.up)("router-view"),p=(0,r.up)("v-card");return(0,r.wg)(),(0,r.j4)(p,{class:"user-card w-100"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user.username),1)])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o,{color:"red-darken-2",variant:"tonal",onClick:n[0]||(n[0]=a=>t("deleteUser",e.user))},{default:(0,r.w5)((()=>[(0,r.Uk)("Delete")])),_:1}),(0,r.Wm)(i),(0,r.Wm)(o,{icon:l.isExpanded?"mdi-chevron-up":"mdi-chevron-down",onClick:m},null,8,["icon"])])),_:1}),(0,r.Wm)(c)])),_:1})}}}),p=a(89);const v=(0,p.Z)(m,[["__scopeId","data-v-1dadd01e"]]);var f=v,h=a(1020),g=a(8157),U=a(5316),w=a.n(U),_=a(2127),b=a(9321);const k=e=>((0,r.dD)("data-v-70fc1772"),e=e(),(0,r.Cn)(),e),y={class:"d-flex align-center justify-space-between mb-2"},S={key:0,class:"users-list"},W={key:1},x={class:"text-center text-h5 text-break"},A={class:"ma-4 text-center text-break"},D=k((()=>(0,r._)("h1",{class:"text-h4 mb-3"},"Deleting user",-1))),C={class:"text-h5 mb-3 bg-secondary rounded"},q=k((()=>(0,r._)("p",{class:"text-body-1 text-break mb-3"},"Are you sure of deleting this account?",-1)));var O=(0,r.aZ)({__name:"UsersList",setup(e){const{mobile:t}=(0,g.AW)(),a=(0,_.U)(),s=(0,b.q)().dialogModule,{isDialogOpened:o}=(0,h.Jk)(s),{filterString:i,filteredUsers:l,sortingOption:d}=(0,h.Jk)(a),c=(0,n.iH)(),m=e=>{c.value=e,c.value&&s.openDialog()},p=async()=>{c.value&&(await a.deleteUser(c.value?.id),s.closeDialog())};return(e,a)=>{const v=(0,r.up)("v-btn"),h=(0,r.up)("v-btn-toggle"),g=(0,r.up)("v-text-field"),U=(0,r.up)("v-spacer"),_=(0,r.up)("v-card-actions");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",y,[(0,r._)("h3",{class:(0,u.C_)({"text-heading-h6":!(0,n.SU)(t),"text-body-1":(0,n.SU)(t)})},'Sorted by "ID"',2),(0,r.Wm)(h,{modelValue:(0,n.SU)(d),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,n.dq)(d)?d.value=e:null),shaped:"",mandatory:""},{default:(0,r.w5)((()=>[(0,n.SU)(t)?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(v,{icon:"mdi-arrow-up"}),(0,r.Wm)(v,{icon:"mdi-arrow-down"})],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(v,{"prepend-icon":"mdi mdi-arrow-up"},{default:(0,r.w5)((()=>[(0,r.Uk)("ACS")])),_:1}),(0,r.Wm)(v,{"prepend-icon":"mdi mdi-arrow-down"},{default:(0,r.w5)((()=>[(0,r.Uk)("DESC")])),_:1})],64))])),_:1},8,["modelValue"])]),(0,r.Wm)(g,{label:'Search by "username"',"prepend-inner-icon":"mdi mdi-magnify",variant:"outlined",modelValue:(0,n.SU)(i),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,n.dq)(i)?i.value=e:null)},null,8,["modelValue"]),(0,n.SU)(l).length?((0,r.wg)(),(0,r.iD)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(l),(e=>((0,r.wg)(),(0,r.j4)(f,{key:e.id,user:e,onDeleteUser:m},null,8,["user"])))),128))])):((0,r.wg)(),(0,r.iD)("div",W,[(0,r._)("h2",x," No users"+(0,u.zw)((0,n.SU)(i)?` found: ${(0,n.SU)(i)}`:""),1)])),(0,n.SU)(o)?((0,r.wg)(),(0,r.j4)(r.lR,{key:2,to:"#dialog"},[(0,r._)("div",A,[D,(0,r._)("h2",C,(0,u.zw)(c.value.username),1),q,(0,r.Wm)((0,n.SU)(w()),{data:c.value,"onUpdate:data":a[2]||(a[2]=e=>c.value=e),editable:!1},null,8,["data"]),(0,r.Wm)(_,{class:"mt-3 pa-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{onClick:(0,n.SU)(s).closeDialog,variant:"tonal",color:"red-darken-1"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cancel")])),_:1},8,["onClick"]),(0,r.Wm)(U),(0,r.Wm)(v,{onClick:p,variant:"tonal",color:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)("Yes, Delete")])),_:1})])),_:1})])])):(0,r.kq)("",!0)],64)}}});const E=(0,p.Z)(O,[["__scopeId","data-v-70fc1772"]]);var H=E,T=(a(8552),(0,r.aZ)({__name:"AlertsList",setup(e){const t=(0,b.q)().alertsModule,a=(0,r.Fl)((()=>t.alerts));return(e,t)=>{const s=(0,r.up)("v-alert");return(0,r.wg)(),(0,r.iD)("div",{class:"alerts",style:(0,u.j5)({zIndex:(0,n.SU)(a).length?1:-1})},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(a),(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"alert"},[(0,r.Wm)(s,{type:e.status,text:e.title},null,8,["type","text"])])))),128))],4)}}}));const j=(0,p.Z)(T,[["__scopeId","data-v-b82d961c"]]);var V=j;const Z=e=>((0,r.dD)("data-v-0705ebe2"),e=e(),(0,r.Cn)(),e),P=Z((()=>(0,r._)("div",{id:"dialog"},null,-1)));var I=(0,r.aZ)({__name:"AppDialog",setup(e){const t=(0,b.q)().dialogModule,a=(0,r.Fl)((()=>t.isDialogOpened));return(e,t)=>{const s=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(s,{modelValue:(0,n.SU)(a),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.dq)(a)?a.value=e:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition",theme:"dark"},{default:(0,r.w5)((()=>[P])),_:1},8,["modelValue"])}}});const M=(0,p.Z)(I,[["__scopeId","data-v-0705ebe2"]]);var L=M},5242:function(e,t,a){a.d(t,{t:function(){return o}});var r=a(2483),n=a(4870),s=a(3396);const o=e=>{const t=(0,r.yj)(),a=(0,n.iH)(!(!t.params.id||e!==+t.params.id));return(0,s.YP)((()=>t.params.id),(t=>{a.value=!(!t||e!==+t)})),{isExpanded:a}}},9630:function(e,t,a){var r=a(9242),n=a(1020),s=a(8957),o=a(3504),i=a(1850),l=a(8600);a(8556);const u=(0,s.Rd)({components:i,directives:l,icons:{defaultSet:"mdi",aliases:o.j,sets:{mdi:o.t}},theme:{defaultTheme:"light"}});var d=u,c=(a(7658),a(3396)),m=a(4870),p=a(2483),v=a(4281),f=a(6514),h=(0,c.aZ)({__name:"App",setup(e){const t=(0,p.tv)(),a=(0,f.t)(),r=(0,c.Fl)((()=>a.isAuthed));return(0,c.YP)(r,(e=>{e||t.push("/auth")})),(0,c.wF)((()=>{a.checkAuthorization()})),(e,t)=>{const a=(0,c.up)("router-view");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(a),(0,c.Wm)((0,m.SU)(v.YB)),(0,c.Wm)((0,m.SU)(v.U7))],64)}}});const g=h;var U=g,w=a(5708),_=a(7468);const b=e=>((0,c.dD)("data-v-065d10bd"),e=e(),(0,c.Cn)(),e),k={class:"auth-wrapper ml-4 mr-4"},y=b((()=>(0,c._)("h2",{class:"text-center text-h4"},"Auth Page",-1)));var S=(0,c.aZ)({__name:"AuthPage",setup(e){const{loginUser:t}=(0,f.t)(),a=async e=>{await t(e)};return(e,t)=>{const r=(0,c.up)("v-btn");return(0,c.wg)(),(0,c.iD)("div",k,[y,(0,c.Wm)((0,m.SU)(w.l0),{as:"v-form",class:"auth-form",onSubmit:a,"validation-schema":(0,m.SU)(_.n)},{default:(0,c.w5)((()=>[(0,c.Wm)((0,m.SU)(v.oi),{label:"Username",type:"username",name:"username"}),(0,c.Wm)((0,m.SU)(v.oi),{label:"Password",type:"password",name:"password"}),(0,c.Wm)(r,{variant:"outlined",color:"primary",type:"submit"},{default:(0,c.w5)((()=>[(0,c.Uk)("Log In")])),_:1})])),_:1},8,["validation-schema"])])}}}),W=a(89);const x=(0,W.Z)(S,[["__scopeId","data-v-065d10bd"]]);var A=x,D=a(7139),C=a(2127);const q={class:"list-wrapper"};var O=(0,c.aZ)({__name:"MainPage",setup(e){const t=(0,p.tv)(),a=(0,C.U)(),r=(0,f.t)(),{activeUser:s}=(0,n.Jk)(r),o=[{key:"profile",title:"Go profile",action:()=>t.push(`/users/${s.value.username}/profile`)},{key:"create",title:"Create User",action:()=>t.push("/users/create")}],i=(0,m.qj)({loading:!1});return(0,c.bv)((async()=>{i.loading=!0,await a.fetchUsers(),i.loading=!1})),(e,t)=>{const a=(0,c.up)("v-toolbar-title"),r=(0,c.up)("v-spacer"),n=(0,c.up)("v-btn"),s=(0,c.up)("v-list-item-title"),l=(0,c.up)("v-list-item"),u=(0,c.up)("v-list"),d=(0,c.up)("v-menu"),p=(0,c.up)("v-container"),f=(0,c.up)("v-toolbar");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(f,{color:"primary",class:"align-center"},{default:(0,c.w5)((()=>[(0,c.Wm)(p,{class:"d-flex align-center"},{default:(0,c.w5)((()=>[(0,c.Wm)(a,null,{default:(0,c.w5)((()=>[(0,c.Uk)("All Users")])),_:1}),(0,c.Wm)(r),i.loading?(0,c.kq)("",!0):((0,c.wg)(),(0,c.j4)(d,{key:0},{activator:(0,c.w5)((({props:e})=>[(0,c.Wm)(n,(0,c.dG)({icon:"mdi-dots-vertical"},e),null,16)])),default:(0,c.w5)((()=>[(0,c.Wm)(u,{class:"menu-list"},{default:(0,c.w5)((()=>[((0,c.wg)(),(0,c.iD)(c.HY,null,(0,c.Ko)(o,(e=>(0,c.Wm)(l,{key:e.key,onClick:e.action,"active-color":"primary"},{default:(0,c.w5)((()=>[(0,c.Wm)(s,null,{default:(0,c.w5)((()=>[(0,c.Uk)((0,D.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1})])),_:1}))])),_:1})])),_:1}),(0,c.Wm)(p,null,{default:(0,c.w5)((()=>[(0,c._)("div",q,[i.loading?((0,c.wg)(),(0,c.iD)(c.HY,{key:0},[(0,c.Uk)("Loading...")],64)):(0,c.kq)("",!0),i.loading?(0,c.kq)("",!0):((0,c.wg)(),(0,c.j4)((0,m.SU)(v.to),{key:1}))])])),_:1})],64)}}});const E=(0,W.Z)(O,[["__scopeId","data-v-38da854a"]]);var H=E;a(9908),a(4797),a(9950);const T=(e,t,a)=>{const{isAuthed:r}=(0,f.t)();if(e.matched.some((e=>e.meta.requiresAuth))){if(r)return a();a("/auth")}else e.matched.some((e=>e.meta.restrictedForAuthed))&&r?a("/users"):a()},j=(e,t,a)=>{const{isAuthed:r}=(0,f.t)();if(e.matched.length)return a();a(r?"/users":"/auth")},V=[{path:"/users",meta:{requiresAuth:!0,title:"Users"},component:H,children:[{path:":id",meta:{requiresAuth:!0},component:()=>Promise.resolve().then(a.bind(a,8552))}]},{path:"/auth",meta:{restrictedForAuthed:!0,title:"Authorization"},component:A},{path:"/users/:username/profile",meta:{requiresAuth:!0,title:"Profile"},component:()=>Promise.resolve().then(a.bind(a,9950))},{path:"/users/create",meta:{requiresAuth:!0,title:"Create User"},component:()=>Promise.resolve().then(a.bind(a,9908))},{path:"/users/:id(\\d+)/edit",meta:{requiresAuth:!0,title:"Edit User"},component:()=>Promise.resolve().then(a.bind(a,4797))}],Z=(0,p.p7)({history:(0,p.PO)(),routes:V,strict:!0});Z.beforeEach(T),Z.beforeEach(j);var P=Z;(0,w.aH)("required",(e=>!(!e||!e.trim().length)||"This field is required")),(0,w.aH)("minMaxLength",((e,[t,a])=>!(!e||!e.length)&&(e.length<+t?"Length should be greater than "+(+t-1):!(e.length>+a)||"Length should be smaller than "+(+a+1)))),(0,w.aH)("eng",(e=>{if(!e||!e.length)return!1;const t=/^[A-Za-z][A-Za-z0-9]*$/gi;return!!t.test(e)||"Only english letters allowed"})),(0,w.aH)("noExtraSymbols",(e=>{if(!e||!e.length)return!1;const t=/^[a-zA-Z\-_@0-9]+$/gi;return!!t.test(e)||'Only english letters, numbers and "_", "-", "@" allowed'}));const I=(0,n.WB)();(0,r.ri)(U).use(P).use(d).use(I).mount("#app")},6364:function(e,t,a){a.d(t,{i:function(){return o}});var r=a(7327),n=(a(7658),a(4161));class s{constructor(){(0,r.Z)(this,"ROOT_URL","https://test-assignment.emphasoft.com/api/v1"),(0,r.Z)(this,"api",n.Z.create({withCredentials:!1})),(0,r.Z)(this,"route",""),(0,r.Z)(this,"_authToken",""),this.setInterceptorRequest()}set authToken(e){this._authToken=e}async get(e){this.createRoute(e);try{return await this.api.get(this.route)}catch({response:t}){return this.parseErrors(t)}}async post(e,t){this.createRoute(e);try{return await this.api.post(this.route,t)}catch({response:a}){return this.parseErrors(a)}}async put(e,t){this.createRoute(e);try{return await this.api.put(this.route,t)}catch({response:a}){return this.parseErrors(a)}}async delete(e){this.createRoute(e);try{return await this.api.delete(this.route)}catch({response:t}){return this.parseErrors(t)}}createRoute(e){this.route=this.ROOT_URL+e,"/"!==e[e.length-1]&&(this.route+="/")}setInterceptorRequest(){this.api.interceptors.request.use((e=>this._authToken?(e.headers.Authorization=`Token ${this._authToken}`,e):e))}parseErrors(e){if(e.status<400)return e;if(e.data instanceof Object){const t=Object.keys(e.data).reduce(((t,a)=>{const r=e.data[a];return Array.isArray(r)?r&&t.push(r[0]):"string"===typeof r&&t.push(r),t}),[]);e.data={...e.data,errors:t}}return e}}const o=new s},9321:function(e,t,a){a.d(t,{q:function(){return i}});a(7658);var r=a(4870),n=a(1020);const s=(0,n.Q_)("alerts",(()=>{const e=(0,r.iH)([]);function t(t,a,r=2e3){e.value.length>=5&&e.value.shift(),e.value.push({title:t,status:a,id:1e4*Math.random()}),setTimeout((()=>{e.value.pop()}),r)}function a(e,a,r={title:"Something went wrong. Try again, please",status:"error"}){if(e)return t(a.title,a.status);r&&t(r.title,r.status)}return{alerts:e,addAlert:t,addOnCondition:a}})),o=(0,n.Q_)("dialog",(()=>{const e=(0,r.iH)(!1),t=()=>{e.value=!0},a=()=>{e.value=!1};return{isDialogOpened:e,openDialog:t,closeDialog:a}})),i=()=>({alertsModule:s(),dialogModule:o()})},6514:function(e,t,a){a.d(t,{t:function(){return v}});a(7658);var r,n=a(1020),s=a(4870),o=a(3396);(function(e){e["AUTH_DATA"]="AUTH_DATA"})(r||(r={}));var i=a(2483),l=a(2127),u=a(9321),d=a(7327),c=a(6364);class m{constructor(e=c.i){(0,d.Z)(this,"rootService",void 0),this.rootService=e}async login(e){const t=await this.rootService.post("/login",e);return t.status<400&&(this.rootService.authToken=t.data.token||""),t}set authToken(e){this.rootService.authToken=e}}const p=new m,v=(0,n.Q_)("auth",(()=>{const e=(0,i.tv)(),{addAlert:t}=(0,u.q)().alertsModule,{fetchUsers:a,setActiveUserId:n}=(0,l.U)(),d=(0,s.iH)({}),c=(0,o.Fl)((()=>!!d.value?.token));function m(){d.value={},localStorage.removeItem(r.AUTH_DATA),t("Logged out","success")}function v(e){d.value=e,localStorage.setItem(r.AUTH_DATA,JSON.stringify(e))}function f(){const e=JSON.parse(localStorage.getItem(r.AUTH_DATA)||"{}");return e.token&&(p.authToken=e.token,v(e),n(e.id)),{token:e.token}}function h(e){return{...e,password:d.value.password}}async function g(r){const{data:{token:s,errors:o},status:i}=await p.login(r);if(i>=400)return void(o&&o.length&&o.forEach((e=>{t(e,"error",4e3)})));const l=await a();if(l&&l.length){const a=l.find((e=>e.username===r.username));a&&n(a.id),a&&v({token:s,password:r.password,...a}),t("Successfully authorized","success"),await e.push("/users")}}return{isAuthed:c,activeUser:d,setActiveUser:v,loginUser:g,checkAuthorization:f,logout:m,bindPassword:h}}))},2127:function(e,t,a){a.d(t,{U:function(){return v}});a(7658);var r=a(1020),n=a(4870),s=a(3396),o=a(7327),i=a(6364);class l{constructor(e=i.i){(0,o.Z)(this,"rootService",void 0),this.rootService=e}getUsers(){return this.rootService.get("/users")}getOneUser(e){return this.rootService.get(`/users/${e}`)}createUser(e){return this.rootService.post("/users",e)}editUser(e,t){return this.rootService.put(`/users/${e}`,t)}deleteUser(e){return this.rootService.delete(`/users/${e}`)}}const u=new l;var d=a(9321),c=a(2483);function m(e,t,a=!0){return a?e.id-t.id>0?1:-1:e.id-t.id<0?1:-1}function p(e){return function(t){return t.username.toLowerCase().includes(e.toLowerCase())}}const v=(0,r.Q_)("users",(()=>{const e=(0,c.tv)(),{addOnCondition:t,addAlert:a}=(0,d.q)().alertsModule,r=(0,n.iH)([]),o=(0,n.iH)(!1),i=(0,n.iH)(""),l=(0,n.iH)(0),v=(0,n.iH)(),f=(0,n.iH)({}),h=(0,s.Fl)((()=>r.value.filter((e=>e.id!==v.value)).sort(((e,t)=>m(e,t,!l.value))))),g=(0,s.Fl)((()=>{if(!i.value)return h.value;const e=p(i.value);return h.value.filter(e)}));function U(e){f.value=e}function w(e){v.value=e}function _(e){r.value=e,o.value=!0}async function b(e){const{status:a}=await u.editUser(e.id,{...e});if(t(a<400,{title:"Successfully changed",status:"success"}),r.value.length){const t=r.value.findIndex((t=>t.id===e.id));if(t<0)return;r.value[t]=Object.assign(r.value[t],{...e})}o.value=!1}async function k(a){const{status:r}=await u.createUser(a);t(r<400,{title:"Successfully deleted",status:"success"}),o.value=!1,await e.push("/users")}async function y(){if(o.value)return;const{data:e,status:t}=await u.getUsers();return t<400&&_(e||[]),t>=400&&e.errors&&e.errors.forEach((e=>a(e,"error",4e3))),e}async function S(e){const{data:t}=await u.getOneUser(e);return U(t),t}async function W(e){const{status:a}=await u.deleteUser(e);t(a<400,{title:"Successfully deleted",status:"success"}),a<400&&(r.value=r.value.filter((t=>t.id!==e)),o.value=!1)}return{users:r,filteredUsers:g,filterString:i,sortingOption:l,setActiveUserId:w,userToEdit:f,setUserToEdit:U,editUser:b,fetchSingleUser:S,createUser:k,fetchUsers:y,deleteUser:W}}))},7468:function(e,t,a){a.d(t,{O:function(){return n},n:function(){return r}});const r={username:"required|minMaxLength:4,16|noExtraSymbols",password:"required|minMaxLength:6,30"},n={username:r.username,first_name:"required|minMaxLength:2,16|eng",last_name:"required|minMaxLength:2,24|eng"}},8552:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});a(7658);var r=a(3396),n=a(4870),s=a(9242),o=a(5316),i=a.n(o),l=a(2483),u=a(5242),d=a(2127),c=a(6514),m=(0,r.aZ)({__name:"UserInfo",setup(e){const t=(0,l.tv)(),{editUser:a,setUserToEdit:o}=(0,d.U)(),{bindPassword:m}=(0,c.t)(),p=(0,r.f3)("chosenUser"),v=(0,u.t)(p.id),f=(0,r.Fl)((()=>v.isExpanded)),h=(0,n.qj)({isExpanded:f.value,isUserEditable:!1,userData:{...p}}),g=()=>{h.isUserEditable=!1,a(m(h.userData))},U=()=>{h.isUserEditable=!1,h.userData={...p}},w=()=>{o({...p}),t.push(`/users/${p.id}/edit`)};return(e,t)=>{const a=(0,r.up)("v-divider"),o=(0,r.up)("v-card-text"),l=(0,r.up)("v-btn"),u=(0,r.up)("v-card-actions");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(a),(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,n.SU)(i()),{data:h.userData,"onUpdate:data":t[0]||(t[0]=e=>h.userData=e),"show-double-quotes":!0,"show-line":!0,"show-line-number":!0,editable:h.isUserEditable,"show-select-controller":!1,"editable-trigger":"click"},null,8,["data","editable"])])),_:1}),(0,r.Wm)(u,{class:"justify-space-between"},{default:(0,r.w5)((()=>[h.isUserEditable?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:0,color:"primary","prepend-icon":"mdi mdi-account-edit",variant:"tonal",onClick:w},{default:(0,r.w5)((()=>[(0,r.Uk)("Edit User")])),_:1})),h.isUserEditable?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(l,{color:"red-darken-1",variant:"tonal",onClick:U},{default:(0,r.w5)((()=>[(0,r.Uk)("Cancel")])),_:1}),(0,r.Wm)(l,{color:"green-darken-1",variant:"tonal",onClick:g},{default:(0,r.w5)((()=>[(0,r.Uk)("Save")])),_:1})],64)):(0,r.kq)("",!0)])),_:1})],512)),[[s.F8,h.isExpanded]])}}});const p=m;var v=p},9908:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});a(7658);var r=a(3396),n=a(4870),s=a(2483),o=a(5316),i=a.n(o),l=a(5708),u=a(4281),d=a(7468),c=a(2127),m=a(6514),p=a(9321);const v=(0,r._)("h2",{class:"mb-3 text-center"},"New User Form",-1);var f=(0,r.aZ)({__name:"CreateUserPage",setup(e){const t=(0,s.tv)(),{createUser:a}=(0,c.U)(),{bindPassword:o}=(0,m.t)(),{addAlert:f}=(0,p.q)().alertsModule,{values:h,handleSubmit:g,resetForm:U}=(0,l.cI)({validationSchema:d.O}),{value:w}=(0,l.U$)("is_active",{},{initialValue:!1}),_=()=>{U(),f("Form reset","warning")},b=g((async e=>{await a(o(e))}));return(e,a)=>{const s=(0,r.up)("v-btn"),o=(0,r.up)("v-container"),l=(0,r.up)("v-toolbar"),d=(0,r.up)("v-divider"),c=(0,r.up)("v-checkbox"),m=(0,r.up)("v-spacer"),p=(0,r.up)("v-card-actions"),f=(0,r.up)("v-form");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{color:"primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"d-flex align-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{icon:"mdi-arrow-left",onClick:a[0]||(a[0]=e=>(0,n.SU)(t).push("/users/create"))})])),_:1})])),_:1}),(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[v,(0,r.Wm)((0,n.SU)(i()),{data:(0,n.SU)(h),"onUpdate:data":a[1]||(a[1]=e=>(0,n.dq)(h)?h.value=e:null),editable:!1},null,8,["data"]),(0,r.Wm)(d,{class:"mb-2 mt-2"}),(0,r.Wm)(f,{onSubmit:(0,n.SU)(b)},{default:(0,r.w5)((()=>[(0,r.Wm)((0,n.SU)(u.oi),{label:"Username",type:"text",name:"username"}),(0,r.Wm)((0,n.SU)(u.oi),{label:"First Name",type:"text",name:"first_name"}),(0,r.Wm)((0,n.SU)(u.oi),{label:"Last Name",type:"text",name:"last_name"}),(0,r.Wm)(c,{"model-value":(0,n.SU)(w),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,n.dq)(w)?w.value=e:null),name:"is_active",label:`Is Active: ${(0,n.SU)(w)}`,color:"primary","hide-details":""},null,8,["model-value","label"]),(0,r.Wm)(d),(0,r.Wm)(p,{class:"pa-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{color:"red-darken-1",onClick:_},{default:(0,r.w5)((()=>[(0,r.Uk)("Reset")])),_:1}),(0,r.Wm)(m),(0,r.Wm)(s,{color:"success",type:"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("Create")])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})],64)}}});const h=f;var g=h},4797:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});a(7658);var r=a(3396),n=a(4870),s=a(2483),o=a(1020),i=a(5708),l=a(4281),u=a(7468),d=a(2127),c=a(9321),m=a(6514);const p=e=>((0,r.dD)("data-v-1fd61194"),e=e(),(0,r.Cn)(),e),v=p((()=>(0,r._)("h2",{class:"mb-3 text-center"},"Edit User Page",-1)));var f=(0,r.aZ)({__name:"EditUserPage",setup(e){const t=(0,s.tv)(),a=(0,s.yj)(),p=(0,d.U)(),f=(0,c.q)().alertsModule,{bindPassword:h}=(0,m.t)(),{userToEdit:g}=(0,o.Jk)(p),U=(0,n.iH)({...g.value}),{handleSubmit:w}=(0,i.cI)({validationSchema:u.O}),_=w((()=>{if(JSON.stringify({...U.value})===JSON.stringify({...g.value}))return f.addAlert("Can't save non-changed data","warning");p.editUser(h(g.value)),t.push(`/users/${g.value.id}`)}));return(0,r.bv)((async()=>{if(!g.value||!g.value.id){const e=await p.fetchSingleUser(+a.params.id);e&&(U.value={...e})}})),(e,a)=>{const s=(0,r.up)("v-btn"),o=(0,r.up)("v-container"),i=(0,r.up)("v-toolbar"),u=(0,r.up)("v-divider"),d=(0,r.up)("v-checkbox"),c=(0,r.up)("v-spacer"),m=(0,r.up)("v-card-actions"),p=(0,r.up)("v-form");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i,{color:"primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"d-flex align-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{icon:"mdi-arrow-left",onClick:a[0]||(a[0]=e=>(0,n.SU)(t).push("/users/create"))})])),_:1})])),_:1}),(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[v,(0,r.Wm)(u,{class:"mb-2 mt-2"}),(0,n.SU)(g).id?((0,r.wg)(),(0,r.j4)(p,{key:0,onSubmit:(0,n.SU)(_),class:"form"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,n.SU)(l.oi),{modelValue:(0,n.SU)(g).username,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,n.SU)(g).username=e),label:"Username",type:"text",name:"username"},null,8,["modelValue"]),(0,r.Wm)((0,n.SU)(l.oi),{modelValue:(0,n.SU)(g).first_name,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,n.SU)(g).first_name=e),label:"First Name",type:"text",name:"first_name"},null,8,["modelValue"]),(0,r.Wm)((0,n.SU)(l.oi),{modelValue:(0,n.SU)(g).last_name,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,n.SU)(g).last_name=e),label:"Last Name",type:"text",name:"last_name"},null,8,["modelValue"]),(0,r.Wm)(d,{modelValue:(0,n.SU)(g).is_active,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,n.SU)(g).is_active=e),name:"is_active",label:`Is Active: ${(0,n.SU)(g).is_active}`,color:"primary","hide-details":""},null,8,["modelValue","label"]),(0,r.Wm)(u),(0,r.Wm)(m,{class:"pa-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{color:"red-darken-1",variant:"tonal",onClick:a[5]||(a[5]=e=>(0,n.SU)(t).back())},{default:(0,r.w5)((()=>[(0,r.Uk)("Cancel Edit")])),_:1}),(0,r.Wm)(c),(0,r.Wm)(s,{color:"success",variant:"tonal",type:"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("Save")])),_:1})])),_:1})])),_:1},8,["onSubmit"])):(0,r.kq)("",!0)])),_:1})],64)}}}),h=a(89);const g=(0,h.Z)(f,[["__scopeId","data-v-1fd61194"]]);var U=g},9950:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});a(7658);var r=a(3396),n=a(4870),s=a(7139),o=a(2483),i=a(5316),l=a.n(i),u=a(6514),d=a(9321);const c={class:"text-center text-h4 mb-4"},m={class:"ma-4 text-center text-break"},p=(0,r._)("h1",{class:"text-h4 mb-3"},"Logging out",-1),v=(0,r._)("p",{class:"text-body-1 text-break mb-3"},"Do you want to leave this account?",-1);var f=(0,r.aZ)({__name:"ProfilePage",setup(e){const t=(0,o.tv)(),a=(0,u.t)(),i=(0,d.q)().dialogModule,f=(0,r.Fl)((()=>a.activeUser)),h=(0,r.Fl)((()=>i.isDialogOpened));function g(){i.closeDialog(),a.logout()}return(e,a)=>{const o=(0,r.up)("v-btn"),u=(0,r.up)("v-spacer"),d=(0,r.up)("v-container"),U=(0,r.up)("v-toolbar"),w=(0,r.up)("v-card-actions");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(U,{color:"primary",class:"align-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"d-flex align-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{icon:"mdi-arrow-left",onClick:a[0]||(a[0]=e=>(0,n.SU)(t).push("/users"))}),(0,r.Wm)(u),(0,r.Wm)(o,{"append-icon":"mdi-logout-variant",onClick:(0,n.SU)(i).openDialog},{default:(0,r.w5)((()=>[(0,r.Uk)("Logout")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("h2",c,"Hello: "+(0,s.zw)((0,n.SU)(f).username),1),(0,r.Wm)((0,n.SU)(l()),{data:(0,n.SU)(f),"onUpdate:data":a[1]||(a[1]=e=>(0,n.dq)(f)?f.value=e:null)},null,8,["data"])])])),_:1}),(0,n.SU)(h)?((0,r.wg)(),(0,r.j4)(r.lR,{key:0,to:"#dialog"},[(0,r._)("div",m,[p,v,(0,r.Wm)(w,{class:"mt-3 pa-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{onClick:(0,n.SU)(i).closeDialog,variant:"tonal",color:"red-darken-1"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cancel")])),_:1},8,["onClick"]),(0,r.Wm)(u),(0,r.Wm)(o,{onClick:g,variant:"tonal",color:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)("Yes, Leave")])),_:1})])),_:1})])])):(0,r.kq)("",!0)],64)}}});const h=f;var g=h}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],i=r[1],l=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var d=l(a)}for(t&&t(r);u<o.length;u++)s=o[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=self["webpackChunkvue_auth_ts_app"]=self["webpackChunkvue_auth_ts_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(9630)}));r=a.O(r)})();
//# sourceMappingURL=app.1083830c.js.map