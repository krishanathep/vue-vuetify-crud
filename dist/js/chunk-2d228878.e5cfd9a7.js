(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228878"],{da27:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Search"},on:{keyup:function(t){return e.searchMovie(e.query)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._l(e.movies,(function(e){return a("v-col",{key:e.id,attrs:{cols:"6",md:"3"}},[a("v-card",{attrs:{tile:"",to:"/moviedetail/"+e.id}},[a("v-img",{attrs:{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}})],1)],1)}))],2)],1)],1)},o=[],i=a("bc3a"),r=a.n(i),c={data:function(){return{movies:[],query:""}},mounted:function(){this.fetchMovie()},methods:{fetchMovie:function(){var e=this;r.a.get("https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1").then((function(t){return e.movies=t.data.results}))},searchMovie:function(e){var t=this;""==e?this.fetchMovie():r.a.get("https://api.themoviedb.org/3/search/movie?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&query="+e).then((function(e){t.movies=e.data.results}))}}},s=c,d=a("2877"),u=a("6544"),f=a.n(u),l=a("7496"),v=a("b0af"),p=a("62ad"),h=a("a523"),m=a("adda"),b=a("0fd9"),g=a("8654"),y=Object(d["a"])(s,n,o,!1,null,null,null);t["default"]=y.exports;f()(y,{VApp:l["a"],VCard:v["a"],VCol:p["a"],VContainer:h["a"],VImg:m["a"],VRow:b["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-2d228878.e5cfd9a7.js.map