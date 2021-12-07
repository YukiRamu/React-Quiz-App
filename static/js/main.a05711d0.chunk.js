(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(14),s=n.n(a),i=(n(55),n(27)),o=n(6),u=(n(56),n(9)),j=n(18),l=Object(j.b)({name:"alert",initialState:{message:"",variant:"dark",show:!1},reducers:{showAlert:function(e,t){e.message=t.payload.message,e.variant=t.payload.variant?t.payload.variant:"dark",e.show=!0},hideAlert:function(e){e.message="",e.variant="dark",e.show=!1}}}),d=l.actions,b=d.showAlert,h=d.hideAlert,f=function(e){return e.alert},O=l.reducer,m=n(49),x=(n(62),n(1)),p=function(){var e=Object(u.b)(),t=Object(u.c)(f);return Object(r.useEffect)((function(){t.show&&setTimeout((function(){e(h())}),3e3)}),[t,e]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m.a,{variant:t.variant,show:t.show,className:"bottom-center",children:t.message})})},g=(n(65),function(e){var t=e.children;return Object(x.jsx)("div",{className:"wrapper",children:t})}),v=(n(66),n(22)),w=n.n(v),y=n(30),q=n(7),N=(n(68),n(77)),k=n(82),C=n(78),F=n(2),z=Object(j.b)({name:"userInfo",initialState:{username:""},reducers:{setUserInfo:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{username:t.payload})}}}),S=z.reducer,I=z.actions.setUserInfo,T=function(e){return e.userInfo},A=Object(j.b)({name:"category",initialState:{categoryList:[],topic:{}},reducers:{setCategory:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{categoryList:t.payload})},setTopic:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{topic:t.payload})}}}),L=A.reducer,E=A.actions,B=E.setCategory,H=E.setTopic,P=function(e){return e.category},G=function(){var e=Object(o.f)(),t=Object(u.b)(),n=Object(u.c)(P),c=Object(r.useState)(""),a=Object(q.a)(c,2),s=a[0],i=a[1],j=Object(r.useState)(""),l=Object(q.a)(j,2),d=l[0],h=l[1];Object(r.useEffect)(Object(y.a)(w.a.mark((function e(){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://opentdb.com/api_category.php");case 3:if((n=e.sent).ok){e.next=8;break}throw n.statusText;case 8:return e.next=10,n.json();case 10:r=e.sent,t(B(r.trivia_categories));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error: failed to fetch category data ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(N.a,{fluid:!0,className:"userFormContainer",children:[Object(x.jsx)("h1",{children:"Welcome to Quiz App :)"}),Object(x.jsx)("p",{children:"Enter your name and let't begin"}),Object(x.jsxs)(k.a,{onSubmit:function(n){if(n.preventDefault(),""===s||""===d)return t(b({message:"Please enter your user name and choose topic",variant:"danger"})),!1;t(I(s)),t(H(d)),e("/quiz")},children:[Object(x.jsxs)(k.a.Group,{className:"userForm",children:[Object(x.jsx)(k.a.Label,{children:"Name:"}),Object(x.jsx)(k.a.Control,{type:"text",placeholder:"Enter your name...",value:s,onFocus:function(){return i("")},onChange:function(e){return i(e.target.value)}})]}),Object(x.jsxs)(k.a.Group,{className:"transactionCategory",children:[Object(x.jsx)(k.a.Label,{children:"Topic:"}),Object(x.jsxs)(k.a.Select,{required:!0,defaultValue:"Choose a topic...",value:d,onChange:function(e){return h(e.target.value)},children:[Object(x.jsx)("option",{children:"Choose..."}),n.categoryList.map((function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("option",{children:e.name},t)})}))]})]}),Object(x.jsx)(C.a,{className:"startBtn",type:"submit",children:"Start"})]})]})})},Q=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(G,{})})},W=(n(69),n(70),function(){var e=Object(u.c)(T),t=Object(u.c)(P);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("header",{children:[Object(x.jsxs)("h1",{children:["Hi ",e.username,"!"]}),Object(x.jsxs)("h2",{children:["Topic is ",Object(x.jsx)("span",{children:t.topic})]})]})})}),_=n(38),D=(n(71),n(80)),J=Object(j.b)({name:"quiz",initialState:{quizList:[],correctAnswerCount:void 0},reducers:{setQuiz:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{quizList:t.payload})},setCorrectAnswerCount:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{correctAnswerCount:t.payload})}}}),M=J.reducer,U=J.actions.setQuiz,R=function(e){return e.quiz},V=n(79),Y=(n(72),function(){return Object(x.jsx)(N.a,{fluid:!0,className:"spinner d-flex h-100 align-items-center justify-content-center",children:Object(x.jsx)(V.a,{animation:"border",variant:"light"})})}),$=(n(73),n(81)),K=function(e){var t=Object(o.f)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)($.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show,className:"scoreModal",onHide:e.onHide,children:[Object(x.jsx)($.a.Header,{children:Object(x.jsx)($.a.Title,{as:"h3",id:"contained-modal-title-vcenter",children:"Your Score"})}),Object(x.jsx)($.a.Body,{children:Object(x.jsxs)("p",{className:"score",children:[e.count," / 10"]})}),Object(x.jsx)($.a.Footer,{children:Object(x.jsx)(C.a,{className:"submitBtn",type:"button",onClick:function(){t("/"),e.onHide()},children:"Return to Home"})})]})})},X=function(){var e=Object(o.f)(),t=Object(u.c)(P),n=Object(u.c)(R),c=Object(u.b)(),a=Object(r.useState)([]),s=Object(q.a)(a,2),i=s[0],j=s[1],l=Object(r.useState)(),d=Object(q.a)(l,2),h=d[0],f=d[1],O=Object(r.useState)(!1),m=Object(q.a)(O,2),p=m[0],g=m[1],v=function(){var e=Object(y.a)(w.a.mark((function e(n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.categoryList.find((function(e){return e.name===n})),e.abrupt("return",r.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(y.a)(w.a.mark((function n(){var r,a,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v(t.topic);case 3:return r=n.sent,n.next=6,fetch("https://opentdb.com/api.php?amount=10&type=boolean&category=".concat(r));case 6:if((a=n.sent).ok){n.next=11;break}throw a.statusText;case 11:return n.next=13,a.json();case 13:0===(s=n.sent).results.length?(c(b({message:"Sorry no quiz list prepared :( Please select another topic",variant:"danger"})),e("/")):c(U(s.results));case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.error("Error: failed to fetch category data ".concat(n.t0));case 20:case"end":return n.stop()}}),n,null,[[0,17]])}))),[]);var F=function(e,t){-1===i.findIndex((function(t){return t.questionNum===e}))?j([].concat(Object(_.a)(i),[{questionNum:e,answer:t,isChecked:!0}])):j(i.map((function(n){return n.questionNum===e?{questionNum:e,answer:t,isChecked:!0}:n})))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{fluid:!0,className:"quizPanelContainer",children:0!==n.quizList.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(D.a,{children:[n.quizList.map((function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(k.a,{className:"quizForm",children:[Object(x.jsxs)("p",{children:[t+1,": ",e.question]},t),Object(x.jsxs)(k.a.Group,{className:"checkBox",children:[Object(x.jsx)(k.a.Check,{type:"radio",value:"True",label:"True",checked:-1!==i.findIndex((function(e){return e.questionNum===t+1}))&&!0===i[i.findIndex((function(e){return e.questionNum===t+1}))].isChecked&&"True"===i[i.findIndex((function(e){return e.questionNum===t+1}))].answer,onChange:function(){return F(t+1,"True")}}),Object(x.jsx)(k.a.Check,{type:"radio",value:"False",label:"False",checked:-1!==i.findIndex((function(e){return e.questionNum===t+1}))&&!0===i[i.findIndex((function(e){return e.questionNum===t+1}))].isChecked&&"False"===i[i.findIndex((function(e){return e.questionNum===t+1}))].answer,onChange:function(){return F(t+1,"False")}})]})]})})})),Object(x.jsx)(C.a,{className:"submitBtn",type:"button",onClick:function(e){if(e.preventDefault(),10!==i.length)return c(b({message:"Please answer all questions",variant:"danger"})),!1;for(var t=n.quizList.map((function(e,t){return{questionNum:t+1,correctAnswer:e.correct_answer}})),r=i.sort((function(e,t){return e.questionNum-t.questionNum})),a=0,s=0;s<t.length;s++)t[s].correctAnswer===r[s].answer&&a++;f(a),g(!0)},children:"Submit Answer"})]}),void 0!==h&&Object(x.jsx)(K,{show:p,onHide:function(){return g(!1)},count:h})]}):Object(x.jsx)(Y,{})})})},Z=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(W,{}),Object(x.jsx)(X,{})]})},ee=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{children:Object(x.jsx)(g,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",element:Object(x.jsx)(Q,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/home",element:Object(x.jsx)(Q,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/quiz",element:Object(x.jsx)(Z,{})})]})})}),Object(x.jsx)(p,{})]})},te=Object(j.a)({reducer:{alert:O,userInfo:S,category:L,quiz:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(74);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(u.a,{store:te,children:Object(x.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.a05711d0.chunk.js.map