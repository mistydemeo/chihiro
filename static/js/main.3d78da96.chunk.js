(this.webpackJsonpchihiro=this.webpackJsonpchihiro||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),j=(n(11),n(4)),l=n.n(j),r=n(6),o=n(2),d=n(0);var h=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("en"),s=Object(o.a)(i,2),j=s[0],h=s[1],b=Object(c.useState)("ca"),u=Object(o.a)(b,2),p=u[0],O=u[1],x=Object(c.useState)("UP4501-PCSE00540_00-00001AQUAKITTYDX"),g=Object(o.a)(x,2),v=g[0],m=g[1],f=function(e){m(e.target.value)},C=function(e){O(e.target.value)},_=function(e){h(e.target.value)},S=function(){var e=Object(r.a)(l.a.mark((function e(t,n,c){var i,s,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://store.playstation.com/store/api/chihiro/00_09_000/container/".concat(t,"/").concat(n,"/999/").concat(c),e.next=3,fetch(i);case 3:return s=e.sent,e.next=6,s.json();case 6:j=e.sent,a(j);case 8:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){S(p,j,v)}),[p,j,v]),n&&null==n.codeName?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("select",{name:"region",id:"region",onChange:C,children:[Object(d.jsx)("option",{value:"ca",selected:"selected",children:"Canada (ca)"}),Object(d.jsx)("option",{value:"hk",children:"Hong Kong (hk)"}),Object(d.jsx)("option",{value:"jp",children:"Japan (jp)"}),Object(d.jsx)("option",{value:"us",children:"United States (us)"}),Object(d.jsx)("option",{value:"gb",children:"United Kingdom (gb)"})]}),Object(d.jsxs)("select",{name:"language",id:"language",onChange:_,children:[Object(d.jsx)("option",{value:"en",selected:"selected",children:"English"}),Object(d.jsx)("option",{value:"ja",children:"Japanese"}),Object(d.jsx)("option",{value:"zh",children:"Chinese"})]}),Object(d.jsx)("input",{type:"text",value:v,onChange:f}),Object(d.jsxs)("h3",{children:[n.title_name," (",n.id,")"]}),Object(d.jsx)("center",{children:Object(d.jsx)("img",{border:"1",width:"33%",src:n.images[0].url,alt:"Cover art"})}),Object(d.jsx)("table",{border:"1",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Platform"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"Release Date"}),Object(d.jsx)("th",{children:"Description"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{valign:"top",children:(n.playable_platform||[]).join(", ")}),Object(d.jsx)("td",{valign:"top",children:new Date(n.release_date).toDateString()}),Object(d.jsx)("td",{valign:"top",children:n.default_sku.display_price}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:n.long_desc}})})]})]})})]}):n&&n.codeName?Object(d.jsxs)("div",{children:[Object(d.jsxs)("select",{name:"region",id:"region",onChange:C,children:[Object(d.jsx)("option",{value:"ca",selected:"selected",children:"Canada (ca)"}),Object(d.jsx)("option",{value:"hk",children:"Hong Kong (hk)"}),Object(d.jsx)("option",{value:"jp",children:"Japan (jp)"}),Object(d.jsx)("option",{value:"us",children:"United States (us)"}),Object(d.jsx)("option",{value:"gb",children:"United Kingdom (gb)"})]}),Object(d.jsxs)("select",{name:"language",id:"language",onChange:_,children:[Object(d.jsx)("option",{value:"en",selected:"selected",children:"English (en)"}),Object(d.jsx)("option",{value:"ja",children:"Japanese (jp)"}),Object(d.jsx)("option",{value:"zh",children:"Chinese (zh)"})]}),Object(d.jsx)("input",{type:"text",value:v,onChange:f})]}):Object(d.jsx)("div",{className:"App",children:"Now loading..."})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3d78da96.chunk.js.map