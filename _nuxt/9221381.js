(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(37),{data:function(){return{projects:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get("/_content/projects").catch((function(t){return console.error(t)}));case 2:t.projects=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),o=n(59),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"flex space-x-8"},t._l(t.projects,(function(e){return n("li",{key:e.slug,staticClass:"flex-1"},[n("nuxt-link",{attrs:{to:"/projects/"+e.slug,title:"learn more"}},[n("div",{staticClass:"w-100 h-64 rounded-xs overflow-hidden image",style:"background-image: url('"+e.image[0].small+"'); background-position: top center; background-size:cover"},[n("div",{staticClass:"relative w-100 h-full layover"},[n("div",{staticClass:"absolute bottom-0 left-0 py-1 px-2"},[n("h3",{staticClass:"leading-3"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("span",{staticClass:"uppercase text-xs leading-3"},[t._v(t._s(e.type))])])])])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);