(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{195:function(e,a,t){e.exports=t(323)},321:function(e,a,t){},323:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),o=t.n(r),c=(t(200),t(190)),i=t(24),u=t(45),s=function(e){var a=e.title,t=e.children;return l.a.createElement("div",{className:"card md-3",style:{marginBottom:"15px"}},a&&l.a.createElement("h3",{className:"card-header"}," ",a," "),l.a.createElement("div",{className:"card-body"},t))},d=t(330),m=t(326),v=t(327),b=t(129),f=t.n(b),E=function(e){var a=e.healthPlansList,t=null===a||void 0===a?void 0:a.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.nome_plano_ans),l.a.createElement("td",null,e.operadora),l.a.createElement("td",null,e.plano),l.a.createElement("td",null,e.abrangencia),l.a.createElement("td",null,e.segmentacao))}));return l.a.createElement("table",{className:"table table-houver"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," Nome do plano "),l.a.createElement("th",{scope:"col"}," Operadora "),l.a.createElement("th",{scope:"col"}," Plano "),l.a.createElement("th",{scope:"col"}," Abrang\xeancia "),l.a.createElement("th",{scope:"col"}," Segmenta\xe7\xe3o "))),l.a.createElement("tbody",null,t))},h=[{value:"RO",label:"Rond\xf4nia"},{value:"AC",label:"Acre"},{value:"AM",label:"Amazonas"},{value:"RR",label:"Roraima"},{value:"PA",label:"Par\xe1"},{value:"AP",label:"Amap\xe1"},{value:"TO",label:"Tocantins"},{value:"MA",label:"Maranh\xe3o"},{value:"PI",label:"Piau\xed"},{value:"CE",label:"Cear\xe1"},{value:"RN",label:"Rio Grande do Norte"},{value:"PB",label:"Para\xedba"},{value:"PE",label:"Pernambuco"},{value:"AL",label:"Alagoas"},{value:"SE",label:"Sergipe"},{value:"BA",label:"Bahia"},{value:"MG",label:"Minas Gerais"},{value:"ES",label:"Esp\xedrito Santo"},{value:"RJ",label:"Rio de Janeiro"},{value:"SP",label:"S\xe3o Paulo"},{value:"PR",label:"Paran\xe1"},{value:"SC",label:"Santa Catarina"},{value:"RS",label:"Rio Grande do Sul"},{value:"MS",label:"Mato Grosso do Sul"},{value:"MT",label:"Mato Grosso"},{value:"GO",label:"Goi\xe1s"},{value:"DF",label:"Distrito Federal"}],p=t(29),g=t(31),O=t(334),j=t(124),S=t(333),y=t(176),C=function(e){return l.a.createElement("div",null,l.a.createElement("ul",null,e&&Object(y.isArray)(e)&&e.map((function(e,a){return l.a.createElement("li",{key:a},e)}))))},k=function(e){var a=e.children,t=e.showValidationErrors,n=e.icon,r=void 0===n?l.a.createElement(O.a,null):n,o=e.disabled,c=Object(g.a)(e,["children","showValidationErrors","icon","disabled"]),i=function(e,t,n){return l.a.createElement(j.a,Object.assign({loading:e,disabled:o||!t||e||Object.values(n).every((function(e){return null===e||void 0===e})),type:"primary",htmlType:"submit",icon:r},c),a)};return l.a.createElement(p.a,null,(function(e){var a=e.form,n=a.isSubmitting,r=a.values,o=a.isValid,c=a.errors;return l.a.createElement(l.a.Fragment,null,t&&!o?l.a.createElement(S.a,{title:"Erros de valida\xe7\xe3o",content:C(Object.values(c)),trigger:"hover"},i(n,o,r)):i(n,o,r))}))},B=t(329),P=function(e){var a=Object.assign({},e);return l.a.createElement(p.a,null,(function(e){var t=e.form,n=t.handleReset,r=t.handleSubmit;return l.a.createElement(B.a,Object.assign({onReset:n,onSubmitCapture:r},a))}))};P.Item=function(e){var a=e.name,t=e.showValidateSuccess,n=e.showInitialErrorAfterTouched,r=void 0!==n&&n,o=e.children,c=e.validate,i=Object(g.a)(e,["name","showValidateSuccess","showInitialErrorAfterTouched","children","validate"]);return l.a.createElement(p.a,{name:a,validate:c},(function(e){var n=e.form,c=n.errors,u=void 0===c?{}:c,s=n.touched,d=void 0===s?{}:s,m=n.initialErrors,v=void 0===m?{}:m,b=Object(p.c)(u,a,void 0),f=Object(p.c)(v,a,void 0),E=Object(p.c)(d,a,!1);Array.isArray(E)&&(E=E.reduce((function(e,a){return e||a}),!1));var h=void 0!==b&&E,g=void 0!==f,O=!b&&E,j=h||g&&(!E||r);return l.a.createElement(B.a.Item,Object.assign({validateStatus:h||g&&!E?"error":O&&t?"success":void 0,hasFeedback:O,help:j&&l.a.createElement(l.a.Fragment,null,h&&l.a.createElement("li",null,b),g&&(!E||r)&&l.a.createElement("li",null,f))},i),o)}))};var w=P,A=t(331),F=function(e){var a=e.name,t=e.validate,n=e.children,r=e.onChange,o=e.onBlur,c=Object(g.a)(e,["name","validate","children","onChange","onBlur"]);return l.a.createElement(p.a,{name:a,validate:t},(function(e){var t=e.field.value,i=e.form,u=i.setFieldValue,s=i.setFieldTouched;return l.a.createElement(A.a,Object.assign({onChange:function(e,t){u(a,e),setTimeout((function(){s(a)}),300),r&&r(e,t)},onBlur:function(e){s(a),o&&o(e)},value:t},c),n)}))};F.renderOptions=function(e){return e.map((function(e,a){var t=e.label,n=Object(g.a)(e,["label"]);return l.a.createElement(A.a.Option,Object.assign({key:"select-option-".concat(a)},n),t)}))},F.Option=A.a.Option,F.OptGroup=A.a.OptGroup;var R=F,N=t(332),D=t(99),q=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(g.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?D.a:N.a;return l.a.createElement(p.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,s=t.onChange,d=t.onBlur;return l.a.createElement(i,Object.assign({name:a,value:u,mask:n,onChange:function(e){s(e),r&&r(e)},onBlur:function(e){d(e),o&&o(e)}},c))}))};q.Search=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(g.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?D.a:N.a;return l.a.createElement(p.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,s=t.onChange,d=t.onBlur;return l.a.createElement(i.Search,Object.assign({name:a,value:u,mask:n,onChange:function(e){s(e),r&&r(e)},onBlur:function(e){d(e),o&&o(e)}},c))}))},q.Password=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(g.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?D.a:N.a;return l.a.createElement(p.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,s=t.onChange,d=t.onBlur;return l.a.createElement(i.Password,Object.assign({name:a,value:u,mask:n,onChange:function(e){s(e),r&&r(e)},onBlur:function(e){d(e),o&&o(e)}},c))}))},q.TextArea=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(g.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?D.a:N.a;return l.a.createElement(p.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,s=t.onChange,d=t.onBlur;return l.a.createElement(i.TextArea,Object.assign({name:a,value:u,mask:n,onChange:function(e){s(e),r&&r(e)},onBlur:function(e){d(e),o&&o(e)}},c))}))};var I=q,M=t(328),T=t(25),G=t.n(T);function x(e){return e&&e>G()().endOf("day")}function V(e){return e&&e<G()().endOf("day")}var L,z=function(e){var a=e.name,t=e.validate,n=e.onChange,r=e.disabledDates,o=void 0!==r&&r,c=e.disableDatesLarger,i=void 0!==c&&c,u=Object(g.a)(e,["name","validate","onChange","disabledDates","disableDatesLarger"]);return l.a.createElement(p.a,{name:a,validate:t},(function(e){var t,r=e.field.value,c=e.form,s=c.setFieldValue,d=c.setFieldTouched;return l.a.createElement(M.a,Object.assign({value:r?G()(r):void 0,onChange:function(e,t){s(a,e?e.toISOString():null),d(a,!0,!1),n&&n(e,t)},disabledDate:o?(t=i,t?x:V):void 0},u))}))},J=t(71),Y=t(77),_=function(e){return"O campo '".concat(e,"' \xe9 obrigat\xf3rio")},H=Y.a().shape((L={uf:Y.b().required(_("estado")),cidade:Y.b().required(_("cidade")),profissao:Y.b().required(_("profissao"))},Object(J.a)(L,"profissao",Y.b().required(_("entidade"))),Object(J.a)(L,"datanascimento",Y.b().required(_("data de nascimento"))),L)),K="http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com",Q=d.a,U=function(){var e=Object(n.useState)(),a=Object(u.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(),c=Object(u.a)(o,2),i=c[0],d=c[1],b=Object(n.useState)([]),g=Object(u.a)(b,2),O=g[0],j=g[1],S=Object(n.useState)(""),y=Object(u.a)(S,2),C=y[0],B=y[1],P=Object(n.useState)([]),A=Object(u.a)(P,2),F=A[0],N=A[1],D=Object(n.useState)([]),q=Object(u.a)(D,2),M=(q[0],q[1],Object(n.useState)()),T=Object(u.a)(M,2),x=T[0],V=T[1],L=function(){""!==C&&(console.log(O),void 0!==O&&O.length>0&&(console.log("aqui"),f.a.get("".concat(K,"/profissao/").concat(O,"/").concat(C,"?").concat("api-key=ddd70c32-fc98-4618-b494-a9698f824353")).then((function(e){r(e.data)})).catch((function(e){console.log(e.response)}))))};return Object(n.useEffect)((function(){null!==O&&""!==C&&L()}),[O,C]),Object(n.useEffect)((function(){console.log(C),null!==O&&""!==C&&null!==F&&void 0!==F&&f.a.get("".concat(K,"/entidade/").concat(F,"/").concat(O,"/").concat(C,"?").concat("api-key=4b94dba2-5524-4632-939b-92df1c50a645")).then((function(e){d(e.data)})).catch((function(e){console.log(e.response)}))}),[F]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Pesquisa por planos dispon\xedveis"},l.a.createElement(m.a,{gutter:[20,20]},l.a.createElement(p.b,{initialValues:{},validationSchema:H,validateOnMount:!0,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;!function(e){f.a.post("".concat(K,"/plano?").concat("api-key=261fd4d0-fd9f-468a-afa9-f5a89ed3701c"),{entidade:e.entidade,uf:e.uf,cidade:e.cidade,datanascimento:[e.datanascimento.split("T")[0]]}).then((function(e){var a;V(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.planos)})).catch((function(e){console.log(e.response)}))}(e),t(!1),n()}},l.a.createElement(w,{layout:"vertical",style:{width:"100%"}},l.a.createElement(m.a,{gutter:[20,20]},l.a.createElement(v.a,{md:12},l.a.createElement(w.Item,{name:"uf",required:!0,label:"Estado"},l.a.createElement(R,{name:"uf",placeholder:"Selecione o estado",style:{width:"100%"},onSelect:function(e){return j(e)}},h.map((function(e,a){return l.a.createElement(R.Option,{key:a,value:e.value},e.label)}))))),l.a.createElement(v.a,{md:12},l.a.createElement(w.Item,{name:"cidade",required:!0,label:"Cidade"},l.a.createElement(I.Search,{name:"cidade",enterButton:!0,placeholder:"Digite a cidade",onSearch:function(e){L(),B(e)}})))),l.a.createElement(m.a,{gutter:[20,20]},l.a.createElement(v.a,{md:12},l.a.createElement(w.Item,{name:"profissao",required:!0,label:"Profiss\xe3o"},l.a.createElement(R,{name:"profissao",placeholder:"Selecione a profiss\xe3o",style:{width:"100%"},onSelect:function(e){return N(e)}},null===t||void 0===t?void 0:t.map((function(e,a){return l.a.createElement(R.Option,{key:a,value:e.profissao},e.profissao)}))))),l.a.createElement(v.a,{md:12},l.a.createElement(w.Item,{name:"entidade",required:!0,label:"Entidade"},l.a.createElement(R,{name:"entidade",placeholder:"Selecione a entidade",style:{width:"100%"}},null===i||void 0===i?void 0:i.map((function(e,a){return l.a.createElement(R.Option,{key:a,value:e.NomeFantasia},e.RazaoSocial)})))))),l.a.createElement(m.a,null,l.a.createElement(v.a,{md:12},l.a.createElement(w.Item,{name:"datanascimento",required:!0,label:"Data de nascimento"},l.a.createElement(z,{name:"datanascimento",format:"DD/MM/YYYY",style:{width:"100%"},ranges:{Hoje:[G()().startOf("day"),G()()],"\xdaltima semana":[G()().subtract(1,"weeks"),G()()],"\xdaltimo m\xeas":[G()().subtract(1,"months"),G()()],"\xdaltimo ano":[G()().subtract(1,"years"),G()()]},disabledDates:!0,disableDatesLarger:!0})))),l.a.createElement(v.a,{md:24,justify:"end"},l.a.createElement(k,{showValidationErrors:!0,icon:null},"Enviar")))))),l.a.createElement(l.a.Fragment,null,(null===x||void 0===x?void 0:x.length)>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null,l.a.createElement(Q,{style:{fontSize:"24px"}}," Lista de planos dispon\xedveis")),l.a.createElement(E,{healthPlansList:x}))))},W=function(){return l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",component:U,exact:!0})))},X=(t(321),function(e){var a=e.href,t=e.label,n=Object(g.a)(e,["href","label"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{onClick:n.onClick,className:"nav-link",href:a,style:{fontSize:"20px"}},t)))}),Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navbar navbar-expand-sm fixed-top navbar-dark bg-primary"},l.a.createElement("div",{className:"container",style:{margin:0}},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(X,{href:"#/health-plain",label:"Planos de sa\xfade"}))))))},$=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z,null),l.a.createElement("div",{className:"container"},l.a.createElement(W,null)))};t(322);o.a.render(l.a.createElement($,null),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.bf4e0f83.chunk.js.map