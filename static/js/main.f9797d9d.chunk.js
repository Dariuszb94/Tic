(this.webpackJsonptic=this.webpackJsonptic||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),u=n.n(a),i=n(2),o=(n(14),r.a.createContext([2,function(){}])),s=n(1);var l=function(e){var t=e.player,n=Object(c.useContext)(o)[0];return Object(s.jsxs)("section",{children:["Player ",t," turn (",n,")"]})},j=n(4),b=n(7),f=n.n(b),O=n(9);var d=function(e){var t=e.player,n=e.boardSet,r=e.board,a=e.index,u=e.winner,l=Object(c.useState)(null),b=Object(i.a)(l,2),d=b[0],v=b[1],p=(Object(c.useContext)(o)[0],Object(c.useContext)(o)),x=Object(i.a)(p,2),h=(x[0],x[1]),y=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==d){e.next=2;break}return e.abrupt("return");case 2:g(),h((function(e){return e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){S()}),[d]),Object(c.useEffect)((function(){}),[d]);var S=function(){var e=Object(j.a)(r);e[a]=d,n(e)};Object(c.useEffect)((function(){v(r[a])}),[r]);var g=function(){switch(t){case"X":v("X");break;case"O":v("O");break;default:console.log("error player")}};return Object(s.jsx)("div",{className:"cell".concat(u||d?"--filled":""),onClick:y,children:d})},v=function(e){var t=e.winner;return Object(s.jsxs)("div",{children:["Winner is ",t]})};n(17);var p=function(e){var t=e.player,n=Object(c.useState)([null,null,null,null,null,null,null,null,null]),r=Object(i.a)(n,2),a=r[0],u=r[1],o=Object(c.useState)([]),l=Object(i.a)(o,2),b=l[0],f=l[1],O=Object(c.useState)(null),p=Object(i.a)(O,2),x=p[0],h=p[1],y=Object(c.useState)([[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]),S=Object(i.a)(y,2),g=S[0];S[1],Object(c.useEffect)((function(){k("X"),k("O")}),[a]);var k=function(e){var t=[];a.forEach((function(n,c){n===e&&t.push(c)})),m(t)};Object(c.useEffect)((function(){JSON.stringify(b).includes(JSON.stringify(a))||f((function(e){return[].concat(Object(j.a)(e),[a])}))}),[a]);var m=function(e){g.some((function(t){return t.join()==e.join()}));g.forEach((function(t,n){t.join()===e.join()&&h(a[e[0]])}))};return Object(s.jsxs)("section",{className:"grid",children:[Object(s.jsx)("div",{className:"grid__inner",children:a&&a.map((function(e,n){return Object(s.jsx)(d,{player:t,index:n,boardSet:u,board:a,winner:x})}))}),Object(s.jsx)("button",{type:"button",onClick:function(){var e=Object(j.a)(b);u(e[e.length-2]),e.pop();var t=e.slice(0,-1);f(t)},children:"Back"}),x&&Object(s.jsx)(v,{winner:x})]})};var x=function(){var e=Object(c.useState)("X"),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(1),u=a[0];return Object(c.useEffect)((function(){r(u%2===0?"O":"X")}),[a]),Object(s.jsx)(o.Provider,{value:a,children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(l,{player:n}),Object(s.jsx)(p,{player:n})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),a(e),u(e)}))};u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.f9797d9d.chunk.js.map