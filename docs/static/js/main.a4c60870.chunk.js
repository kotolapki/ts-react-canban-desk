(this["webpackJsonpts-trello"]=this["webpackJsonpts-trello"]||[]).push([[0],{35:function(n,t,e){},36:function(n,t,e){},37:function(n,t,e){},38:function(n,t,e){},39:function(n,t,e){},42:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(1),i=e.n(o),a=e(9),c=e.n(a),u=e(10),s=e(4),d=e(2),b=(e(35),e(36),e(37),e(38),e(39),e(3)),l=e(6),p="SET_USERNAME",f="ADD_NEW_DESK",j="CHANGE_DESKNAME",x="REMOVE_DESK",m="REMOVE_ALL_DESKS",O="ADD_NEW_TASK",h="DELETE_TASK",g="CHANGE_TASK_DESCRIPTION",k="ADD_NEW_COMMENT",v="CHANGE_COMMENT",y="DELETE_COMMENT",w=e(44);function C(n){return{type:p,payload:{username:n}}}function E(){var n=Object(d.a)(["\n  padding: 8px 15px;\n  font-size: 22px;\n  color: white;\n  text-transform: uppercase;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return E=function(){return n},n}function z(){var n=Object(d.a)(["\n  margin-bottom: 15px;\n  padding: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: none;\n  border-bottom: 1px solid black;\n"]);return z=function(){return n},n}function S(){var n=Object(d.a)(["\n  margin-bottom: 15px;\n  font-size: 36px;\n  font-weight: 300;\n"]);return S=function(){return n},n}function D(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return D=function(){return n},n}function F(){var n=Object(d.a)(["\n  padding: 30px 80px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid black;\n  border-radius: 10px;\n"]);return F=function(){return n},n}var T=function(){var n=Object(s.b)(),t=Object(o.useState)(""),e=Object(l.a)(t,2),i=e[0],a=e[1];return Object(r.jsx)(I,{children:Object(r.jsxs)(N,{onSubmit:function(t){t.preventDefault(),n(C(i))},children:[Object(r.jsx)(_,{htmlFor:"login",children:"Enter your name"}),Object(r.jsx)(A,{type:"text",name:"login",id:"login",autoComplete:"off",placeholder:"Your name",value:i,onChange:function(n){a(n.target.value)},required:!0}),Object(r.jsx)(B,{type:"submit",children:"Confirm"})]})})},I=b.a.div(F()),N=b.a.form(D()),_=b.a.label(S()),A=b.a.input(z()),B=b.a.button(E());function P(){var n=Object(d.a)(["\n  margin-right: 15px;\n  font-size: 20px;\n  border: none;\n  border-image: initial;\n  border-bottom: 1px solid black;\n"]);return P=function(){return n},n}function M(){var n=Object(d.a)(["\n  margin-right: 15px;\n  font-size: 20px;\n  align-self: center;\n"]);return M=function(){return n},n}function L(){var n=Object(d.a)(["\n  display: flex;\n  align-content: stretch;\n"]);return L=function(){return n},n}function V(){var n=Object(d.a)(["\n  margin-right: 0;\n"]);return V=function(){return n},n}function H(){var n=Object(d.a)(["\n  margin-right: 20px;\n  padding: 3px 10px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return H=function(){return n},n}function K(){var n=Object(d.a)(["\n  margin-right: 20px;\n  font-size: 36px;\n  font-weight: 700;\n"]);return K=function(){return n},n}function R(){var n=Object(d.a)(["\n  margin-bottom: 30px;\n  padding-top: 40px;\n  display: flex;\n  justify-content: center;\n"]);return R=function(){return n},n}var W=function(){var n=Object(s.b)(),t=Object(s.c)((function(n){return n.username})),e=Object(o.useState)(""),i=Object(l.a)(e,2),a=i[0],c=i[1];return Object(r.jsxs)(q,{children:[Object(r.jsxs)(J,{children:["Hello, ",t,"!"]}),Object(r.jsx)(G,{type:"button",onClick:function(){return n(C(""))},children:"Change user"}),Object(r.jsxs)(X,{onSubmit:function(t){t.preventDefault(),n({type:f,payload:{title:a,id:Object(w.a)()}}),t.currentTarget.reset()},children:[Object(r.jsx)(Y,{htmlFor:"deskname",children:"Enter new deskname"}),Object(r.jsx)(Q,{type:"text",name:"deskname",id:"deskname",placeholder:"Deskname",autoComplete:"off",onChange:function(n){c(n.target.value)},required:!0}),Object(r.jsx)(G,{type:"submit",children:"Confirm"})]}),Object(r.jsx)(U,{onClick:function(){return n({type:m})},children:"Remove all desks"})]})},q=b.a.header(R()),J=b.a.p(K()),G=b.a.button(H()),U=Object(b.a)(G)(V()),X=b.a.form(L()),Y=b.a.label(M()),Q=b.a.input(P());function Z(){var n=Object(d.a)(["\n  margin: 0px auto 10px;\n  width: min-content;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 800;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid black;\n"]);return Z=function(){return n},n}function $(){var n=Object(d.a)(["\n  font-size: 0;\n"]);return $=function(){return n},n}function nn(){var n=Object(d.a)(["\n  margin-bottom: 15px;\n  width: 100%;\n  display: flex;\n"]);return nn=function(){return n},n}var tn=function(n){var t=n.deskname,e=n.deskId,i=n.changeFormVisibility,a=n.onBlurHideHeaderForm,c=Object(s.b)(),u=Object(o.useState)(t),d=Object(l.a)(u,2),b=d[0],p=d[1],f=Object(o.useRef)(null);return Object(o.useEffect)((function(){null!==f.current&&f.current.focus()}),[]),Object(r.jsxs)(en,{onSubmit:function(n){n.preventDefault(),c({type:j,payload:{title:b,id:e}}),i()},onBlur:a,children:[Object(r.jsx)(rn,{children:"Change deskname"}),Object(r.jsx)(on,{type:"text",ref:f,name:"deskname",id:"deskname",placeholder:b,value:b,autoComplete:"off",onChange:function(n){p(n.target.value)},required:!0})]})},en=b.a.form(nn()),rn=b.a.label($()),on=b.a.input(Z());function an(){var n=Object(d.a)(["\n  width: 28px;\n  height: 28px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n\n  &::before {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 13px;\n    left: 2px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 13px;\n    left: 2px;\n    transform: rotate(45deg);\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(d.a)(["\n  margin-right: 10px;\n  padding: 4px 10px;\n  font-size: 16px;\n  color: white;\n  background-color: black;\n  text-transform: uppercase;\n  border-radius: 5px;\n"]);return cn=function(){return n},n}function un(){var n=Object(d.a)(["\n  margin-bottom: 15px;\n  display: flex;\n"]);return un=function(){return n},n}function sn(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  font-size: 18px;\n  border: 2px solid black;\n  border-radius: 5px;\n  resize: none;\n  outline: none;\n  box-sizing: border-box;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(d.a)(["\n  font-size: 0;\n"]);return dn=function(){return n},n}function bn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return bn=function(){return n},n}var ln=function(n){var t=n.onClickChangeTaskDescriptionFormVisibility,e=n.initialValue,i=n.taskId,a=Object(s.b)(),c=Object(o.useState)(e),u=Object(l.a)(c,2),d=u[0],b=u[1];return Object(r.jsxs)(pn,{onSubmit:function(n){n.preventDefault(),a({type:g,payload:{description:d,id:i}}),t()},onClick:function(n){return n.stopPropagation()},children:[Object(r.jsx)(fn,{htmlFor:"taskDescription",children:"Change description"}),Object(r.jsx)(jn,{name:"taskDescription",placeholder:"Add task description",autoComplete:"off",type:"text",id:"taskDescription",value:d,onChange:function(n){b(n.target.value)}}),Object(r.jsxs)(xn,{children:[Object(r.jsx)(mn,{type:"submit",children:"Confirm"}),Object(r.jsx)(On,{type:"button",onClick:function(){t()}})]})]})},pn=b.a.form(bn()),fn=b.a.label(dn()),jn=b.a.input(sn()),xn=b.a.div(un()),mn=b.a.button(cn()),On=b.a.button(an());function hn(){var n=Object(d.a)(["\n  width: 28px;\n  height: 28px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n\n  &::before {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 13px;\n    left: 2px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 13px;\n    left: 2px;\n    transform: rotate(45deg);\n  }\n"]);return hn=function(){return n},n}function gn(){var n=Object(d.a)(["\n  margin-right: 10px;\n  padding: 4px 10px;\n  font-size: 16px;\n  color: white;\n  background-color: black;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 5px;\n"]);return gn=function(){return n},n}function kn(){var n=Object(d.a)(["\n  margin-bottom: 15px;\n  display: flex;\n"]);return kn=function(){return n},n}function vn(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n  resize: none;\n  box-sizing: border-box;\n  background: Silver;\n"]);return vn=function(){return n},n}function yn(){var n=Object(d.a)(["\n  font-size: 0;\n"]);return yn=function(){return n},n}function wn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return wn=function(){return n},n}var Cn=function(n){var t=n.taskId,e=n.onFocusShowCommentBtnsWrapper,i=n.hasCommentFormFocused,a=n.hideCommentBtnsWrapper,c=Object(s.c)((function(n){return n.username})),u=Object(s.b)(),d=Object(o.useState)(""),b=Object(l.a)(d,2),p=b[0],f=b[1];return Object(r.jsxs)(En,{onSubmit:function(n){var e;n.preventDefault(),u((e=t,{type:k,payload:{author:c,text:p,id:Object(w.a)(),taskId:e}})),a(),n.currentTarget.reset()},onClick:function(n){return n.stopPropagation()},children:[Object(r.jsx)(zn,{htmlFor:"comment",children:"Enter new comment"}),Object(r.jsx)(Sn,{name:"comment",placeholder:"Add new comment",autoComplete:"off",type:"text",id:"comment",onFocus:function(){return e()},onChange:function(n){f(n.target.value)},required:!0}),i&&Object(r.jsxs)(Dn,{children:[Object(r.jsx)(Fn,{type:"submit",children:"Confirm"}),Object(r.jsx)(Tn,{type:"button","aria-label":"hide comment controls",onClick:function(){return a()}})]})]})},En=b.a.form(wn()),zn=b.a.label(yn()),Sn=b.a.input(vn()),Dn=b.a.div(kn()),Fn=b.a.button(gn()),Tn=b.a.button(hn());function In(){var n=Object(d.a)(["\n  margin-bottom: 5px;\n  padding: 3px;\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid black;\n  border-radius: 5px;\n  resize: none;\n  box-sizing: border-box;\n"]);return In=function(){return n},n}function Nn(){var n=Object(d.a)(["\n  font-size: 0;\n"]);return Nn=function(){return n},n}function _n(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return _n=function(){return n},n}function An(){var n=Object(d.a)(["\n  margin-right: 10px;\n  padding: 3px 5px;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return An=function(){return n},n}function Bn(){var n=Object(d.a)(["\n  display: flex;\n  align-items: flex-start;\n"]);return Bn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  margin-bottom: 5px;\n  font-size: 16px;\n"]);return Pn=function(){return n},n}function Mn(){var n=Object(d.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  font-weight: 800;\n"]);return Mn=function(){return n},n}function Ln(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n"]);return Ln=function(){return n},n}var Vn=function(n){var t=n.comment,e=Object(s.c)((function(n){return n.username})),i=Object(s.b)(),a=Object(o.useState)(!1),c=Object(l.a)(a,2),u=c[0],d=c[1],b=Object(o.useState)(t.text),p=Object(l.a)(b,2),f=p[0],j=p[1];return Object(r.jsxs)(Hn,{onClick:function(n){return n.stopPropagation()},children:[Object(r.jsx)(Kn,{children:t.author}),u?Object(r.jsxs)(Jn,{onSubmit:function(n){var e,r;n.preventDefault(),i((e=f,r=t.id,{type:v,payload:{text:e,id:r}})),d(!1)},children:[Object(r.jsx)(Gn,{children:"Change comment"}),Object(r.jsx)(Un,{name:"changeComment",placeholder:"comment text",autoComplete:"off",type:"text",id:"changeComment",value:f,onChange:function(n){j(n.target.value)}}),Object(r.jsxs)(Wn,{children:[Object(r.jsx)(qn,{type:"submit",children:"Confirm"}),Object(r.jsx)(qn,{type:"button",onClick:function(){d(!1),j(t.text)},children:"Cancel"})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Rn,{children:t.text}),e===t.author&&Object(r.jsxs)(Wn,{children:[Object(r.jsx)(qn,{type:"button",onClick:function(){d(!0),j(t.text)},children:"change"}),Object(r.jsx)(qn,{type:"button",onClick:function(){return i((n=t.id,{type:y,payload:{id:n}}));var n},children:"delete"})]})]})]})},Hn=b.a.li(Ln()),Kn=b.a.p(Mn()),Rn=b.a.p(Pn()),Wn=b.a.div(Bn()),qn=b.a.button(An()),Jn=b.a.form(_n()),Gn=b.a.label(Nn()),Un=b.a.input(In());function Xn(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 18px;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 600;\n"]);return Yn=function(){return n},n}function Qn(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(d.a)(["\n  margin-top: 5px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 3px;\n\n  &::before {\n    content: '';\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 9px;\n    left: 3px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: '';\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 9px;\n    left: 3px;\n    transform: rotate(45deg);\n  }\n"]);return $n=function(){return n},n}function nt(){var n=Object(d.a)(["\n  font-size: 26px;\n  font-weight: 800;\n"]);return nt=function(){return n},n}function tt(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n"]);return tt=function(){return n},n}function et(){var n=Object(d.a)(["\n  padding: 20px;\n  width: 500px;\n  position: absolute;\n  z-index: 2;\n  top: 150px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 1px solid black;\n  border-radius: 10px;\n  background-color: white;\n"]);return et=function(){return n},n}function rt(){var n=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.8);\n"]);return rt=function(){return n},n}var ot=function(n){var t=n.deskname,e=n.task,i=n.onClickChangeTaskPopupVisibility,a=Object(s.c)((function(n){return n.comments})).filter((function(n){return n.taskId===e.id})),c=Object(o.useState)(!1),u=Object(l.a)(c,2),d=u[0],b=u[1],p=Object(o.useState)(!1),f=Object(l.a)(p,2),j=f[0],x=f[1];function m(){b((function(n){return!n}))}return Object(o.useEffect)((function(){function n(n){"Escape"===n.key&&i()}return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[i]),Object(o.useEffect)((function(){function n(n){b(!1)}return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}),[d]),Object(r.jsx)(it,{id:"overlay",onClick:function(n){var t=n.target;"overlay"!==t.id&&"hidePopupBtn"!==t.id||i(),x(!1)},children:Object(r.jsxs)(at,{children:[Object(r.jsxs)(ct,{children:[Object(r.jsx)(ut,{children:e.title}),Object(r.jsx)(st,{type:"button","aria-label":"hide task window",id:"hidePopupBtn"})]}),Object(r.jsxs)(dt,{children:["\u0412 \u0434\u043e\u0441\u043a\u0435: ",t]}),Object(r.jsxs)(bt,{children:["\u0410\u0432\u0442\u043e\u0440: ",e.author]}),Object(r.jsx)(lt,{children:"Task description"}),d?Object(r.jsx)(ln,{onClickChangeTaskDescriptionFormVisibility:m,initialValue:e.description,taskId:e.id}):Object(r.jsx)(pt,{onClick:function(n){n.stopPropagation(),m()},children:e.description?e.description:"Add task description"}),Object(r.jsx)(Cn,{taskId:e.id,onFocusShowCommentBtnsWrapper:function(){x(!0)},hasCommentFormFocused:j,hideCommentBtnsWrapper:function(){x(!1)}}),Object(r.jsx)("ul",{children:a.length>=1&&a.map((function(n){return Object(r.jsx)(Vn,{comment:n},n.id)}))})]})})},it=b.a.div(rt()),at=b.a.div(et()),ct=b.a.div(tt()),ut=b.a.h3(nt()),st=b.a.button($n()),dt=b.a.p(Zn()),bt=b.a.p(Qn()),lt=b.a.label(Yn()),pt=b.a.p(Xn());function ft(){var n=Object(d.a)(["\n  text-align: right;\n"]);return ft=function(){return n},n}function jt(){var n=Object(d.a)(['\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 3px;\n\n  &::before {\n    content: "";\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 9px;\n    left: 3px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: "";\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 9px;\n    left: 3px;\n    transform: rotate(45deg);\n  }\n']);return jt=function(){return n},n}function xt(){var n=Object(d.a)(["\n  font-size: 18px;\n"]);return xt=function(){return n},n}function mt(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom-right-radius: 3px;\n  border-bottom: 1px solid black;\n"]);return mt=function(){return n},n}function Ot(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  cursor: pointer;\n"]);return Ot=function(){return n},n}var ht=function(n){var t=n.task,e=n.deskname,i=Object(s.c)((function(n){return n.comments})).filter((function(n){return n.taskId===t.id})),a=Object(s.b)(),c=Object(o.useState)(!1),u=Object(l.a)(c,2),d=u[0],b=u[1];function p(){b((function(n){return!n}))}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(gt,{onClick:p,children:[Object(r.jsxs)(kt,{children:[Object(r.jsx)(vt,{children:t.title}),Object(r.jsx)(yt,{"aria-label":"delete task",onClick:function(n){var e;n.stopPropagation(),a((e=t.id,{type:h,payload:{id:e}}))}})]}),Object(r.jsxs)(wt,{children:["comments: ",i.length]})]}),d&&Object(r.jsx)(ot,{deskname:e,task:t,onClickChangeTaskPopupVisibility:p})]})},gt=b.a.li(Ot()),kt=b.a.div(mt()),vt=b.a.p(xt()),yt=b.a.button(jt()),wt=b.a.p(ft());function Ct(){var n=Object(d.a)(["\n  padding: 5px 20px;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: white;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: black;\n"]);return Ct=function(){return n},n}function Et(){var n=Object(d.a)(["\n  margin-right: 10px;\n  font-size: 18px;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-image: initial;\n  border-bottom: 1px solid black;\n  background-color: transparent;\n"]);return Et=function(){return n},n}function zt(){var n=Object(d.a)(["\n  font-size: 0;\n"]);return zt=function(){return n},n}function St(){var n=Object(d.a)(["\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n"]);return St=function(){return n},n}function Dt(){var n=Object(d.a)(["\n  padding: 3px 5px;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return Dt=function(){return n},n}function Ft(){var n=Object(d.a)(["\n  margin-right: 25px;\n  font-size: 24px;\n  font-weight: 800;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n"]);return Ft=function(){return n},n}function Tt(){var n=Object(d.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: flex-end;\n"]);return Tt=function(){return n},n}function It(){var n=Object(d.a)(["\n  margin-right: 7px;\n  margin-bottom: 20px;\n  padding: 10px;\n  min-width: 300px;\n  height: fit-content;\n  background-color: snow;\n  border: 2px solid black;\n  border-radius: 10px;\n\n  &:nth-child(4n) {\n    margin-right: 0;\n  }\n"]);return It=function(){return n},n}var Nt=function(n){var t=n.title,e=n.deskId,i=Object(s.c)((function(n){return n.username})),a=Object(s.c)((function(n){return n.tasks})).filter((function(n){return n.deskId===e})),c=Object(s.b)(),u=Object(o.useState)(!1),d=Object(l.a)(u,2),b=d[0],p=d[1],f=Object(o.useState)(""),j=Object(l.a)(f,2),m=j[0],h=j[1];return Object(r.jsxs)(_t,{children:[Object(r.jsx)(At,{children:b?Object(r.jsx)(tn,{deskname:t,deskId:e,changeFormVisibility:function(){p((function(n){return!n}))},onBlurHideHeaderForm:function(){p(!1)}}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Bt,{onClick:function(){return p(!0)},children:t}),Object(r.jsx)(Pt,{type:"button",onClick:function(){c(function(n){return{type:x,payload:{deskId:n}}}(e))},children:"Remove desk"})]})}),Object(r.jsxs)(Mt,{onSubmit:function(n){n.preventDefault(),c(function(n,t,e){return{type:O,payload:{title:n,id:Object(w.a)(),description:"",author:e,deskId:t}}}(m,e,i)),h("")},children:[Object(r.jsx)(Lt,{htmlFor:"newTask",children:"New task"}),Object(r.jsx)(Vt,{type:"text",name:"newTask",id:"newTask",placeholder:"New task",autoComplete:"off",value:m,onChange:function(n){h(n.target.value)},required:!0}),Object(r.jsx)(Ht,{type:"submit",children:"Confirm"})]}),Object(r.jsx)("ul",{children:a.map((function(n){return Object(r.jsx)(ht,{task:n,deskname:t},n.id)}))})]})},_t=b.a.div(It()),At=b.a.div(Tt()),Bt=b.a.h2(Ft()),Pt=b.a.button(Dt()),Mt=b.a.form(St()),Lt=b.a.label(zt()),Vt=b.a.input(Et()),Ht=b.a.button(Ct());function Kt(){var n=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Kt=function(){return n},n}function Rt(){var n=Object(d.a)(["\n  font-size: 0;\n"]);return Rt=function(){return n},n}function Wt(){var n=Object(d.a)(["\n  margin: 0 auto;\n  width: 1424px;\n"]);return Wt=function(){return n},n}var qt=function(){var n=Object(s.c)((function(n){return n})),t=Boolean(n.username);return Object(o.useEffect)((function(){localStorage.setItem("state",JSON.stringify(n))}),[n]),Object(r.jsxs)(Jt,{children:[Object(r.jsx)(Gt,{children:"Canban desk"}),t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{}),Object(r.jsx)(Ut,{children:n.desks.map((function(n){return Object(r.jsx)(Nt,{title:n.title,deskId:n.id},n.id)}))})]}):Object(r.jsx)(T,{})]})},Jt=b.a.div(Wt()),Gt=b.a.h1(Rt()),Ut=b.a.div(Kt()),Xt=e(12),Yt=e(5),Qt=localStorage.getItem("state"),Zt={username:"",desks:[],tasks:[],comments:[]},$t=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),r(n),o(n),i(n),a(n)}))},ne=Object(u.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt?JSON.parse(Qt):Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(Yt.a)(Object(Yt.a)({},n),{},{username:t.payload.username});case f:return Object(Yt.a)(Object(Yt.a)({},n),{},{desks:[].concat(Object(Xt.a)(n.desks),[t.payload])});case j:return Object(Yt.a)(Object(Yt.a)({},n),{},{desks:n.desks.map((function(n){return n.id===t.payload.id?Object(Yt.a)(Object(Yt.a)({},n),{},{title:t.payload.title}):n}))});case x:return Object(Yt.a)(Object(Yt.a)({},n),{},{desks:n.desks.filter((function(n){return n.id!==t.payload.deskId}))});case m:return Zt;case O:return Object(Yt.a)(Object(Yt.a)({},n),{},{tasks:[].concat(Object(Xt.a)(n.tasks),[t.payload])});case h:return Object(Yt.a)(Object(Yt.a)({},n),{},{tasks:n.tasks.filter((function(n){return n.id!==t.payload.id}))});case g:return Object(Yt.a)(Object(Yt.a)({},n),{},{tasks:n.tasks.map((function(n){return n.id===t.payload.id?Object(Yt.a)(Object(Yt.a)({},n),{},{description:t.payload.description}):n}))});case k:return Object(Yt.a)(Object(Yt.a)({},n),{},{comments:[].concat(Object(Xt.a)(n.comments),[t.payload])});case v:return Object(Yt.a)(Object(Yt.a)({},n),{},{comments:n.comments.map((function(n){return n.id===t.payload.id?Object(Yt.a)(Object(Yt.a)({},n),{},{text:t.payload.text}):n}))});case y:return Object(Yt.a)(Object(Yt.a)({},n),{},{comments:n.comments.filter((function(n){return n.id!==t.payload.id}))});default:return n}}));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{store:ne,children:Object(r.jsx)(qt,{})})}),document.getElementById("root")),$t()}},[[42,1,2]]]);
//# sourceMappingURL=main.a4c60870.chunk.js.map