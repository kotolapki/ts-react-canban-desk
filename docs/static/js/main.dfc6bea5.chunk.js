(this["webpackJsonpts-trello"]=this["webpackJsonpts-trello"]||[]).push([[0],{35:function(n,t,e){},36:function(n,t,e){},37:function(n,t,e){},38:function(n,t,e){},39:function(n,t,e){},42:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(1),i=e.n(o),a=e(9),c=e.n(a),u=e(10),s=e(4),b=e(2),d=(e(35),e(36),e(37),e(38),e(39),e(3)),l=e(6),p="SET_USERNAME",f="ADD_NEW_DESK",j="UPDATE_DESK_TITLE",x="REMOVE_DESK",m="REMOVE_ALL_DESKS",O="ADD_NEW_TASK",h="REMOVE_TASK",g="UPDATE_TASK_DESCRIPTION",v="ADD_NEW_COMMENT",k="UPDATE_COMMENT",y="REMOVE_COMMENT",w=e(44);function C(n){return{type:p,payload:{username:n}}}function z(){var n=Object(b.a)(["\n  padding: 8px 15px;\n  font-size: 22px;\n  color: white;\n  text-transform: uppercase;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return z=function(){return n},n}function E(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: none;\n  border-bottom: 1px solid black;\n"]);return E=function(){return n},n}function S(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  font-size: 36px;\n  font-weight: 300;\n"]);return S=function(){return n},n}function D(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return D=function(){return n},n}function F(){var n=Object(b.a)(["\n  padding: 30px 80px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid black;\n  border-radius: 10px;\n"]);return F=function(){return n},n}var T=function(){var n=Object(s.b)(),t=Object(o.useState)(""),e=Object(l.a)(t,2),i=e[0],a=e[1];return Object(r.jsx)(I,{children:Object(r.jsxs)(_,{onSubmit:function(t){t.preventDefault(),n(C(i))},children:[Object(r.jsx)(P,{htmlFor:"login",children:"Enter your name"}),Object(r.jsx)(A,{type:"text",name:"login",id:"login",autoComplete:"off",placeholder:"Your name",value:i,onChange:function(n){a(n.target.value)},required:!0}),Object(r.jsx)(N,{type:"submit",children:"Confirm"})]})})},I=d.a.div(F()),_=d.a.form(D()),P=d.a.label(S()),A=d.a.input(E()),N=d.a.button(z());function B(n){return n}function M(n){return n.username}function V(n){return function(t){return t.comments.filter((function(t){return t.taskId===n}))}}function L(){var n=Object(b.a)(["\n  margin-right: 15px;\n  font-size: 20px;\n  border: none;\n  border-image: initial;\n  border-bottom: 1px solid black;\n"]);return L=function(){return n},n}function R(){var n=Object(b.a)(["\n  margin-right: 15px;\n  font-size: 20px;\n  align-self: center;\n"]);return R=function(){return n},n}function K(){var n=Object(b.a)(["\n  display: flex;\n  align-content: stretch;\n"]);return K=function(){return n},n}function W(){var n=Object(b.a)(["\n  margin-right: 0;\n"]);return W=function(){return n},n}function q(){var n=Object(b.a)(["\n  margin-right: 20px;\n  padding: 3px 10px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return q=function(){return n},n}function H(){var n=Object(b.a)(["\n  margin-right: 20px;\n  font-size: 36px;\n  font-weight: 700;\n"]);return H=function(){return n},n}function J(){var n=Object(b.a)(["\n  margin-bottom: 30px;\n  padding-top: 40px;\n  display: flex;\n  justify-content: center;\n"]);return J=function(){return n},n}var U=function(){var n=Object(s.b)(),t=Object(s.c)(M),e=Object(o.useState)(""),i=Object(l.a)(e,2),a=i[0],c=i[1];return Object(r.jsxs)(X,{children:[Object(r.jsxs)(Y,{children:["Hello, ",t,"!"]}),Object(r.jsx)(G,{type:"button",onClick:function(){return n(C(""))},children:"Change user"}),Object(r.jsxs)(Z,{onSubmit:function(t){t.preventDefault(),n({type:f,payload:{title:a,id:Object(w.a)()}}),t.currentTarget.reset()},children:[Object(r.jsx)($,{htmlFor:"deskname",children:"Enter new deskname"}),Object(r.jsx)(nn,{type:"text",name:"deskname",id:"deskname",placeholder:"Desk name",autoComplete:"off",onChange:function(n){c(n.target.value)},required:!0}),Object(r.jsx)(G,{type:"submit",children:"Confirm"})]}),Object(r.jsx)(Q,{onClick:function(){return n({type:m})},children:"Remove all desks"})]})},X=d.a.header(J()),Y=d.a.p(H()),G=d.a.button(q()),Q=Object(d.a)(G)(W()),Z=d.a.form(K()),$=d.a.label(R()),nn=d.a.input(L());function tn(){var n=Object(b.a)(["\n  margin: 0px auto 10px;\n  width: min-content;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 800;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid black;\n"]);return tn=function(){return n},n}function en(){var n=Object(b.a)(["\n  font-size: 0;\n"]);return en=function(){return n},n}function rn(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  width: 100%;\n  display: flex;\n"]);return rn=function(){return n},n}var on=function(n){var t=n.title,e=n.deskId,i=n.changeFormVisibility,a=n.onBlurHideHeaderForm,c=Object(s.b)(),u=Object(o.useState)(t),b=Object(l.a)(u,2),d=b[0],p=b[1],f=Object(o.useRef)(null);return Object(o.useEffect)((function(){null!==f.current&&f.current.focus()}),[]),Object(r.jsxs)(an,{onSubmit:function(n){n.preventDefault(),c(function(n,t){return{type:j,payload:{title:n,id:t}}}(d,e)),i()},onBlur:a,children:[Object(r.jsx)(cn,{children:"Change desk name"}),Object(r.jsx)(un,{type:"text",ref:f,name:"deskName",id:"deskName",placeholder:d,value:d,autoComplete:"off",onChange:function(n){p(n.target.value)},required:!0})]})},an=d.a.form(rn()),cn=d.a.label(en()),un=d.a.input(tn());function sn(){var n=Object(b.a)(["\n  width: 28px;\n  height: 28px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n\n  &::before {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 13px;\n    left: 2px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 13px;\n    left: 2px;\n    transform: rotate(45deg);\n  }\n"]);return sn=function(){return n},n}function bn(){var n=Object(b.a)(["\n  margin-right: 10px;\n  padding: 4px 10px;\n  font-size: 16px;\n  color: white;\n  background-color: black;\n  text-transform: uppercase;\n  border-radius: 5px;\n"]);return bn=function(){return n},n}function dn(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  display: flex;\n"]);return dn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  font-size: 18px;\n  border: 2px solid black;\n  border-radius: 5px;\n  resize: none;\n  outline: none;\n  box-sizing: border-box;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n"]);return ln=function(){return n},n}function pn(){var n=Object(b.a)(["\n  font-size: 0;\n"]);return pn=function(){return n},n}function fn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return fn=function(){return n},n}var jn=function(n){var t=n.onClickChangeTaskDescriptionFormVisibility,e=n.initialValue,i=n.taskId,a=Object(s.b)(),c=Object(o.useState)(e),u=Object(l.a)(c,2),b=u[0],d=u[1];return Object(r.jsxs)(xn,{onSubmit:function(n){n.preventDefault(),a({type:g,payload:{description:b,id:i}}),t()},onClick:function(n){return n.stopPropagation()},children:[Object(r.jsx)(mn,{htmlFor:"taskDescription",children:"Change description"}),Object(r.jsx)(On,{name:"taskDescription",placeholder:"Add task description",autoComplete:"off",type:"text",id:"taskDescription",value:b,onChange:function(n){d(n.target.value)}}),Object(r.jsxs)(hn,{children:[Object(r.jsx)(gn,{type:"submit",children:"Confirm"}),Object(r.jsx)(vn,{type:"button",onClick:function(){t()}})]})]})},xn=d.a.form(fn()),mn=d.a.label(pn()),On=d.a.input(ln()),hn=d.a.div(dn()),gn=d.a.button(bn()),vn=d.a.button(sn());function kn(){var n=Object(b.a)(["\n  width: 28px;\n  height: 28px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n\n  &::before {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 13px;\n    left: 2px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: '';\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 13px;\n    left: 2px;\n    transform: rotate(45deg);\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(b.a)(["\n  margin-right: 10px;\n  padding: 4px 10px;\n  font-size: 16px;\n  color: white;\n  background-color: black;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 5px;\n"]);return yn=function(){return n},n}function wn(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  display: flex;\n"]);return wn=function(){return n},n}function Cn(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n  resize: none;\n  box-sizing: border-box;\n  background: Silver;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(b.a)(["\n  font-size: 0;\n"]);return zn=function(){return n},n}function En(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return En=function(){return n},n}var Sn=function(n){var t=n.taskId,e=n.onFocusShowCommentBtnsWrapper,i=n.hasCommentFormFocused,a=n.hideCommentBtnsWrapper,c=Object(s.c)(M),u=Object(s.b)(),b=Object(o.useState)(""),d=Object(l.a)(b,2),p=d[0],f=d[1];return Object(r.jsxs)(Dn,{onSubmit:function(n){var e;n.preventDefault(),u((e=t,{type:v,payload:{author:c,text:p,id:Object(w.a)(),taskId:e}})),a(),n.currentTarget.reset()},onClick:function(n){return n.stopPropagation()},children:[Object(r.jsx)(Fn,{htmlFor:"comment",children:"Enter new comment"}),Object(r.jsx)(Tn,{name:"comment",placeholder:"Add new comment",autoComplete:"off",type:"text",id:"comment",onFocus:function(){return e()},onChange:function(n){f(n.target.value)},required:!0}),i&&Object(r.jsxs)(In,{children:[Object(r.jsx)(_n,{type:"submit",children:"Confirm"}),Object(r.jsx)(Pn,{type:"button","aria-label":"hide comment controls",onClick:function(){return a()}})]})]})},Dn=d.a.form(En()),Fn=d.a.label(zn()),Tn=d.a.input(Cn()),In=d.a.div(wn()),_n=d.a.button(yn()),Pn=d.a.button(kn());function An(){var n=Object(b.a)(["\n  margin-bottom: 5px;\n  padding: 3px;\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid black;\n  border-radius: 5px;\n  resize: none;\n  box-sizing: border-box;\n"]);return An=function(){return n},n}function Nn(){var n=Object(b.a)(["\n  font-size: 0;\n"]);return Nn=function(){return n},n}function Bn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Bn=function(){return n},n}function Mn(){var n=Object(b.a)(["\n  margin-right: 10px;\n  padding: 3px 5px;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return Mn=function(){return n},n}function Vn(){var n=Object(b.a)(["\n  display: flex;\n  align-items: flex-start;\n"]);return Vn=function(){return n},n}function Ln(){var n=Object(b.a)(["\n  margin-bottom: 5px;\n  font-size: 16px;\n"]);return Ln=function(){return n},n}function Rn(){var n=Object(b.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  font-weight: 800;\n"]);return Rn=function(){return n},n}function Kn(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n"]);return Kn=function(){return n},n}var Wn=function(n){var t=n.comment,e=Object(s.c)(M),i=Object(s.b)(),a=Object(o.useState)(!1),c=Object(l.a)(a,2),u=c[0],b=c[1],d=Object(o.useState)(t.text),p=Object(l.a)(d,2),f=p[0],j=p[1];return Object(r.jsxs)(qn,{onClick:function(n){return n.stopPropagation()},children:[Object(r.jsx)(Hn,{children:t.author}),u?Object(r.jsxs)(Yn,{onSubmit:function(n){var e,r;n.preventDefault(),i((e=f,r=t.id,{type:k,payload:{text:e,id:r}})),b(!1)},children:[Object(r.jsx)(Gn,{children:"Change comment"}),Object(r.jsx)(Qn,{name:"changeComment",placeholder:"comment text",autoComplete:"off",type:"text",id:"changeComment",value:f,onChange:function(n){j(n.target.value)}}),Object(r.jsxs)(Un,{children:[Object(r.jsx)(Xn,{type:"submit",children:"Confirm"}),Object(r.jsx)(Xn,{type:"button",onClick:function(){b(!1),j(t.text)},children:"Cancel"})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Jn,{children:t.text}),e===t.author&&Object(r.jsxs)(Un,{children:[Object(r.jsx)(Xn,{type:"button",onClick:function(){b(!0),j(t.text)},children:"change"}),Object(r.jsx)(Xn,{type:"button",onClick:function(){return i((n=t.id,{type:y,payload:{id:n}}));var n},children:"delete"})]})]})]})},qn=d.a.li(Kn()),Hn=d.a.p(Rn()),Jn=d.a.p(Ln()),Un=d.a.div(Vn()),Xn=d.a.button(Mn()),Yn=d.a.form(Bn()),Gn=d.a.label(Nn()),Qn=d.a.input(An());function Zn(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 18px;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 600;\n"]);return $n=function(){return n},n}function nt(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n"]);return nt=function(){return n},n}function tt(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n"]);return tt=function(){return n},n}function et(){var n=Object(b.a)(["\n  margin-top: 5px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 3px;\n\n  &::before {\n    content: '';\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 9px;\n    left: 3px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: '';\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 9px;\n    left: 3px;\n    transform: rotate(45deg);\n  }\n"]);return et=function(){return n},n}function rt(){var n=Object(b.a)(["\n  font-size: 26px;\n  font-weight: 800;\n"]);return rt=function(){return n},n}function ot(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n"]);return ot=function(){return n},n}function it(){var n=Object(b.a)(["\n  padding: 20px;\n  width: 500px;\n  position: absolute;\n  z-index: 2;\n  top: 150px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 1px solid black;\n  border-radius: 10px;\n  background-color: white;\n"]);return it=function(){return n},n}function at(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.8);\n"]);return at=function(){return n},n}var ct=function(n){var t=n.deskname,e=n.task,i=n.onClickChangeTaskPopupVisibility,a=Object(s.c)(V(e.id)),c=Object(o.useState)(!1),u=Object(l.a)(c,2),b=u[0],d=u[1],p=Object(o.useState)(!1),f=Object(l.a)(p,2),j=f[0],x=f[1];function m(){d((function(n){return!n}))}return Object(o.useEffect)((function(){function n(n){"Escape"===n.key&&i()}return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[i]),Object(o.useEffect)((function(){function n(n){d(!1)}return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}),[b]),Object(r.jsx)(ut,{id:"overlay",onClick:function(n){var t=n.target;"overlay"!==t.id&&"hidePopupBtn"!==t.id||i(),x(!1)},children:Object(r.jsxs)(st,{children:[Object(r.jsxs)(bt,{children:[Object(r.jsx)(dt,{children:e.title}),Object(r.jsx)(lt,{type:"button","aria-label":"hide task window",id:"hidePopupBtn"})]}),Object(r.jsxs)(pt,{children:["\u0412 \u0434\u043e\u0441\u043a\u0435: ",t]}),Object(r.jsxs)(ft,{children:["\u0410\u0432\u0442\u043e\u0440: ",e.author]}),Object(r.jsx)(jt,{children:"Task description"}),b?Object(r.jsx)(jn,{onClickChangeTaskDescriptionFormVisibility:m,initialValue:e.description,taskId:e.id}):Object(r.jsx)(xt,{onClick:function(n){n.stopPropagation(),m()},children:e.description?e.description:"Add task description"}),Object(r.jsx)(Sn,{taskId:e.id,onFocusShowCommentBtnsWrapper:function(){x(!0)},hasCommentFormFocused:j,hideCommentBtnsWrapper:function(){x(!1)}}),Object(r.jsx)("ul",{children:a.length>=1&&a.map((function(n){return Object(r.jsx)(Wn,{comment:n},n.id)}))})]})})},ut=d.a.div(at()),st=d.a.div(it()),bt=d.a.div(ot()),dt=d.a.h3(rt()),lt=d.a.button(et()),pt=d.a.p(tt()),ft=d.a.p(nt()),jt=d.a.label($n()),xt=d.a.p(Zn());function mt(){var n=Object(b.a)(["\n  text-align: right;\n"]);return mt=function(){return n},n}function Ot(){var n=Object(b.a)(['\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-color: black;\n  border: none;\n  border-radius: 3px;\n\n  &::before {\n    content: "";\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    bottom: 9px;\n    left: 3px;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    content: "";\n    width: 15px;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 9px;\n    left: 3px;\n    transform: rotate(45deg);\n  }\n']);return Ot=function(){return n},n}function ht(){var n=Object(b.a)(["\n  font-size: 18px;\n"]);return ht=function(){return n},n}function gt(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom-right-radius: 3px;\n  border-bottom: 1px solid black;\n"]);return gt=function(){return n},n}function vt(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  cursor: pointer;\n"]);return vt=function(){return n},n}var kt=function(n){var t=n.task,e=n.deskname,i=Object(s.c)(V(t.id)),a=Object(s.b)(),c=Object(o.useState)(!1),u=Object(l.a)(c,2),b=u[0],d=u[1];function p(){d((function(n){return!n}))}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(yt,{onClick:p,children:[Object(r.jsxs)(wt,{children:[Object(r.jsx)(Ct,{children:t.title}),Object(r.jsx)(zt,{"aria-label":"delete task",onClick:function(n){var e;n.stopPropagation(),a((e=t.id,{type:h,payload:{id:e}}))}})]}),Object(r.jsxs)(Et,{children:["comments: ",i.length]})]}),b&&Object(r.jsx)(ct,{deskname:e,task:t,onClickChangeTaskPopupVisibility:p})]})},yt=d.a.li(vt()),wt=d.a.div(gt()),Ct=d.a.p(ht()),zt=d.a.button(Ot()),Et=d.a.p(mt());function St(){var n=Object(b.a)(["\n  padding: 5px 20px;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: white;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: black;\n"]);return St=function(){return n},n}function Dt(){var n=Object(b.a)(["\n  margin-right: 10px;\n  font-size: 18px;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-image: initial;\n  border-bottom: 1px solid black;\n  background-color: transparent;\n"]);return Dt=function(){return n},n}function Ft(){var n=Object(b.a)(["\n  font-size: 0;\n"]);return Ft=function(){return n},n}function Tt(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n"]);return Tt=function(){return n},n}function It(){var n=Object(b.a)(["\n  padding: 3px 5px;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 5px;\n"]);return It=function(){return n},n}function _t(){var n=Object(b.a)(["\n  margin-right: 25px;\n  font-size: 24px;\n  font-weight: 800;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n"]);return _t=function(){return n},n}function Pt(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: flex-end;\n"]);return Pt=function(){return n},n}function At(){var n=Object(b.a)(["\n  margin-right: 7px;\n  margin-bottom: 20px;\n  padding: 10px;\n  min-width: 300px;\n  height: fit-content;\n  background-color: snow;\n  border: 2px solid black;\n  border-radius: 10px;\n\n  &:nth-child(4n) {\n    margin-right: 0;\n  }\n"]);return At=function(){return n},n}var Nt=function(n){var t=n.title,e=n.deskId,i=Object(s.c)(M),a=Object(s.c)(function(n){return function(t){return t.tasks.filter((function(t){return t.deskId===n}))}}(e)),c=Object(s.b)(),u=Object(o.useState)(!1),b=Object(l.a)(u,2),d=b[0],p=b[1],f=Object(o.useState)(""),j=Object(l.a)(f,2),m=j[0],h=j[1];return Object(r.jsxs)(Bt,{children:[Object(r.jsx)(Mt,{children:d?Object(r.jsx)(on,{title:t,deskId:e,changeFormVisibility:function(){p((function(n){return!n}))},onBlurHideHeaderForm:function(){p(!1)}}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Vt,{onClick:function(){return p(!0)},children:t}),Object(r.jsx)(Lt,{type:"button",onClick:function(){c(function(n){return{type:x,payload:{deskId:n}}}(e))},children:"Remove desk"})]})}),Object(r.jsxs)(Rt,{onSubmit:function(n){n.preventDefault(),c(function(n,t,e){return{type:O,payload:{title:n,id:Object(w.a)(),description:"",author:e,deskId:t}}}(m,e,i)),h("")},children:[Object(r.jsx)(Kt,{htmlFor:"newTask",children:"New task"}),Object(r.jsx)(Wt,{type:"text",name:"newTask",id:"newTask",placeholder:"New task",autoComplete:"off",value:m,onChange:function(n){h(n.target.value)},required:!0}),Object(r.jsx)(qt,{type:"submit",children:"Confirm"})]}),Object(r.jsx)("ul",{children:a.map((function(n){return Object(r.jsx)(kt,{task:n,deskname:t},n.id)}))})]})},Bt=d.a.div(At()),Mt=d.a.div(Pt()),Vt=d.a.h2(_t()),Lt=d.a.button(It()),Rt=d.a.form(Tt()),Kt=d.a.label(Ft()),Wt=d.a.input(Dt()),qt=d.a.button(St());function Ht(){var n=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Ht=function(){return n},n}function Jt(){var n=Object(b.a)(["\n  font-size: 0;\n"]);return Jt=function(){return n},n}function Ut(){var n=Object(b.a)(["\n  margin: 0 auto;\n  width: 1424px;\n"]);return Ut=function(){return n},n}var Xt=function(){var n=Object(s.c)(B),t=Boolean(n.username);return Object(o.useEffect)((function(){localStorage.setItem("state",JSON.stringify(n))}),[n]),Object(r.jsxs)(Yt,{children:[Object(r.jsx)(Gt,{children:"Canban desk"}),t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U,{}),Object(r.jsx)(Qt,{children:n.desks.map((function(n){return Object(r.jsx)(Nt,{title:n.title,deskId:n.id},n.id)}))})]}):Object(r.jsx)(T,{})]})},Yt=d.a.div(Ut()),Gt=d.a.h1(Jt()),Qt=d.a.div(Ht()),Zt=e(12),$t=e(5),ne=localStorage.getItem("state"),te={username:"",desks:[],tasks:[],comments:[]},ee=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),r(n),o(n),i(n),a(n)}))},re=Object(u.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne?JSON.parse(ne):te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object($t.a)(Object($t.a)({},n),{},{username:t.payload.username});case f:return Object($t.a)(Object($t.a)({},n),{},{desks:[].concat(Object(Zt.a)(n.desks),[t.payload])});case j:return Object($t.a)(Object($t.a)({},n),{},{desks:n.desks.map((function(n){return n.id===t.payload.id?Object($t.a)(Object($t.a)({},n),{},{title:t.payload.title}):n}))});case x:return Object($t.a)(Object($t.a)({},n),{},{desks:n.desks.filter((function(n){return n.id!==t.payload.deskId}))});case m:return te;case O:return Object($t.a)(Object($t.a)({},n),{},{tasks:[].concat(Object(Zt.a)(n.tasks),[t.payload])});case h:return Object($t.a)(Object($t.a)({},n),{},{tasks:n.tasks.filter((function(n){return n.id!==t.payload.id}))});case g:return Object($t.a)(Object($t.a)({},n),{},{tasks:n.tasks.map((function(n){return n.id===t.payload.id?Object($t.a)(Object($t.a)({},n),{},{description:t.payload.description}):n}))});case v:return Object($t.a)(Object($t.a)({},n),{},{comments:[].concat(Object(Zt.a)(n.comments),[t.payload])});case k:return Object($t.a)(Object($t.a)({},n),{},{comments:n.comments.map((function(n){return n.id===t.payload.id?Object($t.a)(Object($t.a)({},n),{},{text:t.payload.text}):n}))});case y:return Object($t.a)(Object($t.a)({},n),{},{comments:n.comments.filter((function(n){return n.id!==t.payload.id}))});default:return n}}));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{store:re,children:Object(r.jsx)(Xt,{})})}),document.getElementById("root")),ee()}},[[42,1,2]]]);
//# sourceMappingURL=main.dfc6bea5.chunk.js.map