(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{152:function(e,a,t){e.exports=t(248)},246:function(e,a,t){},248:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),o=t.n(r),c=(t(157),t(149)),i=t(51),u=t(52),m=function(e){var a=e.title,t=e.children;return l.a.createElement("div",{className:"card md-3",style:{marginBottom:"15px"}},a&&l.a.createElement("h3",{className:"card-header"}," ",a," "),l.a.createElement("div",{className:"card-body"},t))},s=t(254),d=t(251),v=t(252),b=t(99),E=t.n(b),f=function(e){var a=e.label,t=e.htmlFor,n=e.children;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:t},a),n)},h=function(e){var a=e.healthPlansList,t=null===a||void 0===a?void 0:a.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.nome_plano_ans),l.a.createElement("td",null,e.operadora),l.a.createElement("td",null,e.plano),l.a.createElement("td",null,e.abrangencia),l.a.createElement("td",null,e.segmentacao))}));return l.a.createElement("table",{className:"table table-houver"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," Nome do plano "),l.a.createElement("th",{scope:"col"}," Operadora "),l.a.createElement("th",{scope:"col"}," Plano "),l.a.createElement("th",{scope:"col"}," Abrang\xeancia "),l.a.createElement("th",{scope:"col"}," Segmenta\xe7\xe3o "))),l.a.createElement("tbody",null,t))},p=[{value:"RO",label:"Rond\xf4nia"},{value:"AC",label:"Acre"},{value:"AM",label:"Amazonas"},{value:"RR",label:"Roraima"},{value:"PA",label:"Par\xe1"},{value:"AP",label:"Amap\xe1"},{value:"TO",label:"Tocantins"},{value:"MA",label:"Maranh\xe3o"},{value:"PI",label:"Piau\xed"},{value:"CE",label:"Cear\xe1"},{value:"RN",label:"Rio Grande do Norte"},{value:"PB",label:"Para\xedba"},{value:"PE",label:"Pernambuco"},{value:"AL",label:"Alagoas"},{value:"SE",label:"Sergipe"},{value:"BA",label:"Bahia"},{value:"MG",label:"Minas Gerais"},{value:"ES",label:"Esp\xedrito Santo"},{value:"RJ",label:"Rio de Janeiro"},{value:"SP",label:"S\xe3o Paulo"},{value:"PR",label:"Paran\xe1"},{value:"SC",label:"Santa Catarina"},{value:"RS",label:"Rio Grande do Sul"},{value:"MS",label:"Mato Grosso do Sul"},{value:"MT",label:"Mato Grosso"},{value:"GO",label:"Goi\xe1s"},{value:"DF",label:"Distrito Federal"}],g=t(24),O=t(29),j=t(258),S=t(148),y=t(257),C=t(133),k=function(e){return l.a.createElement("div",null,l.a.createElement("ul",null,e&&Object(C.isArray)(e)&&e.map((function(e,a){return l.a.createElement("li",{key:a},e)}))))},B=function(e){var a=e.children,t=e.showValidationErrors,n=e.icon,r=void 0===n?l.a.createElement(j.a,null):n,o=e.disabled,c=Object(O.a)(e,["children","showValidationErrors","icon","disabled"]),i=function(e,t,n){return l.a.createElement(S.a,Object.assign({loading:e,disabled:o||!t||e||Object.values(n).every((function(e){return null===e||void 0===e})),type:"primary",htmlType:"submit",icon:r},c),a)};return l.a.createElement(g.a,null,(function(e){var a=e.form,n=a.isSubmitting,r=a.values,o=a.isValid,c=a.errors;return l.a.createElement(l.a.Fragment,null,t&&!o?l.a.createElement(y.a,{title:"Erros de valida\xe7\xe3o",content:k(Object.values(c)),trigger:"hover"},i(n,o,r)):i(n,o,r))}))},P=t(253),A=function(e){var a=Object.assign({},e);return l.a.createElement(g.a,null,(function(e){var t=e.form,n=t.handleReset,r=t.handleSubmit;return l.a.createElement(P.a,Object.assign({onReset:n,onSubmitCapture:r},a))}))};A.Item=function(e){var a=e.name,t=e.showValidateSuccess,n=e.showInitialErrorAfterTouched,r=void 0!==n&&n,o=e.children,c=e.validate,i=Object(O.a)(e,["name","showValidateSuccess","showInitialErrorAfterTouched","children","validate"]);return l.a.createElement(g.a,{name:a,validate:c},(function(e){var n=e.form,c=n.errors,u=void 0===c?{}:c,m=n.touched,s=void 0===m?{}:m,d=n.initialErrors,v=void 0===d?{}:d,b=Object(g.c)(u,a,void 0),E=Object(g.c)(v,a,void 0),f=Object(g.c)(s,a,!1);Array.isArray(f)&&(f=f.reduce((function(e,a){return e||a}),!1));var h=void 0!==b&&f,p=void 0!==E,O=!b&&f,j=h||p&&(!f||r);return l.a.createElement(P.a.Item,Object.assign({validateStatus:h||p&&!f?"error":O&&t?"success":void 0,hasFeedback:O,help:j&&l.a.createElement(l.a.Fragment,null,h&&l.a.createElement("li",null,b),p&&(!f||r)&&l.a.createElement("li",null,E))},i),o)}))};var F=A,N=t(255),w=function(e){var a=e.name,t=e.validate,n=e.children,r=e.onChange,o=e.onBlur,c=Object(O.a)(e,["name","validate","children","onChange","onBlur"]);return l.a.createElement(g.a,{name:a,validate:t},(function(e){var t=e.field.value,i=e.form,u=i.setFieldValue,m=i.setFieldTouched;return l.a.createElement(N.a,Object.assign({onChange:function(e,t){u(a,e),setTimeout((function(){m(a)}),300),r&&r(e,t)},onBlur:function(e){m(a),o&&o(e)},value:t},c),n)}))};w.renderOptions=function(e){return e.map((function(e,a){var t=e.label,n=Object(O.a)(e,["label"]);return l.a.createElement(N.a.Option,Object.assign({key:"select-option-".concat(a)},n),t)}))},w.Option=N.a.Option,w.OptGroup=N.a.OptGroup;var R=w,T=t(256),G=t(76),I=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(O.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?G.a:T.a;return l.a.createElement(g.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,m=t.onChange,s=t.onBlur;return l.a.createElement(i,Object.assign({name:a,value:u,mask:n,onChange:function(e){m(e),r&&r(e)},onBlur:function(e){s(e),o&&o(e)}},c))}))};I.Search=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(O.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?G.a:T.a;return l.a.createElement(g.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,m=t.onChange,s=t.onBlur;return l.a.createElement(i.Search,Object.assign({name:a,value:u,mask:n,onChange:function(e){m(e),r&&r(e)},onBlur:function(e){s(e),o&&o(e)}},c))}))},I.Password=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(O.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?G.a:T.a;return l.a.createElement(g.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,m=t.onChange,s=t.onBlur;return l.a.createElement(i.Password,Object.assign({name:a,value:u,mask:n,onChange:function(e){m(e),r&&r(e)},onBlur:function(e){s(e),o&&o(e)}},c))}))},I.TextArea=function(e){var a=e.name,t=e.validate,n=e.mask,r=e.onChange,o=e.onBlur,c=Object(O.a)(e,["name","validate","mask","onChange","onBlur"]),i=n?G.a:T.a;return l.a.createElement(g.a,{name:a,validate:t},(function(e){var t=e.field,u=t.value,m=t.onChange,s=t.onBlur;return l.a.createElement(i.TextArea,Object.assign({name:a,value:u,mask:n,onChange:function(e){m(e),r&&r(e)},onBlur:function(e){s(e),o&&o(e)}},c))}))};var M=I,x="http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com",V=s.a,z=function(){var e=Object(n.useState)(),a=Object(u.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(),c=Object(u.a)(o,2),i=c[0],s=c[1],b=Object(n.useState)([]),O=Object(u.a)(b,2),j=O[0],S=O[1],y=Object(n.useState)(""),C=Object(u.a)(y,2),k=C[0],P=C[1],A=Object(n.useState)([]),N=Object(u.a)(A,2),w=N[0],T=N[1],G=Object(n.useState)([]),I=Object(u.a)(G,2),z=I[0],D=I[1],J=Object(n.useState)(),L=Object(u.a)(J,2),_=L[0],q=L[1],H=function(){setTimeout((function(){void 0===k&&null===k||E.a.get("".concat(x,"/profissao/").concat(j,"/").concat(k,"?").concat("api-key=ddd70c32-fc98-4618-b494-a9698f824353"),{headers:{"Content-Type":"application/json"}}).then((function(e){r(e.data)})).catch((function(e){console.log(e.response)}))}),1e3)};return Object(n.useEffect)((function(){null!==j&&""!==k&&H()}),[j,k]),Object(n.useEffect)((function(){console.log(k),null!==j&&""!==k&&null!==w&&void 0!==w&&E.a.get("".concat(x,"/entidade/").concat(w,"/").concat(j,"/").concat(k,"?").concat("api-key=4b94dba2-5524-4632-939b-92df1c50a645"),{headers:{"Content-Type":"application/json"}}).then((function(e){s(e.data)})).catch((function(e){console.log(e.response)}))}),[w]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Pesquisa por planos dispon\xedveis"},l.a.createElement(d.a,{gutter:[20,20]},l.a.createElement(g.b,{initialValues:{},validateOnMount:!0,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;!function(e){E.a.post("".concat(x,"/plano?").concat("api-key=261fd4d0-fd9f-468a-afa9-f5a89ed3701c"),{entidade:e.entidade,uf:e.uf,cidade:e.cidade,datanascimento:[z]},{headers:{"Content-Type":"application/json"}}).then((function(e){var a;q(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.planos)})).catch((function(e){console.log(e.response)}))}(e),t(!1),n()}},l.a.createElement(F,{layout:"vertical",style:{width:"100%"}},l.a.createElement(d.a,{gutter:[20,20]},l.a.createElement(v.a,{md:12},l.a.createElement(F.Item,{name:"uf",label:"Estado"},l.a.createElement(R,{name:"uf",placeholder:"Selecione o estado",style:{width:"100%"},onSelect:function(e){return S(e)}},p.map((function(e,a){return l.a.createElement(R.Option,{key:a,value:e.value},e.label)}))))),l.a.createElement(v.a,{md:12},l.a.createElement(F.Item,{name:"cidade",label:"Cidade"},l.a.createElement(M.Search,{name:"cidade",enterButton:!0,placeholder:"Digite a cidade",onSearch:function(e){H(),P(e)}})))),l.a.createElement(d.a,{gutter:[20,20]},l.a.createElement(v.a,{md:12},l.a.createElement(F.Item,{name:"profissao",label:"Profiss\xe3o"},l.a.createElement(R,{name:"profissao",placeholder:"Selecione a profiss\xe3o",style:{width:"100%"},onSelect:function(e){return T(e)}},null===t||void 0===t?void 0:t.map((function(e,a){return l.a.createElement(R.Option,{key:a,value:e.profissao},e.profissao)}))))),l.a.createElement(v.a,{md:12},l.a.createElement(F.Item,{name:"entidade",label:"Entidade"},l.a.createElement(R,{name:"entidade",placeholder:"Selecione a entidade",style:{width:"100%"}},null===i||void 0===i?void 0:i.map((function(e,a){return l.a.createElement(R.Option,{key:a,value:e.NomeFantasia},e.RazaoSocial)})))))),l.a.createElement(d.a,null,l.a.createElement(v.a,{md:12},l.a.createElement(f,{htmlFor:"datanascimento",label:"Data de nascimento*"},l.a.createElement("input",{defaultValue:z,type:"date",className:"form-control",id:"inputNome","aria-describedby":"emailHelp",placeholder:"Digite a longitude",onChange:function(e){return D(e.target.value)}})))),l.a.createElement(v.a,{md:24,justify:"end"},l.a.createElement(B,{showValidationErrors:!0,icon:null},"Enviar")))))),l.a.createElement(l.a.Fragment,null,(null===_||void 0===_?void 0:_.length)>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null,l.a.createElement(V,{style:{fontSize:"24px"}}," Lista de planos dispon\xedveis")),l.a.createElement(h,{healthPlansList:_}))))},D=function(){return l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",component:z,exact:!0})))},J=(t(246),function(e){var a=e.href,t=e.label,n=Object(O.a)(e,["href","label"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{onClick:n.onClick,className:"nav-link",href:a,style:{fontSize:"20px"}},t)))}),L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navbar navbar-expand-sm fixed-top navbar-dark bg-primary"},l.a.createElement("div",{className:"container",style:{margin:0}},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(J,{href:"#/health-plain",label:"Planos de sa\xfade"}))))))},_=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,null),l.a.createElement("div",{className:"container"},l.a.createElement(D,null)))};t(247);o.a.render(l.a.createElement(_,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.ea03a566.chunk.js.map