(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],p=0,m=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},3891:function(t,e,r){},"3bd6":function(t,e,r){"use strict";var a=r("c8fb"),n=r.n(a);n.a},4:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}}),r("router-view")],1)},i=[],o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),c=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"App",methods:l({},Object(c["b"])(["load_patike","load_majice"])),mounted:function(){this.load_patike(),this.load_majice()}},p=u,m=(r("034f"),r("2877")),d=Object(m["a"])(p,n,i,!1,null,null,null),f=d.exports,b=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/home"}},[t._v("Home")]),r("router-link",{attrs:{to:"/"}},[t._v("Logout")]),0==t.admin?r("div",[r("router-link",{attrs:{to:"/edit"}},[t._v("NovaPatika ")]),r("router-link",{attrs:{to:"/editm"}},[t._v("Nova Majica ")])],1):t._e(),r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[t._v(" PATIKE "),r("PatikaList")],1)],1),r("b-row",[r("b-col",{attrs:{cm:"6"}},[t._v(" MAJICE "),r("MajicaList")],1)],1)],1)],1)},j=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{attrs:{header:"Prodavnica"}})],1)},v=[];function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k={name:"Header",computed:g({},Object(c["c"])(["patike"]))},w=k,P=Object(m["a"])(w,O,v,!1,null,"1105fa28",null),_=P.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.patike.length?r("b-table",{attrs:{hover:"","sticky-header":"800px",items:t.patike,fields:t.fields,"head-variant":"dark"},on:{"row-clicked":t.EditPatika},scopedSlots:t._u([0==t.admin?{key:"cell(delete)",fn:function(e){return[r("b-button",{attrs:{variant:"danger"},on:{click:function(r){return t.delete_patika(e.item.id)}}},[t._v("Delete")])]}}:null],null,!0)}):r("h1",[t._v("Nema patika")])],1)},x=[];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M={name:"PatikaList",computed:D({},Object(c["c"])(["patike","admin"])),data:function(){return{fields:[{key:"marka"},{key:"model"},{key:"delete"}]}},methods:D({},Object(c["b"])(["delete_patika"]),{EditPatika:function(t,e,r){ve.push({path:"/patika/".concat(t.id)})}})},C=M,N=(r("3bd6"),Object(m["a"])(C,S,x,!1,null,null,null)),$=N.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/home"}},[t._v("Home")]),r("router-link",{attrs:{to:"/"}},[t._v("Logout")]),0==t.admin?r("div",[r("router-link",{attrs:{to:"/edit"}},[t._v("NovaPatika")])],1):t._e(),r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[t.edit?r("div",[r("EditPatika",{attrs:{marka:t.patika.marka,model:t.patika.model,cena:t.patika.cena}})],1):r("div",[r("ShowPatika",{attrs:{patika:t.patika}})],1)])],1),0==t.admin?r("b-row",[r("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},domProps:{innerHTML:t._s(t.edit?"Cancel":"Edit")},on:{click:t.toggleEdit}})],1)],1):t._e()],1)],1)},H=[],q=(r("e25e"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-form",[r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Marka"},model:{value:t.newMarka,callback:function(e){t.newMarka=e},expression:"newMarka"}})],1),r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Model"},model:{value:t.newModel,callback:function(e){t.newModel=e},expression:"newModel"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Cena"},model:{value:t.newCena,callback:function(e){t.newCena=e},expression:"newCena"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"1"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.addNew}},[t._v("Save")])],1)],1)],1)],1)}),T=[];r("d3b7"),r("498a"),r("ddb0");function J(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var z={name:"EditPatika",props:{marka:{type:String,default:""},model:{type:String,default:""},cena:{type:String,default:""}},data:function(){return{newMarka:"",newModel:"",newCena:""}},mounted:function(){this.newMarka=this.marka,this.newModel=this.model,this.newCena=this.cena},methods:R({},Object(c["b"])(["new_patika","change_patika"]),{addNew:function(){var t=r("f0b1"),e=t.object().keys({marka:t.string().trim().required(),model:t.string().trim().required(),cena:t.string().trim().required()}),a=(t.object().keys({id:t.number().min(1).max(50).required()}),JSON.stringify({marka:this.newMarka,model:this.newModel,cena:this.newCena})),n=t.validate(a,e),i=n.error;i?alert(i.details[0].message):(this.$route.params.id?this.change_patika({id:this.$route.params.id,patika:a}):this.new_patika(a),this.newMarka="",this.newModel="",this.newCena="")}})},I=z,U=Object(m["a"])(I,q,T,!1,null,"2cce86c8",null),A=U.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"marka"}},[t._v("Marka:")])]),r("b-col",{attrs:{sm:"10"}},[r("p",{staticStyle:{"text-align":"left"},attrs:{id:"marka"}},[t._v(t._s(t.patika.marka))])])],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"model"}},[t._v("Model:")])]),r("b-col",{attrs:{sm:"10"}},[r("p",{staticStyle:{"text-align":"left"},attrs:{id:"model"}},[t._v(t._s(t.patika.model))])])],1),r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"cena"}},[t._v("Cena:")])]),r("b-col",{attrs:{sm:"10"}},[r("p",{staticStyle:{"text-align":"left"},attrs:{id:"cena"}},[t._v(t._s(t.patika.cena))])])],1)],1)},B=[],F={name:"ShowPatika",props:{patika:Object}},G=F,Q=Object(m["a"])(G,K,B,!1,null,null,null),V=Q.exports;function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Y={name:"Patika",components:{Header:_,EditPatika:A,ShowPatika:V},data:function(){return{edit:!1}},computed:X({},Object(c["c"])(["patike","admin"]),{patika:function(){for(var t=0;t<this.patike.length;t++)if(this.patike[t].id===parseInt(this.$route.params.id))return this.patike[t]}}),methods:X({},Object(c["b"])(["load_patike"]),{toggleEdit:function(){this.edit=!this.edit}})},Z=Y,tt=Object(m["a"])(Z,L,H,!1,null,"5067568b",null),et=tt.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.majice.length?r("b-table",{attrs:{hover:"","sticky-header":"800px",items:t.majice,fields:t.fields,"head-variant":"dark"},on:{"row-clicked":t.EditMajica},scopedSlots:t._u([0==t.admin?{key:"cell(delete)",fn:function(e){return[r("b-button",{attrs:{variant:"danger"},on:{click:function(r){return t.delete_majica(e.item.id)}}},[t._v("Delete")])]}}:null],null,!0)}):r("h1",[t._v("Nema majica")])],1)},at=[];function nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function it(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?nt(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ot={name:"MajicaList",computed:it({},Object(c["c"])(["majice","admin"])),data:function(){return{fields:[{key:"marka"},{key:"delete"}]}},methods:it({},Object(c["b"])(["delete_majica"]),{EditMajica:function(t,e,r){ve.push({path:"/majica/".concat(t.id)})}})},ct=ot,st=(r("92d8"),Object(m["a"])(ct,rt,at,!1,null,null,null)),lt=st.exports;function ut(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function pt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ut(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ut(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var mt={name:"home",computed:pt({},Object(c["c"])(["admin"])),components:{Header:_,PatikaList:$,MajicaList:lt}},dt=mt,ft=Object(m["a"])(dt,h,j,!1,null,null,null),bt=ft.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/home"}},[t._v("Home ")]),r("router-link",{attrs:{to:"/editm"}},[t._v("Nova Majica ")]),r("router-link",{attrs:{to:"/"}},[t._v("Logout")]),r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("EditPatika")],1)],1)],1)],1)},jt=[];function Ot(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Ot(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ot(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var yt={name:"NovaPatika",computed:vt({},Object(c["c"])(["admin"])),components:{Header:_,EditPatika:A}},gt=yt,kt=Object(m["a"])(gt,ht,jt,!1,null,"634586d2",null),wt=kt.exports,Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/home"}},[t._v("Home ")]),r("router-link",{attrs:{to:"/"}},[t._v("Logout")]),0==t.admin?r("div",[r("router-link",{attrs:{to:"/edit"}},[t._v("Nova Patika ")]),r("router-link",{attrs:{to:"/editm"}},[t._v("Nova Majica ")])],1):t._e(),r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[t.edit?r("div",[r("EditMajica",{attrs:{marka:t.majica.marka,cena:t.majica.cena}})],1):r("div",[r("ShowMajica",{attrs:{majica:t.majica}})],1)])],1),0==t.admin?r("b-row",[r("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},domProps:{innerHTML:t._s(t.edit?"Cancel":"Edit")},on:{click:t.toggleEdit}})],1)],1):t._e()],1)],1)},_t=[],St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-form",[r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Marka"},model:{value:t.newMarka,callback:function(e){t.newMarka=e},expression:"newMarka"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Cena"},model:{value:t.newCena,callback:function(e){t.newCena=e},expression:"newCena"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"1"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.addNew}},[t._v("Save")])],1)],1)],1)],1)},xt=[];function Et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Et(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Et(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Mt={name:"EditMajica",props:{marka:{type:String,default:""},cena:{type:String,default:""}},data:function(){return{newMarka:"",newCena:""}},mounted:function(){this.newMarka=this.marka,this.newCena=this.cena},methods:Dt({},Object(c["b"])(["new_majica","change_majica"]),{addNew:function(){var t=r("f0b1"),e=t.object().keys({marka:t.string().trim().required(),cena:t.string().trim().required()}),a=(t.object().keys({id:t.number().min(1).max(50).required()}),JSON.stringify({marka:this.newMarka,cena:this.newCena})),n=t.validate(a,e),i=n.error;i?alert(i.details[0].message):(this.$route.params.id?this.change_majica({id:this.$route.params.id,majica:a}):this.new_majica(a),this.newMarka="",this.newCena="")}})},Ct=Mt,Nt=Object(m["a"])(Ct,St,xt,!1,null,"148a1dea",null),$t=Nt.exports,Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"marka"}},[t._v("Marka:")])]),r("b-col",{attrs:{sm:"10"}},[r("p",{staticStyle:{"text-align":"left"},attrs:{id:"marka"}},[t._v(t._s(t.majica.marka))])])],1),r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"cena"}},[t._v("Cena:")])]),r("b-col",{attrs:{sm:"10"}},[r("p",{staticStyle:{"text-align":"left"},attrs:{id:"cena"}},[t._v(t._s(t.majica.cena))])])],1)],1)},Ht=[],qt={name:"ShowMajica",props:{majica:Object}},Tt=qt,Jt=Object(m["a"])(Tt,Lt,Ht,!1,null,null,null),Rt=Jt.exports;function zt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function It(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?zt(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):zt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ut={name:"Patika",components:{Header:_,EditMajica:$t,ShowMajica:Rt},data:function(){return{edit:!1}},computed:It({},Object(c["c"])(["majice","admin"]),{majica:function(){for(var t=0;t<this.majice.length;t++)if(this.majice[t].id===parseInt(this.$route.params.id))return this.majice[t]}}),methods:It({},Object(c["b"])(["load_majice"]),{toggleEdit:function(){this.edit=!this.edit}})},At=Ut,Kt=Object(m["a"])(At,Pt,_t,!1,null,"36ad9fb6",null),Bt=Kt.exports,Ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/home"}},[t._v("Home ")]),r("router-link",{attrs:{to:"/edit"}},[t._v("Nova Patika ")]),r("router-link",{attrs:{to:"/"}},[t._v("Logout")]),r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("EditMajica")],1)],1)],1)],1)},Gt=[];function Qt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Qt(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Qt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Wt={name:"NovaMajica",computed:Vt({},Object(c["c"])(["admin"])),components:{Header:_,EditMajica:$t}},Xt=Wt,Yt=Object(m["a"])(Xt,Ft,Gt,!1,null,"5092580f",null),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Register"}},[r("h1",[t._v("Register")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Select username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Select password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],attrs:{type:"text",name:"mail",placeholder:"Select mail"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Select name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],attrs:{type:"text",name:"surname",placeholder:"Select surname"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}}),r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.Register}},[t._v(" Register ")])],1)},ee=[];r("b0c0");function re(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function ae(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?re(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):re(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ne={name:"Register",props:{username:{type:String,default:""},password:{type:String,default:""},mail:{type:String,default:""},name:{type:String,default:""},surname:{type:String,default:""}},methods:ae({},Object(c["b"])(["newUser"]),{Register:function(){var t=r("f0b1"),e=t.object().keys({username:t.string().trim().required(),password:t.string().trim().required(),name:t.string().trim().required(),surname:t.string().trim().required(),mail:t.string().trim().required()}),a=(t.object().keys({id:t.number().min(1).max(50).required()}),JSON.stringify({username:this.username,password:this.password,name:this.name,surname:this.surname,mail:this.mail})),n=t.validate(a,e),i=n.error;i?alert(i.details[0].message):this.newUser(a)}})},ie=ne,oe=Object(m["a"])(ie,te,ee,!1,null,"0f04bd70",null),ce=oe.exports,se=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Login"}},[r("h1",[t._v("Login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.Login}},[t._v(" Login ")]),r("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1)},le=[];function ue(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function pe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ue(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ue(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var me={name:"Login",props:{username:{type:String,default:""},password:{type:String,default:""}},methods:pe({},Object(c["b"])(["login","isadmin"]),{Login:function(){var t=r("f0b1"),e=t.object().keys({username:t.string().trim().required(),password:t.string().trim().required()}),a=(t.object().keys({id:t.number().min(1).max(50).required()}),JSON.stringify({username:this.username,password:this.password})),n=t.validate(a,e),i=n.error;i?alert(i.details[0].message):(this.login(a),this.isadmin())}})},de=me,fe=Object(m["a"])(de,se,le,!1,null,"50fef75c",null),be=fe.exports;a["default"].use(b["a"]);var he,je=[{path:"/home",name:"home",component:bt},{path:"/",name:"login",component:be},{path:"/edit",name:"NovaPatika",component:wt},{path:"/patika/:id",name:"patika",component:et},{path:"/editm",name:"NovaMajica",component:Zt},{path:"/majica/:id",name:"majica",component:Bt},{path:"/login",name:"login",component:be},{path:"/register",name:"register",component:ce}],Oe=new b["a"]({mode:"history",base:"/",routes:je}),ve=Oe;r("a434");a["default"].use(c["a"]);var ye=new c["a"].Store({state:{patike:[],majice:[],admin:!1},mutations:(he={set_admin:function(t,e){t.admin=e},set_patike:function(t,e){t.patike=e}},Object(o["a"])(he,"set_patike",(function(t,e){t.patike=e})),Object(o["a"])(he,"add_patika",(function(t,e){t.patike.push(e)})),Object(o["a"])(he,"remove_patika",(function(t,e){for(var r=0;r<t.patike.length;r++)if(t.patike[r].id===e){t.patike.splice(r,1);break}})),Object(o["a"])(he,"update_patika",(function(t,e){for(var r=0;r<t.patike.length;r++)if(t.patike[r].id===parseInt(e.id)){t.patike[r].marka=e.patika.marka,t.patike[r].model=e.patika.model,t.patike[r].cena=e.patika.cena;break}})),Object(o["a"])(he,"set_majice",(function(t,e){t.majice=e})),Object(o["a"])(he,"set_majice",(function(t,e){t.majice=e})),Object(o["a"])(he,"add_majica",(function(t,e){t.majice.push(e)})),Object(o["a"])(he,"remove_majica",(function(t,e){for(var r=0;r<t.majice.length;r++)if(t.majice[r].id===e){t.majice.splice(r,1);break}})),Object(o["a"])(he,"update_majica",(function(t,e){for(var r=0;r<t.majice.length;r++)if(t.majice[r].id===parseInt(e.id)){t.majice[r].marka=e.majica.marka,t.majice[r].cena=e.majica.cena;break}})),he),actions:{load_patike:function(t){var e=t.commit;fetch("http://localhost:8080/api/patike",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_patike",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},load_majice:function(t){var e=t.commit;fetch("http://localhost:8080/api/majice",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_majice",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},login:function(t,e){t.commit;fetch("http://localhost:8080/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return ve.push("/home"),t.json()}))},isadmin:function(t){var e=t.commit;fetch("http://localhost:8080/api/isadmin",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_admin",t)}))},newUser:function(t,e){t.commit;fetch("http://localhost:8080/api/register",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return ve.push("/"),t.json()}))},delete_patika:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/delpatika/"+e,{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("remove_patika",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},new_patika:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/addpatika",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("add_patika",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},delete_majica:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/delmajica/"+e,{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("remove_majica",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},new_majica:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/addmajica",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("add_majica",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},change_majica:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/updatemajica/"+e.id,{method:"post",headers:{"Content-Type":"application/json"},body:e.majica}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("update_majica",{id:e.id,majica:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},change_patika:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/updatepatika/"+e.id,{method:"post",headers:{"Content-Type":"application/json"},body:e.patika}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("update_patika",{id:e.id,patika:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))}}}),ge=r("5f5b");r("f9e3"),r("2dd8");a["default"].use(ge["a"]),a["default"].config.productionTip=!1,new a["default"]({router:ve,store:ye,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,r){},"92d8":function(t,e,r){"use strict";var a=r("3891"),n=r.n(a);n.a},c8fb:function(t,e,r){}});
//# sourceMappingURL=app.61828a17.js.map